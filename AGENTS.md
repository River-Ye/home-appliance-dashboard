# AGENTS.md

這個 repo 是「家電推薦比較工作台」的純前端 GitHub Pages 靜態站。此文件整理自原始需求與後續對話，給後續 AI/維護者接手時使用。

## 專案定位

- 公開頁面：https://appliance.riverye.com/
- GitHub repo：https://github.com/River-Ye/home-appliance-dashboard
- 本專案由 AI 協助研究、整理資料並製作網頁；README 必須保留 AI 製作說明與 GitHub Pages 連結。
- 這不是購物車或結帳系統，只是商品研究、篩選、比較與外部購買連結的靜態展示頁。
- 使用者主要情境是台灣採購，但可包含 Amazon、Best Buy、B&H、Walmart、品牌官網等可信海外通路；海外價格需換算 TWD 並標示風險。

## 檔案架構

- `index.html`：頁面骨架與 script 載入順序。
- `assets/css/tokens.css`：色彩、陰影、全域 reset 與基本文字規則。
- `assets/css/layout.css`：header、main、footer 等主要版面。
- `assets/css/filters.css`：搜尋、篩選器與 ComboBox 樣式。
- `assets/css/tabs.css`：分類 tabs、總覽統計、推薦卡與列表工具列樣式。
- `assets/css/cards.css`：商品列表、商品卡、價格/史低、規格、標籤與卡片操作樣式。
- `assets/css/comparison.css`：比較清單、比較表與空狀態樣式。
- `assets/css/navigation.css`：手機 dock、快速跳轉與目標高亮動畫樣式。
- `assets/css/responsive.css`：reduced-motion、平板與手機版 RWD。
- `assets/css/editorial.css`：分類選購指南頁與首頁查核／分類入口區塊樣式。
- `assets/css/app.css`：由上述首頁 CSS 來源合併產生的效能 bundle，屬產生結果，不可手動修改。
- `assets/js/config.js`：分類、匯率、meta、常數、全域 registry 與 state 初始化。
- `assets/js/utils.js`：格式化、HTML escape、搜尋文字整理與標籤轉換。
- `assets/js/filters.js`：搜尋、篩選、排序、品牌選項與 lazy loading 計算。
- `assets/js/combobox.js`：分類/品牌/預算/通路/排序 ComboBox 行為。
- `assets/js/templates.js`：商品卡、推薦卡、比較表與圖片 fallback markup。
- `assets/js/url-state.js`：搜尋/篩選/排序與 URL query 的初始化、同步與分享狀態。
- `assets/js/ui.js`：render 流程、手機篩選、scroll/highlight、compare 操作。
- `assets/js/product-loader.js`：依 `categories` 自動載入 `products/<category>.js?v=<cacheVersion>`。
- `assets/js/main.js`：DOMContentLoaded、商品載入、事件綁定與初始 render。
- `products/*.js`：每個商品分類一個檔案，只放該分類商品資料，透過 `globalThis.applianceDashboard.registerProducts(categoryId, items)` 註冊。
- `tools/category-guides.js`：37 類導讀、選購條件與 FAQ 的人工維護來源，不放即時商品事實。
- `tools/geo-config.js`：站名、首頁 title、description、H1、AI 揭露與 GEO 共用文案契約。
- `tools/generate-category-pages.js`：依分類、商品、指南與 CSS 來源產生 `assets/css/app.css`、`categories/<id>/index.html`、`sitemap.xml`、`llms.txt` 與首頁 GEO 區塊。
- `categories/<id>/index.html`：37 個可直接閱讀與索引的靜態分類指南頁，含前 5 名詳細推薦與該類全部型號的無 JavaScript 索引，屬產生結果。
- `tools/dashboard-contract.js`：商品數、分類數、必要欄位與資料品質規則常數。
- `tools/run-daily-catalog-maintenance.js`：永久維護入口，重查現價、來源、圖片、史低來源、匯率與停產候選；原始逐筆稽核只寫入 gitignored `.maintenance-audit.json`。
- `tools/catalog-maintenance-policy.js`：exact-model、排除品與官方停產文字的純邏輯規則。
- `tools/update-maintenance-metadata.js`：由 compact report 同步 README、AGENTS 與首頁日期／匯率文案。
- `catalog_maintenance_latest.json`：目前資料日的 compact 維護摘要與例外清單；不再保留每次執行的重複逐筆大檔。
- `tools/*.js`：repo 內維護檢查工具，可用 `npm run check` 執行。
- `.agents/skills/home-appliance-dashboard/`：repo-local skill，供 AI 維護商品資料、靜態前端與 Pages 發布流程時使用。
- 不要再把大量商品資料塞回任一核心 JS；商品資料只能維持在 `products/*.js`。

新增或修改分類時通常要同步：

- `assets/js/config.js` 的 `categories`
- `products/<category>.js`
- `README.md` 的分類、數量、品牌涵蓋說明
- `AGENTS.md` 若規則有新增
- `tools/category-guides.js`，若分類名稱、定位、選購條件或 FAQ 需要調整
- `tools/dashboard-contract.js` 與 `assets/js/config.js` 的 `meta`，若總分類數或總商品數改變
- 執行 `npm run generate:categories`，同步分類頁與 GEO 產物

分類商品 script 由 `assets/js/product-loader.js` 依 `categories` 自動載入；新增分類時不要再手動把 `products/<category>.js` 加進 `index.html`。

`assets/css/app.css`、`categories/<id>/index.html`、`sitemap.xml`、`llms.txt`，以及 `index.html` 內 `geo-structured-data`／`geo-category-links` marker 之間的內容皆由產生器維護，不可手動修改；`npm run check:geo` 會拒絕缺漏、額外分類目錄或產物漂移。

## Repo-local Skill

- 本 repo 有 `.agents/skills/home-appliance-dashboard/`，AI 後續處理商品維護、價格/匯率/連結查核、靜態前端重構、驗證工具或 GitHub Pages 發布時，應優先使用這個 skill。
- 商品維護細節看 `references/product-maintenance.md`；靜態前端重構與發布流程看 `references/static-refactor-release.md`。
- 若更新 AGENTS 裡的長期規則，也要評估是否同步更新 repo-local skill，避免後續 AI 只讀 skill 時漏掉流程。

## GEO / AI 搜尋規則

