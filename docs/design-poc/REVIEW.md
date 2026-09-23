# Independent review: Redline Atelier POC (`poc/showcase-design`)

Reviewer: independent (read-only on source). Date: 2026-09-23.
Scope: uncommitted working tree (`index.html`, `_layouts/default.html`, `assets/css/mvs.css`, `assets/js/site.js`,
`404.html`, `_config.yml`, new `assets/images/`, `assets/fonts/`) against `DESIGN_DIRECTION.md`, plus
`DECISIONS.md`, `QA.md`, `CONTENT_GAPS.md` and `ASSET_ATTRIBUTION.md`.

Method:
- I read every screenshot in `docs/design-poc/screenshots/` and cropped the full-page captures at 1:1.
- I rebuilt the site in Docker (exit 0) and served `_site` on :4174, then took extra Playwright captures at
  1280×720, 1366×768, 1440×900 and 1536×864. I also captured mid-scroll states for the process, services, history,
  interlude and contact sections, a 768 menu-open view and a first paint with `site.js` delayed by 1.5 s. The server has been stopped.
- I sampled background pixels to estimate text-over-image contrast.

The extra captures are in the session scratchpad (`…/scratchpad/review/`), not in the repo. Every one of them can
be reproduced with the viewport and scroll position named below.

---

## Summary

The hero is the best thing on the page. At 1440 and 1920 it is a cinematic, confident first frame: the condensed
three-line H1, one red accent line, a black field and a forged piston cut by red rim light. It already looks
more premium than the homelogic reference hero. The phone opening is composed on its own, not cropped, and it works.
Truthfulness discipline is good throughout: there are no invented numbers, every image is labelled and the footer
carries a disclosure.

Below the hero, the craft does not hold at the same level. Four problems stand out:

- The tight display leading breaks pt-BR diacritics. The H1 **Ç** is clipped, and "COMEÇA" collides into
  "OBJETÍVO".
- The piston crown sits under the nav.
- Common laptop heights push the rail and the ambience label below the fold.
- One of the two sticky compositions (history) is dead, which leaves a half-screen void.

The process section spends about 2,200 px of scroll on four sentences. Section rhythm is also monotonous: the same
eyebrow, red rule and left-aligned uppercase H2 open every section at the same scale. It is a strong POC with a
premium hero and a good system. It is not yet "precise".

---

## Lead's question: the piston crown under the header at 1440×900

**Verdict: a defect (High), not acceptable as is.** The premise needs one correction. This is not vertical
cover-cropping. A 21:9 image in a 16:10 box is scaled to the box *height* (1440×900 → rendered ≈2097×900) and
cropped at the **sides**, so the full height of the frame is always shown. The problem is the source composition.
In `assets/images/hero-desktop-1280.jpg` the crown's top edge sits at y≈28 of 549, which is **about 5% from the
top of the frame**. As a result the crown lands inside the 88 px header band at *every* desktop viewport narrower than 21:9:
1280×720, 1366×768, 1440×900, 1536×864 and 1920×1080 (see `home-1920-hero.png`, where it sits under "Orçamento").
Only an ultra-wide viewport would crop vertically, and that would make it worse.

Why it matters:
- **Composition.** The image's key highlight, the crown that echoes the logo's pistons, is cut by UI chrome.
  The header reads as pasted on top of the photograph rather than composed with it. A cinematic frame needs air
  above the subject.
- **Legibility.** The header is transparent at the top of the page
  (`.is-enhanced .site-header:not(.is-condensed)::before { opacity:0 }`, mvs.css:621). The "Sobre" link sits on
  the crown's specular rim. Sampled background under "Sobre" reaches rgb(144,151,158), which puts bone text at
  **≈2.4:1** locally (`home-1440-hero.png`, x 1072–1113, y 34–64). "Contato" is fine (≈7.4:1).

