# Static Refactor And Release

Use this reference for frontend refactors, validation-tool changes, docs drift prevention, and GitHub Pages releases.

## Static App Constraints

- Keep the project dependency-light and buildless. `index.html` must remain directly openable and GitHub Pages must serve static files.
- Preserve app script order: `config.js`, utility/logic modules, `product-loader.js`, then `main.js`. The independent `ads.js` loader must remain production-hostname gated and must not run on `file://` or localhost.
- Keep product data in `products/*.js`; do not move bulk product data into `assets/js/*.js`.
- `product-loader.js` should load `products/<category>.js?v=<meta.cacheVersion>` from `categories`, so adding a category should not require editing `index.html` product script tags.

## Refactor Safety

- Before refactoring UI behavior, run `npm run check` for a clean baseline.
- Prefer pure logic tests in `tools/check-logic.js` for sorting, filtering, formatting, and loader URL behavior.
- Keep browser journeys in `tools/dashboard-ui-journeys.js` and shared layout/assertion helpers in `tools/dashboard-ui-assertions.js`.
- Keep data-contract constants in `tools/dashboard-contract.js`; update `assets/js/config.js` `meta` and docs together.
- For CSS changes, preserve selectors and visual behavior unless the user asks for a redesign.

## Release Verification

Run:

```bash
npm run check
npm run check:ui:full
git diff --check
```

After merging to `main` and pushing, verify the GitHub Actions Pages workflow and public assets:

```bash
gh run list --workflow "Deploy GitHub Pages" --branch main --limit 5
gh run watch <run-id> --exit-status
curl -I https://appliance.riverye.com/
curl -I https://appliance.riverye.com/assets/js/config.js
curl -I https://appliance.riverye.com/products/tv.js
curl -I https://appliance.riverye.com/robots.txt
curl -I https://appliance.riverye.com/sitemap.xml
curl -I https://river-ye.github.io/home-appliance-dashboard/
```

Report the public page URL, commit hash, checks run, and Pages result.
