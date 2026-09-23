# MVS Preparações: design direction for the showcase POC

Status: art direction for branch `poc/showcase-design`. It changes no facts. The truthfulness rules in
`AGENTS.md` and `docs/website-transformation/BRIEF.md` still govern. Site copy stays pt-BR and this
document is in English.

Inputs reviewed: the current `index.html`, `_layouts/default.html`, `assets/css/mvs.css` and
`assets/js/site.js`; the "Redline Laboratory" direction; screenshots at 1440 and 390. The logo
(`assets/logo-display.png`, 900×506 RGBA) has a **transparent background**. It is MVS red (about `#E02020`)
with **steel-grey pistons and lettering** (about `#8A8A8A`). It contains no black, so it sits directly on dark
grounds without a plate. The method reference is the sister project `homelogic`: storyboard first, a separately
composed phone opening, labelled ambience imagery and hairline grids instead of shadowed cards.

---

## 1. Concept: **Redline Atelier**

**Thesis.** The current page explains MVS correctly but *looks* like a template: rounded cards, system
type and a logo floating on a grid. Redline Atelier treats the workshop as a precision atelier seen at night.
Large areas of crushed black are cut by one red rim light, and the type is condensed and set big, as on a
pit-lane board. Numbers appear only where they are true: 2006, 2008, 156, the phone numbers, the hours and
the indices 01–04. The page moves like an instrument cluster at ignition. The needle sweeps once and then
reads each step of the process calmly. Every surface is either **carbon** (near-black), **bone** (a warm
paper spec sheet) or **red light**, and every image is openly labelled as ambience. Luxury comes from
restraint: fewer boxes, longer silences, sharper rules and one perfect red.

Evolution from Redline Laboratory. Keep the near-black base, the MVS red, the steel and the amber/cyan instrument
accents (now reserved for focus and gauge detail). Drop the background grid, the rounded cards, the red
square index chips, the system font and the "logo as hero".

---

## 2. Storyboard and copy (pt-BR)

| Beat | Section (id) | Job | Visitor should feel |
|---|---|---|---|
| Arrival | `#inicio` hero | Who, what, where; primary CTA above the fold | "This is a serious specialist." |
| Orientation | `.manifesto` (merges the old signal strip) | Three principles | "They start from my goal." |
| Orientation | `#servicos` spec sheet | Four service lines, indexed 01–04 | "My project fits here." |
| (breath) | `.interlude` turbo band | Cinematic pause, one line | Desire |
| Confidence | `#processo` with the gauge | Four steps from briefing to delivery | "I know what happens next." |
| Confidence | `#sobre` timeline | 2006 → 2008 → today | "They have been doing this for years." |
| Action | `#contato` channels + brief | WhatsApp, phone, email, map, local brief | "Easy. I'll send it now." |
| Close | footer | Logo finale, contacts, ambience disclosure | Brand memory |

Navigation labels and anchors stay the same: Início, Serviços, Processo, Sobre, Contato.

### 2.1 Hero (`#inicio`)
- Eyebrow (mono): `São Paulo · desde 2008`
- H1 (the only one), set in three lines on desktop: `Preparação automotiva sob medida.`
  (`sob medida` in `--red-hot`). This is shorter than today's H1. The SEO sentence moves to the lead and the `<title>`.
- Lead: `Motor, injeção eletrônica e periféricos para projetos de rua e pista, planejados a partir do objetivo do seu carro.`
- CTAs: `Solicitar orçamento` (primary, `#contato`) and `Ver serviços` (ghost, `#servicos`).
- Bottom rail (mono, desktop only): `01 Motor · 02 Injeção eletrônica · 03 Periféricos · 04 Rua e pista`,
  plus a scroll cue `Role` ↓ and the ambience label `Imagem de ambientação`.

### 2.2 Manifesto (`.manifesto`, replaces `.signal-strip`)
- H2: `Cada projeto começa pelo objetivo do carro.`
- 01 **Projeto personalizado**: `Escopo pensado para o objetivo do carro, não um pacote genérico.`
- 02 **Base técnica**: `Motor, injeção eletrônica e periféricos tratados como um conjunto, com execução compatível com o uso real.`
- 03 **Contato direto**: `WhatsApp, telefone, email e endereço publicados para facilitar o primeiro briefing.`

### 2.3 Services spec sheet (`#servicos`, on bone paper)
- Eyebrow: `Serviços · Ficha técnica`
- H2: `Quatro frentes. Um conjunto.`
- Lead: `Use estas frentes como ponto de partida para explicar o que você quer construir, corrigir ou evoluir.`
- 01 **Preparação de motor**: `Planejamento e execução para projetos de desempenho, respeitando uso, conjunto mecânico e a meta do proprietário.` Tags: `Projetos de rua` `Aplicações de pista` `Configuração sob medida`
- 02 **Injeção eletrônica**: `Gerenciamento e acerto de injeção eletrônica programável, para dar previsibilidade ao comportamento do conjunto.` Tags: `IE programável` `Acerto orientado ao uso` `Integração com periféricos`
- 03 **Periféricos**: `Configurações turbo, supercharger, nitro ou aspirado, definidas conforme o projeto.` Tags: `Turbo` `Supercharger` `Nitro` `Aspirado`
- 04 **Rua e pista**: `Projetos para uso diário, pista ou misto, com escopo e pontos de atenção combinados antes da execução.` Tags: `Rua` `Pista` `Rua e pista`

### 2.4 Interlude (`.interlude`, decorative, `aria-hidden` image and a real `<p>` line)
- Line (display, not a heading): `O periférico certo é o que conversa com o conjunto.`
- Small caption (mono): `Turbo · Supercharger · Nitro · Aspirado`

### 2.5 Process (`#processo`)
- Eyebrow: `Processo`. H2: `Um caminho claro antes da chave virar.`
- Lead: `Projetos de performance precisam de contexto. O primeiro contato reúne objetivo, uso, configuração atual e expectativas.`
- 01 `Briefing` **Objetivo e uso**: `Rua, pista, misto, evolução de um projeto existente ou correção de comportamento.`
- 02 `Plano` **Conjunto e periféricos**: `Motor, injeção, componentes instalados e pontos que precisam de atenção.`
- 03 `Execução` **Execução conforme escopo**: `Trabalho orientado pelo escopo aprovado, com foco em qualidade, durabilidade e compatibilidade do conjunto.`
- 04 `Entrega` **Entrega orientada**: `Quando aplicável, a entrega alinha cuidados, limites e próximos passos.`

### 2.6 History (`#sobre`)
- Eyebrow: `Sobre a MVS`. H2: `No detalhe desde 2006. De portas abertas desde 2008.`
- Timeline (an `<ol>`):
  - `2006`: `Marcelo começa a estudar e trabalhar com projetos personalizados de alta performance em veículos automotores.`
  - `2008`: `Abertura oficial da MVS Preparações, no início do ano, para atender à demanda por personalização de motores, injeção eletrônica e periféricos no mercado nacional.`
  - `Hoje`: `{{N}} anos desde a abertura oficial. Atendimento personalizado, melhoria contínua, tecnologia aplicada e relacionamento transparente com clientes, fornecedores e entusiastas.`
    N is computed at build time with Liquid (`{{ site.time | date: '%Y' | minus: 2008 }}`) and corrected at runtime by
    JS from `new Date().getFullYear() - 2008`. If either is unavailable the fallback text is `Desde 2008.`
    Never write "mais de X anos".

