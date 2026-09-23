# Asset attribution — Redline Atelier image set

All images on this page are **AI-generated illustrative ambience** ("Imagem de ambientação"). None
depict MVS Preparações' actual workshop, staff, customers or customer vehicles or projects. They are
generic, non-identifiable close-ups of automotive parts and tools, generated to match the Redline
Atelier art direction in `DESIGN_DIRECTION.md` §5.

**Date:** 2026-09-23
**Model used for all 9 assets:** GPT Image 2.5 (`gpt_image_2_5`, Higgsfield CLI), variant `flare`,
resolution `4k`, quality `high`.

## Why this model

The brief needed a single photoreal model able to natively cover all five required aspect ratios
(21:9, 9:16, 4:5, 3:2, 16:9) without approximation. Of the Higgsfield catalog's cinematic-still
candidates, Soul Cinematic and Soul Location both stop at `21:9`/`3:2`/`9:16` and do **not** offer
`4:5`; GPT Image 2.5 supports all five natively (plus native `4k` output), so no aspect ratio had to
be approximated with a wider crop. Cost was checked with `higgsfield generate cost` before
generating: at `resolution=4k, quality=high` the price is a flat **4.25 credits per image**
regardless of aspect ratio, which maximises resolution (the model's highest tier) while leaving
large headroom under the 150-credit project cap.

## Budget

### Initial batch (IMG-01…IMG-08)

- Account balance before this task's first generation: **1179.5 credits**
- Account balance after this task's 8th generation: **1139.64 credits**
- This project's actual cost, computed from the confirmed flat per-generation price
  (4.25 credits at `resolution=4k, quality=high`, verified constant across all five aspect ratios
  used): **8 generations × 4.25 = 34 credits total.**
- Re-rolls: **0**. All 8 images passed inspection on the first generation; no rejected generations,
  no wasted credits.

### Follow-up (IMG-09, requested after independent review)

- Account balance before IMG-09's first generation: **1139.64 credits**
- Account balance after IMG-09's final generation: **1131.14 credits**
- Cost: 2 generations × 4.25 credits = **8.5 credits**, exactly the 8.5-credit / 2-generation cap set
  for this follow-up. 1 re-roll was used (see IMG-09 notes below).

### Note on the raw balance deltas

This Higgsfield account balance is **shared with another concurrent project** — job history
(`higgsfield generate list`) confirms other, unrelated jobs (including other `gpt_image_2_5` and
`soul_location` generations not created by this task) ran on the same account during this session.
The raw balance deltas above therefore include that unrelated spend and are **not** this project's
cost in isolation; the per-generation figures (computed from `higgsfield generate cost`, confirmed
flat regardless of aspect ratio) are the reliable numbers.

### Running total

- **9 assets delivered, 10 generations run, 1 re-roll, 42.5 credits total** — well under the
  150-credit hard cap for this project.

## Asset table

Common suffix appended to every prompt below:

> Photographic, cinematic still, shot on a full-frame cinema camera, anamorphic look, shallow depth
> of field, crushed true-black shadows (#07080A), single hard red rim light, cool steel highlights,
> desaturated midtones, subtle fine film grain, premium motorsport editorial mood. No text, no
> logos, no brand marks, no readable labels or numbers, no people, no hands, no faces, no license
> plates, no complete cars, no identifiable vehicle, not a real workshop.

| ID | Filename base | Status | Aspect | Source resolution | Credits | Output files (widths) |
|---|---|---|---|---|---|---|
| IMG-01 | `hero-desktop` | used | 21:9 | 3840×1648 | 4.25 | 1280, 1920, 2560 (avif/webp/jpg) |
| IMG-02 | `hero-mobile` | used | 9:16 | 2160×3840 | 4.25 | 720, 1080 (avif/webp/jpg) |
| IMG-03 | `interlude-turbo` | used | 21:9 | 3840×1648 | 4.25 | 1280, 1920, 2560 (avif/webp/jpg) |
| IMG-04 | `detail-ecu` | used | 4:5 | 2560×3200 | 4.25 | 640, 960, 1280 (avif/webp/jpg) |
| IMG-05 | `history-bench` | used | 3:2 | 3504×2336 | 4.25 | 640, 960, 1280 (avif/webp/jpg) |
| IMG-06 | `interlude-turbo-mobile` | used | 4:5 | 2560×3200 | 4.25 | 640, 960, 1280 (avif/webp/jpg) |
| IMG-07 | `detail-stacks` | used | 4:5 | 2560×3200 | 4.25 | 640, 960, 1280 (avif/webp/jpg) |
| IMG-08 | `contact-sparks` | used | 16:9 | 3840×2160 | 4.25 | 1280, 1920, 2560 (avif/webp/jpg) |
| IMG-09 | `hero-desktop-1610` | used (v2; v1 rejected) | 16:9 (16:10 unsupported by model) | 3840×2160 | 8.5 (2 gens) | 1280, 1920, 2560 (avif/webp/jpg) |

Total: 9/9 used, 1 rejected generation (IMG-09 v1), 0 skipped widths (source resolution exceeded
every requested export width, so no upscaling was needed anywhere).

### IMG-01 — `hero-desktop` (21:9, must)

**Full prompt:** Extreme close-up of a single forged aluminium performance piston attached to a
polished steel connecting rod, standing upright on a matte black steel surface, positioned in the
right third of the frame, three-quarter view from slightly below, 85mm lens at f/2. A hard red rim
light from behind-right traces the piston crown edge, ring grooves and rod beam; faint cool steel
fill from top. The left 60% of the frame is almost pure black negative space with only a whisper of
haze, reserved for headline text. Machined surface texture and tiny tool marks visible in sharp
focus, background falls to black. [+ common suffix]

Passed inspection on the first try. Piston/rod sits in the right ~40% of frame; the left ~60% is
near-pure black. No text, logos, people, hands, cars or plates.

### IMG-02 — `hero-mobile` (9:16, must, composed for phone)

**Full prompt:** Vertical composition: a single forged performance piston and connecting rod seen
from above at a steep diagonal, the piston crown in the upper 40% of the frame, the rod leading down
and fading into darkness by mid-frame. Hard red rim light from top-right carving the crown edge and
ring lands; cool steel specular highlights. The lower 55% of the frame is clean, near-black negative
space for headline and buttons. 50mm lens, f/2.8, subject slightly right of centre. [+ common suffix]

Passed inspection on the first try. Crown sits in the upper ~35-40%, rod fades to black by
mid-frame; lower ~60% is clean near-black space for headline/CTA overlay.

### IMG-03 — `interlude-turbo` (21:9, must)

**Full prompt:** Macro of a turbocharger compressor wheel seen through the open inlet of its
housing, blades in razor-sharp focus in the centre-right, the aluminium spiral housing falling into
black at the edges. Red rim light grazing the blade edges, a faint amber heat glow on the hot
turbine side at far right. Wide negative space band across the upper-left for one line of text.
100mm macro lens, f/4, low angle. [+ common suffix]

Passed inspection on the first try. Upper-left band is clean black for a headline line; amber heat
glow only faintly visible at the far right edge, no completed car or brand marks.

### IMG-04 — `detail-ecu` (4:5, must)

**Full prompt:** Dark workbench at night: an open laptop angled away from camera emitting a soft red
and cool-cyan glow onto a bundle of engine wiring harness connectors and a small generic metal-cased
engine control unit in the foreground. Screen content is fully out of focus and unreadable, abstract
light only. 35mm lens, f/1.8, glow as the only light source besides a red rim from behind. Top 20%
black for breathing room. [+ common suffix]

Passed inspection on the first try. Laptop screen renders as an abstract, unreadable colour-block
glow (no legible text), no visible brand marks on the laptop body, no hands/people.

### IMG-05 — `history-bench` (3:2, must)

**Full prompt:** A heavy steel workbench in a dark, anonymous workshop: neatly arranged torque
wrench, sockets and a caliper beside a disassembled cylinder head, lit by one hard red rim light
from the back and a narrow cool top light. Deep black background, no windows, no signage, no
posters, nothing identifying the location. Subject in the right 60%, left side dark for overlaid
year numerals. 50mm lens, f/2.2, slightly elevated angle. [+ common suffix]

Passed inspection on the first try (zoomed crops checked on the torque wrench and caliper for stray
markings). Tools sit in the right ~55-60% of frame; left side is dark and clear for overlaid year
numerals. The caliper carries only its inherent, illegible etched scale ticks (not readable text/
numbers), consistent with a generic measuring tool.

### IMG-06 — `interlude-turbo-mobile` (4:5, nice)

**Full prompt:** Vertical composition of a turbocharger compressor wheel viewed straight into the
inlet, blades filling the lower-middle of the frame, spiral housing curving out of frame, red rim
light on blade edges, upper 35% clean black for a line of text. 100mm macro, f/4. [+ common suffix]

Passed inspection on the first try. Upper ~35-40% is clean black.

### IMG-07 — `detail-stacks` (4:5, nice)

**Full prompt:** Row of polished individual throttle-body velocity stacks (trumpets) on an intake,
seen from a low 30-degree angle, receding into shallow focus; red rim light running along each
flared lip, steel reflections, black background. 85mm lens, f/2. [+ common suffix]

Passed inspection on the first try. No text/logos/people; background falls cleanly to black.

### IMG-08 — `contact-sparks` (16:9, nice)

**Full prompt:** Abstract long-exposure of orange-red grinding sparks arcing from the lower left
across a pure black void, motion streaks and bokeh, the grinder and source out of frame, upper-right
60% nearly empty. 35mm lens. [+ common suffix]

Passed inspection on the first try. Fully abstract; no tool, hand or person visible; upper-right
~60% is empty black, suited to sitting at 25% opacity behind the contact section.

### IMG-09 — `hero-desktop-1610` (16:9, follow-up fix for 16:9/16:10 desktop viewports)

Requested after an independent review found that in `hero-desktop` (IMG-01, 21:9) the piston crown
starts only ~5% down from the top of the frame, which sits under the 88px header nav on 16:9/16:10
desktop viewports (which crop the 21:9 image's top/bottom to fill a shorter viewport). This is a
same-subject, same-lighting, same-grading recomposition at 16:9 (16:10 is not in `gpt_image_2_5`'s
aspect-ratio enum — checked with `higgsfield model get gpt_image_2_5`; 16:9 is the closest supported
option) with more headroom above the crown.

**Full prompt (v2, accepted):** Close-up of a single forged aluminium performance piston attached to
a polished steel connecting rod, the camera pulled back slightly so the entire piston and rod fit
fully within the frame, standing upright on a matte black steel surface, positioned in the right 38%
of the frame, three-quarter view from slightly below, 85mm lens at f/2. Generous black headroom above
the subject: a clear gap of pure black space, about one full piston-crown-height deep, separates the
top of the piston crown from the very top edge of the frame, so the crown top sits approximately 18%
of the way down the image, not near the top edge. A hard red rim light from behind-right traces the
piston crown edge, ring grooves and rod beam; faint cool steel fill from top. The left 58% of the
frame is almost pure black negative space with only a whisper of haze, reserved for headline text.
Machined surface texture and tiny tool marks visible in sharp focus, background falls to black.
[+ common suffix]

**v1 (rejected, not a quality-gate failure but a composition miss):** same prompt as IMG-01 but with
"the right 38%"/"left 58%" percentages substituted in place of "right third"/"left 60%", no extra
headroom instruction. Measured (pixel-scan of the rendered PNG): crown top at **9.9%** of frame
height — better than IMG-01's ~5% but still short of the requested 15-18%, so it was re-rolled rather
than shipped. Cost 4.25 credits; not used; file not copied to `assets/images/`.

**v2 (accepted):** measured crown top at **17.5%** of frame height (target 15-18%, met); subject's
left edge measured at 64.5% of frame width, i.e. subject occupies the right ~35.5% (target ~38%,
close enough — if anything slightly more black headline space than requested, not less); rod and
piston fully in frame with clear black margin above and a natural floor reflection below (not
clipped). No text, logos, people, hands, faces, cars or plates. Visual grading (crushed black,
single red rim light, steel highlights) matches IMG-01 for continuity.

## Rejected / skipped

- **IMG-09 v1** (see above): composition miss (crown too close to top edge, 9.9% vs. requested
  15-18%), cost 4.25 credits, re-rolled once as the follow-up brief allowed, superseded by v2.
- No other rejections. All 5 must-have + 3 nice-to-have assets in the original 8-asset batch were
  generated, inspected and accepted on the first attempt, and no export width was skipped for any
  asset (source resolution exceeded every requested width in every case).

## Delivery — exported files

Exported to `assets/images/` as `{base}-{width}.{ext}` for `ext` in `avif` (libsvtav1 via ffmpeg,
crf 32, metadata stripped), `webp` (cwebp -q 75, metadata stripped) and `jpg` (Pillow, quality 78,
progressive, optimized, no EXIF). All dimensions below are exact pixel width×height as decoded from
the delivered files (needed for frontend `width`/`height` attributes).

| Base | Width | Height | avif | webp | jpg |
|---|---|---|---|---|---|
| hero-desktop | 1280 | 549 | 15.0 KB | 18.2 KB | 32.4 KB |
| hero-desktop | 1920 | 824 | 33.0 KB | 36.1 KB | 65.7 KB |
| hero-desktop | 2560 | 1099 | 55.3 KB | 61.4 KB | 110.0 KB |
| hero-mobile | 720 | 1280 | 18.0 KB | 22.6 KB | 42.5 KB |
| hero-mobile | 1080 | 1920 | 37.7 KB | 42.4 KB | 86.2 KB |
| interlude-turbo | 1280 | 549 | 32.0 KB | 41.6 KB | 69.3 KB |
| interlude-turbo | 1920 | 824 | 66.8 KB | 76.9 KB | 133.0 KB |
| interlude-turbo | 2560 | 1099 | 103.5 KB | 121.9 KB | 213.9 KB |
| detail-ecu | 640 | 800 | 20.1 KB | 26.9 KB | 45.1 KB |
| detail-ecu | 960 | 1200 | 36.0 KB | 49.8 KB | 86.2 KB |
| detail-ecu | 1280 | 1600 | 63.0 KB | 75.2 KB | 136.4 KB |
| history-bench | 640 | 427 | 19.7 KB | 20.5 KB | 31.8 KB |
| history-bench | 960 | 640 | 35.3 KB | 38.9 KB | 63.3 KB |
| history-bench | 1280 | 853 | 53.3 KB | 60.8 KB | 103.1 KB |
| interlude-turbo-mobile | 640 | 800 | 21.0 KB | 27.9 KB | 48.7 KB |
| interlude-turbo-mobile | 960 | 1200 | 37.3 KB | 53.6 KB | 96.0 KB |
| interlude-turbo-mobile | 1280 | 1600 | 67.2 KB | 83.4 KB | 155.0 KB |
| detail-stacks | 640 | 800 | 28.0 KB | 34.0 KB | 55.3 KB |
| detail-stacks | 960 | 1200 | 47.1 KB | 60.7 KB | 104.4 KB |
| detail-stacks | 1280 | 1600 | 79.0 KB | 92.0 KB | 163.4 KB |
| contact-sparks | 1280 | 720 | 50.6 KB | 61.9 KB | 91.7 KB |
| contact-sparks | 1920 | 1080 | 98.2 KB | 109.1 KB | 172.8 KB |
| contact-sparks | 2560 | 1440 | 140.5 KB | 161.3 KB | 265.6 KB |
| hero-desktop-1610 | 1280 | 720 | 13.6 KB | 18.5 KB | 36.0 KB |
| hero-desktop-1610 | 1920 | 1080 | 28.5 KB | 35.6 KB | 71.6 KB |
| hero-desktop-1610 | 2560 | 1440 | 44.8 KB | 56.8 KB | 117.7 KB |

Target-size checks: `hero-desktop-1920.avif` = 33.0 KB and `hero-desktop-1610-1920.avif` = 28.5 KB
(target: under ~250 KB — both met with large margin). Figures at width 960 (`detail-ecu`,
`history-bench`, `interlude-turbo-mobile`, `detail-stacks`): AVIF 35-48 KB, JPEG 63-104 KB — all
comfortably under the ~120 KB target.

No width was skipped for upscaling reasons: every source image (native generation width 2160-3840px)
exceeded every requested export width.

## Fonts

Self-hosted in `assets/fonts/` (downloaded 2026-09-23 by the frontend agent). All three families are licensed
under the **SIL Open Font License 1.1**; the licence texts sit next to the files as `OFL-*.txt`
(from `github.com/google/fonts/tree/main/ofl/<family>/OFL.txt`). Files were fetched from the Google Fonts CSS2 API
(`https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600..800&family=Archivo:wght@400..700&family=JetBrains+Mono:wght@500&display=swap`,
requested with a desktop Chrome User-Agent to get woff2) and are served from our own origin, with no third-party request at runtime.

| Family | Use | Licence | Local file | Source URL |
|---|---|---|---|---|
| Big Shoulders Display (variable, wght 600–800), © 2019 The Big Shoulders Project Authors | Display: H1, H2, indices, years | SIL OFL 1.1 | `big-shoulders-display-latin.woff2` (35 KB, preloaded) | https://fonts.gstatic.com/s/bigshouldersdisplay/v24/fC1_PZJEZG-e9gHhdI4-NBbfd2ys3SjJCx1czNDuDJAM2w.woff2 |
| Big Shoulders Display, latin-ext | Rare glyphs only (unicode-range) | SIL OFL 1.1 | `big-shoulders-display-latin-ext.woff2` (29 KB) | https://fonts.gstatic.com/s/bigshouldersdisplay/v24/fC1_PZJEZG-e9gHhdI4-NBbfd2ys3SjJCx1cwtDuDJAM23AZ.woff2 |
| Archivo (variable, wght 400–700), © 2020 The Archivo Project Authors | Text | SIL OFL 1.1 | `archivo-latin.woff2` (35 KB) | https://fonts.gstatic.com/s/archivo/v25/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLydOxKsv4Rn.woff2 |
| Archivo, latin-ext | Rare glyphs only | SIL OFL 1.1 | `archivo-latin-ext.woff2` (33 KB) | https://fonts.gstatic.com/s/archivo/v25/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLyTOxKsv4RnUPU.woff2 |
| JetBrains Mono (static 500), © 2020 The JetBrains Mono Project Authors | Labels, phones, hours | SIL OFL 1.1 | `jetbrains-mono-500-latin.woff2` (22 KB) | https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8-qxTOlOVk6OThhvA.woff2 |
| JetBrains Mono, latin-ext | Rare glyphs only | SIL OFL 1.1 | `jetbrains-mono-500-latin-ext.woff2` (8 KB) | https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8-qxTNFOVk6OThhvAWV8.woff2 |

pt-BR diacritics are in the latin files, so a normal visit downloads only the three latin files (about 92 KB).
Fallback faces (`MVS Display Fallback`, `MVS Text Fallback`) use local Arial Narrow/Arial with `size-adjust`
and ascent/descent overrides measured against these files with fontTools.
