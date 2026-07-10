# Quality Assurance Log

## Baseline

- Production URL inspected: `https://mvspreparacoes.com.br/`.
- Current repo branch: `main`.
- Initial tracked working tree: clean.
- Baseline `bundle install`: failed due to Jekyll 4.3 and `jekyll-livereload ~> 0.2.2` dependency conflict.
- Baseline source issues: hidden mobile nav, generic metadata, English HTML language, missing favicon targets, duplicate placeholder services section, fragile mailto form.

## Test Matrix

- Viewports: 320x568, 375x812, 390x844, 768x1024, 1024x768, 1280x800, 1440x900, 1920x1080.
- States: desktop nav, mobile nav, contact links, project brief form, keyboard focus, reduced motion, 200% zoom where practical.
- Checks: dependency install, Jekyll build, local preview, console errors, network failures, internal anchors, accessibility snapshot, performance/lighthouse where available.

## Results

### Build And Install

- `bundle install`: failed on host Ruby 2.6.10 because current transitive `ffi` requires Ruby >= 3.0. This is an environment limitation, not a repaired Gemfile conflict.
- `docker compose build`: passed on Ruby 3.2.
- `docker compose run --rm jekyll bundle lock`: passed, producing `Gemfile.lock`.
- `docker compose run --rm jekyll bundle exec jekyll build`: passed.

### Browser And Responsive

- Local preview: `http://127.0.0.1:4000/`.
- Screenshots saved under `docs/website-transformation/screenshots/`.
- Viewports captured: 320x568, 375x812, 390x844, 768x1024, 1024x768, 1280x800, 1440x900, 1920x1080.
- Mobile menu screenshots captured at 320x568, 375x812, and 390x844.
- Reduced-motion screenshot captured at 390x844.
- Practical 200% zoom simulation captured at 640x900; no horizontal overflow.
- Playwright results: 200 responses, no console warnings/errors, no failed requests, no horizontal overflow, one `h1`, `lang="pt-BR"`, no missing image alt attributes, no tap targets below 44px after polish fixes.

### Accessibility

- Lighthouse mobile Accessibility: 100.
- Manual keyboard trail: skip link, brand, desktop nav, hero CTAs, contact CTAs, social links, and form fields reachable in logical order.
- Mobile menu: opens with button, closes by nav link or Escape.
- Focus: visible `:focus-visible` outline.
- Reduced motion: content remains visible and transition durations are suppressed.

### Performance

- Lighthouse mobile Performance: 98.
- LCP: 2.4s.
- CLS: 0.
- TBT: 0ms.
- Logo display asset reduced from the 623 KB source PNG to a 163 KB display PNG.
- JavaScript remains one small progressive-enhancement file; no runtime dependencies added.

### SEO And Deployment

- Lighthouse SEO: 100.
- `html lang`: `pt-BR`.
- Canonical URL: `https://mvspreparacoes.com.br/`.
- `robots.txt` and `sitemap.xml` generated.
- `CNAME` preserved in `_site`.
- Declared favicon resources return 200 locally.
- Docker now uses the project Gemfile and lockfile instead of injecting a divergent Gemfile.

### Contact Flow

- WhatsApp primary CTA points to `wa.me/5511995426610`.
- Email CTA points to `contato@mvspreparacoes.com.br`.
- Brief form updates both mailto and WhatsApp URLs with encoded content.
- No data is sent to a server and no tracking or cookies were introduced.

### Visual Polish

- Pass 1 fixed blank below-fold full-page screenshots caused by opacity-based reveal animation.
- Pass 2 fixed tap-target sizing and WCAG contrast for service badges.
- Independent review fixes added a no-JS mobile nav fallback, dynamic menu label, stronger form secondary CTA visibility, softened process claims, and OG/Twitter image metadata.

### Independent Review

- Creative/product review initial score: 39.5/50, not passing.
- Engineering/inclusive review initial score: 40/50, not passing.
- Resolved actionable review findings: form WhatsApp contrast, no-JS mobile navigation, menu label state, unsupported process wording, QA traceability, and social preview image.
- Deferred review limitation: real MVS shop/project media and measured proof still require client-provided approved assets and facts.
- Fresh final verification score: 48/50.
- Final verification result: pass, with no blocker, critical, or major findings.

### Known Limitations

- End-to-end email or WhatsApp delivery cannot be validated from local automation because both depend on external client applications/services.
- HTTPS and `www` redirect behavior must be configured in DNS/GitHub Pages settings; the local repository cannot enforce it.
- No real MVS project photography, testimonials, certifications, or measured results are available in the repository, so those were not added.
