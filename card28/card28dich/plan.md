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

## Đợt làm lại thủ công sau kiểm tra giao diện

1. Dùng `quet_dinh_chu_tieng_viet.py` để lập danh sách chuỗi Việt có nguy cơ dính chữ; công cụ này chỉ đánh dấu, tuyệt đối không dịch hoặc thay thế tự động.
2. Với từng bundle ngoài có source gốc (`kenshi_base`, `kenshi_blessing`, `kenshi_camp`, `kenshi_dice`, `kenshi_fight`, `kenshi_opening`, `kenshi_option`, `kenshi_status`), đọc chuỗi gốc và dịch tay từng text game/prompt/UI; giữ nguyên code, property, biến và comment.
3. Sau mỗi bundle: đối chiếu bản gốc, đọc lại bản Việt, chạy parser JavaScript và quét dính chữ tiếng Việt; chỉ đóng mục khi toàn bộ ứng viên đã được tự kiểm bằng tay.
4. Với bảng mở đầu: sửa phần lời dẫn, kịch bản, chủng tộc, khu vực và nhãn UI còn dính chữ; giảm cỡ chữ phần cinematic để nút `Tiếp tục` luôn còn trong vùng nhìn thấy ở chế độ toàn màn hình.
5. Đồng bộ từng bundle hoàn thành vào `dist/kenshi_*`, cập nhật đường dẫn jsDelivr trong card, nhúng lại JSON vào PNG, rồi kiểm tra CRC/payload trước khi push.

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
- Sau khi kiểm lại theo yêu cầu bổ sung, phát hiện `kenshi_fight` vẫn còn nhiều chuỗi dịch thô/dính chữ trong modal hướng dẫn, log chiến đấu, tooltip và prompt tổng kết. Đã dịch tay lại các phần này, gồm quy trình chiến đấu, loại vũ khí, chấn thương/trạng thái, nhãn UI, log và nút tổng kết.
- Đã đổi font có nguy cơ lỗi dấu tiếng Việt trong các bảng HTML: bỏ `Cinzel`, `KaiTi`, `Noto Serif SC`, `Noto Sans SC`; dùng `Noto Serif`, `Noto Sans`, `Segoe UI`, `Georgia`, `Times New Roman` làm fallback an toàn hơn cho tiếng Việt.
- Audit bổ sung: 24 regex script, 18 HTML liên quan, không còn chữ Hán trong phần cần dịch, không còn URL repo Trung, không còn font CJK/Cinzel, không còn các cụm dính chữ đã nhận diện; các bundle script kiểm được đều qua `node --check`.
- Kiểm tra lỗi hiển thị bảng khởi đầu: đã đối chiếu bundle gốc và bundle Việt, xác định bản Việt từng có một dấu `}` dư ngay trước mục `history`. Đây là `SyntaxError: Unexpected token '}'`, khiến module không thể chạy và giao diện khởi đầu chỉ hiện khung trống.
- Đã sửa đúng token cấu trúc này ở cả `dist/kenshi_opening/index.html` và `card28dich/external_links/kenshi_opening/index.vi.html`, không đổi bất kỳ nhánh logic React nào. Parser JavaScript xác nhận mọi bundle có script đều hợp lệ; cấu trúc token ngoài chuỗi của `kenshi_opening` khớp hoàn toàn với bản gốc.
- Đã dịch tay lại toàn bộ 8 mục văn bản hiển thị còn dính chữ trong bảng khởi đầu: lịch sử, Thơ Tận Thế, đặc điểm card, lưu ý khi chơi và lời cảm ơn. Không còn chữ Hán hay cụm Việt hóa dính chữ cũ trong bundle này.
- Đã cập nhật hai URL `kenshi_opening` trong card sang `@main` để bám theo bundle mới nhất sau khi đẩy lên repo; JSON sẽ được nhúng lại vào cả hai PNG.
- Đợt làm lại hiện tại chưa hoàn tất, chưa đóng gói, chưa push và không được xem là đạt kiểm tra cuối. Đã sửa thủ công trong `kenshi_opening` toàn bộ 28 lời kể kịch bản và 77 literal dữ liệu trang bị bị dính chữ; từng đợt đều qua parser JavaScript và hai bản `dist`/`external_links` khớp từng byte.
- Còn phải đọc, dịch tay và kiểm lại những literal giao diện/prompt còn lại của `kenshi_opening`, sau đó mới tiếp tục các bundle ngoài khác. Bộ quét tiếng Việt vừa phát hiện các ứng viên thật lẫn false positive trong code/minified; chỉ dùng nó để lập danh sách và tự đọc từng literal, không dùng để dịch hay thay thế hàng loạt.
- Đã tiếp tục sửa thủ công dữ liệu MVU của giao diện `kenshi_opening`: nhãn và đường dẫn cục diện, vật phẩm, quan hệ phe, toàn bộ mô tả/nhiệm vụ khởi tạo cho các kịch bản đã được thay bằng literal tiếng Việt hoàn chỉnh. Chỉ các literal hiển thị hoặc path biến tương ứng mới bị thay; parser vẫn hợp lệ và hai bundle đồng bộ từng byte. Việc rà soát các component/literal còn lại của bundle vẫn đang tiếp diễn.
- Đã thay bộ quét dính chữ bằng `quet_literal_tieng_viet.mjs`, dùng AST để chỉ quét literal module thật. Bộ quét tuyệt đối không sửa/dịch file; các cảnh báo vẫn phải được đọc tay. Đã hoàn tất một lượt sửa tay kèm parser cho `kenshi_dice` (3 literal) và `kenshi_option` (19 literal), nhưng chưa audit xong các bundle lớn còn lại.
- Đã dịch tay lại các literal và template log của `kenshi_fight`: kết cục, vật phẩm y tế, rút lui, khống chế, tấn công, né/đỡ, sát thương, chấn thương, cứu thương, nhật ký và cảnh báo. Mọi biểu thức `${...}` được giữ nguyên; Acorn xác nhận cú pháp module và hai bản `dist`/`external_links` khớp từng byte. Bộ quét Việt hiện còn gắn cờ các câu Việt hoàn chỉnh do heuristic, không còn mẫu dính chữ thực tế đã đọc tay ở `kenshi_fight`; các bundle khác vẫn chưa hoàn tất audit.
- Đã bắt đầu làm lại thủ công `kenshi_status`: sửa nội dung cứ điểm, các mô tả thuộc tính, tab/nhãn phe phái, trang bị, đội, nhiệm vụ, lịch sử, xác nhận thao tác và thông báo y tế. Cách sửa dùng AST, từng literal/cụm UI hoàn chỉnh đã đọc theo context; không thay đổi biểu thức hay cú pháp. Đã chạy parser sau mỗi đợt và hai bản `dist`/`external_links` vẫn khớp từng byte. Bundle này chưa hoàn tất audit; đặc biệt cần kiểm lại các đường dẫn biến `Cục diện`, `Chuyện cũ`, `Lời đồn` cùng JSON card trước khi đóng gói.
- Đã bắt đầu `kenshi_camp`: sửa thủ công nhóm tên bộ phận, vật phẩm y tế, nhãn hoạt động trại/rèn/chế tạo/giải trí/giao dịch/tù binh; parser xác nhận cú pháp và hai bản đồng bộ byte. Các mô tả dài của từng hoạt động trại vẫn chưa dịch xong, không được xem là hoàn tất.
- Đợt tiếp theo của `kenshi_camp` đã dịch tay lại toàn bộ nhãn, mô tả hoạt động và ba nhóm nhật ký kết quả đầu tiên (tĩnh dưỡng, huấn luyện thuộc tính, y tế, giao tiếp, giao dịch và xử lý tù binh). Các chuỗi template được sửa từng mảnh văn bản quanh `${...}`, không đổi expression hay logic. Sau từng đợt, Acorn xác nhận cú pháp và `dist`/`external_links` khớp từng byte. Nhật ký kết quả còn lại của bundle Trại vẫn đang được dịch, vì vậy chưa được coi là hoàn tất.
- Đã dịch tay tiếp toàn bộ template nhật ký còn lại của `kenshi_camp`: chế tạo, rèn, cứu thương, giao dịch, giao tiếp, hoạt động với tù binh, huấn luyện và các thông báo hoạt động. Bộ quét tiếng Việt tiếp tục được chạy sau đợt này; các cảnh báo rõ ràng là fragment CSS/câu Việt hoàn chỉnh được giữ lại, còn cảnh báo dính chữ thực sự vẫn đang được đọc và vá thủ công. Parser và đối chiếu byte hai bản bundle vẫn đạt sau mỗi lần sửa. Chưa được đóng mục Trại cho đến khi toàn bộ literal giao diện còn lại cũng được đọc tay.
- Đã bắt đầu `kenshi_base`: dịch tay nhóm công trình phòng thủ, cổng/tường, tháp pháo, công trình lửa trại–nấu ăn–khai khoáng–nghiên cứu và một phần công nghiệp/nông nghiệp. Mỗi literal được map riêng từ văn bản đang lỗi sang bản Việt hoàn chỉnh; parser Acorn và đối chiếu byte hai bản Base đều đạt. Bundle Base còn nhiều entry công trình, thông báo và UI phải tiếp tục đọc–dịch tay, chưa được coi là hoàn tất.
- Đã hoàn tất một lượt sửa sâu `kenshi_base`: vá literal công trình/tài nguyên/vũ khí/UI/log còn dính chữ, thêm xử lý template log nguyên cụm, và cập nhật regex phân loại tài nguyên/công trình sang dạng tiếng Việt có khoảng trắng. Kiểm tra Acorn đạt, `dist/kenshi_base/index.html` và `card28dich/external_links/kenshi_base/index.vi.html` khớp từng byte; bộ quét no-space hiện chỉ còn regex/từ đơn hợp lệ, không còn cụm dính chữ thật đã đọc tay.