### 2.7 Contact (`#contato`)
- Eyebrow: `Contato`. H2: `Conte o objetivo do projeto.`
- Body: `Para orçamento ou avaliação, envie um briefing com o máximo de contexto. Se preferir, ligue ou visite dentro do horário de atendimento.`
- Channel list (`<dl>`, labels in mono):
  - `WhatsApp` → `(11) 99542-6610` (wa.me link with the existing prefilled text)
  - `Telefone` → `(11) 5852-8640`
  - `Email` → `contato@mvspreparacoes.com.br`
  - `Endereço` → `R. Luciano Silva, 156 · Vila das Belezas` / `São Paulo - SP, 05841-000` / `Abrir no mapa ↗`
  - `Horário` → `Seg a sex · 10:00–19:30` / `Almoço · 13:00–14:00`
- Social: `Facebook ↗ Instagram ↗ YouTube ↗` as text links. Drop the PNG icons, or keep them monochrome at 20px.
- Form `Briefing rápido`: keep today's fields, ids and JS contract (`#name`, `#contact-method`, `#vehicle`,
  `#project-use`, `#message`, `data-brief-form`, `data-whatsapp-link`, `data-form-status`).
  - Helper above the fields: `O que incluir:` followed by chips `Modelo e configuração atual`, `Objetivo e tipo de uso`,
    `Componentes instalados ou desejados`, `Prazo, histórico e dúvidas`. This replaces the old about panel.
  - Privacy line kept: `Os dados ficam no seu navegador e são usados apenas para montar a mensagem de contato.`
  - Buttons: `Enviar por email` (primary submit) and `WhatsApp com briefing` (ghost). The status messages stay honest: "Abrindo…", never "Enviado".

### 2.8 Footer
- A large logo on a faint red floor glow. Tagline: `Projetos personalizados de alta performance em São Paulo.`
- Columns: Contato / Endereço e horário / Redes. A mini nav repeats the anchors.
- Disclosure (small): `As imagens deste site são ilustrações de ambientação geradas por IA. Não retratam veículos de clientes, a equipe ou as instalações da MVS.`
- `© {ano} MVS Preparações. Todos os direitos reservados.`

---

## 3. Hero compositions

**A. "Cold Start" (full-bleed macro).** Desktop: a 21:9 photograph fills 100svh. A forged piston and connecting
rod sit in the right 40%, with red rim light on the far edge. The left 55% is crushed black, carrying the H1 on
columns 1–7, bottom-aligned at about 62% of the viewport height. The bottom rail and the small ignition gauge
sit bottom-right. Mobile: a *separately composed* 9:16 image with the piston in the upper 45%, tilted
diagonally and lit from top-right. The lower 55% falls to black, where the H1, lead and full-width CTAs sit.

**B. "Split Spec" (editorial split).** Desktop: columns 1–5 are solid carbon with the type, and columns 6–12 hold a tall 4:5
turbo-housing image flush to the right edge, with a hairline frame and the index 01–04 running vertically.
Mobile: the image takes the top 52svh, then the text on carbon. This is elegant and magazine-like, but it reads
as "layout" rather than "cinema", and on mobile the CTA falls below the fold at 390×664.

**C. "Monolith" (typographic).** Desktop: `PREPARAÇÃO` is set enormous across all 12 columns, with the image
visible only through a masked band behind the type and the logo centred above. Mobile: the word stacks vertically. It is
striking but brittle. Masked type harms legibility and translation, and it relies on one word carrying the brand.

**Decision: A, "Cold Start".** It is the most cinematic, it puts the H1 and CTA in the first viewport on both
devices, and it ties the image to the logo: the logo's two pistons become one real-looking forged piston. It also
degrades gracefully. Without the image, the hero is still a composed black page with a red glow. B's split is
reused in the services spec sheet, so the idea is not lost.

---

## 4. Design tokens

### 4.1 Colour
| Token | Hex | Use |
|---|---|---|
| `--carbon-0` | `#07080A` | page base, hero floor |
| `--carbon-1` | `#0E1013` | alternate dark band |
| `--carbon-2` | `#15181D` | panels, inputs on dark |
| `--carbon-3` | `#1E2229` | hover fill, chip bg |
| `--bone` | `#ECE8E1` | primary text on dark |
| `--steel` | `#A3A9B2` | secondary text on dark |
| `--steel-dim` | `#7E858F` | meta and mono labels on dark (≥ 14px only) |
| `--paper` | `#EFEAE2` | spec-sheet section background |
| `--ink` | `#121317` | text on paper |
| `--ink-muted` | `#4A4E56` | secondary text on paper |
| `--red` | `#E1251B` | brand red: rules, needle, glows, large display accents ≥ 24px |
| `--red-hot` | `#FF4A3D` | red *text* on dark, including the H1 accent |
| `--red-deep` | `#D11A1F` | primary button background |
| `--red-ink` | `#B8141B` | red text and indices on paper |
| `--amber` | `#F2B84B` | focus ring, gauge redline tick (instrument only) |
| `--cyan` | `#7FD7E6` | gauge idle glow and one status dot. Never text blocks |
| `--line` | `rgba(236,232,225,.12)` | hairlines on dark |
| `--line-strong` | `rgba(236,232,225,.24)` | input borders, rail rules |
| `--line-paper` | `rgba(18,19,23,.16)` | hairlines on paper |

Measured contrast (WCAG 2.x):
- bone/carbon-0 **16.4**; bone/carbon-2 **14.6**; steel/carbon-0 **8.5**; steel/carbon-2 **7.5**; steel-dim/carbon-0 **5.4**.
- red-hot/carbon-0 **6.0**; red-hot/carbon-2 **5.3**, AA for body text. Brand `--red` on carbon-0 is **4.28**, so use it for large text or non-text only.
- white/red-deep **5.4** (button label, AA). White on brand `--red` is 4.69, which passes but is too tight after hover darkening, so buttons use `--red-deep`.
- amber/carbon-0 **11.2** (focus ring ≥ 3:1 non-text ✓). Carbon on amber is 11.2 for focus chips.
- ink/paper **15.5**; ink-muted/paper **7.0**; red-ink/paper **5.6**.
- Text over images always sits on the image's crushed-black area **plus** a gradient scrim (§5.2). Target ≥ 7:1 behind the H1 and verify with screenshots.

### 4.2 Typography
**Families (3 families, 3 files actually downloaded):**
1. **Big Shoulders Display**: variable, `wght` 600–800 used. It is a condensed industrial grotesk drawn from Chicago
   signage. It has the hard, slightly mechanical cut of the MVS wordmark without imitating its italic, and it
   stays dense and legible at 8rem. Used for display only (H1, H2, index numerals, the interlude line), always uppercase
   with `letter-spacing: .01em`. (If Google Fonts serves it as the merged family "Big Shoulders" with an `opsz`
   axis, use that family at `opsz` max. The metrics are the same.)
