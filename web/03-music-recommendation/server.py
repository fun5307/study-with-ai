"""Local server for the music-recommendation practice page."""
import json
import os
import random
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlencode, urlparse
from urllib.request import urlopen

ROOT = Path(__file__).parent
MOODS = {
    "focus": ("집중", "study instrumental music", "#dcecff", "집중할 때 듣기 좋은 음악이에요."),
    "rest": ("휴식", "relaxing music", "#e9e2ff", "잠시 숨을 고르기 좋은 음악이에요."),
    "energy": ("신나는", "upbeat music", "#fff0c7", "기분을 끌어올리고 싶을 때 추천합니다."),
    "mood": ("감성적인", "emotional music", "#ffdfe8", "차분히 감정에 머물고 싶을 때 어울립니다."),
}

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path != "/api/recommendation":
            return super().do_GET()
        key = os.environ.get("YOUTUBE_API_KEY")
        mood = parse_qs(parsed.query).get("mood", ["focus"])[0]
        if not key:
            return self.send_json({"error": "YOUTUBE_API_KEY 환경 변수를 먼저 설정하세요."}, 400)
        if mood not in MOODS:
            mood = "focus"
        label, query, color, reason = MOODS[mood]
        params = urlencode({"part": "snippet", "q": query, "type": "video", "videoCategoryId": "10", "videoEmbeddable": "true", "maxResults": "10", "key": key})
        try:
            with urlopen(f"https://www.googleapis.com/youtube/v3/search?{params}", timeout=10) as response:
                items = json.load(response).get("items", [])
            item = random.choice(items)
            snippet = item["snippet"]
            self.send_json({"videoId": item["id"]["videoId"], "title": snippet["title"], "channel": snippet["channelTitle"], "thumbnail": snippet["thumbnails"]["high"]["url"], "mood": label, "color": color, "reason": reason})
        except Exception:
            self.send_json({"error": "YouTube 검색에 실패했습니다. API 키와 인터넷 연결을 확인하세요."}, 502)

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status); self.send_header("Content-Type", "application/json; charset=utf-8"); self.send_header("Content-Length", str(len(body))); self.end_headers(); self.wfile.write(body)

if __name__ == "__main__":
    print("http://localhost:8000 에서 실행 중입니다.")
    ThreadingHTTPServer(("localhost", 8000), Handler).serve_forever()
