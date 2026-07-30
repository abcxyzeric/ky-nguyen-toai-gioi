import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const base = 'F:/mvu card/card39/card39dich';
const regexDir = `${base}/regex_scripts`;
const entriesDir = `${base}/entries`;

const scriptNames = new Map([
  ['00', 'Mẫu thanh trạng thái ERA'],
  ['01', 'Định dạng văn bản'],
  ['02', 'Trang chủ'],
  ['03', 'Chèn CG'],
  ['04', 'Ẩn ảnh CG'],
  ['05', 'Ẩn dữ liệu ERA'],
  ['06', 'Ẩn metadata ERA'],
  ['07', 'Ẩn khối suy nghĩ ERA'],
]);

function readUtf8(file) {
  return fs.readFileSync(file, 'utf8');
}

function writeJson(file, value) {
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function sha256(text) {
  return crypto.createHash('sha256').update(text, 'utf8').digest('hex');
}

function hasCjk(text) {
  return /[\u3400-\u9fff]/.test(String(text ?? ''));
}

function indexedFiles(dir, ext) {
  return fs.readdirSync(dir)
    .filter(file => file.endsWith(ext) && /^\d+_/.test(file))
    .sort((a, b) => Number(a.slice(0, 3)) - Number(b.slice(0, 3)));
}

const regexScripts = [];
for (const file of indexedFiles(regexDir, '.json')) {
  const index = Number(file.slice(0, 2));
  const stem = file.replace(/\.json$/u, '');
  const prefix = file.slice(0, 2);
  const jsonPath = path.join(regexDir, file);
  const findPath = path.join(regexDir, `${stem}.find.txt`);
  const replacePath = path.join(regexDir, `${stem}.replace.html`);
  const item = JSON.parse(readUtf8(jsonPath));

  item.scriptName = scriptNames.get(prefix) || item.scriptName;
  if (fs.existsSync(findPath)) item.findRegex = readUtf8(findPath).replace(/\r?\n$/u, '');
  if (fs.existsSync(replacePath)) item.replaceString = readUtf8(replacePath);

  writeJson(jsonPath, item);
  regexScripts[index] = item;
}

const compactRegex = regexScripts.filter(Boolean);
writeJson(`${base}/regex_scripts.json`, compactRegex);
writeJson(`${base}/regex_manifest.json`, compactRegex.map((item, index) => ({
  index,
  id: item.id,
  scriptName: item.scriptName,
  disabled: item.disabled,
  findRegex: item.findRegex,
  replaceLength: String(item.replaceString || '').length,
  replaceSha256: sha256(String(item.replaceString || '')),
  placement: item.placement,
  markdownOnly: item.markdownOnly,
  promptOnly: item.promptOnly,
})));

const entryFiles = indexedFiles(entriesDir, '.json');
const entries = entryFiles.map(file => JSON.parse(readUtf8(path.join(entriesDir, file))));
writeJson(`${base}/worldbook_entries.json`, entries);
writeJson(`${base}/entries_manifest.json`, entries.map((entry, index) => {
  const keys = Array.isArray(entry.keys) ? entry.keys : [];
  const secondary = Array.isArray(entry.secondary_keys) ? entry.secondary_keys : [];
  return {
    index,
    comment: entry.comment || '',
    keys,
    secondary_keys: secondary,
    cjk_keys: keys.concat(secondary).filter(hasCjk),
    constant: entry.constant,
    selective: entry.selective,
    enabled: entry.enabled,
    position: entry.position,
    contentLength: String(entry.content || '').length,
    contentSha256: sha256(String(entry.content || '')),
  };
}));

const cardPath = `${base}/sillytavern_chara.json`;
const card = JSON.parse(readUtf8(cardPath));
const firstMes = readUtf8(`${base}/first_mes.txt`);
const description = readUtf8(`${base}/description.txt`);
const personality = readUtf8(`${base}/personality.txt`);
const scenario = readUtf8(`${base}/scenario.txt`);
const mesExample = readUtf8(`${base}/mes_example.txt`);
const creatorNotes = readUtf8(`${base}/creator_notes.md`);

card.name = card.name || '_Kỷ Nguyên Toái Giới';
card.description = description;
card.personality = personality;
card.scenario = scenario;
card.first_mes = firstMes;
card.mes_example = mesExample;
card.creatorcomment = creatorNotes;

card.data ||= {};
card.data.name = card.data.name || card.name;
card.data.description = description;
card.data.personality = personality;
card.data.scenario = scenario;
card.data.first_mes = firstMes;
card.data.mes_example = mesExample;
card.data.creator_notes = creatorNotes;
card.data.extensions ||= {};
card.data.extensions.regex_scripts = compactRegex;
card.data.character_book ||= {};
card.data.character_book.entries = entries;

writeJson(cardPath, card);
writeJson(`${base}/sillytavern_ccv3.json`, card);
writeJson(`${base}/card_summary.json`, {
  label: 'vi',
  name: card.name,
  dataName: card.data.name,
  spec: card.spec,
  spec_version: card.spec_version,
  tags: card.tags || [],
  dataTags: card.data.tags || [],
  first_mes_length: firstMes.length,
  alternate_greetings_count: Array.isArray(card.data.alternate_greetings) ? card.data.alternate_greetings.length : 0,
  group_only_greetings_count: Array.isArray(card.data.group_only_greetings) ? card.data.group_only_greetings.length : 0,
  entry_count: entries.length,
  regex_count: compactRegex.length,
  tavern_helper_script_count: Array.isArray(card.data.extensions.tavern_helper?.scripts) ? card.data.extensions.tavern_helper.scripts.length : 0,
  has_character_book: Boolean(card.data.character_book),
  has_tavern_helper: Boolean(card.data.extensions.tavern_helper),
});

console.log(JSON.stringify({
  regex_count: compactRegex.length,
  entry_count: entries.length,
  first_mes_length: firstMes.length,
  card: cardPath,
}, null, 2));
