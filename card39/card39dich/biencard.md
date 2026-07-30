# biencard.md - bảng biến card39

## Luật thép

TUYỆT ĐỐI KHÔNG ĐƯỢC PHÉP rút gọn, thu gọn hay viết gọn bất cứ thứ gì từ bản gốc (như logic, lược bớt prompt, thu gọn entry, viết lại script làm cho nó ngắn đi). Đây là hành vi vi phạm, là sai và bắt buộc phải làm lại. TUYỆT ĐỐI CẤM VIẾT LẠI, CHỈ ĐƯỢC VIẾT THÊM CHỨ CẤM ĐƯỢC VIẾT LẠI BẢNG HAY SCRIPTS.

## Quy tắc dùng sau nén ngữ cảnh

- Sau mỗi lần nén ngữ cảnh, bắt buộc đọc lại `biencard.md` trước khi dịch/sửa tiếp.
- Key biến runtime dùng tiếng Việt có dấu theo bảng dưới đây.
- Không trộn dấu cách và gạch dưới tùy tiện. Key đánh số dùng gạch dưới để dễ dò lỗi.
- Trong JSON tag ERA, key phải đặt trong dấu ngoặc kép.
- Trong JavaScript/statusbar, object key tiếng Việt có dấu hoặc dấu cách phải đọc bằng bracket notation, ví dụ `ch['Độ hảo cảm']`, không dùng `ch.Độ hảo cảm`.
- Dot path cho `getvar`/`eraGet` được dùng khi mỗi cấp key không chứa dấu chấm, ví dụ `stat_data.Hệ thống đại thế giới.Thanh Minh.Chương cốt truyện`.
- Giữ nguyên protocol/API: `stat_data`, `ERAMetaData`, `SelectedMks`, `EditLogs`, `era:writeDone`, `era:getCurrentVars`, `era:forceSync`, `<VariableInsert>`, `<VariableEdit>`, `<VariableDelete>`, `<VariableThink>`, `<era_data>`, `<variablethink>`, `<img>`, `<StatusPlaceHolderImpl/>`.

## Root biến chính

| Gốc Trung | Key Việt chuẩn |
|---|---|
| 世界信息 | Thông tin thế giới |
| 主角系统 | Hệ thống nhân vật chính |
| 创世神色痞技能 | Kỹ năng sắc lang của Sáng Thế Thần |
| 附近角色 | Nhân vật gần đây |
| 道具系统 | Hệ thống đạo cụ |
| 剧情支线系统 | Hệ thống nhánh cốt truyện |
| 章节推进条件 | Điều kiện tiến triển chương |
| 剧情选项 | Lựa chọn cốt truyện |
| 大世界系统 | Hệ thống đại thế giới |
| 媒体系统 | Hệ thống truyền thông |
| 成就系统 | Hệ thống thành tựu |

## Thông tin thế giới

| Gốc Trung | Key Việt chuẩn |
|---|---|
| 时间 | Thời gian |
| 日期 | Ngày tháng |
| 时段 | Khoảng thời gian |
| 位置 | Vị trí |
| 当前地点 | Địa điểm hiện tại |
| 详细位置 | Vị trí chi tiết |
| 人理崩塌倒计时 | Đếm ngược nhân lý sụp đổ |
| 天数 | Số ngày |
| 人理树主干残留率 | Tỷ lệ tàn dư thân chính Cây Nhân Lý |
| 异法域已攻略数量 | Số lượng Dị Pháp Vực đã công lược |
| 创世神满意度 | Độ hài lòng của Sáng Thế Thần |
| 已夺走女数量 | Số lượng gái trinh đã cướp |
| 已调教母猪数量 | Số lượng lợn nái đã điều giáo |
| 已调教母猪名单 | Danh sách lợn nái đã điều giáo |

## Hệ thống nhân vật chính

