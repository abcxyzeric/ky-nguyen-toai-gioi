import fs from 'node:fs';
import vm from 'node:vm';

const base = 'F:/mvu card/card39';
const target = `${base}/card39dich/regex_scripts/01_Định dạng văn bản.replace.html`;

let s = fs.readFileSync(target, 'utf8');
const orig = JSON.parse(fs.readFileSync(`${base}/entries_manifest.json`, 'utf8'));
const vi = JSON.parse(fs.readFileSync(`${base}/card39dich/entries_manifest.json`, 'utf8'));
const byIdx = new Map(vi.map(e => [e.index, e]));
const hasCjk = x => /[\u3400-\u9fff]/.test(String(x || ''));
const stripDecor = x => String(x || '')
  .replace(/[\u{1F300}-\u{1FAFF}\uFE0F]/gu, '')
  .replace(/[()（）]/g, '  ')
  .replace(/\s+/g, ' ')
  .trim();
const main = x => stripDecor(x).split(/\s{2,}/)[0].trim();

function findLiteralRange(src, name, open, close) {
  const at = src.indexOf(name);
  if (at < 0) throw new Error(`missing ${name}`);
  const eq = src.indexOf('=', at);
  const start = src.indexOf(open, eq);
  if (start < 0) throw new Error(`missing literal start for ${name}`);
  let depth = 0, quote = null, esc = false;
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (quote) {
      if (esc) { esc = false; continue; }
      if (ch === '\\') { esc = true; continue; }
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue; }
    if (ch === open) depth++;
    else if (ch === close) {
      depth--;
      if (depth === 0) return { start, end: i + 1, text: src.slice(start, i + 1) };
    }
  }
  throw new Error(`unterminated ${name}`);
}

function extractObjectLiteral(src, name) {
  return findLiteralRange(src, name, '{', '}').text;
}

function extractArrayLiteral(src, name) {
  return findLiteralRange(src, name, '[', ']').text;
}

const worldObj = vm.runInNewContext(`(${extractObjectLiteral(s, 'const WORLD_MAP_PLACES')})`);
const sfwObj = vm.runInNewContext(`(${extractObjectLiteral(s, 'const _SFW_COMMON')})`);
const nsfwObj = vm.runInNewContext(`(${extractObjectLiteral(s, 'const _NSFW_COMMON')})`);
const charNames = new Set(vm.runInNewContext(`(${extractArrayLiteral(s, 'const _ALL_CHAR_NAMES')})`));
const worldKeys = Object.keys(worldObj);
const mapPlaceBases = new Set(Object.values(worldObj).flat().map(x => String(x).replace(/\d+$/, '')));
const alias = {};
function add(k, v) {
  k = stripDecor(k);
  v = stripDecor(v);
  if (k && v && k !== v) alias[k] = v;
}

add('Bản đồ', '地图');
add('Ban do', '地图');
const worldVi = [
  ['Thanh Minh'],
  ['Eldora', 'Idola'],
  ['Điểm Giao Thoa Hỗn Độn', 'Diem Giao Thoa Hon Don'],
  ['Ảo Tưởng Hương', 'Ao Tuong Huong'],
  ['Neon 2187'],
  ['Thủy Đô', 'Thủy Chi Đô', 'Thuy Do', 'Thuy Chi Do'],
];
worldKeys.forEach((w, i) => {
  for (const n of (worldVi[i] || [])) add(n, w);
});

const sfwVi = ['vui vẻ', 'mỉm cười', 'buồn bã', 'nghiêm túc', 'xấu hổ', 'tức giận', 'chiến đấu', 'bất lực', 'bối rối', 'ngượng ngùng', 'ngạc nhiên'];
Object.keys(sfwObj).forEach((cn, i) => add(sfwVi[i], cn));
const nsfwVi = ['bế ngược kiểu bento', 'cạ đùi', 'vạch lồn', 'dùng chân', 'hôn môi', 'hậu môn', 'cưỡi ngược', 'sau cực khoái', 'đằng sau', 'liếm vú', 'ông lão đẩy xe', 'móc cua', 'cưỡi ngựa', 'ngồi tòa sen', 'nằm nghiêng nâng chân', 'đứng', 'nằm úp đằng sau', 'kiểu Amazon', 'máy đóng cọc', 'liếm lồn', 'liếm chân', 'truyền giáo', 'kẹp vú', 'tư thế 69', 'ép hai chân lên ngực', 'bú', 'đứng xoạc chân', 'liếm lỗ đít', 'bế kiểu bento'];
Object.keys(nsfwObj).forEach((cn, i) => add(nsfwVi[i], cn));

