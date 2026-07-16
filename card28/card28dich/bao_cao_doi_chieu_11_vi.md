# Báo cáo đối chiếu `11_vi` với `终末之诗`

## Kết luận

- Card: **MVU-Zod** (có `registerMvuSchema`, MagVarUpdate, 2 Tavern Helper script, 24 Regex script và lorebook 1.050 entry).
- ID/lần lượt entry khớp: **True**. Metadata kỹ thuật của 1.050 entry không bị đổi: **True**.
- Không phát hiện entry bị cắt ngắn theo ngưỡng cơ học 65%: **0**.
- Tuy vậy, đây chưa phải bản Việt hóa hoàn chỉnh: còn **86** entry có nội dung Hán, **86** comment Hán, **840** entry có keyword Hán, **28** entry có secondary keyword Hán. Nội dung/tên của hai Helper script và toàn bộ 24 regex vẫn chưa được dịch. Riêng hai Helper script còn thiếu metadata `export_with` vốn có trong bản gốc.

## Danh sách lỗi cần xử lý trước

- Entry còn nội dung Hán: **86** — phân loại: {'mvu_plot': 66, 'initvar': 1, 'mvu_update': 19}.
- Entry `initvar` còn nguyên tiếng Trung: **64758**. Đây là khởi tạo biến MVU, phải dịch đồng bộ với schema script.
- Entry `mvu_update` còn tiếng Trung: **19**.
- Keyword Hán còn lại: **840** entry. Trong đó **24** entry giữ nguyên toàn bộ keyword gốc, không hề thêm keyword Việt.
- Secondary keyword Hán còn lại: **28** entry.
- Lệch cấu trúc: **3**.

### ID còn nội dung Hán

78, 80, 4176, 49689, 55270, 55310, 63717, 64564, 64758, 66954, 68552, 72712, 80382, 96817, 109575, 123029, 160640, 163603
166096, 187177, 195144, 197890, 206504, 208595, 214767, 240321, 241005, 261163, 268439, 275410, 313911, 326175, 326990, 364432, 365519, 373470
399988, 422084, 422804, 423465, 442538, 447651, 455716, 474264, 479794, 480503, 532947, 533944, 536989, 560176, 570019, 581385, 582412, 593848
604153, 614353, 656370, 696961, 710398, 722734, 726022, 726125, 729534, 736866, 749648, 763078, 785006, 805824, 812835, 815657, 823173, 823204
829431, 835544, 849681, 853786, 886953, 902177, 911509, 912279, 914511, 947570, 973796, 975628, 977517, 990581

### ID keyword Hán còn lại