- 網站由現有 37 類資料產生 37 個 `/categories/<id>/` 靜態分類指南頁；不建立 1133 個重複商品事實的薄內容頁。
- 每個分類指南的初始 HTML 必須含該類全部商品的品牌、完整型號、名稱、參考價、價格基準、上市／發售日期與摘要；前 5 名繼續顯示完整評估卡。
- `tools/category-guides.js` 只維護分類層級的繁中導讀、3 項選購條件與 3 組 FAQ；商品名稱、價格、排名、規格、史低與負評仍從既有商品資料產生，避免第二套事實來源。
- 站名、首頁 title、description、H1 與 AI 揭露集中在 `tools/geo-config.js`；首頁 metadata、JSON-LD、分類頁與 `llms.txt` 必須共用此契約。首頁與分類頁首屏皆需可見 AI 協作、資料日期、查核方法與 GitHub 原始碼。
- 修改 `assets/js/config.js` 的分類、`products/*.js` 商品或 `tools/category-guides.js` 後，必須執行 `npm run generate:categories`，再以 `npm run check:geo` 驗證產物與 contract。
- `llms.txt` 是提供網站用途、查核方法、資料限制與分類入口的補充說明，不是正式排名標準，也不保證搜尋引擎或 AI 服務收錄、排名或引用。
- 分類指南連回互動工作台時使用 `/#category=<id>` fragment 初始化篩選；不得產生可爬取的 `index.html?category=...` 內部連結，避免參數頁分散 canonical 與檢索訊號。首頁需在非同步商品載入前保存此 fragment，頁內錨點不得讓分類狀態遺失；既有 query 分享網址仍由 `assets/js/url-state.js` 向後相容。
- Pages 必須公開六份證據 JSON：`release_date_research.json`、`historical_price_research.json`、`dimension_research.json`、`product_issue_research.json`、`product_issue_report_evidence.json`、`product_issue_review_manifest.json`。
- Pages 成功部署後才執行 IndexNow；通知為 non-blocking，失敗不得讓已完成的 Pages 部署失敗，但維護者仍需檢查 workflow log 並釐清原因。
- GEO / AI 搜尋優化不得新增 Google Analytics、Google Ads 轉換或其他追蹤，也不得衍生逐商品薄內容頁。

## 目前資料規模

- 共 37 類、1133 筆商品。
- 所有分類每類至少 20 筆；新增分類或補資料時不可讓任何分類低於 20 筆。
- 特殊分類目前數量：
  - `電視`：39 筆，其中 5 筆為 exact 70 吋，需涵蓋主流顯示技術與可信台灣新品通路。
  - `Soundbar`：35 筆，需涵蓋不同聲道、擴充方式與空間需求。
  - `吸塵器`：32 筆，乾式吸塵、洗地與輕量用途需明確區分；新世代不得只看型號或年份，需核對實際規格取捨。
  - `掃拖機器人`：44 筆，需涵蓋知名品牌旗艦與次旗艦。
  - `無線路由器`：53 筆，只收 Wi-Fi 6 以上，Mesh/多 AP/商用管理支援要寫清楚。
  - `網路交換器`：20 筆，固定 8 個主要 RJ45 埠，1G／2.5G／10G 各至少 4 款；只收台灣公司貨、金屬外殼與非 PoE 型號。
  - `電腦螢幕`：60 筆，需涵蓋主流品牌、不同用途帶與 34/40/45/49/57 吋寬螢幕。
  - `螢幕燈`：20 筆，只收桌機螢幕掛燈，台灣通路優先、可信海外通路補充；需核對夾具厚度、曲面限制、配光、供電、燈體尺寸與淨重。
  - `懸臂支架`：25 筆，需標示支援尺寸、承重重量與是否適合 49/57 吋大寬螢幕。
  - `滑鼠`：30 筆、`鍵盤`：30 筆、`滑鼠墊`：30 筆，各類選購定位固定 6／12／12，辦公與電競並重，型態與版本規則見下方特別分類規則。
  - `床包`：30 筆、`棉被`：30 筆、`枕頭`：30 筆，各類選購定位固定 6／12／12，材質、填充、尺寸與版本規則見下方特別分類規則。
  - `電子鎖`：51 筆，需涵蓋知名品牌且注意安裝條件。
  - `鍋具`：28 筆、`刀具`：23 筆、`櫥下飲水機`：40 筆、`洗碗機`：30 筆，需排除配件、耗材、桌上/直立誤判、福利品與展示機。
  - `冰箱`：26 筆、`洗衣機`：26 筆、`烘衣機`：24 筆、`洗烘衣機(多功能型)`：31 筆，需排除配件、耗材、福利品、展示機、箱損品、組合包誤判與單功能錯類，且每筆需標示機身尺寸。
  - `電子衣櫥（衣物護理機）`：20 筆，只收以吊掛衣物為核心、具除味／除皺／抑菌／柔護乾燥功能的封閉式櫃體設備；排除烘衣機、洗脫烘、除濕機、手持掛燙機、布罩烘衣櫃、配件與停產機種。
  - `空氣清淨機`：28 筆，已補入 POIEMA 新氣几系列、Philips AC0921/84 與 Xiaomi AC-M25-SC；後續若替換資料，除非無可信新品通路，需保留 POIEMA 候選。
  - `電風扇`：24 筆，已補入 Philips 風扇/循環扇/塔扇/無葉片款；後續若替換資料，除非無可信新品通路，需保留 Philips 候選。
  - `循環扇`：23 筆，已納入有台灣官方現貨、上市年份與 exact-model 查核證據的 IRIS PCF-CDP18TEC、IRIS KSF-SDC151TEC 與 SHARP PK-18S03T。
  - `咖啡機`：24 筆，只收台灣現售全自動與半自動義式機，各 12 筆；各類型入門／均衡／旗艦各 4 筆，半自動含內建磨豆與需外接磨豆各 6 筆。
  - `冷氣`：30 筆，只收台灣住宅完整一對一分離式室內／室外機組；冷專、冷暖各至少 12 組，四個坪數帶各至少 6 組。
  - `熱水器`：45 筆，瓦斯、電熱、熱泵各 15 筆；電熱固定儲熱式 8 筆、瞬熱式 7 筆。

現有分類順序需盡量維持關聯群組，方便商品數量變多後掃描：

影音：

- 電視
- Soundbar

空氣環境：

- 電風扇
- 循環扇
- 除濕機
- 空氣清淨機
- 冷氣

清潔家務：

- 掃拖機器人
- 吸塵器

洗衣家務：

- 洗衣機
- 烘衣機
- 洗烘衣機(多功能型)
- 電子衣櫥（衣物護理機）

