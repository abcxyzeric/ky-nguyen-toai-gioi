# Audit bản dịch `_碎界纪元_vi.png`

Ngày audit: 2026-07-29

## Phạm vi

- Gốc: `F:\mvu card\card39\_碎界纪元.png`
- Bản vi: `F:\mvu card\card39\_碎界纪元_vi.png`
- Dữ liệu gốc đã giải mã vào: `F:\mvu card\card39`
- Dữ liệu vi đã giải mã vào: `F:\mvu card\card39\card39dich`

## Kết luận loại card

Card này là Character Card V3 dùng ERA/MVU-style variable system, có bảng trạng thái và helper/runtime. Không phải card thuần text, không phải card normal chỉ có lorebook.

Bằng chứng:

- 331 lorebook entries.
- 8 regex scripts, tất cả đang bật.
- 5 Tavern Helper scripts, trong đó `ERA变量框架1.4.11` và `自动更新` đang bật.
- Có `VariableInsert`, `VariableEdit`, `VariableDelete`, `era_data`, `variablethink`, `stat_data`, statusbar placeholder `<StatusPlaceHolderImpl/>`.
- Không thấy `registerMvuSchema`, `mvu_zod`, `MagVarUpdate`, nên không phải MVU-Zod kiểu Zod schema. Đây là card ERA framework.

## Kết quả giải mã

- Bản gốc có cả chunk `chara` và `ccv3`; hai chunk trùng SHA-256 sau khi giải mã.
- Bản `_vi` chỉ có chunk `chara`.
- Cả hai bản đều có 331 entry, 8 regex, 5 Tavern Helper scripts.
- Không thiếu entry theo `id`; không có entry thừa trong bản vi.

## Trạng thái bản dịch hiện tại

Không sạch. Lorebook phần lớn đã được dịch sang tiếng Việt, nhưng phần runtime chưa đồng bộ. Nếu import bản vi hiện tại để chơi, bảng/ảnh/luồng chương có nguy cơ lỗi vì biến đã dịch sang tiếng Việt nhưng EJS, regex và helper vẫn đọc key Trung gốc.

### Lỗi cần sửa lại

1. `first_mes.txt`

- `<VariableInsert>` đã dịch toàn bộ hệ biến sang tiếng Việt.
- Có 221 path key gốc bị thay bằng 221 path key Việt.
- Việc dịch key là đúng hướng nếu mục tiêu là biến Việt, nhưng bắt buộc phải đồng bộ toàn bộ nơi đọc/ghi biến.

2. Entry `ID 32` - `⚙️EJS控制剧情`

- Bản vi giống hệt bản gốc.
- Còn 826 ký tự Hán.
- Vẫn đọc `stat_data.大世界系统...`, `stat_data.主角系统.难度`.
- Vẫn gọi `getwi` bằng comment/key Trung như `青冥世界观`, `青冥_第1章`, `简单难度`, `正常难度`, `困难难度`.
- Đây là lỗi runtime trực tiếp sau khi biến và entry comment đã dịch sang tiếng Việt.

3. Các entry có `VariableEdit` đã dịch key JSON nhưng chưa đồng bộ hệ thống

Danh sách 32 entry:

`14, 19, 24, 62, 87, 94, 95, 96, 97, 98, 99, 127, 200, 201, 203, 204, 205, 206, 207, 208, 256, 257, 258, 259, 260, 262, 322, 323, 324, 325, 326, 328`

Mẫu lỗi:

- Gốc: `大世界系统.青冥.剧情章节`, `章节推进条件.条件_1`, `章节推进条件.条件1_完成`.
- Bản vi: `Hệ thống đại thế giới.Thanh Minh.Chương cốt truyện`, `Điều kiện thúc đẩy chương.Điều kiện_1`, `Điều kiện 1_Hoàn thành`.

Các key Việt đang không nhất quán giữa entry:

- `Hệ thống đại thế giới`, `Hệ thống Đại Thế giới`, `Hệ_thống_Đại_thế_giới`, `Hệ_thống_đại_thế_giới`.
- `Điều kiện thúc đẩy chương`, `Điều kiện tiến triển chương`, `Điều kiện xúc tiến chương`, bản có dấu cách và bản dùng `_`.
- `Chương cốt truyện`, `Cốt truyện chương`, `Chương_cốt_truyện`.

