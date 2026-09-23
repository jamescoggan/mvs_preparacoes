# Decisions — Design POC (`poc/showcase-design`)

Source of truth for approaches chosen and rejected in this POC. Newest last.

| # | Date | Decision | Rationale | Rejected alternatives |
| --- | --- | --- | --- | --- |
| D1 | 2026-09-23 | Work on branch `poc/showcase-design` from `main` HEAD `b062a5c`. No commit, no push. | Preserve the live site. The user reviews the diff. | Editing `main` directly. |
| D2 | 2026-09-23 | Build and serve through Docker (`docker compose run --rm jekyll bundle exec jekyll build`). | Host Ruby 4.0.7 has no Jekyll bundle installed. The Docker image (Ruby 3.2) builds cleanly. | Installing gems on the host Ruby. |
| D3 | 2026-09-23 | Use AI-generated ambience imagery (Higgsfield), labelled "Imagem de ambientação", with a budget of at most 150 credits. | No real photography exists in the repo, and a cinematic direction needs images. Labelling keeps it truthful. | Stock photography (licensing, generic look). Presenting images as MVS work (prohibited). |
| D4 | 2026-09-23 | Separate desktop and mobile hero generations served via `<picture>` media queries. | Mobile is composed deliberately, not cropped. | A single image with object-position cropping. |
| D5 | 2026-09-23 | Exclude `docs/design-poc` from the Jekyll build. | Internal docs and screenshots must not be published. | — |
| D6 | 2026-09-23 | Adopt the "Redline Atelier" direction and hero A, "Cold Start" (DESIGN_DIRECTION.md §1, §3). | The most cinematic option; keeps the H1 and CTA in the first viewport on both devices; the forged piston echoes the logo. | B "Split Spec" (CTA below the fold on mobile); C "Monolith" (masked type harms legibility). |
| D7 | 2026-09-23 | Self-host Big Shoulders Display, Archivo and JetBrains Mono (all SIL OFL). | Characterful condensed display that matches the wordmark, readable body text, and mono for real numerals only. No third-party font requests at runtime. | System sans (the previous direction; too generic). Google Fonts CDN (extra connection and privacy exposure). |
| D8 | 2026-09-23 | Red text uses `#FF4A3D`, buttons use `#D11A1F`, and brand `#E1251B` is limited to large or decorative use. | Brand red measures 4.28:1 on carbon, which fails AA for body text. | Using brand red everywhere. |
| D9 | 2026-09-23 | Service 04 changed from "Execução técnica" to "Rua e pista". | Aligns the four service lanes with the confirmed service list. | — |
| D10 | 2026-09-23 | Image generation ran in parallel with implementation. The asset agent wrote only `assets/images/` and the attribution file; the frontend agent was the sole editor of source files. | Saves wall time while keeping the one-writer rule for code. | Running them sequentially. |
| D11 | 2026-09-23 | Repo paths: images go in `assets/images/` (not `assets/img/`) and the asset log is `ASSET_ATTRIBUTION.md`. The direction doc was patched to match. | Follows the lead brief. | — |
| D12 | 2026-09-23 | The years counter is static "Desde 2008." and JS replaces it with "{N} anos desde a abertura oficial." | A build-time number goes stale between rebuilds. | Liquid build-time computation. |
| D13 | 2026-09-23 | Under reduced motion, content is never hidden (no fade at all). | Strictest reading of the reduced-motion requirement. | The 200ms opacity fade in the direction doc. |
| D14 | 2026-09-23 | The hero gauge shows only at ≥1200px, the process gauge labels sit outside the arc, the history image is sticky on desktop, and mobile timeline years are smaller. | Layout collisions found in self-check screenshots. | Doc values as written. |
| D15 | 2026-09-23 | Header and footer nav links use `/#section`. | So they also work from 404.html. | `#section`. |
| D16 | 2026-09-23 | The footer discloses that all images are AI ambience illustrations, and each image carries "Imagem de ambientação". | Truthfulness. | — |
| D17 | 2026-09-23 | Added a second desktop hero, `hero-desktop-1610` (actually 16:9; gpt_image_2_5 has no 16:10), with the crown about 17.5% down. It's served at ≥768px with aspect ≤2:1, and the 21:9 version is kept for ultra-wide screens. | The review found the 21:9 crown sat under the header nav at 16:9 and 16:10 viewports. Re-composing beats masking. It cost 8.5 credits (one reject). | Masking or offsetting the 21:9 image only. |
| D18 | 2026-09-23 | One consolidated correction pass applied the review's top 8 fixes (REVIEW.md). | Following the homelogic method: a single correction pass after the independent review. | Iterative piecemeal fixes. |
| D19 | 2026-09-23 | Display line-height 1.06 (spec .86–.92; review .94–.98). | Measured glyph metrics: Ç descends to -0.15em. Tighter values clipped or touched pt-BR diacritics. | Tighter leading. |
| D20 | 2026-09-23 | An inline head script adds `html.has-js`, and header and menu presentation key on it. `.is-enhanced` gates only the reveals. | Removes the mobile header flash before site.js runs. Works in every browser. | `@media (scripting)` (less support). |
| D21 | 2026-09-23 | Hero gauge moved into the bottom rail (56px). Process gauge is `aria-hidden`. The 4:5 interlude art is served up to 1023px. The header over paper uses .94 opacity. Phone timeline years are 4.5rem full width. | Review fixes: no overlap with the subject, a better tablet crop, legibility. The gauge is purely decorative. | Spec values. |
| D22 | 2026-09-23 | Responsive WebP logo derivatives (`assets/logo-{176,224,352,480,720}.webp`) generated from `logo.png`. `logo-display.png` is kept for og:image and JSON-LD. | The 166 KB PNG was about 40% of the mobile first load. | Serving the PNG at display size. |
| D23 | 2026-09-23 | `assets/facebook.png`, `instagram.png` and `youtube.png` are now unreferenced but kept. | Removing tracked files is out of scope for a POC; decide at merge. | Deleting them. |
| D24 | 2026-09-23 | Updated published hours to "Seg a qui · 08:00–18:00 / Sex · 08:00–17:00" (JSON-LD, mobile menu, footer, contact channels) and dropped the "Almoço · 13:00–14:00" line. | Client supplied new hours ("Seg a qui. Das 8hs as 18hs / Sex. Das 8hs as 17hs") without mentioning a lunch closure. | Keeping the old lunch line unconfirmed. Logged in CONTENT_GAPS.md pending confirmation. |

## 2026-09-23 — Release to mvspreparacoes.com.br

The owner asked to remove the footer sentence disclosing that the images are AI-generated ambience and to add a "Site desenvolvido e mantido por Alquest" credit linking to https://alquest.es. The per-image "Imagem de ambientação" labels stay. `asset_version` set to `20260923-showcase` for cache busting. Merged `poc/showcase-design` into `main`, which GitHub Pages builds directly (legacy Jekyll build, custom domain `mvspreparacoes.com.br`).