臥室寢具：

- 床包
- 棉被
- 枕頭

廚房餐飲：

- 冰箱
- 鍋具
- 刀具
- 破壁機
- 咖啡機
- 多功能氣炸烤箱/微波爐
- 櫥下飲水機
- 洗碗機

衛浴安全：

- 熱水器
- 免治馬桶
- 電子鎖

工作網路：

- 無線路由器
- 網路交換器
- 升降桌
- 電腦椅
- 電腦螢幕
- 螢幕燈
- 懸臂支架
- 滑鼠
- 鍵盤
- 滑鼠墊

## 商品資料規則

每筆商品至少要有：

- `id`
- `category`
- `rank`
- `budget`
- `channel`
- `brand`
- `model`
- `name`
- `price`
- `installation`（冷氣、熱水器、四個指定型號與本輪新增日系代表款必填）
- `image`
- `buyUrl`
- `buyLabel`
- `specs`
- `description`
- `pros`
- `cons`
- `bestFor`
- `recommendation`
- `releaseDate`
- `historicalLow`
- `issueResearch`
- `score`
- `voltage`
- `warranty`
- `tags`

資料品質要求：

- 價格、圖片、購買連結必須來自可信通路或品牌官方頁。
- 每次全量商品查核都要由現有 exact model／系列逐筆反查品牌台灣官方目前世代；有符合收錄契約的直接後繼型號時新增後繼款並保留舊款。`covered_existing` 只代表品牌已有合格商品，不代表已完成世代查核；未新增時仍要在 `categoryScan` 留下逐類後繼型號查核結論或具體排除原因。
- 不可使用來路不明網站、個人拍賣、福利品、瑕疵品、展示機、拆封品、二手品、整新品、配件頁或耗材頁當購買連結。
- 若是海外通路，必須標示未含國際運費、進口稅、電壓/插頭/變壓器與台灣保固風險。
- 電壓明顯不適合台灣者不可列為 Top Pick。
- 使用者曾要求「全網最低價」，實作上要以可信通路與同型號可查低價為準；不要為了低價改放不可信網站或非新品頁。
- 新增商品的 `price.basis` 只允許 `retailer_current` 或 `official_suggested`；後者必須顯示「建議售價／查看官方資料」，不可被卡片、史低或 maintenance 文案稱為通路現價。`installation.status` 只允許 `included_basic`、`excluded`、`not_stated`，並須用 `installation.note` 說明邊界與可能加價。
- 日系品牌固定盤點 Sony、Panasonic、HITACHI、Mitsubishi Electric、Daikin、GENERAL、Rinnai、Noritz、TOTO；`Hitachi` 統一為 `HITACHI`，`Mitsubishi` 只在確認為 Mitsubishi Electric 時收錄，GENERAL 可接受 Fujitsu General alias，TOTO 不得誤中 TOTOLINK。37 類 × 9 品牌的完整 `japaneseBrandReview` 保存在 `catalog_maintenance_latest.json`，不新增第七份公開 audit JSON；本次寢具增量只新增 27 格，基準 306 格與日期原樣承接，不宣稱 333 格同日重查，也不把未知分類的預設值當研究結論。
- 商品內容若有「排除福利/展示/拆封品」等說明文字是允許的，但商品名稱、型號與購買頁本身不能是這類商品。
- 每筆商品都必須標示 `releaseDate`，代表上市/發售日期；若可信通路或品牌頁找不到明確日期，需填「找不到」，不要用評論日期、促銷日期、上架日或型號年份猜測。
- 日期查核需保留 `release_date_research.json` 證據檔；非「找不到」項目必須有 `sourceUrl`、`sourceTitle`、`evidenceSnippet` 與 `confidence`，且 `releaseDate` 只能使用 `YYYY-MM-DD`、`YYYY-MM`、`YYYY`。
- 補查上市/發售日時，優先官方新聞稿、官方產品發表頁、官方上市/發售公告；其次才使用可信媒體/評測明確寫出的 release/launch/上市/發售文字。不可把 Google/Bing 生成式摘要、支援頁的說明書/韌體/驅動 release date、文章發布日、促銷期間、上架日、保固文件日期、購買頁庫存日期或型號年份當作上市日。
- 若搜尋結果只找到「released in 2024」這類明確年份，可填 `YYYY`；只寫月份則填 `YYYY-MM`。不要自行補月份或日期。
- `dimension_research.json` 同步保存 21 類商品的機身／組件尺寸證據，以及電視、Soundbar、咖啡機、多功能氣炸烤箱／微波爐、冷氣、熱水器、螢幕燈、滑鼠、鍵盤、滑鼠墊、床包、棉被、枕頭 13 類商品重量證據；商品規格與研究列必須逐筆對齊。既有家電及寢具維持 cm／kg，三類周邊使用 mm／g、保留來源明示軸序，不推定包裝尺寸、毛重或缺漏資訊；滑鼠墊厚度、床包可包覆高度及棉被填充重量另列。
- 尺寸與重量優先採品牌官方 exact-model 產品頁、官方規格表或官方 PDF，其次才使用可信通路。只採本體／機身尺寸與淨重，不可使用包裝、外箱尺寸或毛重；來源沒有明確標示寬／深／高順序時不得自行推定。
- 新增查核的電視、Soundbar、咖啡機、多功能氣炸烤箱／微波爐、洗碗機、免治馬桶與螢幕燈若仍無法確認，規格文字固定使用「尺寸：查不到」／「重量：查不到」，並在研究列保留實際查過的代表性頁面與找不到原因；既有大型家電的「未標示」契約不回溯改寫。
- 每筆商品都必須標示 `historicalLow`，代表同型號、同尺寸/容量/規格在可信新品通路可驗證的歷史最低價與入手時機判斷；若找不到可靠來源，需填 `status: "not_found"`，不要以現價推定史低。
- 歷史最低價查核需保留 `historical_price_research.json` 證據檔；`found` 項目必須有 `sourceUrl`、`sourceTitle`、`evidenceSnippet`、`amount`、`currency`、`converted`、`sourceKind`、`confidence` 與 `checkedAt`，`not_found` 項目必須寫明查核說明。
- 咖啡機的史低研究列另需保留結構化 `priceChecks`：每筆寫明 exact-model 查詢、價格來源用途與採用／排除結果，至少跨兩個網站並包含實際比價、價格歷史或 exact-model 價格搜尋；規格、保固、清潔教學、影片與品牌分類頁不得計入價格查核門檻。
- 歷史最低價來源排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、拆封品、整新品、配件頁或耗材頁；海外史低需在 `note` 標示未含國際運費、進口稅、電壓/插頭與台灣保固風險。
- 每筆商品都必須有 `issueResearch`。同一問題只有在完全相同型號、至少 6 位可辨識的獨立使用者、且跨至少 2 個原始網站時，才能標為 `common_issue`；同帳號重複留言、跨站轉貼、按讚、搜尋摘要、媒體轉述與系列相近型號均不得計入人數。
- 未達門檻使用 `no_common_issue`，文案固定為「截至查核日，查無達門檻的集中負評／災情」，不可寫成完全沒有負評。每次查核需保留至少兩個平台的查詢入口，完整查詢、候選、排除原因、作者與摘錄保存在 `product_issue_research.json`。
- 搜尋引擎只能用於發現候選；成立的災情必須回到原始論壇、品牌社群或可信零售評價頁核對 exact model、第一人稱回報、作者與 permalink。來源層保留證據摘錄；每位計入者需在 `product_issue_report_evidence.json` 與 research evidence `reports[]` 顯式留下作者、原文連結、可重現頁面定位、非模板化的逐人 `evidenceExcerpt`、人工覆核註記、exact-model 與第一人稱確認；不可由作者陣列自動預設布林值，也不可用來源層彙總摘要代替逐人判讀。跨站轉貼用相同 `crossPostKey` 去重。
- `no_common_issue` 不得由批次搜尋自動推定。逐型號完成跨站人工覆核後，需用顯式 audit batch 加入 `product_issue_review_manifest.json`，每筆保存 decision、至少兩組包含 canonical model 的 exact-model query、可由 query URL 還原的查詢字串、實際 `targetHost`、候選處置與 reviewer note；獨立網站數以 target/source 的 canonical website 計算，`old.reddit.com` 與 `reddit.com` 只能算同一站。有原頁候選時使用 `manual_original_pages_reviewed` attestation，跨站查詢確實沒有 exact-model 候選時則誠實使用 `manual_cross_site_search_reviewed_no_candidate`。每個經型號邊界過濾後的搜尋候選還需在 `candidateReviews[]` 保存 URL、原頁摘要、獨立作者數與具體排除理由。marker 不得依分類或 ID 自動填決策，research 工具也不得自行產生候選拒絕理由。`tools/research-product-issues.js --apply` 遇到任何不完整或尚未覆核商品必須拒絕寫回商品檔。
- 大量更新商品檔時仍需維持 `products/*.js` 逐分類獨立，不要把商品資料塞回 `assets/js/*.js`。

