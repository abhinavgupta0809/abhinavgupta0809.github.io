# abhinavgupta0809.github.io

Abhinav Gupta's portfolio. Live at https://abhinavgupta0809.github.io/

Plain HTML, CSS and JS with no build step. GitHub Pages serves `main` from the repo root.

- `index.html`: all content. Intro on top, then three tabs: About me (`#about`), PM experience (`#pm`), Builder profile (`#builder`).
- `styles.css`: Carnegie red (`#C41230`) and black.
- `script.js`: tab switching and hash links.

Preview locally: `python3 -m http.server 8770`, then open http://localhost:8770.

To add a teardown, copy the `<article class="feature">` block under "Teardowns" in `index.html`.

## CV PDF

The PDF is built from the CV block in `index.html` (between the `cv:start` and `cv:end` comments). After editing the CV:

```
python3 tools/build-cv.py                      # writes cv.html
python3 -m http.server 8770 &
agent-browser open http://localhost:8770/cv.html
agent-browser pdf assets/Abhinav-Gupta-CV.pdf  # check it's still one page
```

Screenshots and the photo live in `assets/`.
