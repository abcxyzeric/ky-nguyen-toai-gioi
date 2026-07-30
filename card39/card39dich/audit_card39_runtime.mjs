import fs from 'node:fs';
import path from 'node:path';

const base = 'F:/mvu card/card39/card39dich';

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function walk(dir) {
  const output = [];
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) output.push(...walk(file));
    else output.push(file);
  }
  return output;
}

function rel(file) {
  return file.slice(base.length + 1).replaceAll('\\', '/');
}

function parseRootTable() {
  const text = read(path.join(base, 'biencard.md'));
  const section = text.match(/## Root biến chính\s+([\s\S]*?)(?:\n## |\s*$)/u)?.[1] || '';
  const roots = new Set();
  for (const line of section.split(/\r?\n/u)) {
    const match = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/u);
    if (!match) continue;
    const root = match[2].trim();
    if (root && root !== 'Key Việt chuẩn' && !root.includes('---')) roots.add(root);
  }
  return roots;
}

const allowedRoots = parseRootTable();
const allowedWorlds = new Set([
  'Thanh Minh',
  'Eldora',
  'Neon 2187',
  'Thủy Đô',
  'Ảo Tưởng Hương',
  'Điểm Giao Thoa Hỗn Độn',
  'Kỷ Nguyên Zero',
  'Tận Cùng Cán Cân',
]);

const report = {
  json: { count: 0, errors: [] },
  bom: [],
  mojibake: [],
  regexFence: [],
  scriptSyntax: { checked: 0, errors: [] },
  variableTags: {
    blocks: 0,
    parsed: 0,
    templates: 0,
    badJson: [],
    unknownRoots: [],
    roots: {},
  },
  varCalls: { calls: 0, badRoots: [], badWorlds: [], paths: [] },
  getwi: { calls: 0, missing: [] },
  oldRuntimeRoots: [],
  png: {},
};
const mojibakeRe = /\u00c3|\u00e1\u00ba|\u00e1\u00bb|\u00c4|\u00c6|\u00d0|\ufffd/u;

const allFiles = walk(base);
const jsonFiles = allFiles.filter(file => file.endsWith('.json'));
const textFiles = allFiles.filter(file => /\.(json|txt|html|md|mjs|js)$/iu.test(file));

for (const file of jsonFiles) {
  try {
    JSON.parse(read(file));
    report.json.count += 1;
  } catch (error) {
    report.json.errors.push({ file: rel(file), error: error.message });
  }
}

for (const file of textFiles) {
  const text = read(file);
  if (text.charCodeAt(0) === 0xfeff) report.bom.push(rel(file));
  if (mojibakeRe.test(text)) report.mojibake.push(rel(file));
}

for (const file of allFiles.filter(file => file.includes(`${path.sep}regex_scripts${path.sep}`) && file.endsWith('.replace.html'))) {
  const text = read(file);
  report.regexFence.push({
    file: rel(file),
    starts: text.slice(0, 8),
    leadingBom: text.charCodeAt(0) === 0xfeff,
    startsWithFence: text.startsWith('```'),
  });

  for (const match of text.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/giu)) {
    try {
      new Function(match[1]);
      report.scriptSyntax.checked += 1;
    } catch (error) {
      report.scriptSyntax.errors.push({ file: rel(file), error: error.message });
    }
  }
}

function countRoot(root) {
  report.variableTags.roots[root] = (report.variableTags.roots[root] || 0) + 1;
}

const entries = JSON.parse(read(path.join(base, 'worldbook_entries.json')));
const variableSources = [
  { name: 'first_mes.txt', text: read(path.join(base, 'first_mes.txt')) },
  ...entries.map((entry, index) => ({
    name: `worldbook_entries.json#${String(index).padStart(3, '0')}#${entry.comment || ''}`,
    text: String(entry.content || ''),
  })),
];

for (const source of variableSources) {
  const tagRe = /^[ \t]*<(VariableInsert|VariableEdit|VariableDelete)>[ \t]*\r?\n([\s\S]*?)\r?\n[ \t]*<\/\1>[ \t]*$/gmu;
  for (const match of source.text.matchAll(tagRe)) {
    report.variableTags.blocks += 1;
    const kind = match[1];
    const body = match[2].trim();
    if (body.startsWith('{Biến số') || body.startsWith('{Insert') || body.startsWith('{Edit') || body.startsWith('{Delete')) {
      report.variableTags.templates += 1;
      continue;
    }

    let parsed;
    try {
      parsed = JSON.parse(body);
      report.variableTags.parsed += 1;
    } catch (error) {
      report.variableTags.badJson.push({
        source: source.name,
        kind,
        error: error.message,
        snippet: body.slice(0, 140),
      });
      continue;
    }

    for (const root of Object.keys(parsed)) {
      countRoot(root);
      if (!allowedRoots.has(root)) {
        report.variableTags.unknownRoots.push({ source: source.name, kind, root });
      }
    }
  }
}

const callSources = [
  ...entries.map(entry => ({ name: `entry#${entry.comment || ''}`, text: String(entry.content || '') })),
];