| Gốc Trung | Key Việt chuẩn |
|---|---|
| 姓名 | Họ tên |
| 性别 | Giới tính |
| 男 | Nam |
| 女 | Nữ |
| 年龄 | Tuổi |
| 身份背景 | Bối cảnh thân phận |
| 当前罪恶值 | Chỉ số tội ác hiện tại |
| 难度 | Độ khó |
| 简单难度 | Độ khó dễ |
| 正常难度 | Độ khó bình thường |
| 困难难度 | Độ khó khó |
| 令咒剩余次数 | Số lần Lệnh chú còn lại |
| 令咒技能 | Kỹ năng Lệnh chú |

## Kỹ năng Sáng Thế Thần

| Gốc Trung | Key Việt chuẩn |
|---|---|
| 技能描述 | Mô tả kỹ năng |
| 技能效果 | Hiệu ứng kỹ năng |
| 祈祷 | Cầu nguyện |

## Nhân vật gần đây

| Gốc Trung | Key Việt chuẩn |
|---|---|
| 好感度 | Độ hảo cảm |
| 实力评级 | Đánh giá thực lực |
| 技能 | Kỹ năng |
| 内心想法 | Suy nghĩ nội tâm |
| 处女 | Trinh nữ |
| 调教值 | Chỉ số điều giáo |
| 已为母猪 | Đã thành lợn nái |
| 当前穿着 | Trang phục hiện tại |
| 伤势 | Thương thế |
| 当前身体描述 | Mô tả cơ thể hiện tại |
| 身体状态 | Trạng thái cơ thể |
| 口腔 | Khoang miệng |
| 足部 | Bàn chân |
| 胸部 | Bầu ngực |
| 阴部 | Âm hộ |
| 后庭 | Hậu môn |

## Đạo cụ, nhánh truyện, lựa chọn

| Gốc Trung | Key Việt chuẩn |
|---|---|
| 道具数量 | Số lượng đạo cụ |
| 道具功能 | Chức năng đạo cụ |
| 支线剧情描述 | Mô tả nhánh cốt truyện |
| 倒计天数 | Số ngày đếm ngược |
| 委托奖励 | Phần thưởng ủy thác |
| 已完成 | Đã hoàn thành |
| 条件_1 | Điều_kiện_1 |
| 条件_2 | Điều_kiện_2 |
| 条件_3 | Điều_kiện_3 |
| 条件_4 | Điều_kiện_4 |
| 条件_5 | Điều_kiện_5 |
| 条件1_完成 | Điều_kiện_1_hoàn_thành |
| 条件2_完成 | Điều_kiện_2_hoàn_thành |
| 条件3_完成 | Điều_kiện_3_hoàn_thành |
| 条件4_完成 | Điều_kiện_4_hoàn_thành |
| 条件5_完成 | Điều_kiện_5_hoàn_thành |
| 选项1 | Lựa_chọn_1 |
| 选项2 | Lựa_chọn_2 |
| 选项3 | Lựa_chọn_3 |

## Hệ thống đại thế giới

| Gốc Trung | Key Việt chuẩn |
|---|---|
| 当前所在世界 | Thế giới hiện tại đang ở |
| 剧情章节 | Chương cốt truyện |
| 世界法则 | Pháp tắc thế giới |
| 法则稳定度 | Độ ổn định pháp tắc |
| 混沌汇流点 | Điểm Giao Thoa Hỗn Độn |
| 青冥 | Thanh Minh |
| 艾多拉 | Eldora |
| 霓虹2187 | Neon 2187 |
| 水之都 | Thủy Đô |
| 纪元零 | Kỷ Nguyên Zero |
| 幻想乡 | Ảo Tưởng Hương |
| 天平之端 | Tận Cùng Cán Cân |
| 挑选异法域 | Lựa chọn Dị Pháp Vực |
| 第1章 | Chương 1 |
| 第2章 | Chương 2 |
| 第3章 | Chương 3 |
| 第4章 | Chương 4 |
| 第5章 | Chương 5 |
| 第6章 | Chương 6 |
| 第7章 | Chương 7 |
| 第8章 | Chương 8 |

## Hệ thống truyền thông và thành tựu