2. **Archivo**: variable, `wght` 400–700, width fixed at 100. This is the text face. It is a sturdy, slightly technical grotesk with
   excellent pt-BR diacritics and good x-height at 16–18px, and it shares DNA with the condensed display.
3. **JetBrains Mono**: `wght` 500 only (variable file clipped to 400–600 or static 500). Used for eyebrows, indices, spec labels,
   phone numbers, hours, years in the timeline and the ambience label, with `font-variant-numeric: tabular-nums` and uppercase + `.14em` tracking for labels.

**Subsets.** Declare both `latin` and `latin-ext` `@font-face` blocks with Google's `unicode-range` values.
pt-BR characters (á â ã à ç é ê í ó ô õ ú) are in U+00C0–00FF, which is inside the *latin* file, so browsers download only the
three latin files. latin-ext loads only if a rare glyph appears. Budget: about 3 × 25–45 KB.

**Loading.** Self-host the variable woff2 files in `assets/fonts/`. There is no third-party request, which is good for LGPD, and the files are cached
with the site. Get them from the Google Fonts CSS2 API
(`family=Big+Shoulders+Display:wght@600..800&family=Archivo:wght@400..700&family=JetBrains+Mono:wght@500`)
and keep the OFL licence texts in `assets/fonts/`. Use `font-display: swap`. `<link rel="preload" as="font" type="font/woff2" crossorigin>`
**only** the Big Shoulders latin file, because it is the H1 and the LCP text. Add `size-adjust`/`ascent-override` fallback faces to reduce CLS:
```css
--font-display: "Big Shoulders Display", "MVS Display Fallback", "Arial Narrow", "Roboto Condensed", Impact, sans-serif;
--font-text: "Archivo", "MVS Text Fallback", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace;
/* @font-face { font-family:"MVS Display Fallback"; src: local("Arial Narrow"), local("Arial");
   size-adjust: 82%; ascent-override: 92%; }  tune against screenshots */
```

**Scale** (fluid between 390 and 1440):
| Token | Value | Face / weight / leading |
|---|---|---|
| `--fs-hero` | `clamp(3.5rem, 1.9rem + 6.6vw, 8.25rem)` | Display 800, lh .86, uppercase |
| `--fs-h2` | `clamp(2.5rem, 1.6rem + 3.8vw, 5.25rem)` | Display 800, lh .9, uppercase, max 14ch |
| `--fs-interlude` | `clamp(2.25rem, 1.2rem + 4.4vw, 5.75rem)` | Display 700, lh .92 |
| `--fs-index` | `clamp(3rem, 2rem + 4vw, 6rem)` | Display 600, `--red` / `--red-ink`, tabular |
| `--fs-year` | `clamp(4rem, 2rem + 8vw, 10rem)` | Display 800, outline or solid (§8) |
| `--fs-h3` | `clamp(1.375rem, 1.1rem + .9vw, 1.875rem)` | Archivo 700, lh 1.15, sentence case |
| `--fs-lead` | `clamp(1.125rem, 1rem + .45vw, 1.375rem)` | Archivo 400, lh 1.5, max 46ch |
| `--fs-body` | `1.0625rem` (17px) | Archivo 400, lh 1.65, max 62ch |
| `--fs-small` | `.9375rem` | Archivo 500 |
| `--fs-label` | `.75rem` (12px) | Mono 500, uppercase, tracking .14em |
| `--fs-data` | `clamp(1.125rem, 1rem + .5vw, 1.5rem)` | Mono 500 (phones, hours) |

### 4.3 Spacing rhythm
Base 4px: `--s-1 4 · --s-2 8 · --s-3 12 · --s-4 16 · --s-5 24 · --s-6 32 · --s-7 48 · --s-8 64 · --s-9 96 · --s-10 144`.
- Section block padding: `--section-y: clamp(96px, 6rem + 5vw, 176px)`. Interlude: `0`, because the image is the section.
- Heading → lead `--s-5`; lead → content `--s-8` (desktop) / `--s-7` (mobile); list rows `--s-6` padding-block.
- Silence rule: every dark section has at least one empty column span on desktop. Never fill all 12.

### 4.4 Grid
- Desktop (≥ 1024): 12 columns, `--max: 1320px`, gutter 24px, outer margin `clamp(20px, 4vw, 64px)`.
  Implemented as `.grid { display:grid; grid-template-columns: repeat(12, minmax(0,1fr)); column-gap: 24px; }`
  inside `.shell { width: min(100% - 2*margin, var(--max)); margin-inline: auto; }`. Full-bleed media use `.bleed` outside `.shell`.
- Tablet (640–1023): 8 columns, gutter 20px.
- Mobile (< 640): 4 columns, margin 20px, gutter 16px. Composition rules: the H1 spans all 4 columns. Indices and labels
  hang in column 1 while body text spans columns 2–4 (an "indented spec" layout, not a centred stack). Images are
  separately composed, never auto-cropped from desktop. Buttons are full width.

### 4.5 Radii, rules, borders
- Radii: `--r-0: 0` (images, bands, panels), `--r-1: 2px` (buttons, inputs, chips). Sharp is the language. No pills and no 8px cards.
- Rules: 1px `--line` hairlines separate rows (the homelogic hairline-grid technique: `gap:1px` over a `--line` background).
  A **redline rule** (2px `--red`, 48px long) sits above every eyebrow. A 1px rail in `--line-strong` runs across the hero bottom.
- Borders: inputs are 1px `--line-strong`, then 1px `--bone` on hover and a 2px `--amber` outline with 3px offset on focus.

### 4.6 Shadows and glows
- No drop shadows on dark. Depth comes from light.
- `--glow-red: radial-gradient(60% 50% at 70% 60%, rgba(225,37,27,.22), transparent 70%)` for the hero edge and footer floor.
- `--glow-needle: drop-shadow(0 0 6px rgba(255,74,61,.65))` on the gauge needle only.
- Paper section: one soft shadow on the sticky image, `0 30px 80px -30px rgba(18,19,23,.45)`.
- Grain: a global `body::after` with a 160px tiled SVG `feTurbulence` noise at `opacity:.05`, `mix-blend-mode: overlay`, `pointer-events:none`. Remove it in `prefers-contrast: more`.

---

## 5. Image treatment

### 5.1 Grading (applied in the prompts and then locked in CSS)
Crushed blacks (the shadows sit at `#07080A`, so image edges melt into the page), a single hard **red rim light**
(around 620 nm, matching `--red`), cool steel highlights, desaturated mids, light film grain, anamorphic
shallow depth of field and no lens flares. Metal must look real, never chrome-plastic. The palette inside every
image is limited to black, steel, red and occasionally amber heat.

### 5.2 Overlays (CSS, not baked in)
- Hero desktop: `linear-gradient(90deg, rgba(7,8,10,.92) 0%, rgba(7,8,10,.7) 38%, rgba(7,8,10,0) 62%)` plus a bottom
  `linear-gradient(0deg, #07080A 0%, transparent 28%)` so the rail sits on black.
