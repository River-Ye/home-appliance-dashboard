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
- `tools/category-guides.js`：25 類導讀、選購條件與 FAQ 的人工維護來源，不放即時商品事實。
- `tools/geo-config.js`：站名、首頁 title、description、H1、AI 揭露與 GEO 共用文案契約。
- `tools/generate-category-pages.js`：依分類、商品、指南與 CSS 來源產生 `assets/css/app.css`、`categories/<id>/index.html`、`sitemap.xml`、`llms.txt` 與首頁 GEO 區塊。
- `categories/<id>/index.html`：25 個可直接閱讀與索引的靜態分類指南頁，屬產生結果。
- `tools/dashboard-contract.js`：商品數、分類數、必要欄位與資料品質規則常數。
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

- 網站由現有 25 類資料產生 25 個 `/categories/<id>/` 靜態分類指南頁；不建立 660 個重複商品事實的薄內容頁。
- `tools/category-guides.js` 只維護分類層級的繁中導讀、3 項選購條件與 3 組 FAQ；商品名稱、價格、排名、規格、史低與負評仍從既有商品資料產生，避免第二套事實來源。
- 站名、首頁 title、description、H1 與 AI 揭露集中在 `tools/geo-config.js`；首頁 metadata、JSON-LD、分類頁與 `llms.txt` 必須共用此契約。首頁與分類頁首屏皆需可見 AI 協作、資料日期、查核方法與 GitHub 原始碼。
- 修改 `assets/js/config.js` 的分類、`products/*.js` 商品或 `tools/category-guides.js` 後，必須執行 `npm run generate:categories`，再以 `npm run check:geo` 驗證產物與 contract。
- `llms.txt` 是提供網站用途、查核方法、資料限制與分類入口的補充說明，不是正式排名標準，也不保證搜尋引擎或 AI 服務收錄、排名或引用。
- Pages 必須公開六份證據 JSON：`release_date_research.json`、`historical_price_research.json`、`dimension_research.json`、`product_issue_research.json`、`product_issue_report_evidence.json`、`product_issue_review_manifest.json`。
- Pages 成功部署後才執行 IndexNow；通知為 non-blocking，失敗不得讓已完成的 Pages 部署失敗，但維護者仍需檢查 workflow log 並釐清原因。
- GEO / AI 搜尋優化不得新增 Google Analytics、Google Ads 轉換或其他追蹤，也不得衍生逐商品薄內容頁。

## 目前資料規模

- 共 25 類、660 筆商品。
- 所有分類每類至少 20 筆；新增分類或補資料時不可讓任何分類低於 20 筆。
- 特殊分類目前數量：
  - `掃拖機器人`：34 筆，需涵蓋知名品牌旗艦與次旗艦。
  - `無線路由器`：48 筆，只收 Wi-Fi 6 以上，Mesh/多 AP/商用管理支援要寫清楚。
  - `電腦螢幕`：54 筆，需涵蓋主流品牌、不同用途帶與 34/45/49/57 吋寬螢幕。
  - `懸臂支架`：21 筆，需標示支援尺寸、承重重量與是否適合 49/57 吋大寬螢幕。
  - `電子鎖`：48 筆，需涵蓋知名品牌且注意安裝條件。
  - `鍋具`：23 筆、`刀具`：21 筆、`櫥下飲水機`：21 筆、`洗碗機`：23 筆，需排除配件、耗材、桌上/直立誤判、福利品與展示機。
  - `冰箱`：23 筆、`洗衣機`：23 筆、`烘衣機`：21 筆、`洗烘衣機(多功能型)`：23 筆，需排除配件、耗材、福利品、展示機、箱損品、組合包誤判與單功能錯類，且每筆需標示機身尺寸。
  - `空氣清淨機`：22 筆，已補入 POIEMA 新氣几系列；後續若替換資料，除非無可信新品通路，需保留 POIEMA 候選。
  - `電風扇`：23 筆，已補入 Philips 風扇/循環扇/塔扇/無葉片款；後續若替換資料，除非無可信新品通路，需保留 Philips 候選。

現有分類順序需盡量維持關聯群組，方便商品數量變多後掃描：

