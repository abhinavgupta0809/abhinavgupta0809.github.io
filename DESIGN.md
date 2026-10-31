---
name: Abhinav Gupta portfolio
description: Operator's Notebook. A warm paper site with Carnegie red chrome; each case deck scopes one accent of its own.
colors:
  paper: "#fbfaf8"
  surface: "#ffffff"
  surface-2: "#f3f1ed"
  ink: "#17181a"
  body: "#3d3f44"
  muted: "#64676e"
  line: "#e5e2dc"
  line-strong: "#d3cfc8"
  carnegie-red: "#C41230"
  carnegie-red-deep: "#9d0e26"
  red-tint: "#fbecee"
  red-line: "#efc9d0"
  night: "#111113"
  surface-night: "#18191c"
  surface-2-night: "#1f2024"
  ink-night: "#f1f0ec"
  body-night: "#c8c9cc"
  muted-night: "#9b9ea5"
  line-night: "#2a2b30"
  line-strong-night: "#3a3b41"
  carnegie-rose: "#ff6b84"
  red-tint-night: "#2a1519"
  red-line-night: "#5c2531"
  fig-paper: "#f4f2ee"
  fig-paper-dim: "#d2cec7"
  cobalt: "#1d47ad"
  cobalt-night: "#8fb0ff"
  magenta: "#8a1c74"
  magenta-night: "#e88ad6"
  teal: "#0b6e5f"
  teal-night: "#6fd6c5"
  ochre: "#8f5400"
  ochre-night: "#f0b350"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(40px, 5.2vw, 60px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(26px, 1.4vw + 16px, 40px)"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(20px, 2.1vw, 25px)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.3
  source:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.01em"
rounded:
  tick: "2px"
  focus: "3px"
  data: "4px"
  nav: "6px"
  control: "8px"
  tile: "10px"
  panel: "12px"
  card: "14px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
  3xl: "32px"
  bar: "56px"
  section: "96px"
  wrap: "1080px"
  prose: "680px"
components:
  button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "40px"
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "40px"
  button-solid-hover:
    backgroundColor: "{colors.carnegie-red}"
    textColor: "{colors.surface}"
  button-case-solid:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "40px"
  button-case-solid-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  nav-link:
    textColor: "{colors.muted}"
    rounded: "{rounded.nav}"
    padding: "8px 10px"
  nav-link-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
  tag:
    textColor: "{colors.muted}"
    typography: "{typography.source}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  tag-live:
    textColor: "{colors.carnegie-red}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  work-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "20px 24px"
  exhibit:
    rounded: "{rounded.panel}"
    padding: "16px 20px 14px"
  stamp:
    textColor: "{colors.body}"
    rounded: "{rounded.control}"
    padding: "7px 11px 7px 9px"
  decision:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "16px 18px 18px"
  more-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "22px 22px 24px"
---

# Design System: Abhinav Gupta portfolio

## Overview

**Creative North Star: "The Operator's Notebook"**

A product manager's working record, typeset like a well-kept notebook: warm off-white paper, near-black ink, one red pen (Carnegie red) for the site's own marks, and a serif that carries the sentences while a sans does the reading work. Density is editorial, not dashboard: generous section gaps, 680px prose, and one idea per slide. Nothing is decorated; borders are hairlines, shadows are soft and rare, and the only drama is a big serif number set in the page's accent.

The case decks extend the notebook into a consulting storyline. Each of the four cases scopes a single accent of its own through `data-case` on `<html>` (Flipkart cobalt, Meesho magenta, Tata 1mg teal, VaultLedger ochre), and that accent owns real regions: the hero number inside the action title, the "after" bar or highlighted path in every exhibit, the exhibit panel tint and border, the labels on the ledger and decision boxes, the current deck tick, and the solid button. The site chrome around the deck stays Carnegie red. Light is the default and dark is a full second token set, not an inversion filter: exhibits redraw on theme inks, so dark mode gets dark panels rather than glowing paper. The home-page figures are the one deliberate exception; they sit on a fixed paper panel like a printed plate and only dim in dark mode.

Confirmed rejections in the build: no logos or product screenshots, no header block that restates the deck, no uppercase kickers over slide titles, no bullet-column slides, no hard offset shadows, no system display faces.

**Key Characteristics:**
- Warm paper and near-black ink; grey is reserved for the second and third voice, never for emphasis.
- Source Serif 4 for anything that makes a claim; Inter for anything that explains it; JetBrains Mono only for source lines, counters and measurement tags.
- One scoped accent per case page, with light and dark pairs that each clear 4.5:1 on their own backgrounds.
- Hairline borders (1px) and tinted panels do the structural work; `--shadow` appears on the decision box at rest and on card hover only.
- Exhibits are inline SVG on theme tokens with three stroke weights and 4px rounded data ends.
- Every number on a slide is accompanied by a provenance stamp that says how it was measured.

## Colors

A warm paper neutral ramp with a single hot red for the site, and four muted jewel accents, one per case, each tuned in two theme variants.

### Primary
- **Carnegie Red** (`carnegie-red`): the site's accent. Links and link hover text, the active nav underline (inset 2px), the solid button's hover fill, the live tag, the "now" dot, the hero lede's underline. In dark mode links switch to **Carnegie Rose** (`carnegie-rose`) so red text keeps contrast on night surfaces; fills keep `--red`.
- **Carnegie Red Deep** (`carnegie-red-deep`): hover state for red fills.
- **Red Tint / Red Line** (`red-tint`, `red-line`): the halo around the "now" dot, text selection, and the live tag's border. Night pairs: `red-tint-night`, `red-line-night`.

### Secondary (case accents, scoped)
Set per page through `data-case` on `<html>`; `--case` resolves to the light value by default and to the night value under `prefers-color-scheme: dark` or `data-theme="dark"`.
- **Cobalt** (`cobalt` / `cobalt-night`): Flipkart Black.
- **Magenta** (`magenta` / `magenta-night`): Meesho.
- **Teal** (`teal` / `teal-night`): Tata 1mg.
- **Ochre** (`ochre` / `ochre-night`): VaultLedger.

Derived in CSS from `--case` with `color-mix`, so they follow the theme automatically: `--case-tint` (8% into surface) for the exhibit and stamp panel, `--case-tint-2` (16%) for tinted boxes inside SVG and text selection, `--case-line` (32% into line) for panel borders and table rules, `--case-soft` (45%) is defined and currently unused.

### Neutral
- **Paper** (`paper`) / **Night** (`night`): page background. Also the `theme-color` meta pair.
- **Surface** (`surface` / `surface-night`): cards, the decision box, buttons, exhibit boxes inside SVG, the deck bar at 88% with a 10px blur.
- **Surface 2** (`surface-2` / `surface-2-night`): nav hover fill, the avatar well.
- **Ink** (`ink` / `ink-night`): headings, titles, strong text, the solid button fill. Night ink also becomes the solid button fill with night text.
- **Body** (`body` / `body-night`): running text.
- **Muted** (`muted` / `muted-night`): meta lines, source lines, counters, the "Not mine" label, SVG secondary labels.
- **Line** (`line` / `line-night`): every hairline border and row rule.
- **Line Strong** (`line-strong` / `line-strong-night`): button borders, the dim "before" bar in exhibits, resting deck ticks, SVG box strokes.
- **Fig Paper** (`fig-paper`) and **Fig Paper Dim** (`fig-paper-dim`): the fixed paper panel behind home-page figures in light and dark respectively.

### Named Rules
**The Scoped Accent Rule.** A case page has exactly one accent, set once on `<html>` and consumed only through `--case` and its mixes. It owns the hero number, the after bar or chosen path in each exhibit, the panel tint, the box labels, the current tick and the solid button. Carnegie red never appears inside a slide; the case accent never leaks into the site chrome, footer or pager.

**The Two Inks Rule.** Each theme is a full token set (paper, surfaces, ink, body, muted, two lines, accent, tint, line, shadow). Nothing is drawn with a hardcoded color except the solid button's white text, the SVG `t-on` label and the kept verdict pill, each of which flips to night text under the dark set.

## Typography

**Display Font:** Source Serif 4 (with Georgia, Times New Roman, serif), optical size axis 8 to 60, weights 400 to 700
**Body Font:** Inter (with the system sans stack), weights 400 to 700
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Menlo, Consolas), weights 400 and 500

