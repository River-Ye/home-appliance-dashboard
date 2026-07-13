(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("monitor", [
  {
    "id": "monitor-asus-xg27acs",
    "category": "monitor",
    "rank": 1,
    "topPick": true,
    "budget": "value",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ROG Strix XG27ACS",
    "name": "27 型 2K 180Hz IPS USB-C 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 5218,
      "converted": 5218,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABKBA900JZ3CV/000001_1777866944.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABKB-A900JZ3CV",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "180Hz",
      "IPS",
      "USB-C",
      "重量：3.93 kg（不含底座）"
    ],
    "description": "XG27ACS 以五千多元給到 27 吋 2K、180Hz、IPS 與 USB-C，是遊戲與工作兼用甜蜜點。",
    "pros": [
      "規格完整且價格漂亮",
      "ASUS/ROG 通路與售後穩",
      "工作與遊戲兼顧"
    ],
    "cons": [
      "不是 4K 或 OLED",
      "USB-C 供電能力需看頁面規格"
    ],
    "bestFor": "想買一台主螢幕兼顧工作、遊戲與預算的人。",
    "recommendation": "本類 Top Pick：2K 高刷新、IPS、USB-C、品牌售後與價格最均衡。",
    "score": 94,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "180Hz",
      "USB-C",
      "CP 值"
    ],
    "releaseDate": "2024-04-17",
    "historicalLow": {
      "status": "found",
      "amount": 5218,
      "currency": "TWD",
      "converted": 5218,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1214271881&cgp=5218",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【ASUS 華碩】ROG Strix XG27ACS 27型2K 180Hz HDR電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【ASUS 華碩】ROG Strix XG27ACS 27型2K 180Hz HDR電競螢幕」最低價為 NT$5,218，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 XG27ACS 使用者回報在 180Hz／DisplayPort 下會隨機閃出白色水平線或畫面閃爍，部分伴隨短暫黑屏。",
      "issues": [
        {
          "title": "180Hz 下白色水平線、閃爍或短暫黑屏",
          "detail": "部分使用者降到 165Hz 後改善，但也有換線或換機仍復發；應在退換貨期內以 180Hz 長時間測試遊戲、桌面與休眠喚醒。",
          "reportCount": 8,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Issues with brand new ASUS ROG Strix XG27ACS monitor",
              "url": "https://old.reddit.com/r/ASUSROG/comments/1gu36al/issues_with_brand_new_asus_rog_strix_xg27acs/"
            },
            {
              "platform": "ASUS ROG Forum",
              "title": "New XG27ACS has Screen issues",
              "url": "https://rog-forum.asus.com/t5/gaming-monitors/new-xg27acs-has-screen-issues/td-p/1033966"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "monitor-acer-vg270u-p6",
    "category": "monitor",
    "rank": 2,
    "budget": "value",
    "channel": "tw",
    "brand": "Acer",
    "model": "VG270U P6",
    "name": "27 吋 QHD 144Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 3999,
      "converted": 3999,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABTCA900K0ABK/000001_1781756574.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABTC-A900K0ABK",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "144Hz",
      "IPS",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Acer VG270U P6 把 27 吋 2K IPS 價格壓到很低，是升級 FHD 的高 CP 選項。",
    "pros": [
      "2K 價格很低",
      "IPS 視角好",
      "適合入門電競"
    ],
    "cons": [
      "支架與色彩功能偏基本",
      "庫存不多"
    ],
    "bestFor": "預算四千上下、想從 FHD 升級 2K 的人。",
    "recommendation": "低價 2K 推薦：預算有限時先看這台，再往 ASUS/BenQ 升級。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "低價",
      "IPS"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3688,
      "currency": "TWD",
      "converted": 3688,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1275471764&cgp=3999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Acer 宏碁】VG270U P6 27型 IPS 2K 16:9 144Hz 電競螢幕(可旋轉/內建喇叭/HDR10/FreeSync/1ms/護眼)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Acer 宏碁】VG270U P6 27型 IPS 2K 16:9 144Hz 電競螢幕(可旋轉/內建喇叭/HDR10/FreeSync/1ms/護眼)」最低價為 NT$3,688，最低點日期 2026-06-09。",
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
          "query": "site:mobile01.com \"Acer VG270U P6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Acer%20VG270U%20P6%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Acer VG270U P6\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Acer%20VG270U%20P6%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-benq-ex271q",
    "category": "monitor",
    "rank": 3,
    "budget": "value",
    "channel": "tw",
    "brand": "BenQ",
    "model": "MOBIUZ EX271Q",
    "name": "27 吋 2K 180Hz HDR400 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 5688,
      "converted": 5688,
      "confidence": "順發線上購物 2026-07-13 公開折扣價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABF3A900JA047/000001_1758694183.jpg",
    "buyUrl": "https://www.isunfar.com.tw/product/?prodseq=271909",
    "buyLabel": "順發線上購物",
    "specs": [
      "27 吋",
      "2K/QHD",
      "180Hz",
      "IPS",
      "HDR400",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "BenQ EX271Q 以護眼、HDR400 與遊戲規格取得平衡，台灣售後也容易理解。",
    "pros": [
      "BenQ 護眼口碑",
      "2K 180Hz 規格完整",
      "HDR400 加分"
    ],
    "cons": [
      "價格高於 Acer 入門 2K",
      "不是 USB-C 生產力款"
    ],
    "bestFor": "想要遊戲與護眼品牌兼顧的人。",
    "recommendation": "護眼電競推薦：比低價 2K 多花一些，換來 BenQ 調校與品牌安心感。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "180Hz",
      "護眼"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5688,
      "currency": "TWD",
      "converted": 5688,
      "sourceUrl": "https://www.isunfar.com.tw/product/?prodseq=271909",
      "sourceTitle": "順發線上購物：BENQ 明基電通 27 吋 MOBIUZ EX271Q 2K 180Hz 電競螢幕",
      "evidenceSnippet": "順發線上購物同型號新品頁於 2026-07-13 顯示售價 NT$5,988 與公開折扣 NT$300，頁面 metadata／結構化資料標示成交價 NT$5,688、NewCondition、InStock。",
      "sourceKind": "retailer_promo",
      "confidence": "high",
      "checkedAt": "2026-07-13",
      "note": "採用可信通路同一商品頁可公開重現的公開折扣價；未使用會員個人化優惠、信用卡回饋、點數、二手、福利品、展示機、拆封品或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-13",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"BenQ MOBIUZ EX271Q\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.google.com/search?q=site%3Areddit.com+%22BenQ+MOBIUZ+EX271Q%22+%28problem+OR+issue+OR+defect+OR+%22negative+review%22%29",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"BenQ MOBIUZ EX271Q\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com+%22BenQ+MOBIUZ+EX271Q%22+%28%E7%81%BD%E6%83%85+OR+%E5%95%8F%E9%A1%8C+OR+%E6%95%85%E9%9A%9C+OR+%E8%B2%A0%E8%A9%95%29",
          "targetHost": "mobile01.com"
        }
      ]
    }
  },
  {
    "id": "monitor-lg-27u631a",
    "category": "monitor",
    "rank": 4,
    "budget": "value",
    "channel": "tw",
    "brand": "LG",
    "model": "27U631A-B",
    "name": "27 型 2K 100Hz USB-C IPS 護眼螢幕",
    "price": {
      "currency": "TWD",
      "amount": 3980,
      "converted": 3980,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABRBA900JTLHW/000001_1773730777.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABRB-A900JTLHW",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "100Hz",
      "IPS",
      "USB-C",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "LG 27U631A-B 是偏工作與日常的 2K 螢幕，USB-C 與 100Hz 讓筆電使用更順。",
    "pros": [
      "價格低",
      "USB-C 方便筆電",
      "LG 面板口碑佳"
    ],
    "cons": [
      "遊戲刷新率不如 144/180Hz",
      "支架功能偏基本"
    ],
    "bestFor": "筆電外接、文書、程式與一般娛樂。",
    "recommendation": "文書 CP 推薦：如果不主打競技遊戲，這台 2K USB-C 很划算。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "USB-C",
      "文書"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3781,
      "currency": "TWD",
      "converted": 3781,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1271031807&cgp=3980",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【LG 樂金】27U631A-B 27型 2K 護眼螢幕 (IPS/100Hz/USB-C/傾斜可調支架)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【LG 樂金】27U631A-B 27型 2K 護眼螢幕 (IPS/100Hz/USB-C/傾斜可調支架)」最低價為 NT$3,781，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"LG 27U631A-B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%2027U631A-B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG 27U631A-B\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%2027U631A-B%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-dell-p2425h",
    "category": "monitor",
    "rank": 5,
    "budget": "value",
    "channel": "tw",
    "brand": "Dell",
    "model": "P2425H-4Y",
    "name": "24 型 FHD IPS USB-C 商務螢幕",
    "price": {
      "currency": "TWD",
      "amount": 4988,
      "converted": 4988,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOLA900K1NAC/000001_1779696949.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABOL-A900K1NAC",
    "buyLabel": "PChome",
    "specs": [
      "24 吋",
      "FHD",
      "IPS",
      "USB-C",
      "四年保",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Dell P 系列重點是商務穩定與保固，適合辦公採購與雙螢幕標準化。",
    "pros": [
      "Dell 商務保固",
      "USB-C 與端口完整",
      "適合大量採購"
    ],
    "cons": [
      "解析度只有 FHD",
      "遊戲規格普通"
    ],
    "bestFor": "辦公室、會計、行政與雙螢幕文書。",
    "recommendation": "商務售後推薦：規格不是最炫，但保固與穩定性適合工作用。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "商務",
      "USB-C",
      "四年保"
    ],
    "releaseDate": "2024-03-19",
    "historicalLow": {
      "status": "found",
      "amount": 4988,
      "currency": "TWD",
      "converted": 4988,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282547388&cgp=4988",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：DELL 戴爾 P2425H-4Y 窄邊美型螢幕(24型/FHD/HDMI/DP/IPS/Type-C)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / DELL 戴爾 P2425H-4Y 窄邊美型螢幕(24型/FHD/HDMI/DP/IPS/Type-C)」最低價為 NT$4,988，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Dell P2425H-4Y\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dell%20P2425H-4Y%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dell P2425H-4Y\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dell%20P2425H-4Y%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-g5-s27fg532",
    "category": "monitor",
    "rank": 6,
    "budget": "value",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S27FG532EC Odyssey G5",
    "name": "27 型 2K 200Hz IPS Odyssey G5",
    "price": {
      "currency": "TWD",
      "amount": 4990,
      "converted": 4990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABONA900JZ7RG/000001_1777952241.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABON-A900JZ7RG",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "200Hz",
      "IPS",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Odyssey G5 這筆以不到五千元給到 27 吋 2K 200Hz，是電競性價比很強的三星選項。",
    "pros": [
      "刷新率高",
      "2K 價格漂亮",
      "Samsung 品牌"
    ],
    "cons": [
      "庫存不多",
      "支架與色彩專業功能非重點"
    ],
    "bestFor": "預算有限但想要高刷新 2K 遊戲螢幕。",
    "recommendation": "電競 CP 推薦：規格比價格漂亮，適合 FPS/MOBA 玩家。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "200Hz",
      "電競"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 4690,
      "currency": "TWD",
      "converted": 4690,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1263665019&cgp=4990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Samsung 三星】S27FG532EC Odyssey G5 27型 IPS QHD 200Hz電競螢幕(FreeSync/HDR/1ms)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Samsung 三星】S27FG532EC Odyssey G5 27型 IPS QHD 200Hz電競螢幕(FreeSync/HDR/1ms)」最低價為 NT$4,690，最低點日期 2026-05-26。",
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
          "query": "site:mobile01.com \"Samsung S27FG532EC Odyssey G5\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S27FG532EC%20Odyssey%20G5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S27FG532EC Odyssey G5\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S27FG532EC%20Odyssey%20G5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-msi-g275l-e14",
    "category": "monitor",
    "rank": 7,
    "budget": "value",
    "channel": "tw",
    "brand": "MSI",
    "model": "G275L E14",
    "name": "27 型 FHD 144Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 2990,
      "converted": 2990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABPDA900JTLEG/000001_1773715062.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABPD-A900JTLEG",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "FHD",
      "144Hz",
      "IPS",
      "HDR",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "MSI G275L E14 是 27 吋低價電競入門款，適合預算先決的遊戲或副螢幕。",
    "pros": [
      "價格低",
      "27 吋大畫面",
      "144Hz 入門遊戲足夠"
    ],
    "cons": [
      "FHD 在 27 吋細緻度一般",
      "不適合精細文字工作"
    ],
    "bestFor": "入門遊戲、副螢幕或預算三千左右的人。",
    "recommendation": "低價大螢幕推薦：不追求 2K 時，它的價格很有吸引力。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "FHD",
      "144Hz",
      "入門"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2840,
      "currency": "TWD",
      "converted": 2840,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1258644888&cgp=2990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【MSI 微星】G275L E14 27型 Rapid IPS FHD 144Hz 電競螢幕(HDR Ready)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【MSI 微星】G275L E14 27型 Rapid IPS FHD 144Hz 電競螢幕(HDR Ready)」最低價為 NT$2,840，最低點日期 2026-05-13。",
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
          "query": "site:mobile01.com \"MSI G275L E14\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MSI%20G275L%20E14%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MSI G275L E14\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MSI%20G275L%20E14%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-gigabyte-g27q20t",
    "category": "monitor",
    "rank": 8,
    "budget": "value",
    "channel": "tw",
    "brand": "GIGABYTE",
    "model": "G27Q20T",
    "name": "27 型 QHD 210Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 4488,
      "converted": 4488,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW6A900K63WS/000001_1782880934.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABW6-A900K63WS",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "210Hz",
      "IPS",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "技嘉 G27Q20T 以四千多元提供 2K 210Hz，適合重視高刷新與 CP 值的玩家。",
    "pros": [
      "2K 高刷新很便宜",
      "品牌售後較熟悉",
      "規格適合遊戲"
    ],
    "cons": [
      "支架與色彩功能需看評測",
      "庫存較少"
    ],
    "bestFor": "想用低預算買高刷新 2K 的玩家。",
    "recommendation": "高刷新 CP 推薦：價格對規格很有競爭力。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "210Hz",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 4488,
      "currency": "TWD",
      "converted": 4488,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1283040459&cgp=4488",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【GIGABYTE 技嘉】G27Q20T 27型 LED 電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【GIGABYTE 技嘉】G27Q20T 27型 LED 電競螢幕」最低價為 NT$4,488，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"GIGABYTE G27Q20T\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GIGABYTE%20G27Q20T%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GIGABYTE G27Q20T\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GIGABYTE%20G27Q20T%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-viewsonic-vx2479",
    "category": "monitor",
    "rank": 9,
    "budget": "value",
    "channel": "tw",
    "brand": "ViewSonic",
    "model": "VX2479A-HD-PRO",
    "name": "24 型 FHD 240Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 2988,
      "converted": 2988,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOIA900IC2G2/000001_1738836667.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0002973/goodsDetail/TP00029730001792",
    "buyLabel": "momo購物",
    "specs": [
      "24 吋",
      "FHD",
      "240Hz",
      "IPS",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "24 吋 FHD 240Hz 是競技遊戲常見尺寸，ViewSonic 這台價格也很親民。",
    "pros": [
      "240Hz 低價",
      "24 吋適合 FPS",
      "IPS 視角佳"
    ],
    "cons": [
      "解析度只有 FHD",
      "工作區域較小"
    ],
    "bestFor": "FPS、競技遊戲與小桌面玩家。",
    "recommendation": "競技入門推薦：想要 240Hz 又不想花大錢，可列入清單。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "240Hz",
      "FPS",
      "FHD"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2988,
      "currency": "TWD",
      "converted": 2988,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272513543&cgp=2988",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【ViewSonic 優派】ViewSonic優派 24型 VX2479A-HD-PRO 電競顯示器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【ViewSonic 優派】ViewSonic優派 24型 VX2479A-HD-PRO 電競顯示器」最低價為 NT$2,988，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"ViewSonic VX2479A-HD-PRO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ViewSonic%20VX2479A-HD-PRO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ViewSonic VX2479A-HD-PRO\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ViewSonic%20VX2479A-HD-PRO%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-q27g42ze",
    "category": "monitor",
    "rank": 10,
    "budget": "value",
    "channel": "tw",
    "brand": "AOC",
    "model": "Q27G42ZE",
    "name": "27 型 QHD 260Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 4288,
      "converted": 4288,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABQRA900JJPCW/000001_1765505711.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABQR-A900JJPCW",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "260Hz",
      "IPS",
      "0.3ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "AOC Q27G42ZE 用很低價格給到 2K 260Hz，規格紙面 CP 值很強。",
    "pros": [
      "刷新率很高",
      "2K 價格低",
      "適合電競比較"
    ],
    "cons": [
      "品牌售後需和 ASUS/BenQ 比較",
      "色彩與支架需看實測"
    ],
    "bestFor": "重視高刷新規格、預算有限的玩家。",
    "recommendation": "規格怪物推薦：若看重 Hz 與價格，AOC 這台很有競爭力。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "260Hz",
      "CP 值"
    ],
    "releaseDate": "2025-07",
    "historicalLow": {
      "status": "found",
      "amount": 3988,
      "currency": "TWD",
      "converted": 3988,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1266453715&cgp=4288",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【AOC】Q27G42ZE 27型IPS 2K 21:9 240Hz 電競螢幕(0.3ms/Adaptive Sync/HDR10/HDMI/DP)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【AOC】Q27G42ZE 27型IPS 2K 21:9 240Hz 電競螢幕(0.3ms/Adaptive Sync/HDR10/HDMI/DP)」最低價為 NT$3,988，最低點日期 2026-06-09。",
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
          "query": "site:mobile01.com \"AOC Q27G42ZE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22AOC%20Q27G42ZE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"AOC Q27G42ZE\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22AOC%20Q27G42ZE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-philips-27m2n2500nf",
    "category": "monitor",
    "rank": 11,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "27M2N2500NF",
    "name": "27 型 2K 144Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 3888,
      "converted": 3888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABQQA900K2OE1/000001_1780474188.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABQQ-A900K2OE1",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "144Hz",
      "IPS",
      "HDMI",
      "重量：3.04 kg（不含底座）"
    ],
    "description": "Philips 27M2N2500NF 是低價 2K 144Hz 選項，適合一般遊戲與文書混用。",
    "pros": [
      "價格低",
      "2K 144Hz 基本盤完整",
      "品牌辨識度高"
    ],
    "cons": [
      "高階功能較少",
      "支架與色準非專業定位"
    ],
    "bestFor": "預算四千上下、想買知名品牌 2K 螢幕。",
    "recommendation": "平價品牌推薦：比無名款安心，價格接近低價甜蜜點。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "144Hz",
      "平價"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3888,
      "currency": "TWD",
      "converted": 3888,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1283960446&cgp=3888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Philips 飛利浦】27M2N2500NF 27型IPS 2K 144Hz電競螢幕(HDR/Adaptive-Sync/0.5ms)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Philips 飛利浦】27M2N2500NF 27型IPS 2K 144Hz電競螢幕(HDR/Adaptive-Sync/0.5ms)」最低價為 NT$3,888，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Philips 27M2N2500NF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%2027M2N2500NF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips 27M2N2500NF\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%2027M2N2500NF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-eizo-ev2460",
    "category": "monitor",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "EIZO",
    "model": "FlexScan EV2460",
    "name": "23.8 吋 IPS 超薄邊框商務螢幕",
    "price": {
      "currency": "TWD",
      "amount": 10900,
      "converted": 10900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABABA900AHPRB/000001_1641969597.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABAB-A900AHPRB",
    "buyLabel": "PChome",
    "specs": [
      "23.8 吋",
      "FHD",
      "IPS",
      "商務",
      "窄邊框",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "EIZO EV2460 不是規格 CP 取向，而是重視舒適、可靠與長期辦公品質。",
    "pros": [
      "EIZO 品牌與穩定性",
      "辦公舒適度佳",
      "耐用口碑好"
    ],
    "cons": [
      "價格高於同規格 FHD",
      "不適合遊戲規格黨"
    ],
    "bestFor": "長時間看文字、重視眼睛舒適與耐用的人。",
    "recommendation": "長時間辦公推薦：規格普通但穩定舒適，適合文字工作者。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "辦公",
      "EIZO",
      "舒適"
    ],
    "releaseDate": "2019-12-05",
    "historicalLow": {
      "status": "found",
      "amount": 10355,
      "currency": "TWD",
      "converted": 10355,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1235989105&cgp=10900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：EIZO FlexScan EV2460 黑色 24型/低藍光低閃頻護眼/薄邊框",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / EIZO FlexScan EV2460 黑色 24型/低藍光低閃頻護眼/薄邊框」最低價為 NT$10,355，最低點日期 2026-06-30。",
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
          "query": "site:mobile01.com \"EIZO FlexScan EV2460\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22EIZO%20FlexScan%20EV2460%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"EIZO FlexScan EV2460\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22EIZO%20FlexScan%20EV2460%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-xiaomi-a27qi-2026",
    "category": "monitor",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "A27Qi 2026",
    "name": "27 型 2K 120Hz 電腦螢幕",
    "price": {
      "currency": "TWD",
      "amount": 3699,
      "converted": 3699,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABVOA900JMD8B/000001_1768285501.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABVO-A900JMD8B",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "120Hz",
      "2026 款",
      "平價",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "小米 A27Qi 2026 價格低、解析度高，適合預算有限的文書與一般娛樂。",
    "pros": [
      "價格低",
      "2K 120Hz",
      "外型簡潔"
    ],
    "cons": [
      "品牌售後與調校需接受小米風格",
      "遊戲規格不如 180Hz 以上款"
    ],
    "bestFor": "一般工作、學生與預算導向外接螢幕。",
    "recommendation": "平價 2K 推薦：不追電競，想把解析度拉高就很划算。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "120Hz",
      "低價"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3499,
      "currency": "TWD",
      "converted": 3499,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1268930064&cgp=3699",
      "sourceTitle": "LBJ 比價撿便宜歷史價格：PChome Xiaomi A27Qi 2026",
      "evidenceSnippet": "LBJ PChome history shows NT$3,499 on 2026-01-09 and 2026-01-17 for Xiaomi A27Qi 2026.",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "已由 worker 查核 LBJ、BigGo 與 FindPrice；採 LBJ PChome 同型號歷史低點 NT$3,499。低於此價的福利品、拍賣混列或非可信新品通路候選均排除。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Xiaomi A27Qi 2026\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Xiaomi%20A27Qi%202026%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Xiaomi A27Qi 2026\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Xiaomi%20A27Qi%202026%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-lg-27up850k",
    "category": "monitor",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "UltraFine 27UP850K-W",
    "name": "27 型 4K IPS UltraFine 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 11900,
      "converted": 11900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABRBA900IUVR5/000001_1768806798.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABRB-A900IUVR5",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "IPS",
      "UltraFine",
      "USB-C",
      "重量：4.1 kg（不含底座）"
    ],
    "description": "LG UltraFine 27UP850K-W 適合 Mac/筆電生產力，4K 文字細緻度比 2K 明顯提升。",
    "pros": [
      "4K 文字細膩",
      "LG 面板與設計口碑",
      "適合筆電外接"
    ],
    "cons": [
      "刷新率非電競取向",
      "價格高於 2K 款"
    ],
    "bestFor": "程式、文書、修圖入門與 Mac 外接。",
    "recommendation": "4K 生產力推薦：想要細緻文字與主流品牌，這台很穩。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "生產力",
      "Mac"
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
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ LG UltraFine 27UP850K-W: 蝦皮商城 - LG旗艦館 LG樂金27吋27UP850K-W UltraFine 4K UHD IPS高畫質編輯螢幕 非採用通路或含排除條件；LBJ LG UltraFine 27UP850K-W: 原價屋 【原價屋】LG UltraFine 27UP850K-W〈2H1P1C/IPS/含喇叭/HDR400〉可升降旋轉 非採用通路或含排除條件；LBJ LG UltraFine 27UP850K-W: Wellife品生活 【Wellife 品生活】LG 27吋 UltraFine™ 4K UHD IPS 高畫質編輯螢幕 27UP850K-W 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG UltraFine 27UP850K-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20UltraFine%2027UP850K-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG UltraFine 27UP850K-W\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20UltraFine%2027UP850K-W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-asus-proart-pa278qev",
    "category": "monitor",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ProArt PA278QEV",
    "name": "27 型 2K IPS 專業螢幕",
    "price": {
      "currency": "TWD",
      "amount": 5988,
      "converted": 5988,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABBIA900JTZCP/000001_1773910733.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABBI-A900JTZCP",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "IPS",
      "ProArt",
      "專業螢幕",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "ProArt PA278QEV 適合想要色彩取向但預算有限的人，比電競螢幕更偏創作與文書。",
    "pros": [
      "ProArt 系列",
      "價格親民",
      "適合創作入門"
    ],
    "cons": [
      "不是 4K",
      "刷新率非競技重點"
    ],
    "bestFor": "設計入門、修圖、影片剪輯與長時間文書。",
    "recommendation": "創作入門推薦：比一般低價 2K 更重視色彩與工作用途。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "ProArt",
      "2K",
      "創作"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5978,
      "currency": "TWD",
      "converted": 5978,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=571744711&cgp=5978",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：ASUS 華碩 ProArt PA278QEV 專業螢幕 27吋 75Hz IPS 2K 5ms 可調式支架",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - ROG 華碩授權店 | 電競周邊館 / ASUS 華碩 ProArt PA278QEV 專業螢幕 27吋 75Hz IPS 2K 5ms 可調式支架」最低價為 NT$5,978，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"ASUS ProArt PA278QEV\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ASUS%20ProArt%20PA278QEV%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ASUS ProArt PA278QEV\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ASUS%20ProArt%20PA278QEV%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-asus-xg27ucg",
    "category": "monitor",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ROG Strix XG27UCG",
    "name": "27 型 4K 160Hz IPS USB-C 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 7980,
      "converted": 7980,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW6A900K6A95/000001_1783555579.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABW6-A900K6A95",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "160Hz",
      "IPS",
      "USB-C",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "XG27UCG 是 4K 高刷新與 USB-C 的高 CP 組合，適合遊戲主機與 PC 共用。",
    "pros": [
      "4K 160Hz 價格很強",
      "USB-C 加分",
      "ASUS 售後熟悉"
    ],
    "cons": [
      "庫存很少",
      "若不用 4K 可省預算買 2K"
    ],
    "bestFor": "PS5/PC 雙用、想要 4K 高刷新的人。",
    "recommendation": "4K 電競 CP 推薦：規格對價格非常漂亮，有貨時值得優先看。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "160Hz",
      "USB-C"
    ],
    "releaseDate": "2024-11",
    "historicalLow": {
      "status": "found",
      "amount": 7980,
      "currency": "TWD",
      "converted": 7980,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1283958095&cgp=7980",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【ASUS 華碩】ROG Strix XG27UCG 27型 4K 160Hz 電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【ASUS 華碩】ROG Strix XG27UCG 27型 4K 160Hz 電競螢幕」最低價為 NT$7,980，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"ASUS ROG Strix XG27UCG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ASUS%20ROG%20Strix%20XG27UCG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ASUS ROG Strix XG27UCG\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ASUS%20ROG%20Strix%20XG27UCG%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-acer-predator-x27u-x2",
    "category": "monitor",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "Acer",
    "model": "Predator X27U X2",
    "name": "27 型 2K 240Hz OLED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 10999,
      "converted": 10999,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABELA900IX8MS/000001_1754810956.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABEL-A900IX8MS",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "OLED",
      "240Hz",
      "0.03ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Predator X27U X2 把 OLED 240Hz 價格壓到中階帶，是想入門 OLED 電競的好選項。",
    "pros": [
      "OLED 價格漂亮",
      "240Hz 適合競技",
      "Acer Predator 系列"
    ],
    "cons": [
      "OLED 需注意烙印保養",
      "亮度與保固條件要核對"
    ],
    "bestFor": "想用較低預算體驗 OLED 遊戲畫面的人。",
    "recommendation": "OLED 入門推薦：價格比多數 OLED 螢幕低，畫質升級感明顯。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "240Hz",
      "電競"
    ],
    "releaseDate": "2025-07-23",
    "historicalLow": {
      "status": "found",
      "amount": 10999,
      "currency": "TWD",
      "converted": 10999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1251611819&cgp=10999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：ACER 宏碁 Predator X27U X2 電競螢幕(27型/2K/240Hz/0.03ms/HDMI/DP/OLED)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / ACER 宏碁 Predator X27U X2 電競螢幕(27型/2K/240Hz/0.03ms/HDMI/DP/OLED)」最低價為 NT$10,999，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Acer Predator X27U X2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Acer%20Predator%20X27U%20X2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Acer Predator X27U X2\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Acer%20Predator%20X27U%20X2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-q27g4zmn",
    "category": "monitor",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "AOC",
    "model": "Q27G4ZMN",
    "name": "27 型 2K 240Hz Mini LED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 8588,
      "converted": 8588,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABTAA900IGUKX/000001_1742198541.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABTA-A900IGUKX",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "Mini LED",
      "240Hz",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "AOC Q27G4ZMN 用 Mini LED 補足 HDR 與亮度，相比 OLED 少了烙印顧慮。",
    "pros": [
      "Mini LED 規格稀有",
      "2K 240Hz",
      "價格合理"
    ],
    "cons": [
      "Mini LED 分區與調校需看實測",
      "品牌售後不如一線大廠安心"
    ],
    "bestFor": "想要高亮 HDR 與高刷新，但擔心 OLED 烙印的人。",
    "recommendation": "Mini LED 推薦：規格完整，適合 OLED 以外的高階電競候選。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "240Hz",
      "HDR"
    ],
    "releaseDate": "2025-06-27",
    "historicalLow": {
      "status": "found",
      "amount": 8158,
      "currency": "TWD",
      "converted": 8158,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272943474&cgp=8588",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【AOC】Q27G4ZMN 2K MINI LED 電競顯示器(27型/QHD/240Hz/1ms/Adaptive Sync)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【AOC】Q27G4ZMN 2K MINI LED 電競顯示器(27型/QHD/240Hz/1ms/Adaptive Sync)」最低價為 NT$8,158，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"AOC Q27G4ZMN\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22AOC%20Q27G4ZMN%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"AOC Q27G4ZMN\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22AOC%20Q27G4ZMN%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-oled-g5",
    "category": "monitor",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S27FG502SC Odyssey OLED G5",
    "name": "27 型 2K 180Hz QD-OLED Odyssey G5",
    "price": {
      "currency": "TWD",
      "amount": 11900,
      "converted": 11900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABONA900JTSHY/000001_1773805820.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABON-A900JTSHY",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "QD-OLED",
      "180Hz",
      "0.03ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Odyssey OLED G5 是三星 OLED 電競入門款，重點在 OLED 對比與反應速度。",
    "pros": [
      "QD-OLED 畫質",
      "三星品牌",
      "價格相對高階 OLED 可接受"
    ],
    "cons": [
      "180Hz 不如 240/360Hz",
      "OLED 保養與保固需確認"
    ],
    "bestFor": "看重遊戲畫面、電影黑位與 OLED 對比的人。",
    "recommendation": "三星 OLED 推薦：畫質取向比純規格 Hz 更吸引人。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "Samsung",
      "遊戲"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 10490,
      "currency": "TWD",
      "converted": 10490,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=539716640&cgp=10490",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Samsung 27吋 Odyssey OLED G5 平面電競顯示器 S27FG502SC 廠商直送",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 蝦皮直營 - 3C家電館 / Samsung 27吋 Odyssey OLED G5 平面電競顯示器 S27FG502SC 廠商直送」最低價為 NT$10,490，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Samsung S27FG502SC Odyssey OLED G5\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S27FG502SC%20Odyssey%20OLED%20G5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S27FG502SC Odyssey OLED G5\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S27FG502SC%20Odyssey%20OLED%20G5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-gigabyte-m27up",
    "category": "monitor",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "GIGABYTE",
    "model": "M27UP",
    "name": "27 型雙模 4K 160Hz / FHD 320Hz 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 8990,
      "converted": 8990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABHUA900J98GT/000001_1758009805.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABHU-A900J98GT",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "160Hz",
      "FHD 320Hz",
      "KVM",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "M27UP 主打雙模，日常用 4K、競技可切 FHD 320Hz，還有 KVM 對多設備友善。",
    "pros": [
      "雙模很實用",
      "KVM 對筆電/桌機友善",
      "價格合理"
    ],
    "cons": [
      "雙模使用情境較特定",
      "色彩專業用途仍要校色"
    ],
    "bestFor": "同時接桌機與筆電、遊戲與工作切換的人。",
    "recommendation": "多設備推薦：KVM 與雙模規格讓它很適合複合工作桌。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "雙模",
      "KVM"
    ],
    "releaseDate": "2025-10-24",
    "historicalLow": {
      "status": "found",
      "amount": 8540,
      "currency": "TWD",
      "converted": 8540,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272303868&cgp=8990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【GIGABYTE 技嘉】27型 M27UP 雙模4K 電競螢幕(IPS/3840x2160/G-SYNC/1ms/HDMI/DP/內建喇叭)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【GIGABYTE 技嘉】27型 M27UP 雙模4K 電競螢幕(IPS/3840x2160/G-SYNC/1ms/HDMI/DP/內建喇叭)」最低價為 NT$8,540，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"GIGABYTE M27UP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GIGABYTE%20M27UP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GIGABYTE M27UP\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GIGABYTE%20M27UP%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-benq-ma270u",
    "category": "monitor",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "BenQ",
    "model": "MA270U",
    "name": "27 型 4K Mac 外接護眼螢幕",
    "price": {
      "currency": "TWD",
      "amount": 14888,
      "converted": 14888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABF1A900HW6JB/000001_1754623836.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABF1-A900HW6JB",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "IPS",
      "USB-C",
      "Mac 外接",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "BenQ MA270U 專為 Mac 外接與護眼場景設計，色彩與亮度一致性比低價 4K 更有保障。",
    "pros": [
      "Mac 外接友善",
      "4K 細緻",
      "BenQ 護眼與售後"
    ],
    "cons": [
      "價格高於一般 4K",
      "非高刷新遊戲螢幕"
    ],
    "bestFor": "MacBook 使用者、設計文書與長時間辦公。",
    "recommendation": "Mac 外接推薦：不想研究相容性與色彩調校時，MA 系列省心。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mac",
      "4K",
      "USB-C"
    ],
    "releaseDate": "2026-02-15",
    "historicalLow": {
      "status": "found",
      "amount": 14144,
      "currency": "TWD",
      "converted": 14144,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1245308262&cgp=14144",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：BenQ MA270U 27型 4K 最適合MAC外接護眼螢幕(IPS/HDMI/USB-C/HDR400)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / BenQ MA270U 27型 4K 最適合MAC外接護眼螢幕(IPS/HDMI/USB-C/HDR400)」最低價為 NT$14,144，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"BenQ MA270U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22BenQ%20MA270U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"BenQ MA270U\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22BenQ%20MA270U%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-benq-ew3290u",
    "category": "monitor",
    "rank": 22,
    "budget": "mid",
    "channel": "tw",
    "brand": "BenQ",
    "model": "EW3290U",
    "name": "32 型 4K USB-C 影音護眼螢幕",
    "price": {
      "currency": "TWD",
      "amount": 14888,
      "converted": 14888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABF1A900I90FS/000001_1736480988.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABF1-A900I90FS",
    "buyLabel": "PChome",
    "specs": [
      "32 吋",
      "4K/UHD",
      "IPS",
      "USB-C",
      "影音護眼",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "EW3290U 適合需要大畫面 4K、追劇與文書兼用的人，32 吋比 27 吋更舒展。",
    "pros": [
      "32 吋 4K 好用",
      "BenQ 護眼",
      "USB-C 對筆電方便"
    ],
    "cons": [
      "桌深不足會太大",
      "高刷新遊戲不是主軸"
    ],
    "bestFor": "影音、文書、程式多視窗與筆電外接。",
    "recommendation": "大尺寸 4K 推薦：需要空間與舒適度時，32 吋比 27 吋更有感。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "32吋",
      "4K",
      "USB-C"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 14144,
      "currency": "TWD",
      "converted": 14144,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237705567&cgp=14144",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：BenQ EW3290U 32型 IPS 4K 16:9 60Hz影音護眼螢幕 (HDMI/DP/Type-C)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / BenQ EW3290U 32型 IPS 4K 16:9 60Hz影音護眼螢幕 (HDMI/DP/Type-C)」最低價為 NT$14,144，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"BenQ EW3290U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22BenQ%20EW3290U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"BenQ EW3290U\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22BenQ%20EW3290U%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-dell-u2724d",
    "category": "monitor",
    "rank": 23,
    "budget": "mid",
    "channel": "tw",
    "brand": "Dell",
    "model": "U2724D-4Y",
    "name": "27 型 2K IPS USB-C UltraSharp 螢幕",
    "price": {
      "currency": "TWD",
      "amount": 13888,
      "converted": 13888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOMA900GS1DN/000001_1699955230.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABOM-A900GS1DN",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "IPS",
      "USB-C",
      "四年保",
      "重量：4.49 kg（僅面板/VESA 掛載）"
    ],
    "description": "Dell U2724D 重點是商務/創作可靠度、端口與保固，不靠高刷新取勝。",
    "pros": [
      "UltraSharp 系列",
      "四年保固",
      "辦公與創作穩"
    ],
    "cons": [
      "同價位可買 4K 或 OLED",
      "遊戲規格普通"
    ],
    "bestFor": "公司採購、文字工作、設計入門與多螢幕辦公。",
    "recommendation": "商務主力推薦：長期穩定與保固，比規格表更重要時選它。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "UltraSharp",
      "商務",
      "四年保"
    ],
    "releaseDate": "2023-11-09",
    "historicalLow": {
      "status": "found",
      "amount": 12243,
      "currency": "TWD",
      "converted": 12243,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1207733401&cgp=12888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【DELL 戴爾】U2724D-4Y 27型 IPS 2K 窄邊美型螢幕(Type-C/樞紐旋轉/TUV護眼)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【DELL 戴爾】U2724D-4Y 27型 IPS 2K 窄邊美型螢幕(Type-C/樞紐旋轉/TUV護眼)」最低價為 NT$12,243，最低點日期 2026-05-08。",
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
          "query": "site:mobile01.com \"Dell U2724D-4Y\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dell%20U2724D-4Y%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dell U2724D-4Y\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dell%20U2724D-4Y%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-dell-u2725qe",
    "category": "monitor",
    "rank": 24,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dell",
    "model": "U2725QE-4Y",
    "name": "27 型 4K Thunderbolt USB-C UltraSharp 螢幕",
    "price": {
      "currency": "TWD",
      "amount": 27888,
      "converted": 27888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOLA900IIFQG/000001_1744702043.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABOL-A900IIFQG",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "IPS",
      "Thunderbolt",
      "USB-C",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "U2725QE 是高階生產力螢幕，Thunderbolt/USB-C 擴充與保固適合筆電工作站。",
    "pros": [
      "端口擴充完整",
      "4K 細緻",
      "Dell 保固與商務支援"
    ],
    "cons": [
      "價格高",
      "非遊戲取向"
    ],
    "bestFor": "Mac/Windows 筆電工作站、擴充座需求與商務環境。",
    "recommendation": "高階生產力推薦：把螢幕當 Dock 與長期工作中樞時才值得。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "Thunderbolt",
      "商務"
    ],
    "releaseDate": "2025-02-25",
    "historicalLow": {
      "status": "found",
      "amount": 24888,
      "currency": "TWD",
      "converted": 24888,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1247096815&cgp=27888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【DELL 戴爾】U2725QE-4Y 27吋顯示器(IPS Black/4K UHD/3840x2160/HDMI/DisplayPort/Thunderbolt 4/USB-C)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【DELL 戴爾】U2725QE-4Y 27吋顯示器(IPS Black/4K UHD/3840x2160/HDMI/DisplayPort/Thunderbolt 4/USB-C)」最低價為 NT$24,888，最低點日期 2025-09-17。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 U2725QE 使用者回報明顯線圈噪音，常在低亮度、待機或低供電負載時較嚴重。",
      "issues": [
        {
          "title": "低亮度或低負載時線圈噪音",
          "detail": "部分換貨機仍有噪音；將亮度提高至約 80% 以上或提高 Thunderbolt／USB-C 供電負載可能減輕，但不是所有案例都有效。對高頻聲敏感者應在退換貨期內測試不同亮度、待機與供電情境。",
          "reportCount": 8,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Dell U2725QE owners - questions about coil whine",
              "url": "https://www.reddit.com/r/Monitors/comments/1lo952w/dell_u2725qe_owners_questions_about_coil_whine/"
            },
            {
              "platform": "Dell Community",
              "title": "U2725QE, coil whine",
              "url": "https://www.dell.com/community/en/conversations/monitors/u2725qe-coil-whine/685a37a316a3d04bdeebe2f9"
            },
            {
              "platform": "Dell Community",
              "title": "U2725QE, coil whine, #2",
              "url": "https://www.dell.com/community/en/conversations/monitors/u2725qe-coil-whine-2/6978bb81c678d13f02c5ab24"
            },
            {
              "platform": "Dell Community",
              "title": "Spulenfiepen DELL U2725QE",
              "url": "https://www.dell.com/community/de/conversations/displays/spulenfiepen-dell-u2725qe/67ce8da099b1bd4691924eb2"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "monitor-lg-27gx790a",
    "category": "monitor",
    "rank": 25,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "UltraGear 27GX790A-B",
    "name": "27 型 QHD 480Hz OLED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 22900,
      "converted": 22900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1ZA900IVK4E/000001_1782895465.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC1Z-A900IVK4E",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "OLED",
      "480Hz",
      "UltraGear",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "LG 27GX790A-B 是競技型 OLED，480Hz 對 FPS 玩家很有吸引力。",
    "pros": [
      "480Hz 極高刷新",
      "OLED 反應快",
      "LG UltraGear 系列"
    ],
    "cons": [
      "價格高",
      "OLED 保養與烙印風險需接受"
    ],
    "bestFor": "高階 FPS 玩家、追求極低延遲與 OLED 畫質的人。",
    "recommendation": "高階競技推薦：若 240Hz 不夠，這台是 OLED 480Hz 代表。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "480Hz",
      "FPS"
    ],
    "releaseDate": "2024-11-18",
    "historicalLow": {
      "status": "found",
      "amount": 19900,
      "currency": "TWD",
      "converted": 19900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1251403137&cgp=22900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【LG 樂金】27GX790A-B 27型 UltraGear QHD 480Hz OLED電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / 【LG 樂金】27GX790A-B 27型 UltraGear QHD 480Hz OLED電競螢幕」最低價為 NT$19,900，最低點日期 2026-02-02。",
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
          "query": "site:mobile01.com \"LG UltraGear 27GX790A-B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20UltraGear%2027GX790A-B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG UltraGear 27GX790A-B\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20UltraGear%2027GX790A-B%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-asus-xg32ucwg",
    "category": "monitor",
    "rank": 26,
    "budget": "premium",
    "channel": "tw",
    "brand": "ASUS",
    "model": "XG32UCWG",
    "name": "32 型 OLED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 21212,
      "converted": 21212,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW5A900JNAEB/000001_1768452551.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABW5-A900JNAEB",
    "buyLabel": "PChome",
    "specs": [
      "32 吋",
      "OLED",
      "電競",
      "ASUS",
      "大尺寸",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "XG32UCWG 適合想要 32 吋 OLED 大畫面，但預算低於頂級 Alienware/ROG 旗艦的人。",
    "pros": [
      "32 吋 OLED",
      "ASUS 售後熟悉",
      "價格相對高階 OLED 可接受"
    ],
    "cons": [
      "規格細節需看頁面確認",
      "OLED 需保養"
    ],
    "bestFor": "單機遊戲、影音與桌面大畫面玩家。",
    "recommendation": "32 吋 OLED 推薦：價格比頂級款低，畫質升級感仍明顯。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "32吋",
      "ASUS"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 20888,
      "currency": "TWD",
      "converted": 20888,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=638526256&cgp=20888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：ASUS華碩 32型 ROG Strix OLED XG32UCWG 電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - eclife良興購物網 / ASUS華碩 32型 ROG Strix OLED XG32UCWG 電競螢幕」最低價為 NT$20,888，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"ASUS XG32UCWG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ASUS%20XG32UCWG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ASUS XG32UCWG\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ASUS%20XG32UCWG%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-asus-xg27aqdmes",
    "category": "monitor",
    "rank": 27,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ROG Strix XG27AQDMES",
    "name": "27 型 2K 240Hz QD-OLED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 10888,
      "converted": 10888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABKBA900K092J/000001_1778642752.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABKB-A900K092J",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "QD-OLED",
      "240Hz",
      "0.03ms",
      "重量：4.9 kg（不含底座）"
    ],
    "description": "XG27AQDMES 是 ASUS 27 吋 OLED 電競的甜蜜價格點，通路庫存也比許多 OLED 更好。",
    "pros": [
      "OLED 240Hz 價格漂亮",
      "ASUS/ROG 品牌",
      "庫存相對足"
    ],
    "cons": [
      "OLED 保養仍需注意",
      "比 2K IPS 貴一倍左右"
    ],
    "bestFor": "想升級 OLED、又不想上兩三萬元旗艦的人。",
    "recommendation": "OLED CP 推薦：ROG 品牌加上萬元出頭價格，很適合升級黨。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "240Hz",
      "ROG"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 10888,
      "currency": "TWD",
      "converted": 10888,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1268707725&cgp=10888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【ASUS 華碩】ROG Strix OLED XG27AQDMES 27型 1440p 240Hz 電競螢幕(0.03ms/QD-OLED)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【ASUS 華碩】ROG Strix OLED XG27AQDMES 27型 1440p 240Hz 電競螢幕(0.03ms/QD-OLED)」最低價為 NT$10,888，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"ASUS ROG Strix XG27AQDMES\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ASUS%20ROG%20Strix%20XG27AQDMES%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ASUS ROG Strix XG27AQDMES\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ASUS%20ROG%20Strix%20XG27AQDMES%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-msi-271qrx",
    "category": "monitor",
    "rank": 28,
    "budget": "premium",
    "channel": "tw",
    "brand": "MSI",
    "model": "MPG 271QRX",
    "name": "27 型 WQHD 360Hz QD-OLED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 18900,
      "converted": 18900,
      "confidence": "Yahoo購物中心 2026-07-12 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1ZA900HE04M/000001_1757303897.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/MSI%E5%BE%AE%E6%98%9F-MPG-271QRX-QD-OLED-27%E5%9E%8B-2K-360Hz-HDR%E9%9B%BB%E7%AB%B6%E8%9E%A2%E5%B9%95-10958143.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "27 吋",
      "2K/QHD",
      "QD-OLED",
      "360Hz",
      "MSI MPG",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "MSI MPG 271QRX 是 360Hz OLED 競技款，適合追求畫質與高刷新都要的人。",
    "pros": [
      "360Hz OLED",
      "MPG 高階系列",
      "適合競技與畫質兼顧"
    ],
    "cons": [
      "價格高",
      "庫存少"
    ],
    "bestFor": "高階 FPS/MOBA 玩家與 OLED 競技需求。",
    "recommendation": "360Hz OLED 推薦：比 240Hz 更進一步，適合高階玩家。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "360Hz",
      "MSI"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 17955,
      "currency": "TWD",
      "converted": 17955,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1256819502&cgp=17955",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：MSI微星 MPG 271QRX QD-OLED 27型 2K 360Hz HDR電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / MSI微星 MPG 271QRX QD-OLED 27型 2K 360Hz HDR電競螢幕」最低價為 NT$17,955，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"MSI MPG 271QRX\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22MSI%20MPG%20271QRX%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"MSI MPG 271QRX\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22MSI%20MPG%20271QRX%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-gigabyte-mo27q2a",
    "category": "monitor",
    "rank": 29,
    "budget": "mid",
    "channel": "tw",
    "brand": "GIGABYTE",
    "model": "MO27Q2A",
    "name": "27 型 280Hz QD-OLED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 14666,
      "converted": 14666,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW6A900JKTWS/000001_1783559760.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABW6-A900JKTWS",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "QD-OLED",
      "280Hz",
      "HDR400",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "技嘉 MO27Q2A 介於萬元 OLED 與高階 360Hz 之間，價格與規格很平衡。",
    "pros": [
      "280Hz OLED",
      "內建喇叭",
      "價格中段"
    ],
    "cons": [
      "庫存少",
      "OLED 保固細節要確認"
    ],
    "bestFor": "想要比 240Hz 更高、但不想上 360/480Hz 價格的人。",
    "recommendation": "OLED 中價推薦：規格完整，價格比頂級競技 OLED 友善。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "280Hz",
      "GIGABYTE"
    ],
    "releaseDate": "2025-06-18",
    "historicalLow": {
      "status": "found",
      "amount": 14111,
      "currency": "TWD",
      "converted": 14111,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1261618529&cgp=14666",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【GIGABYTE 技嘉】MO27Q2A 27型 280Hz QD-OLED 電競螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【GIGABYTE 技嘉】MO27Q2A 27型 280Hz QD-OLED 電競螢幕」最低價為 NT$14,111，最低點日期 2026-06-01。",
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
          "query": "site:mobile01.com \"GIGABYTE MO27Q2A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GIGABYTE%20MO27Q2A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GIGABYTE MO27Q2A\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GIGABYTE%20MO27Q2A%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-viewsonic-vg2719u",
    "category": "monitor",
    "rank": 30,
    "budget": "value",
    "channel": "tw",
    "brand": "ViewSonic",
    "model": "VG2719U-4K",
    "name": "27 型 4K IPS USB-C 人體工學螢幕",
    "price": {
      "currency": "TWD",
      "amount": 7290,
      "converted": 7290,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABEZA900K1N6R/000001_1782816950.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABEZ-A900K1N6R",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "IPS",
      "USB-C",
      "人體工學支架",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "VG2719U-4K 用低價給到 4K、USB-C 與人體工學支架，工作用途 CP 值突出。",
    "pros": [
      "4K 價格低",
      "USB-C",
      "支架功能較完整"
    ],
    "cons": [
      "刷新率非電競",
      "品牌調校需看實測"
    ],
    "bestFor": "文書、程式、多視窗與筆電外接。",
    "recommendation": "4K CP 推薦：想要便宜 4K USB-C 工作螢幕，可以優先看它。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "USB-C",
      "人體工學"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6925,
      "currency": "TWD",
      "converted": 6925,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282168335&cgp=7290",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【ViewSonic 優派】VG2719U-4K 27型 IPS 4K人體工學商用螢幕(HDMI/DP/內建喇叭/96W USB-C 供電)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【ViewSonic 優派】VG2719U-4K 27型 IPS 4K人體工學商用螢幕(HDMI/DP/內建喇叭/96W USB-C 供電)」最低價為 NT$6,925，最低點日期 2026-06-19。",
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
          "query": "site:mobile01.com \"ViewSonic VG2719U-4K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ViewSonic%20VG2719U-4K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ViewSonic VG2719U-4K\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ViewSonic%20VG2719U-4K%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-viewsonic-vx2740d",
    "category": "monitor",
    "rank": 31,
    "budget": "mid",
    "channel": "tw",
    "brand": "ViewSonic",
    "model": "VX2740D-4K",
    "name": "27 型 4K 160Hz IPS 雙模電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 7988,
      "converted": 7988,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOIA900K129O/000001_1779250013.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABOI-A900K129O",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "160Hz",
      "IPS",
      "雙模",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "VX2740D-4K 以八千元內切入 4K 160Hz，對遊戲主機與 PC 玩家很有吸引力。",
    "pros": [
      "4K 160Hz 價格低",
      "ViewSonic 通路常見",
      "適合遊戲主機"
    ],
    "cons": [
      "高階 HDR 不是重點",
      "支架與色彩需看頁面"
    ],
    "bestFor": "PS5/PC 雙用與入門 4K 高刷新玩家。",
    "recommendation": "4K 遊戲 CP 推薦：價格接近中階 2K，但解析度升一級。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "160Hz",
      "遊戲主機"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7588,
      "currency": "TWD",
      "converted": 7588,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273971362&cgp=7988",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【ViewSonic 優派】VX2740D-4K 27型4K 160Hz/FHD 320Hz雙模電競螢幕(G-Sync/1ms/相容PS5與Xbox)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【ViewSonic 優派】VX2740D-4K 27型4K 160Hz/FHD 320Hz雙模電競螢幕(G-Sync/1ms/相容PS5與Xbox)」最低價為 NT$7,588，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"ViewSonic VX2740D-4K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ViewSonic%20VX2740D-4K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ViewSonic VX2740D-4K\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ViewSonic%20VX2740D-4K%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-philips-27m2n3500pf",
    "category": "monitor",
    "rank": 32,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "27M2N3500PF",
    "name": "27 型 QHD 260Hz IPS 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 5088,
      "converted": 5088,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABQIA900J82S0/000001_1757486726.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABQI-A900J82S0",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "260Hz",
      "IPS",
      "0.3ms",
      "重量：3.69 kg（不含底座）"
    ],
    "description": "Philips 27M2N3500PF 是五千元級 2K 260Hz，適合看重刷新率又想買知名品牌的人。",
    "pros": [
      "260Hz 價格好",
      "2K 規格完整",
      "品牌辨識度高"
    ],
    "cons": [
      "高階 HDR 與支架不是亮點",
      "與 AOC 同規格要比保固"
    ],
    "bestFor": "FPS/MOBA、預算五千上下的玩家。",
    "recommendation": "高刷新平價推薦：品牌與規格都不錯，適合和 AOC/技嘉一起比。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "2K",
      "260Hz",
      "Philips"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 4833,
      "currency": "TWD",
      "converted": 4833,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269024144&cgp=5088",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Philips 飛利浦】27M2N3500PF 27型 IPS QHD 16:9 260Hz電競螢幕(0.3ms/G-SYNC/HDMI)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Philips 飛利浦】27M2N3500PF 27型 IPS QHD 16:9 260Hz電競螢幕(0.3ms/G-SYNC/HDMI)」最低價為 NT$4,833，最低點日期 2026-05-13。",
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
          "query": "site:mobile01.com \"Philips 27M2N3500PF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%2027M2N3500PF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips 27M2N3500PF\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%2027M2N3500PF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-q27g40xmn",
    "category": "monitor",
    "rank": 33,
    "budget": "mid",
    "channel": "tw",
    "brand": "AOC",
    "model": "Q27G40XMN",
    "name": "27 型 2K 180Hz Mini LED 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 7788,
      "converted": 7788,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABTAA900JBMD6/000001_1759809326.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABTA-A900JBMD6",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "Mini LED",
      "180Hz",
      "1ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Q27G40XMN 是較便宜的 2K Mini LED 選項，適合想要亮度與分區控光的人。",
    "pros": [
      "Mini LED 價格低",
      "2K 180Hz",
      "HDR 潛力較好"
    ],
    "cons": [
      "實際分區效果需看評測",
      "不是 OLED 黑位"
    ],
    "bestFor": "想要亮度與 HDR，但不想買 OLED 的玩家。",
    "recommendation": "Mini LED 入門推薦：比 OLED 便宜且少烙印顧慮。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "2K",
      "HDR"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7493,
      "currency": "TWD",
      "converted": 7493,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282039495&cgp=7788",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【AOC】Q27G40XMN 27型 VA QHD-MiniLED 16:9 180Hz電競螢幕(1ms/Adaptive Sync/HDMI/DP)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【AOC】Q27G40XMN 27型 VA QHD-MiniLED 16:9 180Hz電競螢幕(1ms/Adaptive Sync/HDMI/DP)」最低價為 NT$7,493，最低點日期 2026-06-11。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Q27G40XMN 使用者反映，在 VRR、高更新率或遊戲幀率變動時會出現畫面閃爍。",
      "issues": [
        {
          "title": "VRR 或高更新率下畫面閃爍",
          "detail": "案例發生條件不完全相同，部分可透過 V-Sync、鎖幀或降至 120Hz 改善；此現象也可能受顯示卡驅動及 VA 面板 VRR 特性影響，不應直接視為已確認的硬體故障。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Best Buy",
              "title": "AOC Q27G40XMN customer reviews",
              "url": "https://www.bestbuy.com/site/reviews/aoc-27-q27g40xmn-mini-led-qhd-180hz-gaming-monitor-black/6617199"
            },
            {
              "platform": "Reddit",
              "title": "Has anyone gotten the AOC Q27G40XMN yet and have any feedback?",
              "url": "https://www.reddit.com/r/Monitors/comments/1k5y8zq/has_anyone_gotten_the_aoc_q27g40xmn_yet_and_have/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-oled-g6-500",
    "category": "monitor",
    "rank": 34,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S27FG602SC Odyssey OLED G6",
    "name": "27 型 2K 500Hz OLED Odyssey G6",
    "price": {
      "currency": "TWD",
      "amount": 26900,
      "converted": 26900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABSLA900JNWTU/000001_1768983299.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABSL-A900JNWTU",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "2K/QHD",
      "OLED",
      "500Hz",
      "HDMI 2.1",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Odyssey OLED G6 500Hz 是競技旗艦取向，刷新率比多數 OLED 競品更激進。",
    "pros": [
      "500Hz 極高刷新",
      "OLED 反應速度",
      "Samsung 旗艦規格"
    ],
    "cons": [
      "價格高",
      "需要高階顯卡才吃滿"
    ],
    "bestFor": "頂級 FPS 玩家與高階桌機。",
    "recommendation": "競技旗艦推薦：只有真的追 500Hz 才需要它，否則 240Hz OLED 更划算。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "500Hz",
      "旗艦"
    ],
    "releaseDate": "2025-08-13",
    "historicalLow": {
      "status": "found",
      "amount": 25555,
      "currency": "TWD",
      "converted": 25555,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1274423239&cgp=26900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Samsung 三星】S27FG602SC 27型QHD 500Hz Odyssey OLED G6電競螢幕(HDR/FreeSync/G-Sync相容/0.03ms)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Samsung 三星】S27FG602SC 27型QHD 500Hz Odyssey OLED G6電競螢幕(HDR/FreeSync/G-Sync相容/0.03ms)」最低價為 NT$25,555，最低點日期 2026-06-18。",
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
          "query": "site:mobile01.com \"Samsung S27FG602SC Odyssey OLED G6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S27FG602SC%20Odyssey%20OLED%20G6%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S27FG602SC Odyssey OLED G6\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S27FG602SC%20Odyssey%20OLED%20G6%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-dell-aw3225qf",
    "category": "monitor",
    "rank": 35,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dell",
    "model": "Alienware AW3225QF",
    "name": "32 型 4K 240Hz OLED Alienware 電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 33888,
      "converted": 33888,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOKA900HB1B5/000001_1710325731.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABOK-A900HB1B5",
    "buyLabel": "PChome",
    "specs": [
      "32 吋",
      "4K/UHD",
      "OLED",
      "240Hz",
      "HDMI 2.1",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Alienware AW3225QF 是 32 吋 4K OLED 旗艦代表，畫質、刷新率與保固都屬高階。",
    "pros": [
      "4K OLED 畫質頂級",
      "240Hz",
      "Dell/Alienware 保固較安心"
    ],
    "cons": [
      "價格高",
      "需要大桌深與高階顯卡"
    ],
    "bestFor": "高階遊戲、影音與想一次到位的玩家。",
    "recommendation": "4K OLED 旗艦推薦：預算足夠且顯卡夠強時，這台很有代表性。",
    "score": 91,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "4K",
      "OLED",
      "Alienware"
    ],
    "releaseDate": "2024-02",
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
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Dell Alienware AW3225QF: 樂天市場 - 良興EcLife購物網 良興EcLife購物網 DELL 32型 Alienware QD-OLED 4K 曲面遊戲專用顯示器 AW3225QF 非採用通路或含排除條件；LBJ Dell Alienware AW3225QF: 良興購物網 【良興購物網】DELL 32型 Alienware QD-OLED 4K 曲面遊戲專用顯示器 AW3225QF 非採用通路或含排除條件；LBJ Dell Alienware AW3225QF: 全聯線上購 【全聯線上購】【DELL 戴爾】DELL 32型 Alienware QD-OLED 4K 曲面遊戲專用顯示器 AW3225QF(DELL 32型 Alienware QD-OLED 4K 曲面遊戲專用顯示器 AW3225QF) 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 AW3225QF 使用者回報早期包裝保護材會摩擦 OLED 面板，開箱即出現污痕、蜂巢壓痕或微刮痕。",
      "issues": [
        {
          "title": "包裝保護材造成面板污痕或微刮痕",
          "detail": "部分痕跡無法完全擦除且換貨後仍可能出現；收貨時應在強光下立即檢查整片面板，發現刮痕便在退換貨期內處理。",
          "reportCount": 11,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Poll: Does Your New Alienware AW3225QF Have Micro scratches / Smudges due to Bubble Wrap Packaging?",
              "url": "https://old.reddit.com/r/OLED_Gaming/comments/1au0vt8/poll_does_your_new_alienware_aw3225qf_have_micro/"
            },
            {
              "platform": "Dell Community",
              "title": "AW3225QF, screen scratches",
              "url": "https://www.dell.com/community/en/conversations/alienware-desktops/aw3225qf-screen-scratches/65cfe5920217a51eb1a3fde2"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "monitor-eizo-cs2740",
    "category": "monitor",
    "rank": 36,
    "budget": "premium",
    "channel": "tw",
    "brand": "EIZO",
    "model": "ColorEdge CS2740",
    "name": "27 型 4K AdobeRGB 99% 專業攝影螢幕",
    "price": {
      "currency": "TWD",
      "amount": 59900,
      "converted": 59900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABGWA900ANM62/000001_1741748518.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABGW-A900ANM62",
    "buyLabel": "PChome",
    "specs": [
      "27 吋",
      "4K/UHD",
      "AdobeRGB 99%",
      "ColorEdge",
      "攝影設計",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "ColorEdge CS2740 是專業攝影、印刷與色彩工作用螢幕，不以遊戲或 CP 值為主。",
    "pros": [
      "專業色彩口碑強",
      "4K 細緻",
      "適合嚴肅色彩工作"
    ],
    "cons": [
      "價格非常高",
      "一般辦公/遊戲不需要"
    ],
    "bestFor": "攝影、印刷、設計與需要穩定色彩管理的人。",
    "recommendation": "專業色彩推薦：只有色彩準確度會帶來收益時才值得買。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "專業",
      "4K",
      "色彩管理"
    ],
    "releaseDate": "2020-03-12",
    "historicalLow": {
      "status": "found",
      "amount": 56905,
      "currency": "TWD",
      "converted": 56905,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1226974989&cgp=59900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：EIZO ColorEdge CS2740 UHD4K 27吋螢幕/低藍光低閃頻護眼/薄邊框",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / EIZO ColorEdge CS2740 UHD4K 27吋螢幕/低藍光低閃頻護眼/薄邊框」最低價為 NT$56,905，最低點日期 2026-06-30。",
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
          "query": "site:mobile01.com \"EIZO ColorEdge CS2740\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22EIZO%20ColorEdge%20CS2740%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"EIZO ColorEdge CS2740\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22EIZO%20ColorEdge%20CS2740%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-acer-ed343cur-j0",
    "category": "monitor",
    "rank": 37,
    "budget": "value",
    "channel": "tw",
    "brand": "Acer",
    "model": "ED343CUR J0",
    "name": "34 型 21:9 UWQHD 120Hz 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 5499,
      "converted": 5499,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABTEA900JE4G6/000001_1761734629.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABTE-A900JE4G6",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "3440x1440 / 21:9",
      "120Hz",
      "VA",
      "曲面",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Acer ED343CUR J0 是低預算切入 34 吋 UWQHD 寬螢幕的選項，適合想要左右並排視窗又不想花太多的人。",
    "pros": [
      "34 吋 UWQHD 價格低",
      "120Hz 比一般辦公螢幕順",
      "21:9 適合多視窗工作"
    ],
    "cons": [
      "VA 面板拖影與可視角不如 IPS/OLED",
      "支架與色彩功能偏基本"
    ],
    "bestFor": "預算有限、想先試 21:9 寬螢幕做文書、程式與一般遊戲的人。",
    "recommendation": "入門寬螢幕推薦：價格非常甜，但若很在意動態殘影可往 AOC 180Hz 或 OLED 款升級。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "UWQHD",
      "曲面"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5224,
      "currency": "TWD",
      "converted": 5224,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273683689&cgp=5499",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Acer 宏碁】ED343CUR J0 34型 VA 2K 21:9 120Hz曲面電競螢幕(傾斜/喇叭/1ms)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Acer 宏碁】ED343CUR J0 34型 VA 2K 21:9 120Hz曲面電競螢幕(傾斜/喇叭/1ms)」最低價為 NT$5,224，最低點日期 2026-06-19。",
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
          "query": "site:mobile01.com \"Acer ED343CUR J0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Acer%20ED343CUR%20J0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Acer ED343CUR J0\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Acer%20ED343CUR%20J0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-gigabyte-gs34wqca",
    "category": "monitor",
    "rank": 38,
    "budget": "value",
    "channel": "tw",
    "brand": "GIGABYTE",
    "model": "GS34WQCA",
    "name": "34 型 21:9 WQHD 120Hz 1500R 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 5990,
      "converted": 5990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW5A900K1FZH/000001_1779473385.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABW5-A900K1FZH",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "WQHD / 21:9",
      "120Hz",
      "1500R",
      "120% sRGB",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "GIGABYTE GS34WQCA 以 34 吋 21:9、120Hz 和 1500R 曲率切進低價寬螢幕帶，工作和輕遊戲都能用。",
    "pros": [
      "價格仍在六千元附近",
      "1500R 曲率適合近距離寬螢幕",
      "技嘉通路常見"
    ],
    "cons": [
      "120Hz 不算高刷旗艦",
      "VA 面板需接受暗部拖影風險"
    ],
    "bestFor": "想要平價 34 吋曲面、偶爾玩遊戲、桌深不大的使用者。",
    "recommendation": "平價曲面候選：和 Acer 接近，但技嘉品牌與色域標示較完整，適合比較售後與庫存後選。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "WQHD",
      "曲面"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5990,
      "currency": "TWD",
      "converted": 5990,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282347662&cgp=5990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【GIGABYTE 技嘉】GS34WQCA 34型WQHD VA 16:9 120Hz電競螢幕(1ms/FreeSync/HDMI/DP)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【GIGABYTE 技嘉】GS34WQCA 34型WQHD VA 16:9 120Hz電競螢幕(1ms/FreeSync/HDMI/DP)」最低價為 NT$5,990，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"GIGABYTE GS34WQCA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GIGABYTE%20GS34WQCA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GIGABYTE GS34WQCA\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GIGABYTE%20GS34WQCA%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-msi-pro-mp341cqw-e12",
    "category": "monitor",
    "rank": 39,
    "budget": "value",
    "channel": "tw",
    "brand": "MSI",
    "model": "PRO MP341CQW E12",
    "name": "34 型 UWQHD 120Hz 曲面美型螢幕",
    "price": {
      "currency": "TWD",
      "amount": 6588,
      "converted": 6588,
      "confidence": "Yahoo購物中心 2026-07-12 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABPFA900K0AJK/000001_1778658221.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/MSI%E5%BE%AE%E6%98%9FPRO-MP341CQW-E12-34%E5%9E%8B-VA-UWQHD-120Hz-%E6%9B%B2%E9%9D%A2%E8%9E%A2%E5%B9%95-1ms-12002868.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "34 吋",
      "UWQHD",
      "120Hz",
      "1500R",
      "內建喇叭",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "MSI PRO MP341CQW E12 偏工作和娛樂兼用，34 吋 21:9 加上內建喇叭，桌面可以少一點線材。",
    "pros": [
      "34 吋 UWQHD 價格合理",
      "內建喇叭方便臨時使用",
      "MSI EyesErgo 護眼定位明確"
    ],
    "cons": [
      "不是高階電競或 OLED",
      "內建喇叭音質不會取代外接喇叭"
    ],
    "bestFor": "工作為主、偶爾娛樂，想要一台簡單大視野螢幕的人。",
    "recommendation": "工作寬螢幕推薦：比純電競款安靜，適合辦公桌和居家工作混用。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "UWQHD",
      "文書"
    ],
    "releaseDate": "2026-04-09",
    "historicalLow": {
      "status": "found",
      "amount": 5988,
      "currency": "TWD",
      "converted": 5988,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1271534656&cgp=6288",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【MSI 微星】MSI 微星 PRO MP341CQW E12 曲面電腦螢幕 34吋 120Hz 1ms 2k 內建喇叭 電腦螢幕 白色",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【MSI 微星】MSI 微星 PRO MP341CQW E12 曲面電腦螢幕 34吋 120Hz 1ms 2k 內建喇叭 電腦螢幕 白色」最低價為 NT$5,988，最低點日期 2026-06-09。",
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
          "query": "site:mobile01.com \"MSI PRO MP341CQW E12\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MSI%20PRO%20MP341CQW%20E12%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MSI PRO MP341CQW E12\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MSI%20PRO%20MP341CQW%20E12%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-cu34g4",
    "category": "monitor",
    "rank": 40,
    "budget": "value",
    "channel": "tw",
    "brand": "AOC",
    "model": "CU34G4",
    "name": "34 型 WQHD 180Hz 1500R 曲面電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 6888,
      "converted": 6888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABQRA900JPRWC/000001_1770367990.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABQR-A900JPRWC",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "3440x1440 / 21:9",
      "180Hz",
      "0.5ms MPRT",
      "1500R",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "AOC CU34G4 把 34 吋 21:9 與 180Hz 放在相對親民價格，是寬螢幕遊戲 CP 值很強的候選。",
    "pros": [
      "180Hz 比多數平價 34 吋更順",
      "價格仍不到萬元",
      "21:9 適合沉浸遊戲與多視窗"
    ],
    "cons": [
      "VA 面板不是每個人都喜歡",
      "HDR 與色彩不是高階主打"
    ],
    "bestFor": "想買 34 吋寬螢幕打遊戲，又不想上 OLED 價格的人。",
    "recommendation": "寬螢幕 CP 推薦：價格、刷新率與尺寸最均衡，是多數人先看的 34 吋選項。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "180Hz",
      "CP 值"
    ],
    "releaseDate": "2025-01-20",
    "historicalLow": {
      "status": "found",
      "amount": 6888,
      "currency": "TWD",
      "converted": 6888,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1268861301&cgp=6888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【AOC】AOC CU34G4 曲面電競螢幕 34吋 180Hz 2K 0.5ms HDR 電競螢幕 電腦螢幕 遊戲螢幕 液晶螢幕",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【AOC】AOC CU34G4 曲面電競螢幕 34吋 180Hz 2K 0.5ms HDR 電競螢幕 電腦螢幕 遊戲螢幕 液晶螢幕」最低價為 NT$6,888，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"AOC CU34G4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22AOC%20CU34G4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"AOC CU34G4\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22AOC%20CU34G4%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-acer-ed340cur-x0",
    "category": "monitor",
    "rank": 41,
    "budget": "value",
    "channel": "tw",
    "brand": "Acer",
    "model": "ED340CUR X0",
    "name": "34 型 UWQHD 200Hz 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 6999,
      "converted": 6999,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABTEA900JSV4E/000001_1773130247.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABTE-A900JSV4E",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "UWQHD",
      "200Hz",
      "1ms",
      "曲面 VA",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Acer ED340CUR X0 在低價寬螢幕裡給到 200Hz，適合比一般 120Hz 更在意滑順度的玩家。",
    "pros": [
      "200Hz 規格亮眼",
      "價格仍低",
      "34 吋 UWQHD 視野好"
    ],
    "cons": [
      "VA 面板動態表現需實際感受",
      "支架與 USB-C 等生產力功能較少"
    ],
    "bestFor": "想在七千元上下買到 34 吋高刷新寬螢幕的人。",
    "recommendation": "高刷平價候選：如果比起品牌調校更重視刷新率，這台比 120Hz 款更有吸引力。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "200Hz",
      "電競"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5499,
      "currency": "TWD",
      "converted": 5499,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1275471429&cgp=6999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Acer 宏碁】ED340CUR X0 34型 VA 2K 21:9 200Hz曲面電競螢幕(1500R/傾斜/喇叭/HDR10/1ms)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Acer 宏碁】ED340CUR X0 34型 VA 2K 21:9 200Hz曲面電競螢幕(1500R/傾斜/喇叭/HDR10/1ms)」最低價為 NT$5,499，最低點日期 2026-05-21。",
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
          "query": "site:mobile01.com \"Acer ED340CUR X0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Acer%20ED340CUR%20X0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Acer ED340CUR X0\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Acer%20ED340CUR%20X0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-asus-xg34wcdms",
    "category": "monitor",
    "rank": 42,
    "budget": "premium",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ROG Strix XG34WCDMS",
    "name": "34 型 UWQHD 280Hz QD-OLED 曲面電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 26888,
      "converted": 26888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABKBA900K0YA0/000001_1779246107.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABKB-A900K0YA0",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "3440x1440",
      "280Hz",
      "QD-OLED",
      "USB-C",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "ROG Strix XG34WCDMS 是高階 34 吋 QD-OLED 寬螢幕，主打極快反應、280Hz 與 USB-C。",
    "pros": [
      "QD-OLED 對比與反應速度優秀",
      "280Hz 高刷新率",
      "ROG 售後與 OLED 保固資訊較完整"
    ],
    "cons": [
      "價格明顯高於 VA 寬螢幕",
      "OLED 仍需注意長時間靜態畫面"
    ],
    "bestFor": "高階遊戲、影音與想要 21:9 OLED 沉浸感的人。",
    "recommendation": "34 吋 OLED 推薦：比 49 吋容易放進一般桌面，畫質與刷新率都很強。",
    "score": 91,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "OLED",
      "280Hz",
      "USB-C"
    ],
    "releaseDate": "2026-05-07",
    "historicalLow": {
      "status": "found",
      "amount": 26888,
      "currency": "TWD",
      "converted": 26888,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1281721897&cgp=26888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：ASUS 華碩 ROG Strix XG34WCDMS 電競螢幕(34型/3440x1440/280Hz/0.03ms/QD-OLED/HDMI2.1/Type-C)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / ASUS 華碩 ROG Strix XG34WCDMS 電競螢幕(34型/3440x1440/280Hz/0.03ms/QD-OLED/HDMI2.1/Type-C)」最低價為 NT$26,888，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"ASUS ROG Strix XG34WCDMS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ASUS%20ROG%20Strix%20XG34WCDMS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ASUS ROG Strix XG34WCDMS\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ASUS%20ROG%20Strix%20XG34WCDMS%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-s34dg852sc",
    "category": "monitor",
    "rank": 43,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S34DG852SC",
    "name": "34 型 OLED G8 21:9 175Hz 曲面智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 24153,
      "converted": 24153,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABUFA900K03Q2/000001_1778565462.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMSUNG%E4%B8%89%E6%98%9F-34%E5%90%8B-Odyssey-OLED-G8-%E6%9B%B2%E9%9D%A2%E9%9B%BB%E7%AB%B6%E9%A1%AF%E7%A4%BA%E5%99%A8-G85SD-S34DG8-12090389.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "34 吋",
      "UWQHD / 21:9",
      "OLED",
      "175Hz",
      "智慧聯網",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Samsung OLED G8 34 吋結合 21:9、OLED 與智慧聯網功能，適合同時看重遊戲與影音串流的人。",
    "pros": [
      "OLED 畫質與反應速度強",
      "智慧聯網功能可獨立看影音",
      "外型與抗眩光處理佳"
    ],
    "cons": [
      "價格高於一般 34 吋",
      "175Hz 不如最新 240/280Hz OLED"
    ],
    "bestFor": "桌面想兼顧 PC 遊戲、主機與影音串流的人。",
    "recommendation": "影音型 OLED 推薦：如果會把螢幕當小電視用，OLED G8 的智慧功能很加分。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "OLED",
      "智慧聯網",
      "21:9"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 24153,
      "currency": "TWD",
      "converted": 24153,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=566204153&cgp=24153",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Samsung 34吋 Odyssey OLED G8 曲面電競顯示器 S34DG852SC 廠商直送",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 蝦皮直營 - 3C家電館 / Samsung 34吋 Odyssey OLED G8 曲面電競顯示器 S34DG852SC 廠商直送」最低價為 NT$24,153，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Samsung S34DG852SC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S34DG852SC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S34DG852SC\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S34DG852SC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-pd34",
    "category": "monitor",
    "rank": 44,
    "budget": "premium",
    "channel": "tw",
    "brand": "AOC",
    "model": "PD34",
    "name": "34 型 Porsche Design 240Hz QD-OLED 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 29988,
      "converted": 29988,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABQRA900K5BI4/000001_1782298311.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABQR-A900K5BI4",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "WQHD / 21:9",
      "QD-OLED",
      "240Hz",
      "1800R",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "AOC PD34 是 Porsche Design 外觀的 34 吋 QD-OLED，規格和設計感都走高階路線。",
    "pros": [
      "QD-OLED 240Hz",
      "設計感強",
      "21:9 遊戲沉浸感佳"
    ],
    "cons": [
      "價格高",
      "設計溢價不是每個人都需要"
    ],
    "bestFor": "想要高階 OLED，又在意螢幕外觀和桌面質感的人。",
    "recommendation": "設計型 OLED 候選：規格很完整，但若只看 CP 值，ASUS/AOC 平價 34 吋會更理性。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "QD-OLED",
      "240Hz",
      "設計"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 29988,
      "currency": "TWD",
      "converted": 29988,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1283912346&cgp=29988",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：AOC PD34 PORSCHE DESIGN 曲面電競螢幕(34型/WQHD/HDR/240Hz/0.03ms/QD-OLED)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / AOC PD34 PORSCHE DESIGN 曲面電競螢幕(34型/WQHD/HDR/240Hz/0.03ms/QD-OLED)」最低價為 NT$29,988，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"AOC PD34\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22AOC%20PD34%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"AOC PD34\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22AOC%20PD34%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-s49fg916e",
    "category": "monitor",
    "rank": 45,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S49FG916E",
    "name": "49 型 Odyssey G9 Dual QHD 144Hz 32:9 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 22900,
      "converted": 22900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW5A900K1VVE/000001_1779865665.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABW5-A900K1VVE",
    "buyLabel": "PChome",
    "specs": [
      "49 吋",
      "5120x1440 / 32:9",
      "144Hz",
      "1000R",
      "HDR600",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Samsung Odyssey G9 49 吋相當於兩台 27 吋 QHD 並排，適合大量視窗、剪輯時間軸與沉浸遊戲。",
    "pros": [
      "32:9 大視野非常適合多工",
      "Dual QHD 比 3840x1080 細緻",
      "價格比 OLED G9 低很多"
    ],
    "cons": [
      "桌深與桌寬需求高",
      "建議搭配高承重懸臂支架或穩固原廠腳架"
    ],
    "bestFor": "想用一台螢幕取代雙 27 吋的人，尤其是剪輯、交易、多文件與模擬遊戲。",
    "recommendation": "49 吋 CP 推薦：Dual QHD 加上 144Hz，價格比 OLED 版本親切，是超寬大螢幕甜蜜點。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "49吋",
      "32:9",
      "Dual QHD"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 22900,
      "currency": "TWD",
      "converted": 22900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282285706&cgp=22900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Samsung 三星 三星 49吋 S49FG916E Odyssey G9 曲面電競顯示器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Samsung 三星 三星 49吋 S49FG916E Odyssey G9 曲面電競顯示器」最低價為 NT$22,900，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Samsung S49FG916E\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S49FG916E%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S49FG916E\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S49FG916E%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-s49dg932scxzw",
    "category": "monitor",
    "rank": 46,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S49DG932SCXZW",
    "name": "49 型 Odyssey OLED G9 Dual QHD 240Hz 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 34999,
      "converted": 34999,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM10A900HZCPE/000001_1781766568.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM10-A900HZCPE",
    "buyLabel": "PChome",
    "specs": [
      "49 吋",
      "5120x1440 / 32:9",
      "OLED",
      "240Hz",
      "0.03ms",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Odyssey OLED G9 把 49 吋 32:9、OLED 與 240Hz 結合，是追求沉浸感和畫質的高階選擇。",
    "pros": [
      "49 吋 OLED 沉浸感極強",
      "240Hz 與 0.03ms 反應快速",
      "可取代雙螢幕配置"
    ],
    "cons": [
      "價格高",
      "大型 OLED 更需要注意靜態畫面與支架承重"
    ],
    "bestFor": "高階遊戲、模擬器、影音創作和想要一台超寬 OLED 主螢幕的人。",
    "recommendation": "49 吋 OLED 推薦：畫質與速度都頂，但務必確認桌深與支架至少能承受螢幕重量。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "49吋",
      "OLED",
      "32:9"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 34999,
      "currency": "TWD",
      "converted": 34999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282898133&cgp=36900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Samsung 三星 49吋 Odyssey OLED G9 S49DG932SCXZW 曲面電競螢幕 G93SD",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Samsung 三星 49吋 Odyssey OLED G9 S49DG932SCXZW 曲面電競螢幕 G93SD」最低價為 NT$34,999，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Samsung S49DG932SCXZW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S49DG932SCXZW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S49DG932SCXZW\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S49DG932SCXZW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-aoc-ag456uczd",
    "category": "monitor",
    "rank": 47,
    "budget": "premium",
    "channel": "tw",
    "brand": "AOC",
    "model": "AG456UCZD",
    "name": "45 型 21:9 OLED 240Hz 800R 曲面電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 38888,
      "converted": 38888,
      "confidence": "momo購物 2026-07-13 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABW9A900K5BHI/000001_1782298284.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0001232/goodsDetail/TP00012320000398",
    "buyLabel": "momo購物",
    "specs": [
      "45 吋",
      "21:9",
      "OLED",
      "240Hz",
      "800R",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "AOC AG456UCZD 是 45 吋 21:9 OLED 大曲面螢幕，視野比 34 吋更開闊，但桌面占用也明顯增加。",
    "pros": [
      "45 吋 21:9 沉浸感強",
      "OLED 240Hz",
      "800R 曲率適合包覆視野"
    ],
    "cons": [
      "桌深、坐距與支架承重都要仔細確認",
      "文字細緻度不一定適合所有文書工作"
    ],
    "bestFor": "以遊戲、影音和沉浸感為主，桌面空間充足的人。",
    "recommendation": "45 吋 OLED 候選：遊戲爽度很高，但如果主要寫字或程式，建議先比較 34/49 吋解析度密度。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "45吋",
      "OLED",
      "大螢幕"
    ],
    "releaseDate": "2024-03-26",
    "historicalLow": {
      "status": "found",
      "amount": 37777,
      "currency": "TWD",
      "converted": 37777,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1264935872&cgp=38888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【AOC】AOC AG456UCZD 45型 OLED 2K 240Hz 21:9 曲面電競螢幕(0.01ms/HDMI/HDR)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【AOC】AOC AG456UCZD 45型 OLED 2K 240Hz 21:9 曲面電競螢幕(0.01ms/HDMI/HDR)」最低價為 NT$37,777，最低點日期 2026-05-16。",
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
          "query": "site:mobile01.com \"AOC AG456UCZD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22AOC%20AG456UCZD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"AOC AG456UCZD\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22AOC%20AG456UCZD%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-lg-45gx90sa",
    "category": "monitor",
    "rank": 48,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "45GX90SA-B",
    "name": "45 型 UltraGear 21:9 OLED 240Hz 智慧曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 41310,
      "converted": 41310,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADZMA900JPITR/000001_1770272421.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADZM-A900JPITR",
    "buyLabel": "PChome",
    "specs": [
      "45 吋",
      "WQHD / 21:9",
      "OLED",
      "240Hz",
      "webOS",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "LG 45GX90SA-B 是 45 吋 OLED 21:9 智慧電競螢幕，內建 webOS，兼顧 PC、主機與影音用途。",
    "pros": [
      "45 吋 OLED 畫面震撼",
      "webOS 可獨立使用串流",
      "LG OLED 調校與品牌口碑強"
    ],
    "cons": [
      "價格高",
      "大尺寸 21:9 對桌深與坐距要求高"
    ],
    "bestFor": "想把工作桌變成遊戲/影音主戰場，又喜歡 LG OLED 生態的人。",
    "recommendation": "智慧 45 吋推薦：如果會常看影音，LG webOS 比純 PC 螢幕更方便。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "45吋",
      "OLED",
      "智慧聯網"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 37900,
      "currency": "TWD",
      "converted": 37900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=638516659&cgp=38990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：LG 樂金 45吋 45GX90SA-B WQHD 240Hz OLED曲面智慧電競螢幕 公司貨 廠商直送",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 蝦皮直營 - 3C家電館 / LG 樂金 45吋 45GX90SA-B WQHD 240Hz OLED曲面智慧電競螢幕 公司貨 廠商直送」最低價為 NT$37,900，最低點日期 2026-02-02。",
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
          "query": "site:mobile01.com \"LG 45GX90SA-B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%2045GX90SA-B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG 45GX90SA-B\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%2045GX90SA-B%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-samsung-s57cg952nc",
    "category": "monitor",
    "rank": 49,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S57CG952NC",
    "name": "57 型 Odyssey Neo G9 Dual UHD 240Hz Mini LED 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 69900,
      "converted": 69900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABT5A900J8G5R/000001_1775545592.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABT5-A900J8G5R",
    "buyLabel": "PChome",
    "specs": [
      "57 吋",
      "7680x2160 / 32:9",
      "Mini LED",
      "240Hz",
      "1000R",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Odyssey Neo G9 57 吋是 Dual UHD 超寬旗艦，解析度與尺寸都非常吃桌面、顯卡與支架承重。",
    "pros": [
      "57 吋 Dual UHD 工作區巨大",
      "Mini LED 與 HDR 規格高",
      "240Hz 旗艦定位"
    ],
    "cons": [
      "價格高且非常吃顯卡",
      "支架需特別確認 57 吋與重量支援"
    ],
    "bestFor": "頂級模擬器、金融交易、多工工作站與有足夠桌深的大桌使用者。",
    "recommendation": "超大寬螢幕旗艦：只有真的需要 57 吋 Dual UHD 才值得，懸臂支架建議看 27kg/30kg 級距。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "57吋",
      "32:9",
      "Mini LED"
    ],
    "releaseDate": "2023-10",
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
      "note": "未找到台灣型號 S57CG952NC 可公開驗證的可信新品史低；已排除只確認 G95NC 同系列且未明確聲稱歷史最低的海外促銷。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung S57CG952NC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S57CG952NC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S57CG952NC\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S57CG952NC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-dell-u3425we",
    "category": "monitor",
    "rank": 50,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dell",
    "model": "U3425WE-5Y",
    "name": "34 型 21:9 IPS Black 120Hz USB-C 商務曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 39888,
      "converted": 39888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABOMA900HIJN3/000001_1716881117.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABOM-A900HIJN3",
    "buyLabel": "PChome",
    "specs": [
      "34 吋",
      "3440x1440 / 21:9",
      "IPS",
      "120Hz",
      "Type-C",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "Dell U3425WE 是偏商務生產力的 34 吋寬螢幕，重點在 USB-C、保固與辦公穩定性。",
    "pros": [
      "Dell UltraSharp 商務口碑佳",
      "USB-C 與辦公連接性完整",
      "IPS 類型更適合文字與色彩穩定"
    ],
    "cons": [
      "價格遠高於平價 34 吋 VA",
      "不是高階電競取向"
    ],
    "bestFor": "MacBook/筆電外接、長時間文書、程式與會議使用者。",
    "recommendation": "商務寬螢幕推薦：如果你把穩定、保固、Type-C 擺在遊戲規格前面，這台很合理。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "21:9",
      "USB-C",
      "商務"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 39400,
      "currency": "TWD",
      "converted": 39400,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269194151&cgp=39900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【DELL 戴爾】U3425WE-5Y 34吋顯示器(IPS/WQHD/3440 x 1440/曲面螢幕/HDMI/Thunderbolt™ 4)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【DELL 戴爾】U3425WE-5Y 34吋顯示器(IPS/WQHD/3440 x 1440/曲面螢幕/HDMI/Thunderbolt™ 4)」最低價為 NT$39,400，最低點日期 2026-01-26。",
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
          "query": "site:mobile01.com \"Dell U3425WE-5Y\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dell%20U3425WE-5Y%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dell U3425WE-5Y\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dell%20U3425WE-5Y%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-msi-mpg-491cqp",
    "category": "monitor",
    "rank": 51,
    "budget": "premium",
    "channel": "tw",
    "brand": "MSI",
    "model": "MPG 491CQP",
    "name": "49 型 DQHD QD-OLED 144Hz Type-C 曲面螢幕",
    "price": {
      "currency": "TWD",
      "amount": 32900,
      "converted": 32900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABPDA900H9PEB/000001_1709257135.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABPD-A900H9PEB",
    "buyLabel": "PChome",
    "specs": [
      "49 吋",
      "5120x1440 / 32:9",
      "QD-OLED",
      "144Hz",
      "Type-C 90W",
      "重量：未標示（通路頁未明確列出）"
    ],
    "description": "MSI MPG 491CQP 是 49 吋 QD-OLED 超寬螢幕，帶 Type-C 供電與 KVM，工作與遊戲都能整合。",
    "pros": [
      "49 吋 QD-OLED 價格具競爭力",
      "Type-C 90W 與 KVM 對筆電族方便",
      "32:9 可取代雙螢幕"
    ],
    "cons": [
      "144Hz 不如 240Hz OLED G9",
      "仍需高承重支架或穩固大桌"
    ],
    "bestFor": "同時接桌機與筆電、需要 32:9 大工作區與 OLED 畫質的人。",
    "recommendation": "49 吋生產力 OLED 推薦：比 Samsung OLED G9 多了明確 Type-C/KVM 賣點，辦公整合更方便。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "寬螢幕",
      "49吋",
      "QD-OLED",
      "Type-C"
    ],
    "releaseDate": "2024-03-21",
    "historicalLow": {
      "status": "found",
      "amount": 31255,
      "currency": "TWD",
      "converted": 31255,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1216821164&cgp=32900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【MSI 微星】MPG 491CQP QD-OLED 49型 DQHD 144Hz 電競曲面顯示器(0.03ms/ClearMR 8000/HDR400/1800R)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【MSI 微星】MPG 491CQP QD-OLED 49型 DQHD 144Hz 電競曲面顯示器(0.03ms/ClearMR 8000/HDR400/1800R)」最低價為 NT$31,255，最低點日期 2026-05-13。",
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
          "query": "site:mobile01.com \"MSI MPG 491CQP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MSI%20MPG%20491CQP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MSI MPG 491CQP\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MSI%20MPG%20491CQP%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-costco-philips-27e1n1100d",
    "category": "monitor",
    "rank": 52,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "27E1N1100D",
    "name": "27吋 FHD IPS 100Hz 電腦螢幕",
    "price": {
      "currency": "TWD",
      "amount": 2699,
      "converted": 2699,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h19/hcf/277970938331166.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0001232/goodsDetail/TP00012320000478",
    "buyLabel": "momo購物",
    "specs": [
      "27 吋 IPS",
      "1920 x 1080",
      "100Hz",
      "HDMI 1.4 / DVI / VGA",
      "重量：6.6kg",
      "Costco 評價 4.5 / 79 則"
    ],
    "description": "Philips 27E1N1100D 是 Costco 低價 27 吋 IPS 螢幕，適合文書、雙螢幕與基本居家辦公。",
    "pros": [
      "價格低",
      "Costco 79 則評論、4.5 分"
    ],
    "cons": [
      "FHD 解析度在 27 吋較粗",
      "非高階色彩或電競定位"
    ],
    "bestFor": "文書、視訊、雙螢幕與預算優先的人。",
    "recommendation": "好市多補充推薦：27E1N1100D 是 Costco 低價文書螢幕代表，重量資訊也清楚。",
    "score": 83,
    "voltage": "100-240VAC 50-60Hz；台灣通路",
    "warranty": "依 Costco 好市多商品頁、品牌 3 年保固與退貨政策",
    "tags": [
      "Costco",
      "27吋",
      "文書"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2699,
      "currency": "TWD",
      "converted": 2699,
      "sourceUrl": "https://www.momoshop.com.tw/TP/TP0001232/goodsDetail/TP00012320000478",
      "sourceTitle": "momo購物 商品頁：【Philips 飛利浦】Philips 飛利浦 27E1N1100D 27型 IPS 1ms 電腦螢幕 促",
      "evidenceSnippet": "momo購物 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 2699 TWD，低於既有可驗證史低。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-11",
      "note": "採用同型號、同尺寸／容量／規格的可信新品公開價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips 27E1N1100D\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%2027E1N1100D%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips 27E1N1100D\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%2027E1N1100D%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-costco-acer-ed270-p0",
    "category": "monitor",
    "rank": 53,
    "budget": "value",
    "channel": "tw",
    "brand": "Acer",
    "model": "ED270 P0",
    "name": "Nitro 27 吋 FHD 曲面電競螢幕",
    "price": {
      "currency": "TWD",
      "amount": 3499,
      "converted": 3499,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h51/h54/386020452630558.jpg",
    "buyUrl": "https://www.costco.com.tw/Digital-Mobile/Laptops-Computers/Monitors/Acer-Nitro-27-inch-Gaming-Curved-Monitor-ED270-P0/p/156545",
    "buyLabel": "Costco 好市多",
    "specs": [
      "27 吋 VA 曲面",
      "1920 x 1080",
      "重量：5.5公斤",
      "3 年保固",
      "Costco 評價 4.8 / 74 則"
    ],
    "description": "Costco 評價不錯的螢幕候選，依尺寸、解析度、重量與支架承重補進比較。",
    "pros": [
      "價格與評價具參考性",
      "重量資訊清楚"
    ],
    "cons": [
      "裝懸臂支架前需確認 VESA 與重量",
      "低價款面板與解析度有取捨"
    ],
    "bestFor": "想在好市多買文書、遊戲或 4K 螢幕的人",
    "recommendation": "好市多補充推薦：Nitro 27 吋 FHD 曲面電競螢幕 評價不錯，補進電腦螢幕分類作為 Costco 候選比較。",
    "score": 84,
    "voltage": "依 Costco 商品頁與電源供應器標示；螢幕需確認 VESA 與支架承重",
    "warranty": "依 Costco 好市多商品頁與品牌 3 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "27吋",
      "曲面",
      "FHD"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2799,
      "currency": "TWD",
      "converted": 2799,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1262943902&cgp=3499",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】Acer Nitro 27吋 電競曲面螢幕 ED270 P0 Acer Nitro 27 inch Gaming Curved Monitor ED270 P0",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】Acer Nitro 27吋 電競曲面螢幕 ED270 P0 Acer Nitro 27 inch Gaming Curved Monitor ED270 P0」最低價為 NT$2,799，最低點日期 2026-04-13。",
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
          "query": "site:mobile01.com \"Acer ED270 P0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Acer%20ED270%20P0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Acer ED270 P0\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Acer%20ED270%20P0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "monitor-costco-samsung-s32d706eac",
    "category": "monitor",
    "rank": 54,
    "budget": "mid",
    "channel": "tw",
    "brand": "Samsung",
    "model": "S32D706EAC",
    "name": "ViewFinity S7 32 吋 UHD 平面顯示器",
    "price": {
      "currency": "TWD",
      "amount": 8199,
      "converted": 8199,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hac/h33/274515179241502.jpg",
    "buyUrl": "https://www.costco.com.tw/Digital-Mobile/Laptops-Computers/Monitors/Samsung-ViewFinity-S7-32-inch-UHD-Monitor-S32D706EAC/p/147917",
    "buyLabel": "Costco 好市多",
    "specs": [
      "32 吋 VA",
      "4K (3840 x 2160)",
      "重量：8公斤",
      "AC 100-240V",
      "Costco 評價 4.5 / 31 則"
    ],
    "description": "Costco 評價不錯的螢幕候選，依尺寸、解析度、重量與支架承重補進比較。",
    "pros": [
      "價格與評價具參考性",
      "重量資訊清楚"
    ],
    "cons": [
      "裝懸臂支架前需確認 VESA 與重量",
      "低價款面板與解析度有取捨"
    ],
    "bestFor": "想在好市多買文書、遊戲或 4K 螢幕的人",
    "recommendation": "好市多補充推薦：ViewFinity S7 32 吋 UHD 平面顯示器 評價不錯，補進電腦螢幕分類作為 Costco 候選比較。",
    "score": 87,
    "voltage": "AC 100-240V；螢幕需確認 VESA 與支架承重",
    "warranty": "依 Costco 好市多商品頁與品牌 3 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "32吋",
      "4K",
      "生產力"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 8199,
      "currency": "TWD",
      "converted": 8199,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1232574103&cgp=8199",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】Samsung ViewFinity S7 32吋 UHD 高解析度平面顯示器 S32D706EAC Samsung ViewFinity S7 32 inch UHD Monitor S32D706EAC",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】Samsung ViewFinity S7 32吋 UHD 高解析度平面顯示器 S32D706EAC Samsung ViewFinity S7 32 inch UHD Monitor S32D706EAC」最低價為 NT$8,199，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Samsung S32D706EAC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20S32D706EAC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung S32D706EAC\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20S32D706EAC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();