for (const o of orig) {
  const v = byIdx.get(o.index);
  if (!v || !hasCjk(o.comment)) continue;
  const oMain = main(o.comment);
  const isChar = charNames.has(oMain);
  const isMapPlace = mapPlaceBases.has(oMain) || [...mapPlaceBases].some(p => p.includes(oMain) || oMain.includes(p));
  if (!isChar && !isMapPlace) continue;
  const vClean = stripDecor(v.comment);
  const vMain = vClean.replace(/\s+(Thanh Minh|Chaldea|Eldora|Idola|Ảo Tưởng Hương|Neon 2187|Khu Vườn Tinh Khung|Hoa viên Tinh Khung|Vườn Tinh Khung)$/u, '').trim();
  add(vClean, oMain);
  add(vMain, oMain);
}

const aliasEntries = Object.entries(alias).sort((a, b) => b[0].length - a[0].length || a[0].localeCompare(b[0]));
const aliasObject =
`    const PATH_ALIAS_TO_ASSET = Object.freeze({
${aliasEntries.map(([k, v]) => `      ${JSON.stringify(k)}: ${JSON.stringify(v)}`).join(',\n')}
    });
`;
const helper =
`
${aliasObject}    const ASSET_TO_DISPLAY = Object.freeze(Object.entries(PATH_ALIAS_TO_ASSET).reduce((o, [display, asset]) => { if (!o[asset]) o[asset] = display; return o; }, {}));
    function _cleanAssetToken(v) {
      return safeDecode(String(v || ''))
        .replace(/\\.webp$/i, '')
        .replace(/\\{\\{\\s*roll\\s*:\\s*d\\d+\\s*\\}\\}/ig, '')
        .replace(/^\\/+|\\/+$/g, '')
        .trim()
        .normalize('NFC');
    }
    function _aliasKey(v) { return _cleanAssetToken(v).replace(/_/g, ' ').replace(/\\s+/g, ' '); }
    function _assetAlias(v) {
      const key = _aliasKey(v);
      if (PATH_ALIAS_TO_ASSET[key]) return PATH_ALIAS_TO_ASSET[key];
      const compact = key.replace(/\\s/g, '').toLowerCase();
      const hit = Object.keys(PATH_ALIAS_TO_ASSET).find(k => k.replace(/\\s/g, '').toLowerCase() === compact);
      return hit ? PATH_ALIAS_TO_ASSET[hit] : _cleanAssetToken(v);
    }
    function _displayAssetName(v) {
      const base = _cleanAssetToken(v).replace(/\\d+$/, '');
      return ASSET_TO_DISPLAY[base] || ASSET_TO_DISPLAY[_cleanAssetToken(v)] || base;
    }
    function _escapeRe(v) { return String(v).replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&'); }
`;