- Hero mobile: `linear-gradient(0deg, #07080A 0%, rgba(7,8,10,.88) 42%, rgba(7,8,10,0) 68%)`.
- Interlude: top and bottom 18% fades to `--carbon-0`, so the band dissolves into its neighbours.
- Every image: `<span class="ambience-label">Imagem de ambientação</span>` in mono 11px uppercase, `--bone` at 100% on
  `rgba(7,8,10,.72)`, padding 4px 8px, anchored bottom-right 16px (bottom-left on mobile heroes, away from CTAs).
  Images are decorative: `alt=""`. The label is real text, not `aria-hidden`.

### 5.3 Logo usage
- Use the existing transparent PNG as delivered. Do not recolour, redraw, outline or place it on a white plate.
- Header: width 112px desktop and 88px mobile, shrinking to 88/72 when the header is condensed. The `<span>` wordmark
  text becomes `sr-only`, because the logo already says "MVS Preparações".
- Hero: **no** large logo. The header logo plus the H1 carry the brand, and the piston photograph carries the metaphor.
- Footer: 360px desktop and 240px mobile, centred on `--glow-red`. This is the final brand moment.
- Minimum clear space is the height of the "S" on all sides. The logo never overlaps an image.
- Export `logo-display@2x.webp` alongside the PNG for sharper retina rendering, with the PNG kept as fallback and `assets/logo.png` untouched.

### 5.4 IMAGE BRIEF LIST
Common suffix for **every** prompt:
`Photographic, cinematic still, shot on a full-frame cinema camera, anamorphic look, shallow depth of field, crushed true-black shadows (#07080A), single hard red rim light, cool steel highlights, desaturated midtones, subtle fine film grain, premium motorsport editorial mood. No text, no logos, no brand marks, no readable labels or numbers, no people, no hands, no faces, no license plates, no complete cars, no identifiable vehicle, not a real workshop.`

| id | filename base | section | aspect | priority |
|---|---|---|---|---|
| IMG-01 | `hero-desktop` | Hero, ≥ 768px | 21:9 | must |
| IMG-02 | `hero-mobile` | Hero, < 768px | 9:16 | must |
| IMG-03 | `interlude-turbo` | Interlude band, desktop | 21:9 | must |
| IMG-04 | `detail-ecu` | Services sticky figure | 4:5 | must |
| IMG-05 | `history-bench` | History (`#sobre`) | 3:2 | must |
| IMG-06 | `interlude-turbo-mobile` | Interlude band, < 768px | 4:5 | nice |
| IMG-07 | `detail-stacks` | History, secondary inset | 4:5 | nice |
| IMG-08 | `contact-sparks` | Contact background (at 25% opacity) | 16:9 | nice |

**IMG-01 `hero-desktop` (21:9, must).** `Extreme close-up of a single forged aluminium performance piston attached to a polished steel connecting rod, standing upright on a matte black steel surface, positioned in the right third of the frame, three-quarter view from slightly below, 85mm lens at f/2. A hard red rim light from behind-right traces the piston crown edge, ring grooves and rod beam; faint cool steel fill from top. The left 60% of the frame is almost pure black negative space with only a whisper of haze, reserved for headline text. Machined surface texture and tiny tool marks visible in sharp focus, background falls to black.` + suffix.

**IMG-02 `hero-mobile` (9:16, must, composed for the phone, not a crop).** `Vertical composition: a single forged performance piston and connecting rod seen from above at a steep diagonal, the piston crown in the upper 40% of the frame, the rod leading down and fading into darkness by mid-frame. Hard red rim light from top-right carving the crown edge and ring lands; cool steel specular highlights. The lower 55% of the frame is clean, near-black negative space for headline and buttons. 50mm lens, f/2.8, subject slightly right of centre.` + suffix.

**IMG-03 `interlude-turbo` (21:9, must).** `Macro of a turbocharger compressor wheel seen through the open inlet of its housing, blades in razor-sharp focus in the centre-right, the aluminium spiral housing falling into black at the edges. Red rim light grazing the blade edges, a faint amber heat glow on the hot turbine side at far right. Wide negative space band across the upper-left for one line of text. 100mm macro lens, f/4, low angle.` + suffix.

**IMG-04 `detail-ecu` (4:5, must).** `Dark workbench at night: an open laptop angled away from camera emitting a soft red and cool-cyan glow onto a bundle of engine wiring harness connectors and a small generic metal-cased engine control unit in the foreground. Screen content is fully out of focus and unreadable, abstract light only. 35mm lens, f/1.8, glow as the only light source besides a red rim from behind. Top 20% black for breathing room.` + suffix.

**IMG-05 `history-bench` (3:2, must).** `A heavy steel workbench in a dark, anonymous workshop: neatly arranged torque wrench, sockets and a caliper beside a disassembled cylinder head, lit by one hard red rim light from the back and a narrow cool top light. Deep black background, no windows, no signage, no posters, nothing identifying the location. Subject in the right 60%, left side dark for overlaid year numerals. 50mm lens, f/2.2, slightly elevated angle.` + suffix.

**IMG-06 `interlude-turbo-mobile` (4:5, nice).** `Vertical composition of a turbocharger compressor wheel viewed straight into the inlet, blades filling the lower-middle of the frame, spiral housing curving out of frame, red rim light on blade edges, upper 35% clean black for a line of text. 100mm macro, f/4.` + suffix.

**IMG-07 `detail-stacks` (4:5, nice).** `Row of polished individual throttle-body velocity stacks (trumpets) on an intake, seen from a low 30-degree angle, receding into shallow focus; red rim light running along each flared lip, steel reflections, black background. 85mm lens, f/2.` + suffix.

**IMG-08 `contact-sparks` (16:9, nice).** `Abstract long-exposure of orange-red grinding sparks arcing from the lower left across a pure black void, motion streaks and bokeh, the grinder and source out of frame, upper-right 60% nearly empty. 35mm lens.` + suffix.

**Delivery.** Generate at the largest native size (desktop at least 2560 px wide, mobile at least 1080×1920). Reject any output containing
glyph-like marks, logos, people, hands or a whole car. Export AVIF (q≈50), WebP (q≈75) and JPEG (q≈78) at these widths:
heroes 1280/1920/2560 (desktop) and 720/1080 (mobile); bands 1280/1920/2560; figures 640/960/1280. Store them in `assets/images/`
as `{base}-{width}.{ext}` and log each asset's model, prompt and date in `docs/design-poc/ASSET_ATTRIBUTION.md`.

---

## 6. Motion grammar

Easing tokens: `--ease-out: cubic-bezier(.16,1,.3,1)` (expo-out, the "settle") · `--ease-in-out: cubic-bezier(.65,0,.35,1)` ·
`--ease-needle: cubic-bezier(.34,1.3,.64,1)` (a slight overshoot, like a real needle).
Durations: `--t-fast 160ms` (hover), `--t-med 420ms` (UI), `--t-reveal 900ms`, `--t-sweep 1400ms`.
Only `transform` and `opacity` are animated, with one declared exception: `clip-path` inset on the hero image reveal, which is compositor-friendly and optional.

