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
- Đang rà lại metadata/hỗ trợ để chuẩn bị đóng gói và đối chiếu cuối.

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
- Rà lại `11_vi.json` và các báo cáo đối chiếu để chốt danh sách entry lệch cần dịch lại.
- Đối chiếu regex/scripts còn cần ghim vào `dist/kenshi_*` và chuẩn bị đẩy repo `abcxyzeric/kenshi-viet-hoa`.
- Rà lại toàn bộ: CJK ngoài keyword, mojibake, biến, tag, regex, link ngoài.