- Đã hạ cỡ chữ phần cinematic của kenshi_opening để nút Tiếp tục không bị che trong chế độ toàn màn hình; bản dist và external_links đã qua parser và khớp byte.
- Đã vá thủ công các bundle kenshi_status, kenshi_option, kenshi_dice và kenshi_fight ở cả dist lẫn external_links để bỏ dính chữ và làm câu tự nhiên hơn; parser JavaScript đều qua.
- Đã vá thêm các literal còn dính chữ trong `kenshi_opening`: nhãn trait/skeleton, phần bối cảnh chờ bổ sung, và một số key nội bộ của nhiệm vụ; đồng thời giữ `dist` và `external_links` khớp byte sau khi sửa.
- Đã dịch tay tiếp các mô tả còn dính chữ trong `kenshi_blessing` (khối động vật, ký ức giả, Trấn Tái Sinh, tế phẩm đồng đội, tội lỗi/cấm kỵ), rồi kiểm parse và byte-sync cho cả bản `dist` lẫn `external_links`.
- Đã vá các thông báo UI còn lỗi trong `kenshi_camp` (mô thức toàn màn hình, nhãn trí tuệ < 50, trạng thái nô lệ, vật phẩm y tế) và giữ đồng bộ byte giữa `dist`/`external_links`.
- Đã kiểm parse module bằng Acorn và xác nhận các bundle đã chạm (`kenshi_opening`, `kenshi_blessing`, `kenshi_camp`, `kenshi_status`) đều hợp lệ cú pháp sau sửa.
- Đã tiếp tục làm sạch thủ công các chuỗi hiển thị còn dính chữ trong `kenshi_opening` và `kenshi_camp`, gồm nhãn sao lưu/nhập đặc tính, mô tả chủng tộc, mô tả hoạt động của trại và phần chữ cinematic mở đầu.
- Đã giảm cỡ chữ phần cinematic mở đầu để nút `Tiếp tục` không bị che trong chế độ toàn màn hình.
- Hai bundle `kenshi_opening` và `kenshi_camp` hiện đang đồng bộ byte giữa `dist` và `external_links`; bộ quét tiếng Việt có dấu/không khoảng trắng hiện không còn hit hiển thị nào trong các bundle công khai đã kiểm tra.