s = s.replace('<html lang="zh-CN">', '<html lang="vi">');
s = s.replace(/<title>[^<]*Cosmos in the Rift<\/title>/, '<title>Biên niên sử Vực Nứt · Cosmos in the Rift</title>');
s = s.replace(/\/\*\s*═+\s*裂界编年史\s*·\s*深紫黑\+鎏金\s*主题\s*═+\s*\*\//, '/* ════════ Biên niên sử Vực Nứt · chủ đề tím đen sâu + vàng ánh kim ════════ */');
s = s.replace(/<div class="logo-text">[^<]*COSMOS IN THE RIFT<\/div>/, '<div class="logo-text">BIÊN NIÊN SỬ VỰC NỨT · COSMOS IN THE RIFT</div>');
s = s.replace(/onclick="adjustFontSize\(-1\)" title="[^"]+"/, 'onclick="adjustFontSize(-1)" title="Thu nhỏ chữ"');
s = s.replace(/onclick="adjustFontSize\(1\)"\s+title="[^"]+"/, 'onclick="adjustFontSize(1)"  title="Phóng to chữ"');
s = s.replace(/onclick="toggleTheme\(\)" id="themeBtn" title="[^"]+"/, 'onclick="toggleTheme()" id="themeBtn" title="Chuyển chế độ ban ngày"');
s = s.replace(/this\.alt='图片加载失败';this\.style\.opacity='0\.3';/g, "this.alt='Ảnh tải thất bại';this.style.opacity='0.3';");

s = s.replace(/    \/\* ════════ 地图图片配置[\s\S]*?匹配不到时回退到同世界随机地点 \*\//,
`    /* ════════ Cấu hình ảnh bản đồ (tách khỏi hệ CG SFW/NSFW) ════════
     * URL dùng key asset gốc: BASE_URL/bản_đồ/thế_giới/địa_điểm.webp
     * Tag người chơi/AI có thể dùng tiếng Việt: <img>Bản đồ/Thanh Minh/Hồng Ma Quán</img>
     * Runtime sẽ ánh xạ tên Việt về key asset gốc trước khi tải ảnh.
     * Nếu không khớp địa điểm, hệ thống chọn một địa điểm cùng thế giới để dự phòng. */`);
s = s.replace(/    \/\* 模糊匹配地点名[^\n]*\*\//, '    /* Khớp mờ tên địa điểm: chính xác -> chứa chuỗi -> từng cụm -> LCS -> chọn ngẫu nhiên trong cùng thế giới */');
s = s.replace(/      \/\* 1\. 精确匹配 \*\//g, '      /* 1. Khớp chính xác */');
s = s.replace(/      \/\* 2\. 包含匹配：[^\n]*\*\//g, '      /* 2. Khớp chứa chuỗi: gom mọi địa điểm có chứa từ khóa hoặc được từ khóa chứa */');
s = s.replace(/      \/\* 3\. 逐词匹配 \*\//g, '      /* 3. Khớp từng cụm */');
s = s.replace(/      \/\* 4\. LCS 模糊匹配：[^\n]*\*\//g, '      /* 4. Khớp mờ bằng LCS: gom các ứng viên đạt ngưỡng */');
s = s.replace(/      \/\* 5\. 全部失败 → 同世界随机地点 \*\//g, '      /* 5. Nếu đều thất bại -> chọn ngẫu nhiên trong cùng thế giới */');
s = s.replace(/    \/\* 处理文本中的地图标签[\s\S]*?匹配不到时回退到同世界随机地点 \*\//,
`    /* Xử lý tag bản đồ trong nội dung và thay bằng khung ảnh.
     * Nhận cả tag Việt \`Bản đồ/thế giới/địa_điểm\` và key gốc \`地图/世界/地点\`.
     * Một tag chỉ tạo một ảnh, nếu không khớp thì dùng ảnh dự phòng cùng thế giới. */`);
s = s.replace(/          \/\* 精确匹配不显示提示；模糊匹配和回退都显示 \*\//g, '          /* Khớp chính xác thì không hiện nhắc; khớp mờ hoặc dự phòng thì hiện nhắc */');
s = s.replace(/        \/\* A\. 处理 <img src="地图\/世界\/地点"> — src 属性中包含 地图\/ \*\//g, '        /* A. Xử lý tag bản đồ trong thuộc tính src */');
s = s.replace(/        \/\* B\. 处理文本节点中的 地图\/世界\/地点 — TreeWalker 遍历 \*\//g, '        /* B. Xử lý tag bản đồ còn nằm trong text node bằng TreeWalker */');
s = s.replace(/        \/\* 清理：删除无 src 的空 <img> 元素 \*\//g, '        /* Dọn các phần tử <img> rỗng không có src */');
s = s.replace(/      \}catch\(e\)\{ \/\* 地图处理出错时不影响 CG 流程 \*\/ \}/g, '      }catch(e){ /* Lỗi xử lý bản đồ không được làm ảnh hưởng luồng CG */ }');

{
  const mapRange = findLiteralRange(s, 'const WORLD_MAP_PLACES', '{', '}');
  const lcsAt = s.indexOf('function _lcsLen', mapRange.end);
  if (lcsAt < 0) throw new Error('missing function _lcsLen');
  s = `${s.slice(0, mapRange.end)}\n${helper}\n    /* Khớp mờ tên địa điểm: chính xác -> chứa chuỗi -> từng cụm -> LCS -> chọn ngẫu nhiên trong cùng thế giới */\n    ${s.slice(lcsAt)}`;
}

s = s.replace(`        const worldKeys=Object.keys(WORLD_MAP_PLACES).join('|');
        const mapRe=new RegExp('地图\\\\/('+worldKeys+')\\\\/([^<&\\\\s,。！？、；：]+)');`,
`        const worldKeys=[...new Set(Object.keys(WORLD_MAP_PLACES).concat(Object.keys(PATH_ALIAS_TO_ASSET).filter(k=>WORLD_MAP_PLACES[PATH_ALIAS_TO_ASSET[k]])))].sort((a,b)=>b.length-a.length).map(_escapeRe).join('|');
        const mapRe=new RegExp('(?:地图|Bản đồ|Ban do)\\\\/('+worldKeys+')\\\\/([^<&\\n\\r,。！？、；：]+)');`);
s = s.replace(`        const _makeContainer=(worldName,bestPlace,tipText)=>{
          const imgSrc=\`${'${BASE_URL}'}地图/${'${worldName}'}/${'${bestPlace}'}.webp\`;
          const id='map-'+Math.random().toString(36).substr(2,9);
          const mapLabel=\`${'${worldName}'} · ${'${bestPlace}'}\`;
          const subTip=tipText?\`<div class="image-sub-tip">${'${tipText}'}</div>\`:'';`,
`        const _makeContainer=(worldName,bestPlace,tipText,displayWorld,displayPlace)=>{
          const imgSrc=\`${'${BASE_URL}'}地图/${'${worldName}'}/${'${bestPlace}'}.webp\`;
          const id='map-'+Math.random().toString(36).substr(2,9);
          const mapLabel=\`${'${displayWorld||_displayAssetName(worldName)}'} · ${'${displayPlace||_displayAssetName(bestPlace)}'}\`;
          const subTip=tipText?\`<div class="image-sub-tip">${'${tipText}'}</div>\`:'';`);
s = s.replace(`        const _resolve=(w,p)=>{
          if(!WORLD_MAP_PLACES[w])return null;
          return _findBestMatchPlace(w,p);
        };
        const _build=(w,pr)=>{
          const r=_resolve(String(w).trim(),String(pr).trim());
          if(!r)return null;
          /* Khớp chính xác thì không hiện nhắc; khớp mờ hoặc dự phòng thì hiện nhắc */
          const placeBase=r.place.replace(/\\d+$/,'');
          const isExact=placeBase===r.origKeyword||placeBase.replace(/[·\\s]/g,'')===r.origKeyword.replace(/[·\\s]/g,'');
          const tip=isExact?null:\`无地点「${'${r.origKeyword}'}」插图，已替换为「${'${r.place}'}」\`;
          return _makeContainer(String(w).trim(),r.place,tip);
        };`,
`        const _resolve=(w,p)=>{
          const worldAsset=_assetAlias(w);
          if(!WORLD_MAP_PLACES[worldAsset])return null;
          return {worldAsset,result:_findBestMatchPlace(worldAsset,_assetAlias(p))};
        };
        const _build=(w,pr)=>{
          const resolved=_resolve(String(w).trim(),String(pr).trim());
          if(!resolved||!resolved.result)return null;
          const r=resolved.result;
          /* Khớp chính xác thì không hiện nhắc; khớp mờ hoặc dự phòng thì hiện nhắc */
          const placeBase=r.place.replace(/\\d+$/,'');
          const origAsset=_assetAlias(r.origKeyword);
          const isExact=placeBase===origAsset||placeBase.replace(/[·\\s]/g,'')===origAsset.replace(/[·\\s]/g,'');
          const displayPlace=_displayAssetName(r.place);
          const tip=isExact?null:\`Không có minh họa địa điểm "${'${_aliasKey(pr)}'}", đã thay bằng "${'${displayPlace}'}"\`;
          return _makeContainer(resolved.worldAsset,r.place,tip,_aliasKey(w),displayPlace);
        };`);
s = s.replace(`          const src=img.getAttribute('src')||'';
          const m=src.match(mapRe);`,
`          const src=safeDecode(img.getAttribute('src')||'');
          const m=src.match(mapRe);`);
s = s.replace(`          if(!text||!text.includes('地图/')) continue;`,
`          if(!text||(!text.includes('地图/')&&!text.includes('Bản đồ/')&&!text.includes('Ban do/'))) continue;`);

s = s.replace(/    \/\* ── CG 插图配置[\s\S]*?全角色共用 _SFW_COMMON \/ _NSFW_COMMON \*\//,
`    /* -- Cấu hình minh họa CG (đồng nhất với thanh trạng thái) --
     * SFW: 11 biểu cảm, mỗi loại d4 | NSFW: 29 tư thế, mỗi loại d3
     * Tất cả nhân vật dùng chung _SFW_COMMON / _NSFW_COMMON */`);
s = s.replace(/      \/\/ ── 从者 ──/g, '      // -- Servant --');
s = s.replace(/      \/\/ ── 青冥 ──/g, '      // -- Thanh Minh --');
s = s.replace(/      \/\/ ── 艾多拉 ──/g, '      // -- Eldora --');
s = s.replace(/      \/\/ ── 霓虹2187 ──/g, '      // -- Neon 2187 --');
s = s.replace(/      \/\/ ── 水之都 ──/g, '      // -- Thủy Đô --');
s = s.replace(/      \/\/ ── 幻想乡 ──/g, '      // -- Ảo Tưởng Hương --');
s = s.replace(/      \/\* 剥离数字后缀，提取基础场景名 \*\//g, '      /* Tách hậu tố số và lấy tên cảnh cơ sở */');
s = s.replace(/      \/\* 正常：角色\+场景都存在 \*\//g, '      /* Bình thường: nhân vật và cảnh đều tồn tại */');
s = s.replace(/      \/\* 情况1：角色不存在 \+ 场景存在 → 只换角色，保留场景 \*\//g, '      /* Trường hợp 1: không có nhân vật nhưng có cảnh -> đổi nhân vật, giữ cảnh */');
s = s.replace(/      \/\* 情况2：角色不存在 \+ 场景也不存在 → 换角色\+换场景 \*\//g, '      /* Trường hợp 2: không có cả nhân vật lẫn cảnh -> đổi cả hai */');
s = s.replace(/      \/\* 情况3：角色存在 \+ 场景不存在 → 只换场景 \*\//g, '      /* Trường hợp 3: có nhân vật nhưng không có cảnh -> đổi cảnh */');
s = s.replace(/        \/\* 情况1：角色不存在 → 替换角色 \*\//g, '        /* Trường hợp 1: không có nhân vật -> thay nhân vật */');
s = s.replace(/        \/\* 情况2：角色存在但场景不存在 → 替换场景 \*\//g, '        /* Trường hợp 2: có nhân vật nhưng không có cảnh -> thay cảnh */');
s = s.replace(/        \/\* 跳过没有 src 的空 <img>（地图标签残留 void 元素） \*\//g, '        /* Bỏ qua <img> rỗng không có src do tag bản đồ còn sót */');
s = s.replace(/        \/\* 跳过 src 中包含 地图\/ 的图片（地图图片不归 CG 管） \*\//g, '        /* Bỏ qua ảnh bản đồ, phần này không thuộc luồng CG */');

s = s.replace(`      const cat=parts[idx]; let char=safeDecode(parts[idx+1]);
      let name=safeDecode(parts[idx+2]).replace(/\\.webp$/,'');`,
`      const cat=parts[idx]; let char=_assetAlias(safeDecode(parts[idx+1]));
      parts[idx+1]=encodeURIComponent(char);
      let name=_assetAlias(safeDecode(parts[idx+2]));`);
s = s.replace(`      const baseName=fm?fm[1]:name;`, `      const baseName=_assetAlias(fm?fm[1]:name);`);
s = s.replace(`        const cat = parts[idx]; let char = safeDecode(parts[idx+1]);
        const rawFile = safeDecode(parts[idx+2]).replace(/\\.webp$/,'');`,
`        const cat = parts[idx]; let char = _assetAlias(safeDecode(parts[idx+1]));
        parts[idx+1]=encodeURIComponent(char);
        const rawFile = _assetAlias(safeDecode(parts[idx+2]));`);
s = s.replace(`        let type = fm ? fm[1] : rawFile;`, `        let type = _assetAlias(fm ? fm[1] : rawFile);`);

s = s.replace(/tip=`角色「\$\{origChar\}」无插图，已替换为「\$\{subChar\} · \$\{baseName\}」`;/g, 'tip=`Nhân vật "${origChar}" không có minh họa, đã thay bằng "${_displayAssetName(subChar)} · ${_displayAssetName(baseName)}"`;');
s = s.replace(/if\(!max\) return \{src:parts\.join\('\/'\),tip:`角色「\$\{origChar\}」场景「\$\{origType\}」无插图`\};/g, 'if(!max) return {src:parts.join(\'/\'),tip:`Nhân vật "${origChar}" và cảnh "${origType}" không có minh họa`};');
s = s.replace(/tip=`「\$\{origChar\}」无插图，「\$\{origType\}」不存在，已替换为「\$\{subChar\} · \$\{subType\}」`;/g, 'tip=`"${origChar}" không có minh họa, cảnh "${origType}" không tồn tại, đã thay bằng "${_displayAssetName(subChar)} · ${_displayAssetName(subType)}"`;');
s = s.replace(/tip=`「\$\{char\}」无「\$\{origType\}」插图，已替换为「\$\{subType\}」`;/g, 'tip=`"${_displayAssetName(char)}" không có minh họa "${origType}", đã thay bằng "${_displayAssetName(subType)}"`;');
s = s.replace(/_updateTip\(container,`「\$\{origChar\}」无插图，「\$\{origType\}」不存在，已替换为「\$\{subChar\} · \$\{subType\}」`\);/g, '_updateTip(container,`"${origChar}" không có minh họa, cảnh "${origType}" không tồn tại, đã thay bằng "${_displayAssetName(subChar)} · ${_displayAssetName(subType)}"`);');
s = s.replace(/_updateTip\(container,`角色「\$\{origChar\}」无插图，已替换为「\$\{subChar\} · \$\{type\}」`\);/g, '_updateTip(container,`Nhân vật "${origChar}" không có minh họa, đã thay bằng "${_displayAssetName(subChar)} · ${_displayAssetName(type)}"`);');
s = s.replace(/_updateTip\(container,`「\$\{char\}」无「\$\{origType\}」插图，已替换为「\$\{subType\}」`\);/g, '_updateTip(container,`"${_displayAssetName(char)}" không có minh họa "${origType}", đã thay bằng "${_displayAssetName(subType)}"`);');
s = s.replace(`          <button class="image-toggle-btn" onclick="toggleImage('${'${id}'}')">查看插画</button>
          <button class="image-refresh-btn" onclick="refreshImage('${'${id}'},event)" title="随机切换">↻</button>`,
`          <button class="image-toggle-btn" onclick="toggleImage('${'${id}'}')">Xem minh họa</button>
          <button class="image-refresh-btn" onclick="refreshImage('${'${id}'},event)" title="Đổi ngẫu nhiên">↻</button>`);
s = s.replace(`        btn.textContent = expanded ? label : \`查看：${'${label}'}\`;
      } else {
        btn.textContent = expanded ? '收起' : '查看插画';`,
`        btn.textContent = expanded ? label : \`Xem: ${'${label}'}\`;
      } else {
        btn.textContent = expanded ? 'Thu gọn' : 'Xem minh họa';`);
s = s.replace(`        if (img.getAttribute('src').includes('地图/')) return;`,
`        const decodedSrc=safeDecode(img.getAttribute('src'));
        if (decodedSrc.includes('地图/')||decodedSrc.includes('Bản đồ/')||decodedSrc.includes('Ban do/')) return;`);

fs.writeFileSync(target, s, 'utf8');
console.log(JSON.stringify({ updated: target, aliases: aliasEntries.length, length: s.length }, null, 2));