**Character:** The serif carries every sentence that makes a claim (the name, the action titles, the lede, the decision call, the big numbers) with tight negative tracking at display sizes. Inter does the explaining at 16px/1.6 and shrinks to 13px for box labels. Mono is a measurement voice, never a decorative one: source lines, the slide counter, the figure note, the tag chips.

### Hierarchy
- **Display** (600, clamp(40px, 5.2vw, 60px), 1.02, -0.025em): the home hero name only. 38px on phones.
- **Headline** (600, clamp(26px, 1.4vw + 16px, 40px), 1.14, -0.02em, max 40ch): the slide action title, a full sentence with its number set in `.num` at the case accent. Home section h2 is the smaller sibling at clamp(26px, 2.6vw, 32px)/1.15. Short desktop viewports (max-height 760px) drop it to clamp(24px, 1.1vw + 14px, 31px); phones to 25px.
- **Lede** (400 serif, clamp(20px, 2.1vw, 25px), 1.45): the hero paragraph and the About text; the decision call uses the same voice at 500, clamp(17px, 1.3vw, 20px)/1.4, max 44ch.
- **Title** (600 serif, 20px, 1.3): h3 in cards and rows; 22px in work cards and the artifact, 19px in More cards and the pager.
- **Body** (400 Inter, 16px/1.6 on the home page; clamp(16px, 1.1vw, 17.5px)/1.55 and max 46ch in slide text; a `.lead` paragraph at clamp(17px, 1.25vw, 19px) in ink).
- **Label** (600 Inter, 13px/1.3): the ledger and decision box headings, set in the case accent (or muted for "Not mine"). Exhibit titles are 14.5px/1.35 with the "Exhibit n" counter in the accent. Table heads are 13px muted over a 2px accent rule.
- **Source** (400 mono, 12px/1.45, -0.01em): the source line under every exhibit, the figure caption, the "Numbers are rounded." line, the deck counter (13px, tabular numerals).
- **Exhibit numeral** (700 serif, 44 SVG units; `t-num`, accent when `.on`): the big number inside an SVG exhibit. Other SVG text runs 20, 22, 24, 26 units in Inter.

