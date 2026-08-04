# Product Maintenance

Use this reference for recurring catalog work: new products, price/link/image updates, exchange-rate refreshes, discontinued checks, release dates, historical lows, issue/complaint research, and category backfills.

## Baseline

- Read `AGENTS.md`, `README.md`, `assets/js/config.js`, `tools/dashboard-contract.js`, and `tools/read-dashboard-products.js`.
- Treat `assets/js/config.js` `meta` and `tools/dashboard-contract.js` as the code-side source for product/category counts and dates.
- Keep every category at 20+ products, preserve required brand/category coverage, and update research JSON files whenever evidence-backed fields change.
- Start a new data date with `npm run maintain:catalog -- --draft --date=YYYY-MM-DD --baseline-ref=origin/main`. Review `.maintenance-draft.json`, record every category as `manually_reviewed`, then rerun with `--write`; the daily workflow uploads a draft instead of failing or mutating data when same-date decisions do not yet exist.

## Price, Link, And Image Audits

- Prefer official brand pages and trusted retailers. Do not use unknown shops, personal auction pages, used/refurbished/display/open-box/damaged-box pages, accessories, or consumables.
- For PChome products, use the product API before trusting bulk HTML fetch results:

```text
https://ecapi-cdn.pchome.com.tw/ecshop/prodapi/v2/prod?id=<PID>&fields=Id,Name,Nick,Pic,Price,Qty
```

- PChome `Price.Low` is the public discount price rendered as `折扣價` when it is a positive number; prefer it over `Price.P` (`網路價`). Use `Price.P` only when `Price.Low` is absent or non-positive. The full runner enforces the product-ID binding and tracks `Qty: 0` without writing it; use `npm run audit:pchome-prices` only for a focused read-only PChome audit.
- Automatic non-PChome price writes are restricted to a single exact-model, same-currency structured price from the explicitly trusted Yahoo Taiwan or Costco Taiwan host. Ambiguous prices, blocked pages, and model-unverified pages stay as report exceptions.
- Treat PChome `Qty: 0` as no-stock tracking, not discontinuation by itself.
- For Yahoo image failures on old `img.yec.tw/zp/MerchandiseImages/...` URLs, inspect the product page schema and prefer the current `cl/api/res/.../https://img.yec.tw/fy/...jpg` image when available.
- Do not remove a product unless the brand's official page or announcement explicitly establishes discontinuation for the exact model. A missing page, retailer no-stock signal, fetch block, stale image, or repeated network failure is not sufficient.

## Exchange Rates And Foreign Prices

- When updating exchange rates, update `assets/js/config.js` exchange values and date, recompute only foreign-currency `price.converted` values, and sync README/AGENTS/page text.
- Keep every supported catalog currency in the same exchange contract; Korean AirDresser entries require `KRW_TWD` in config, maintenance parsing, historical summaries, and conversion tests.
- Foreign products must keep notes about shipping, import tax, voltage/plug, and Taiwan warranty risk.

## Electronic Closet Scope

- `garmentcare` is strictly for rigid, enclosed cabinets centered on hanging garments and providing deodorizing, wrinkle reduction, sanitizing, or gentle drying. Exclude tumble dryers, washer-dryers, dehumidifiers, handheld steamers, fabric-cover drying closets, accessories, and discontinued stock.
- Keep the approved exact-model roster, brand/channel counts, one dimension record per product, and the full garment-care spec-prefix contract synchronized with `tools/dashboard-contract.js`.
- Overseas LG, Samsung, and Panasonic variants remain comparison references only; they must retain original currency plus TWD conversion and explicit international shipping, import tax, plug/voltage, and Taiwan warranty warnings.

## Coffee Machine Scope

- `coffee` contains exactly 24 Taiwan-market espresso machines: 12 fully automatic and 12 semi-automatic. Exclude capsule, drip, commercial, and built-in machines, as well as standalone grinders, milk frothers, consumables, accessories, color duplicates, and bundles used only to inflate the roster.
- Within each type, keep 4 value, 4 mid, and 4 premium products. Exactly 6 semi-automatic products must have built-in grinders and 6 must require an external grinder. Keep at least 6 brands and no more than 6 products from one brand.
- Every coffee product must use the Taiwan channel and TWD price, use a Taiwan-market 110V or 120V/60Hz rating, state Taiwan warranty, and include exactly one each of these prefixes: `類型：`, `使用原料：`, `研磨系統：`, `萃取／沖煮：`, `奶泡：`, `容量：`, `尺寸：`, `重量：`, `電壓／頻率：`, `功率：`, `清潔維護：`, `耗材／配件相容性：`.
- Keep exactly one dynamic Top Pick rather than pinning a model in validation. It must have Taiwan warranty and explicitly available Taiwan service plus consumables or parts. Preserve `全自動推薦`, `半自動推薦`, and `入門推薦` tags across the roster.

## Dimension And Weight Evidence

- Keep `dimension_research.json` aligned with the eleven dimension categories: TV, soundbar, washer, dryer, washer-dryer, garment care, refrigerator, coffee machine, multifunction oven/microwave, dishwasher, and bidet. The same file also carries researched weight evidence for TV, soundbar, coffee machine, and multifunction oven/microwave.
- Treat `generatedAt` as the latest evidence-batch date while preserving each row's actual `checkedAt` / `weightCheckedAt`; incremental category additions must not pretend older evidence was rechecked.
- Prefer exact-model official product/specification pages and official PDFs, then trusted retailer pages. Record product/body dimensions and net weight only; never substitute packaging dimensions, carton dimensions, or gross weight.
- Preserve component-level values where the product has separate pieces: TV with/without stand, and soundbar main unit/subwoofer/rear speakers. Do not collapse them into an invented total.
- Never infer width/depth/height order from three unlabeled numbers. For the newly researched TV, soundbar, coffee machine, oven, dishwasher, and bidet fields, use the literal `尺寸：查不到` or `重量：查不到` after credible sources are exhausted, and retain the checked page plus the specific reason in the evidence row.

## Release Dates And Historical Lows

- Release dates must come from official launch/release pages first, then trusted media with explicit launch/release wording. Do not use generative search summaries, support-page firmware/manual dates, article publish dates, listing dates, or model years as release dates.
- If no trustworthy release date exists, use `找不到` and keep `release_date_research.json` aligned.
- Historical lows must be same model and same size/capacity/spec where relevant. Exclude member-only personal discounts, card rebates, points, used/refurbished/display/open-box/damaged-box items, accessories, and consumables.
- Keep `historical_price_research.json` exactly aligned with product `historicalLow` objects.
- Coffee historical-low rows must also retain structured `priceChecks` with an exact-model query, price-source purpose, and explicit accepted/rejected outcome. Require at least two websites and a real price-comparison, price-history, or exact-model price-search record; specification, warranty, cleaning, video, and brand-category pages do not count toward the price-check minimum.
- The runner may lower an existing `found` historical low when the same trusted exact-model public price is lower. It must never manufacture a historical low for an existing `not_found` row or invalidate retained evidence from a blocked/model-unverified source automatically.

## Audit Artifacts And Documentation

- `catalog_maintenance_latest.json` is the committed compact contract: counts, category decisions, changes, exact checked ID sets, exceptions, exchange rates, and manually reviewed discontinuation candidates.
- `.maintenance-audit.json` is the verbose per-request evidence and `.maintenance-draft.json` is the pending compact decision surface. Keep both out of git and upload them only as short-lived CI artifacts when useful.
- After the report is final, run `npm run sync:maintenance-metadata`; do not hand-maintain dated log histories in README or AGENTS.

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