| Gốc Trung | Key Việt chuẩn |
|---|---|
| 世界信息_1 | Thông_tin_thế_giới_1 |
| 世界信息_2 | Thông_tin_thế_giới_2 |
| 处女杀手 | Sát thủ trinh nữ |
| 养猪大亨 | Đại gia nuôi lợn |
| 神之子 | Con của Thần |
| 救世主 | Cứu thế chủ |
| 极恶之人 | Kẻ cực ác |

## Entry EJS và lorebook key quan trọng

| Gốc Trung | Key/comment Việt chuẩn |
|---|---|
| 青冥世界观 | Thế giới quan Thanh Minh |
| 青冥_第1章 | Thanh Minh_Chương 1 |
| 青冥_第2章 | Thanh Minh_Chương 2 |
| 青冥_第3章 | Thanh Minh_Chương 3 |
| 青冥_第4章 | Thanh Minh_Chương 4 |
| 青冥_第5章 | Thanh Minh_Chương 5 |
| 青冥_第6章 | Thanh Minh_Chương 6 |
| 艾多拉世界观 | Thế giới quan Eldora |
| 艾多拉_第1章 | Eldora_Chương 1 |
| 艾多拉_第2章 | Eldora_Chương 2 |
| 艾多拉_第3章 | Eldora_Chương 3 |
| 艾多拉_第4章 | Eldora_Chương 4 |
| 艾多拉_第5章 | Eldora_Chương 5 |
| 艾多拉_第6章 | Eldora_Chương 6 |
| 霓虹2187世界观 | Thế giới quan Neon 2187 |
| 霓虹2187_第1章 | Neon 2187_Chương 1 |
| 霓虹2187_第2章 | Neon 2187_Chương 2 |
| 霓虹2187_第3章 | Neon 2187_Chương 3 |
| 霓虹2187_第4章 | Neon 2187_Chương 4 |
| 霓虹2187_第5章 | Neon 2187_Chương 5 |
| 霓虹2187_第6章 | Neon 2187_Chương 6 |
| 水之都世界观 | Thế giới quan Thủy Chi Đô |
| 水之都_第1章 | Thủy Đô_Chương 1 |
| 水之都_第2章 | Thủy_Đô_Chương_2 |
| 水之都_第3章 | Thủy_Đô_Chương_3 |
| 水之都_第4章 | Thủy_Đô_Chương_4 |
| 水之都_第5章 | Thủy_Đô_Chương_5 |
| 水之都_第6章 | Thủy_Đô_Chương_6 |
| 幻想乡世界观 | Thế giới quan Ảo Tưởng Hương |
| 幻想乡_第1章 | Ảo Tưởng Hương_Chương 1 |
| 幻想乡_第2章 | Ảo Tưởng Hương_Chương 2 |
| 幻想乡_第3章 | Ảo Tưởng Hương_Chương 3 |
| 幻想乡_第4章 | Ảo Tưởng Hương_Chương 4 |
| 幻想乡_第5章 | Ảo Tưởng Hương_Chương 5 |
| 幻想乡_第6章 | Ảo Tưởng Hương_Chương 6 |
| 幻想乡_第7章 | Ảo Tưởng Hương_Chương 7 |
| 幻想乡_第8章 | Ảo Tưởng Hương_Chương 8 |
| 混沌汇流点世界观 | Thế giới quan Điểm Giao Thoa Hỗn Độn |
| 简单难度 | Độ khó dễ |
| 正常难度 | Độ khó bình thường |
| 困难难度 | Độ khó khó |

## Quy tắc ảnh

- Regex CG gốc tải từ `https://zyxjack123.top/碎界纪元/$1.webp`.
- Vì asset ngoài có khả năng dùng path Trung gốc, không được chỉ dịch path ảnh sang Việt rồi bỏ key gốc.
- Cách an toàn cho bản dịch: hướng dẫn người chơi/AI bằng tiếng Việt nhưng giữ format có thể ánh xạ được, hoặc thêm mapping Việt -> Trung trước khi build URL.
- Các tag kỹ thuật giữ nguyên: `<img>...</img>`, `SFW`, `NSFW`, `{{roll: dN}}`.

