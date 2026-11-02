# Product

<!-- impeccable:product-schema 1 -->

Record written 2026-10-30 from the 2026-10-29 profile audit (`~/Desktop/Profile Audit 2026-10-29/`): the cold reads, the site reviews, the portfolio research and the checked-claims ledger. No live interview was held for this file; facts marked (inferred) come from that record rather than a direct answer from Abhinav.

## Platform

web

## Users

Primary: a recruiter or sourcer (big tech, AI labs, consumer marketplaces) who opens the site from a CV link, LinkedIn Featured, or an InMail reply, on a laptop or a phone, and decides in under a minute whether to screen Abhinav for a Product Manager, AI Product Manager or Growth Product Manager role. Secondary: a hiring manager who has already screened and reads one case study before a phone call, probing for decisions, ownership and how results were measured. Tertiary (inferred): referrers and interviewers who revisit a case page during a loop.

## Product Purpose

Abhinav Gupta's portfolio site: four case studies (Flipkart Black, Meesho, Tata 1mg, VaultLedger), a Personal projects list, a How I work list, the Path and the CV download. Success: the reader can retell each case from its headlines, sees the decisions Abhinav made (not only what the team shipped), and trusts the numbers because ownership and measurement are labeled honestly. The audit's bar: a recruiter who reads only the slide headlines gets the story; a hiring manager sees the decisions.

## Positioning

An AI product manager with a consumer growth record who labels his own evidence: every result says whether it was a controlled test, a pre/post read, or a combined program result, and every case separates what he owned from what was decided above him. The cold-read reviewers named that honesty the strongest trust signal on the site. No neighboring candidate site can copy the specific decisions (the Meesho ladder at the same cost, the rejected VaultLedger prompt change that passed 5 of 6 gates, the 20% slot-price test he argued for).

## Operating Context

Static HTML, CSS and JS on GitHub Pages, served from `main` at the repo root; no build step for the site itself (`tools/` holds generators). Light and dark themes with a toggle. Case pages are four-slide decks with a deck bar (ticks, counter, next case), keyboard navigation and print styles. Reviewers open it at 1440x900 and 390x844. The CV and LinkedIn link to the case URLs, which 404 until the site is published; publishing is Abhinav's decision and happens by git push from this folder.

## Capabilities and Constraints

- Every number, scope and ownership statement must already exist in the checked-claims ledger (`04-final-package/highlights-ledger.md`) or the master bank (`~/Desktop/Projects/job-search-os/context-library/master-bank/`). No new facts, no invented rules, no invented reflections.
- Keep off: 170% member GMV; Meesho repeat-abuse percentages and the fraud signals; the -9% churn figure; Netflix declining first; the internal tool's name; YouTube Premium and Netflix under one activation number; "launched 0 to 1" for Black (it was a relaunch); "best model" or "production-ready" for VaultLedger; any latency ranking; the LLM judge as strong evidence.
- Ownership words stay honest: pricing and eligibility at Flipkart and the 10% pilot decision at Tata 1mg were not his; team results are labeled as team results.
- No "~", "about" or "nearly" before a number on slides (CV rule); the "Numbers are rounded." line stays on each page. Durations in the story ("about three hours") may keep the word.
- Writing: plain English, first person, contractions allowed, no em or en dashes anywhere (text, code, comments), never: delve, landscape, synergy, leverage, robust, streamline, cutting-edge, spearheaded, pioneered, orchestrated. No engineering jargon in headlines.
- Confidentiality: no research that reaches sellers or customers of Flipkart, Meesho or Tata 1mg; no company logos; no image or name of the TV actor from the Meesho banner; anything resembling a product screen is captioned "Illustration, redrawn. Not the product UI."
- Accessibility: keyboard navigation, skip link, reduced-motion handling, 44px tap targets on phones, text contrast 4.5:1 or better in both themes, a text alternative for every figure.
- Do not commit, push or deploy; never run git stash, checkout or reset in this folder.
- Open inputs Abhinav has not answered (use the fallback, never an invented answer): the Flipkart checkout-upsell targeting rule; how the Tata 1mg +3% was measured; whether Cent Capital's original investment-advice idea may be stated publicly (current wording approved by him stays); whether Meesho's North Star definition may be stated (it is on the approved page); the CV vs LinkedIn date conflict (keep the current site dates).

## Brand Commitments

Name: Abhinav Gupta. The site's established visual system is binding for this work: Carnegie red (#C41230) as the site accent, Source Serif 4 for display, Inter for text, JetBrains Mono for measurements and source labels, the light and dark token sets in `styles.css`, the deck-bar concept and the "More from" cards. Voice: human, direct, first person, specific numbers over adjectives. Reviewers praised and asked to keep: the "What I owned / Not mine" split, the honest result labels, the VaultLedger limits statement, and the Decision callout.

## Evidence on Hand

- Case facts: `~/Desktop/Profile Audit 2026-10-29/04-final-package/highlights-ledger.md` and the master-bank cards (flipkart.md, meesho.md, tata-1mg.md, cent-capital.md).
- Diagrams (inline SVG, redrawn): `~/Desktop/Profile Audit 2026-10-29/03-portfolio/diagrams/` (meesho-ladder, meesho-funnel, tata-whatsapp-flow, tata-video-pipeline, vaultledger-gates, flipkart-gtm).
- Reviews and cold reads: `03-portfolio/reviews/`, `04-final-package/coldread-*.md`; build plan: `05-slides-build-plan/BUILD-PLAN.md`.
- Assets: per-case share images `assets/og-<case>.png`, VaultLedger presentation screenshot `assets/vault.jpg`, CV PDF `assets/Abhinav-Gupta-CV.pdf`.
- Absent, must not be fabricated: product screenshots from any employer; the Flipkart upsell rule; a baseline for the Tata 1mg +3%; the Meesho comparison method behind 17% to 28%; the share of Black members who rolled over from the old tier; any drop-off size for the slot-price test; real-user results for VaultLedger.

## Product Principles

1. Headlines carry the story: a reader who reads only the four slide titles of a case gets the situation, the problem, the decision and the result.
2. Decisions over deliverables: each case shows at least one call Abhinav made, with the option he rejected where the record holds one.
3. Evidence is labeled where it appears: controlled test, pre/post, combined result, user-stated, or team result, in the slide itself, not in a footer disclaimer.
4. Ownership is explicit: what he owned and what sat above him appear together on the first slide of each case.
5. One message, one visual per slide; depth lives below the deck in "More from" cards and in the linked artifacts.
