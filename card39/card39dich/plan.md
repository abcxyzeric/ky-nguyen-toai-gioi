# Kế hoạch dịch và kiểm lỗi card39

## Luật phải đọc lại sau mỗi lần nén ngữ cảnh

- Chỉ làm trong `F:\mvu card\card39` và đặc biệt là `F:\mvu card\card39\card39dich`.
- Sau mỗi lần nén ngữ cảnh, đọc lại `plan.md` và `biencard.md` trước khi sửa tiếp.
- Không dùng máy dịch, Google Dịch, công cụ dịch tự động, hoặc thay thế từ rời rạc làm hỏng ngữ nghĩa.
- Dịch thủ công theo entry/cụm. Giữ nguyên macro, tag, API, event, class/id, URL runtime và key kỹ thuật cần giữ.
- Tavern Helper core ERA và UI nổi ERA không cần dịch theo xác nhận trước, nhưng regex dùng cho card và EJS điều khiển cốt truyện phải dịch/sửa đồng bộ.

## Phạm vi cần xử lý

1. `first_mes.txt`
   - Chuẩn hóa toàn bộ key biến tiếng Việt có dấu.
   - Giữ nguyên tag `<VariableInsert>`.
   - Đồng bộ tên thế giới, độ khó, chương, điều kiện chương.

2. Lorebook entries
   - Dịch sạch tiếng Trung trong nội dung entry.
   - Riêng keyword/alias lorebook có thể giữ key Trung gốc để không mất kích hoạt.
   - Các entry `VariableEdit/VariableInsert/VariableDelete` phải dùng cùng chuẩn biến trong `biencard.md`.
   - Entry EJS điều khiển cốt truyện phải đọc key Việt và gọi đúng comment/key entry Việt.
   - Entry quy tắc hình minh họa phải dịch phần hướng dẫn nhưng giữ hoặc ánh xạ key ảnh gốc để ảnh vẫn tải.

3. Regex scripts
   - Dịch UI hiện cho người chơi trong statusbar/homepage/body/CG.
   - Sửa đường đọc/ghi biến trong statusbar và homepage theo `biencard.md`.
   - Không đổi protocol regex/ERA nếu đổi làm hỏng card.

4. Tavern Helper
   - Không dịch helper framework ERA và UI nổi ERA.
   - Kiểm tra helper tự cập nhật để tránh trỏ bản Trung nếu phát hành bản Việt.

5. Đóng gói
   - Sau khi sửa nguồn, đồng bộ lại `sillytavern_chara.json`, `worldbook_entries.json`, `regex_scripts.json`, manifest và file tách.
   - Đóng gói lại PNG trong `card39dich` theo cấu trúc bản Việt.
   - Nếu có tên file tiếng Trung thuộc phần phát hành bản dịch thì tạo/đổi tên Việt.

## Quy trình kiểm cuối

1. Quét chữ Hán trong `card39dich`, loại trừ:
   - `tavern_helper_scripts/00_ERA变量框架1.4.11.*`
   - keyword/alias lorebook Trung được giữ để kích hoạt
   - URL asset gốc nếu cần giữ để ảnh hoạt động
2. Quét mojibake: các chuỗi hỏng mã hóa như dấu vỡ, ký tự thay thế hoặc chữ Việt bị méo.
3. Kiểm tra dính chữ tiếng Việt bằng đọc lại các đoạn đã sửa thủ công.
4. Kiểm tra JSON hợp lệ: `sillytavern_chara.json`, `worldbook_entries.json`, `regex_scripts.json`, từng entry/regex JSON.
5. Kiểm tra biến:
   - `first_mes` và mọi `VariableEdit` dùng cùng root/key.
   - EJS dùng `getvar('stat_data.<key Việt>...')`.
   - Statusbar/homepage dùng key Việt khi đọc/ghi.
6. Đối chiếu bản gốc ở các chỗ nghi ngờ bị cắt, thiếu hoặc đổi logic.