4. Entry bị cắt cụt nặng

- `ID 184` - gốc `红魔馆`, vi `Hồng Ma Quán`.
- Gốc dài 945 ký tự, bản vi chỉ 106 ký tự.
- Bản vi dừng ở dòng `Ngoại quan`, thiếu gần như toàn bộ phần sau.
- Entry này cần dịch lại từ gốc.

5. Entry ảnh `ID 126` - `⚙️Quy tắc hình minh họa`

Đây là lỗi ảnh/key quan trọng.

- Regex `CG插图` vẫn là: `<img>(.*?)</img>` -> `https://zyxjack123.top/碎界纪元/$1.webp`.
- Bản vi đã dịch cả path/key ảnh:
  - `地图` -> `Bản đồ`
  - `${大世界}` -> `${Đại_thế_giới}`
  - `${角色名}` -> `${Tên_nhân_vật}`
  - `开心` -> `vui vẻ`
  - `口交` -> `bú`
  - nhiều tên nhân vật được đổi sang tên Việt/Anh.
- Nếu asset ngoài vẫn dùng thư mục/key Trung gốc thì ảnh sẽ không load.
- Cách sửa an toàn: dịch phần giải thích hiển thị, nhưng giữ nguyên path `<img>SFW/角色名/插画名{{roll: dN}}</img>` theo đúng key asset, hoặc tạo mapping đầy đủ từ key Việt sang key Trung trong regex/statusbar trước khi đổi.

6. Entry `ID 273` và `ID 274`

- `ID 273` bản vi thêm 4 macro `{{user}}`; gốc không có.
- `ID 274` bản vi thêm 9 macro `{{user}}`; gốc không có.
- Đây không phải lỗi syntax chắc chắn, nhưng là thay đổi hành vi/giọng kể so với gốc. Khi dịch lại nên kiểm tra từng chỗ xem gốc là `御主` hay một danh xưng khác; nếu chỉ là người chơi thì `{{user}}` có thể giữ, nếu không thì trả về bản dịch danh xưng thường.

7. Regex và Tavern Helper

Tất cả 8 regex trong bản vi có content SHA giống bản gốc, tức chưa dịch/chưa đồng bộ:

- `ERA 状态栏模板`
- `正文美化`
- `主页`
- `CG插图`
- `隐藏CG图片`
- `ERA 数据隐藏正则`
- `ERA 元数据隐藏正则`
- `ERA 思考块隐藏正则`

Tất cả 5 Tavern Helper scripts trong bản vi cũng giống bản gốc:

- `ERA变量框架1.4.11`
- `自动更新`
- `外置手机`
- `（非开发者别开）零层标签检测`
- `（非开发者别开）隐藏楼层`

## Script nào cần dịch, script nào không

Cần dịch/sửa đồng bộ:

- `regex_scripts/00_ERA 状态栏模板.replace.html`: UI statusbar, label, mô tả, path đọc biến, danh sách nhân vật/ảnh nếu dùng trong UI.
- `regex_scripts/01_正文美化.replace.html`: text UI, xử lý map/CG, cảnh báo/label hiện ra cho người chơi.
- `regex_scripts/02_主页.replace.html`: UI trang chủ, chọn độ khó, chọn nhân vật, prompt tự sinh `VariableEdit`; bắt buộc đổi key ghi biến sang key Việt nếu hệ biến Việt.
- `entries/032_⚙️EJS控制剧情.txt`: EJS điều khiển chương, `getvar`, `getwi`, độ khó.
- `tavern_helper_scripts/01_自动更新.*`: nếu phát hành bản vi, cần đổi nút/link sang bản vi hoặc tắt để tránh tự cập nhật về card Trung.
- `entry ID 126`: quy tắc ảnh; dịch mô tả nhưng phải giữ/mapping key asset.

Không nên dịch phần core/protocol nếu không sửa toàn bộ consumer:

- `stat_data`, `ERAMetaData`, `SelectedMks`, `EditLogs`.
- Event/API ERA như `era:getCurrentVars`, `era:writeDone`, `era:apiWrite`.
- Tags protocol: `<VariableInsert>`, `<VariableEdit>`, `<VariableDelete>`, `<VariableThink>`, `<era_data>`, `<variablethink>`, `<img>`, `<StatusPlaceHolderImpl/>`.
- URL import thư viện như `opencc-js`, `pinia`, CDN font/icon, API endpoints.
- CSS class/id, JS function name, event name, localStorage key, bundled minified module internals.

Có thể để nguyên nếu không bật:

- `外置手机` đang disabled; nếu vẫn disabled thì chưa cần dịch. Nếu bật thì phải kiểm tra `https://phone-ctn.pages.dev/index.js`.
- `（非开发者别开）零层标签检测` và `（非开发者别开）隐藏楼层` đang disabled; chỉ dịch metadata/label nếu muốn sạch UI, không cần sửa logic cho người chơi thường.

## Link ngoài cần chú ý

- `https://zyxjack123.top/碎界纪元/$1.webp`: asset CG/map chính; không đổi path nếu chưa có asset Việt tương ứng.
- Map ngoài đã được chuyển sang bản Việt trong `card39/card39dich/external_links/map/source.zh.html`; nếu cần phát hành qua raw.githack thì trỏ sang nhánh GitHub của bản Việt, không giữ lại link Trung cũ.
- `https://raw.githubusercontent.com/abcxyzeric/ky-nguyen-toai-gioi/refs/heads/master/card39/card39dich/_K%E1%BB%B7_Nguy%C3%AAn_To%C3%A1i_Gi%E1%BB%9Bi_vi.png` và `.md`: helper auto-update đang trỏ bản Trung; cần đổi/tắt cho bản vi.
- `https://phone-ctn.pages.dev/index.js`: helper điện thoại ngoài, hiện disabled; nếu bật thì cần audit riêng.

## Cách dịch an toàn cho card này

1. Chọn một bảng tên biến Việt duy nhất.

Ví dụ nên dùng key có dấu/có khoảng trắng trong JSON:

- `Hệ thống đại thế giới`
- `Thanh Minh`
- `Chương cốt truyện`
- `Điều kiện tiến triển chương`
- `Điều kiện_1`
- `Điều kiện_1 hoàn thành` hoặc `Điều kiện 1 hoàn thành`

Không trộn `Điều_kiện_1_hoàn_thành`, `Điều kiện 1_Hoàn thành`, `Điều kiện1_hoàn_thành`.

2. Nếu key có dấu/có khoảng trắng, JS/Vue/EJS phải dùng bracket notation hoặc quoted path.

Ví dụ:

```js
statData['Hệ thống đại thế giới']?.['Thanh Minh']?.['Chương cốt truyện']
```

Không dùng dot notation với key Việt có dấu cách:

```js
statData.Hệ thống đại thế giới.Thanh Minh
```

3. Đồng bộ cùng lúc các nơi sau.

- `first_mes.txt`
- Tất cả `VariableEdit/VariableInsert/VariableDelete` trong lorebook.
- `ID 32` EJS.
- Regex `主页` phần tạo prompt/ghi biến.
- Regex statusbar và body UI phần đọc biến.
- Tavern Helper nếu có default/schema/reader/writer.
- Rule ảnh `ID 126` và cấu hình ảnh trong regex/statusbar.

4. Với lorebook keys.

- Giữ key Trung gốc làm alias kích hoạt.
- Thêm key Việt tương ứng.
- Không xóa key Trung nếu chưa chứng minh không còn consumer nào dùng.

5. Với ảnh.

- Không dịch key path trong `<img>` nếu file ảnh ngoài vẫn dùng key Trung.
- Nếu muốn AI dùng key Việt, phải thêm mapping trước khi build URL, ví dụ `Bản đồ/Thanh Minh/...` -> `地图/青冥/...`, `vui vẻ` -> `开心`, tên nhân vật Việt -> tên thư mục Trung.

6. Với ERA UI.

ERA trong card này không chỉ là thư viện ẩn. Nó có framework helper, statusbar, homepage, snapshot/settings/debug UI và các nút/label có thể hiện ra. Với người chơi thường, ít nhất statusbar/homepage/map/CG UI cần dịch. Core framework/API thì không dịch bừa.