0, 1, 2, 3, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22
23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
41, 43, 44, 45, 46, 47, 48, 49, 51, 52, 58, 59, 60, 61, 62, 63, 64, 65
66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 3435, 3560, 4860, 6535, 7377, 8085
9052, 9191, 9867, 11601, 12055, 13484, 14614, 15299, 15651, 16907, 17298, 17716, 19172, 20889, 22573, 24119, 27012, 27097
27236, 27421, 32727, 33593, 37552, 38223, 40896, 41248, 47904, 48168, 48316, 48549, 49689, 50737, 51132, 52600, 55310, 59976
60285, 61206, 62629, 63062, 63717, 63924, 64564, 66951, 66954, 67660, 67870, 69407, 69791, 70028, 72712, 74468, 74903, 75619
78272, 79079, 79705, 80369, 80619, 80994, 81743, 82509, 82572, 82657, 84080, 84589, 86829, 87414, 89264, 89349, 91541, 92531
92926, 93561, 94385, 96221, 97398, 97406, 98164, 99847, 101306, 103426, 105364, 106293, 106454, 106853, 109575, 111313, 111339, 111351
112348, 112426, 113184, 113212, 117227, 118601, 118721, 119733, 121356, 121503, 121925, 123029, 123886, 125189, 125477, 125755, 126195, 126920
127247, 127846, 128048, 128459, 128960, 129384, 130335, 132095, 132865, 134067, 135941, 136518, 136910, 137825, 142511, 143694, 147834, 148000
148496, 148977, 149811, 150162, 152939, 158233, 158684, 159588, 163603, 163983, 166096, 169829, 170948, 172572, 172918, 174006, 174593, 175176
175632, 176119, 177729, 178038, 179753, 181853, 182695, 183017, 184988, 185792, 186264, 189780, 190350, 192168, 194286, 194369, 197537, 199812
200244, 200470, 204727, 206145, 206746, 208040, 208595, 212144, 214767, 215435, 215894, 216184, 217108, 218228, 218383, 218593, 221852, 226157
227508, 230474, 230488, 231801, 233175, 233434, 234502, 235277, 238014, 241005, 242720, 242908, 249980, 250031, 254495, 254848, 256007, 256058
256610, 259044, 259353, 260378, 261163, 262161, 262788, 263892, 264132, 265973, 269076, 270169, 270347, 273354, 275582, 275906, 275989, 277270
278483, 279470, 281683, 282361, 282543, 282864, 283999, 284000, 284359, 286720, 287543, 287746, 289154, 289308, 290880, 292342, 294560, 295104
295485, 297953, 299042, 301903, 302503, 303440, 305641, 306813, 307186, 307642, 307662, 307711, 308580, 308682, 312141, 313598, 314811, 316423
318486, 318845, 319629, 320233, 324197, 325066, 325694, 326630, 327446, 328506, 329063, 329975, 330739, 332843, 333072, 334238, 334629, 334786
335773, 336192, 336978, 342737, 342971, 343818, 348222, 348253, 348840, 350357, 350678, 351063, 351542, 353172, 353376, 354597, 355690, 358656
358678, 360935, 363822, 365519, 369041, 370164, 371923, 379989, 380606, 381165, 381822, 382705, 384120, 385715, 389560, 391096, 394227, 394459
395936, 396354, 397094, 398609, 399221, 399889, 400748, 401267, 401413, 402221, 402940, 403923, 411544, 414283, 415127, 415671, 416389, 417197
417263, 417351, 422388, 422804, 423006, 424257, 425894, 428384, 433029, 434433, 437718, 437911, 438856, 439553, 439567, 441627, 441874, 442147
442457, 444018, 444445, 445006, 445190, 445805, 446440, 447651, 447866, 449937, 451203, 453812, 453990, 454994, 456025, 459590, 460218, 462080
462435, 463107, 463971, 466928, 468687, 469379, 470014, 473592, 474563, 475187, 475508, 478476, 478771, 478931, 479794, 480412, 480461, 480722
483975, 484926, 485043, 485133, 485475, 486604, 487295, 487373, 487609, 488064, 488777, 490396, 492914, 493798, 494496, 497304, 497469, 499097
499916, 501279, 503140, 503698, 505708, 505948, 506114, 506341, 506425, 509300, 512286, 512827, 517357, 518844, 519619, 519681, 521403, 524351
527512, 530486, 530537, 531134, 535393, 536302, 537487, 538174, 538850, 542627, 543423, 544271, 545258, 545506, 549621, 551108, 552331, 552804
553517, 553663, 554822, 557062, 557602, 563158, 564133, 564805, 564933, 571434, 571798, 572747, 575305, 576527, 577547, 578996, 579036, 580467
580891, 581066, 581385, 583219, 583370, 584314, 584574, 584857, 587425, 590948, 591976, 592164, 593406, 596311, 599190, 600290, 600373, 601344
601511, 602410, 605177, 606304, 607047, 608494, 609241, 610649, 613215, 615957, 617132, 620205, 622554, 625923, 627648, 628111, 628625, 631110
633083, 633417, 635363, 636136, 637077, 642743, 643063, 646729, 648008, 648770, 649535, 650416, 650428, 651011, 651520, 652958, 655940, 657071
657227, 658574, 658893, 658998, 661196, 661252, 661345, 662458, 663963, 664587, 665816, 666211, 666436, 666962, 667562, 667629, 667874, 669176
672610, 673889, 674475, 677321, 681493, 682268, 683958, 685703, 690127, 690616, 691735, 692642, 695196, 696225, 696754, 699159, 700496, 700785
706825, 707014, 708078, 715633, 716485, 716541, 722433, 723177, 727144, 728157, 731084, 731308, 734194, 735842, 736437, 737219, 737980, 741798
742827, 743183, 744776, 745240, 748010, 749648, 749827, 750541, 751771, 751841, 754892, 754992, 755680, 756841, 758441, 758599, 762447, 766532
768516, 769036, 769582, 770583, 772116, 776448, 777674, 780321, 782066, 783647, 784489, 785532, 786329, 786677, 788943, 789652, 790838, 791082
792599, 796040, 797828, 798451, 800243, 804442, 807218, 807845, 808807, 808882, 808992, 809034, 811581, 811646, 812948, 814817, 817874, 818763
819578, 822247, 823703, 823803, 823877, 828377, 828388, 828948, 829431, 830092, 831659, 831691, 832441, 833652, 834710, 835544, 836377, 836664
836976, 837463, 839668, 839832, 840138, 842638, 842841, 844252, 846132, 847193, 850421, 850882, 851167, 851930, 852108, 854857, 855948, 856586
858262, 859912, 860473, 861542, 862636, 862753, 864051, 865755, 866936, 867382, 870855, 870991, 871146, 872967, 875850, 876202, 876918, 878005
878177, 878562, 878621, 878722, 880830, 882444, 883656, 884548, 884856, 885642, 890761, 891692, 893435, 897373, 897520, 897605, 897666, 898340
898875, 898885, 900922, 903526, 903846, 904174, 906124, 906794, 906966, 907256, 907790, 908616, 911509, 911918, 912558, 914608, 914668, 914693
915341, 915608, 919526, 921321, 923023, 926140, 928845, 928939, 930001, 930104, 931420, 933918, 934170, 935767, 936406, 938605, 938912, 939610
941306, 943824, 947894, 948641, 948963, 949187, 950267, 951172, 953625, 953820, 954173, 957497, 958796, 959141, 959330, 959582, 961936, 963593
964113, 964713, 965425, 966260, 969438, 969486, 971043, 973179, 973515, 974201, 975628, 976510, 978006, 978446, 978819, 979025, 979239, 979473
980254, 980363, 982332, 982510, 984361, 984752, 987748, 991578, 993045, 993075, 997971, 999942

### ID secondary keyword Hán còn lại

3560, 14614, 48316, 111339, 112426, 136910, 181853, 200244, 231801, 282543, 295485, 332843, 336192, 402940, 439553, 463971, 487295, 506114
776448, 789652, 797828, 800243, 804442, 823877, 906124, 919526, 948963, 982510