### Named Rules
**The Action Title Rule.** A slide title is a complete sentence that states the result or the decision, with at most one number, and that number is the accent. Topic headings ("Background", "Approach") are not titles.

**The Mono Means Measured Rule.** JetBrains Mono is reserved for provenance: sources, counters, dates and tags. It never sets a heading or a call to action.

## Layout

One centered column, `--wrap` 1080px with 32px side padding (16px under 640px). Prose caps at `--prose` 680px on the home page and at 46ch in slide text. The top bar is sticky, 56px tall (52px on phones), translucent paper with a 10px blur and a hairline underneath; the case pages reuse it as the deck bar in a 1fr auto 1fr grid: back link, ticks plus counter, next case plus theme toggle.

Home sections stack with 96px top padding (72px on phones) and the footer sits 112px below the last one. The work grid is two equal columns at 24px gap, one column under 760px. Builds are 150px / fluid / 200px rows with 32px column gaps and hairline rules; the screenshot column drops under 960px and the row collapses to one column under 640px.

Each case page is a deck bar and four `.slide` sections. On desktops 960px wide and 640px tall or taller, each slide is `min-height: calc(100svh - 56px)` with `scroll-snap-type: y proximity` and content vertically centered; the stage is a 4.4fr / 7.6fr grid (text left, exhibit right) with a 28px row gap and a clamp(32px, 4vw, 64px) column gap. `.flip` swaps the columns, `.one`, `.wide` and `.stack` put the exhibit on top across the full width and split the text into two columns at 16px 40px. Under 960px the stage is one column with the exhibit first; under 640px slides take 40px top padding and the deck bar grows every target to 44px. A short-viewport band (desktop, max-height 760px) tightens padding, type and table cells so a slide still fits 1280x720. Print sets landscape pages, one slide per page, then a "More from" page.

Spacing rhythm inside a slide: 18px between text blocks (12px on short viewports, 8pt in print), 14px between stacked exhibit elements, 12px below the exhibit title and above the source line.

## Elevation & Depth

Flat by default, structured by hairlines and tint. Surfaces sit on paper with a 1px `--line` border; the case pages add a second layer of tinted panels (`--case-tint` fill, `--case-line` border) for the exhibit and the stamp, and plain `--surface` boxes inside them for the decision, the working / not-proven columns and the SVG boxes. The deck bar floats on translucency (88% paper, 10px blur, saturate 150%) rather than a shadow.

### Shadow Vocabulary
- **Ambient lift** (`box-shadow: 0 1px 2px rgba(23, 24, 26, .04), 0 18px 40px -22px rgba(23, 24, 26, .22)`; night: `0 1px 2px rgba(0, 0, 0, .3), 0 18px 40px -22px rgba(0, 0, 0, .6)`): the single shadow token, `--shadow`. At rest on the decision box and the email menu; on hover for work cards and the pager, paired with a 2px rise.
- **Ring** (`box-shadow: 0 0 0 1px var(--line)` and `0 0 0 4px var(--red-tint)`): the avatar edge and the halo behind the "now" dot. A ring, not a drop.

