# Product Maintenance

Use this reference for recurring catalog work: new products, price/link/image updates, exchange-rate refreshes, discontinued checks, release dates, historical lows, and category backfills.

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