### ID có keyword gốc bị giữ nguyên hoàn toàn

49689, 55310, 63717, 64564, 66954, 72712, 109575, 123029, 163603, 166096, 208595, 214767, 241005, 261163, 365519, 422804, 447651, 479794
581385, 749648, 829431, 835544, 911509, 975628

## Lệch cấu trúc xác nhận được

- ID `15` — gốc: `罗科铎`; bản Việt: `La Khoa Đạc`; cấu trúc gốc `{'token_goc_nhon': 2, 'mo_mau': 0, 'dong_mau': 0, 'khoi_ma': 0, 'option_mo': 0, 'option_dong': 0}`, bản Việt `{'token_goc_nhon': 1, 'mo_mau': 0, 'dong_mau': 0, 'khoi_ma': 0, 'option_mo': 0, 'option_dong': 0}`.
- ID `836976` — gốc: `死亡大师斯尼奇`; bản Việt: `Đại sư tử vong Snikch`; cấu trúc gốc `{'token_goc_nhon': 2, 'mo_mau': 0, 'dong_mau': 0, 'khoi_ma': 0, 'option_mo': 0, 'option_dong': 0}`, bản Việt `{'token_goc_nhon': 7, 'mo_mau': 0, 'dong_mau': 0, 'khoi_ma': 0, 'option_mo': 0, 'option_dong': 0}`.
- ID `915341` — gốc: `阿达内赫`; bản Việt: `Adaneh`; cấu trúc gốc `{'token_goc_nhon': 2, 'mo_mau': 0, 'dong_mau': 0, 'khoi_ma': 0, 'option_mo': 0, 'option_dong': 0}`, bản Việt `{'token_goc_nhon': 3, 'mo_mau': 0, 'dong_mau': 0, 'khoi_ma': 0, 'option_mo': 0, 'option_dong': 0}`.

Ghi chú xác minh thủ công: ID 15 thực sự mất `</La Khoa Đạc>`. ID 836976 và 915341 tự thêm các cụm `<Liên Hợp Thành>` — nên đổi thành `Liên Hợp Thành` (không dùng dấu `< >`).

## Danh sách đầy đủ entry nguy cơ cao