| Moment | Behaviour | Reduced motion | No JS |
|---|---|---|---|
| **Entrance reveals** (`.reveal`) | `opacity 0→1`, `translateY(24px→0)`, 900ms ease-out. Children stagger 80ms via `--i` custom property (`transition-delay: calc(var(--i) * 80ms)`), capped at 4. Triggered by the existing IntersectionObserver (`threshold .12`). Hidden state applies **only** under `.is-enhanced`. | Opacity only, 200ms, no translate | Content visible (no `.is-enhanced`) |
| **Hero load** | Image: `scale(1.08→1)` + `opacity 0→1`, 1600ms ease-out. H1 lines (each wrapped in `<span class="line">`) rise 100% within `overflow:hidden` masks, staggered 90ms. Lead, CTAs and rail fade in at 500ms. Pure CSS `@keyframes` on load, no JS dependency. | Static, final state | Same as CSS (runs without JS) |
| **Ignition sweep** (signature) | The hero mini-gauge needle sweeps `rotate(-120deg → 120deg → -90deg)` over 1400ms with `--ease-needle`, 600ms after load. The redline arc segment flashes `opacity .4→1→.6` at the peak. Runs once. | Needle rests at `-90deg`, no sweep | CSS only, runs |
| **Process gauge** (signature) | A sticky gauge (desktop, left columns). IO on each step `<li>` sets `data-step="1..4"` on `.gauge`. The needle turns to `-90°, -30°, 30°, 90°` over 700ms with `--ease-needle`. The active step index turns `--red-hot` and the others dim to `--steel-dim`. Mobile: a horizontal "rev bar" pinned under the header inside the section, with `scaleX` 0.25→1 per step. | Needle jumps (0ms) | Needle at the step-1 angle; all steps full opacity |
| **Scroll progress** | A 2px `--red` line at the header's bottom edge. `@supports (animation-timeline: scroll())`: `scaleX(0→1)` with `animation-timeline: scroll(root)`, `transform-origin:left`. Otherwise the existing JS sets `--scroll-progress`. | Kept (it is not motion-heavy), no easing | Hidden |
| **Parallax bands** | Interlude and history images: `@supports (animation-timeline: view())` → `animation: drift linear both; animation-timeline: view(); animation-range: cover 0% cover 100%` where `drift` is `translateY(-8%)→translateY(8%)` on an inner element scaled 1.16. There is no JS fallback: the image is simply static. | `animation: none` | Static |
| **Index numerals** | Service indices `01–04` and timeline years slide up from a mask (`translateY(100%→0)`, 700ms) when the row reveals. No counting-up animation for years (reading "2008" as it ticks is noise). | Static | Static |
| **Header on scroll** | IO on a 1px sentinel at the hero top: when it is out of view, add `.is-condensed`. Height goes 88→64px (implemented as `transform: translateY` of the inner bar plus logo `scale(.8)`, not height), and the background goes from transparent to `rgba(7,8,10,.82)` with `backdrop-filter: blur(16px) saturate(140%)` and a bottom hairline, over 420ms. | Instant state change | Always solid (a class-free default style) |
| **Mobile menu** | A full-screen sheet: `opacity 0→1`, while links rise 16px, staggered 50ms, 420ms ease-out. The toggle morphs into an × by rotating its bars. | Fade only | Links render inline in the header (wrapped), no toggle (the toggle is `hidden` until JS) |
| **Hover** | Links: a red underline `scaleX(0→1)` from the left, 160ms. Primary button: `--red-deep → #B8141B` plus the arrow nudges `translateX(4px)`. Spec rows: a hairline turns red, the index shifts `translateX(6px)` and the bg goes to `rgba(18,19,23,.04)`. Images inside `.figure`: `scale(1.03)` over 900ms. Only inside `@media (hover:hover)`. | Colour changes only | Same |

Global reduced motion: in `@media (prefers-reduced-motion: reduce)`, set `animation: none` on keyframed elements,
`transition-duration: .01ms` except opacity fades ≤ 200ms, and `scroll-behavior: auto`.

---

## 7. Wireframes

Legend: `▓` image · `░` scrim/dark gradient · `│` column hairline · `[ ]` button · `(mono)` mono label.

### 7.1 Header and menu
```
DESKTOP 1440, top of page (transparent over hero)                         h=88
┌──────────────────────────────────────────────────────────────────────────────┐
│ [MVS logo 112]        Início  Serviços  Processo  Sobre  Contato  [Orçamento→]│
└──────────────────────────────────────────────────────────────────────────────┘
DESKTOP condensed (.is-condensed): bg carbon .82 + blur, logo 88, hairline, 2px red progress line
┌──────────────────────────────────────────────────────────────────────────────┐
│ [MVS 88]              Início  Serviços  Processo  Sobre  Contato  [Orçamento→]│
╘══════════════ red progress ══════════════╧───────────────────────────────────┘

MOBILE 390                         MOBILE menu open (full-screen sheet, carbon-0)
┌──────────────────────────────┐   ┌──────────────────────────────┐
│ [MVS 88]              [ ≡ ]44│   │ [MVS 88]              [ × ]44│
└──────────────────────────────┘   │                              │
                                   │ 01  INÍCIO                   │  display 44px
                                   │ ──────────────────────────── │
                                   │ 02  SERVIÇOS                 │
                                   │ ──────────────────────────── │
                                   │ 03  PROCESSO                 │
                                   │ 04  SOBRE                    │
                                   │ 05  CONTATO                  │
                                   │                              │
                                   │ [   Chamar no WhatsApp    ]  │
                                   │ [   Ligar (11) 5852-8640  ]  │
                                   │ (mono) SEG–SEX 10:00–19:30   │
                                   └──────────────────────────────┘
```

### 7.2 Hero, "Cold Start"
```
DESKTOP 1440×900 (100svh, min 720)
┌─────────────────────────────────────────────────────────────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓ forged piston ▓▓▓▓▓▓▓▓▓▓▓▓▓│
│░ ── (mono) SÃO PAULO · DESDE 2008 ░░░░░░░▓▓▓▓▓▓▓▓ + rod, red ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│░ PREPARAÇÃO                     ░░░░░░░░░▓▓▓▓▓▓▓▓ rim light ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│░ AUTOMOTIVA                     ░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│░ SOB MEDIDA. (red-hot)          ░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│░ Motor, injeção eletrônica e periféricos… (lead, cols 1–5)░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│░ [Solicitar orçamento →]  [Ver serviços]       ░░░░░░░░░░░░░░    ╭─gauge─╮  │
│─────────────────────────────────────────────────────────────────│ ignition│─│
│ (mono) 01 MOTOR · 02 INJEÇÃO ELETRÔNICA · 03 PERIFÉRICOS · 04 RUA E PISTA   │
│  ROLE ↓                                             IMAGEM DE AMBIENTAÇÃO   │
└─────────────────────────────────────────────────────────────────────────────┘
 H1 cols 1–7 · lead cols 1–5 · gauge 120px cols 11–12 above the rail

MOBILE 390×844 (100svh)
┌──────────────────────────────┐
│ header (transparent)         │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓ piston crown, diagonal ▓│  upper 45%: subject
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│ ── (mono) SÃO PAULO · 2008   │
│ PREPARAÇÃO                   │  56px
│ AUTOMOTIVA                   │
│ SOB MEDIDA.                  │
│ Motor, injeção eletrônica e  │
│ periféricos para rua e pista…│
│ [   Solicitar orçamento  → ] │  full width, 52px
│ [       Ver serviços       ] │
│ (mono) IMAGEM DE AMBIENTAÇÃO │
└──────────────────────────────┘  CTA must clear the fold at 390×664 and 320×568 (test)
```