## 特別分類規則

### 冷氣

- 固定 30 組，只收台灣住宅用完整一對一分離式室內／室外機組；排除窗型、移動式、多聯式、商用機與單一室內機／室外機價格。
- `type` 只允許 `cooling_only`、`heat_cool`，兩者各至少 12 組；`modelPair.indoor` 與 `modelPair.outdoor` 必須同時由 exact-model 來源核對。
- `roomSizeUpperPing` 依官方適用坪數上限分為 `small`（≤5）、`medium`（>5–7）、`large`（>7–10）、`living_dining`（>10），四帶各至少 6 組。
- 價格必須涵蓋完整室內＋室外機組；尺寸與淨重分列室內／室外機，並揭露 220V／60Hz、能源效率、配管、排水、室外機空間、基本安裝與追加施工邊界。

### 熱水器

- 固定 45 台：`gas`、`electric`、`heat_pump` 各 15 台；電熱另以 `electricSubtype` 固定 `storage` 8 台、`instant` 7 台。
- 瓦斯機必須標示天然氣／桶裝瓦斯、室內外安裝與排氣方式；電熱機必須揭露容量、迴路、接地與漏電保護；熱泵複合系統要保存主機與儲槽 exact model、尺寸及完整套組價格。
- 所有類型皆要揭露適用容量、能效、電壓頻率、安全條件、尺寸、淨重、安裝限制與可能加價；不可用詢價、單一組件、包裝尺寸、毛重或推定的寬深高補數。

### 掃拖機器人

- 必須涵蓋知名品牌的旗艦與次旗艦機種。
- 已納入品牌包含 Roborock、ECOVACS、Dreame、Narwal、iRobot、eufy、MOVA、LG、Shark、Dyson、HITACHI。
- 台灣未穩定販售的海外旗艦可作海外參考，但不要列為台灣 Top Pick。
- 推薦理由要綜合 CP 值、清潔能力、評價口碑、價格與售後風險。

### 無線路由器

- 分類名稱使用「無線路由器」，不要改回「Wi-Fi 分享機」。
- 只找 Wi-Fi 6、Wi-Fi 6E、Wi-Fi 7 或以上。
- 若支援 Mesh、EasyMesh、AiMesh、Deco Mesh、Velop、Orbi、AQUILA PRO AI Mesh 等，必須在規格或說明中明確寫出。
- Aruba Instant On、UniFi 等商用/Prosumer AP 可以納入，但必須明確寫出它們不是一般家用一體式 NAT 分享器，通常需既有 Gateway/路由器、PoE 供電與品牌控制器/管理 App。
- 使用者預期可能買 2-3 台串接，所以 Mesh 套組與單台 Mesh 擴充能力都要好比較。
- 不要把網卡、延伸器、中繼器、交換器誤列為路由器。

### 網路交換器

- 固定 20 款，每款必須有 8 個主要銅纜 RJ45 埠；額外 SFP+ 或 combo uplink 可收錄，但不得算進八個主要埠。
- 1G、2.5G、10G 三個速率級距各至少 4 款；10G 主要埠需同時支援 1G、2.5G 與 10G 自動協商。
- 只收台灣公司貨、公開 TWD 售價、台灣保固、金屬外殼與非 PoE 型號；任何具 PoE 功能的型號都排除。
- 官方來源必須明示散熱方式、最大功耗、最高操作溫度至少 40°C、機身尺寸與八埠速率；不得以通路或推測補官方材質／散熱證據。
- 密閉且無主動散熱的弱電箱以低功耗、高操作溫度上限、較長保固優先；10G 機種必須明示改善箱體進排風，不得描述為無條件適用密閉箱。
- 無網管、簡易網管與網管型皆可，但必須明確標示；D-Link DMS-108 固定為唯一 Top Pick。

### 電視

