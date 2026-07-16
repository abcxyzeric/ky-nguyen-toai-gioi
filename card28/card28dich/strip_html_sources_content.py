# -*- coding: utf-8 -*-
from pathlib import Path

BASE = Path(__file__).resolve().parent / "external_links"


def find_matching_array_end(text: str, start: int) -> int:
    depth = 0
    quote = ""
    escape = False
    for i in range(start, len(text)):
        ch = text[i]
        if quote:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == quote:
                quote = ""
            continue
        if ch in ("'", '"', "`"):
            quote = ch
        elif ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                return i
    raise ValueError("Không tìm thấy dấu ] đóng cho sourcesContent")


def strip_sources_content(text: str) -> str:
    token = "sourcesContent:["
    pos = 0
    while True:
        idx = text.find(token, pos)
        if idx == -1:
            return text
        array_start = idx + len("sourcesContent:")
        array_end = find_matching_array_end(text, array_start)
        text = text[:array_start] + "[]" + text[array_end + 1:]
        pos = array_start + 2


def main() -> None:
    for path in BASE.glob("*/index.vi.html"):
        text = path.read_text(encoding="utf-8")
        stripped = strip_sources_content(text)
        path.write_text(stripped, encoding="utf-8")


if __name__ == "__main__":
    main()