### Named Rules
**The One Shadow Rule.** There is one shadow and it is diffuse. It marks a decision at rest or a card under the pointer; it never separates a layout region, and it disappears in print and inside exhibits.

## Shapes

Softly rounded, graded by size. Data ends and deck ticks take 2px to 4px; nav links 6px; buttons, stamps and row screenshots 8px; tiles, the email menu and the two-column boxes 10px; exhibits, decision boxes, More cards, the artifact and the pager 12px; the work card 14px. Tags and verdict pills are full pills (999px); the avatar, the theme toggle, the "now" dot and the stamp dot are circles. The split email button squares its inner corners so the pair reads as one control.

Borders are 1px hairlines in `--line` (regions) or `--line-strong` (controls and the dim data bar). Rejected or not-proven states use the same hairline dashed: the `.not` column, the `box-ghost` SVG box (5 5 dash), and the `s-dash` connector (4 6). Inside SVG exhibits there are exactly three stroke weights: 1.5 for hairlines and box outlines, 2 for lines and dashed accent paths, 3 for the accent stroke that marks what changed. Bars and highlighted shapes end on a 4px radius (`rx="4"`).

## Components

### Buttons
- **Shape:** softly rounded (8px), 40px tall, 16px side padding, 14.5px/1 Inter 500, 8px gap before a 16px inline SVG.
- **Default (ghost):** surface fill, `--line-strong` border, ink text; hover darkens the border to ink.
- **Solid:** ink fill and white text (night ink and night text in dark mode); hover becomes Carnegie red with white text.
- **Case solid** (`.s-actions .btn-solid`, VaultLedger slide 1): the case accent fill with white text (night text in dark); hover inverts to ink on paper.
- **Split:** two solids side by side, outer corners 8px, the "more" half 11px wide with a 25% mixed divider.
- **Focus:** 2px accent outline at 3px offset, 3px radius, on every focusable element.
- **Motion:** 150ms on color, border and background; `--ease-out` (cubic-bezier(.16, 1, .3, 1)) for transforms; reduced motion flattens every transition to 0.01ms and cancels hover rises.

### Tags (chips)
- **Style:** pill (999px), 2px 8px padding, 11.5px/1.5 mono 500, muted text, `--line-strong` border, transparent fill.
- **Live state:** accent text, `--red-line` border, a 6px dot in `currentColor` before the label. Used for status on Builds rows, never as a category label.
- **Verdict pills** (`.ex-table .verdict`, VaultLedger gates table): 12.5px Inter 500, min-width 78px; "kept" is a solid accent pill with white text; "rejected" is a surface pill with an accent border and accent text.

### Cards / Containers
- **Work card (home):** 14px radius, surface fill, hairline border, overflow hidden; hover lifts 2px with `--shadow` and strengthens the border. Stat block (44px serif number, 14.5px muted label), figure band with hairlines top and bottom, body at 20px 24px, footer with a hairline rule and an accent "go" arrow that slides 4px on hover.
- **More card (case pages):** 12px radius, surface fill, hairline border, 22px 22px 24px padding, 19px serif title and 15px/1.6 body. Three across (two when there are two), one column under 960px.
- **Pager:** two 12px cards with 20px 22px padding; the "next" card right-aligns and moves first on phones. Hover: strong border plus `--shadow`.
- **Artifact (VaultLedger):** 12px card with a 16:10 screenshot on a #111 well, hairline between image and body.

### Exhibit panel (signature)
- **Shape:** 12px radius, 16px 20px 14px padding, `--case-tint` fill, `--case-line` 1px border; 12px 12px 10px on phones.
- **Parts:** an exhibit title (14.5px Inter 600, "Exhibit n" counter in the accent, unit in muted 400), one inline SVG or one HTML table, a mono source line in muted below.
- **SVG vocabulary:** text in Inter on theme ink (`t-h` 26/600, `t-b` 24 body, `t-m` 22 muted, `t-s` 20 muted, `t-num` 44 serif 700); fills `f-case`, `f-dim`, `f-tint`, `f-surface`, `f-ink`; strokes `s-hair` 1.5, `s-line` 2, `s-case2` 2, `s-case` 3, `s-dash` 2 dashed; boxes `box`, `box-case`, `box-tint`, `box-ghost`. The thing that changed is the only element drawn in the accent.
- **Table variant** (`.ex-table`): 15px/1.4, 11px 12px cells, `--case-line` row rules, a 2px accent rule under 13px muted heads, row heads 600 ink at 24% width, "was" cells muted and "after" cells ink with accent bold.
- **Sizing:** SVG max-height min(56svh, 560px) in the two-column stage; min(38svh, 470px) at natural width in `.wide` and `.stack`; unconstrained under 960px.

