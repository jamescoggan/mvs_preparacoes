# Repository Instructions

This repository contains the static Jekyll site for `mvspreparacoes.com.br`.

- Public route: `index.html`, rendered through `_layouts/default.html`.
- Main stylesheet: `assets/css/mvs.css`.
- Progressive enhancement script: `assets/js/site.js`.
- Brand assets live in `assets/`; keep `assets/logo.png` as the source logo.
- Build command: `bundle exec jekyll build`.
- Local preview command: `bundle exec jekyll serve --host 0.0.0.0`.
- Docker preview command: `docker compose up --build`.
- GitHub Pages/custom domain: preserve `CNAME` with `mvspreparacoes.com.br`.
- Generated output such as `_site/`, `.jekyll-cache/`, `.bundle/`, and `vendor/` must remain untracked.
- Content claims must be traceable to existing site content, verified public MVS sources, or marked for confirmation.
- Target language is Brazilian Portuguese. Keep `html lang` and SEO metadata aligned with `pt-BR`.
- Accessibility definition of done: semantic landmarks, visible focus, keyboard navigation, labelled forms, AA contrast, touch-friendly targets, and reduced-motion support.