- 若有支援手機無線投影，需在規格中寫出，例如 AirPlay、Chromecast、Miracast、SmartThings/Tap View。
- 若通路頁或品牌頁未明確標示手機投影能力，不要猜測；需寫「手機投影：通路頁未標示」。
- 每筆需標示機身尺寸與重量；優先分列不含底座與含底座資料，只列來源明確提供的組合，不得以其中一組推算另一組。

### Soundbar

- 每筆需標示尺寸與重量；套裝含重低音或後環繞喇叭時，主機、重低音與後環繞需依官方明確資料分列，不可寫成沒有意義的合計值。
- 不可把包裝尺寸／毛重當成產品規格；來源只列部分元件時，只填已確認元件，整筆完全無法確認才寫「查不到」。

### 咖啡機

- 固定收錄 24 款台灣現售義式咖啡機：全自動 12 款、半自動 12 款；排除膠囊、滴濾、商用／嵌入式機、獨立磨豆機、奶泡機、耗材及配件。
- 全自動與半自動皆維持入門／均衡／旗艦各 4 款；半自動再分為 6 款內建磨豆機與 6 款需外接磨豆機。至少涵蓋 6 個品牌，單一品牌不得超過 6 款，不以顏色或套組重複湊數。
- 每筆必須依序提供類型、使用原料、研磨系統、萃取／沖煮、奶泡、容量、機身尺寸、淨重、電壓／頻率、功率、清潔維護及耗材／配件相容性；不可使用包裝尺寸或毛重，查無可信資料時使用「尺寸：查不到」／「重量：查不到」。
- 只收具 exact model、TWD 公開售價、台灣可信新品通路、60Hz、台灣官方明確支援的 110V 或 120V 電力規格及台灣保固的型號。全分類只能有一款 Top Pick，且該款須為 110V／60Hz，並明確證明台灣維修與耗材／配件可取得；其他分型推薦使用「全自動推薦」「半自動推薦」「入門推薦」等標籤。

### 多功能氣炸烤箱/微波爐

- 以家電櫃空間有限的多合一機型為主。
- 可包含水波爐、蒸烤爐、氣炸微波、氣炸烤箱等，但要說明容量與功能取捨。
- 每筆需標示本體尺寸與淨重，供家電櫃深度、散熱空間與搬運評估；不可使用包裝尺寸或毛重。

### 電子鎖

- 至少 30 筆以上，現有 51 筆。
- 需涵蓋知名品牌與台灣可安裝/可購買品牌。
- 說明要提醒門厚、門向、鎖體、天地栓、基本安裝與加價項目。

### 電腦螢幕

- 至少 30 筆以上，現有 60 筆。
- 需涵蓋 ASUS、Acer、BenQ、LG、Dell、Samsung、MSI、GIGABYTE、ViewSonic、AOC、Philips、EIZO、Xiaomi 等主流品牌。
- 要混合入門 FHD、2K 高刷新、4K/USB-C、生產力、OLED、Mini LED、專業色彩等用途。
- 必須涵蓋寬螢幕/超寬螢幕，例如 34 吋 21:9、45 吋 OLED、49 吋 32:9、57 吋 Dual UHD 等；描述要提醒桌深、顯卡與支架承重。
- 每筆需在規格中寫出螢幕重量；優先使用不含底座/僅面板/VESA 掛載重量。若通路與品牌頁未明確標示，需寫「重量：未標示」並避免猜測。

### 螢幕燈

- 固定精選 20 款桌機螢幕掛燈，歸「工作網路」且排在電腦螢幕與懸臂支架之間；台灣可信新品通路優先，海外款只作補充參考。排除一般檯燈、筆電燈、單純氣氛燈、燈條、配件與停產機種，不以顏色或套組重複湊數。
- 每筆規格依序提供 `類型：`、`配光：`、`照度：`、`色溫：`、`顯色性：`、`調光／控制：`、`自動感光：`、`背光：`、`安裝相容性：`、`供電／功率：`、`尺寸：`、`重量：`、`隨附配件：`。照度保留來源的距離與測試範圍，不能把不同條件的數字直接排名；功能查不到時明寫「未標示」。
- 安裝相容性必須涵蓋夾具可接受的螢幕厚度與曲面限制；未知項目明示「未標示」，不可依外觀、燈體弧形或相近系列推定。另提醒螢幕背面造型、無邊框面板與攝影機位置，未有 exact-model 證據不得宣稱通用於所有曲面螢幕。
- 調光／控制須交代智慧連線是否具備；USB 供電須核對電壓、電流與功率，明示線材、充電器及控制器是否隨附，不把 USB 接口外型當成足夠供電或台灣市電相容證據。
- 尺寸與淨重列入 `dimension_research.json`；以燈體或來源明確標示的組件為準，不使用包裝／毛重或自行推定寬深高。無可信資料時使用「尺寸：查不到」／「重量：查不到」。
- 全類恰好一款台灣 Top Pick，須有台灣可信新品通路、可確認的官方安裝相容性、供電與台灣售後；海外款不得列為台灣 Top Pick，且需標示原幣、TWD 換算日期、國際運費、進口稅、插頭／供電及台灣保固風險。

### 升降桌

- 每筆需在規格中寫出桌板厚度。
- 若查不到桌板厚度，需寫「桌板厚度：未標示」，不可留白或猜測。

### 懸臂支架

- 每筆需標示支援尺寸與承重重量，例如 8kg、15kg、20kg、27kg、30kg。
- 若支援 49/57 吋大寬螢幕或 Odyssey G9 類大型曲面螢幕，必須在規格與推薦理由中明確寫出。
- 低承重款，例如 8kg 或 9kg，一定要註明不建議用於 34 吋以上寬螢幕或 49/57 吋超寬大螢幕。
- 推薦理由要提醒 VESA 規格、桌板厚度、夾桌/穿桌、實際螢幕重量不含腳架、以及大型螢幕安裝最好兩人操作。

### 滑鼠 / 鍵盤 / 滑鼠墊

