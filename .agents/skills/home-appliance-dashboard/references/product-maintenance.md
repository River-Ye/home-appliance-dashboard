# Product Maintenance

Use this reference for recurring catalog work: new products, price/link/image updates, exchange-rate refreshes, discontinued checks, release dates, historical lows, issue/complaint research, and category backfills.

## Baseline

- Read `AGENTS.md`, `README.md`, `assets/js/config.js`, `tools/dashboard-contract.js`, and `tools/read-dashboard-products.js`.
- Treat `assets/js/config.js` `meta` and `tools/dashboard-contract.js` as the code-side source for product/category counts and dates.
- Keep every category at 20+ products, preserve required brand/category coverage, and update research JSON files whenever evidence-backed fields change.

## Price, Link, And Image Audits

- Prefer official brand pages and trusted retailers. Do not use unknown shops, personal auction pages, used/refurbished/display/open-box/damaged-box pages, accessories, or consumables.
- For PChome products, use the product API before trusting bulk HTML fetch results:

```text
https://ecapi-cdn.pchome.com.tw/ecshop/prodapi/v2/prod?id=<PID>&fields=Id,Name,Nick,Pic,Price,Qty
```

- PChome `Price.Low` is the public discount price rendered as `折扣價` when it is a positive number; prefer it over `Price.P` (`網路價`). Use `Price.P` only when `Price.Low` is absent or non-positive. Run `node tools/sync-pchome-prices.js` to audit this rule, and pass `--write --date=YYYY-MM-DD` only after reviewing the output.
- Treat PChome `Qty: 0` as no-stock tracking, not discontinuation by itself.
- For Yahoo image failures on old `img.yec.tw/zp/MerchandiseImages/...` URLs, inspect the product page schema and prefer the current `cl/api/res/.../https://img.yec.tw/fy/...jpg` image when available.
- Do not remove a product unless there is positive evidence such as the product page disappearing, official discontinuation, or repeated no-page/no-stock evidence across checks.

## Exchange Rates And Foreign Prices

- When updating exchange rates, update `assets/js/config.js` exchange values and date, recompute only foreign-currency `price.converted` values, and sync README/AGENTS/page text.
- Foreign products must keep notes about shipping, import tax, voltage/plug, and Taiwan warranty risk.

## Release Dates And Historical Lows

- Release dates must come from official launch/release pages first, then trusted media with explicit launch/release wording. Do not use generative search summaries, support-page firmware/manual dates, article publish dates, listing dates, or model years as release dates.
- If no trustworthy release date exists, use `找不到` and keep `release_date_research.json` aligned.
- Historical lows must be same model and same size/capacity/spec where relevant. Exclude member-only personal discounts, card rebates, points, used/refurbished/display/open-box/damaged-box items, accessories, and consumables.
- Keep `historical_price_research.json` exactly aligned with product `historicalLow` objects.

## Product Issue And Complaint Research

- Keep `product_issue_research.json` exactly aligned with every product `issueResearch` object, the explicit per-reporter original-page ledger in `product_issue_report_evidence.json`, and the per-product manual completion gate in `product_issue_review_manifest.json`.
- Search exact brand/model identities across at least two target platforms. Search engines may discover candidates but are not evidence and never count as a reporting platform.
- Mark `common_issue` only when the same exact-model problem has at least 6 distinct first-person reporters across at least 2 original websites. Deduplicate accounts and cross-posts; never count reactions, star totals, summaries, media retellings, or related-series reports.
- Store source-level excerpts separately from every counted reporter. Each reporter must be explicitly present in `product_issue_report_evidence.json` and research evidence `reports[]` with author, permalink, a reproducible page locator, a non-template per-person `evidenceExcerpt`, manual audit note, `exactModel: true`, `firstPerson: true`, `reviewBasis: manual_original_page`, and an optional shared `crossPostKey`; never synthesize these confirmations from a compact author array or reuse an aggregate source excerpt as proof for every author.
- Otherwise use `no_common_issue` with the exact summary `截至查核日，查無達門檻的集中負評／災情`, preserve checked search links, and avoid claiming that no negative review exists. Never infer this decision from an empty automated search.
- After completing exact-model review, prepare an explicit audit batch containing each product identity, decision, actual checked platforms, at least two queries containing the canonical model, reproducible query URLs, each query's actual `targetHost`, candidate disposition, representative sources, and reviewer note. Count independent websites by canonical target/source domain, so alternate Reddit hosts remain one site. Use `manual_original_pages_reviewed` only when candidate/source pages were actually opened; when both recorded cross-site queries have no exact-model candidate, use `manual_cross_site_search_reviewed_no_candidate`. Every model-boundary-sanitized search candidate must have one `candidateReviews[]` row with its URL/title, original-page excerpt, independent-author count, and specific exclusion reason. Merge decisions only with `node tools/mark-product-issue-review.js --input=<audit-batch.json> --write`; category/ID auto-attestation is intentionally unsupported, and the research tool must never generate candidate rejection reasons. Human-verified threshold summaries belong in `tools/verified-product-issues.js`, with per-reporter rows in `product_issue_report_evidence.json`, before marking the batch.
- Use `node tools/research-product-issues.js --resume --rebuild-decisions --write --apply` only after the manual manifest covers the complete catalog; `--apply` must fail while any product remains pending. Use `--resume`, `--category=<id>`, `--ids=<id,...>`, or `--limit=<n>` for controlled discovery batches.

## Validation

Run at least:

```bash
npm run check:syntax
npm run check:logic
npm run check:data
npm run check:docs
npm run check:ui
```

Use `npm run check:ui:full` for broad UI-affecting changes.
