---
name: home-appliance-dashboard
description: Maintain the home-appliance-dashboard static GitHub Pages app. Use when working in this repo on product catalog data, pricing/exchange-rate/link/image audits, release-date or historical-low evidence, static frontend refactors, validation tools, GitHub Pages deployment checks, or repo-local AI maintenance rules.
---

# Home Appliance Dashboard

## Core Workflow

Start by reading `AGENTS.md`, then inspect `package.json`, `assets/js/config.js`, and `tools/dashboard-contract.js` before editing. Keep the app a pure static GitHub Pages site with no build step, backend, login, cart, checkout, or tracking.

Use a dedicated git worktree and short-lived `codex/` branch for repo changes unless the user explicitly says otherwise. After implementation, run the repo checks, merge back to `main`, push, verify GitHub Pages, and remove the temporary worktree.

## Task Routing

- For product data, prices, links, images, exchange rates, discontinued decisions, release dates, historical lows, or source evidence, read `references/product-maintenance.md`.
- For static frontend refactors, product loading, validation tools, docs drift checks, or Pages release verification, read `references/static-refactor-release.md`.

## Guardrails

- Preserve `products/*.js` as the product data boundary and keep `registerProducts(categoryId, items)` compatible.
- Keep `assets/js/config.js` `meta`, `tools/dashboard-contract.js`, README, AGENTS, and visible page dates/counts in sync.
- Do not delete products from weak signals such as one stale image URL, one transient page error, or PChome `Qty: 0`.
- Do not rewrite the app into a framework or add a build pipeline unless the user explicitly asks for that architectural change.