- `mouse`、`keyboard`、`mousepad` 放在工作網路群組的懸臂支架之後，各固定 30 款，`value / mid / premium` 各為 6／12／12。辦公與電競並重，台灣可信新品通路優先、海外補充；每類恰好一款具台灣售後保固的 Top Pick，另標辦公／電競推薦。海外或原廠明示無保固者不作 Top Pick，無保固不得冒充具台灣保固的日系代表。
- 滑鼠 `type` 為 `standard|vertical|trackball`；依序提供類型、握型／慣用手、連線、感測器／解析度、回報率、按鍵／滾輪、供電／續航、系統／軟體、尺寸、重量、隨附配件。
- 鍵盤 `type` 為 `membrane|scissor|mechanical|magnetic|optical`；只收完整成品，原生中文鍵帽優先、英文版可收，另附貼紙不當原生中文。依序提供類型、配列、鍵帽語言／材質、軸體、熱插拔、連線、回報率、供電／續航、系統／軟體、尺寸、重量、隨附配件。
- 滑鼠墊 `type` 為 `cloth|hard|glass`，硬質不含玻璃；適合滑鼠操作的長桌墊以規格與標籤表示。依序提供類型、表面材質、表面特性、底材／防滑、尺寸、厚度、重量、邊緣處理、清潔保養、供電／功能、隨附配件。
- 鍵盤與滑鼠墊必填 `variantFamily`，僅供同款分組與重複檢查。同款最多三版，鍵盤只因軸體不同、滑鼠墊只因平面尺寸不同而分列；顏色、語言、背光、厚度或套裝不增加款數。多尺寸鼠墊必須有來源明示的兩個平面尺寸，厚度另列；不能自行由無軸序的三數字推定。
- 鍵盤「軸體：」第一段固定為完整官方軸體名稱／型號，手感、觸發力、語言等補充放在分號之後；重複軸體驗證只取第一段，不讓附註差異變成新版本。
- `model` 必須是可核實的完整官方型號／SKU，`name` 與 `specs` 明示版本，`buyUrl` 能實際還原選定版本；不可製造參數、改寫型號或拼湊網址規避重複檢查。無法獨立核對時改查可信通路或只收一版。
- 排除裸套、單獨鍵帽／軸體、數字鍵盤、觸控板、替換配件及非新品。每筆獨立查核價格、圖片、購買連結、上市、史低與負評，不跨軸體／尺寸版本套用證據；集中問題仍須同一版本、至少六名獨立使用者、跨兩個原始網站。

### 床包 / 棉被 / 枕頭

- `bedsheet`、`comforter`、`pillow` 放在獨立「臥室寢具」群組，位於洗衣家務之後、廚房餐飲之前，各固定 30 款，`value / mid / premium` 各為 6／12／12。台灣可信新品通路優先、海外補充；每類恰好一款具台灣官方／可信通路與在地售後的 Top Pick，另標涼爽／親膚、四季／冬季保暖及仰睡／側睡推薦。
- 床包 `type` 為 `cotton|lyocell|linen|synthetic|other_natural`；可收單件床包或床包加枕套組，排除含被套的大套組。依序提供類型、組合內容、材質、織法／支數、適用床墊、尺寸、可包覆高度、認證／產地、清潔保養與重量。
- 棉被 `type` 為 `cotton|down|synthetic|wool|silk`；只收完整被芯或成品被，排除被套、毛毯、電熱毯及單純涼感薄毯。依序提供類型、組合內容、表布材質、填充材質、填充比例／蓬鬆度、適用季節／保暖性、尺寸、填充重量、整件重量、認證／產地與清潔保養。
- 枕頭 `type` 為 `latex|memory_foam|down|fiber|hybrid`；只收成人睡眠枕，排除抱枕、長枕、旅行頸枕、嬰幼兒枕、枕套與替換填充物。依序提供類型、枕型／睡姿、表布材質、填充／核心材質、高度／軟硬度、尺寸、重量、透氣／溫控、認證／產地與清潔保養。
- 三類皆必填 `variantFamily`，同系列最多三版。床包與棉被只因官方獨立尺寸 SKU 分列；枕頭只因官方獨立高度／軟硬度 SKU 分列；顏色、花色、包裝數量、贈品或套裝差異本身不增加款數。每個版本的購買網址、價格、圖片、上市、史低、尺寸重量與負評證據均須獨立還原與核對。
- 寢具尺寸使用來源明示軸序的 cm，淨重使用 kg；床包另列可包覆高度，棉被分開記錄填充重量與整件淨重。查無可信資料時明示「查不到」並保存實際查過的來源與原因，不使用包裝尺寸、毛重或推定值。
- 周邊與寢具尺寸、淨重逐筆納入 `dimension_research.json`，新研究列的 `category`、`brand`、`model`、`name` 必須與商品完全相符；缺少可信數據時使用「尺寸：查不到」「重量：查不到」，鼠墊厚度、床包可包覆高度或棉被填充重量不明時也各自明示「查不到」，並記錄實際來源與原因。單位、軸序與商品／研究列由同一規則驗證，不改寫既有家電契約。
- 排除候選的 `candidateReviews[].exactModel` 必須明確為布林值：回到原頁發現不同版本時記 `false` 並寫明排除理由，不得為通過驗證改成 `true`。成立災情的逐人 `reports[].exactModel` 與 `firstPerson` 仍必須為 `true`；沒有成立災情的研究批次應保留顯式空 `reports: []`，不捏造回報。

### 鍋具 / 刀具 / 櫥下飲水機 / 洗碗機

- 每類至少 20 筆；若未來擴充，仍需維持可信通路新品。
- 鍋具不可把鍋蓋旋鈕、把手、配件或食譜誤列為商品。
- 刀具只收廚房刀具，不可把刮鬍刀、美體刀、刀架或磨刀配件誤列為商品。
- 櫥下飲水機需以廚下/櫥下淨水、RO、瞬熱/冷熱系統為主；桌上型、直立型、全戶式或單純濾心耗材不要列入。
- 洗碗機需標示容量、安裝型式與電壓/進排水注意事項；220V 或嵌入式機型不可列為低門檻 Top Pick。
- 洗碗機每筆需標示本體尺寸；可保留官方明確提供的可調整高度範圍，但不得使用包裝或外箱尺寸。

### 免治馬桶

- 每筆需標示便座／本體尺寸，並維持門市或官方頁所列的適用馬桶尺寸、安裝距離與電源注意事項。
- 只接受來源明確標示的寬／深／高；若只列未註明順序的三個數字，不可依常見產品比例自行判讀。

### 冰箱 / 洗衣機 / 烘衣機 / 洗烘衣機