### 7.3 Manifesto
```
DESKTOP                                                   carbon-0
│ ── (mono) MANIFESTO │                                                  │
│ CADA PROJETO COMEÇA PELO          (H2 cols 1–8, 2 lines)               │
│ OBJETIVO DO CARRO.                                                     │
│────────────────────┬──────────────────────┬────────────────────────────│
│ 01 (red index 6rem)│ 02                   │ 03                         │  cols 1–4 / 5–8 / 9–12
│ Projeto            │ Base técnica         │ Contato direto             │  hairline dividers
│ personalizado      │ Motor, injeção…      │ WhatsApp, telefone…        │
│ Escopo pensado…    │                      │                            │

MOBILE (indented spec)
│ ── MANIFESTO                 │
│ CADA PROJETO                 │
│ COMEÇA PELO OBJETIVO         │
│ DO CARRO.                    │
│──────────────────────────────│
│ 01 │ Projeto personalizado   │  index col 1, text cols 2–4
│    │ Escopo pensado…         │
│──────────────────────────────│
│ 02 │ Base técnica …          │
│ 03 │ Contato direto …        │
```

### 7.4 Services spec sheet (paper)
```
DESKTOP                                                   paper #EFEAE2, ink
│ ── (mono) SERVIÇOS · FICHA TÉCNICA                                      │
│ QUATRO FRENTES.            │  Use estas frentes como ponto de partida…  │ H2 cols 1–6, lead cols 8–12
│ UM CONJUNTO.               │                                            │
│─────────────────────────────────────────────────────────────────────────│
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (sticky)   │ 01  PREPARAÇÃO DE MOTOR                  → │ figure cols 1–5, sticky top 96px
│ ▓ detail-ecu 4:5 ▓▓▓▓▓▓▓   │     Planejamento e execução…               │ rows cols 7–12
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │     (mono) RUA · PISTA · SOB MEDIDA        │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │────────────────────────────────────────────│
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │ 02  INJEÇÃO ELETRÔNICA                     │
│ (mono) IMAGEM DE AMBIENT.  │ 03  PERIFÉRICOS                            │
│                            │ 04  RUA E PISTA                            │
│                            │ [Descrever meu projeto →] (links #contato) │

MOBILE
│ ── SERVIÇOS · FICHA TÉCNICA  │
│ QUATRO FRENTES.              │
│ UM CONJUNTO.                 │
│ Use estas frentes…           │
│ ▓▓▓▓▓▓ detail-ecu 4:5 ▓▓▓▓▓▓ │  full-bleed to 0 margin, not sticky
│──────────────────────────────│
│ 01 │ PREPARAÇÃO DE MOTOR     │
│    │ Planejamento…           │
│    │ RUA · PISTA · SOB MEDIDA│  chips wrap
│──────────────────────────────│
│ 02 │ INJEÇÃO ELETRÔNICA …    │
│ 03 │ PERIFÉRICOS …           │
│ 04 │ RUA E PISTA …           │
│ [ Descrever meu projeto →  ] │
```

### 7.5 Interlude
```
DESKTOP full-bleed, height clamp(420px, 56vw, 760px), image drifts (parallax)
┌─────────────────────────────────────────────────────────────────────────────┐
│░fade░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│ O PERIFÉRICO CERTO É O QUE          ▓▓▓▓▓▓▓ compressor wheel ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│ CONVERSA COM O CONJUNTO.            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│ (mono) TURBO · SUPERCHARGER · NITRO · ASPIRADO                               │
│░fade░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ IMAGEM DE AMBIENTAÇÃO ░│
└─────────────────────────────────────────────────────────────────────────────┘
MOBILE 4:5 (IMG-06 if available, else IMG-03 with object-position 70% 50%)
┌──────────────────────────────┐
│ O PERIFÉRICO CERTO           │ top 35% dark
│ É O QUE CONVERSA COM         │
│ O CONJUNTO.                  │
│▓▓▓▓▓▓▓ compressor ▓▓▓▓▓▓▓▓▓▓▓│
│ (mono) IMAGEM DE AMBIENTAÇÃO │
└──────────────────────────────┘
```

### 7.6 Process with gauge
```
DESKTOP                                                   carbon-1
│ ── (mono) PROCESSO                                                      │
│ UM CAMINHO CLARO ANTES DA CHAVE VIRAR.    (H2 cols 1–9)                 │
│ Projetos de performance precisam de contexto… (lead cols 1–5)           │
│─────────────────────────────────────────────────────────────────────────│
│    ╭───────────────╮  (sticky)   │ 01 (mono) BRIEFING                   │ gauge cols 1–5 sticky
│   ╱ 01   02  03  04╲             │    Objetivo e uso                    │ steps cols 7–12, each ≥ 60vh
│  │     ╲ needle     │            │    Rua, pista, misto…                │ tall so the needle reads
│  │      ●     ▬▬red │            │──────────────────────────────────────│ (redline arc 04 zone)
│   ╲  (mono) ETAPA 02/04          │ 02 PLANO · Conjunto e periféricos    │
│    ╰───────────────╯             │ 03 EXECUÇÃO · Execução conforme…     │
│                                  │ 04 ENTREGA · Entrega orientada       │

MOBILE
│ ── PROCESSO                  │
│ UM CAMINHO CLARO             │
│ ANTES DA CHAVE VIRAR.        │
│ Projetos de performance…     │
│┌────────────────────────────┐│ sticky rev bar (top: header 64px)
││▬▬▬▬▬▬▬▬▬▬▬░░░░░░░ 02/04    ││ scaleX per step, red to redline
│└────────────────────────────┘│
│ 01 │ BRIEFING                │
│    │ Objetivo e uso          │
│    │ Rua, pista, misto…      │
│──────────────────────────────│
│ 02 │ PLANO …                 │
│ 03 │ EXECUÇÃO …              │
│ 04 │ ENTREGA …               │
```
Gauge SVG: a 240° arc with 41 minor ticks, 9 major ticks and **no numbers**. The last 20% of the arc is `--red` (redline), and a single
`--amber` tick marks where the redline begins. Labels on the arc are the step indices `01–04` only. `role="img"` with
`aria-label="Indicador decorativo das etapas do processo"`. The hero ignition gauge uses the same SVG `<symbol>` (`<use href>`).

