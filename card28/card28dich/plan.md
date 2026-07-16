# Kế hoạch dịch card28

## Mục tiêu
- Dịch sạch toàn bộ tiếng Trung trong `card28` sang tiếng Việt.
- Giữ nguyên tiếng Anh, URL thư viện, tag/protocol và các chuỗi kỹ thuật phải khớp regex.
- Chỉ làm việc trong `card28` và `card28/card28dich`.

## Trạng thái hiện tại
- Đã giải mã card gốc và card bản dịch.
- Đã xác nhận card là dạng MVU-Zod.
- Đã đọc tài liệu hướng dẫn MVU/Regex/Lorebook.
- Đã xác định các khối cần ưu tiên: `tavern_helper`, `regex_scripts`, các entry còn chữ Hán trong `character_book`.
- Đã thấy một số chỗ lệch kỹ thuật: `world`, tên script, `export_with`, một số `findRegex` và nhãn UI.
- Đã sửa lỗi mã hóa phát sinh khi ghi file qua pipeline PowerShell.
- Đã tải các HTML ngoài mà regex đang gọi về `external_links`, mỗi mục có `source.zh.html` và `index.vi.html`.
- Đã dịch sạch `content` trong lorebook của `11_vi.json`; chữ Hán còn lại trong JSON chỉ nằm ở `keys` keyword gốc được giữ lại theo yêu cầu.
- Đã Việt hóa `tavern_helper/scripts[0]` theo schema biến Việt, và đổi regex URL sang đường dẫn repo Việt hóa dạng ASCII.
- Đã bổ sung alias keyword Việt từ nội dung đã dịch, không xóa keyword Trung gốc.
- Đã dịch sạch Hán toàn bộ `external_links/*/index.vi.html`.
- Đã vá lại ba tiêu đề hiển thị bị dính chữ: `kenshi_option`, `kenshi_status`, `kenshi_dice`.
- Đã xác nhận lại số chữ Hán còn sót trong các `index.vi.html` là 0.
- Đã đóng gói lại `11_vi.json` vào PNG mới: `card28dich/11_vi.png`.
- Đã sửa metadata PNG sang chuẩn SillyTavern: `tEXt`/`chara` chứa JSON UTF-8 mã Base64.
- Đã chuẩn hóa `comment` rỗng/trùng của World Info mà không thay đổi `keys` hay nội dung entry.
- Đã sửa toàn bộ chuỗi thay thế của regex dẫn ngoài để dùng xuống dòng thật, thay vì ký tự `\n` hiển thị ra chat.
- Liên kết chính dùng `raw.githubusercontent.com` như bản gốc; các liên kết dự phòng dùng jsDelivr và đều trỏ tới repo Việt hóa.

## Quy trình
1. Dựng bảng biến trong `biencard.md`.
2. Chuẩn hóa biến theo một tên Việt duy nhất, dùng dấu nháy cho biến có khoảng trắng.
3. Vá các script/regex cần cho chạy thật.
4. Dịch từng entry lorebook còn chữ Hán, đối chiếu với bản gốc.
5. Rà lại toàn bộ card: sót chữ Hán, mojibake, dính chữ, lệch biến, lệch tag.
6. Chỉ chốt khi `card28dich` sạch và nhất quán.

## Ghi chú kiểm tra
- Không rút gọn nội dung gốc.
- Không thay thế hàng loạt theo kiểu làm vỡ ngữ cảnh.
- Mọi lần nén ngữ cảnh phải đọc lại `plan.md` và `biencard.md`.

## Việc đang làm tiếp theo
- Đã hoàn tất vá lỗi regex và đóng gói PNG: 8 liên kết giao diện đang bật đều phản hồi HTTP 200 và cho phép CORS; không còn chuỗi `\n` bị hiển thị nguyên văn.
- Đã đối chiếu tên World Info nhúng với `extensions.world`: khớp chính xác, có 1.050 entry. SillyTavern yêu cầu người dùng xác nhận “Import Card Lore” trước khi lưu/liên kết lorebook lần đầu.
- Regex “Hệ thống đặc tính (chưa xong)” vẫn bị tắt đúng như bản gốc; URL gốc của chức năng chưa hoàn thiện này cũng trả về 404 nên không ảnh hưởng lúc chơi.
- Đã giải mã trực tiếp hai PNG và đối chiếu logic World Info: 1.050 ID cùng thứ tự; toàn bộ cấu hình kích hoạt ngoài phần văn bản khớp tuyệt đối. `extensions.world` luôn khớp `character_book.name` ở cả hai bản.
- Không có keyword Trung nào bị mất. Bản Việt có thêm 3.735 keyword Việt trên 909 entry và 53 secondary keyword Việt để kích hoạt bằng tiếng Việt; đây là mở rộng có chủ đích, không phải lệch hay mất logic gốc.
- Đã xác nhận nguyên nhân bảng mở đầu không hiện: JavaScript trong `kenshi_opening/index.vi.html` bị dừng vì các key/thuộc tính đã Việt hóa có khoảng trắng nhưng chưa được bọc bằng dấu nháy. Đây là lỗi cú pháp JavaScript, không liên quan đến thẻ `<thinking>` hay Lorebook.
- Đã sửa cú pháp tương tự trong toàn bộ 8 giao diện ngoài (`kenshi_base`, `kenshi_blessing`, `kenshi_camp`, `kenshi_dice`, `kenshi_fight`, `kenshi_opening`, `kenshi_option`, `kenshi_status`), giữ nguyên logic và nội dung; chỉ bọc key/thuộc tính tiếng Việt theo cú pháp JavaScript và escape một dấu nháy đơn nằm trong chuỗi dữ liệu của `kenshi_status`.
- Đã kiểm tra cú pháp từng khối `<script>` bằng Acorn: 8/8 tệp hợp lệ; `kenshi_status` có 2 script hợp lệ và 2 script rỗng hợp lệ theo thiết kế.
- Đã mô phỏng chính xác cách SillyTavern tạo RegExp và thay thế nội dung: toàn bộ 9 regex giao diện đang bật đều bắt được tag tương ứng, sinh replacement có xuống dòng thật, và trỏ tới tệp `dist` tồn tại. Tag mở đầu trong `first_mes` khớp chính xác regex `Khởi đầu`.
- Đã đưa trạng thái bật/tắt của toàn bộ 24 Regex về khớp tuyệt đối với bản gốc; đã khôi phục rule `Xúc xắc (raw GitHub)` về bật như bản gốc. PNG `11_vi.png` đã được đóng gói lại từ JSON mới và đang chờ kiểm tra cuối/push các tệp `dist`.