- 每類至少 20 筆；只收可信通路新品，排除福利品、展示機、拆封品、二手品、整新品、箱損品、配件、耗材、底座、疊架與錯類組合包。
- 每筆需在規格中標示機身尺寸，格式使用「尺寸：寬 N x 深 N x 高 N cm」；若購買頁沒有尺寸，需改查品牌官網、官方規格 PDF 或可信通路頁，不可用包裝/外箱尺寸代替。
- 若查不到機身尺寸，需寫「尺寸：未標示」並在 `dimension_research.json` 記錄查核來源與找不到的原因；不可留白或猜測。
- 冰箱需標示容量、門型、變頻/節能標示、電壓與大型家電搬運、門寬、舊機回收等注意事項；不要把電視+冰箱組合包、酒櫃、冰櫃或冰箱配件列入。
- 洗衣機需標示洗衣容量、直立/滾筒形式、變頻/溫水等明確功能，以及進排水、插座、門向與地面水平注意事項；不可把洗脫烘誤列為單洗洗衣機。
- 烘衣機需標示乾衣容量、熱泵/瓦斯/電熱/冷凝方式、電壓或瓦斯條件、排風/排水與疊放限制；不可把洗脫烘、除濕機、曬衣架或底座列入。
- 洗烘衣機(多功能型)需明確標示洗/乾容量，格式使用「洗/乾容量：17kg / 10kg」；若商品頁未寫清楚，需改查品牌官網或可信通路規格圖，不可只寫總容量或猜測乾衣容量。並需標示熱泵/冷凝/蒸氣/自動投入等功能；推薦理由要提醒乾衣容量通常小於洗衣容量、全程洗烘時間較長與維修成本風險。

### 電子衣櫥（衣物護理機）

- 嚴格限於封閉式櫃體、以吊掛衣物為核心並具除味／除皺／抑菌／柔護乾燥功能的設備；不得混入滾筒烘衣機、洗脫烘、除濕機、手持掛燙機、布罩式烘衣櫃、配件或停產庫存。
- 每筆至少標示容量、護理技術、行程、乾燥方式、機身尺寸與重量、水箱／給排水、電壓頻率、耗電、噪音、連線功能、門向、安裝間距與材質限制。
- 電子衣櫥不能取代洗衣、乾洗、熨燙或大量烘衣；海外款不得列為台灣 Top Pick，且需明確標示原幣、TWD 換算、國際運費、進口稅、插頭／電壓與台灣保固風險。
- 目前 20 筆包含 LG 12、Samsung 6、Panasonic 2，並涵蓋不同容量、外觀、門向與台灣／海外正式款；同系列變體仍需以 exact model 分別查核。

## UI / UX 規則

- 桌機與手機版操作體驗都要重視。
- 最上方 header 內容需與 body 主內容同寬對齊，不可滿版貼邊後和下方錯位。
- 搜尋與篩選控制要支援手動 key 關鍵字找選項，避免選項太多難找。
- 選擇「分類」後，「品牌」選項只顯示該分類實際存在的品牌，不可顯示無關品牌。
- 型態篩選只在冷氣、熱水器、網路交換器、滑鼠、鍵盤、滑鼠墊、床包、棉被與枕頭顯示；寢具沿用單一材質／填充維度，不新增尺寸或季節交叉篩選。URL 使用各分類核准的 `type` 值；每次切換分類都清除 type，避免相同值跨類殘留；無效直連值要忽略並從同步 URL 移除，桌機、手機、active chip、篩選數量、重設與分享網址須一致。
- 排序控制必須支援推薦排序、價格升冪/降冪、分數升冪/降冪、`上市 / 發售日期` 升冪/降冪；日期找不到的商品在日期排序時應排在最後。
- 分類 tabs 需把相關品類放在一起；目前分為影音、空氣環境、清潔家務、洗衣家務、臥室寢具、廚房餐飲、衛浴安全、工作網路。
- 手機版進階篩選區必須可收合，避免搜尋列表占太多空間。
- 首頁商品卡片採 lazy loading：預設先渲染 12 筆，滑到商品區尾端每次追加 40 筆，且必須提供「載入全部」控制；搜尋、篩選、排序與統計仍必須針對完整商品資料集，不可只查已渲染的卡片 DOM。
- 頁面必須保留可點擊的快速滑動到最上面與最下面控制，手機版要避免遮住底部快速操作列。
- 點擊每類「綜合推薦」卡片時，需滑動到對應商品卡；若商品卡尚未 lazy loaded，需先載入到該卡可見，並用短暫高亮/抖動提示目標卡片。注意：推薦卡若指向很後面的商品，需避免 `IntersectionObserver` 在捲動後立刻追加商品並重新 render，否則高亮/抖動會被吃掉；高亮/抖動也要等目標卡片進入 viewport 後才開始，避免使用者還沒看到提示就結束。
- 商品卡片需有圖片、品牌名稱、規格型號、價格、說明、優缺點、適合對象、推薦理由、購買連結。
- 比較清單要可用，手機與桌機都不能有不合理橫向溢出。
- 不要新增登入、購物車或結帳功能。
- 只允許本次核准的 Google AdSense 手動廣告與 Google CMP：廣告只能使用 `home-appliance-after-picks` 與 `home-appliance-before-footer` 兩個 responsive display ad units，且 `assets/js/ads.js` 只能在 `https://appliance.riverye.com/` 初始化。
- `riverye.com` 的 Auto ads 維持原設定，但 `https://appliance.riverye.com/` 必須維持 AdSense 全站 Auto ads page exclusion，工作台不得出現 Auto ads，也不得把外部排除狀態偽裝成 HTML attribute。
- 隱私權政策固定為 `https://riverye.com/privacy.html`，CMP 的隱私權政策網址需保持同步；`ads.txt` 由根網域 `https://riverye.com/ads.txt` 管理。
- 禁止加入 Google Analytics、Google Ads 轉換追蹤或其他未授權追蹤；驗收時不得點擊自己的廣告，也不得用反覆刷新製造廣告活動。
- 公開頁用 Chrome/DevTools 檢查時不應留下可避免的 console/network error，例如 favicon 404；若改版後看到這類錯誤，需補齊靜態資源或明確說明原因。

## 僅新增商品的增量記錄

