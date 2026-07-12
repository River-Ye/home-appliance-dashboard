# Static Refactor And Release

Use this reference for frontend refactors, validation-tool changes, docs drift prevention, and GitHub Pages releases.

## Static App Constraints

- Keep the project dependency-light and buildless. `index.html` must remain directly openable and GitHub Pages must serve static files.
- Preserve app script order: `config.js`, utility/logic modules, `product-loader.js`, then `main.js`. The independent `ads.js` loader must remain production-hostname gated and must not run on `file://` or localhost.
- Keep product data in `products/*.js`; do not move bulk product data into `assets/js/*.js`.
- `product-loader.js` should load `products/<category>.js?v=<meta.cacheVersion>` from `categories`, so adding a category should not require editing `index.html` product script tags.

## Generated GEO Surfaces

- Generate exactly 25 static category guides at `/categories/<id>/` from `assets/js/config.js`, `products/*.js`, and the manually maintained editorial source `tools/category-guides.js`.
- After changing products, categories, or category guides, run `npm run generate:categories`. The generated outputs are `categories/<id>/index.html`, `sitemap.xml`, `llms.txt`, and the `geo-structured-data` / `geo-category-links` blocks in `index.html`; never hand-edit them.
- Run `npm run check:geo` to catch missing or extra category pages, output drift, metadata and structured-data errors, unsafe links, unauthorized tracking, Pages artifact omissions, and IndexNow contract failures.
- `llms.txt` is supplemental context for crawlers and AI systems. It is not a ranking standard and does not guarantee indexing, ranking, or citation.
- Publish all six evidence files with Pages: `release_date_research.json`, `historical_price_research.json`, `dimension_research.json`, `product_issue_research.json`, `product_issue_report_evidence.json`, and `product_issue_review_manifest.json`.
- Do not add per-product thin pages or new analytics, conversion tracking, or other tracking as part of GEO work.

## Refactor Safety

- Before refactoring UI behavior, run `npm run check` for a clean baseline.
- Prefer pure logic tests in `tools/check-logic.js` for sorting, filtering, formatting, and loader URL behavior.
- Keep browser journeys in `tools/dashboard-ui-journeys.js` and shared layout/assertion helpers in `tools/dashboard-ui-assertions.js`.
- Keep data-contract constants in `tools/dashboard-contract.js`; update `assets/js/config.js` `meta` and docs together.
- For CSS changes, preserve selectors and visual behavior unless the user asks for a redesign.

## Release Verification

After product, category, or guide changes, regenerate before the full checks:

```bash
npm run generate:categories
npm run check:geo
```

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
curl -I https://appliance.riverye.com/categories/tv/
curl -I https://appliance.riverye.com/robots.txt
curl -I https://appliance.riverye.com/sitemap.xml
curl -I https://appliance.riverye.com/llms.txt
curl -I https://appliance.riverye.com/release_date_research.json
curl -I https://appliance.riverye.com/product_issue_review_manifest.json
curl -I https://river-ye.github.io/home-appliance-dashboard/
```

The workflow submits the homepage and 25 category URLs to IndexNow only after Pages succeeds. This notification is non-blocking, so inspect the `Notify IndexNow` log even when the workflow is green; report any rejection or network failure without treating it as a Pages deployment failure.

Report the public page URL, commit hash, checks run, Pages result, representative generated assets and evidence-file checks, and the IndexNow log result.