影音：

- 電視
- Soundbar

空氣環境：

- 電風扇
- 循環扇
- 除濕機
- 空氣清淨機

清潔家務：

- 掃拖機器人
- 吸塵器

洗衣家務：

- 洗衣機
- 烘衣機
- 洗烘衣機(多功能型)

廚房餐飲：

- 冰箱
- 鍋具
- 刀具
- 破壁機
- 多功能氣炸烤箱/微波爐
- 櫥下飲水機
- 洗碗機

衛浴安全：

- 免治馬桶
- 電子鎖

工作網路：

- 無線路由器
- 升降桌
- 電腦椅
- 電腦螢幕
- 懸臂支架

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
- 不可使用來路不明網站、個人拍賣、福利品、瑕疵品、展示機、拆封品、二手品、整新品、配件頁或耗材頁當購買連結。
- 若是海外通路，必須標示未含國際運費、進口稅、電壓/插頭/變壓器與台灣保固風險。
- 電壓明顯不適合台灣者不可列為 Top Pick。
- 使用者曾要求「全網最低價」，實作上要以可信通路與同型號可查低價為準；不要為了低價改放不可信網站或非新品頁。
- 商品內容若有「排除福利/展示/拆封品」等說明文字是允許的，但商品名稱、型號與購買頁本身不能是這類商品。
- 每筆商品都必須標示 `releaseDate`，代表上市/發售日期；若可信通路或品牌頁找不到明確日期，需填「找不到」，不要用評論日期、促銷日期、上架日或型號年份猜測。
- 日期查核需保留 `release_date_research.json` 證據檔；非「找不到」項目必須有 `sourceUrl`、`sourceTitle`、`evidenceSnippet` 與 `confidence`，且 `releaseDate` 只能使用 `YYYY-MM-DD`、`YYYY-MM`、`YYYY`。
- 補查上市/發售日時，優先官方新聞稿、官方產品發表頁、官方上市/發售公告；其次才使用可信媒體/評測明確寫出的 release/launch/上市/發售文字。不可把 Google/Bing 生成式摘要、支援頁的說明書/韌體/驅動 release date、文章發布日、促銷期間、上架日、保固文件日期、購買頁庫存日期或型號年份當作上市日。
- 若搜尋結果只找到「released in 2024」這類明確年份，可填 `YYYY`；只寫月份則填 `YYYY-MM`。不要自行補月份或日期。
- 每筆商品都必須標示 `historicalLow`，代表同型號、同尺寸/容量/規格在可信新品通路可驗證的歷史最低價與入手時機判斷；若找不到可靠來源，需填 `status: "not_found"`，不要以現價推定史低。
- 歷史最低價查核需保留 `historical_price_research.json` 證據檔；`found` 項目必須有 `sourceUrl`、`sourceTitle`、`evidenceSnippet`、`amount`、`currency`、`converted`、`sourceKind`、`confidence` 與 `checkedAt`，`not_found` 項目必須寫明查核說明。
- 歷史最低價來源排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、拆封品、整新品、配件頁或耗材頁；海外史低需在 `note` 標示未含國際運費、進口稅、電壓/插頭與台灣保固風險。
- 每筆商品都必須有 `issueResearch`。同一問題只有在完全相同型號、至少 6 位可辨識的獨立使用者、且跨至少 2 個原始網站時，才能標為 `common_issue`；同帳號重複留言、跨站轉貼、按讚、搜尋摘要、媒體轉述與系列相近型號均不得計入人數。
- 未達門檻使用 `no_common_issue`，文案固定為「截至查核日，查無達門檻的集中負評／災情」，不可寫成完全沒有負評。每次查核需保留至少兩個平台的查詢入口，完整查詢、候選、排除原因、作者與摘錄保存在 `product_issue_research.json`。
- 搜尋引擎只能用於發現候選；成立的災情必須回到原始論壇、品牌社群或可信零售評價頁核對 exact model、第一人稱回報、作者與 permalink。來源層保留證據摘錄；每位計入者需在 `product_issue_report_evidence.json` 與 research evidence `reports[]` 顯式留下作者、原文連結、可重現頁面定位、非模板化的逐人 `evidenceExcerpt`、人工覆核註記、exact-model 與第一人稱確認；不可由作者陣列自動預設布林值，也不可用來源層彙總摘要代替逐人判讀。跨站轉貼用相同 `crossPostKey` 去重。
- `no_common_issue` 不得由批次搜尋自動推定。逐型號完成跨站人工覆核後，需用顯式 audit batch 加入 `product_issue_review_manifest.json`，每筆保存 decision、至少兩組包含 canonical model 的 exact-model query、可由 query URL 還原的查詢字串、實際 `targetHost`、候選處置與 reviewer note；獨立網站數以 target/source 的 canonical website 計算，`old.reddit.com` 與 `reddit.com` 只能算同一站。有原頁候選時使用 `manual_original_pages_reviewed` attestation，跨站查詢確實沒有 exact-model 候選時則誠實使用 `manual_cross_site_search_reviewed_no_candidate`。每個經型號邊界過濾後的搜尋候選還需在 `candidateReviews[]` 保存 URL、原頁摘要、獨立作者數與具體排除理由。marker 不得依分類或 ID 自動填決策，research 工具也不得自行產生候選拒絕理由。`tools/research-product-issues.js --apply` 遇到任何不完整或尚未覆核商品必須拒絕寫回商品檔。
- 大量更新商品檔時仍需維持 `products/*.js` 逐分類獨立，不要把商品資料塞回 `assets/js/*.js`。

