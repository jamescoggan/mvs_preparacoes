# Execution Plan

## Purpose

Transform the current single-page Jekyll site into a premium, truthful, accessible, static GitHub Pages-ready experience for MVS Preparacoes.

## Current Milestone

Complete.

## File Ownership

The lead Codex agent owns all edits in this run. Discovery and review agents are read-only.

## Progress

- Completed: repository inspection, production URL check, git state check, asset inventory, baseline dependency attempt, read-only repository/content/brand discovery.
- Completed: selected Redline Laboratory direction.
- Completed: implementation, build repair, browser validation, QA notes, two polish passes, independent review, final verification.

## Decisions

- Keep Jekyll/static architecture.
- Remove the incompatible live-reload development dependency rather than adding runtime complexity.
- Use the existing logo and social icons as verified assets.
- Do not publish fake project proof, metrics, testimonials, or customer logos.
- Make WhatsApp, phone, and email the conversion path; the brief form remains local and mailto/WhatsApp based.

## Baseline Findings

- `bundle install` failed because `jekyll-livereload ~> 0.2.2` depends on Jekyll 3 while the Gemfile requires Jekyll 4.3.
- `_config.yml` had a generic Jekyll description and empty `url`.
- Layout declared `lang="en"` for Portuguese content.
- Favicon paths referenced missing files.
- Mobile nav was hidden with no replacement.
- `#servicos` contained placeholder content.

## Risks

- GitHub Pages source settings are not visible from the local repo.
- No real project media is available, limiting proof and photographic impact.
- End-to-end form delivery cannot be validated without a backend provider because the site is static.

## Validation Evidence

- Host `bundle install`: failed after dependency repair because the local machine uses Ruby 2.6.10 and current transitive `ffi` requires Ruby >= 3.0. Docker/Ruby 3.2 is the reliable local validation path.
- `docker compose build`: passed.
- `docker compose run --rm jekyll bundle lock`: passed and wrote `Gemfile.lock`.
- `docker compose run --rm jekyll bundle exec jekyll build`: passed.
- `curl -I http://127.0.0.1:4000/`: 200.
- Declared favicon resources: 200 for `favicon-32x32.png` and `apple-touch-icon.png`.
- Playwright screenshot matrix: passed at 320x568, 375x812, 390x844, 768x1024, 1024x768, 1280x800, 1440x900, and 1920x1080.
- Playwright checks: no console warnings/errors, no failed requests, one `h1`, `lang="pt-BR"`, no horizontal overflow, no missing image alt attributes, no small tap targets after fixes, mobile menu opens and closes with Escape, reduced-motion content remains visible.
- Contact check: project brief updates mailto and WhatsApp URLs with encoded form content.
- Internal resource check: 12 internal generated paths checked, 0 missing.
- 404 check: `/404.html` returns 200; missing route returns 404 with the custom page body in local WEBrick.
- Lighthouse mobile: Performance 98, Accessibility 100, Best Practices 100, SEO 100; LCP 2.4s, CLS 0, TBT 0ms.
- `git diff --check`: passed after fixing initial Dockerfile trailing whitespace.
- Independent creative/product review: initial 39.5/50 with actionable findings for form contrast, mobile menu label, mobile hero tightening, and future proof/media specificity.
- Independent engineering/inclusive review: initial 40/50 with actionable findings for no-JS mobile nav, softened process claims, menu label, QA traceability, and OG image.
- Fresh final verification: passed at 48/50 with no blocker, critical, or major findings.

## Polish Passes

1. Fixed reveal motion so below-fold content is always visible in full-page screenshots and reduced-risk environments.
2. Increased brand/contact/footer link hit areas to clear the 44px tap-target check.
3. Darkened UI red token so service badges clear WCAG AA contrast while preserving the logo asset.
4. Fixed review findings: visible form secondary CTA, no-JS mobile nav fallback, dynamic mobile menu label, softened process claims, and OG/Twitter image metadata.

## Remaining Work

- Confirm GitHub Pages settings and HTTPS/`www` redirects outside the repository.
- Add approved real MVS project media or verified project proof if/when the client supplies it.
