# abhinavgupta0809.github.io

Abhinav Gupta's portfolio. Live at https://abhinavgupta0809.github.io/

Plain HTML, CSS and JS with no build step. GitHub Pages serves `main` from the repo root.

## Structure

- `index.html`: the home page, one scrolling page with a sticky nav (Work, Builds, How I work, About, CV). In order:
  1. Hero: small round headshot (`assets/abhinav-avatar.jpg`, a 240px crop of `abhinav-cmu.jpg`), name, one placing sentence, a "Now" line, and buttons (Copy email with a menu of other email options, Download CV, LinkedIn, GitHub).
  2. Selected work (`#work`): four case cards, each with one big result number and its diagram (the diagram is hidden on phones), linking to the case page.
  3. Builds (`#builds`): one row per build with a status tag, links and a screenshot on desktop.
  4. How I work (`#how`): six one-liners, each linking to the slide that backs it.
  5. Path (`#path`): one line per role with dates, case links, education, and the CV download.
  6. About (`#about`) and the footer (`#contact`, with "Last updated").
  Old links still land: `#pm` goes to Selected work, `#builder`, `#other-work` and `#teardown` to Builds, `#experience` to Path, and the old card and build ids are kept.
- `flipkart-black/`, `meesho/`, `tata-1mg/`, `vaultledger/`: one case study each, as `index.html`. Each has a deck bar (back to all work, tick marks and a "1 / 4" counter, next case, theme toggle), a header with "The bet / What I did / What happened" and three stats, four full-height slides, optional "More from" cards, and previous / next links.
- `styles.css`: color tokens (light and dark), type, and the home page. Carnegie red (`#C41230`) is the only accent. Fonts: Source Serif 4, Inter, JetBrains Mono.
- `case.css`: case page layout. Slides snap gently on desktop only (`scroll-snap-type: y proximity`); phones scroll normally. Printing a case page gives one slide per page.
- `theme.js`: the light / dark toggle. It follows the system setting until a visitor picks one, then remembers the choice in `localStorage`. Each page has a one-line script in `<head>` that applies a saved choice before first paint.
- `script.js`: home page copy-email button, email menu and nav highlighting.
- `case.js`: the slide counter and tick marks, and arrow keys / PageUp / PageDown to move between slides.
- `assets/og-image.png` is the home share image; `assets/og-<case>.png` are the per-case share images (1200x630).

Diagrams are inline SVGs inside `<div class="fig">`. The panel keeps light colors in dark mode, like a printed figure. Diagrams of former-employer work carry the caption "Illustration, redrawn. Not the product UI."; the VaultLedger one says "Diagram of the release process."

Preview locally: `python3 -m http.server 8770`, then open http://localhost:8770.

## Adding a case study

1. Copy a case folder, for example `cp -r meesho new-case`, and edit `new-case/index.html`:
   - `<title>`, the meta description, the `og:` tags and `og:image`.
   - The header: the company · role · dates line, the `<h1>`, the three "brief" rows and the three stats.
   - The four `<section class="slide">` blocks. Keep ids `slide-1` to `slide-4` and update the tick links in the deck bar to match. Each slide has a short `<h2>`, a `<ul class="points">` of at most five short bullets, and optionally a `<figure class="figure slide-fig">` with a diagram. Wrap key numbers in `<b class="num">`.
   - Reusable parts: `<aside class="decision">` for a decision (add `<ul class="options">` only for options that were really weighed), `<dl class="results">`, and `<div class="split">` for what I owned and what I didn't.
2. Fix the links around it: the "Next" link in the deck bar and the previous / next cards at the bottom of the new page and its neighbours.
3. Add a card to Selected work in `index.html` (copy an `<article class="work-card">`), a "Case study" link on its Path row, and a share image at `assets/og-new-case.png`.
4. Every number must already be on the CV or in the source notes. The footer line on each case page says "Numbers are rounded."

To add a build, copy an `<li class="row">` in `index.html`.

## CV PDF

`assets/Abhinav-Gupta-CV.pdf` is the AI PM sample CV (v7, 2026-10-28). Its source is `tools/cv-builder/build_master.py` in the job-search-os repo; the rendered copies live in `~/Desktop/CV/v7/`. To update it, rebuild there and copy `Abhinav_Gupta_AI_PM_andrew.pdf` over this file.

`tools/build-cv.py` and `tools/cv-body.html` are the older site CV pipeline, kept for reference.