## 特別分類規則

### 掃拖機器人

- 必須涵蓋知名品牌的旗艦與次旗艦機種。
- 已納入品牌包含 Roborock、ECOVACS、Dreame、Narwal、iRobot、eufy、MOVA、LG、Shark、Dyson。
- 台灣未穩定販售的海外旗艦可作海外參考，但不要列為台灣 Top Pick。
- 推薦理由要綜合 CP 值、清潔能力、評價口碑、價格與售後風險。

### 無線路由器

- 分類名稱使用「無線路由器」，不要改回「Wi-Fi 分享機」。
- 只找 Wi-Fi 6、Wi-Fi 6E、Wi-Fi 7 或以上。
- 若支援 Mesh、EasyMesh、AiMesh、Deco Mesh、Velop、Orbi、AQUILA PRO AI Mesh 等，必須在規格或說明中明確寫出。
- Aruba Instant On、UniFi 等商用/Prosumer AP 可以納入，但必須明確寫出它們不是一般家用一體式 NAT 分享器，通常需既有 Gateway/路由器、PoE 供電與品牌控制器/管理 App。
- 使用者預期可能買 2-3 台串接，所以 Mesh 套組與單台 Mesh 擴充能力都要好比較。
- 不要把網卡、延伸器、中繼器、交換器誤列為路由器。

### 電視

- 若有支援手機無線投影，需在規格中寫出，例如 AirPlay、Chromecast、Miracast、SmartThings/Tap View。
- 若通路頁或品牌頁未明確標示手機投影能力，不要猜測；需寫「手機投影：通路頁未標示」。

### 多功能氣炸烤箱/微波爐

- 以家電櫃空間有限的多合一機型為主。
- 可包含水波爐、蒸烤爐、氣炸微波、氣炸烤箱等，但要說明容量與功能取捨。

### 電子鎖

- 至少 30 筆以上，現有 48 筆。
- 需涵蓋知名品牌與台灣可安裝/可購買品牌。
- 說明要提醒門厚、門向、鎖體、天地栓、基本安裝與加價項目。

### 電腦螢幕

- 至少 30 筆以上，現有 54 筆。
- 需涵蓋 ASUS、Acer、BenQ、LG、Dell、Samsung、MSI、GIGABYTE、ViewSonic、AOC、Philips、EIZO、Xiaomi 等主流品牌。
- 要混合入門 FHD、2K 高刷新、4K/USB-C、生產力、OLED、Mini LED、專業色彩等用途。
- 必須涵蓋寬螢幕/超寬螢幕，例如 34 吋 21:9、45 吋 OLED、49 吋 32:9、57 吋 Dual UHD 等；描述要提醒桌深、顯卡與支架承重。
- 每筆需在規格中寫出螢幕重量；優先使用不含底座/僅面板/VESA 掛載重量。若通路與品牌頁未明確標示，需寫「重量：未標示」並避免猜測。

