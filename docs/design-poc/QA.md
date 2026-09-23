# QA report — poc/showcase-design

**This is the final QA run**, taken after the consolidated correction pass (see `REVIEW.md` and `DECISIONS.md`
D17–D23). It supersedes the numbers from the first pass; see "Corrections to the first run" (§6) for what changed
and why the earlier "no clipped text" claim was wrong.

Date: 2026-09-23 (rebuilt and re-tested after D17–D23 landed)
Branch: `poc/showcase-design`
Scope: `index.html` served from a production Jekyll build, static assets, JS-progressive-enhancement behaviour.

## Environment

| Component | Version |
|---|---|
| Build | `docker compose run --rm jekyll bundle exec jekyll build` (re-run against the corrected working tree) |
| Ruby image | `ruby:3.2` (Dockerfile) |
| Bundler | 2.4.19 (Gemfile.lock) |
| Local server | `python3 -m http.server 4173 --directory _site` (Python 3.9.6) |
| Browser automation | Playwright 1.61.1, from `/Users/jamescoggan/alquest/homelogic/node_modules` |
| Chromium | Chrome for Testing 149.0.7827.55 (Playwright chromium build v1228) |
| Node | v26.8.2 |
| Accessibility scanner | axe-core 4.12.1, injected via `addScriptTag` |
| Lighthouse | 13.5.0, `http://localhost:4173/`, `--form-factor=mobile --screenEmulation.mobile=true`, default throttling |
| Test scripts | `/private/tmp/claude-501/.../scratchpad/qa/qa2.js` (final run), raw results in `results2.json` in the same scratchpad directory (not committed) |
| Waits | ≥1900ms after every page load and after every scroll-back-to-top, so hero and menu CSS transitions settle before a screenshot (see §6) |

## 1. Build

- Exit code: **0**, no warnings.
- `_site/`: no `docs/` folder, `CNAME`/`robots.txt`/`sitemap.xml` all present.

**PASS.**

## 2. Pass/fail table (final run)

| # | Check | Result | Key numbers |
|---|---|---|---|
| 1 | Jekyll build | PASS | exit 0, no `docs/` in `_site`, required files present |
| 2 | Horizontal overflow (320–1920) | PASS | no overflow at any of the 6 core widths |
| 3 | Console/page errors | PASS | 0 errors, 0 warnings, 0 page errors at any width |
| 4 | Failed requests / 4xx / 5xx | PASS | 0 failed requests, 0 bad responses |
| 5 | Images fully loaded after scroll | PASS, 1 known exception | Same as first run: `.history__inset` is `display:none` below 1024px (mvs.css:2240) by design, so it's the only image that never completes at 320/390/768. All 8/8 load at 1024/1440/1920. |
| 6 | Hero art direction + single request (6 core widths) | PASS | <768 → `hero-mobile-*`; ≥768 → `hero-desktop-1610-*` (the new 16:9 crop); exactly **1** hero image request at every width (320, 390, 768, 1024, 1440, 1920) |
| 7 | **Laptop hero viewports 1280×720, 1366×768, 1536×864** (new) | PASS | All three: hero rail bottom edge == viewport height (`railBottomWithinViewport: true`, e.g. 1280×720 rail bottom 720.0), H1/lead/CTAs all `fitsInViewport: true`. Exactly 1 hero request per viewport, all resolving to `hero-desktop-1610-1920.avif`. |
| 8 | **Hero art direction at 1440×900 / 1920×1080 / 2560×1080** (new) | PASS | 1440×900 → `hero-desktop-1610-1920.avif`; 1920×1080 → `hero-desktop-1610-2560.avif` (both the "1610" 16:9 family, as required); 2560×1080 (21:9 viewport) → `hero-desktop-2560.avif` (the original 21:9 family, correctly *not* 1610); 1 image request in all three cases |
| 9 | **Pt-BR diacritic crops** (new) | PASS | `diacritics-h1-{320,1440}.png`, `diacritics-manifesto-{390,1440}.png`, `diacritics-interlude-{390,1440}.png` — manually reviewed, all 6: Ç, Ã, É render fully formed with clear line-to-line spacing, no clipping and no touching the line below. See §4. |
| 10 | Mobile menu (390, 320), settled ≥600ms | PASS | `aria-expanded` toggles correctly, focus moves to first link on open, Tab stays inside header (12/12 stops), Escape closes and returns focus to the toggle. Screenshots now taken after the full 420ms fade + buffer — solid opaque sheet, no ghosting. |
| 11 | Reduced motion (390, 1440) | PASS | 27/27 `.reveal` elements at opacity 1 with no scroll, both widths |
| 12 | No-JS (390) | PASS | `<main>` opacity 1, non-zero size |
| 13 | Keyboard flow (1440, 40 tabs) | PASS | Skip link is stop #1 and works (jumps into `#conteudo`); **focus screenshot re-taken via real keyboard Tab (not `.focus()`)** — `firstCtaHasVisibleRing: true`, a clear amber ring with offset is visible around "Solicitar orçamento" in `focus-1440.png`. All 39 other stops report a visible focus style. |
| 14 | Missing-image fallback (1440, 390) | PASS | Aborted `/assets/images/**`; `.is-broken` applied correctly (6/8 at 1440, 5/8 at 390); no overflow; no broken-icon/alt-spill in screenshots |
| 15 | Structure: one `<h1>`, `lang`, landmarks | PASS | 1 `<h1>`, `lang="pt-BR"`, header/main/footer present, 2 `<nav>` both labelled |
| 16 | Structure: labelled inputs, img alts | PASS | 0/5 unlabelled inputs, 8/8 images have `alt` |
| 17 | **Footer tap targets at 390, re-checked** (new) | **PASS — previously-reported issue is fixed** | `tapTargets.small` is now **empty** (was: "Início" 36×44 and "Sobre" 40×44). `assets/css/mvs.css:1808` now sets `.site-footer__col a { min-width:44px; min-height:44px; }`. No small targets and no inline-paragraph links found at 390. |
| 18 | Brief form (390) | PASS | WhatsApp href carries the full encoded message; mailto href captured on submit (`mailto:contato@mvspreparacoes.com.br?subject=...&body=...`); status text "Abrindo seu aplicativo de email com o briefing preenchido."; no "enviado"/"sucesso" claim anywhere |
| 19 | axe-core violations (1440, 390) | PASS | **0 violations**, both widths |
| 20 | **Logo currentSrc is WebP** (new) | PASS | `.brand img` currentSrc = `.../assets/logo-176.webp` at every width tested (320 through 1920) |
| 21 | Performance snapshot | INFO, improved | 390: **252.2 KB** / 8 resources (was 408.6 KB) — hero `hero-mobile-720.avif`. 1440: **331.7 KB** / 9 resources (was 492.7 KB) — hero `hero-desktop-1610-1920.avif`. The WebP logo (D22) and the smaller 1610 crops both contributed. |
| 22 | Lighthouse (mobile, throttled) | PASS | Performance **0.95** (was 0.88–0.90), Accessibility **1.00**, Best Practices **1.00**, SEO **1.00**. FCP 1.8s (was 2.8s), LCP 2.8s (was 3.3s), TBT 0ms, CLS 0, Speed Index 1.8s (was 3.1s). |