### Provenance stamp (signature)
- **Style:** inline pill-card, 8px radius, `--case-tint` fill, `--case-line` border, 7px 11px 7px 9px padding, 13.5px/1.35 body text with the measurement method in 600 ink, an 8px accent dot before it, max 46ch.
- **Use:** under the text column (or under the exhibit) on any slide that carries a number; says controlled test, pre/post, combined result, team result or launch count.

### Ledger (owned / not mine)
- **Style:** two columns split by a hairline, 14px above a hairline rule, 13px Inter 600 headings (accent for "What I owned", muted for "Not mine"), 14.5px/1.45 lists with accent markers (strong-line markers on the "not" side). Stacks to one column with a horizontal rule under 640px.

### Decision box (signature)
- **Style:** 12px radius, surface fill, `--case-line` border, `--shadow` at rest, 16px 18px 18px padding, a 13px accent label ("The call"), a serif call at 500 clamp(17px, 1.3vw, 20px)/1.4, and a 15px/1.5 note. Inside an exhibit the shadow drops.

### Two columns and tiles
- **Working / not proven** (`.cols`): two 10px surface boxes with `--case-line` borders; the "not" box dashes its border; a 34px serif 700 accent figure with a 13.5px muted caption; 15px/1.5 lists with accent markers.
- **Changes ledger** (`.changes`, Meesho and VaultLedger): rows on `--case-line` rules; a 12px accent square (3px radius) in a 34px gutter; 15.5px Inter 600 "what", 14px "how", and a serif 600 accent value at the right that collapses under the text on phones.
- **Chapter tiles** (`.tiles`, defined, currently unused in the four pages): three 10px surface tiles with a 12.5px key, a serif accent number and a 15px title; hover lifts 2px and borders in the accent.

### Navigation
- **Home top bar:** brand in 17px serif 600 (hidden under 640px), nav links in 14px Inter 500 muted with a 6px radius; hover fills surface-2 and turns ink; the current link gains an inset 2px Carnegie red underline. A 36px circular theme toggle (34px on phones, 44px in the deck bar on phones) with sun and moon SVGs.
- **Deck bar:** back link with a 16px SVG arrow that slides 3px on hover, four ticks (10px by 4px, 2px radius, `--line-strong`; the current tick scales 2.6x and fills with the case accent; hover turns muted), a mono "1 / 4" counter with tabular numerals, the next-case link, the theme toggle. Links hover to the case accent. Phones hide the counter and the next-case name and grow every target to 44px.
- **Behavior:** `case.js` keeps the counter and ticks in sync with an IntersectionObserver and moves between slides on arrow and page keys; the page works without it.

### Figures (home)
- **Style:** `.fig` panels keep light inks in both themes on a fixed paper plate (12px radius, clamp(14px, 2.4vw, 26px) padding) with its own scoped red; dark mode dims the plate and deepens the inks instead of inverting. Caption in 12px mono muted.

## Do's and Don'ts

### Do:
- **Do** set one accent per case page through `data-case` on `<html>` and consume it only as `var(--case)` and its `color-mix` derivatives (`--case-tint`, `--case-tint-2`, `--case-line`).
- **Do** give every slide number a provenance stamp next to it and a mono source line under its exhibit.
- **Do** draw exhibits as inline SVG on theme tokens with the three stroke weights (1.5, 2, 3), 4px rounded data ends, direct labels and the accent on the one thing that changed.
- **Do** write slide titles as full sentences in Source Serif 4 600 with the one number in `.num`.
- **Do** keep text at 4.5:1 or better in both themes; the case accent pairs and the deeper night figure inks exist for that reason.
- **Do** keep every tap target 44px on phones and every focusable element on the 2px accent outline at 3px offset.
- **Do** honor `prefers-reduced-motion` by flattening transitions and cancelling hover rises.

### Don't:
- **Don't** use Carnegie red inside a slide or the case accent in the site chrome, footer or pager.
- **Don't** hardcode a color outside the token sets; the only literal values are the white or night text on accent fills and the #111 image wells.
- **Don't** add a shadow beyond `--shadow`, and never a hard offset one.
- **Don't** use JetBrains Mono for headings, calls to action or body copy.
- **Don't** put a header block, a topic heading or a bullet-column stage on a slide.
- **Don't** reach for logos, product screenshots or an inverted light figure in dark mode; redraw on theme inks and caption illustrations.
- **Don't** write "~", "about" or "nearly" before a number on a slide, and never use em or en dashes in text, code or comments.