### 升降桌

- 每筆需在規格中寫出桌板厚度。
- 若查不到桌板厚度，需寫「桌板厚度：未標示」，不可留白或猜測。

### 懸臂支架

- 每筆需標示支援尺寸與承重重量，例如 8kg、15kg、20kg、27kg、30kg。
- 若支援 49/57 吋大寬螢幕或 Odyssey G9 類大型曲面螢幕，必須在規格與推薦理由中明確寫出。
- 低承重款，例如 8kg 或 9kg，一定要註明不建議用於 34 吋以上寬螢幕或 49/57 吋超寬大螢幕。
- 推薦理由要提醒 VESA 規格、桌板厚度、夾桌/穿桌、實際螢幕重量不含腳架、以及大型螢幕安裝最好兩人操作。

### 鍋具 / 刀具 / 櫥下飲水機 / 洗碗機

- 每類至少 20 筆；若未來擴充，仍需維持可信通路新品。
- 鍋具不可把鍋蓋旋鈕、把手、配件或食譜誤列為商品。
- 刀具只收廚房刀具，不可把刮鬍刀、美體刀、刀架或磨刀配件誤列為商品。
- 櫥下飲水機需以廚下/櫥下淨水、RO、瞬熱/冷熱系統為主；桌上型、直立型、全戶式或單純濾心耗材不要列入。
- 洗碗機需標示容量、安裝型式與電壓/進排水注意事項；220V 或嵌入式機型不可列為低門檻 Top Pick。

### 冰箱 / 洗衣機 / 烘衣機 / 洗烘衣機

- 每類至少 20 筆；只收可信通路新品，排除福利品、展示機、拆封品、二手品、整新品、箱損品、配件、耗材、底座、疊架與錯類組合包。
- 每筆需在規格中標示機身尺寸，格式使用「尺寸：寬 N x 深 N x 高 N cm」；若購買頁沒有尺寸，需改查品牌官網、官方規格 PDF 或可信通路頁，不可用包裝/外箱尺寸代替。
- 若查不到機身尺寸，需寫「尺寸：未標示」並在 `dimension_research.json` 記錄查核來源與找不到的原因；不可留白或猜測。
- 冰箱需標示容量、門型、變頻/節能標示、電壓與大型家電搬運、門寬、舊機回收等注意事項；不要把電視+冰箱組合包、酒櫃、冰櫃或冰箱配件列入。
- 洗衣機需標示洗衣容量、直立/滾筒形式、變頻/溫水等明確功能，以及進排水、插座、門向與地面水平注意事項；不可把洗脫烘誤列為單洗洗衣機。
- 烘衣機需標示乾衣容量、熱泵/瓦斯/電熱/冷凝方式、電壓或瓦斯條件、排風/排水與疊放限制；不可把洗脫烘、除濕機、曬衣架或底座列入。
- 洗烘衣機(多功能型)需明確標示洗/乾容量，格式使用「洗/乾容量：17kg / 10kg」；若商品頁未寫清楚，需改查品牌官網或可信通路規格圖，不可只寫總容量或猜測乾衣容量。並需標示熱泵/冷凝/蒸氣/自動投入等功能；推薦理由要提醒乾衣容量通常小於洗衣容量、全程洗烘時間較長與維修成本風險。

## UI / UX 規則

- 桌機與手機版操作體驗都要重視。
- 最上方 header 內容需與 body 主內容同寬對齊，不可滿版貼邊後和下方錯位。
- 搜尋與篩選控制要支援手動 key 關鍵字找選項，避免選項太多難找。
- 選擇「分類」後，「品牌」選項只顯示該分類實際存在的品牌，不可顯示無關品牌。
- 排序控制必須支援推薦排序、價格升冪/降冪、分數升冪/降冪、`上市 / 發售日期` 升冪/降冪；日期找不到的商品在日期排序時應排在最後。
- 分類 tabs 需把相關品類放在一起；目前分為影音、空氣環境、清潔家務、洗衣家務、廚房餐飲、衛浴安全、工作網路。
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

