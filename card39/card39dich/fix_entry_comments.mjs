import fs from 'node:fs';
import path from 'node:path';

const dir = 'F:/mvu card/card39/card39dich/entries';

const fixes = {
  201: { comment: 'Ảo Tưởng Hương_Chương 1', stem: '201_Ảo Tưởng Hương_Chương 1' },
  202: { comment: 'Độ khó Dễ', stem: '202_Độ khó Dễ', syncContentFromTxt: true },
  205: { comment: 'Ảo Tưởng Hương_Chương 4', stem: '205_Ảo Tưởng Hương_Chương 4' },
  206: { comment: 'Ảo Tưởng Hương_Chương 5', stem: '206_Ảo Tưởng Hương_Chương 5' },
};

const emptySpareEntries = [
  { comment: 'Thanh Minh_Chương khác', stem: '331_Thanh Minh_Chương khác' },
  { comment: 'Eldora_Chương khác', stem: '332_Eldora_Chương khác' },
  { comment: 'Neon 2187_Chương khác', stem: '333_Neon 2187_Chương khác' },
  { comment: 'Thủy Đô_Chương khác', stem: '334_Thủy Đô_Chương khác' },
  { comment: 'Ảo Tưởng Hương_Chương khác', stem: '335_Ảo Tưởng Hương_Chương khác' },
];

function findByPrefix(prefix, ext) {
  return fs.readdirSync(dir).find(name => name.startsWith(`${prefix}_`) && name.endsWith(ext));
}

function renameInsideDir(oldName, newName) {
  if (oldName === newName) return;
  const oldPath = path.join(dir, oldName);
  const newPath = path.join(dir, newName);
  if (fs.existsSync(newPath)) throw new Error(`Target exists: ${newName}`);
  fs.renameSync(oldPath, newPath);
}

function writeEmptyEntry(stem, comment, id) {
  const txtName = `${stem}.txt`;
  const jsonName = `${stem}.json`;
  const txtPath = path.join(dir, txtName);
  const jsonPath = path.join(dir, jsonName);
  if (!fs.existsSync(txtPath)) fs.writeFileSync(txtPath, '', 'utf8');
  const entry = {
    id,
    keys: [],
    secondary_keys: [],
    comment,
    content: '',
    constant: false,
    selective: true,
    insertion_order: 9999,
    enabled: false,
    position: 'before_char',
    use_regex: true,
    extensions: {
      position: 0,
      exclude_recursion: true,
      display_index: id,
      probability: 100,
      useProbability: true,
      depth: 0,
      selectiveLogic: 0,
      outlet_name: '',
      group: '',
      group_override: false,
      group_weight: 100,
      prevent_recursion: true,
      delay_until_recursion: false,
      scan_depth: null,
      match_whole_words: null,
      use_group_scoring: false,
      case_sensitive: null,
      automation_id: '',
      role: 0,
      vectorized: false,
      sticky: 0,
      cooldown: 0,
      delay: 0,
      match_persona_description: false,
      match_character_description: false,
      match_character_personality: false,
      match_character_depth_prompt: false,
      match_scenario: false,
      match_creator_notes: false,
      triggers: [],
      ignore_budget: false,
    },
  };
  fs.writeFileSync(jsonPath, `${JSON.stringify(entry, null, 2)}\n`, 'utf8');
  return { txt: txtName, json: jsonName };
}

const results = [];
for (const [prefix, fix] of Object.entries(fixes)) {
  const txtName = findByPrefix(prefix, '.txt');
  const jsonName = findByPrefix(prefix, '.json');
  if (!txtName || !jsonName) throw new Error(`Missing files for ${prefix}`);

  const jsonPath = path.join(dir, jsonName);
  const entry = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  entry.comment = fix.comment;
  if (fix.syncContentFromTxt) {
    entry.content = fs.readFileSync(path.join(dir, txtName), 'utf8');
  }
  fs.writeFileSync(jsonPath, `${JSON.stringify(entry, null, 2)}\n`, 'utf8');

  const newTxt = `${fix.stem}.txt`;
  const newJson = `${fix.stem}.json`;
  renameInsideDir(txtName, newTxt);
  renameInsideDir(jsonName, newJson);
  results.push({ prefix, comment: fix.comment, txt: newTxt, json: newJson });
}

for (let i = 0; i < emptySpareEntries.length; i++) {
  const { comment, stem } = emptySpareEntries[i];
  const id = 331 + i;
  writeEmptyEntry(stem, comment, id);
  results.push({ prefix: String(id), comment, txt: `${stem}.txt`, json: `${stem}.json` });
}

console.log(JSON.stringify(results, null, 2));
