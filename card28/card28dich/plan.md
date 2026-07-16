# Kế hoạch dịch card 28

## Mục tiêu

Dịch và chuẩn hóa card `终末之诗.png` sang bản Việt, giữ nguyên cấu trúc MVU-Zod, không làm lệch biến, regex, tag hay link ngoài.

## Trạng thái hiện tại

- Đã giải mã `终末之诗.png` và `11_vi.png`.
- Đã đối chiếu toàn bộ 1050 entry.
- Đã xác định card là `MVU-Zod`.
- Đã chốt các điểm cần sửa:
  - entry `15` bị cắt cụt phần cuối.
  - entry `593848` bị cắt gần như toàn bộ.
  - entry `696961` bị cắt gần như toàn bộ.
  - thiếu alias Việt cho một nhóm key regex / status.
  - schema có vài tên biến lệch cần thống nhất.
  - alternate greeting lệch tag với `first_mes`.

## Việc phải làm

1. Sửa nội dung 3 entry bị cắt.
2. Bổ sung key Việt còn thiếu để regex bắt được biến đã dịch.
3. Đồng bộ lại tên biến schema:
   - `Phe đã biết`
   - `Phe thù địch`
   - `Phe thân thiện`
   - `Ghi chép kết giao`
   - `Lược ký thị trấn`
4. Đồng bộ tag mở đầu:
   - `Khởi đầu` phải bắt được cả `first_mes` và alternate greeting.
5. Kiểm tra lại toàn bộ `11_vi.json` sau sửa:
   - không sót chữ Hán ngoài keyword gốc cần giữ.
   - không có mojibake.
   - không dính chữ / mất dấu câu.
6. Cập nhật `biencard.md` nếu phát hiện thêm alias hoặc biến mới.
7. Nhúng lại JSON vào `11_vi.png`.

## Quy tắc làm việc

- Chỉ chạm vào `card28` và `card28dich`.
- Không dùng dịch tự động.
- Không rút gọn nội dung gốc.
- Mỗi lần nén ngữ cảnh phải đọc lại `plan.md` và `biencard.md`.

## Mốc hoàn thành

- Hoàn thành khi `11_vi.json` và `11_vi.png` đồng bộ, các entry lỗi đã vá xong, và kiểm tra cuối cùng không còn lỗi bắt buộc phải sửa.

## Cập nhật sau xử lý

- Đã vá lại 3 entry bị cắt/corrupt: `15`, `593848`, `696961`.
- Đã dọn alias hỏng dạng dấu `?` trong `keys`.
- Đã sửa schema MVU-Zod để regex/attrMap nhận các biến tiếng Việt có dấu như `Mẫn tiệp`, `Cảm quan`, `Ý chí`, `Bền bỉ`, `Độ kiên cường`, `Trí lực`, `Mị lực`, `Kháng lửa`, `Năng lực phòng hộ`.
- Đã đồng bộ `first_mes` và alternate greeting về `【【Khởi đầu】】`.
- Đã nhúng lại `card28dich/11_vi.json` vào `card28/11_vi.png`.
- Đã thay các URL UI HTML đang hoạt động từ `BEEP-GG/KENSHI` sang `abcxyzeric/kenshi-viet-hoa@main/dist/...`; giữ nguyên 2 thư viện runtime `mvu_zod.js`, `MagVarUpdate bundle.js`.
- Kiểm tra cuối: JSON hợp lệ, PNG có `tEXt/chara`, CRC hợp lệ, payload PNG khớp JSON, `content` lorebook không còn chữ Hán, không còn placeholder mojibake dạng `?`.
- Đã dịch/chuẩn hóa lại thủ công các file HTML/script ngoài đang dùng trong `dist/kenshi_*` và bản lưu ở `card28dich/external_links/kenshi_*`, sửa các cụm dính chữ/sai trật tự như `phitrímệnh`, `Vũ khívàTrang bị`, `KhôngcóhiệuMục tiêu`, `chiếnthuậtchỉlệnh`, `Đầu hàngxác nhận`.
- Đã thay URL cũ `BEEP-GG/KENSHI` còn sót trong regex disabled `Hệ thống đặc tính (chưa xong)` sang `abcxyzeric/kenshi-viet-hoa@main/dist/kenshi_trait_system/index.html`, đồng thời thêm HTML Việt an toàn cho module này.
- Audit HTML: không còn chữ Hán trong các file `index.vi.html`/`dist` đã dịch, không còn các cụm dính chữ đã xác định, các bundle có script đều qua kiểm tra cú pháp bằng Node ngoại trừ `kenshi_opening` vốn fail parse từ bản gốc và `kenshi_trait_system` là HTML thông báo không có script.
- Đã nhúng lại `11_vi.json` vào cả `card28/11_vi.png` và `card28/card28dich/11_vi.png` sau khi thay link ngoài.