## 價格與匯率

- 頁面目前標示主要資料擷取日為 2026-07-14；本輪已全量重查 660 筆可信新品價格與購買連結，台灣商品優先台灣可信通路，16 筆海外商品才比較海外通路。好市多補充資料查核日為 2026-07-14，目前好市多/Costco 候選共 64 筆，每類最多 3 筆。
- 2026-07-14 清晨定期查核更新 49 筆價格（21 筆降價、28 筆漲價）、10 筆購買連結與 1 張來源圖片，並將 Raymii LS-104-M1 可公開驗證的史低下修至 NT$2,849；660 張圖片與 438 筆既有 `found` 史低來源均可連線。8 筆 Yahoo 售罄頁已切換到同型號 PChome 現貨頁，Dyson Spot+Scrub Ai 與 Marshall Heston 60 已切換到 Best Buy 現貨頁；其餘 25 筆 PChome 暫時缺貨商品保留追蹤。TOJIRO Black Zen 165mm 因名稱與既有 FD-1563 180mm 牛刀頁不一致且找不到可信同型號新品頁而移除，刀具仍有 21 筆。HERAN HDF-16S6(S) 仍在禾聯官方頁，未找到可支持移除的官方停產證據。新品搜尋未發現需立即納入者，各分類仍至少 20 筆。
- 2026-07-13 晚間定期查核更新 55 筆價格（19 筆降價、36 筆漲價）、3 筆失效購買來源與圖片、5 筆史低；661 張圖片與原有 437 筆 `found` 史低來源均可連線，另新增 1 筆可重現的 Sony 裸機史低。25 筆 PChome 與 9 筆其他通路暫時缺貨商品保留追蹤，未找到可支持移除的官方停產證據；各分類仍至少 20 筆。
- 本輪負評補查重跑 612 筆原先完全沒有負面候選的商品；36 筆既有 `common_issue` 與 13 筆已有少量負面證據者保留原研究內容，未重新搜尋。
- 2026-07-13 六商品精查另更新 3 筆價格與 3 筆購買連結；HERAN HDF-16S6 查無可購新品，PChome NT$1,480 只保留為明示售罄的追蹤價。IRIS PCF-SC15T 因既有 `common_issue` 未重搜，其餘 5 筆重新查詢並逐頁覆核 11 個候選，均未新增達門檻的集中負評。
- 外幣匯率來源目前為 ExchangeRate-API；2026-07-14 07:04（UTC+8）重查時最新資料仍為 2026-07-13 00:02 UTC，尚未發布下一批匯率，因此數值不變。
- 外幣商品顯示原幣與 TWD 換算價，且要註明未含國際運費、進口稅與台灣保固。
- 若重新查價，請同步更新擷取日期、匯率日期與相關文案。

## 驗證清單

修改後至少檢查：

- `npm run check:syntax`：所有公開 JS 檔與維護工具可被 Node 編譯。
- `npm run check:logic`：純邏輯回歸，涵蓋排序、品牌依分類限制、史低／負評文案、問題摘要搜尋、來源 URL 安全、HTML escape 與 product-loader URL/錯誤。
- `npm run check:data`：商品總數、分類數、必要欄位、日期格式、負評逐型號人工覆核、逐位反映者與研究檔對齊、重複 URL 與重複型號檢查通過。
- `npm run check:docs`：README、AGENTS、index/config 的商品數、分類數、日期與 cache version 不漂移。
- `npm run check:geo`：25 個分類頁、metadata、結構化資料、首頁分類入口、sitemap、llms、六份公開證據檔、Pages artifact、IndexNow contract 與產生結果均無漂移。
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

若需重新查價或外部連結稽核，可使用 Codex 原工作區的 `work/audit_product_sources.js`、`work/audit_pchome_prices.js`、`work/audit_links_prices_duplicates.js` 等輔助腳本；公開 repo 內的 `tools/*.js` 負責不需外網的日常維護檢查。

## Git worktree 工作流程

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
