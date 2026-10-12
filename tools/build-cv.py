"""Build cv.html from the CV block in index.html, so the page and the PDF never drift.

Usage (from the repo root):
    python3 tools/build-cv.py
    python3 -m http.server 8770 &
    agent-browser open http://localhost:8770/cv.html && agent-browser pdf assets/Abhinav-Gupta-CV.pdf
"""
import pathlib
import re

root = pathlib.Path(__file__).resolve().parent.parent
page = (root / "index.html").read_text()
body = re.search(r"<!-- cv:start -->(.*?)<!-- cv:end -->", page, re.S).group(1)

TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Abhinav Gupta CV</title>
<style>
  @page { size: Letter; margin: 0.36in 0.5in; }
  * { box-sizing: border-box; }
  body { margin: 0 auto; max-width: 7.5in; padding: 24px 0; color: #222; font: 8.6pt/1.3 Helvetica, Arial, sans-serif; }
  @media print { body { padding: 0; } }
  header { border-bottom: 2px solid #C41230; padding-bottom: 7px; margin-bottom: 8px; }
  h1 { margin: 0; font: 700 21pt/1.1 Georgia, "Times New Roman", serif; color: #000; }
  .contact { margin: 4px 0 0; font-size: 8.3pt; color: #444; }
  .contact a { color: #444; text-decoration: none; }
  .summary { margin: 0 0 4px; }
  .cv-head { margin: 8px 0 1px; padding-bottom: 2px; font: 700 8.4pt/1 Helvetica, Arial, sans-serif; letter-spacing: .1em; text-transform: uppercase; color: #C41230; border-bottom: 1px solid #ccc; }
  .role { padding: 4px 0 0; break-inside: avoid; }
  .role-top { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  h4 { margin: 0; font: 700 9.3pt/1.3 Helvetica, Arial, sans-serif; color: #000; }
  h4 span { font-weight: 400; color: #333; }
  h4 span::before { content: " | "; color: #999; }
  .when { margin: 0; font-size: 8.4pt; color: #555; white-space: nowrap; }
  .scope { margin: 2px 0 0; color: #444; font-style: italic; }
  ul { margin: 3px 0 0; padding-left: 14px; }
  li { margin-bottom: 1px; }
  b { color: #000; }
  .chips { list-style: none; padding: 0; margin: 5px 0 0; }
  .chips li { display: inline; }
  .chips li + li::before { content: ", "; }
</style>
</head>
<body>
<header>
  <h1>Abhinav Gupta</h1>
  <p class="contact">Pittsburgh, PA · Open to roles anywhere in the US, and remote · <a href="mailto:agupta7@andrew.cmu.edu">agupta7@andrew.cmu.edu</a> · <a href="https://linkedin.com/in/abhinavgupta0809">linkedin.com/in/abhinavgupta0809</a> · <a href="https://abhinavgupta0809.github.io/">abhinavgupta0809.github.io</a></p>
</header>
<p class="summary">Product manager with 5+ years on consumer products at Flipkart, Tata 1mg, Meesho and ShareChat, platforms with 400M+ users, and end-to-end product ownership since 2022. MS in Product Management, Carnegie Mellon (Tepper), December 2026. Available January 2027.</p>
__BODY__
</body>
</html>
"""

(root / "cv.html").write_text(TEMPLATE.replace("__BODY__", body.strip()))
print("wrote cv.html")