- ID `15` · `罗科铎` → `La Khoa Đạc` · loại `khac` · lỗi: KEY_TIENg_TRUNG_CON_LAI, LECH_CAU_TRUC_THE_HOAC_MAU · độ dài 1036→1289.
- ID `78` · `[mvu_plot]【剧本-螃蟹狂热者】` → `[mvu_plot]【剧本-螃蟹狂热者】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 276→276.
- ID `80` · `[mvu_plot]【剧本-新生的人类】` → `[mvu_plot]【剧本-新生的人类】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 293→293.
- ID `4176` · `[mvu_plot]地图区域(旧版` → `[mvu_plot]地图区域(旧版` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 5313→5313.
- ID `49689` · `[mvu_plot]血战惜败` → `[mvu_plot]血战惜败` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 256→256.
- ID `55270` · `[mvu_plot]选项` → `[mvu_plot]选项` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 2596→2596.
- ID `55310` · `[mvu_plot]势均力敌` → `[mvu_plot]势均力敌` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 218→218.
- ID `63717` · `[mvu_plot]略处下风` → `[mvu_plot]略处下风` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 241→241.
- ID `64564` · `[mvu_plot]略处上风` → `[mvu_plot]略处上风` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 269→269.
- ID `64758` · `[initvar]变量初始化勿开` → `[initvar]变量初始化勿开` · loại `initvar` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 2629→2629.
- ID `66954` · ` [mvu_plot]【比普 / 欢乐之神】` → ` [mvu_plot]【比普 / 欢乐之神】` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 336→336.
- ID `68552` · `[mvu_plot]【剧本-重生】` → `[mvu_plot]【剧本-重生】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 234→234.
- ID `72712` · ` [mvu_plot]克拉尔` → ` [mvu_plot]克拉尔` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 314→314.
- ID `80382` · `[mvu_plot]剧本-【人棍】` → `[mvu_plot]剧本-【人棍】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 281→281.
- ID `96817` · `[mvu_plot]故事描写须知` → `[mvu_plot]故事描写须知` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 2754→2754.
- ID `109575` · `[mvu_plot]失落的图书馆` → `[mvu_plot]失落的图书馆` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 191→191.
- ID `123029` · `[mvu_update]已逃跑` → `[mvu_update]已逃跑` · loại `mvu_update` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 70→70.
- ID `160640` · `[mvu_plot]【剧本-流浪者】` → `[mvu_plot]【剧本-流浪者】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 231→231.
- ID `163603` · `[mvu_plot]失落的军械库` → `[mvu_plot]失落的军械库` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 168→168.
- ID `166096` · `[mvu_plot]被制服` → `[mvu_plot]被制服` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 314→314.
- ID `187177` · `[mvu_update]NPC生成种族` → `[mvu_update]NPC生成种族` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1845→1845.
- ID `195144` · `[mvu_plot]【剧本-大剑】` → `[mvu_plot]【剧本-大剑】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 276→276.
- ID `197890` · `[mvu_update]地图区域` → `[mvu_update]地图区域` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1608→1608.
- ID `206504` · `[mvu_plot]人物好感度变化正文` → `[mvu_plot]人物好感度变化正文` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1978→1978.
- ID `208595` · `[mvu_plot]战斗总结额外描写` → `[mvu_plot]战斗总结额外描写` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 293→293.
- ID `214767` · ` [mvu_plot]【奇特林】` → ` [mvu_plot]【奇特林】` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 468→468.
- ID `240321` · `[mvu_plot]【剧本-十字军东征】` → `[mvu_plot]【剧本-十字军东征】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 276→276.
- ID `241005` · `[mvu_plot]投降` → `[mvu_plot]投降` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 319→319.
- ID `261163` · ` [mvu_plot]奥克兰` → ` [mvu_plot]奥克兰` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 312→312.
- ID `268439` · `[mvu_plot]【剧本-贵族之子】` → `[mvu_plot]【剧本-贵族之子】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 645→645.
- ID `275410` · `[mvu_plot]【剧本-蒙格勒迷途者】` → `[mvu_plot]【剧本-蒙格勒迷途者】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 245→245.
- ID `313911` · `[mvu_update]人物好感度变化` → `[mvu_update]人物好感度变化` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1575→1575.
- ID `326175` · `[mvu_update]物品分类` → `[mvu_update]物品分类` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1120→1120.
- ID `326990` · `[mvu_update]护甲系统规则` → `[mvu_update]护甲系统规则` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 719→719.
- ID `364432` · `[mvu_plot]【剧本-黑暗之女】` → `[mvu_plot]【剧本-黑暗之女】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 257→257.
- ID `365519` · `[mvu_plot]悲惨失败` → `[mvu_plot]悲惨失败` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 276→276.
- ID `373470` · `[mvu_update]NPC生成指南` → `[mvu_update]NPC生成指南` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 2272→2272.
- ID `399988` · `[mvu_plot]剧本-【虚伪者】` → `[mvu_plot]剧本-【虚伪者】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 732→732.
- ID `422084` · `[mvu_plot]终末之诗` → `[mvu_plot]终末之诗` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 2612→2612.
- ID `422804` · ` [mvu_plot]【祈祷与赐福】` → ` [mvu_plot]【祈祷与赐福】` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 1273→1273.
- ID `423465` · `[mvu_plot]【剧本-渔岛难民】` → `[mvu_plot]【剧本-渔岛难民】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 226→226.
- ID `442538` · `[mvu_plot]【剧本-异端之火】` → `[mvu_plot]【剧本-异端之火】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 330→330.
- ID `447651` · `[mvu_plot]酣畅大胜` → `[mvu_plot]酣畅大胜` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 238→238.
- ID `455716` · `[mvu_plot]【剧本-海盗之梦】` → `[mvu_plot]【剧本-海盗之梦】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 245→245.
- ID `474264` · `[mvu_plot]【剧本-流浪商人】` → `[mvu_plot]【剧本-流浪商人】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 261→261.
- ID `479794` · `[mvu_plot]血战险胜` → `[mvu_plot]血战险胜` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 260→260.
- ID `480503` · `[mvu_plot]【剧本-食人族猎人】` → `[mvu_plot]【剧本-食人族猎人】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 304→304.
- ID `532947` · `[mvu_update]任务系统` → `[mvu_update]任务系统` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 93→93.
- ID `533944` · `[mvu_plot]【剧本-圣民】` → `[mvu_plot]【剧本-圣民】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 260→260.
- ID `536989` · `[mvu_plot]武器设定` → `[mvu_plot]武器设定` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1917→1917.
- ID `560176` · `[mvu_plot]经济货币` → `[mvu_plot]经济货币` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1140→1140.
- ID `570019` · `[mvu_plot]<对话规则>` → `[mvu_plot]<对话规则>` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 618→618.
- ID `581385` · `[mvu_plot]史诗大捷` → `[mvu_plot]史诗大捷` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 301→301.
- ID `582412` · `[mvu_plot]【剧本-带着狗的家伙】` → `[mvu_plot]【剧本-带着狗的家伙】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 240→240.
- ID `593848` · `[mvu_plot]大陆武器` → `[mvu_plot]大陆武器` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1076→1076.
- ID `604153` · `[mvu_update]派系好感度变化` → `[mvu_update]派系好感度变化` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 765→765.
- ID `614353` · `[mvu_plot]【剧本-人生谷底】` → `[mvu_plot]【剧本-人生谷底】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 247→247.
- ID `656370` · `[mvu_plot]【剧本-男奴】` → `[mvu_plot]【剧本-男奴】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 247→247.
- ID `696961` · `[mvu_plot]<世界观与设定>` → `[mvu_plot]<世界观与设定>` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 899→899.
- ID `710398` · `[mvu_plot]剧本-【怪物猎人】` → `[mvu_plot]剧本-【怪物猎人】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 435→435.
- ID `722734` · `[mvu_plot]【剧本-顶级猎手】` → `[mvu_plot]【剧本-顶级猎手】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 461→461.
- ID `726022` · `[mvu_plot]作者自玩【剧本-穿越小队】` → `[mvu_plot]作者自玩【剧本-穿越小队】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 429→429.
- ID `726125` · `[mvu_plot]地图区域` → `[mvu_plot]地图区域` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 6655→6655.
- ID `729534` · `[mvu_plot]【剧本-兄弟会】` → `[mvu_plot]【剧本-兄弟会】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 350→350.
- ID `736866` · `[mvu_plot]种族` → `[mvu_plot]种族` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 3869→3869.
- ID `749648` · ` [mvu_plot]【比拉克】` → ` [mvu_plot]【比拉克】` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 428→428.
- ID `763078` · `[mvu_plot]剧本-【奴隶主】` → `[mvu_plot]剧本-【奴隶主】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 261→261.
- ID `785006` · `[mvu_update]变量输出格式` → `[mvu_update]变量输出格式` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1970→1970.
- ID `805824` · `[mvu_update]经验值加成` → `[mvu_update]经验值加成` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 184→184.
- ID `812835` · `[mvu_plot]房屋用途介绍` → `[mvu_plot]房屋用途介绍` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 414→414.
- ID `815657` · `[mvu_update]医疗物品规定` → `[mvu_update]医疗物品规定` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1093→1093.
- ID `823173` · `[mvu_update]NPC生成种族(暂时废弃` → `[mvu_update]NPC生成种族(暂时废弃` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 2884→2884.
- ID `823204` · `[mvu_update]武器分类` → `[mvu_update]武器分类` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 3307→3307.
- ID `829431` · ` [mvu_plot]【娜尔可 】` → ` [mvu_plot]【娜尔可 】` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 294→294.
- ID `835544` · ` [mvu_plot]肯恩` → ` [mvu_plot]肯恩` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 342→342.
- ID `836976` · `死亡大师斯尼奇` → `Đại sư tử vong Snikch` · loại `khac` · lỗi: KEY_TIENg_TRUNG_CON_LAI, LECH_CAU_TRUC_THE_HOAC_MAU · độ dài 1228→3748.
- ID `849681` · `[mvu_update]武器生成` → `[mvu_update]武器生成` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 97→97.
- ID `853786` · `[mvu_plot]【剧本-无名之辈】` → `[mvu_plot]【剧本-无名之辈】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 231→231.
- ID `886953` · `[mvu_plot]派系好感度变化正文` → `[mvu_plot]派系好感度变化正文` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1482→1482.
- ID `902177` · `[mvu_plot]掷骰规则` → `[mvu_plot]掷骰规则` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1312→1312.
- ID `911509` · ` [mvu_plot]罪恶` → ` [mvu_plot]罪恶` · loại `mvu_plot` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 383→383.
- ID `912279` · `[mvu_plot]【剧本-呜哇呜哇哇(夺回家园)】` → `[mvu_plot]【剧本-呜哇呜哇哇(夺回家园)】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 248→248.
- ID `914511` · `[mvu_update]武器品质规则` → `[mvu_update]武器品质规则` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1578→1578.
- ID `915341` · `阿达内赫` → `Adaneh` · loại `khac` · lỗi: KEY_TIENg_TRUNG_CON_LAI, LECH_CAU_TRUC_THE_HOAC_MAU · độ dài 1099→3570.
- ID `947570` · `[mvu_update]变量更新规则1` → `[mvu_update]变量更新规则1` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 8399→8399.
- ID `973796` · `[mvu_plot]【剧本-克拉尔之选】` → `[mvu_plot]【剧本-克拉尔之选】` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 228→228.
- ID `975628` · `[mvu_update]被制服` → `[mvu_update]被制服` · loại `mvu_update` · lỗi: KEY_TIENg_TRUNG_CON_LAI, COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI, KEY_CHUA_DICH_HOAC_GIU_NGUYEN · độ dài 79→79.
- ID `977517` · `[mvu_plot]战斗描写` → `[mvu_plot]战斗描写` · loại `mvu_plot` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 1628→1628.
- ID `990581` · `[mvu_update]NPC角色等级` → `[mvu_update]NPC角色等级` · loại `mvu_update` · lỗi: COMMENT_TIENg_TRUNG_CON_LAI, CONTENT_TIENg_TRUNG_CON_LAI · độ dài 876→876.

Danh sách/định lượng đầy đủ cho **mọi 1.050 entry** nằm trong JSON cùng thư mục, gồm ID, comment hai bản, toàn bộ keys, độ dài, ký tự Hán còn lại, chữ ký cấu trúc và cờ lỗi.

## Tavern Helper scripts

- Script 0 — `变量结构5.29`: nội dung/tên giữ nguyên; còn 1.708 ký tự Hán; **thiếu `export_with: {data: true, button: true}`**; URL: https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js.
- Script 1 — `MVUbeta`: code import giữ nguyên; **thiếu `export_with: {data: true, button: true}`**. Sáu nhãn nút còn Trung (`重新处理变量`, `重新读取初始变量`, `清除旧楼层变量`, `快照楼层`, `重演楼层`, `重试额外模型解析`) có thể dịch vì là UI, không phải tên biến; URL: https://testingcf.jsdelivr.net/gh/MagicalAstrogy/MagVarUpdate/artifact/bundle.js.

## Regex scripts

- Regex 0 — `[美化]变量更新中-夜空诗意`: giống hệt gốc = **True**; Hán trong tên/find/replace = 11/0/8; `findRegex`: `/<UpdateVariable(?:variable)?>(?!.*<\/UpdateVariable(?:variable)?>)\s*(.*)\s*$/gsi`.
- Regex 1 — `[美化]完整变量完成-夜空诗意`: giống hệt gốc = **True**; Hán trong tên/find/replace = 12/0/8; `findRegex`: `/<UpdateVariable(?:variable)?>\s*(.*)\s*<\/UpdateVariable(?:variable)?>/gsi`.
- Regex 2 — `对 AI 隐藏状态栏`: giống hệt gốc = **True**; Hán trong tên/find/replace = 6/0/0; `findRegex`: `<StatusPlaceHolderImpl/>`.
- Regex 3 — `仅格式思维链`: giống hệt gốc = **True**; Hán trong tên/find/replace = 6/0/0; `findRegex`: `/<Analysis>[\s\S]+?<\/Analysis>/gm`.
- Regex 4 — `只发送最新3楼的变量更新`: giống hệt gốc = **True**; Hán trong tên/find/replace = 11/0/0; `findRegex`: `/<UpdateVariable>[\s\S]*?</UpdateVariable>/gm`.
- Regex 5 — `状态栏美化`: giống hệt gốc = **True**; Hán trong tên/find/replace = 5/0/4; `findRegex`: `<StatusPlaceHolderImpl/>`.
- Regex 6 — `开局`: giống hệt gốc = **True**; Hán trong tên/find/replace = 2/2/2; `findRegex`: `【【开局】】`.
- Regex 7 — `战斗栏`: giống hệt gốc = **True**; Hán trong tên/find/replace = 3/0/3; `findRegex`: `<FIGHT>`.
- Regex 8 — `kenshi赐福系统`: giống hệt gốc = **True**; Hán trong tên/find/replace = 4/4/4; `findRegex`: `<特质赐福>`.
- Regex 9 — `kenshi基地据点`: giống hệt gốc = **True**; Hán trong tên/find/replace = 4/4/4; `findRegex`: `<据点建设>`.
- Regex 10 — `选项`: giống hệt gốc = **True**; Hán trong tên/find/replace = 2/0/3; `findRegex`: `/<option>([\s\S]*?)<\/option>/g`.
- Regex 11 — `作者自测`: giống hệt gốc = **True**; Hán trong tên/find/replace = 4/2/2; `findRegex`: `【【开局】】`.
- Regex 12 — `状态栏美化(备用)`: giống hệt gốc = **True**; Hán trong tên/find/replace = 7/0/4; `findRegex`: `<StatusPlaceHolderImpl/>`.
- Regex 13 — `开局(备用)`: giống hệt gốc = **True**; Hán trong tên/find/replace = 4/2/2; `findRegex`: `【【开局】】`.
- Regex 14 — `战斗栏(备用)`: giống hệt gốc = **True**; Hán trong tên/find/replace = 5/0/3; `findRegex`: `<FIGHT>`.
- Regex 15 — `选项(备用)`: giống hệt gốc = **True**; Hán trong tên/find/replace = 4/0/3; `findRegex`: `/<option>([\s\S]*?)<\/option>/g`.
- Regex 16 — `骰子(作者自测)`: giống hệt gốc = **True**; Hán trong tên/find/replace = 6/2/2; `findRegex`: `【【开局】】`.
- Regex 17 — `骰子*（备用`: giống hệt gốc = **True**; Hán trong tên/find/replace = 4/0/2; `findRegex`: `<Destiny>([\s\S]*?)</Destiny>`.
- Regex 18 — `特质系统（没写`: giống hệt gốc = **True**; Hán trong tên/find/replace = 6/4/4; `findRegex`: `<特质系统>`.
- Regex 19 — `骰子（和数据库美化冲突，关一个即可`: giống hệt gốc = **True**; Hán trong tên/find/replace = 15/0/2; `findRegex`: `<Destiny>([\s\S]*?)</Destiny>`.
- Regex 20 — `营地系统`: giống hệt gốc = **True**; Hán trong tên/find/replace = 4/4/4; `findRegex`: `<营地系统>`.
- Regex 21 — `营地系统(备用)`: giống hệt gốc = **True**; Hán trong tên/find/replace = 6/4/4; `findRegex`: `<营地系统>`.
- Regex 22 — `对ai隐藏选项`: giống hệt gốc = **True**; Hán trong tên/find/replace = 5/0/0; `findRegex`: `/<option>([\s\S]*?)<\/option>/g`.
- Regex 23 — `对ai隐藏特质`: giống hệt gốc = **True**; Hán trong tên/find/replace = 5/4/0; `findRegex`: `<特质系统>`.

## Giới hạn kiểm tra

- Báo cáo kiểm tra đầy đủ sự khớp ID, metadata, độ dài, Hán còn sót và cấu trúc thẻ/mẫu.
- Khía cạnh sắc thái hay nghĩa dịch không thể được chứng nhận chỉ bằng so sánh cơ học; JSON đi kèm chứa nội dung đầy đủ của mọi entry nguy cơ cao để dịch lại chính xác ở lượt sau.

## Lỗi chức năng cần sửa trước khi chơi

- `first_mes` của bản Việt đã là `【【Khởi đầu】】`, nhưng regex Opening số 6 đang bật vẫn tìm `【【开局】】`; vì vậy nó sẽ **không chạy**. Đổi `findRegex` của regex 6 thành `【【Khởi đầu】】` (và 11/13 nếu sau này bật các bản dự phòng).
- Hai regex xúc xắc 17 và 19 cùng bật, cùng bắt `<Destiny>…</Destiny>`: chỉ bật một.
- Hai Helper script thiếu `export_with: {data: true, button: true}`; cần khôi phục trước khi xuất card mới.

## Không đồng nhất tên biến/nhãn

Bản dịch hiện tại dùng nhiều tên Việt khác nhau cho cùng một trường. Với MVU, những trường thuộc `Schema`, `initvar`, rule `[mvu_update]` và HTML UI phải dùng **một tên duy nhất**. Bảng dưới trích toàn bộ biến thể phát hiện từ các dòng song song trong entry.

| Gốc | Tên Việt đề xuất | Số biến thể hiện tại | Biến thể đã thấy |
|---|---|---:|---|
| `力量` | `Sức mạnh` | 2 | Sức mạnh (370); Nhanh nhẹn (1) |
| `敏捷` | `Nhanh nhẹn` | 4 | Nhanh nhẹn (366); Mẫn tiệp (2); Sự nhanh nhẹn (2); Cảm nhận (1) |
| `感知` | `Nhận thức` | 5 | Cảm nhận (271); Nhận thức (88); Cảm quan (9); Giác quan (2); Thể chất (1) |
| `体质` | `Thể chất` | 2 | Thể chất (370); Độ bền (1) |
| `韧性` | `Ý chí` | 13 | Độ bền (123); Độ dẻo dai (84); Sức bền (53); Bền bỉ (29); Dẻo dai (21); Sức chịu đựng (17); Độ cứng cáp (11); Kiên cường (6) |
| `智力` | `Trí tuệ` | 3 | Trí tuệ (265); Trí lực (105); Sức hút (1) |
| `魅力` | `Sức hút` | 6 | Sức hút (296); Mị lực (51); Sức hấp dẫn (17); Mê hoặc (5); Mức độ hấp dẫn (1); Đặc điểm (1) |
| `属性` | `Thuộc tính` | 4 | Thuộc tính (244); Chỉ số (124); 属性 (2); Sức mạnh (1) |
| `特质` | `Đặc tính` | 6 | Đặc điểm (360); Đặc tính (6); 特质 (3); - Môi trường khô hạn (1); Đặc chất (1); Đặc trưng (1) |
| `护甲` | `Giáp` | 6 | Áo giáp (257); Giáp (105); 护甲 (5); Giáp bảo vệ (2); Giáp trụ (2); Loại (1) |
| `派系` | `Phe phái` | 9 | Phe phái (327); Phái (39); 派系 (5); Phe (4); Phái hệ (2); Phái/Thế lực (2); Phái thế lực (1); Cấp độ (1) |
| `等级` | `Cấp độ` | 7 | Cấp độ (483); 等级 (4); Cấp (3); Cấp bậc (2); cấp độ (1); Vũ khí chính (1); Vai trò (1) |
| `身份` | `Thân phận` | 3 | Thân phận (45); Danh tính (12); 身份 (3) |
| `品质` | `Phẩm chất` | 5 | Chất lượng (251); Phẩm chất (151); 品质 (4); Độ hiếm (3); Giới thiệu (1) |
| `伤害骰` | `Xúc xắc sát thương` | 8 | Xúc xắc sát thương (386); 伤害骰 (48); Sát thương xúc xắc (6); Sát thương đổ xúc xắc (5); Sát thương (3); Sát thương (Xúc xắc) (2); Loại sát thương (1); Súc sắc sát thương (1) |
| `防护能力(DR)` | `Khả năng phòng thủ (DR)` | 8 | Khả năng phòng thủ (DR) (27); Khả năng bảo vệ (DR) (12); Khả năng phòng ngự (DR) (8); Khả năng phòng hộ (DR) (4); Khả năng phòng vệ (DR) (4); Khả năng phòng hộ(DR) (3); 防护能力(DR) (2); Khả năng bảo vệ(DR) (1) |

Đặc biệt `韧性` hiện có 13 cách dịch; nên chốt một khóa, ví dụ `'Ý chí'`, rồi dùng chính xác `'Ý chí'` trong schema, initvar, lorebook `[mvu_update]`, regex/HTML và dữ liệu runtime.

## Link ngoài: giữ URL hay Việt hóa nội dung?

- Bật · **Tavern Helper script 0: 变量结构5.29** — `Thư viện MVU/MagVarUpdate từ xa`. Giữ nguyên URL và mã import; đây là thư viện triển khai, không phải văn bản card.
- Bật · **Tavern Helper script 1: MVUbeta** — `Thư viện MVU/MagVarUpdate từ xa`. Giữ nguyên URL và mã import; đây là thư viện triển khai, không phải văn bản card.
- Bật · **Regex 5: 状态栏美化** — `Giao diện HTML từ xa có phụ thuộc biến MVU`. Không sửa chữ trong URL. Nếu đổi tên biến sang tiếng Việt, phải fork/mirror và Việt hóa nội dung HTML/JS rồi thay URL bằng bản Việt hóa; giữ URL gốc chỉ khi giữ contract biến Trung.
- Bật · **Regex 6: 开局** — `Giao diện HTML từ xa có phụ thuộc biến MVU`. Không sửa chữ trong URL. Nếu đổi tên biến sang tiếng Việt, phải fork/mirror và Việt hóa nội dung HTML/JS rồi thay URL bằng bản Việt hóa; giữ URL gốc chỉ khi giữ contract biến Trung.
- Bật · **Regex 7: 战斗栏** — `Giao diện HTML từ xa có phụ thuộc biến MVU`. Không sửa chữ trong URL. Nếu đổi tên biến sang tiếng Việt, phải fork/mirror và Việt hóa nội dung HTML/JS rồi thay URL bằng bản Việt hóa; giữ URL gốc chỉ khi giữ contract biến Trung.
- Bật · **Regex 8: kenshi赐福系统** — `Giao diện HTML từ xa có phụ thuộc biến MVU`. Không sửa chữ trong URL. Nếu đổi tên biến sang tiếng Việt, phải fork/mirror và Việt hóa nội dung HTML/JS rồi thay URL bằng bản Việt hóa; giữ URL gốc chỉ khi giữ contract biến Trung.
- Bật · **Regex 9: kenshi基地据点** — `Giao diện HTML từ xa có phụ thuộc biến MVU`. Không sửa chữ trong URL. Nếu đổi tên biến sang tiếng Việt, phải fork/mirror và Việt hóa nội dung HTML/JS rồi thay URL bằng bản Việt hóa; giữ URL gốc chỉ khi giữ contract biến Trung.
- Bật · **Regex 10: 选项** — `Giao diện HTML từ xa có phụ thuộc biến MVU`. Không sửa chữ trong URL. Nếu đổi tên biến sang tiếng Việt, phải fork/mirror và Việt hóa nội dung HTML/JS rồi thay URL bằng bản Việt hóa; giữ URL gốc chỉ khi giữ contract biến Trung.
- Tắt · **Regex 11: 作者自测** — `Máy chủ test local`. Không dịch URL; script đang tắt. Không dùng URL localhost khi xuất/chia sẻ card.
- Tắt · **Regex 12: 状态栏美化(备用)** — `Giao diện từ xa`. Không sửa URL gốc; chỉ fork/mirror nếu cần Việt hóa giao diện.
- Tắt · **Regex 13: 开局(备用)** — `Giao diện từ xa`. Không sửa URL gốc; chỉ fork/mirror nếu cần Việt hóa giao diện.
- Tắt · **Regex 14: 战斗栏(备用)** — `Giao diện từ xa`. Không sửa URL gốc; chỉ fork/mirror nếu cần Việt hóa giao diện.
- Tắt · **Regex 15: 选项(备用)** — `Giao diện từ xa`. Không sửa URL gốc; chỉ fork/mirror nếu cần Việt hóa giao diện.
- Tắt · **Regex 16: 骰子(作者自测)** — `Máy chủ test local`. Không dịch URL; script đang tắt. Không dùng URL localhost khi xuất/chia sẻ card.
- Bật · **Regex 17: 骰子*（备用** — `Giao diện xúc xắc HTML từ xa`. Không sửa URL gốc. Việt hóa nội dung trang giao diện nếu muốn hết chữ Trung; không có truy cập đường dẫn biến MVU trực tiếp trong bản đã kiểm tra. Chỉ bật một trong hai regex xúc xắc đang trùng trigger.
- Tắt · **Regex 18: 特质系统（没写** — `Giao diện từ xa đã tắt`. Không dùng khi dịch hiện tại: nguồn GitHub tương ứng trả 404 và script cũng đang tắt.
- Bật · **Regex 19: 骰子（和数据库美化冲突，关一个即可** — `Giao diện xúc xắc HTML từ xa`. Không sửa URL gốc. Việt hóa nội dung trang giao diện nếu muốn hết chữ Trung; không có truy cập đường dẫn biến MVU trực tiếp trong bản đã kiểm tra. Chỉ bật một trong hai regex xúc xắc đang trùng trigger.
- Bật · **Regex 20: 营地系统** — `Giao diện HTML từ xa có phụ thuộc biến MVU`. Không sửa chữ trong URL. Nếu đổi tên biến sang tiếng Việt, phải fork/mirror và Việt hóa nội dung HTML/JS rồi thay URL bằng bản Việt hóa; giữ URL gốc chỉ khi giữ contract biến Trung.
- Tắt · **Regex 21: 营地系统(备用)** — `Giao diện từ xa`. Không sửa URL gốc; chỉ fork/mirror nếu cần Việt hóa giao diện.

Quy tắc: **không bao giờ “dịch” URL**. Thư viện MVU/MagVarUpdate giữ nguyên. Với HTML UI từ xa, phải fork/mirror tệp HTML/JS sang bản Việt rồi thay URL nếu đã đổi tên biến sang tiếng Việt. `testingcf.jsdelivr.net` là endpoint từ xa (không phải local); `localhost:5500` là test local và hiện đang tắt.

## Marker giao thức không được dịch tùy tiện

- `<UpdateVariable>…</UpdateVariable>`: Giữ nguyên (protocol MVU; regex 0, 1, 4 dùng trực tiếp).
- `<StatusPlaceHolderImpl/>`: Giữ nguyên (trigger regex 2, 5, 12).
- `<FIGHT>…</FIGHT>`: Giữ nguyên nếu vẫn dùng giao diện chiến đấu; regex 7/14 phụ thuộc nó.
- `<Destiny>…</Destiny>`: Giữ nguyên; regex xúc xắc 17/19 phụ thuộc nó.
- `<option>…</option>`: Giữ nguyên; regex lựa chọn 10/15/22 phụ thuộc nó.
- `【【开局】】 → 【【Khởi đầu】】`: Phải đổi findRegex của regex 6 (và các bản dự phòng 11/13 nếu bật) thành marker Việt; hiện marker đã đổi nhưng regex vẫn tìm chữ Trung nên opening đang không kích hoạt.
