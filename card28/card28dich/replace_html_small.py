# -*- coding: utf-8 -*-
from pathlib import Path

BASE = Path(__file__).resolve().parent / "external_links"

MANUAL = {
    "kenshi_option": {
        "kenshi\u9009\u9879\u680f": "kenshi_option_bar",
        "\u6218\u6597\u680f": "thanh chiến đấu",
        "\u6218\u6597": "Chiến đấu",
        "\u8425\u5730\u7cfb\u7edf": "Hệ thống trại",
        "\u7279\u8d28\u8d50\u798f": "Ban phúc đặc tính",
        "\u636e\u70b9\u5efa\u8bbe": "Xây dựng cứ điểm",
        "\u5f53\u524d\u89d2\u8272\u672a\u7ed1\u5b9a\u4e3b\u4e16\u754c\u4e66\uff0c\u65e0\u6cd5\u540c\u6b65\u65e7\u7248\u5f00\u5173 UID939": "Nhân vật hiện tại chưa liên kết worldbook chính, không thể đồng bộ công tắc bản cũ UID939",
        "\u4e16\u754c\u4e66 UID939 \u672a\u627e\u5230\uff0c\u65e0\u6cd5\u540c\u6b65\u65e7\u7248\u5f00\u5173": "Không tìm thấy worldbook UID939, không thể đồng bộ công tắc bản cũ",
        "\u540c\u6b65\u65e7\u7248\u4e16\u754c\u4e66\u5f00\u5173 UID939 \u5931\u8d25": "Đồng bộ công tắc worldbook bản cũ UID939 thất bại",
        "\u7c7b\u578b": "Loại",
        "\u57fa\u7840\u9ab0": "Xúc xắc cơ bản",
        "\u63b7\u9ab0\u516c\u5f0f": "Công thức tung",
        "\u7ed3\u679c": "Kết quả",
        "\u884c\u4e3a": "Hành vi",
        "\u76ee\u7684": "Mục đích",
        "\u9009\u62e9\u4e86": "Đã chọn",
        "\u5224\u5b9a": "kiểm định",
        "\u529b\u91cf": "Sức mạnh",
        "\u654f\u6377": "Nhanh nhẹn",
        "\u611f\u77e5": "Cảm nhận",
        "\u4f53\u8d28": "Thể chất",
        "\u97e7\u6027": "Ý chí",
        "\u667a\u529b": "Trí tuệ",
        "\u9b45\u529b": "Sức hút",
        "\u540d\u5b57": "Tên",
        "\u4e3b\u63a7": "Nhân vật điều khiển",
        "\u5f53\u524d\u6210\u5458": "Thành viên hiện tại",
        "\u5f53\u524d\u89d2\u8272": "Nhân vật hiện tại",
        "\u5f53\u524d": "Hiện tại ",
        "\u5c0f\u961f\u6210\u5458": "Thành viên đội",
        "\u6210\u5458": "Thành viên",
        "\u5f85\u521d\u59cb\u5316": "Chờ khởi tạo",
        "\u7b49\u5f85 Mvu \u521d\u59cb\u5316 \u5931\u8d25\uff0c\u6539\u4e3a\u4f7f\u7528\u515c\u5e95\u5c5e\u6027": "Chờ Mvu khởi tạo thất bại, chuyển sang dùng thuộc tính dự phòng",
        "\u7b49\u5f85 Mvu \u521d\u59cb\u5316": "Chờ Mvu khởi tạo",
        "\u6539\u4e3a\u4f7f\u7528\u515c\u5e95": "chuyển sang dùng dự phòng",
        "\u5c5e\u6027": "Thuộc tính",
        "\u57fa\u7840": "Cơ bản",
        "\u624b\u52a8\u52a0\u6210": "Cộng tay",
        "\u52a0\u6210": "Cộng thêm",
        "\u5927\u6210\u529f": "Đại thành công",
        "\u5927\u5931\u8d25": "Đại thất bại",
        "\u6210\u529f": "Thành công",
        "\u5931\u8d25": "Thất bại",
        "\u53d1\u9001\u7528\u6237\u6d88\u606f \u5931\u8d25": "Gửi tin nhắn người dùng thất bại",
        "\u53d1\u9001\u7528\u6237\u6d88\u606f": "Gửi tin nhắn người dùng",
        "\u65b0\u7248": "Bản mới",
        "\u65e7\u7248": "Bản cũ",
        "\u672a\u68c0\u6d4b\u5230\u9009\u9879\u6587\u672c": "Chưa phát hiện văn bản lựa chọn",
        "\u89e6\u53d1": "Kích hoạt ",
        "\u4e0d\u53ef\u7528": "không khả dụng",
        "\u65e0\u6cd5": "không thể",
    },
    "kenshi_dice": {
        "kenshi\u9ab0\u5b50": "kenshi_dice",
        "Kenshi \u63b7\u9ab0\u68c0\u5b9a": "Kenshi - Kiểm định tung xúc xắc",
        "\u63b7\u9ab0\u57fa\u7840: 1d20 + \u5c5e\u6027\u4fee\u6b63 (\u5927\u4e8e25\uff0c\u6bcf10\u70b9\u4e3a1)": "Cơ sở tung xúc xắc: 1d20 + hiệu chỉnh thuộc tính (lớn hơn 25 thì mỗi 10 điểm cộng 1)",
        "\u68c0\u5b9a": "Kiểm định",
        "\u654f\u6377": "Nhanh nhẹn",
        "\u591c\u665a": "Ban đêm",
        "\u884c\u4e3a": "Hành vi",
        "\u76ee\u7684": "Mục đích",
        "\u7c7b\u578b": "Loại",
        "\u57fa\u7840\u9ab0": "Xúc xắc cơ bản",
        "\u63b7\u9ab0\u516c\u5f0f": "Công thức tung",
        "\u7ed3\u679c": "Kết quả",
        "\u5927\u6210\u529f": "Đại thành công",
        "\u5927\u5931\u8d25": "Đại thất bại",
        "\u5927 \u6210 \u529f": "Đại thành công",
        "\u5927 \u5931 \u8d25": "Đại thất bại",
        "\u81ea\u7136\u63b7\u9ab0": "Tung tự nhiên",
        "\u65e0\u9700\u4fee\u6b63\uff0c\u76f4\u63a5\u6210\u529f": "không cần hiệu chỉnh, thành công trực tiếp",
        "\u65e0\u9700\u4fee\u6b63\uff0c\u76f4\u63a5\u5931\u8d25": "không cần hiệu chỉnh, thất bại trực tiếp",
        "\u6210 \u529f": "Thành công",
        "\u5931 \u8d25": "Thất bại",
        "\u6210\u529f": "Thành công",
        "\u5931\u8d25": "Thất bại",
    },
}


def main() -> None:
    for folder, replacements in MANUAL.items():
        path = BASE / folder / "index.vi.html"
        text = path.read_text(encoding="utf-8")
        for source, target in replacements.items():
            text = text.replace(source, target)
        path.write_text(text, encoding="utf-8")


if __name__ == "__main__":
    main()
