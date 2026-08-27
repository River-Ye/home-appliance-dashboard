(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("network-switch", [
  {
    "id": "network-switch-dlink-dms-108",
    "category": "network-switch",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "D-Link",
    "model": "DMS-108",
    "name": "D-Link DMS-108 8 埠 2.5G 無網管交換器",
    "type": "2_5g",
    "price": {
      "currency": "TWD",
      "amount": 2399,
      "converted": 2399,
      "confidence": "D-Link DShop 2026-08-24 exact-model 台灣官方商城公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC0ZA900I86JK/000001_1781783508.jpg",
    "buyUrl": "https://dshop.dlink.com.tw/goods/details/14585",
    "buyLabel": "D-Link DShop 官方商城",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "2_5g",
      "primaryPortSpeedsGbps": [
        0.1,
        1,
        2.5
      ],
      "extraUplinks": [],
      "management": "unmanaged",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 8.586,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 14.5,
        "depth": 8.2,
        "height": 2.8
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://www.dlink.com/tw/zh/products/dms-108"
    },
    "specs": [
      "主連接埠：8 個 100M／1G／2.5G RJ45",
      "速率等級：2.5G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：無網管",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇（0 dBA）",
      "最大功耗：8.586 W",
      "操作溫度：0–40°C",
      "尺寸：寬 14.5 x 深 8.2 x 高 2.8 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 2.5G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇（0 dBA）、最大功耗 8.586 W、操作上限 40°C 與機身尺寸。採即插即用，沒有 VLAN 或遠端管理能力。",
    "pros": [
      "八個主要 RJ45 全部支援 2.5G",
      "金屬外殼、無風扇（0 dBA），官方最大功耗 8.586 W",
      "40°C 操作溫度上限與台灣原廠 3 年保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "沒有 VLAN、LACP、STP 等管理功能",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45"
    ],
    "bestFor": "需要 2.5G NAS、Wi-Fi 6／7 AP 有線回程與多台高速裝置的弱電箱。",
    "recommendation": "綜合推薦：八個 2.5G 埠、低於 9W 的官方最大功耗與無風扇金屬機身，在速度、溫升與台灣售後之間最均衡。",
    "releaseDate": "2023-06-20",
    "historicalLow": {
      "status": "found",
      "amount": 1999,
      "currency": "TWD",
      "converted": 1999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1254373888&cgp=2399",
      "sourceTitle": "LBJ 歷史價格：D-Link DMS-108 8埠 100M／1G／2.5G",
      "evidenceSnippet": "LBJ price_data 對 DMS-108 exact listing 記錄 NT$1,999，日期範圍 2026-06-17（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"DMS-108\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22DMS-108%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"DMS-108\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22DMS-108%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 96,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 3 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "綜合推薦",
      "2.5G 8 埠",
      "無網管",
      "非 PoE",
      "金屬外殼",
      "無風扇（0 dBA）",
      "3 年保固"
    ]
  },
  {
    "id": "network-switch-netgear-gs308",
    "category": "network-switch",
    "rank": 2,
    "budget": "value",
    "channel": "tw",
    "brand": "NETGEAR",
    "model": "GS308",
    "name": "NETGEAR GS308 8 埠 Gigabit 無網管交換器",
    "type": "1g",
    "price": {
      "currency": "TWD",
      "amount": 1260,
      "converted": 1260,
      "confidence": "PChome 24h 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF4HA9008XMTH/000001_1606809222.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF4H-A9008XMTH",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "1g",
      "primaryPortSpeedsGbps": [
        0.01,
        0.1,
        1
      ],
      "extraUplinks": [],
      "management": "unmanaged",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 3.04,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 15.8,
        "depth": 10.1,
        "height": 2.9
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://www.netgear.com/business/wired/switches/unmanaged/gs308/"
    },
    "specs": [
      "主連接埠：8 個 10M／100M／1G RJ45",
      "速率等級：1G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：無網管",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：被動式無風扇",
      "最大功耗：3.04 W（v3）",
      "操作溫度：0–40°C",
      "尺寸：寬 15.8 x 深 10.1 x 高 2.9 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 1G 非 PoE 網路交換器；官方資料明示金屬外殼、被動式無風扇、最大功耗 3.04 W（v3）、操作上限 40°C 與機身尺寸。採即插即用，沒有 VLAN 或遠端管理能力。",
    "pros": [
      "八個主要 RJ45 全部支援 1G",
      "金屬外殼、被動式無風扇，官方最大功耗 3.04 W（v3）",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "沒有 VLAN、LACP、STP 等管理功能",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45"
    ],
    "bestFor": "以 1G 網路為主、重視低功耗與長期穩定的弱電箱。",
    "recommendation": "低功耗推薦：3.04W 官方最大功耗、無風扇與金屬殼，適合不需管理功能的 1G 弱電箱。",
    "releaseDate": "2016-04-13",
    "historicalLow": {
      "status": "found",
      "amount": 999,
      "currency": "TWD",
      "converted": 999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282775652&cgp=999",
      "sourceTitle": "LBJ 歷史價格：NETGEAR GS308 8埠 Gigabit 無網管金屬殼",
      "evidenceSnippet": "LBJ price_data 對 GS308 exact listing 記錄 NT$999，日期範圍 2026-07-24–2026-08-24（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com v3 \"GS308\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20v3%20%22GS308%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com v3 \"GS308\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20v3%20%22GS308%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 95,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 3 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "1G 8 埠",
      "無網管",
      "非 PoE",
      "金屬外殼",
      "被動式無風扇",
      "3 年保固"
    ]
  },
  {
    "id": "network-switch-tplink-tl-sg108",
    "category": "network-switch",
    "rank": 3,
    "budget": "value",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "TL-SG108",
    "name": "TP-Link TL-SG108 8 埠 Gigabit 無網管交換器",
    "type": "1g",
    "price": {
      "currency": "TWD",
      "amount": 699,
      "converted": 699,
      "confidence": "PChome 24h 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF2JA75089227/000001_1768994123.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF2J-A75089227",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "1g",
      "primaryPortSpeedsGbps": [
        0.01,
        0.1,
        1
      ],
      "extraUplinks": [],
      "management": "unmanaged",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 3.75,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 15.8,
        "depth": 10.1,
        "height": 2.5
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://www.tp-link.com/tw/business-networking/easy-smart-switch/tl-sg108/"
    },
    "specs": [
      "主連接埠：8 個 10M／100M／1G RJ45",
      "速率等級：1G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：無網管",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：3.75 W（官方目前產品頁規格）",
      "操作溫度：0–40°C",
      "尺寸：寬 15.8 x 深 10.1 x 高 2.5 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 1G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 3.75 W（官方目前產品頁規格）（官方 V4；不同硬體版可能不同）、操作上限 40°C 與機身尺寸。採即插即用，沒有 VLAN 或遠端管理能力。",
    "pros": [
      "八個主要 RJ45 全部支援 1G",
      "金屬外殼、無風扇，官方最大功耗 3.75 W（官方目前產品頁規格）（官方 V4；不同硬體版可能不同）",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "沒有 VLAN、LACP、STP 等管理功能",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45"
    ],
    "bestFor": "以 1G 網路為主、重視低功耗與長期穩定的弱電箱。",
    "recommendation": "1G 入門推薦：價格低、功耗低且有台灣三年保固；購買時仍應核對硬體版本。",
    "releaseDate": "2013-01-10",
    "historicalLow": {
      "status": "found",
      "amount": 669,
      "currency": "TWD",
      "converted": 669,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1136957911&cgp=699",
      "sourceTitle": "LBJ 歷史價格：【TP-Link】8埠 Gigabit 鋼殼 TL-SG108",
      "evidenceSnippet": "LBJ price_data 對 TL-SG108 exact listing 記錄 NT$669，日期範圍 2025-07-10–2026-02-24（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TL-SG108\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TL-SG108%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TL-SG108\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TL-SG108%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 94,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 3 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "1G 8 埠",
      "無網管",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "3 年保固"
    ]
  },
  {
    "id": "network-switch-tplink-ls108g",
    "category": "network-switch",
    "rank": 4,
    "budget": "value",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "LS108G",
    "name": "TP-Link LiteWave LS108G 8 埠 Gigabit 無網管交換器",
    "type": "1g",
    "price": {
      "currency": "TWD",
      "amount": 649,
      "converted": 649,
      "confidence": "PChome 24h 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAN25A900AN2BW/000001_1775803975.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAN25-A900AN2BW",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "1g",
      "primaryPortSpeedsGbps": [
        0.01,
        0.1,
        1
      ],
      "extraUplinks": [],
      "management": "unmanaged",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 3.7,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 15.8,
        "depth": 9.91,
        "height": 2.5
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://www.tp-link.com/tw/home-networking/soho-switch/ls108g/"
    },
    "specs": [
      "主連接埠：8 個 10M／100M／1G RJ45",
      "速率等級：1G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：無網管",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：3.7 W",
      "操作溫度：0–40°C",
      "尺寸：寬 15.8 x 深 9.91 x 高 2.5 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 1G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 3.7 W、操作上限 40°C 與機身尺寸。採即插即用，沒有 VLAN 或遠端管理能力。",
    "pros": [
      "八個主要 RJ45 全部支援 1G",
      "金屬外殼、無風扇，官方最大功耗 3.7 W",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "沒有 VLAN、LACP、STP 等管理功能",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45"
    ],
    "bestFor": "以 1G 網路為主、重視低功耗與長期穩定的弱電箱。",
    "recommendation": "平價推薦：金屬殼、無風扇與 3.7W 最大功耗，適合只要即插即用的 1G 配線。",
    "releaseDate": "2019-12-04",
    "historicalLow": {
      "status": "found",
      "amount": 549,
      "currency": "TWD",
      "converted": 549,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1131783562&cgp=649",
      "sourceTitle": "LBJ 歷史價格：TP-Link LS108G 8埠",
      "evidenceSnippet": "LBJ price_data 對 LS108G exact listing 記錄 NT$549，日期範圍 2026-02-04–2026-04-15（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LS108G\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LS108G%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LS108G\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LS108G%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 93,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 3 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "1G 8 埠",
      "無網管",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "3 年保固"
    ]
  },
  {
    "id": "network-switch-zyxel-gs-108b-v5",
    "category": "network-switch",
    "rank": 5,
    "budget": "value",
    "channel": "tw",
    "brand": "Zyxel",
    "model": "GS-108B v5",
    "name": "Zyxel GS-108B v5 8 埠 Gigabit 無網管交換器",
    "type": "1g",
    "price": {
      "currency": "TWD",
      "amount": 604,
      "converted": 604,
      "confidence": "PChome 24h 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF0IA900I2J5V/000001_1747903739.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF0I-A900I2J5V",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "1g",
      "primaryPortSpeedsGbps": [
        0.01,
        0.1,
        1
      ],
      "extraUplinks": [],
      "management": "unmanaged",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 4.82,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 12.6,
        "depth": 5.18,
        "height": 2.4
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://www.zyxel.com/us/en-us/products/switch/5-port-8-port-unmanaged-switch-gs-100-series/specifications"
    },
    "specs": [
      "主連接埠：8 個 10M／100M／1G RJ45",
      "速率等級：1G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：無網管",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：4.82 W",
      "操作溫度：0–40°C",
      "尺寸：寬 12.6 x 深 5.18 x 高 2.4 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 1G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 4.82 W、操作上限 40°C 與機身尺寸。採即插即用，沒有 VLAN 或遠端管理能力。",
    "pros": [
      "八個主要 RJ45 全部支援 1G",
      "金屬外殼、無風扇，官方最大功耗 4.82 W",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "沒有 VLAN、LACP、STP 等管理功能",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45"
    ],
    "bestFor": "以 1G 網路為主、重視低功耗與長期穩定的弱電箱。",
    "recommendation": "小體積推薦：機身僅 12.6 × 5.18 cm，適合箱內橫向空間有限、只需 1G 的環境。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 549,
      "currency": "TWD",
      "converted": 549,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1254374047&cgp=604",
      "sourceTitle": "LBJ 歷史價格：Zyxel GS-108B v5 金屬殼",
      "evidenceSnippet": "LBJ price_data 對 GS-108B v5 exact listing 記錄 NT$549，日期範圍 2026-01-08–2026-02-24（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"GS-108B v5\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22GS-108B%20v5%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"GS-108B v5\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22GS-108B%20v5%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 92,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 3 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "1G 8 埠",
      "無網管",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "3 年保固"
    ]
  },
  {
    "id": "network-switch-dlink-dgs-108",
    "category": "network-switch",
    "rank": 6,
    "budget": "value",
    "channel": "tw",
    "brand": "D-Link",
    "model": "DGS-108",
    "name": "D-Link DGS-108 8 埠 Gigabit 無網管交換器",
    "type": "1g",
    "price": {
      "currency": "TWD",
      "amount": 699,
      "converted": 699,
      "confidence": "PChome 24h 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAJ34A9006KACN/000001_1755490212.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAJ34-A9006KACN",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "1g",
      "primaryPortSpeedsGbps": [
        0.01,
        0.1,
        1
      ],
      "extraUplinks": [],
      "management": "unmanaged",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 5.12,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 13.865,
        "depth": 8.5,
        "height": 2.24
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://www.dlink.com/tw/zh/products/dgs-108-8-port-gigabit-ethernet-switch"
    },
    "specs": [
      "主連接埠：8 個 10M／100M／1G RJ45",
      "速率等級：1G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：無網管",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：5.12 W（Rev.E）",
      "操作溫度：0–40°C",
      "尺寸：寬 13.865 x 深 8.5 x 高 2.24 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 1G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 5.12 W（Rev.E）、操作上限 40°C 與機身尺寸。採即插即用，沒有 VLAN 或遠端管理能力。",
    "pros": [
      "八個主要 RJ45 全部支援 1G",
      "金屬外殼、無風扇，官方最大功耗 5.12 W（Rev.E）",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "沒有 VLAN、LACP、STP 等管理功能",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45"
    ],
    "bestFor": "以 1G 網路為主、重視低功耗與長期穩定的弱電箱。",
    "recommendation": "傳統 1G 選擇：體積小、無風扇且規格透明，適合不需要 VLAN 的即插即用配線。",
    "releaseDate": "2011-11-30",
    "historicalLow": {
      "status": "found",
      "amount": 629,
      "currency": "TWD",
      "converted": 629,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1234384540&cgp=909",
      "sourceTitle": "LBJ 歷史價格：D-Link DGS-108 8埠 Gigabit",
      "evidenceSnippet": "LBJ price_data 對 DGS-108 exact listing 記錄 NT$629，日期範圍 2025-09-10（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"DGS-108\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22DGS-108%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"DGS-108\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22DGS-108%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 91,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 3 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "1G 8 埠",
      "無網管",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "3 年保固"
    ]
  },
  {
    "id": "network-switch-tplink-tl-sg108-m2",
    "category": "network-switch",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "TL-SG108-M2",
    "name": "TP-Link TL-SG108-M2 8 埠 2.5G 無網管交換器",
    "type": "2_5g",
    "price": {
      "currency": "TWD",
      "amount": 2899,
      "converted": 2899,
      "confidence": "PChome 2026-08-25 exact-model 公開價；有正值 Price.Low 時優先於 Price.P",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAN3CA900BI9V0/000001_1772767490.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAN3C-A900BI9V0",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "2_5g",
      "primaryPortSpeedsGbps": [
        0.1,
        1,
        2.5
      ],
      "extraUplinks": [],
      "management": "unmanaged",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 8.45,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 22.6,
        "depth": 13.1,
        "height": 3.5
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://www.tp-link.com/tw/home-networking/soho-switch/tl-sg108-m2/"
    },
    "specs": [
      "主連接埠：8 個 100M／1G／2.5G RJ45",
      "速率等級：2.5G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：無網管",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：8.45 W",
      "操作溫度：0–40°C",
      "尺寸：寬 22.6 x 深 13.1 x 高 3.5 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 2.5G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 8.45 W、操作上限 40°C 與機身尺寸。採即插即用，沒有 VLAN 或遠端管理能力。",
    "pros": [
      "八個主要 RJ45 全部支援 2.5G",
      "金屬外殼、無風扇，官方最大功耗 8.45 W",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "沒有 VLAN、LACP、STP 等管理功能",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45"
    ],
    "bestFor": "需要 2.5G NAS、Wi-Fi 6／7 AP 有線回程與多台高速裝置的弱電箱。",
    "recommendation": "2.5G 平價推薦：八埠同速、無風扇且價格低於商用管理款，適合 NAS 與多 AP 回程。",
    "releaseDate": "2021-04-06",
    "historicalLow": {
      "status": "found",
      "amount": 1699,
      "currency": "TWD",
      "converted": 1699,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1228841173&cgp=1999",
      "sourceTitle": "LBJ 歷史價格：TP-Link TL-SG108-M2 8埠 2.5G",
      "evidenceSnippet": "LBJ price_data 對 TL-SG108-M2 exact listing 記錄 NT$1,699，日期範圍 2026-06-01（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TL-SG108-M2\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TL-SG108-M2%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TL-SG108-M2\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TL-SG108-M2%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 90,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 3 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "2.5G 8 埠",
      "無網管",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "3 年保固"
    ]
  },
  {
    "id": "network-switch-tplink-tl-sg108e",
    "category": "network-switch",
    "rank": 8,
    "budget": "value",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "TL-SG108E",
    "name": "TP-Link TL-SG108E 8 埠 Gigabit Easy Smart 交換器",
    "type": "1g",
    "price": {
      "currency": "TWD",
      "amount": 1190,
      "converted": 1190,
      "confidence": "PChome 2026-08-25 exact-model 公開價；有正值 Price.Low 時優先於 Price.P",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF07A90081FBV/000001_1772689699.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF07-A90081FBV",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "1g",
      "primaryPortSpeedsGbps": [
        0.01,
        0.1,
        1
      ],
      "extraUplinks": [],
      "management": "easy_managed",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 3.68,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 15.8,
        "depth": 10.1,
        "height": 2.5
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://www.tp-link.com/tw/business-networking/easy-smart-switch/tl-sg108e/"
    },
    "specs": [
      "主連接埠：8 個 10M／100M／1G RJ45",
      "速率等級：1G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：Easy Smart（VLAN／QoS／監控）",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：3.68 W",
      "操作溫度：0–40°C",
      "尺寸：寬 15.8 x 深 10.1 x 高 2.5 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 1G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 3.68 W、操作上限 40°C 與機身尺寸。具網路管理功能，設定前應先規劃 VLAN、迴路保護與管理密碼。",
    "pros": [
      "八個主要 RJ45 全部支援 1G",
      "金屬外殼、無風扇，官方最大功耗 3.68 W",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "管理功能需要初始設定、韌體維護與管理密碼",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45"
    ],
    "bestFor": "以 1G 網路為主、重視低功耗與長期穩定的弱電箱。",
    "recommendation": "1G 簡易網管推薦：低功耗下提供 VLAN、QoS 與流量監控，適合分隔 IoT 或 AP 網段。",
    "releaseDate": "2014-04-09",
    "historicalLow": {
      "status": "found",
      "amount": 1161,
      "currency": "TWD",
      "converted": 1161,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273613102&cgp=1260",
      "sourceTitle": "LBJ 歷史價格：TP-Link TL-SG108E 8埠",
      "evidenceSnippet": "LBJ price_data 對 TL-SG108E exact listing 記錄 NT$1,161，日期範圍 2026-02-24–2026-06-06（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TL-SG108E\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TL-SG108E%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TL-SG108E\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TL-SG108E%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 89,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 3 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "1G 8 埠",
      "Easy Smart",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "3 年保固"
    ]
  },
  {
    "id": "network-switch-dlink-dgs-1100-08v2",
    "category": "network-switch",
    "rank": 9,
    "budget": "value",
    "channel": "tw",
    "brand": "D-Link",
    "model": "DGS-1100-08V2",
    "name": "D-Link DGS-1100-08V2 8 埠 Gigabit Smart Managed 交換器",
    "type": "1g",
    "price": {
      "currency": "TWD",
      "amount": 1199,
      "converted": 1199,
      "confidence": "PChome 24h 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF09A900B2TML/000001_1755503763.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF09-A900B2TML",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "1g",
      "primaryPortSpeedsGbps": [
        0.01,
        0.1,
        1
      ],
      "extraUplinks": [],
      "management": "easy_managed",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 4.94,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 17.1,
        "depth": 9.8,
        "height": 2.9
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://www.dlink.com/tw/zh/products/dgs-1100-08v2-8-port-gigabit-smart-managed-switch"
    },
    "specs": [
      "主連接埠：8 個 10M／100M／1G RJ45",
      "速率等級：1G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：Smart Managed（VLAN／QoS／Loopback Detection）",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：4.94 W",
      "操作溫度：0–40°C",
      "尺寸：寬 17.1 x 深 9.8 x 高 2.9 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 1G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 4.94 W、操作上限 40°C 與機身尺寸。具網路管理功能，設定前應先規劃 VLAN、迴路保護與管理密碼。",
    "pros": [
      "八個主要 RJ45 全部支援 1G",
      "金屬外殼、無風扇，官方最大功耗 4.94 W",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "管理功能需要初始設定、韌體維護與管理密碼",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45"
    ],
    "bestFor": "以 1G 網路為主、重視低功耗與長期穩定的弱電箱。",
    "recommendation": "D-Link 簡易網管推薦：適合需要 VLAN 與迴路偵測、但仍重視無風扇與低功耗的配置。",
    "releaseDate": "2020-10-19",
    "historicalLow": {
      "status": "found",
      "amount": 1049,
      "currency": "TWD",
      "converted": 1049,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237947814&cgp=1199",
      "sourceTitle": "LBJ 歷史價格：D-Link DGS-1100-08V2 8埠金屬外殼",
      "evidenceSnippet": "LBJ price_data 對 DGS-1100-08V2 exact listing 記錄 NT$1,049，日期範圍 2026-05-19（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"DGS-1100-08V2\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22DGS-1100-08V2%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"DGS-1100-08V2\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22DGS-1100-08V2%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 88,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠終身保固；保固範圍與送修方式依 D-Link 台灣公告及購買憑證。",
    "tags": [
      "1G 8 埠",
      "Smart Managed",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "原廠終身保固"
    ]
  },
  {
    "id": "network-switch-qnap-qsw-l2110-2s8t",
    "category": "network-switch",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "brand": "QNAP",
    "model": "QSW-L2110-2S8T",
    "name": "QNAP QSW-L2110-2S8T 8 埠 2.5GbE Lite 管理型交換器",
    "type": "2_5g",
    "price": {
      "currency": "TWD",
      "amount": 6900,
      "converted": 6900,
      "confidence": "PChome 2026-08-27 exact-model 台灣新品公開折扣價；API Qty 20",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://www.qnap.com/i/_attach_file/product/photo/1000_625/838_1774843000_QSW-L2110-2S8T_Front.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF9S-A900K8WTX",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "2_5g",
      "primaryPortSpeedsGbps": [
        0.1,
        1,
        2.5
      ],
      "extraUplinks": [
        {
          "count": 2,
          "media": "SFP+",
          "speedsGbps": [
            1,
            10
          ]
        }
      ],
      "management": "easy_managed",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 12,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 24,
        "depth": 10.5,
        "height": 2.7
      },
      "mounting": [
        "桌面"
      ],
      "specSourceUrl": "https://www.qnap.com/zh-tw/product/qsw-l2110-2s8t/specs/hardware"
    },
    "specs": [
      "主連接埠：8 個 100M／1G／2.5G RJ45",
      "速率等級：2.5G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：2 個獨立 1G／10G SFP+",
      "管理方式：QSS Lite（VLAN／LACP／QoS／IGMP Snooping／埠映象）",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：12 W",
      "操作溫度：0–40°C",
      "尺寸：寬 24 x 深 10.5 x 高 2.7 cm",
      "安裝方式：桌面；需預留 SFP+ 模組、接頭與線材彎折空間",
      "弱電箱提醒：無風扇不等於可在完全密閉箱體中長期運作；使用 10G SFP+ 時應改善箱體進排風。"
    ],
    "description": "台灣設計製造的 8 埠 2.5G 非 PoE Lite 管理型交換器；官方資料明示全金屬機殼、無風扇、最高 12 W、操作上限 40°C 與兩個 10G SFP+ uplink。設定前應先規劃 VLAN、迴路保護與管理密碼。",
    "pros": [
      "八個主要 RJ45 全部支援 2.5G，另有雙 10G SFP+ uplink",
      "全金屬無風扇機身，官方最高功耗 12 W",
      "台灣設計製造、BSMI 與原廠 2 年保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "Lite 管理不含完整 L2 交換器的 ACL、RSTP、SNMP 等進階功能",
      "10G uplink 為 SFP+，若要接銅纜需另購相容模組並評估熱量"
    ],
    "bestFor": "需要八個 2.5G 端點埠、10G 光纖骨幹與基礎 VLAN／QoS 管理的家庭工作室或 SMB。",
    "recommendation": "新款 2.5G／10G 均衡推薦：12 W 無風扇全金屬機身、雙 SFP+ 與 Lite 管理，價格低於多數完整 L2 同級機。",
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
      "checkedAt": "2026-08-27",
      "note": "已查核 QSW-L2110-2S8T 的 PChome exact SKU、QNAP 台灣官方頁、LBJ、BigGo 與飛比；新款可見現售價格但找不到具日期、可重現且排除個人化優惠的 exact-model 歷史價格曲線，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-27",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"QSW-L2110-2S8T\" (problem OR issue OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22QSW-L2110-2S8T%22%20%28problem%20OR%20issue%20OR%20failure%29",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"QSW-L2110-2S8T\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22QSW-L2110-2S8T%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 88,
    "voltage": "台灣通路版本；機身輸入為 DC 12V／1A，隨附通過 BSMI 驗證的變壓器；AC 輸入範圍與插頭以台灣出貨標示為準",
    "warranty": "台灣通路現售；QNAP 官方規格明列原廠 2 年保固；延長保固、配件與送修範圍依品牌公告及購買憑證。",
    "tags": [
      "2.5G 8 埠",
      "雙 10G SFP+",
      "QSS Lite",
      "非 PoE",
      "全金屬",
      "無風扇",
      "2 年保固"
    ]
  },
  {
    "id": "network-switch-qnap-qsw-m2108r-2c",
    "category": "network-switch",
    "rank": 11,
    "budget": "high",
    "channel": "tw",
    "brand": "QNAP",
    "model": "QSW-M2108R-2C",
    "name": "QNAP QSW-M2108R-2C 8 埠 2.5GbE L2 管理型交換器",
    "type": "2_5g",
    "price": {
      "currency": "TWD",
      "amount": 14800,
      "converted": 14800,
      "confidence": "QNAP 台灣官方商城 2026-08-27 exact-model 公開價；頁面顯示有庫存、可加入購物車，預計 2 至 4 週內出貨",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://www.qnap.com/i/_attach_file/product/photo/1000_625/526_1611813498_E794A2E59381E59C96_QSW-M2108R-2C_1SET_without20supportpsd_front.png",
    "buyUrl": "https://store.qnap.com.tw/products/qsw-m2108r-2c",
    "buyLabel": "QNAP 台灣官方商城",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "2_5g",
      "primaryPortSpeedsGbps": [
        0.1,
        1,
        2.5
      ],
      "extraUplinks": [
        {
          "count": 2,
          "media": "SFP+/RJ45 combo",
          "speedsGbps": [
            0.1,
            1,
            2.5,
            5,
            10
          ]
        }
      ],
      "management": "managed",
      "poe": false,
      "enclosure": "metal",
      "cooling": "active_fan",
      "maxPowerW": 36,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 20.7,
        "depth": 19.95,
        "height": 4.33
      },
      "mounting": [
        "桌面",
        "機架"
      ],
      "specSourceUrl": "https://www.qnap.com/zh-tw/product/qsw-m2108r-2c"
    },
    "specs": [
      "主連接埠：8 個 100M／1G／2.5G RJ45",
      "速率等級：2.5G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：2 個 100M／1G／2.5G／5G／10G RJ45 或 1G／10G SFP+ 複合埠",
      "管理方式：QSS L2 Web（VLAN／LACP／ACL／RSTP／QoS）",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：智慧型散熱系統，內建 1 個 PWM 雙滾珠軸承風扇",
      "最大功耗：36 W",
      "操作溫度：0–40°C",
      "尺寸：寬 20.7 x 深 19.95 x 高 4.33 cm",
      "安裝方式：桌面／半機架；雙機 1U 機架套件需另購，並預留風扇、模組與線材空間",
      "弱電箱提醒：36 W 且有主動風扇，不建議放入無進排風的密閉弱電箱；使用前應改善箱體對流。"
    ],
    "description": "台灣製造的 8 埠 2.5G 非 PoE L2 Web 管理型交換器；官方產品頁與硬體規格明示金屬外殼、PWM 風扇、最高 36 W、操作上限 40°C 與兩個 10G SFP+/RJ45 複合埠。適合工作室或機櫃，不建議塞入無通風弱電箱。",
    "pros": [
      "八個主要 RJ45 全部支援 2.5G，另有雙 10G SFP+/RJ45 複合埠",
      "QSS 提供 L2 Web 管理、ACL、RSTP、VLAN 與 LACP",
      "台灣製造、BSMI 與原廠 2 年保固均有來源"
    ],
    "cons": [
      "36 W 且有主動風扇，不適合無進排風的密閉弱電箱",
      "管理功能需要初始設定、韌體維護與管理密碼",
      "雙機 1U 安裝需另購專用機架套件；複合埠同一埠只能擇一介面使用"
    ],
    "bestFor": "需要八個 2.5G 端點埠、雙 10G 光纖骨幹與完整 L2 Web 管理的工作室或 SMB 機櫃。",
    "recommendation": "完整 L2 管理選擇：八個 2.5G 加雙 10G SFP+/RJ45 複合埠，功能比 Lite 管理完整，但必須為風扇與 36 W 熱量留通風。",
    "releaseDate": "2021-02-23",
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
      "checkedAt": "2026-08-27",
      "note": "已查核 QSW-M2108R-2C 的 QNAP 台灣官方商城、PChome exact SKU、雅閣科技、BigGo 與飛比；可見現售價格但找不到具日期、可重現且排除個人化優惠的 exact-model 歷史價格曲線，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-27",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"QSW-M2108R-2C\" (problem OR issue OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22QSW-M2108R-2C%22%20%28problem%20OR%20issue%20OR%20failure%29",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"QSW-M2108R-2C\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22QSW-M2108R-2C%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 84,
    "voltage": "台灣官方商城版本；內建電源支援 100–240 V AC、50/60Hz，通過 BSMI；實際電源線以台灣出貨為準",
    "warranty": "台灣官方商城現售；QNAP 官方規格明列原廠 2 年保固；配件與送修範圍依品牌公告及購買憑證。",
    "tags": [
      "2.5G 8 埠",
      "雙 10G 複合埠",
      "QSS L2",
      "非 PoE",
      "金屬外殼",
      "PWM 風扇",
      "2 年保固"
    ]
  },
  {
    "id": "network-switch-tplink-es208g",
    "category": "network-switch",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "ES208G",
    "name": "TP-Link Omada ES208G 8 埠 Gigabit 簡易管理型交換器",
    "type": "1g",
    "price": {
      "currency": "TWD",
      "amount": 2999,
      "converted": 2999,
      "confidence": "PChome 24h 2026-08-24 exact-model 台灣原廠 5 年保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、網路配線、插座增設、Omada 控制器或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAN3CA900JMZD8/000001_1776047057.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAN3C-A900JMZD8",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "1g",
      "primaryPortSpeedsGbps": [
        0.01,
        0.1,
        1
      ],
      "extraUplinks": [],
      "management": "easy_managed",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 2.7,
      "operatingTemperatureC": {
        "min": -5,
        "max": 45
      },
      "dimensionsCm": {
        "width": 15.8,
        "depth": 10.07,
        "height": 2.54
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://static.tp-link.com/upload/product-overview/2024/202412/20241231/Datasheet_ES208G%28UN%291.0.pdf"
    },
    "specs": [
      "主連接埠：8 個 10M／100M／1G RJ45",
      "速率等級：1G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：Easy Managed；支援 VLAN、QoS、迴圈預防、網頁與 Omada App",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：2.7 W（110V／60Hz）",
      "操作溫度：-5–45°C",
      "尺寸：寬 15.8 x 深 10.07 x 高 2.54 cm",
      "安裝方式：桌面／壁掛；需預留接頭、線材彎折與對流空間",
      "弱電箱提醒：低功耗且無風扇，但雲端／控制器管理仍需定期更新韌體；完全密閉箱體仍應改善對流。"
    ],
    "description": "台灣原廠 5 年保固新品 8 埠 1G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 2.7 W、45°C 操作上限與機身尺寸。可單機用網頁管理，也可透過 Omada App／Controller 集中管理。",
    "pros": [
      "八個主要 RJ45 全部支援 1G，另有 VLAN、QoS 與自動迴圈預防",
      "金屬外殼、無風扇，官方最大功耗僅 2.7 W",
      "45°C 操作溫度上限與台灣原廠 5 年保固均有來源"
    ],
    "cons": [
      "部分集中管理功能需要 Omada Controller 或雲端服務",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45",
      "官方社群已有少數用戶回報管理端顯示問題，但未達六位、跨兩站門檻"
    ],
    "bestFor": "需要在 1G 弱電箱中分隔 IoT、攝影機或 AP 網段，並希望保留低功耗與集中管理能力的環境。",
    "recommendation": "低功耗管理推薦：2.7 W、45°C、無風扇金屬機身與 5 年原廠保固，適合重視箱內溫升與 VLAN 管理者。",
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
      "checkedAt": "2026-08-24",
      "note": "已查核 ES208G 的 LBJ、BigGo、飛比與台灣原廠保固新品現售頁；未找到具日期、可重現且排除個人化優惠的 exact-model 歷史價格曲線，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ES208G\" (issue OR problem OR bug)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ES208G%22%20(issue%20OR%20problem%20OR%20bug)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "YouTube",
          "query": "\"ES208G\" issue problem bug",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ES208G%22%20issue%20problem%20bug",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 84,
    "voltage": "台灣 110V／60Hz 通路新品；官方最大功耗以 110V／60Hz 測得，電源供應器輸出 5V DC／0.6A",
    "warranty": "台灣通路現售；原廠 5 年保固；保固範圍與送修方式依 TP-Link 台灣公告及購買憑證。",
    "tags": [
      "1G 8 埠",
      "Easy Managed",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "5 年保固"
    ]
  },
  {
    "id": "network-switch-netgear-ms308",
    "category": "network-switch",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "NETGEAR",
    "model": "MS308",
    "name": "NETGEAR MS308 8 埠 2.5G 無網管交換器",
    "type": "2_5g",
    "price": {
      "currency": "TWD",
      "amount": 9660,
      "converted": 9660,
      "confidence": "PChome 24h 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJAA900HY46J/000001_1728631639.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJA-A900HY46J",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "2_5g",
      "primaryPortSpeedsGbps": [
        0.1,
        1,
        2.5
      ],
      "extraUplinks": [],
      "management": "unmanaged",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 7.98,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 15.8,
        "depth": 10.1,
        "height": 2.7
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://www.netgear.com/business/wired/switches/unmanaged/ms308/"
    },
    "specs": [
      "主連接埠：8 個 100M／1G／2.5G RJ45",
      "速率等級：2.5G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：無網管",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：7.98 W",
      "操作溫度：0–40°C",
      "尺寸：寬 15.8 x 深 10.1 x 高 2.7 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 2.5G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 7.98 W、操作上限 40°C 與機身尺寸。採即插即用，沒有 VLAN 或遠端管理能力。",
    "pros": [
      "八個主要 RJ45 全部支援 2.5G",
      "金屬外殼、無風扇，官方最大功耗 7.98 W",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "沒有 VLAN、LACP、STP 等管理功能",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45"
    ],
    "bestFor": "需要 2.5G NAS、Wi-Fi 6／7 AP 有線回程與多台高速裝置的弱電箱。",
    "recommendation": "低功耗 2.5G 推薦：7.98W、無風扇與小機身適合箱內空間有限，但售價明顯較高。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5040,
      "currency": "TWD",
      "converted": 5040,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282228403&cgp=9660",
      "sourceTitle": "LBJ 歷史價格：NETGEAR MS308 8埠 1G／2.5G",
      "evidenceSnippet": "LBJ price_data 對 MS308 exact listing 記錄 NT$5,040，日期範圍 2026-06-15（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MS308\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MS308%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"MS308\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MS308%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 84,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 3 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "2.5G 8 埠",
      "無網管",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "3 年保固"
    ]
  },
  {
    "id": "network-switch-zyxel-xmg-108",
    "category": "network-switch",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "Zyxel",
    "model": "XMG-108",
    "name": "Zyxel XMG-108 8 埠 2.5G＋10G SFP+ 交換器",
    "type": "2_5g",
    "price": {
      "currency": "TWD",
      "amount": 3265,
      "converted": 3265,
      "confidence": "PChome 24h 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF0IA900H07T7/000001_1747902299.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF0I-A900H07T7",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "2_5g",
      "primaryPortSpeedsGbps": [
        0.1,
        1,
        2.5
      ],
      "extraUplinks": [
        {
          "count": 1,
          "media": "SFP+",
          "speedsGbps": [
            10
          ]
        }
      ],
      "management": "unmanaged",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 9.12,
      "operatingTemperatureC": {
        "min": -20,
        "max": 40
      },
      "dimensionsCm": {
        "width": 24,
        "depth": 10.5,
        "height": 2.7
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://static.us.zyxel.com/pdf/2024/switch/ds_XMG-108.pdf"
    },
    "specs": [
      "主連接埠：8 個 100M／1G／2.5G RJ45",
      "速率等級：2.5G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：1 個獨立 10G SFP+",
      "管理方式：無網管",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：9.12 W",
      "操作溫度：-20–40°C",
      "尺寸：寬 24 x 深 10.5 x 高 2.7 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 2.5G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 9.12 W、操作上限 40°C 與機身尺寸。採即插即用，沒有 VLAN 或遠端管理能力。",
    "pros": [
      "八個主要 RJ45 全部支援 2.5G",
      "金屬外殼、無風扇，官方最大功耗 9.12 W",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "沒有 VLAN、LACP、STP 等管理功能",
      "SFP+ 模組、光纖或 DAC 線材需另購並確認相容性"
    ],
    "bestFor": "需要 2.5G NAS、Wi-Fi 6／7 AP 有線回程與多台高速裝置的弱電箱。",
    "recommendation": "2.5G 上行推薦：八個同速 RJ45 外加獨立 10G SFP+，適合 NAS 或核心交換器光纖上行。",
    "releaseDate": "2024-02-05",
    "historicalLow": {
      "status": "found",
      "amount": 2810,
      "currency": "TWD",
      "converted": 2810,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1229657022&cgp=3595",
      "sourceTitle": "LBJ 歷史價格：Zyxel XMG-108 8埠 2.5GbE",
      "evidenceSnippet": "LBJ price_data 對 XMG-108 exact listing 記錄 NT$2,810，日期範圍 2026-05-15–2026-08-01（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"XMG-108\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22XMG-108%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"XMG-108\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22XMG-108%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 83,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 3 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "2.5G 8 埠",
      "無網管",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "3 年保固"
    ]
  },
  {
    "id": "network-switch-netgear-ms308e",
    "category": "network-switch",
    "rank": 15,
    "budget": "premium",
    "channel": "tw",
    "brand": "NETGEAR",
    "model": "MS308E",
    "name": "NETGEAR MS308E 8 埠 2.5G Easy Smart 交換器",
    "type": "2_5g",
    "price": {
      "currency": "TWD",
      "amount": 11025,
      "converted": 11025,
      "confidence": "PChome 24h 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJAA900HYYPE/000001_1728969958.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJA-A900HYYPE",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "2_5g",
      "primaryPortSpeedsGbps": [
        0.1,
        1,
        2.5
      ],
      "extraUplinks": [],
      "management": "easy_managed",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 8.1,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 15.8,
        "depth": 10.1,
        "height": 2.7
      },
      "mounting": [
        "桌面",
        "壁掛"
      ],
      "specSourceUrl": "https://www.netgear.com/business/wired/switches/easy-smart/ms308e/"
    },
    "specs": [
      "主連接埠：8 個 100M／1G／2.5G RJ45",
      "速率等級：2.5G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：Easy Smart（VLAN／QoS／IGMP Snooping）",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：8.1 W",
      "操作溫度：0–40°C",
      "尺寸：寬 15.8 x 深 10.1 x 高 2.7 cm",
      "安裝方式：桌面／壁掛；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 2.5G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 8.1 W、操作上限 40°C 與機身尺寸。具網路管理功能，設定前應先規劃 VLAN、迴路保護與管理密碼。",
    "pros": [
      "八個主要 RJ45 全部支援 2.5G",
      "金屬外殼、無風扇，官方最大功耗 8.1 W",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "管理功能需要初始設定、韌體維護與管理密碼",
      "沒有獨立高速 uplink，所有流量共用八個 RJ45"
    ],
    "bestFor": "需要 2.5G NAS、Wi-Fi 6／7 AP 有線回程與多台高速裝置的弱電箱。",
    "recommendation": "長保固 2.5G 網管推薦：無風扇、五年保固並提供 VLAN 與 QoS，但價格偏高。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6300,
      "currency": "TWD",
      "converted": 6300,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1233883340&cgp=11025",
      "sourceTitle": "LBJ 歷史價格：NETGEAR MS308E 8埠 1G／2.5G",
      "evidenceSnippet": "LBJ price_data 對 MS308E exact listing 記錄 NT$6,300，日期範圍 2026-06-15（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MS308E\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MS308E%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"MS308E\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MS308E%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 82,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 5 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "2.5G 8 埠",
      "Easy Smart",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "5 年保固"
    ]
  },
  {
    "id": "network-switch-tplink-sg3210x-m2",
    "category": "network-switch",
    "rank": 16,
    "budget": "premium",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "SG3210X-M2",
    "name": "TP-Link Omada SG3210X-M2 8 埠 2.5G 管理型交換器",
    "type": "2_5g",
    "price": {
      "currency": "TWD",
      "amount": 13899,
      "converted": 13899,
      "confidence": "PChome 2026-08-25 exact-model 公開價；有正值 Price.Low 時優先於 Price.P",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAN4XA900JA0J0/000001_1761703072.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAN4X-A900JA0J0",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "2_5g",
      "primaryPortSpeedsGbps": [
        0.1,
        1,
        2.5
      ],
      "extraUplinks": [
        {
          "count": 2,
          "media": "SFP+",
          "speedsGbps": [
            1,
            10
          ]
        }
      ],
      "management": "managed",
      "poe": false,
      "enclosure": "metal",
      "cooling": "fanless",
      "maxPowerW": 15.3,
      "operatingTemperatureC": {
        "min": -5,
        "max": 50
      },
      "dimensionsCm": {
        "width": 29.4,
        "depth": 18,
        "height": 4.4
      },
      "mounting": [
        "桌面",
        "機架"
      ],
      "specSourceUrl": "https://static.tp-link.com/upload/product-overview/2025/202512/20251224/SG3210X-M2%28UN%29%201.20_datasheet.pdf"
    },
    "specs": [
      "主連接埠：8 個 100M／1G／2.5G RJ45",
      "速率等級：2.5G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：2 個獨立 1G／10G SFP+",
      "管理方式：Omada L2+（VLAN／LACP／STP／ACL）",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：無風扇",
      "最大功耗：15.3 W（220V；110V 為 15.0 W）",
      "操作溫度：-5–50°C",
      "尺寸：寬 29.4 x 深 18 x 高 4.4 cm",
      "安裝方式：桌面／機架；需預留接頭與線材彎折空間",
      "弱電箱提醒：優先維持箱體對流並避開電源供應器疊放；無風扇不等於可在完全密閉箱體中長期運作。"
    ],
    "description": "台灣原廠保固新品 8 埠 2.5G 非 PoE 網路交換器；官方資料明示金屬外殼、無風扇、最大功耗 15.3 W（220V；110V 為 15.0 W）、操作上限 50°C 與機身尺寸。具網路管理功能，設定前應先規劃 VLAN、迴路保護與管理密碼。",
    "pros": [
      "八個主要 RJ45 全部支援 2.5G",
      "金屬外殼、無風扇，官方最大功耗 15.3 W（220V；110V 為 15.0 W）",
      "50°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "弱電箱若完全密閉，仍可能累積熱量並縮短壽命",
      "管理功能需要初始設定、韌體維護與管理密碼",
      "SFP+ 模組、光纖或 DAC 線材需另購並確認相容性"
    ],
    "bestFor": "需要 2.5G NAS、Wi-Fi 6／7 AP 有線回程與多台高速裝置的弱電箱。",
    "recommendation": "Omada 管理推薦：八個 2.5G 與雙 10G SFP+ 適合集中管理；機身與功耗都較大。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 12599,
      "currency": "TWD",
      "converted": 12599,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1222249837&cgp=12599",
      "sourceTitle": "LBJ 歷史價格：TP-Link SG3210X-M2 Omada 8埠",
      "evidenceSnippet": "LBJ price_data 對 SG3210X-M2 exact listing 記錄 NT$12,599，日期範圍 2026-01-23–2026-08-24（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SG3210X-M2\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SG3210X-M2%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SG3210X-M2\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SG3210X-M2%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 81,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 5 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "2.5G 8 埠",
      "Omada L2+",
      "非 PoE",
      "金屬外殼",
      "無風扇",
      "5 年保固"
    ]
  },
  {
    "id": "network-switch-qnap-qsw-l3208-2c6t",
    "category": "network-switch",
    "rank": 17,
    "budget": "premium",
    "channel": "tw",
    "brand": "QNAP",
    "model": "QSW-L3208-2C6T",
    "name": "QNAP QSW-L3208-2C6T 8 埠 10G Lite Managed 交換器",
    "type": "10g",
    "price": {
      "currency": "TWD",
      "amount": 12590,
      "converted": 12590,
      "confidence": "QNAP 台灣官方商店 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://store.qnap.com.tw/cdn/shop/files/791_1748489119_QSW-L3208-2C6T_Right20angle20of20elevation_51f4a7de-e263-459a-b1e0-9ba15d1d8de7_grande.png?v=1749514496",
    "buyUrl": "https://store.qnap.com.tw/products/qsw-l3208-2c6t?variant=43967567069321",
    "buyLabel": "QNAP 台灣官方商店",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "10g",
      "primaryPortSpeedsGbps": [
        0.1,
        1,
        2.5,
        5,
        10
      ],
      "extraUplinks": [],
      "management": "easy_managed",
      "poe": false,
      "enclosure": "metal",
      "cooling": "active_fan",
      "maxPowerW": 36,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 21,
        "depth": 16,
        "height": 4.4
      },
      "mounting": [
        "桌面"
      ],
      "specSourceUrl": "https://www.qnap.com/zh-tw/product/qsw-l3208-2c6t"
    },
    "specs": [
      "主連接埠：6 個 10GBASE-T＋2 個 10G RJ45／SFP+ combo，共 8 個多速 RJ45",
      "速率等級：10G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無獨立 uplink；第 7、8 埠可改用共享 SFP+ combo，不能與對應 RJ45 同時使用",
      "管理方式：QSS Lite Managed（VLAN／LACP／RSTP）",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：4 × 4 cm 主動風扇",
      "最大功耗：36 W",
      "操作溫度：0–40°C",
      "尺寸：寬 21 x 深 16 x 高 4.4 cm",
      "安裝方式：桌面；需預留接頭與線材彎折空間",
      "弱電箱提醒：10G 機種為高熱源，必須改善進排風並監看箱內溫度，不可放入完全密閉、無主動散熱的箱體。"
    ],
    "description": "台灣原廠保固新品 8 埠 10G 非 PoE 網路交換器；官方資料明示金屬外殼、4 × 4 cm 主動風扇、最大功耗 36 W、操作上限 40°C 與機身尺寸。具網路管理功能，設定前應先規劃 VLAN、迴路保護與管理密碼。",
    "pros": [
      "八個主要 RJ45 全部支援 10G",
      "金屬外殼、4 × 4 cm 主動風扇，官方最大功耗 36 W",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "10G 滿載熱量高，弱電箱必須加強主動進排風",
      "管理功能需要初始設定、韌體維護與管理密碼",
      "SFP+ 模組、光纖或 DAC 線材需另購並確認相容性"
    ],
    "bestFor": "已規劃主動通風，並需要 10G NAS、工作站或核心匯聚的弱電箱。",
    "recommendation": "10G 入門推薦：四款 10G 中功耗與體積較低，仍必須為弱電箱加進排風，不能密閉運作。",
    "releaseDate": "2025-06-18",
    "historicalLow": {
      "status": "found",
      "amount": 12590,
      "currency": "TWD",
      "converted": 12590,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1259988047&cgp=16990",
      "sourceTitle": "LBJ 歷史價格：QNAP QSW-L3208-2C6T 8埠",
      "evidenceSnippet": "LBJ price_data 對 QSW-L3208-2C6T exact listing 記錄 NT$12,590，日期範圍 2025-11-06–2026-02-24（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"QSW-L3208-2C6T\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22QSW-L3208-2C6T%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"QSW-L3208-2C6T\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22QSW-L3208-2C6T%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 80,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 2 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "10G 8 埠",
      "QSS Lite Managed",
      "非 PoE",
      "金屬外殼",
      "4 × 4 cm 主動風扇",
      "2 年保固"
    ]
  },
  {
    "id": "network-switch-netgear-xs508tm",
    "category": "network-switch",
    "rank": 18,
    "budget": "premium",
    "channel": "tw",
    "brand": "NETGEAR",
    "model": "XS508TM",
    "name": "NETGEAR XS508TM 8 埠 10G Smart Managed 交換器",
    "type": "10g",
    "price": {
      "currency": "TWD",
      "amount": 47985,
      "converted": 47985,
      "confidence": "NetBridge 台灣代理商城 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://img.shoplineapp.com/media/image_clips/6606730557d3a30011b3ee8e/original.jpg?1711698693",
    "buyUrl": "https://store.netbridgetech.com.tw/products/xs508tm",
    "buyLabel": "NetBridge 台灣代理商城",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "10g",
      "primaryPortSpeedsGbps": [
        1,
        2.5,
        5,
        10
      ],
      "extraUplinks": [
        {
          "count": 2,
          "media": "SFP+",
          "speedsGbps": [
            1,
            10
          ]
        }
      ],
      "management": "managed",
      "poe": false,
      "enclosure": "metal",
      "cooling": "smart_fan",
      "maxPowerW": 32.7,
      "operatingTemperatureC": {
        "min": 0,
        "max": 50
      },
      "dimensionsCm": {
        "width": 33,
        "depth": 20.6,
        "height": 4.32
      },
      "mounting": [
        "桌面",
        "機架"
      ],
      "specSourceUrl": "https://www.downloads.netgear.com/files/netgear/pdfs/NETGEAR-Interactive-Catalog.pdf"
    },
    "specs": [
      "主連接埠：8 個 1G／2.5G／5G／10G RJ45",
      "速率等級：10G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：2 個獨立 1G／10G SFP+",
      "管理方式：L2+／L3 Lite／Insight 管理",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：2 個溫度／負載調速智慧風扇",
      "最大功耗：32.7 W",
      "操作溫度：0–50°C",
      "尺寸：寬 33 x 深 20.6 x 高 4.32 cm",
      "安裝方式：桌面／機架；需預留接頭與線材彎折空間",
      "弱電箱提醒：10G 機種為高熱源，必須改善進排風並監看箱內溫度，不可放入完全密閉、無主動散熱的箱體。"
    ],
    "description": "台灣原廠保固新品 8 埠 10G 非 PoE 網路交換器；官方資料明示金屬外殼、2 個溫度／負載調速智慧風扇、最大功耗 32.7 W、操作上限 50°C 與機身尺寸。具網路管理功能，設定前應先規劃 VLAN、迴路保護與管理密碼。",
    "pros": [
      "八個主要 RJ45 全部支援 10G",
      "金屬外殼、2 個溫度／負載調速智慧風扇，官方最大功耗 32.7 W",
      "50°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "10G 滿載熱量高，弱電箱必須加強主動進排風",
      "管理功能需要初始設定、韌體維護與管理密碼",
      "SFP+ 模組、光纖或 DAC 線材需另購並確認相容性"
    ],
    "bestFor": "已規劃主動通風，並需要 10G NAS、工作站或核心匯聚的弱電箱。",
    "recommendation": "10G 管理推薦：32.7W、50°C 上限與五年台灣保固突出，但價格高且仍需主動通風。",
    "releaseDate": "2023-12-12",
    "historicalLow": {
      "status": "found",
      "amount": 44100,
      "currency": "TWD",
      "converted": 44100,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1219040820&cgp=47985",
      "sourceTitle": "LBJ 歷史價格：NETGEAR XS508TM 8埠",
      "evidenceSnippet": "LBJ price_data 對 XS508TM exact listing 記錄 NT$44,100，日期範圍 2023-08-24–2025-08-24（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"XS508TM\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22XS508TM%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"XS508TM\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22XS508TM%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 79,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 5 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "10G 8 埠",
      "L2+／L3 Lite／Insight 管理",
      "非 PoE",
      "金屬外殼",
      "2 個溫度／負載調速智慧風扇",
      "5 年保固"
    ]
  },
  {
    "id": "network-switch-tplink-tl-sx1008",
    "category": "network-switch",
    "rank": 19,
    "budget": "premium",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "TL-SX1008",
    "name": "TP-Link TL-SX1008 8 埠 10G 無網管交換器",
    "type": "10g",
    "price": {
      "currency": "TWD",
      "amount": 9899,
      "converted": 9899,
      "confidence": "PChome 2026-08-25 exact-model 公開價；有正值 Price.Low 時優先於 Price.P",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、Cat 6A 配線、插座增設或主動通風改造。"
    },
    "image": "https://img.pchome.com.tw/cs/items/DRAN3CA900BJC72/000001_1625547737.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAN3C-A900BJC72",
    "buyLabel": "PChome 24h",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "10g",
      "primaryPortSpeedsGbps": [
        0.1,
        1,
        2.5,
        5,
        10
      ],
      "extraUplinks": [],
      "management": "unmanaged",
      "poe": false,
      "enclosure": "metal",
      "cooling": "smart_fan",
      "maxPowerW": 31.2,
      "operatingTemperatureC": {
        "min": 0,
        "max": 50
      },
      "dimensionsCm": {
        "width": 29.4,
        "depth": 18,
        "height": 4.4
      },
      "mounting": [
        "桌面",
        "機架"
      ],
      "specSourceUrl": "https://www.tp-link.com/tw/business-networking/soho-switch-unmanaged/tl-sx1008/"
    },
    "specs": [
      "主連接埠：8 個 100M／1G／2.5G／5G／10G RJ45",
      "速率等級：10G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：無",
      "管理方式：無網管",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：智慧單風扇",
      "最大功耗：31.2 W",
      "操作溫度：0–50°C",
      "尺寸：寬 29.4 x 深 18 x 高 4.4 cm",
      "安裝方式：桌面／機架；需預留前後線材與風道空間",
      "弱電箱提醒：10G、31.2 W 且有主動風扇，不適合密閉無換氣箱體；應配置進排氣或移至開放機櫃。"
    ],
    "description": "台灣原廠 3 年保固新品 8 埠 10G 非 PoE 網路交換器；官方資料明示金屬外殼、智慧單風扇、31.2 W 最大功耗、50°C 操作上限與機身尺寸。八個 RJ45 均支援五速自動協商。",
    "pros": [
      "八個主要 RJ45 全部支援 100M／1G／2.5G／5G／10G",
      "金屬外殼、50°C 操作上限與 31.2 W 最大功耗均有官方來源",
      "台灣現貨價格低於多數八埠全 10G 管理型產品"
    ],
    "cons": [
      "六位使用者跨 TP-Link Community 與 Reddit 回報風扇偏吵或轉速週期性升降",
      "10G 滿載熱量高，密閉弱電箱必須改善通風",
      "無 VLAN、LACP、STP 等管理功能"
    ],
    "bestFor": "已有 Cat 6A 配線、可改善箱體通風，且需要八台 NAS、伺服器或工作站直上 10G 的環境。",
    "recommendation": "10G 價格推薦：八埠五速 10G 與台灣原廠保固價格有優勢；但因風扇集中回報與 31.2 W 熱量，排序低於更適合弱電箱的低功耗機種。",
    "releaseDate": "2021-03-12",
    "historicalLow": {
      "status": "found",
      "amount": 9899,
      "currency": "TWD",
      "converted": 9899,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DRAN3C-A900BJC72",
      "sourceTitle": "PChome 24h 購物：TP-Link TL-SX1008 8埠100Mbps/1Gbps/10Gbps Gigabit桌上/機架型交換器 乙太網路switch hub",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-25 顯示同型號可信新品公開價 NT$9,899，低於既有史低 NT$9,999。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-25",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-08-24",
      "summary": "六位 TL-SX1008 使用者跨 TP-Link Community 與 Reddit 回報風扇持續偏吵、轉速週期性升降，待機或通風良好時仍可明顯聽見；多數回報來自較早硬體版本。",
      "issues": [
        {
          "title": "風扇噪音偏高或轉速週期性升降",
          "detail": "回報包含待機與通風良好時仍可聽見風扇、轉速每 3–7 秒週期性升降，且多數來自較早硬體版本；弱電箱應改善進排風並接受風扇維護風險，不建議自行改風扇，以免影響保固與原廠散熱設計。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "TP-Link Community",
              "title": "TL-SX1008 loud fan noise",
              "url": "https://community.tp-link.com/en/smart-home/forum/topic/264056"
            },
            {
              "platform": "TP-Link Community",
              "title": "TL-SX1008 Fan Issue",
              "url": "https://community.tp-link.com/en/business/forum/topic/601442"
            },
            {
              "platform": "Reddit",
              "title": "10G Switch TL-SX1008",
              "url": "https://www.reddit.com/r/TpLink/comments/nfzpg9/10g_switch_tlsx1008/"
            },
            {
              "platform": "Reddit",
              "title": "Netgear XS505M noise level?",
              "url": "https://www.reddit.com/r/homelab/comments/vsix9e/netgear_xs505m_noise_level/"
            }
          ]
        }
      ]
    },
    "score": 76,
    "voltage": "台灣 110V／60Hz 通路新品；原廠外接電源供應器，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 3 年保固（一年換新）；保固範圍與送修方式依 TP-Link 台灣公告及購買憑證。",
    "tags": [
      "10G 8 埠",
      "五速 RJ45",
      "無網管",
      "非 PoE",
      "金屬外殼",
      "智慧單風扇",
      "3 年保固"
    ]
  },
  {
    "id": "network-switch-qnap-qsw-m3216r-8s8t",
    "category": "network-switch",
    "rank": 20,
    "budget": "premium",
    "channel": "tw",
    "brand": "QNAP",
    "model": "QSW-M3216R-8S8T",
    "name": "QNAP QSW-M3216R-8S8T 8 埠 10G 管理型交換器",
    "type": "10g",
    "price": {
      "currency": "TWD",
      "amount": 22500,
      "converted": 22500,
      "confidence": "QNAP 台灣官方商店 2026-08-24 exact-model 台灣原廠保固新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含交換器本體，不含弱電箱施工、機架固定、網路配線、插座增設或通風改造。"
    },
    "image": "https://store.qnap.com.tw/cdn/shop/files/748_1686280311_E794A2E59381E59C96_QSW-M3216R-8S8T_Front_38db5254-ddcd-463e-9a96-765d68ad07f2_grande.png?v=1756372663",
    "buyUrl": "https://store.qnap.com.tw/qsw-m3216r-8s8t.html",
    "buyLabel": "QNAP 台灣官方商店",
    "switchProfile": {
      "rj45PortCount": 8,
      "speedTier": "10g",
      "primaryPortSpeedsGbps": [
        0.1,
        1,
        2.5,
        5,
        10
      ],
      "extraUplinks": [
        {
          "count": 8,
          "media": "SFP+",
          "speedsGbps": [
            1,
            10
          ]
        }
      ],
      "management": "managed",
      "poe": false,
      "enclosure": "metal",
      "cooling": "smart_fan",
      "maxPowerW": 48.632,
      "operatingTemperatureC": {
        "min": 0,
        "max": 40
      },
      "dimensionsCm": {
        "width": 20.7,
        "depth": 19.95,
        "height": 4.33
      },
      "mounting": [
        "桌面",
        "機架"
      ],
      "specSourceUrl": "https://www.qnap.com/zh-tw/product/qsw-m3216r-8s8t"
    },
    "specs": [
      "主連接埠：8 個 100M／1G／2.5G／5G／10G RJ45",
      "速率等級：10G；八個主要 RJ45 皆支援此等級",
      "額外 uplink：8 個獨立 1G／10G SFP+",
      "管理方式：QSS L2 Web Managed（VLAN／LACP／RSTP／ACL）",
      "PoE：不支援",
      "外殼：金屬",
      "散熱：2 個 PWM VAPO 智慧風扇",
      "最大功耗：48.632 W",
      "操作溫度：0–40°C",
      "尺寸：寬 20.7 x 深 19.95 x 高 4.33 cm",
      "安裝方式：桌面／機架；需預留接頭與線材彎折空間",
      "弱電箱提醒：10G 機種為高熱源，必須改善進排風並監看箱內溫度，不可放入完全密閉、無主動散熱的箱體。"
    ],
    "description": "台灣原廠保固新品 8 埠 10G 非 PoE 網路交換器；官方資料明示金屬外殼、2 個 PWM VAPO 智慧風扇、最大功耗 48.632 W、操作上限 40°C 與機身尺寸。具網路管理功能，設定前應先規劃 VLAN、迴路保護與管理密碼。",
    "pros": [
      "八個主要 RJ45 全部支援 10G",
      "金屬外殼、2 個 PWM VAPO 智慧風扇，官方最大功耗 48.632 W",
      "40°C 操作溫度上限與台灣原廠保固均有來源"
    ],
    "cons": [
      "10G 滿載熱量高，弱電箱必須加強主動進排風",
      "管理功能需要初始設定、韌體維護與管理密碼",
      "SFP+ 模組、光纖或 DAC 線材需另購並確認相容性"
    ],
    "bestFor": "已規劃主動通風，並需要 10G NAS、工作站或核心匯聚的弱電箱。",
    "recommendation": "高密度 10G 推薦：八個多速 RJ45 加八個 SFP+ 適合集中匯聚；48.632W 為本榜最高，弱電箱需強制通風。",
    "releaseDate": "2023-11-01",
    "historicalLow": {
      "status": "found",
      "amount": 20480,
      "currency": "TWD",
      "converted": 20480,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1259975449&cgp=24897",
      "sourceTitle": "LBJ 歷史價格：QNAP QSW-M3216R-8S8T",
      "evidenceSnippet": "LBJ price_data 對 QSW-M3216R-8S8T exact listing 記錄 NT$20,480，日期範圍 2026-02-06–2026-02-24（查核 2026-08-24）。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-24",
      "note": "採用同型號、同埠數與同速率的台灣新品公開價格曲線；排除 NT$1、多選項、平台券、會員／信用卡回饋、點數、福利品、展示機、拆封品、二手、整新與詢價資料。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-24",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"QSW-M3216R-8S8T\" issue",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22QSW-M3216R-8S8T%22%20issue",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"QSW-M3216R-8S8T\" 問題",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22QSW-M3216R-8S8T%22%20%E5%95%8F%E9%A1%8C",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 77,
    "voltage": "台灣通路版本；原廠電源輸入支援 100–240 V AC、50/60Hz，實際插頭與電源線以台灣出貨為準",
    "warranty": "台灣通路現售；原廠 2 年保固；保固範圍與送修方式依品牌台灣公告及購買憑證。",
    "tags": [
      "10G 8 埠",
      "QSS L2 Web Managed",
      "非 PoE",
      "金屬外殼",
      "2 個 PWM VAPO 智慧風扇",
      "2 年保固"
    ]
  }
]);
})();
