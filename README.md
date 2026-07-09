# 家電推薦比較工作台

純前端靜態頁面，整理 2026-07-09 查核的家電推薦清單，並保留好市多可購買候選，涵蓋價格、歷史最低價、入手時機、規格、優缺點、通路連結與海外價格 TWD 換算。

> 本專案由 AI 協助研究、整理資料並製作網頁；內容僅供採購比較參考，購買前請再以通路與品牌官方資訊為準。

## 線上瀏覽

不熟悉 GitHub 的人可以直接點這個公開網頁：

[家電推薦比較工作台](https://river-ye.github.io/home-appliance-dashboard/)

## 內容

- 共 25 類商品，每種商品至少 20 個，共 656 筆。
- 聚焦可信通路新品，排除配件、耗材、福利品、展示機與誤判品。
- 每類「綜合推薦」以 CP 值、評價口碑、價格、可信通路、台灣售後/保固風險綜合判斷，並附簡短推薦原因。
- 支援分類、品牌、預算、通路、搜尋、排序、active filter chips、可分享 URL 篩選狀態與比較清單。
- 針對桌機與手機操作最佳化，包含群組化分類列、sticky 分類列、手機快速操作列、收合式商品細節與重設篩選。
- 冰箱、洗衣機、烘衣機與洗烘衣機皆標示機身尺寸，方便先確認家中擺放空間；若可信來源查不到則明確標示未標示。
- 價格以 2026-07-09 可信通路查核的低價為準；好市多補充候選同日查核，目前共 64 筆，每類最多 3 筆且僅挑評價不錯商品，不代表同品類全型號皆收錄。
- 歷史最低價以同型號、同尺寸/容量/規格的可信新品通路可驗證來源為準；本批逐筆查核 BigGo 730 天價格歷史，並用 FindPrice、LBJ 比價撿便宜與可信通路頁交叉確認；找不到可靠來源時明確標示「找不到」，不以現價推定史低。
- 歷史最低價排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、拆封品與整新品；海外史低需自行加計運費、關稅、電壓/插頭與台灣保固風險。
- 海外價格使用 ExchangeRate-API 實際回傳的 2026-07-09 00:02 UTC 匯率換算，未含國際運費、進口稅與台灣保固。

## 使用

直接開啟 `index.html`，或透過 [GitHub Pages](https://river-ye.github.io/home-appliance-dashboard/) 瀏覽。

商品資料已依分類拆到 `products/*.js`，由 `assets/js/product-loader.js` 依分類設定自動載入；前端邏輯拆在 `assets/js/*.js`，樣式拆在 `assets/css/*.css`。搜尋與篩選會同步到 URL query，方便分享目前條件。此專案沒有 build step，GitHub Pages 直接服務靜態檔案。

## 維護檢查

```bash
npm run check
```

- `npm run check:syntax`：檢查公開 JS 與維護工具語法。
- `npm run check:logic`：檢查排序、篩選、URL 狀態、史低文案、HTML escape 與商品 loader 純邏輯。
- `npm run check:data`：檢查 25 類、656 筆、必要欄位、日期格式、四類大型家電尺寸、歷史最低價 research 對齊、每類至少 20 筆、重複型號與重複購買 URL。
- `npm run check:docs`：檢查 README、AGENTS、index/config 的商品數、分類數、日期與 cache version 沒有漂移。
- `npm run check:ui`：用 Playwright 驗證桌機/手機搜尋、篩選、排序、lazy loading、比較清單與推薦卡高亮。