## 3. Full failure/defect details

**No blocking defects.** Both items open after the first run are now resolved:

1. ~~Footer tap targets under 44×44~~ — **fixed.** `min-width`/`min-height: 44px` added to `.site-footer__col a`; re-verified empty at 390.
2. ~~Ç/Q diacritic clipping (REVIEW.md H1)~~ — **fixed.** D19 changed the display line-height to 1.06 (from a tighter value that clipped the Ç's descender at -0.15em). Verified by direct visual review of 6 crops at 320/390/1440 covering the hero H1, the manifesto H2 ("Cada projeto começa pelo objetivo do carro.") and the interlude line — no clipping, no collision with the line below, in any of them.
3. ~~Piston crown under the header nav at desktop widths~~ (REVIEW.md's "Lead's question", rated High) — **fixed by D17**, not masking: a dedicated `hero-desktop-1610` (16:9) crop was generated with the crown ~17.5% down, served at `(min-width:768px) and (max-aspect-ratio:2/1)`. Confirmed visually and by the new hero-art-direction/laptop-hero checks (§2 rows 7–8): the crown sits well clear of the nav at 1280×720 through 1920×1080, and the 21:9 fallback is still used only at ultra-wide (2560×1080).

No new defects were introduced by the correction pass: 0 console errors, 0 failed/4xx/5xx requests, 0 axe violations, no overflow, at any width tested.

**Out of scope for this QA pass** (raised in REVIEW.md but not part of the coordinator's re-test list, so not independently re-verified here): the process section's scroll length (~2,200px for four sentences) and the sameness of section-opening rhythm (eyebrow + red rule + left-aligned uppercase H2 on every section) — these are editorial/pacing calls, not correctness bugs, and weren't part of this run's checklist.

## 4. Diacritics review (manual)

Reviewed all 6 crops with the Read tool:

- `diacritics-h1-320.png`, `diacritics-h1-1440.png`: "PREPARAÇÃO" — Ç and Ã fully formed, full line gap before "AUTOMOTIVA", no touching.
- `diacritics-manifesto-390.png`, `diacritics-manifesto-1440.png`: "CADA PROJETO / COMEÇA PELO / OBJETIVO DO CARRO." — the Ç in "COMEÇA" no longer lands on "OBJETIVO" (the bug REVIEW.md flagged as reading "OBJETÍVO"); clean gap at both widths.
- `diacritics-interlude-390.png`, `diacritics-interlude-1440.png`: "O PERIFÉRICO / CERTO É O QUE / CONVERSA COM / O CONJUNTO." — É is crisp, the tail of "QUE" no longer marks the C of "COM" (the bug REVIEW.md flagged); all four lines cleanly separated.

## 5. Visual observations (manual review of screenshots, final state)

- Hero at 1440/390: piston crown now sits with clear air above it under the nav (previously touched the header chrome); H1 fully legible with correct diacritics; gauge has moved into the bottom rail (D21) and no longer needs ≥1200px to appear.
- `focus-1440.png`: a clear, high-contrast amber focus ring with visible offset around "Solicitar orçamento", captured via genuine keyboard Tab traversal (skip link → hero CTA), confirming the visible-focus requirement is met in practice, not just in computed styles.
- Laptop hero screenshots (1280×720, 1366×768, 1536×864): hero content — eyebrow, H1, lead, CTAs and the index/gauge rail — all fit inside the viewport with no clipping at the bottom edge, confirming the D17 fix holds across the common laptop height range, not just at 1440×900/1920×1080.
- Mobile menu (390/320), captured after the fade settles: fully opaque sheet, numbered nav items, WhatsApp/phone CTAs and hours line all render as specified, no bleed-through from the page behind.
- Missing-image fallback and reduced-motion screenshots: unchanged in character from the first run — composed dark panels, no broken-image icons, all `.reveal` content visible without motion.
- `home-1440-full.png`: page is now ~10,981px tall (was ~11,410px) — consistent with a tighter history-section composition — with no overlapping elements or contrast issues spotted at any section.

## 6. Corrections to the first run

The first-run QA.md's claim under §4 ("Visual observations") that there was **"no clipped text"** was wrong.
The independent review in `REVIEW.md` (High H1) found real clipping that the first pass missed: the Ç in the H1
"PREPARAÇÃO" was cut to a stub touching "AUTOMOTIVA", "COMEÇA" collided into "OBJETIVO" (reading "OBJETÍVO"), and
the Q tail in "QUATRO"/"QUE" touched the next word. That review led directly to D19 (line-height 1.06). This
final run's diacritics crops (§4) confirm the fix; the first pass simply didn't zoom in far enough on the display
type to catch collisions that only show up at 1:1 pixel inspection.

Separately (methodology, not a site bug): the first pass's `home-{w}-hero.png` and `menu-open-{w}.png` screenshots
were taken 300ms/200ms after the triggering action, which is shorter than the hero's CSS entrance animation
(900–1600ms) and the menu's 420ms fade. Those early screenshots showed apparently clipped H1 lines and a
translucent-looking menu sheet that were purely mid-animation artifacts, not defects — confirmed at the time by
re-shooting with longer waits. This final run bakes in a ≥1900ms wait after every load and scroll-to-top, and
≥650ms after opening the mobile menu, so every screenshot here reflects the settled end state.

## 7. Screenshots

All in `docs/design-poc/screenshots/` (28 files):

```
home-320-hero.png        home-320-full.png
home-390-hero.png        home-390-full.png
home-768-hero.png        home-768-full.png
home-1024-hero.png       home-1024-full.png
home-1440-hero.png       home-1440-full.png
home-1920-hero.png       home-1920-full.png
home-1280x720-hero.png
home-1366x768-hero.png
home-1536x864-hero.png
diacritics-h1-320.png        diacritics-h1-1440.png
diacritics-manifesto-390.png diacritics-manifesto-1440.png
diacritics-interlude-390.png diacritics-interlude-1440.png
menu-open-390.png         menu-open-320.png
reduced-motion-390.png    reduced-motion-1440.png
nojs-390.png
focus-1440.png
missing-images-1440.png   missing-images-390.png
```

Best final reference shots: **`home-1440-hero.png`** / **`home-1440-full.png`** (desktop) and
**`home-390-hero.png`** / **`home-390-full.png`** (mobile).

## 8. What wasn't tested

Same gaps as the first run, still open:

- **Safari/WebKit and Firefox** — not run; only Chromium. The `mailto:`/`enctype=text/plain` fallback specifically
  calls for a Safari/Chrome check in DESIGN_DIRECTION.md §10 — still not done.
- **Real devices / screen readers** (VoiceOver, TalkBack) — not run; keyboard + axe-core are a proxy, not a substitute.
- **`animation-timeline: scroll()/view()`** visual correctness under a real (non-stepped) scroll session — only checked indirectly (no console errors, no overflow).
- **Lighthouse** — mobile, `/` only, default throttling, 2 runs total (one per QA pass) to sanity-check direction of travel, not a statistically robust average; desktop form factor and 404.html not run.
- **Editorial/pacing items from REVIEW.md** not in the coordinator's re-test list — process-section scroll length, section-opening rhythm sameness — left for a design decision, not re-verified here.
- **Real OS-level mailto/WhatsApp handoff** — only the constructed URLs were verified; headless Chromium has no mail client to actually hand off to.

## Post-QA lead check (2026-09-23)

- Found by the lead after the final QA run: at 1440 the process H2 wrapped one word per line (a regression from review item M7). The frontend agent fixed it in `assets/css/mvs.css` and re-captured `home-1440-full.png` and `home-1024-full.png`. The lead re-ran the Docker build after the fix (exit 0). The other screenshots and the automated checks above predate this CSS-only change; they weren't re-run.