### 7.7 History timeline
```
DESKTOP                                                   carbon-0
│ ── (mono) SOBRE A MVS                                                   │
│ NO DETALHE DESDE 2006.                 (H2 cols 1–8)                    │
│ DE PORTAS ABERTAS DESDE 2008.                                           │
│─────────────────────────────────────────────────────────────────────────│
│ 2006 (outline year)    │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ timeline cols 1–5
│ Marcelo começa…        │ ▓▓▓▓▓▓ history-bench 3:2 (parallax) ▓▓▓▓▓▓▓▓▓▓ │ image cols 6–12 bleeding
│────────────────────────│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ to the right edge
│ 2008 (solid red year)  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ IMAGEM DE AMBIENTAÇÃO │
│ Abertura oficial…      │         ┌▓▓▓▓▓▓▓▓┐ detail-stacks inset (nice)  │ cols 9–11, overlapping by −96px
│────────────────────────│         └▓▓▓▓▓▓▓▓┘                            │
│ HOJE  (bone)           │                                               │
│ 18 anos desde a abertura oficial. Atendimento personalizado…           │

MOBILE
│ ── SOBRE A MVS               │
│ NO DETALHE DESDE 2006.       │
│ DE PORTAS ABERTAS            │
│ DESDE 2008.                  │
│▓▓▓▓▓ history-bench 3:2 ▓▓▓▓▓▓│ full bleed
│ 2006 ┃ Marcelo começa…       │ vertical 2px rule (red fills on reveal)
│      ┃                       │
│ 2008 ┃ Abertura oficial…     │ years 4rem
│ HOJE ┃ 18 anos…              │
```

### 7.8 Contact and brief
```
DESKTOP                                        carbon-0, optional sparks at 25%
│ ── (mono) CONTATO                                                       │
│ CONTE O OBJETIVO           │ ┌ BRIEFING RÁPIDO ─────────────────────────┐│ copy cols 1–5
│ DO PROJETO.                │ │ O que incluir: [Modelo…][Objetivo…]      ││ form cols 7–12 on carbon-2
│ Para orçamento ou…         │ │ [Componentes…][Prazo…]                   ││ hairline border, r=0
│────────────────────────────│ │ Nome ______________  Email/tel _________ ││ 2-col fields ≥ 1024
│ (mono) WHATSAPP            │ │ Veículo e configuração atual ___________ ││
│ (11) 99542-6610 ↗   (data) │ │ Uso principal [Rua ▾]                    ││
│ (mono) TELEFONE            │ │ Objetivo do projeto                      ││
│ (11) 5852-8640             │ │ [______________________________________] ││
│ (mono) EMAIL               │ │ [Enviar por email →] [WhatsApp c/ brief.]││
│ contato@mvspreparacoes…    │ │ Os dados ficam no seu navegador…         ││
│ (mono) ENDEREÇO            │ │ (status, aria-live)                      ││
│ R. Luciano Silva, 156 …    │ └──────────────────────────────────────────┘│
│ Abrir no mapa ↗            │                                             │
│ (mono) HORÁRIO             │                                             │
│ Seg a sex · 10:00–19:30    │                                             │
│ Almoço · 13:00–14:00       │                                             │
│ Facebook ↗ Instagram ↗ YouTube ↗                                         │

MOBILE (order: heading → WhatsApp CTA → form → channels)
│ ── CONTATO                   │
│ CONTE O OBJETIVO             │
│ DO PROJETO.                  │
│ Para orçamento ou…           │
│ [ Chamar no WhatsApp  →    ] │
│┌ BRIEFING RÁPIDO ───────────┐│
││ O que incluir: chips wrap  ││
││ Nome ____________________  ││ inputs 52px, 16px font (no iOS zoom)
││ …                          ││
││ [ Enviar por email       ] ││
││ [ WhatsApp com briefing  ] ││
│└────────────────────────────┘│
│ WHATSAPP  (11) 99542-6610    │ dl rows, hairlines, 44px+ targets
│ TELEFONE  (11) 5852-8640     │
│ EMAIL     contato@…          │
│ ENDEREÇO  R. Luciano Silva…  │
│ HORÁRIO   Seg–sex 10:00–19:30│
```

### 7.9 Footer
```
DESKTOP                                         carbon-0 + red floor glow
│                         [ MVS LOGO 360 ]                                 │
│          Projetos personalizados de alta performance em São Paulo.        │
│──────────────────────────────────────────────────────────────────────────│
│ CONTATO            │ ENDEREÇO E HORÁRIO        │ REDES        │ NAVEGAR  │
│ contato@…          │ R. Luciano Silva, 156…    │ Facebook ↗   │ Início…  │
│ (11) 5852-8640     │ Seg a sex 10:00–19:30     │ Instagram ↗  │          │
│ (11) 99542-6610    │ Almoço 13:00–14:00        │ YouTube ↗    │          │
│──────────────────────────────────────────────────────────────────────────│
│ © 2026 MVS Preparações…      As imagens deste site são ilustrações…      │

MOBILE: logo 240 centred → tagline → the four blocks stacked with hairlines → disclosure → ©
```

---

## 8. Signature moments

1. **Ignition sweep.** On load the hero mini-gauge needle sweeps to the redline and settles, like an instrument cluster
   at key-on. It is decorative with no numbers, and it plays once.
2. **The reading gauge.** In `#processo` the same instrument advances one step at a time as the visitor reads, with the
   redline reached at "Entrega". Process becomes a physical sensation.
3. **Bone spec sheet.** A single warm-paper section inside the dark page. Services read like a printed spec sheet
   (red ink indices, hairline rows, mono tags), and the split composition from hero B lives here.
4. **Years as monuments.** `2006` in outline type (1px `--steel` stroke via `-webkit-text-stroke`, with a solid `--bone`
   fallback where unsupported) becomes `2008` in solid red. A 2px red rule fills down the timeline on reveal.
5. **Footer ignition-off.** The page ends on the logo floating on a red floor glow, the only place the full logo appears large.

## 9. Anti-patterns

- Invented numbers of any kind: hp, cv, rpm, bar, "+500 projetos", "X clientes", ratings, "certificado", partner or brand logos, prices, team size.
- A gauge with numerals or units, or any "measured" look (dyno graph, spec values).
- Images that show a whole car, a person or hand, readable UI, text or logos, or that could pass as "our shop/our project". Unlabelled imagery.
- Rounded cards, pills, glassmorphism stacks, drop shadows on dark, the 92px background grid, generic blue.
- Red used for body text on dark except `--red-hot`. More than one red accent word per heading.
- Autoplay video, scroll hijacking, pinned sections longer than the content, preloaders, cursor followers, counters that tick up.
- Mobile as a scaled-down desktop: cropped heroes, 4-column grids squeezed to 1, tiny centred text.
- Motion that gates content: nothing is hidden unless `.is-enhanced` is set.
- A fake "Enviado com sucesso". The form only opens email or WhatsApp.

## 10. Accessibility notes

- One `<h1>` (hero). Sections are `<section aria-labelledby>` with an `<h2>`. The interlude line is a `<p>`, not a heading.
  Landmarks: `header`, `nav[aria-label="Navegação principal"]`, `main#conteudo`, `footer`. Keep the skip link.