- 使用者指定只補品時，保留 `schemaVersion: 3` 並使用 `auditScope: "added_products_only"`；省略此欄位仍按全量維護驗證，未知值必須拒絕。`baselineRef` 必須是可讀取的固定完整 commit SHA，`summary.newProductsAdded` 必須與基準 ID 差集一致，不得附帶刪除、替換或修改原商品。
- 原商品、逐筆研究、分類覆核列及來源／圖片／史低 audit 的已確認與例外狀態都須原樣承接；完整 checked ID sets 表示目前證據覆蓋，本輪查核集合由 `newProductsAdded` 推導，不新增第二套大型 audit schema。
- `meta.dataDate` 與 aggregate 日期表示最新研究批次；新增分類日系矩陣使用本輪真實日期，沿用分類必須與固定基準逐列相同，保留舊 `checkedAt`、`reviewedAt` 與 cutoff。`historical_price_research.json` 的 `researchedThisRun` 只計本輪新增款。
- 僅新增模式不得執行全目錄 `maintain:catalog`；保留既有匯率與日期，新海外款依該批次換算並明示時效，不重算原商品。文件摘要需區分「本輪新增查核」與「沿用既有證據」，不得把合併後總數稱為本輪全量查核。
- 螢幕燈擴充當次只新增 20 款，原 923 款不重查、不改價；此限制適用該次新增任務，後續明確要求全量維護時依全量流程；缺少基準、舊證據被改、日期不實、ID 差集不符或新款證據未齊時停止處理，不得自行擴張為全量維護。

## 價格與匯率

<!-- catalog-maintenance-summary:start -->
- 2026-09-04 07:38（台灣時間）完成 1133 筆商品、37 類全量查核；497 筆 PChome SKU API 已完成（270 筆 exact model、64 筆人工 SKU 綁定可寫入，74 筆型號未自動確認），更新 44 筆公開價格（13 筆下修、31 筆上修），56 筆 Qty 0 只列追蹤。
- 本次增量沒有納入新產品；本次增量沒有移除停產產品。逐類人工新品覆核已完成，所有分類至少 20 筆；停產只採品牌官方明確證據，缺貨、反爬或單次連線錯誤不作為刪除依據。
- 圖片查核覆蓋 1133 筆；827 筆來源可由 exact model 或人工 SKU 綁定確認，306 筆來源例外與 3 筆圖片例外保留原資料。史低為 504 筆 `found`、629 筆 `not_found`，本輪異動 0 筆；141 筆來源可自動重現，其餘保留原逐筆證據且未臆測失效。
- ExchangeRate-API 最新批次為 2026-09-03 00:02 UTC，USD/TWD 31.757562；38 筆外幣商品已重算。完整摘要與例外保存在 `catalog_maintenance_latest.json`。
<!-- catalog-maintenance-summary:end -->

## 驗證清單

修改後至少檢查：

- `npm run check:syntax`：所有公開 JS 檔與維護工具可被 Node 編譯。
- `npm run check:logic`：純邏輯回歸，涵蓋排序、品牌依分類限制、史低／負評文案、問題摘要搜尋、來源 URL 安全、HTML escape 與 product-loader URL/錯誤。
- `npm run check:data`：商品總數、分類數、必要欄位、日期格式、負評逐型號人工覆核、逐位反映者與研究檔對齊、重複 URL 與重複型號檢查通過。
- `npm run check:docs`：README、AGENTS、index/config 的商品數、分類數、日期與 cache version 不漂移。
- `npm run check:geo`：37 個分類頁、1133 款靜態型號索引、metadata、結構化資料、首頁分類入口、sitemap、llms、六份公開證據檔、Pages artifact、38 個 canonical URL 的 IndexNow contract 與產生結果均無漂移。
- `npm run check:ui`：桌機與手機版主要互動流程通過。
- `npm run check:quality`：Lighthouse 的 Performance、LCP、CLS、Accessibility 與 SEO 採瀏覽器行動 throttling，TBT 採 Lantern 標準化模擬；首頁 Performance ≥ 90、LCP ≤ 2.5s、CLS ≤ 0.1、TBT ≤ 200ms、Accessibility = 100、SEO ≥ 95；代表分類頁 Performance、Accessibility、SEO 均 ≥ 95。
- 商品總數仍符合 README 與分類 tab 顯示。
- 每筆商品必要欄位齊全。
- 每筆商品皆有負評／災情查核；`product_issue_review_manifest.json` 覆蓋完整商品清單，成立警示符合 6 位獨立使用者與 2 個原始平台，且 `product_issue_research.json` 的逐人證據與商品資料逐筆對齊。
- 購買連結不重複。
- 不含福利品、瑕疵品、展示機、拆封品、二手品、整新品、配件頁或耗材頁。
- 桌機與手機版能正常搜尋、篩選、分類切換、品牌依分類限制、排序、加入比較、清除比較。
- 手機版篩選可展開與收合。
- 公開 GitHub Pages 部署後可抓到新版 `index.html`、`assets/js/config.js`、至少一個 `products/*.js`、代表性 `categories/<id>/`、`sitemap.xml`、`llms.txt` 與六份證據 JSON。

重新查價、外部連結、圖片、史低來源與匯率稽核統一使用 repo 內的 `npm run maintain:catalog`，避免依賴未納入版本控制的工作區腳本。

## Git worktree 工作流程

- 使用者明確要求「開 PR」時，只完成專用分支、PR 與 CI 驗證；未另獲要求前不 merge `main`、不部署 Pages，保留待審分支與 worktree。
- 使用者提出新的需求，或在後續聊天對話中延伸、修正同一需求時，AI 預設要自行建立專用 git worktree 與短期分支處理，不要直接在主要 branch 上開發。
- 在 worktree 內完成實作、文件、測試與必要驗證；若遇到 conflict，AI 需自行判讀並解決，解完後重新執行相關驗證。
- 完成後由 AI 自行將短期分支 merge 回主要 branch，確認主要 branch 狀態正確後再推送到 repo。
- Merge 回主要 branch 時，若需要產生 merge commit，commit message 必須寫實際完成的行為或需求摘要，例如「補查商品上市發售日期」；不可使用 `Merge branch 'codex/...'` 這類只含分支名稱、缺乏語意的預設訊息。
- Push 後需確認 GitHub Pages build 或相關部署/檢查沒有明顯問題，再回報公開頁面連結、commit hash 與驗證結果。
- 確認沒有問題後，AI 需刪除本次建立的 worktree，避免留下已完成工作的臨時目錄。
- 若使用者明確要求不要開 worktree、不要 merge、不要 push、保留 worktree，或指定其他 branch/流程，則以使用者最新指示為準。

## 發布規則

- 這是公開 GitHub Pages repo；一般需求依照上方 git worktree 流程完成後 merge 到 `main` 並 push。
- Commit message 使用繁體中文且簡短描述實際行為；包含 merge commit message，不要只寫分支名稱。
- Push 後檢查 GitHub Pages build 狀態。
- Pages 成功後檢查 IndexNow 步驟 log；它可 non-blocking 失敗，但不可忽略或把失敗誤報為成功。
- 最後回報公開頁面連結、commit hash、做了哪些驗證。