for (const file of allFiles.filter(file => /\.(js|html|txt|json)$/iu.test(file))) {
  if (file.includes(`${path.sep}tavern_helper_scripts${path.sep}00_ERA`)) continue;
  if (file.includes(`${path.sep}entries${path.sep}`) && file.endsWith('.json')) continue;
  if (file.endsWith('worldbook_entries.json')) continue;
  callSources.push({ name: rel(file), text: read(file) });
}

const callRe = /\b(getvar|setvar|eraGet|eraGetDef|eraSet)\s*\(\s*(['"])(.*?)\2/gu;
for (const source of callSources) {
  for (const match of source.text.matchAll(callRe)) {
    const fn = match[1];
    const arg = match[3];
    if (!arg.startsWith('stat_data.')) continue;
    report.varCalls.calls += 1;
    const rest = arg.slice('stat_data.'.length);
    const [root, world] = rest.split('.');
    const item = { source: source.name, fn, path: arg };
    report.varCalls.paths.push(item);
    if (!allowedRoots.has(root)) report.varCalls.badRoots.push({ ...item, root });
    if (root === 'Hệ thống đại thế giới' && world && !allowedWorlds.has(world)) {
      report.varCalls.badWorlds.push({ ...item, world });
    }
  }
}

const comments = new Set(entries.map(entry => String(entry.comment || '')));
const getwiRe = /getwi\s*\(\s*[^,]+,\s*(['"])(.*?)\1/gu;
for (const source of callSources) {
  for (const match of source.text.matchAll(getwiRe)) {
    report.getwi.calls += 1;
    const key = match[2];
    if (!comments.has(key)) report.getwi.missing.push({ source: source.name, key });
  }
}

const oldRoots = [
  '\u4e16\u754c\u4fe1\u606f',
  '\u4e3b\u89d2\u7cfb\u7edf',
  '\u521b\u4e16\u795e\u8272\u75de\u6280\u80fd',
  '\u9644\u8fd1\u89d2\u8272',
  '\u9053\u5177\u7cfb\u7edf',
  '\u5267\u60c5\u652f\u7ebf\u7cfb\u7edf',
  '\u7ae0\u8282\u63a8\u8fdb\u6761\u4ef6',
  '\u5267\u60c5\u9009\u9879',
  '\u5927\u4e16\u754c\u7cfb\u7edf',
  '\u5a92\u4f53\u7cfb\u7edf',
  '\u6210\u5c31\u7cfb\u7edf',
];
const oldContextRe = new RegExp(`(?:stat_data\\.|getvar\\(|setvar\\(|eraGet|eraSet|VariableInsert|VariableEdit|VariableDelete)[\\s\\S]{0,160}(${oldRoots.join('|')})`, 'gu');
for (const source of callSources) {
  for (const match of source.text.matchAll(oldContextRe)) {
    report.oldRuntimeRoots.push({ source: source.name, root: match[1], snippet: match[0].slice(0, 220) });
  }
}

function parsePngChunks(file) {
  const bytes = fs.readFileSync(file);
  const chunks = [];
  let offset = 8;
  while (offset + 8 <= bytes.length) {
    const length = bytes.readUInt32BE(offset);
    offset += 4;
    const type = bytes.subarray(offset, offset + 4).toString('latin1');
    offset += 4;
    const data = bytes.subarray(offset, offset + length);
    offset += length;
    offset += 4;
    chunks.push({ type, length, data });
    if (type === 'IEND') break;
  }
  return { signature: bytes.subarray(0, 8).toString('hex'), chunks };
}

const pngFile = allFiles.find(file => file.endsWith('_vi.png'));
if (pngFile) {
  const png = parsePngChunks(pngFile);
  const textChunks = {};
  for (const chunk of png.chunks) {
    if (chunk.type !== 'tEXt') continue;
    const nul = chunk.data.indexOf(0);
    if (nul < 0) continue;
    const key = chunk.data.subarray(0, nul).toString('latin1');
    if (key === 'chara' || key === 'ccv3') textChunks[key] = chunk.data.subarray(nul + 1).toString('latin1');
  }
  const charaText = Buffer.from(textChunks.chara || '', 'base64').toString('utf8');
  const ccv3Text = Buffer.from(textChunks.ccv3 || '', 'base64').toString('utf8');
  let parsedChara = null;
  let parsedCard = null;
  try {
    parsedChara = JSON.parse(charaText);
    parsedCard = JSON.parse(read(path.join(base, 'sillytavern_chara.json')));
  } catch {
    parsedChara = null;
    parsedCard = null;
  }
  report.png = {
    file: rel(pngFile),
    signature: png.signature,
    hasChara: Boolean(textChunks.chara),
    hasCcv3: Boolean(textChunks.ccv3),
    charaBytes: Buffer.byteLength(charaText, 'utf8'),
    ccv3Bytes: Buffer.byteLength(ccv3Text, 'utf8'),
    equalPayloads: charaText === ccv3Text,
    charaJson: (() => {
      try {
        JSON.parse(charaText);
        return true;
      } catch {
        return false;
      }
    })(),
    matchesCardJson: charaText.trim() === read(path.join(base, 'sillytavern_chara.json')).trim(),
    matchesCardObject: Boolean(parsedChara && parsedCard && JSON.stringify(parsedChara) === JSON.stringify(parsedCard)),
  };
}

console.log(JSON.stringify(report, null, 2));