Fix, in two steps:
1. **Now, in CSS.** Start the desktop hero image below the header so the crown clears the nav, and melt the top edge
   (the image's top rows are already near-black):
   ```css
   @media (min-width: 768px) {
     .hero__media { top: var(--header-h); }              /* was inset:0 (mvs.css:801-803) */
     .hero__media img {
       -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 5%);
               mask-image: linear-gradient(180deg, transparent 0, #000 5%);
     }
   }
   ```
   At 1440×900 the box becomes 1440×812. It still covers the width (rendered ≈1892 px), and the crown's top moves to
   ≈y 128, 40 px clear of the nav. The existing `.hero__scrim` top gradient still covers the header band, so
   `.hero` stays carbon above the image.
2. **Properly, with art direction.** Generate one more asset (4.25 credits, well inside the budget): a 16:10 desktop
   hero with the crown at about 15% from the top. Serve it with
   `<source media="(min-width: 768px) and (max-aspect-ratio: 2/1)" …>` ahead of the 21:9 sources, and keep the
   21:9 image for ultra-wide screens. This is how the phone hero was handled (D4), and laptops deserve the same.

---

## Critical

None. Nothing is untruthful, no function is broken and nothing blocks accessibility at the page level. The items
below are what keeps this from being premium and precise.

## High

### H1. Display leading clips and collides pt-BR diacritics and Q tails
- **Evidence.**
  - `home-1440-hero.png` (H1, x 330–350, y 330–350) and `home-1920-hero.png`: the **Ç** in "PREPARAÇÃO" is
    clipped to a stub that touches the T of "AUTOMOTIVA". It reads as a stray tick, not a cedilla.
  - `home-1440-full.png` y≈1190–1340 (manifesto H2) and `home-390-full.png` y≈1050–1110: the cedilla of "COMEÇA"
    lands on the I of the next line, so the heading reads **"OBJETÍVO"**.
  - `home-1440-full.png` y≈2190–2330 (services H2): the Q tail of "QUATRO" drops onto the U, which reads **"ÚM
    CONJUNTO"**.
  - Interlude (1440 mid-scroll capture): the Q tail of "QUE" marks the C of "COM".
  - The QA report's claim of "no clipped text" (QA.md §4) is wrong.
- **Cause.**
  - `.hero__title { line-height:.86 }` (mvs.css:853). The rise mask then clips anything below
    `padding-block:.14em .08em` (`.hero__title .line { overflow:hidden }`, mvs.css:858-864).
  - `.display-2 { line-height:.9 }` (mvs.css:337).
  - `.interlude__line { line-height:.92 }` (mvs.css:1172).
  - In Big Shoulders the gap between a baseline and the next line's cap top at 0.86–0.92 is smaller than the
    cedilla or Q-tail depth (about 0.18em).
- **Why it matters.** This is a pt-BR site whose H1 and first H2 misrender the language's signature glyph. To a
  Brazilian reader it looks like a typo, and it undercuts "precision".
- **Fix.**
  ```css
  .hero__title { line-height: .94; }
  .hero__title .line { padding-block: .2em .3em; margin-block: -.2em -.3em; }  /* mask keeps the cedilla */
  .display-2 { line-height: .96; }
  .interlude__line { line-height: .98; }
  ```
  Re-check the 3-line H1 height against H3 below. Verify at 320, 390, 1440 and 1920 with zoomed crops of Ç, Ã, É
  and Q.

### H2. Hero crown under the nav, with local nav contrast of about 2.4:1
See the lead's question above. It is a composition defect plus a localized contrast failure on "Sobre".

### H3. Laptop heights: the hero overflows the first viewport, so the rail and ambience label fall below the fold
- **Evidence** (Playwright bounding boxes, viewport height vs `.hero__rail`):
  - 1280×720: the hero is 847 px tall, the rail spans 775–847 and the **CTAs end at 711/720**.
  - 1366×768: the hero is 863, the rail spans 791–863.
  - 1536×864: the hero is 894, the rail spans 822–894.
  - In `home-1024-hero.png` the rail labels sit at the viewport's bottom edge.
- **Why it matters.** 1366×768 and 1536×864 are the most common Windows laptop viewports.
  - The first frame loses its bottom rail (the 01–04 index is half of the "pit-lane board" idea).
  - It also loses the **"Imagem de ambientação" label**: the hero image is shown without its label in the first
    viewport. That breaks the spirit of the labelling rule.
  - The spec (§7.2) designed 1440×900 only. It also demanded screenshots at 1024×768, and the hero is visibly clipped there.
- **Cause.** `.hero { min-height:max(720px,100svh) }` (mvs.css:792) combined with a width-only type clamp
  (`--fs-hero`) and fixed paddings (`padding-top: header + 64px`, rail 72 px).
- **Fix.** Make the hero type height-aware and tighten the spacing on short screens:
  ```css
  :root { --fs-hero: min(clamp(3.5rem, 1.9rem + 6.6vw, 8.25rem), 13svh); }
  @media (min-width: 1024px) { .hero { min-height: 100svh; } }         /* drop the 720 floor */
  @media (min-width: 1024px) and (max-height: 820px) {
    .hero__inner { padding-top: calc(var(--header-h) + var(--s-5)); }
    .hero__copy { padding-bottom: var(--s-6); }
    .hero__lead, .hero__actions { margin-top: var(--s-5); }
    .hero__rail { min-height: 56px; }
  }
  ```
  As a fallback, move `.hero__label` out of the rail so it is absolutely positioned bottom-right of
  `.hero__media` (spec §5.2 anchors it to the image anyway). Then it is always visible with the image.
  Acceptance: `.hero__rail` bottom ≤ `innerHeight` at 1280×720, 1366×768, 1536×864 and 1440×900.

### H4. The history image is not sticky, which leaves a void of about 900 px on the right
- **Evidence.** At 1440×900 mid-scroll on `#sobre` (+900 px), the "HOJE" row fills the left half. The bench image
  and inset have already scrolled off the top, and the right half of the screen is empty black. `home-1440-full.png`
  y≈8460–9270 shows the same void. D14 says the history image is sticky on desktop. It is not.
- **Cause.** `.history { overflow:hidden }` (mvs.css:1310) makes `.history` a scroll container, so
  `.history__visual { position:sticky; top:120px }` (mvs.css:1401-1407) sticks to a box that never scrolls.
  `.spec` has no overflow, and its sticky figure works (see the services mid-scroll capture).
- **Fix.** Change it to `.history { overflow: clip; }` (clip does not create a scroll container), or to
  `overflow-x: clip`. The inset needs about 96 px of bottom room, so on short screens use
  `top: max(96px, calc(100svh - 720px))`. Then reduce the section's bottom padding, because the void between
  "HOJE" and the contact section (≈450 px at 1440) is partly this bug.

## Medium

### M1. Process: 60vh steps produce dead frames, and the signature gauge is under-scaled
- **Evidence.** In the mid-scroll captures at 1440×900 (process at steps 02 and 04) and in
  `home-1440-full.png` y≈5100–7450, each viewport shows one step of about 3 lines, with 75–80% of the frame empty.
  The four steps take 2,160 px of scroll (step tops at 5144, 5684, 6224 and 6764). The gauge is a 420 px maximum
  SVG floating in 5 columns. The needle works and the redline at "Entrega" reads well (the needle feature works).
- **Why it matters.** It feels slow, not calm. Spec §9 bans "pinned sections longer than the content". The
  signature moment is also visually quiet: a small grey dial with no scale relationship to the H2 above it.
- **Fix.**
  ```css
  .step { min-height: clamp(260px, 40svh, 380px); }      /* mvs.css:1265, was 60vh */
  .gauge--process, .gauge__readout { width: min(100%, 520px); }
  .process__sticky { top: calc(50svh - 260px); }
  ```
  Keep the IO band (`rootMargin: "-45% 0px -45% 0px"`, site.js:181) but widen it to `-40% 0px -50% 0px` so the
  needle turns as a step's heading crosses the centre. For more drama, give the active step index a red
  hairline or underline, rather than dimming body text, which would fail AA.

### M2. Header and menu flash before `site.js` runs (mobile)
- **Evidence.** `fouc-390` capture (first paint with `site.js` delayed 1.5 s) shows the no-JS header: a solid bar
  with Início, Serviços, Processo, Sobre and Contato wrapped inline over the hero. It then collapses to the toggle
  when JS runs. On a slow 3G connection this is a visible layout jump on first load. The cause is the `defer`
  script (default.html:147), which adds `.is-enhanced`, while all header state is keyed on it
  (mvs.css:621, 1980-2003).
- **Fix.** Key the header and menu presentation on the `scripting` media feature instead of the JS class:
  ```css
  @media (max-width:1023px) and (scripting: none) { /* current html:not(.is-enhanced) header rules */ }
  @media (max-width:1023px) and (scripting: enabled) { .nav-toggle { display:inline-flex; } /* sheet rules */ }
  @media (scripting: enabled) { .site-header:not(.is-condensed):not(.is-menu-open)::before { opacity:0; } }
  ```
  Keep `.is-enhanced` only for reveal hiding, so a failed `site.js` never hides content.

### M3. The header logo is a 166 KB, 900 px PNG, loaded eagerly to render at 88–112 px
- **Evidence.** `_site/assets/logo-display.png` is 166,560 B, used in `<img>` at default.html:66 (eager) and
  footer:102. QA measured about 409 KB on mobile first load, so the logo is roughly 40% of the page, more than the
  hero AVIF (18–38 KB) and all three fonts combined (about 92 KB). Spec §5.3 asked for a `logo-display@2x.webp`,
  which was not produced.
- **Fix.** Export `logo-header-224.webp` and `logo-header-176.webp` (about 6–12 KB each) and use
  `srcset="…176w, …224w" sizes="(max-width:1023px) 88px, 112px"`. For the footer, export `logo-footer-720.webp`
  and keep the lazy load. Keep the PNG for og:image and JSON-LD.

### M4. Contact: sparks run behind the text columns
- **Evidence.** In `home-1440-full.png` y≈9300–10400 and the contact mid-scroll capture at 1440, orange streaks
  cross the lead ("máximo de contexto"), the phone numbers and "Almoço". A sampled spark pixel adjacent to the
  lead is rgb(121,84,77), which gives steel text ≈2.8:1 where a streak crosses. In `home-390-full.png` the whole
  channel list sits on sparks. Spec §4.1 requires that text over imagery sits only on scrimmed black zones.
- **Fix.** Confine the sparks to the form side and bottom-right:
  ```css
  .contact__bg picture {
    -webkit-mask-image: radial-gradient(70% 80% at 85% 85%, #000 25%, transparent 70%);
            mask-image: radial-gradient(70% 80% at 85% 85%, #000 25%, transparent 70%);
  }
  @media (max-width:1023px) { .contact__bg picture { opacity:.14; } }
  ```
  Also move `.contact__label` next to the visible sparks. It currently floats at the section's bottom-right, far
  from any visible spark.

### M5. The hero ignition gauge sits on the subject
- **Evidence.** `home-1920-hero.png`: the gauge overlaps the con-rod big end. `home-1440-hero.png`: it sits in the
  rim-light zone beside the rod and reads like a sticker. D14 already had to hide it below 1200 px.
- **Fix.** Move the gauge into `.hero__rail` as a 56 px instrument placed before `.hero__cue`
  (`grid-column:auto; width:56px; margin:0`), or delete it. The process gauge is the real signature, and one
  sweep on load is enough in either location.

### M6. Tablet, 768–1023 px: the in-between band is the least designed
- **Evidence.**
  - Tablet crop of `home-768-full.png`: the interlude uses the 21:9 desktop art at `min-height:420px`, so "CONVERSA
    COM O CONJUNTO" runs over the compressor housing.
  - The services figure is capped at 640 px and left-aligned, which leaves a ragged 90 px right gap
    (mvs.css:2149).
  - `home-768-hero.png`: the rail wraps to two rows and the ambience label wraps to two lines.
- **Fix.**
  - Serve the 4:5 interlude art up to 1023 px (`<source media="(max-width: 1023px)">` for the interlude only) and
    move the `.interlude` mobile rules to `@media (max-width:1023px)`.
  - For the services figure use `margin-inline:auto` or full bleed, as on mobile.
  - At <1024 px, hide `.hero__index` (as on mobile) and keep only the label.

### M7. Section rhythm and transitions: monotone openings, dead gaps and a hard seam
- **Evidence.** In `home-1440-full.png` every section opens identically: a 48 px red rule, a mono eyebrow and a
  left-aligned uppercase H2 of about 84 px at 14–18ch. There is no change of scale, alignment or density between
  manifesto, process, history and contact. Other gaps:
  - Around y≈2020–2240 (manifesto → paper) there is about 340 px of padding.
  - HOJE → contact has about 450 px.
  - In the paper → interlude transition (interlude capture at 1440, y 200) the interlude's top fade to
    `--carbon-0` meets paper with a hard edge, so the "dissolve" in spec §5.2 only works between dark sections.
- **Why it matters.** Compared with homelogic, the page has fewer ideas per scroll. The cinematic promise of the
  hero becomes a template of sections below it.
- **Fix (CSS-level).**
  - Give the manifesto H2 hero-scale treatment: `font-size: var(--fs-interlude)`, `max-width: 20ch`.
  - Set the process H2 at 12ch with the lead beside it in columns 8–12, the same split as services.
  - Reduce padding where a section follows a same-colour section: `.history { padding-bottom: var(--s-9) }`
    and `.contact { padding-top: var(--s-9) }`.
  - Add a paper-to-carbon step above the interlude: `.spec { padding-bottom: 0 }` plus a 96 px
    `linear-gradient(var(--paper), var(--carbon-0))` band, or drop the interlude's top fade when it follows `.spec`
    (`.spec + .interlude .interlude__media::after`).

## Low

- **L1. Footer links under 44 px wide.** "Início" is 36×44 and "Sobre" 40×44 at 390 (QA.md row 17). Fix with
  `.site-footer__col a { min-width: 44px; }`.
- **L2. The condensed header keeps an invisible 24 px hit strip.** `.site-header` stays 88 px tall (mvs.css:600)
  while the visible bar slides up 24 px, so the bottom strip of the fixed header eats clicks on content below it.
  Fix with `.site-header { pointer-events:none }` plus
  `.site-header__bar, .site-header.is-menu-open .menu { pointer-events:auto }`.
- **L3. The ambience label still shows when the image is missing.** `missing-images-1440.png`: the hero's
  "Imagem de ambientação" captions an empty glow, and the history inset renders as an empty bordered box.
  Fix with `.history__inset:has(img.is-broken) { display:none }` and
  `.hero:has(.hero__media img.is-broken) .hero__label { display:none }`.
- **L4. The hero `sizes` value understates the rendered width.** The image covers at ≈146% of the viewport width
  on 16:10, so at DPR 1 it selects 1920 for a ≈2097 px render. Use `sizes="max(100vw, 233svh)"` on the desktop
  sources (index.html:15-17).
- **L5. Short phones (320×568).** `home-320-hero.png`: the eyebrow and the first H1 line sit on the piston skirt
  (steel text on steel metal). Under `(max-width:767px) and (max-height:700px)`, strengthen the scrim:
  `linear-gradient(0deg, var(--carbon-0) 0%, rgba(7,8,10,.9) 55%, rgba(7,8,10,0) 80%)`.
- **L6. The process gauge has `role="img"` but a label that says "decorativo"** (index.html:211). Either it is
  meaningful or it is decorative. Since the step text carries the meaning, use `aria-hidden="true"`.
- **L7. QA evidence gaps.**
  - `focus-1440.png` shows no focused element (it is a mid-animation hero), so there is no visual proof of focus
    styling.
  - `nojs-390.png` was captured mid-animation, with the H1 half-masked.
  - QA row 6 has garbled wording, and QA §4 misses the cedilla clipping.
  - Re-shoot focus on a paper-section link and a form field, and shoot no-JS after 2.5 s.
- **L8. `asset_version: "20260923-poc"`** (\_config.yml:9) does not follow the `YYYYMMDD-shortsha` format. Cache
  busting still works (the value changed, and `?v=` is kept on the CSS and JS). Set a real short SHA at commit.

## Polish

- **P1. Dead or duplicate CSS.**
  - mvs.css:2385-2387 duplicates `.hero__label{position:static}` (941).
  - 1944-1946 `.history__bench .parallax{animation-timeline:view()}` is redundant.
  - 2288-2290 `.hero{align-items:flex-end}` is redundant.
  - 2460-2463 duplicates the input `min-height`.
  - 2236-2238 duplicates `margin-bottom`.
  - `.hero__inner` and `.contact__grid` hard-code `repeat(12…)` and ignore the responsive `--cols` token.
- **P2. Orphaned assets.** `assets/facebook.png`, `instagram.png` and `youtube.png` are no longer referenced.
  Delete them, or record them as intentionally kept.
- **P3. The header over paper turns mid-grey.** In the services mid-scroll capture at 1440, the `brightness(.55)`
  backdrop over `#EFEAE2` reads as a muddy #222. Use `background: rgba(7,8,10,.94)` when condensed, or accept a
  paper-toned header over `.spec`.
- **P4. The "years as monuments" signature is lost on phones.** `.timeline__year` shrinks to about 44 px
  (mvs.css:2440). Give each year a full-width row at about 4.5rem above its text on mobile. The red 2008 deserves a
  moment.
- **P5. The footer repeats the contact block** (address, hours, phones, socials) one screen later. Trim the footer
  to logo, nav and legal, or show the full contact data in only one of the two places.
- **P6. The hero image fades in from `opacity:0` over 1.6 s** (mvs.css:1875-1878), which delays the LCP paint
  (Lighthouse LCP 3.3 s on mobile). Animate only `transform` and `clip-path`, or start at `opacity:.35`.
- **P7. The mobile header logo at 88 px makes the "PREPARAÇÕES" sub-lettering illegible.** Consider 104 px on phones.

---

## What is good (keep it)

- The hero art direction on both devices, the 9:16 phone composition, and the full-width 52 px CTAs above the fold at 320×568.
- The paper spec sheet, which is the best section after the hero. The sticky ECU figure works, and the index,
  hairline and mono-tag system is crisp.
- The mobile menu sheet: numbered display links, the focus trap, `inert`, Esc handling and focus return.
- The mobile rev bar, a genuinely good translation of the gauge rather than a stacked copy.
- Truthfulness:
  - Every sentence traces to the old copy.
  - The years are computed at runtime with the fallback "Desde 2008."
  - The form never claims "Enviado".
  - All six rendered images carry a real-text label, and the footer discloses the AI imagery.
  - `ASSET_ATTRIBUTION.md` logs each prompt.
- Performance fundamentals: self-hosted subset fonts with metric fallbacks, AVIF first, art-directed preloads,
  lazy images with explicit dimensions, and zero CLS.
- Robustness: reduced motion never hides content (D13), no-JS shows everything, missing images degrade to composed
  glows, and `docs/` is excluded from the build.

---

## Top 8 fixes for one consolidated correction pass

In order; all CSS or HTML, sized for one engineer in one session. Re-shoot the QA screenshots afterwards.

1. **Display leading and diacritics (H1).** Hero `line-height:.94` with mask padding `.2em/.3em`, `.display-2`
   at `.96`, interlude at `.98`. Verify Ç, Ã, É and Q at 320, 390, 1440 and 1920.
2. **Hero crown clearance (H2).** At ≥768 px set `.hero__media { top: var(--header-h) }` with a 5% top mask.
   Queue a 16:10 headroom variant as a follow-up asset.
3. **Short-laptop hero (H3).** Use `--fs-hero: min(clamp(…), 13svh)`, drop the 720 px floor and add a
   `(max-height:820px)` spacing block. Acceptance: the rail and label are visible at 1280×720, 1366×768 and 1536×864.
4. **History sticky (H4).** Change `.history { overflow: clip }`, then trim the history and contact paddings to
   close the ≈450 px gap.
5. **Process pacing (M1).** Set `.step { min-height: clamp(260px, 40svh, 380px) }`, a 520 px gauge, a re-centred
   sticky top and an IO band of `-40%/-50%`.
6. **No flash before JS (M2).** Move the header and menu presentation to `@media (scripting: enabled|none)`, and
   keep `.is-enhanced` for reveals only.
7. **Header logo weight (M3).** Use 176/224 px WebP with `srcset` for the header and a 720 px WebP for the footer.
   This removes about 150 KB from every first load.
8. **Text and instruments over busy imagery (M4, M5, M6).**
   - Mask the contact sparks to the bottom-right.
   - Move the ignition gauge into the hero rail.
   - Serve the 4:5 interlude art up to 1023 px.
   - Add `min-width:44px` to the footer links (L1).

## Verdict

| Dimension | Score /10 | One line |
|---|---|---|
| Visual ambition | **8** | The hero is genuinely cinematic, and the paper spec sheet and gauge are real ideas. |
| Craft | **6** | Clipped Ç and "OBJETÍVO", the crown under the nav, dead sticky, 60vh voids and monotone section openings. |
| Mobile | **7** | Deliberate phone hero, interlude, rev bar and menu. Tablet is an afterthought, and the history years shrink away. |
| Accessibility | **7** | Solid landmarks, focus trap, targets, reduced motion and no-JS. Local contrast dips (nav over the crown about 2.4:1, sparks about 2.8:1) and focus evidence is missing. |
| Truthfulness | **9** | No invented claims, and every image is labelled and disclosed. The hero label falls below the fold on laptops. |
| **Overall** | **7.4** | A premium hero on a good system. One focused pass on the eight fixes above gets it to about 8.5. |