- Contrast pairs are as tabled in §4.1. Text over imagery sits only on the scrimmed black zones, and a screenshot check at 1440, 390 and 320 is required.
- Focus: a 2px `--amber` outline with 3px offset on every interactive element, visible on carbon, paper and images.
  On paper use `--ink` outline + amber halo (`box-shadow: 0 0 0 5px var(--amber)`), because amber on paper is low contrast.
- Targets: at least 44×44 everywhere. Buttons are 52px tall on mobile. Channel rows are full-width links ≥ 56px.
- Form: visible `<label>`s, `autocomplete` kept, required fields marked `*` plus `aria-required`, inputs 16px font,
  and the status is `role="status" aria-live="polite"`. Without JS: set the form `action="mailto:contato@mvspreparacoes.com.br?subject=…" method="post" enctype="text/plain"`
  as an honest fallback (JS intercepts as today). Test in Safari and Chrome, and if it is unreliable show a `<noscript>` line with the email and phone.
- Mobile menu: `aria-expanded`/`aria-controls`, Esc closes it, focus moves to the first link on open and returns to the toggle on close,
  focus is trapped while open, the background is `inert` and body scroll is locked with `overflow:hidden` on `<html>`.
- Gauges: decorative, `aria-hidden="true"` on the hero one. The process gauge gets `role="img"` + label, and the step text carries the meaning.
- Images: `alt=""` (decorative). "Imagem de ambientação" is real, visible text. The footer disclosure states the images are AI illustrations.
- Respect `prefers-reduced-motion`, `prefers-contrast: more` (drop grain, raise `--line` to .3) and `forced-colors` (hairlines become `CanvasText`, glows removed).
- Timeline is an `<ol>`, services are an `<ol>` of `<article>`s, and channels are a `<dl>`.

---

## 11. Implementation checklist

**Files**
- [ ] `index.html`: rebuild sections per §2 and §7 with ids unchanged (`inicio servicos processo sobre contato`) and form ids/data-attrs unchanged.
- [ ] `_layouts/default.html`: header markup (the toggle is `hidden` until JS unhides it), font preload, hero image preloads, footer, a shared inline SVG `<symbol id="gauge">`.
- [ ] `assets/css/mvs.css`: replace the tokens and components. Keep one file, ordered as: tokens → @font-face → base → layout → components → sections → motion → media queries → reduced-motion/contrast/forced-colors.
- [ ] `assets/js/site.js`: extend the existing IIFE with the header sentinel IO, the process step IO (`data-step`), the runtime years (`[data-years-since="2008"]`),
      menu focus trap/inert, and `--i` stagger indices. There are no libraries. Keep the brief-form logic unchanged.
- [ ] `assets/fonts/*.woff2` + `OFL.txt`; `assets/images/*` per §5.4; `docs/design-poc/ASSET_ATTRIBUTION.md` for generation provenance.
- [ ] `_config.yml`: bump `asset_version` (format `YYYYMMDD-shortsha`) on every CSS/JS change. Do not add `docs/design-poc` to the build (add it to `exclude`).

**Naming.** Keep the existing lower-case BEM: `.block__element--modifier`. Blocks: `.site-header`, `.menu`, `.hero`, `.gauge`,
`.manifesto`, `.spec`, `.spec-row`, `.interlude`, `.process`, `.timeline`, `.contact`, `.channels`, `.brief-form`, `.site-footer`,
`.media`, `.ambience-label`. Layout: `.shell`, `.grid`, `.bleed`. State: `.is-enhanced`, `.is-visible`, `.is-condensed`, `.is-open`, `[data-step]`.
Tokens use `--carbon-*`, `--fs-*`, `--s-*`, `--t-*`, `--ease-*`.

**Cache busting.** CSS and JS keep `?v={{ site.asset_version }}`. `mvs.css` has no front matter, so its `url()`s cannot use Liquid.
Fonts and images therefore use content-stable filenames. When an image is regenerated, change its filename (`hero-desktop-v2-1920.avif`) instead of adding a query.

**Images**
- [ ] Art-directed hero:
```html
<picture class="hero__media media">
  <source media="(max-width: 767px)" type="image/avif" srcset="/assets/images/hero-mobile-720.avif 720w, /assets/images/hero-mobile-1080.avif 1080w" sizes="100vw">
  <source media="(max-width: 767px)" type="image/webp" srcset="/assets/images/hero-mobile-720.webp 720w, /assets/images/hero-mobile-1080.webp 1080w" sizes="100vw">
  <source type="image/avif" srcset="/assets/images/hero-desktop-1280.avif 1280w, /assets/images/hero-desktop-1920.avif 1920w, /assets/images/hero-desktop-2560.avif 2560w" sizes="100vw">
  <source type="image/webp" srcset="…same widths .webp…" sizes="100vw">
  <img src="/assets/images/hero-desktop-1920.jpg" alt="" width="1920" height="823" loading="eager" fetchpriority="high" decoding="async">
</picture>
```
  (Use `relative_url` in real markup. The desktop 21:9 image at 1920 wide is 823 tall, and the mobile 9:16 image at 1080 wide is 1920 tall.)
- [ ] Preload both heroes in `<head>` with `<link rel="preload" as="image" type="image/avif" imagesrcset="…" imagesizes="100vw" media="(max-width: 767px)" fetchpriority="high">` and the desktop twin with `media="(min-width: 768px)"`. Remove the current `logo-display.png` preload, because it is no longer the LCP.
- [ ] Every other image: `loading="lazy" decoding="async"`, explicit `width`/`height` matching its aspect, and `sizes` per layout
      (spec figure `(min-width:1024px) 40vw, 100vw`; bench `(min-width:1024px) 60vw, 100vw`; bands `100vw`).
- [ ] `object-fit: cover` with `object-position` tuned per asset. Parallax transforms go on an inner wrapper, never on the `<img>` inside `<picture>`.
- [ ] The page must read fine when any image 404s: containers keep `background: var(--carbon-1)` plus `--glow-red`.
- [ ] Nice-to-have assets are optional. If IMG-06 is missing, use IMG-03 with `object-position`. If IMG-07 is missing, drop the inset. If IMG-08 is missing, use the CSS glow only.

**Budgets and QA**
- [ ] First load of hero HTML + CSS + JS + fonts + hero image ≤ 450 KB on mobile (hero AVIF ≤ 140 KB at 1080w). LCP is the hero image or H1 at < 2.5s on simulated 4G.
- [ ] No CLS from fonts (fallback metrics) or images (dimensions). The header does not shift.
- [ ] `bundle exec jekyll build` passes. Take screenshots at 1440×900, 1024×768, 390×844, 375×812, 320×568 and 390 menu open, plus reduced motion, 200% zoom and JS disabled.
- [ ] Keyboard pass: skip link, menu (focus trap, Esc), form, all links. Axe or Lighthouse accessibility has zero violations.
- [ ] Copy diff review: every sentence traces to §2 or to existing content, with no new claims.
