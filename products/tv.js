(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("tv", [
  {
    "id": "tv-lg-c5-65",
    "category": "tv",
    "rank": 1,
    "topPick": true,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "OLED65C5PTA",
    "name": "65 型 OLED evo C5 4K 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 49618,
      "converted": 49618,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADYE1900JG394/000001_1762971547.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADYE-A900JC4MY",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED evo",
      "4K 120Hz",
      "webOS",
      "HDMI 2.1 / VRR",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "OLED 黑位、遊戲規格與串流支援都完整，是客廳主電視的穩健高階選擇。",
    "pros": [
      "畫質與遊戲支援完整",
      "台灣通路與保固清楚"
    ],
    "cons": [
      "明亮客廳抗反光不如高階 Mini LED",
      "價格高於 QLED/Mini LED"
    ],
    "bestFor": "重視電影、遊戲與長期保固的主客廳。",
    "recommendation": "綜合推薦：LG C5 評測口碑穩，OLED 畫質、遊戲功能、台灣售後與價格落點最均衡。",
    "score": 94,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "OLED",
      "遊戲",
      "電影"
    ],
    "releaseDate": "2025-03-11",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-11",
      "note": "未找到台灣型號 OLED65C5PTA 可公開驗證的可信新品史低；已排除 Amazon 美國版 65 吋 C5，因區域 SKU 並非完全相同型號。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG OLED65C5PTA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22LG%20OLED65C5PTA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG OLED65C5PTA\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22LG%20OLED65C5PTA%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-samsung-s90f-65",
    "category": "tv",
    "rank": 2,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "QA65S90FAEXZW",
    "name": "65 型 S90F OLED 4K 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 51900,
      "converted": 51900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADEW1900K4WRT/000001_1782056882.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADEW-A900IUE7F",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "4K 144Hz",
      "Tizen",
      "四組 HDMI 2.1",
      "手機投影：AirPlay / SmartThings/Tap View"
    ],
    "description": "以同級 OLED 來看售價很有攻擊性，遊戲與亮度表現強，但不支援 Dolby Vision。",
    "pros": [
      "OLED 價格漂亮",
      "遊戲規格強"
    ],
    "cons": [
      "無 Dolby Vision",
      "內建音響仍建議搭 Soundbar"
    ],
    "bestFor": "遊戲玩家與偏好 Samsung 生態系的人。",
    "recommendation": "若預算有限又想進 OLED，這台比多數同尺寸 OLED 更有 CP 值。",
    "score": 92,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "OLED",
      "CP 值",
      "遊戲"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-11",
      "note": "未找到台灣型號 QA65S90FAEXZW 可公開驗證的可信新品史低；已排除 Amazon 美國版 S90F，因來源只證明同系列 65 吋而非完全相同區域 SKU。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung QA65S90FAEXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Samsung%20QA65S90FAEXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung QA65S90FAEXZW\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Samsung%20QA65S90FAEXZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-sony-bravia7-65",
    "category": "tv",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sony",
    "model": "Y-65XR70",
    "name": "BRAVIA 7 65 型 Mini LED 4K Google TV",
    "price": {
      "currency": "TWD",
      "amount": 53910,
      "converted": 53910,
      "confidence": "PChome 2026-07-18 UTC API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADFNA900K7VQ8/000001_1784011502.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADFN-A900K7VQ8",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "XR 處理器",
      "4K 120Hz",
      "Google TV",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "Sony 影像處理與動態補償穩定；原 2.1 聲霸組合頁失效後，改採同型號可購裸機，聲霸可依需求另行選購。",
    "pros": [
      "影像處理自然",
      "Mini LED 亮度適合明亮空間"
    ],
    "cons": [
      "價格高於同尺寸國產/中階品牌",
      "遊戲規格不如 OLED 激進"
    ],
    "bestFor": "看電影、運動賽事與串流內容多的家庭。",
    "recommendation": "想避開 OLED 烙印疑慮、又要高階影像處理時可優先看這台。",
    "score": 90,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "Mini LED",
      "電影",
      "台灣通路"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 51970,
      "currency": "TWD",
      "converted": 51970,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1271767502&cgp=51970",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【SONY 索尼】Y-65XR70 65吋 Mini LED Google TV 液晶顯示器(含基本安裝)",
      "evidenceSnippet": "LBJ 比價頁顯示 Momo 店+ 的 Y-65XR70 裸機含基本安裝為 NT$51,970，歷史頁 price_data 於 2026-07-13 仍記錄同額。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-13",
      "note": "原目錄是電視加聲霸套裝時因規格不同排除；2026-07-13 改為同型號裸機後，LBJ 的裸機含基本安裝歷史已符合目錄契約。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony Y-65XR70\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Sony%20Y-65XR70%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony Y-65XR70\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Sony%20Y-65XR70%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-lg-c6-65",
    "category": "tv",
    "rank": 4,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "OLED65C6PTA",
    "name": "65 型 OLED evo C6 4K 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 79900,
      "converted": 79900,
      "confidence": "momo購物 2026-07-16 商品頁公開價"
    },
    "image": "https://i6.momoshop.com.tw/1781278602/goodsimg/TP000/9148/0000/554/TP00091480000554_L.webp",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0009148/goodsDetail/TP00091480000554",
    "buyLabel": "momo購物",
    "specs": [
      "65 吋 OLED evo",
      "4K 120Hz / VRR 最高 165Hz",
      "第三代 α11 AI 4K 處理器",
      "webOS 26",
      "重量：16.6kg（不含底座）",
      "手機投影：Apple AirPlay / Google Cast"
    ],
    "description": "新一代 C 系列把 α11 處理器與最高 165Hz VRR 帶入主流 OLED，兼顧電影黑位、遊戲與智慧平台。",
    "pros": [
      "OLED 黑位與 Dolby Vision 電影表現完整",
      "最高 165Hz VRR，遊戲規格比 C5 再提升"
    ],
    "cons": [
      "上市初期價格明顯高於折扣中的 C5",
      "內建 40W 2.2 聲道，劇院低頻仍建議外接音響"
    ],
    "bestFor": "希望購買最新一代 LG OLED，並同時重視電影、PC 高更新率遊戲與台灣售後的人。",
    "recommendation": "C6 是 2026 年值得納入的新世代 OLED 代表；若預算優先仍可選 C5，追求最新處理器與高更新率則選 C6。",
    "score": 93,
    "voltage": "110V / 60Hz 台灣公司貨",
    "warranty": "2 年台灣原廠保固",
    "tags": [
      "OLED",
      "165Hz",
      "Dolby Vision",
      "遊戲"
    ],
    "releaseDate": "2026-07-08",
    "historicalLow": {
      "status": "found",
      "amount": 49618,
      "currency": "TWD",
      "converted": 49618,
      "sourceUrl": "https://biggo.com.tw/s/LG%20OLED65C6PTA/",
      "sourceTitle": "BigGo 歷史價格：LG OLED65C6PTA 65 吋 OLED evo C6 智慧顯示器",
      "evidenceSnippet": "BigGo 歷史價格顯示環球 Online 同型號新品最低價為 NT$49,618，2026-06-22 至 06-26 間共記錄 6 次。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-18",
      "note": "採用 BigGo 可公開查核的價格歷史；同型號／規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。原商品頁：https://gmonline.twglobalmall.com/product/2EC0320420000799"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-16",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG OLED65C6PTA\" (災情 OR 問題 OR 故障 OR 負評)",
          "targetHost": "mobile01.com",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20OLED65C6PTA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG OLED65C6PTA\" (problem OR issue OR defect OR \"negative review\")",
          "targetHost": "reddit.com",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20OLED65C6PTA%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)"
        }
      ]
    }
  },
  {
    "id": "tv-sony-xr90m2-65",
    "category": "tv",
    "rank": 5,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sony",
    "model": "Y-65XR90M2",
    "name": "BRAVIA 9 II 65 型 RGB LED 4K Google TV",
    "price": {
      "currency": "TWD",
      "amount": 108323,
      "converted": 108323,
      "confidence": "Yahoo購物中心 2026-07-18 商品頁公開價"
    },
    "image": "https://img.yec.tw/zp/MerchandiseImages/F326F9F0C5-SP-23019953.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/%E5%90%AB%E6%A8%99%E6%BA%96%E5%AE%89%E8%A3%9D-SONY%E7%B4%A2%E5%B0%BC65%E5%90%8B%E5%90%8BRGB-4K%E9%80%A3%E7%B6%B2%E6%99%BA%E6%85%A7%E9%A1%AF%E7%A4%BA%E5%99%A8Y-65XR90M2-12159450.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "65 吋 4K RGB LED / 區域控光",
      "原生 120Hz",
      "RGB TRILUMINOS Max / RGB Backlight Master Drive Pro",
      "4K120 / VRR / ALLM / eARC",
      "Google TV",
      "重量：26.6kg（不含底座）",
      "手機投影：Apple AirPlay 2 / Google Cast"
    ],
    "description": "Sony 2026 旗艦 RGB 背光機種，以獨立控制三原色提升亮度、色彩體積與高亮場景純度。",
    "pros": [
      "RGB LED 背光兼顧高亮度與廣色域",
      "Sony 影像處理、動態與電影調校完整"
    ],
    "cons": [
      "65 吋售價超過十萬元，入手門檻高",
      "VRR 遊戲規格集中於 HDMI 3、4"
    ],
    "bestFor": "明亮大客廳、HDR 電影與希望避開 OLED 烙印疑慮的高階影音使用者。",
    "recommendation": "BRAVIA 9 II 是 2026 年最具差異化的新電視之一，RGB 背光技術足以構成獨立候選，而非僅是例行小改款。",
    "score": 92,
    "voltage": "110V / 60Hz 台灣公司貨",
    "warranty": "2 年台灣原廠保固",
    "tags": [
      "RGB LED",
      "旗艦",
      "高亮度",
      "Google TV"
    ],
    "releaseDate": "2026-06-17",
    "historicalLow": {
      "status": "found",
      "amount": 103908,
      "currency": "TWD",
      "converted": 103908,
      "sourceUrl": "https://biggo.com.tw/s/Sony%20Y-65XR90M2/",
      "sourceTitle": "BigGo 歷史價格：SONY Y-65XR90M2 65 吋 RGB 4K 顯示器",
      "evidenceSnippet": "BigGo 歷史價格顯示環球 Online 同型號含標準安裝新品最低價為 NT$103,908。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-18",
      "note": "採用 BigGo 可公開查核的價格歷史；同型號／規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。原商品頁：https://gmonline.twglobalmall.com/product/2EC0320850014762"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-16",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony Y-65XR90M2\" (災情 OR 問題 OR 故障 OR 負評)",
          "targetHost": "mobile01.com",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sony%20Y-65XR90M2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony Y-65XR90M2\" (problem OR issue OR defect OR \"negative review\")",
          "targetHost": "reddit.com",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sony%20Y-65XR90M2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)"
        }
      ]
    }
  },
  {
    "id": "tv-samsung-s95h-65",
    "category": "tv",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "QA65S95HAXXZW",
    "name": "65 型 S95H OLED 4K Vision AI 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 109900,
      "converted": 109900,
      "confidence": "PChome 2026-07-16 API 公開價"
    },
    "image": "https://img.pchome.com.tw/cs/items/DPADO2A900K6OWZ/000001_1783614430.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADO2-A900K6OWZ",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 4K OLED / 最高 165Hz VRR",
      "抗反光真星黑面板",
      "NQ4 AI 第三代處理器 / OLED HDR Pro",
      "4.2.2 聲道 70W / Dolby Atmos",
      "重量：20.9kg（不含底座）",
      "手機投影：Smart View / Apple AirPlay / Google Cast"
    ],
    "description": "Samsung 2026 旗艦 OLED，以 165Hz 遊戲、抗反光面板、AI 影像處理與 70W 音響拉開和 S90F 的定位。",
    "pros": [
      "OLED 對比搭配抗反光面板，明亮環境適應性較佳",
      "165Hz VRR 與 70W 4.2.2 聲道規格完整"
    ],
    "cons": [
      "旗艦上市價高，CP 值不如折扣中的 S90F",
      "第三方訊源需確認 HDR10+ 與高更新率相容性"
    ],
    "bestFor": "偏好 Samsung 生態系、白天客廳觀看與高更新率 PC 遊戲的高階使用者。",
    "recommendation": "S95H 是 Samsung 2026 OLED 旗艦，抗反光、165Hz 與高功率音響都有實質升級，值得和 C6、BRAVIA 9 II 同列新機比較。",
    "score": 92,
    "voltage": "AC 100-240V / 50-60Hz",
    "warranty": "台灣公司貨；期限依 Samsung 台灣原廠條款",
    "tags": [
      "OLED",
      "165Hz",
      "抗反光",
      "旗艦"
    ],
    "releaseDate": "2026-06-08",
    "historicalLow": {
      "status": "found",
      "amount": 109900,
      "currency": "TWD",
      "converted": 109900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1284236737&cgp=109900",
      "sourceTitle": "LBJ 歷史價格：Samsung QA65S95HAXXZW OLED 4K Vision AI 智慧顯示器",
      "evidenceSnippet": "LBJ 的 PChome 同型號價格歷史於 2026-06-16、07-07、07-16 均記錄 NT$109,900。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-16",
      "note": "採完全相同台灣型號新品公開價；未扣除信用卡、點數或會員回饋。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-16",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung QA65S95HAXXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "targetHost": "mobile01.com",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20QA65S95HAXXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung QA65S95HAXXZW\" (problem OR issue OR defect OR \"negative review\")",
          "targetHost": "reddit.com",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20QA65S95HAXXZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)"
        }
      ]
    }
  },
  {
    "id": "tv-hisense-u7n-65",
    "category": "tv",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "Hisense",
    "model": "65U7N",
    "name": "65 型 U7 Mini LED ULED 4K Google TV",
    "price": {
      "currency": "TWD",
      "amount": 28799,
      "converted": 28799,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD98A900I5166/000001_1733391621.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD98-A900JV2CC",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K 144Hz",
      "Google TV",
      "雙杜比",
      "手機投影：AirPlay"
    ],
    "description": "Mini LED、144Hz 與 Google TV 以三萬出頭入手，CP 值很突出。",
    "pros": [
      "規格對價格很滿",
      "適合明亮客廳"
    ],
    "cons": [
      "品牌售後與調校口碑不如日韓高階",
      "音質普通"
    ],
    "bestFor": "預算三萬上下、想要大尺寸與高亮度的人。",
    "recommendation": "本類 CP 值推薦：畫面規格給得足，省下預算可補 Soundbar。",
    "score": 88,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "Mini LED",
      "CP 值",
      "144Hz"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 28159,
      "currency": "TWD",
      "converted": 28159,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1261089769&cgp=31999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Hisense】65型 4K 原生144Hz QD MiniLED AirPlay2 雙杜比連網液晶電視(65U7N)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Hisense】65型 4K 原生144Hz QD MiniLED AirPlay2 雙杜比連網液晶電視(65U7N)」最低價為 NT$28,159，最低點日期 2026-04-11。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Hisense 65U7N\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Hisense%2065U7N%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Hisense 65U7N\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Hisense%2065U7N%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-benq-e65-760",
    "category": "tv",
    "rank": 8,
    "budget": "value",
    "channel": "tw",
    "brand": "BenQ",
    "model": "E65-760",
    "name": "65 型 4K 120Hz 量子點護眼 Google TV",
    "price": {
      "currency": "TWD",
      "amount": 24900,
      "converted": 24900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD0O1900IEK5W/000001_1761401167.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD0O-1900IEK5W",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 QLED",
      "4K 120Hz DLG",
      "Google TV",
      "護眼模式",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "台灣品牌、價格好入手，適合非發燒級的家庭客廳或主臥。",
    "pros": [
      "價格親民",
      "護眼與本地品牌售後加分"
    ],
    "cons": [
      "不是 Mini LED/OLED",
      "極暗或 HDR 場景層次有限"
    ],
    "bestFor": "預算有限、重視大尺寸與基本智慧功能。",
    "recommendation": "若預算要壓在 2.5 萬左右，這台是穩健的大尺寸選擇。",
    "score": 84,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "QLED",
      "大尺寸",
      "本地品牌"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 21900,
      "currency": "TWD",
      "converted": 21900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1242121677&cgp=22900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：BenQ明基65吋QLED 4K連網智慧顯示器E65-760 無安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / BenQ明基65吋QLED 4K連網智慧顯示器E65-760 無安裝」最低價為 NT$21,900，最低點日期 2026-06-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"BenQ E65-760\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22BenQ%20E65-760%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"BenQ E65-760\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22BenQ%20E65-760%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-6-dpad06-a900hlbjo",
    "category": "tv",
    "rank": 9,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sony",
    "model": "Y-65XR80",
    "name": "BRAVIA 8 65 型 XR OLED 4K HDR Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 84510,
      "converted": 84510,
      "confidence": "PChome 2026-07-18 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD06A900HLBJO/000001_1776334113.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD06-A900HLBJO",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "4K HDR Google TV",
      "XR 影像處理",
      "高階 OLED",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "Sony Y-65XR80 是電視類的補充比較型號，依 2026-07-17 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "電影",
      "旗艦"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 80500,
      "currency": "TWD",
      "converted": 80500,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1260955857&cgp=83710",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【SONY 索尼】Y-65XR80 65吋 BRAVIA 8 4K HDR OLED 智慧液晶顯示器 (含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【SONY 索尼】Y-65XR80 65吋 BRAVIA 8 4K HDR OLED 智慧液晶顯示器 (含基本安裝)」最低價為 NT$80,500，最低點日期 2026-01-30。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sony Y-65XR80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Sony%20Y-65XR80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sony Y-65XR80\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Sony%20Y-65XR80%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-7-dpadye-1900jgoya",
    "category": "tv",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "OLED65G5PTA",
    "name": "65 型 OLED evo G5 零間隙藝廊系列 4K 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 71910,
      "converted": 71910,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADYE1900JGOYA/000001_1778348657.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADYE-A900JFBEC",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED evo",
      "4K 120Hz",
      "零間隙藝廊設計",
      "AI 物聯網智慧顯示器",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "LG OLED65G5PTA 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "藝廊",
      "旗艦"
    ],
    "releaseDate": "2025-01",
    "historicalLow": {
      "status": "found",
      "amount": 62521,
      "currency": "TWD",
      "converted": 62521,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1250629133&cgp=69618",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：LG樂金 OLED65G5PTA 65 吋 OLED evo AI 4K 智慧顯示器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / LG樂金 OLED65G5PTA 65 吋 OLED evo AI 4K 智慧顯示器」最低價為 NT$62,521，最低點日期 2026-04-15。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG OLED65G5PTA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22LG%20OLED65G5PTA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG OLED65G5PTA\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22LG%20OLED65G5PTA%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-8-dpad09-a900j9faz",
    "category": "tv",
    "rank": 11,
    "budget": "premium",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "TV-65Z90BGT",
    "name": "65 型 OLED 智慧聯網顯示器",
    "price": {
      "currency": "TWD",
      "amount": 67977,
      "converted": 67977,
      "confidence": "PChome 2026-07-18 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD09A900J9FAZ/000001_1761888394.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD09-A900J9FAZ",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "智慧聯網",
      "4K",
      "日本品牌調校",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "Panasonic TV-65Z90BGT 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "電影",
      "均衡"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "found",
      "amount": 65032,
      "currency": "TWD",
      "converted": 65032,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1274320953&cgp=71010",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Panasonic 國際牌】65型OLED 4K連網智慧顯示器不含視訊盒(TV-65Z90BGT)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Panasonic 國際牌】65型OLED 4K連網智慧顯示器不含視訊盒(TV-65Z90BGT)」最低價為 NT$65,032，最低點日期 2026-05-24。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic TV-65Z90BGT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Panasonic%20TV-65Z90BGT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic TV-65Z90BGT\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Panasonic%20TV-65Z90BGT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-9-dpadik-a900hjgf2",
    "category": "tv",
    "rank": 12,
    "budget": "premium",
    "channel": "tw",
    "brand": "Philips",
    "model": "65OLED809",
    "name": "65 型 4K 144Hz VRR OLED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 79900,
      "converted": 79900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADIKA900HJGF2/000001_1782900149.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADIK-A900HJGF2",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "4K 144Hz",
      "VRR",
      "Google TV",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "Philips 65OLED809 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "遊戲",
      "Google TV"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 74900,
      "currency": "TWD",
      "converted": 74900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1250838362&cgp=74900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)飛利浦65吋OLED連網智慧顯示器65OLED809 無安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)飛利浦65吋OLED連網智慧顯示器65OLED809 無安裝」最低價為 NT$74,900，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips 65OLED809\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Philips%2065OLED809%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips 65OLED809\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Philips%2065OLED809%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-10-dmbm10-a900ixjzg",
    "category": "tv",
    "rank": 13,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "QA65S95FAXXZW",
    "name": "65 型 OLED 4K Vision AI 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 94900,
      "converted": 94900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM10A900IXJZG/000001_1772871053.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM10-A900IXJZG",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "Vision AI",
      "4K",
      "高階 S95F 系列",
      "手機投影：AirPlay / SmartThings/Tap View"
    ],
    "description": "Samsung QA65S95FAXXZW 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "高亮度",
      "旗艦"
    ],
    "releaseDate": "2025-04-10",
    "historicalLow": {
      "status": "found",
      "amount": 79360,
      "currency": "TWD",
      "converted": 79360,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272035063&cgp=94900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【Samsung 三星】QA65S95FAXXZW 65 吋 OLED 4K AI 智慧顯示器 (含基本桌上安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【Samsung 三星】QA65S95FAXXZW 65 吋 OLED 4K AI 智慧顯示器 (含基本桌上安裝)」最低價為 NT$79,360，最低點日期 2026-03-24。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung QA65S95FAXXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Samsung%20QA65S95FAXXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung QA65S95FAXXZW\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Samsung%20QA65S95FAXXZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-11-dpadzm-a900k3904",
    "category": "tv",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "TCL",
    "model": "65C8L",
    "name": "65 型 4K SQD-Mini LED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 56990,
      "converted": 56990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADZMA900K3904/000001_1780907613.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADZM-A900K3904",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K",
      "Google TV",
      "量子點背光",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "TCL 65C8L 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "Google TV",
      "客廳"
    ],
    "releaseDate": "2026-05-05",
    "historicalLow": {
      "status": "found",
      "amount": 52000,
      "currency": "TWD",
      "converted": 52000,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282918688&cgp=52000",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【TCL】65C8L 65吋miniLED 4K連網智慧顯示器 (含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【TCL】65C8L 65吋miniLED 4K連網智慧顯示器 (含基本安裝)」最低價為 NT$52,000，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TCL 65C8L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22TCL%2065C8L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TCL 65C8L\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22TCL%2065C8L%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-12-dpadzm-a900k2rgj",
    "category": "tv",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "TCL",
    "model": "65A400M",
    "name": "65 型 4K QD-Mini LED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 30990,
      "converted": 30990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADZMA900K2RGJ/000001_1780552782.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADZM-A900K2RGJ",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 QD-Mini LED",
      "4K",
      "Google TV",
      "中階價格帶",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "TCL 65A400M 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "CP 值",
      "串流"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 28600,
      "currency": "TWD",
      "converted": 28600,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282835720&cgp=28600",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【TCL】65A400M 65吋miniLED 4K超薄連網智慧顯示器 (含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【TCL】65A400M 65吋miniLED 4K超薄連網智慧顯示器 (含基本安裝)」最低價為 NT$28,600，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TCL 65A400M\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22TCL%2065A400M%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TCL 65A400M\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22TCL%2065A400M%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-13-dpadbu-1900jc97w",
    "category": "tv",
    "rank": 16,
    "budget": "value",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "S Pro Mini 65 2026",
    "name": "65 型 4K Mini LED 144Hz Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 26999,
      "converted": 26999,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADBU1900JC97W/000001_1761379704.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADBU-A900JMIS1",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K 144Hz",
      "Google TV",
      "智慧聯網",
      "手機投影：AirPlay / Chromecast / Miracast"
    ],
    "description": "Xiaomi S Pro Mini 65 2026 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "遊戲",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 20999,
      "currency": "TWD",
      "converted": 20999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1262452291&cgp=25999",
      "sourceTitle": "LBJ 比價撿便宜歷史價格：Xiaomi 小米 S Pro Mini LED 2026 65 型智慧顯示器",
      "evidenceSnippet": "LBJ price_data contains 2026-03-03 at NT$20,999 for the exact-match Yahoo購物中心 product.",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "已由 worker 查核 BigGo、FindPrice、LBJ、Yahoo 與 PChome；採 LBJ Yahoo購物中心 exact-match 商品歷史低點 2026-03-03 NT$20,999。排除會員券、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Xiaomi S Pro Mini 65 2026\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Xiaomi%20S%20Pro%20Mini%2065%202026%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Xiaomi S Pro Mini 65 2026\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Xiaomi%20S%20Pro%20Mini%2065%202026%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-14-dpadew-1900jpy1s",
    "category": "tv",
    "rank": 17,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "QA65QN900FXXZW",
    "name": "65 型 8K Neo QLED 165Hz Mini LED AI 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 89910,
      "converted": 89910,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADEW1900JPY1S/000001_1770558909.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADEW-A900IZ244",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 8K Neo QLED",
      "Mini LED",
      "165Hz",
      "AI 智慧顯示器",
      "手機投影：AirPlay / SmartThings/Tap View"
    ],
    "description": "Samsung QA65QN900FXXZW 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "8K",
      "Mini LED",
      "旗艦"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "found",
      "amount": 59800,
      "currency": "TWD",
      "converted": 59800,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1260955760&cgp=89910",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【Samsung 三星】原廠控價 私訊我更便宜 QA65QN900FXXZW 65型Neo QLED 8K AI智慧顯示器(含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【Samsung 三星】原廠控價 私訊我更便宜 QA65QN900FXXZW 65型Neo QLED 8K AI智慧顯示器(含基本安裝)」最低價為 NT$59,800，最低點日期 2026-03-24。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung QA65QN900FXXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Samsung%20QA65QN900FXXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung QA65QN900FXXZW\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Samsung%20QA65QN900FXXZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-15-dpad0o-1900jl0z8",
    "category": "tv",
    "rank": 18,
    "budget": "value",
    "channel": "tw",
    "brand": "BenQ",
    "model": "J65-770",
    "name": "65 型 4K 144Hz Mini LED 量子點遊戲 Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 32900,
      "converted": 32900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD0O1900JL0Z8/000001_1766513999.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADY8-A900JI9B7",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K 144Hz",
      "Google TV",
      "內建重低音",
      "手機投影：AirPlay / Chromecast / Miracast"
    ],
    "description": "BenQ J65-770 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "遊戲",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 29900,
      "currency": "TWD",
      "converted": 29900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1265781651&cgp=29900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：BenQ明基65吋miniLED 4K連網智慧顯示器J65-770 無安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / BenQ明基65吋miniLED 4K連網智慧顯示器J65-770 無安裝」最低價為 NT$29,900，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"BenQ J65-770\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22BenQ%20J65-770%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"BenQ J65-770\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22BenQ%20J65-770%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-16-dpadb2a900jgkqb",
    "category": "tv",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "AOC",
    "model": "65U8040",
    "name": "65型 4K QLED Google TV 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 13999,
      "converted": 13999,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADB2A900JGKQB/000001_1764820202.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADB2-A900JGKQB",
    "buyLabel": "PChome",
    "specs": [
      "65 吋",
      "4K",
      "QLED",
      "Google TV",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "AOC 65U8040 補進本分類比較池，重點是65 吋、4K、QLED，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格很有競爭力",
      "QLED 與 Google TV 規格完整"
    ],
    "cons": [
      "品牌高階畫質口碑不如日韓旗艦",
      "安裝另計需確認"
    ],
    "bestFor": "以 65 吋客廳主力電視為主，想看 QLED、Google TV 與品牌售後的人。",
    "recommendation": "補充推薦：65型 4K QLED Google TV 智慧顯示器 的優勢在價格很有競爭力，但仍建議把品牌高階畫質口碑不如日韓旗艦納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "65吋",
      "QLED",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-11",
      "note": "未找到 65U8040 可公開驗證的可信新品史低；原 NT$13,511 候選明確標示特價 B 品，依資料契約排除。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"AOC 65U8040\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22AOC%2065U8040%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"AOC 65U8040\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22AOC%2065U8040%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-17-dpado5a900ie3y5",
    "category": "tv",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "Toshiba",
    "model": "65M450NT",
    "name": "REGZA 65型 4K QLED Google TV",
    "price": {
      "currency": "TWD",
      "amount": 17999,
      "converted": 17999,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADBHA900HWJZ7/000001_1780076528.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADBH-A900HWJZ7",
    "buyLabel": "PChome",
    "specs": [
      "65 吋",
      "4K",
      "QLED",
      "Google TV",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "Toshiba 65M450NT 補進本分類比較池，重點是65 吋、4K、QLED，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "REGZA 品牌調校有口碑",
      "含壁掛安裝方案可參考"
    ],
    "cons": [
      "非 Mini LED/OLED",
      "同型號不同方案需比價"
    ],
    "bestFor": "以 65 吋客廳主力電視為主，想看 QLED、Google TV 與品牌售後的人。",
    "recommendation": "補充推薦：REGZA 65型 4K QLED Google TV 的優勢在REGZA 品牌調校有口碑，但仍建議把非 Mini LED/OLED納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "65吋",
      "QLED",
      "REGZA"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 17900,
      "currency": "TWD",
      "converted": 17900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1247818286&cgp=17900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：TOSHIBA東芝 65吋4K QLED連網智慧顯示器65M450NT 無安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / TOSHIBA東芝 65吋4K QLED連網智慧顯示器65M450NT 無安裝」最低價為 NT$17,900，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Toshiba 65M450NT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Toshiba%2065M450NT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Toshiba 65M450NT\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Toshiba%2065M450NT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-18-dpadtoa900jne73",
    "category": "tv",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "CHiQ",
    "model": "CQ-65QX250",
    "name": "65型 4K QLED 120Hz Google TV",
    "price": {
      "currency": "TWD",
      "amount": 12591,
      "converted": 12591,
      "confidence": "PChome 2026-07-18 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADTOA900JNE73/000001_1768523868.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADTO-A900JNMOP",
    "buyLabel": "PChome",
    "specs": [
      "65 吋",
      "4K",
      "QLED",
      "120Hz",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "CHiQ CQ-65QX250 補進本分類比較池，重點是65 吋、4K、QLED，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "120Hz 規格價格漂亮",
      "適合預算型客廳"
    ],
    "cons": [
      "品牌售後與調校需斟酌",
      "HDR 表現不如高階款"
    ],
    "bestFor": "以 65 吋客廳主力電視為主，想看 QLED、Google TV 與品牌售後的人。",
    "recommendation": "補充推薦：65型 4K QLED 120Hz Google TV 的優勢在120Hz 規格價格漂亮，但仍建議把品牌售後與調校需斟酌納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "65吋",
      "120Hz",
      "預算"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 12591,
      "currency": "TWD",
      "converted": 12591,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269040312&cgp=13990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：CHiQ啟客 65型4K QLED google TV智慧聯網液晶顯示器 不含視訊盒 CQ-65QX250 含基本安裝+舊機回收",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / CHiQ啟客 65型4K QLED google TV智慧聯網液晶顯示器 不含視訊盒 CQ-65QX250 含基本安裝+舊機回收」最低價為 NT$12,591，最低點日期 2026-06-20。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"CHiQ CQ-65QX250\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22CHiQ%20CQ-65QX250%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"CHiQ CQ-65QX250\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22CHiQ%20CQ-65QX250%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-19-dmbm10a900ifxk7",
    "category": "tv",
    "rank": 22,
    "budget": "mid",
    "channel": "tw",
    "brand": "TECO",
    "model": "TL65QU1TRE",
    "name": "65型 4K QLED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 21411,
      "converted": 21411,
      "confidence": "PChome 2026-07-17 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD0WA900I9LNS/000001_1769648262.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD0W-A900I9LNS",
    "buyLabel": "PChome",
    "specs": [
      "65 吋",
      "4K",
      "QLED",
      "Google TV",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "TECO TL65QU1TRE 補進本分類比較池，重點是65 吋、4K、QLED，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "台灣品牌、維修點較安心",
      "價格與規格平衡"
    ],
    "cons": [
      "影像處理不如高階國際品牌",
      "外型與聲音較基本"
    ],
    "bestFor": "以 65 吋客廳主力電視為主，想看 QLED、Google TV 與品牌售後的人。",
    "recommendation": "補充推薦：65型 4K QLED Google TV 顯示器 的優勢在台灣品牌、維修點較安心，但仍建議把影像處理不如高階國際品牌納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "65吋",
      "台灣品牌",
      "QLED"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 16489,
      "currency": "TWD",
      "converted": 16489,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237729736&cgp=20000",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：TECO東元 65吋4K連網智慧顯示器TL65QU1TRE 無安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / TECO東元 65吋4K連網智慧顯示器TL65QU1TRE 無安裝」最低價為 NT$16,489，最低點日期 2026-01-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TECO TL65QU1TRE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22TECO%20TL65QU1TRE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TECO TL65QU1TRE\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22TECO%20TL65QU1TRE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-extra-20-dpadw5a900k1qa7",
    "category": "tv",
    "rank": 23,
    "budget": "mid",
    "channel": "tw",
    "brand": "SAMPO",
    "model": "QM-65SF620",
    "name": "65型 QLED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 19710,
      "converted": 19710,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADW5A900K1QA7/000001_1782888863.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADW5-A900K2DOT",
    "buyLabel": "PChome",
    "specs": [
      "65 吋",
      "QLED",
      "Google TV",
      "量子點",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "SAMPO QM-65SF620 補進本分類比較池，重點是65 吋、QLED、Google TV，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "台灣通路與售後友善",
      "價格常有組合優惠"
    ],
    "cons": [
      "贈品方案需看是否真的需要",
      "高階畫質非主打"
    ],
    "bestFor": "以 65 吋客廳主力電視為主，想看 QLED、Google TV 與品牌售後的人。",
    "recommendation": "補充推薦：65型 QLED Google TV 顯示器 的優勢在台灣通路與售後友善，但仍建議把贈品方案需看是否真的需要納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "65吋",
      "QLED",
      "台灣通路"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 16930,
      "currency": "TWD",
      "converted": 16930,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273302585&cgp=19710",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【SAMPO 聲寶】原廠控價 私訊我更便宜 QM-65SF620 65吋QLED 4K聯網液晶顯示器(含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【SAMPO 聲寶】原廠控價 私訊我更便宜 QM-65SF620 65吋QLED 4K聯網液晶顯示器(含基本安裝)」最低價為 NT$16,930，最低點日期 2026-05-13。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SAMPO QM-65SF620\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22SAMPO%20QM-65SF620%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SAMPO QM-65SF620\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22SAMPO%20QM-65SF620%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-costco-toshiba-75z670nt",
    "category": "tv",
    "rank": 24,
    "budget": "mid",
    "channel": "tw",
    "brand": "Toshiba",
    "model": "75Z670NT",
    "name": "Regza 75型 4K QLED 144Hz 全陣列背光智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 39999,
      "converted": 39999,
      "confidence": "Costco 好市多 2026-07-13 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hfe/ha8/438072160518174.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Televisions-TV-Accessories/70-79-TVs/Toshiba-Regza-75-inch-Full-Array-4K-QLED-144Hz-Smart-Monitor-75Z670NT/p/152535",
    "buyLabel": "Costco 好市多",
    "specs": [
      "75 吋 4K QLED",
      "全陣列背光",
      "144Hz",
      "手機投影：通路頁未標示",
      "Costco 評價 4.8 / 50 則"
    ],
    "description": "Costco 75 吋大尺寸 QLED 高評價候選，適合想用較低預算取得大畫面、144Hz 與全陣列背光的人。",
    "pros": [
      "Costco 評價與評論數都漂亮",
      "75 吋大尺寸價格有競爭力"
    ],
    "cons": [
      "通路頁未標示手機投影能力",
      "大尺寸需先確認電梯、門寬與安裝動線"
    ],
    "bestFor": "客廳距離較長、想在 Costco 買大尺寸 4K QLED 的家庭。",
    "recommendation": "好市多補充推薦：75Z670NT 在 Costco 有 4.8 分與 50 則評論，適合和既有 65/75 吋候選比大尺寸 CP 值。",
    "score": 86,
    "voltage": "110V 台灣通路；大型家電需確認配送、安裝與舊機處理",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "75吋",
      "QLED"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 31999,
      "currency": "TWD",
      "converted": 31999,
      "sourceUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Televisions-TV-Accessories/70-79-TVs/Toshiba-Regza-75-inch-Full-Array-4K-QLED-144Hz-Smart-Monitor-75Z670NT/p/152535",
      "sourceTitle": "Costco 商品頁：東芝 Regza 75型 4K QLED 144Hz 全陣列背光智慧顯示器 75Z670NT | Costco 好市多",
      "evidenceSnippet": "Costco 商品頁 於 2026-07-10 回傳同一商品頁「東芝 Regza 75型 4K QLED 144Hz 全陣列背光智慧顯示器 75Z670NT | Costco 好市多」查核價 NT$31,999，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用可信通路同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Toshiba 75Z670NT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Toshiba%2075Z670NT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Toshiba 75Z670NT\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Toshiba%2075Z670NT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-costco-tcl-65c8k",
    "category": "tv",
    "rank": 25,
    "budget": "premium",
    "channel": "tw",
    "brand": "TCL",
    "model": "65C8K",
    "name": "65 吋 C8K QD-Mini LED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 45999,
      "converted": 45999,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h2d/ha5/438072223236126.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Televisions-TV-Accessories/60-69-TVs/TCL-65-inch-premium-QD-Mini-LED-Google-TV-Smart-Monitor-without-STB-65C8K/p/154789",
    "buyLabel": "Costco 好市多",
    "specs": [
      "65 吋 QD-Mini LED",
      "4K / Google TV",
      "Dolby Atmos",
      "重量：30.6公斤",
      "手機投影：通路頁未標示",
      "Costco 評價 4.8 / 32 則"
    ],
    "description": "Costco 評價不錯的大尺寸顯示器候選，補進既有電視比較池但不取代 Top Pick。",
    "pros": [
      "Costco 評分與評論數具參考性",
      "好市多正常新品頁"
    ],
    "cons": [
      "大尺寸需確認擺放、壁掛與搬運",
      "手機投影能力若未標示則不猜測"
    ],
    "bestFor": "想從好市多挑大尺寸電視並和既有高階款比較的人",
    "recommendation": "好市多補充推薦：65 吋 C8K QD-Mini LED Google TV 顯示器 評價不錯，補進電視分類作為 Costco 候選比較。",
    "score": 89,
    "voltage": "100-240V；台灣好市多通路",
    "warranty": "依 Costco 好市多商品頁與品牌 3 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "Mini LED",
      "Google TV",
      "65吋"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 39900,
      "currency": "TWD",
      "converted": 39900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269573974&cgp=49990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【TCL】家電快配★65型 頂級QD-Mini LED Google TV 144HZ 量子智能連網液晶顯示器 -基本安裝(65C8K)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【TCL】家電快配★65型 頂級QD-Mini LED Google TV 144HZ 量子智能連網液晶顯示器 -基本安裝(65C8K)」最低價為 NT$39,900，最低點日期 2026-06-26。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TCL 65C8K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22TCL%2065C8K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TCL 65C8K\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22TCL%2065C8K%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-costco-hisense-75q7n",
    "category": "tv",
    "rank": 26,
    "budget": "premium",
    "channel": "tw",
    "brand": "Hisense",
    "model": "75Q7N",
    "name": "75 吋 Q7N 4K 144Hz QLED 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 35999,
      "converted": 35999,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h4e/h03/438072156979230.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD98-A900JV2AT",
    "buyLabel": "PChome",
    "specs": [
      "75 吋 QLED",
      "4K 144Hz / VIDDA",
      "Dolby Vision / Dolby Atmos",
      "重量：28.9公斤（不含底座）",
      "手機投影：通路頁未標示",
      "Costco 評價 5 / 10 則"
    ],
    "description": "Costco 評價不錯的大尺寸顯示器候選，補進既有電視比較池但不取代 Top Pick。",
    "pros": [
      "Costco 評分與評論數具參考性",
      "好市多正常新品頁"
    ],
    "cons": [
      "大尺寸需確認擺放、壁掛與搬運",
      "手機投影能力若未標示則不猜測"
    ],
    "bestFor": "想從好市多挑大尺寸電視並和既有高階款比較的人",
    "recommendation": "好市多補充推薦：75 吋 Q7N 4K 144Hz QLED 智慧顯示器 評價不錯，補進電視分類作為 Costco 候選比較。",
    "score": 86,
    "voltage": "110V / 50-60Hz；台灣好市多通路",
    "warranty": "依 Costco 好市多商品頁與品牌 2 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "75吋",
      "QLED",
      "大尺寸"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 34704,
      "currency": "TWD",
      "converted": 34704,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1260718332&cgp=38560",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Hisense海信 75型 4K QLED 144HZ雙杜比連網液晶顯示器 75Q7N 送桌上安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Hisense海信 75型 4K QLED 144HZ雙杜比連網液晶顯示器 75Q7N 送桌上安裝」最低價為 NT$34,704，最低點日期 2026-06-24。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Hisense 75Q7N\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Hisense%2075Q7N%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Hisense 75Q7N\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Hisense%2075Q7N%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "tv-samsung-r95h-65",
    "category": "tv",
    "rank": 27,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "MRA65R95HAXXZW",
    "name": "65 型 R95H Micro RGB 4K Vision AI 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 106900,
      "converted": 106900,
      "confidence": "PChome 2026-07-18 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADO2A900K3VO9/000001_1783567837.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADO2-A900K3VO9",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 4K Micro RGB / 最高 165Hz VRR",
      "Micro RGB Precision Color / 100% BT.2020 色域",
      "抗反光真星黑面板 / Micro RGB AI Engine Pro",
      "4 組 HDMI / 手機投影：支援 AirPlay、Google Cast 與鏡像分享",
      "重量：22.4kg（不含底座）",
      "機身尺寸：143.71 x 82.6 x 2.96 cm（不含底座）"
    ],
    "description": "Samsung 2026 旗艦 Micro RGB，以獨立微型紅綠藍背光、廣色域與 165Hz 補上現有清單沒有的顯示技術。",
    "pros": [
      "Micro RGB 與 100% BT.2020 提供更精細的色彩控制",
      "抗反光面板、165Hz VRR 與四組 HDMI 兼顧明亮客廳及遊戲",
      "AirPlay、Google Cast 與 Samsung 生態系投影支援完整"
    ],
    "cons": [
      "上市價高，仍需和高階 OLED、Mini LED 的黑位與 CP 值比較",
      "65 吋機身重 22.4kg，壁掛與搬運需確認承重及施工空間",
      "新顯示技術的長期使用評價與後續折價幅度仍待觀察"
    ],
    "bestFor": "想優先比較 2026 新顯示技術、明亮客廳 HDR 與高更新率遊戲的高階使用者。",
    "recommendation": "R95H 是目前清單唯一 Micro RGB，補足技術多樣性；價格高但色域、抗反光與 165Hz 規格完整，適合作為旗艦技術對照。",
    "score": 93,
    "voltage": "AC 100-240V / 50-60Hz",
    "warranty": "台灣公司貨；期限依 Samsung 台灣原廠條款",
    "tags": [
      "Micro RGB",
      "165Hz",
      "BT.2020",
      "抗反光",
      "旗艦"
    ],
    "releaseDate": "2026-06-08",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-18",
      "note": "MRA65R95HAXXZW 於 2026-06-08 在台新上市；查核 exact-model 價格歷史與比價來源僅見 PChome 等可信通路上市現價 NT$106,900，未找到可公開驗證的可信新品歷史最低價。上市現價不得直接推定為史低；FindPrice 的更低候選為一般賣家或附最低購買量等不合規條件，均未採用。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung MRA65R95HAXXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Samsung%20MRA65R95HAXXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung MRA65R95HAXXZW\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.google.com/search?q=site%3Areddit.com%20%22Samsung%20MRA65R95HAXXZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();
