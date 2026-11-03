# abhinavgupta0809.github.io

Abhinav Gupta's portfolio. Live at https://abhinavgupta0809.github.io/

Plain HTML, CSS and JS with no build step. GitHub Pages serves `main` from the repo root.

## Structure

- `index.html`: the home page, one scrolling page with a sticky nav (Work, Projects, How I work, About, CV). In order:
  1. Hero: small round headshot (`assets/abhinav-avatar.jpg`, a 240px crop of `abhinav-cmu.jpg`), name, one placing sentence, a "Now" line, and buttons (Email, which opens the mail app, with a menu of other email options; Download CV; LinkedIn; GitHub; phone number).
  2. Selected work (`#work`): four case cards, each with one big result number and its diagram (the diagram is hidden on phones), linking to the case page.
  3. Personal projects (`#projects`): one row per project with a status tag, links and a screenshot on desktop. Job work such as VaultLedger stays in Selected work.
  4. How I work (`#how`): six one-liners, each linking to the slide that backs it.
  5. Path (`#path`): one line per role with dates, case links, education, and the CV download.
  6. About (`#about`) and the footer (`#contact`, with "Last updated").
  Old links still land: `#pm` goes to Selected work, `#builds`, `#builder`, `#other-work` and `#teardown` to Personal projects, `#experience` to Path, and the old card and build ids are kept.
- `flipkart-black/`, `meesho/`, `tata-1mg/`, `vaultledger/`: one case study each, as `index.html`, rebuilt 2026-10-30 as four-slide consulting decks. Each page has a deck bar (back to all work, tick marks and a "1 / 4" counter, next case, theme toggle) and four full-height slides; there is no separate header block. Every slide is a full-sentence action title (the four titles alone tell the story), a short text column, one exhibit (inline SVG or an HTML table) with an "Exhibit n" caption and a source line, and a provenance stamp that says how a number was measured and whose result it was. Slide 1 carries the result, the role line and the "What I owned / Not mine" ledger. Each case has its own accent, scoped by `data-case` on `<html>` (Flipkart cobalt, Meesho magenta, Tata 1mg teal, VaultLedger ochre); Carnegie red stays on the site chrome. A company logo (in `assets/logos/`, from Wikimedia Commons and the companies' GitHub avatars) flips in on the deck bar and beside the role line on slide 1, and the "Next" link shows the next company's mark. Slide text is a short lead plus owned / not-mine chips; the longer copy sits in a closed "More detail" fold under each slide. Below the deck: optional "More from" cards and previous / next links.
- `styles.css`: color tokens (light and dark), type, and the home page. Carnegie red (`#C41230`) is the only accent. Fonts: Source Serif 4, Inter, JetBrains Mono.
- `case.css`: case page layout and the per-case accent tokens. Slides snap gently on desktop only (`scroll-snap-type: y proximity`) and each fills the viewport below the deck bar at 1280x720 and up; phones scroll normally with the exhibit above the text. Printing a case page gives four landscape pages plus one for "More from".
- `theme.js`: the light / dark toggle. It follows the system setting until a visitor picks one, then remembers the choice in `localStorage`. Each page has a one-line script in `<head>` that applies a saved choice before first paint.
- `script.js`: home page copy-email button, email menu and nav highlighting.
- `case.js`: the slide counter and tick marks, and arrow keys / PageUp / PageDown to move between slides.
- `assets/og-image.png` is the home share image; `assets/og-<case>.png` are the per-case share images (1200x630).

Diagrams are inline SVGs inside `<div class="fig">`. The panel keeps light colors in dark mode, like a printed figure. Diagrams of former-employer work carry the caption "Illustration, redrawn. Not the product UI."; the VaultLedger one says "Diagram of the release process."

Preview locally: `python3 -m http.server 8770`, then open http://localhost:8770.

## Adding or editing a case study

The four case pages are generated. Edit `build_v3.py` in `~/Desktop/Profile Audit 2026-10-29/03-portfolio/generator/` (copy and exhibits live there as Python strings and small SVG builders), then run `python3 -I build_v3.py`; it writes the four `index.html` files here. `build_v2.py` in the same folder still generates the home page, and also writes old case pages, so always run `build_v2.py` first and `build_v3.py` second. `case.css`, `case.js` and `styles.css` are edited by hand.

Rules for the decks:
- Four slides. Each has one full-sentence title (under about 16 words) that states the takeaway, one exhibit, and at most a few short paragraphs. Slide 1 carries the result, the role line, the owned / not-mine ledger and a stamp.
- Every number must already be in the checked-claims ledger or the master bank. No "~" before a number on a slide; the footer line "Numbers are rounded." covers rounding. Each number gets a source line or a stamp saying how it was measured (controlled test, pre/post, combined result, team result, launch count).
- Exhibits are inline SVG on a 640-wide viewBox with text at 20px or larger (so it stays legible at phone width), or an HTML table. They use the theme tokens and the case accent (`--case`), so dark mode gets dark panels. Anything resembling a product screen is captioned "Illustration, redrawn. Not the product UI."
- Keep the slide ids `slide-1` to `slide-4`: the home page links into them.

To add a personal project, copy an `<li class="row">` in `index.html`. The first row (2026-11-03) is the Claude Marketplace work sample; its thesis, prototype and dashboard live on Vercel, and their numbers must match those sites.

## CV PDF

`assets/Abhinav-Gupta-CV.pdf` is the CV built for the Anthropic Claude Marketplace PM role (2026-11-02, Tepper email). The source copy is `07-submission/cv/Tepper/` in `~/Desktop/Anthropic job application/`. To update it, rebuild there and copy the PDF over this file. The general AI PM versions are in `~/Desktop/CV/v7/`.

`tools/build-cv.py` and `tools/cv-body.html` are the older site CV pipeline, kept for reference.
