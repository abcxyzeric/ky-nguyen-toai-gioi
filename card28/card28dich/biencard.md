# Biến card 28

## Luật thép

TUYỆT ĐỐI KHÔNG ĐƯỢC PHÉP rút gọn, thu gọn hay viết gọn bất cứ thứ gì từ bản gốc. Chỉ được viết thêm, không được viết lại theo kiểu làm mất logic, mất entry, mất regex hay mất script.

## Quy ước biến

- Ưu tiên tên biến có dấu cách và dấu câu tiếng Việt.
- Khi cần truy cập trong script / JS / Vue, dùng ngoặc vuông:
  - `data['Tình yêu']`
  - `characterPanel['Quan hệ nhân vật']['Độ thiện cảm']`
- Không dùng dạng rút gọn kiểu gạch dưới nếu bản dịch đã có tên có khoảng trắng.
- Không dùng `data.Tình yêu` hay `characterPanel.Quan hệ nhân vật`.

## Biến schema cốt lõi

### Thuộc tính

- `Sức mạnh` -> `STR`
- `Nhanh nhẹn` -> `DEX`
- `Cảm nhận` -> `PER`
- `Thể chất` -> `TGH`
- `Ý chí` -> `WIL`
- `Trí tuệ` -> `INT`
- `Sức hút` -> `CHA`

### Biến cục diện

- `Phe đã biết`
- `Phe thù địch`
- `Phe thân thiện`

### Chuyện cũ

- `Ghi chép kết giao`
- `Lược ký thị trấn`
- `Danh sách tử vong`
- `Ký ức then chốt`

### Quan hệ nhân vật

- `Độ thiện cảm`
- `Quan hệ`
- `Nhìn nhận`

### Vật phẩm / trang bị

- `Tên`
- `Loại`
- `Phẩm chất`
- `Mô tả`
- `Xúc xắc sát thương`
- `Loại sát thương`
- `Giá trị`
- `Khối lượng`
- `Số lượng`

### Nhân vật

- `Tên`
- `Giới tính`
- `Tuổi`
- `Chủng tộc`
- `Ngoại hình`
- `Thể hình`
- `Phe phái`
- `Thân phận`
- `Cấp độ`
- `Trạng thái`
- `Lập trường`
- `Điểm kinh nghiệm`
- `Điểm thuộc tính`
- `Điểm đặc tính`
- `Số lần tấn công`
- `Suy nghĩ trong đầu`
- `Đặc tính`
- `Đặc tính tạm thời`
- `Chấn thương`
- `Ba lô`
- `Máu`

## Alias cần giữ đồng nhất

- `Phe phái đã biết` -> `Phe đã biết`
- `Phe phái thù địch` -> `Phe thù địch`
- `Phe phái thân thiện` -> `Phe thân thiện`
- `Ghi chép giao hữu` -> `Ghi chép kết giao`
- `Lược ghi thị trấn` -> `Lược ký thị trấn`

## Alias regex / trạng thái cần bổ sung

- `【血战惜败】` -> `【Huyết chiến thua tiếc】`
- `【势均力敌】` -> `【Ngang tài ngang sức】`
- `【略处下风】` -> `【Hơi rơi vào hạ phong】`
- `【略处上风】` -> `【Hơi chiếm thượng phong】`
- `【克拉尔】` -> `【Kral】`
- `已逃跑` -> `Đã bỏ chạy`
- `【被制服】` -> `【Bị khống chế】`
- `【投降】` -> `【Đầu hàng】`
- `【奥克兰】` -> `【Okran】`
- `【悲惨失败】` -> `【Thất bại thảm khốc】`
- `【酣畅大胜】` -> `【Đại thắng sảng khoái】`
- `【血战险胜】` -> `【Huyết chiến thắng hiểm】`
- `史诗大捷` -> `Đại thắng sử thi`
- `【比拉克】` -> `【Ma Vương】` hoặc `Belakor` tùy ngữ cảnh hiển thị
- `【肯恩】` -> `【Kane】`
- `【罪恶】` -> `【Ác niệm】`

## Ghi chú kiểm tra

- Giữ key Trung nếu đó là anchor cần cho regex, nhưng phải có key Việt đi kèm.
- Các comment / script chú thích không cần dịch.
- Các URL nội bộ / jsDelivr sẽ phải giữ đúng đường dẫn khi dịch xong nội dung đích.

## Trạng thái áp dụng vào card

- Đã loại bỏ các alias bị lỗi dấu `?` trong `keys`.
- `MODIFIER_REGEX` và cả hai `attrMap` trong script `Cấu trúc biến 5.29` đã được cập nhật bằng biến tiếng Việt có dấu.
- Các biến có khoảng trắng/dấu tiếng Việt phải tiếp tục truy cập bằng ngoặc vuông, ví dụ `data['Thuộc tính']`, `data['Cục diện']['Phe đã biết']`.
- Tag mở đầu thống nhất là `【【Khởi đầu】】`.
- URL UI đang hoạt động dùng `https://testingcf.jsdelivr.net/gh/abcxyzeric/kenshi-viet-hoa@main/dist/...`; không dịch/thay 2 URL thư viện runtime `mvu_zod.js` và `MagVarUpdate bundle.js`.
- URL regex disabled `Hệ thống đặc tính (chưa xong)` dùng `https://testingcf.jsdelivr.net/gh/abcxyzeric/kenshi-viet-hoa@main/dist/kenshi_trait_system/index.html`; module này giữ trạng thái chưa hoàn thiện/an toàn, không tự viết lại logic gameplay.
- Các file HTML/script ngoài đã dịch cần giữ đồng bộ giữa `card28/card28dich/external_links/kenshi_*/index.vi.html` và `dist/kenshi_*/index.html`.
