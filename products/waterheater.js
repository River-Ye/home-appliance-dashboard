(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("waterheater", [
  {
    "id": "waterheater-rinnai-rua-d1620wf",
    "category": "waterheater",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "Rinnai",
    "model": "RUA-D1620WF",
    "name": "Rinnai RUA-D1620WF 瓦斯瞬熱式（屋內強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 24000,
      "converted": 24000,
      "confidence": "台灣林內官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "定價未含現場耗材；瓦斯別、排氣孔與管長須由合格技師確認"
    },
    "image": "https://www.rinnai.com.tw/storage/uploads/1782954889_%E7%86%B1%E6%B0%B4%E5%99%A8%E5%AE%98%E7%B6%B2_RUA-D1620WF_0630.jpg",
    "buyUrl": "https://www.rinnai.com.tw/Product/V3/413",
    "buyLabel": "台灣林內官方產品頁",
    "specs": [
      "類型：瓦斯瞬熱式（屋內強制排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：16 L/min（溫升 25°C）",
      "能效：能源效率第 2 級；熱效率 83%",
      "安裝位置：屋內；須接強制排氣管至戶外",
      "尺寸：寬 33 x 深 20 x 高 57.2 cm",
      "重量：查不到",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣；排氣管須依原廠規範施工",
      "安全裝置：熄火、過熱、空燒與連續使用 60 分鐘自動停止",
      "溫控／操作：35–60°C 數位恆溫；水量伺服器",
      "安裝／加價：定價未含現場耗材；瓦斯別、排氣孔與管長須由合格技師確認"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "綜合推薦：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Rinnai RUA-D1620WF\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Rinnai%20RUA-D1620WF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Rinnai RUA-D1620WF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Rinnai%20RUA-D1620WF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Rinnai RUA-D1620WF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Rinnai%20RUA-D1620WF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Rinnai RUA-D1620WF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Rinnai%20RUA-D1620WF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Rinnai RUA-D1620WF\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Rinnai%20RUA-D1620WF%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 96,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Rinnai 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "Rinnai",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-rinnai-rua-uc1628wf",
    "category": "waterheater",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "Rinnai",
    "model": "RUA-UC1628WF",
    "name": "Rinnai RUA-UC1628WF 瓦斯瞬熱式（屋內強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 33760,
      "converted": 33760,
      "confidence": "台灣林內官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "定價未含現場耗材；先確認排氣孔、管長與瓦斯別"
    },
    "image": "https://www.rinnai.com.tw/storage/product/1778225580_1050X1040-%E5%AE%98%E7%B6%B2%E7%94%A8-1.png",
    "buyUrl": "https://www.rinnai.com.tw/Product/V3/395",
    "buyLabel": "台灣林內官方產品頁",
    "specs": [
      "類型：瓦斯瞬熱式（屋內強制排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：16 L/min（溫升 25°C）",
      "能效：能源效率第 2 級；瓦斯消耗量 32.1 kW",
      "安裝位置：屋內；須接強制排氣管至戶外",
      "尺寸：寬 35 x 深 18 x 高 57.5 cm",
      "重量：查不到",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣；下置式馬達",
      "安全裝置：熄火、過熱、空燒與連續使用 60 分鐘自動停止",
      "溫控／操作：35–60°C 數位恆溫；可外接浴室／廚房遙控器",
      "安裝／加價：定價未含現場耗材；先確認排氣孔、管長與瓦斯別"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Rinnai RUA-UC1628WF\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Rinnai%20RUA-UC1628WF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Rinnai RUA-UC1628WF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Rinnai%20RUA-UC1628WF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Rinnai RUA-UC1628WF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Rinnai%20RUA-UC1628WF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Rinnai RUA-UC1628WF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Rinnai%20RUA-UC1628WF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Rinnai RUA-UC1628WF\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Rinnai%20RUA-UC1628WF%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 96,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Rinnai 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "Rinnai",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-rinnai-rua-ud1620wf",
    "category": "waterheater",
    "rank": 3,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "Rinnai",
    "model": "RUA-UD1620WF",
    "name": "Rinnai RUA-UD1620WF 瓦斯瞬熱式（屋內強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 28000,
      "converted": 28000,
      "confidence": "台灣林內官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未含未列耗材；排氣與瓦斯管線須現勘"
    },
    "image": "https://www.rinnai.com.tw/storage/product/1782439311_RUA-UD1620WF%E5%AE%98%E7%B6%B21.png",
    "buyUrl": "https://www.rinnai.com.tw/Product/V3/412",
    "buyLabel": "台灣林內官方產品頁",
    "specs": [
      "類型：瓦斯瞬熱式（屋內強制排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：16 L/min（溫升 25°C）",
      "能效：能源效率第 2 級",
      "安裝位置：屋內；須接強制排氣管至戶外",
      "尺寸：寬 33 x 深 20 x 高 57.2 cm",
      "重量：查不到",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣；排氣管不得排入室內或密閉天井",
      "安全裝置：熄火、過熱、空燒與異常燃燒保護",
      "溫控／操作：數位恆溫；多段火力調節",
      "安裝／加價：官方定價未含未列耗材；排氣與瓦斯管線須現勘"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Rinnai RUA-UD1620WF\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Rinnai%20RUA-UD1620WF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Rinnai RUA-UD1620WF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Rinnai%20RUA-UD1620WF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Rinnai RUA-UD1620WF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Rinnai%20RUA-UD1620WF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Rinnai RUA-UD1620WF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Rinnai%20RUA-UD1620WF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Rinnai RUA-UD1620WF\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Rinnai%20RUA-UD1620WF%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 96,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Rinnai 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "Rinnai",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-sakura-dh1693f",
    "category": "waterheater",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "SAKURA",
    "model": "DH1693F",
    "name": "SAKURA DH1693F 瓦斯瞬熱式（FE 強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 27900,
      "converted": 27900,
      "confidence": "SAKURA 台灣官方產品型錄 exact-model 建議售價 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "included_basic",
      "note": "建議售價含基本安裝，不含耗材及運送；低水壓可能加裝恆壓馬達"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAL1NA900IFBZM/000001_1741319813.jpg",
    "buyUrl": "https://www.sakura.com.tw/Uploads/Catalog/6516c7d9-7c55-4723-8027-f224d2e65dd8/%E7%B6%B2%E8%B7%AF%E7%94%A8_SAKURA_%E5%85%A8%E7%94%A2%E5%93%81%E5%9E%8B%E9%8C%84_%E7%94%9F%E6%B4%BB%E9%A4%A8_240418.pdf#search=DH1693F",
    "buyLabel": "SAKURA 台灣官方產品型錄 exact-model 建議售價",
    "specs": [
      "類型：瓦斯瞬熱式（FE 強制排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：16 L/min（溫升 25°C）",
      "能效：能源效率第 2 級；瓦斯消耗量 33.1 kW",
      "安裝位置：室內或室外；仍須依 FE 排氣規範施工",
      "尺寸：寬 34.5 x 深 18.4 x 高 58 cm",
      "重量：查不到",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣",
      "安全裝置：熄火、過熱、空燒與風壓偵測",
      "溫控／操作：三種自動調溫模式；渦輪增壓數位恆溫",
      "安裝／加價：建議售價含基本安裝，不含耗材及運送；低水壓可能加裝恆壓馬達"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SAKURA DH1693F\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SAKURA%20DH1693F%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SAKURA DH1693F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SAKURA%20DH1693F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SAKURA DH1693F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SAKURA%20DH1693F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SAKURA DH1693F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SAKURA%20DH1693F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SAKURA DH1693F\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SAKURA%20DH1693F%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 95,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "SAKURA 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "SAKURA",
      "台灣瓦斯規格",
      "含基本安裝"
    ]
  },
  {
    "id": "waterheater-sakura-dh1670f",
    "category": "waterheater",
    "rank": 5,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "SAKURA",
    "model": "DH1670F",
    "name": "SAKURA DH1670F 瓦斯瞬熱式（FE 強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 20600,
      "converted": 20600,
      "confidence": "SAKURA 台灣官方產品型錄 exact-model 建議售價 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "included_basic",
      "note": "建議售價含基本安裝，不含耗材及運送；低水壓可能加裝恆壓馬達"
    },
    "image": "https://img.pchome.com.tw/cs/items/DPAL1QA900JA0ND/000001_1759463671.png",
    "buyUrl": "https://www.sakura.com.tw/Uploads/Catalog/6516c7d9-7c55-4723-8027-f224d2e65dd8/%E7%B6%B2%E8%B7%AF%E7%94%A8_SAKURA_%E5%85%A8%E7%94%A2%E5%93%81%E5%9E%8B%E9%8C%84_%E7%94%9F%E6%B4%BB%E9%A4%A8_240418.pdf#search=DH1670F",
    "buyLabel": "SAKURA 台灣官方產品型錄 exact-model 建議售價",
    "specs": [
      "類型：瓦斯瞬熱式（FE 強制排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：16 L/min（溫升 25°C）",
      "能效：能源效率第 2 級；瓦斯消耗量 33.1 kW",
      "安裝位置：室內或室外；仍須依 FE 排氣規範施工",
      "尺寸：寬 34.5 x 深 15.8 x 高 49.3 cm",
      "重量：查不到",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣",
      "安全裝置：熄火、過熱、空燒與風壓偵測",
      "溫控／操作：四季溫與智慧水量；可選配有線溫控",
      "安裝／加價：建議售價含基本安裝，不含耗材及運送；低水壓可能加裝恆壓馬達"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SAKURA DH1670F\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SAKURA%20DH1670F%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SAKURA DH1670F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SAKURA%20DH1670F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SAKURA DH1670F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SAKURA%20DH1670F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SAKURA DH1670F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SAKURA%20DH1670F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SAKURA DH1670F\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SAKURA%20DH1670F%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 95,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "SAKURA 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "SAKURA",
      "台灣瓦斯規格",
      "含基本安裝"
    ]
  },
  {
    "id": "waterheater-sakura-dh1628",
    "category": "waterheater",
    "rank": 6,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "SAKURA",
    "model": "DH1628",
    "name": "SAKURA DH1628 瓦斯瞬熱式（FE 強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 21750,
      "converted": 21750,
      "confidence": "SAKURA 台灣官方產品型錄 exact-model 建議售價 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "included_basic",
      "note": "建議售價含基本安裝，不含耗材及運送"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMBM31A900H2TNN/000001_1769706487.jpg",
    "buyUrl": "https://www.sakura.com.tw/Uploads/Catalog/6516c7d9-7c55-4723-8027-f224d2e65dd8/%E7%B6%B2%E8%B7%AF%E7%94%A8_SAKURA_%E5%85%A8%E7%94%A2%E5%93%81%E5%9E%8B%E9%8C%84_%E7%94%9F%E6%B4%BB%E9%A4%A8_240418.pdf#search=DH1628",
    "buyLabel": "SAKURA 台灣官方產品型錄 exact-model 建議售價",
    "specs": [
      "類型：瓦斯瞬熱式（FE 強制排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：16 L/min（溫升 25°C）",
      "能效：能源效率第 2 級；瓦斯消耗量 33.1 kW",
      "安裝位置：室內或室外；仍須依 FE 排氣規範施工",
      "尺寸：寬 34.5 x 深 15.6 x 高 54.3 cm",
      "重量：查不到",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣",
      "安全裝置：熄火、過熱、空燒與風壓偵測",
      "溫控／操作：無線溫控；智慧水量與分段火力",
      "安裝／加價：建議售價含基本安裝，不含耗材及運送"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SAKURA DH1628\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SAKURA%20DH1628%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SAKURA DH1628\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SAKURA%20DH1628%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SAKURA DH1628\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SAKURA%20DH1628%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SAKURA DH1628\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SAKURA%20DH1628%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SAKURA DH1628\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SAKURA%20DH1628%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 95,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "SAKURA 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "SAKURA",
      "台灣瓦斯規格",
      "含基本安裝"
    ]
  },
  {
    "id": "waterheater-hcg-gh160i",
    "category": "waterheater",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "HCG",
    "model": "GH160i",
    "name": "HCG GH160i 瓦斯瞬熱式（屋內強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 15820,
      "converted": 15820,
      "confidence": "HCG 台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價不代表所有現場材料；排氣孔與瓦斯管需現勘"
    },
    "image": "https://www.hcg.com.tw/upload/2025_10_07/70_20251007163003deben8wNO8.jpg",
    "buyUrl": "https://www.hcg.com.tw/tw/product/detail/GH160i",
    "buyLabel": "HCG 台灣官方產品頁",
    "specs": [
      "類型：瓦斯瞬熱式（屋內強制排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：16 L/min",
      "能效：能源效率第 2 級",
      "安裝位置：屋內；須接強制排氣管至戶外",
      "尺寸：查不到",
      "重量：查不到",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣",
      "安全裝置：熄火、過熱、空燒與排氣異常保護",
      "溫控／操作：數位恆溫；分段火力",
      "安裝／加價：官方建議售價不代表所有現場材料；排氣孔與瓦斯管需現勘"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HCG GH160i\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HCG%20GH160i%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HCG GH160i\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HCG%20GH160i%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HCG GH160i\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HCG%20GH160i%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HCG GH160i\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HCG%20GH160i%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HCG GH160i\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HCG%20GH160i%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 94,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "HCG 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "HCG",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-hcg-gh1688b",
    "category": "waterheater",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "HCG",
    "model": "GH1688B",
    "name": "HCG GH1688B 瓦斯瞬熱式（屋內強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 22100,
      "converted": 22100,
      "confidence": "HCG 台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價不代表所有現場材料；排氣孔與瓦斯管需現勘"
    },
    "image": "https://www.hcg.com.tw/upload/%E5%BB%9A%E5%85%B7%E7%94%A2%E5%93%81%E5%A4%A7%E9%A0%AD%E7%85%A7/04_%E7%86%B1%E6%B0%B4%E5%99%A8%20%E7%93%A6%E6%96%AF%E7%86%B1%E6%B0%B4%E5%99%A8/GH1688B/GH1688B-200.png",
    "buyUrl": "https://www.hcg.com.tw/tw/product/detail/GH1688B",
    "buyLabel": "HCG 台灣官方產品頁",
    "specs": [
      "類型：瓦斯瞬熱式（屋內強制排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：16 L/min",
      "能效：能源效率第 2 級",
      "安裝位置：屋內；須接強制排氣管至戶外",
      "尺寸：查不到",
      "重量：查不到",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣",
      "安全裝置：熄火、過熱、空燒與排氣異常保護",
      "溫控／操作：數位恆溫；智慧水量調節",
      "安裝／加價：官方建議售價不代表所有現場材料；排氣孔與瓦斯管需現勘"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HCG GH1688B\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HCG%20GH1688B%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HCG GH1688B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HCG%20GH1688B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HCG GH1688B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HCG%20GH1688B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HCG GH1688B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HCG%20GH1688B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HCG GH1688B\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HCG%20GH1688B%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 94,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "HCG 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "HCG",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-hcg-gh1011",
    "category": "waterheater",
    "rank": 9,
    "budget": "value",
    "channel": "tw",
    "type": "gas",
    "brand": "HCG",
    "model": "GH1011",
    "name": "HCG GH1011 瓦斯瞬熱式（屋外自然排氣）",
    "price": {
      "currency": "TWD",
      "amount": 8100,
      "converted": 8100,
      "confidence": "HCG 台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價未列現場耗材；安裝位置必須由合格技師判定"
    },
    "image": "https://www.hcg.com.tw/upload/%E5%BB%9A%E5%85%B7%E7%94%A2%E5%93%81%E5%A4%A7%E9%A0%AD%E7%85%A7/04_%E7%86%B1%E6%B0%B4%E5%99%A8%20%E7%93%A6%E6%96%AF%E7%86%B1%E6%B0%B4%E5%99%A8/GH1011/GH1011_200-2.png",
    "buyUrl": "https://www.hcg.com.tw/tw/product/detail/GH1011",
    "buyLabel": "HCG 台灣官方產品頁",
    "specs": [
      "類型：瓦斯瞬熱式（屋外自然排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：10 L/min",
      "能效：能源效率依官方能源標示",
      "安裝位置：僅限通風良好的屋外；不得裝在室內、陽台加窗或密閉處",
      "尺寸：查不到",
      "重量：查不到",
      "電壓／頻率：DC 1.5V 電池點火",
      "排氣／給排水：自然排氣；上方及周邊須保留通風空間",
      "安全裝置：熄火、過熱與空燒保護",
      "溫控／操作：水量與火力旋鈕",
      "安裝／加價：官方建議售價未列現場耗材；安裝位置必須由合格技師判定"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HCG GH1011\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HCG%20GH1011%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HCG GH1011\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HCG%20GH1011%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HCG GH1011\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HCG%20GH1011%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HCG GH1011\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HCG%20GH1011%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HCG GH1011\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HCG%20GH1011%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 94,
    "voltage": "DC 1.5V 電池點火 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "HCG 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "HCG",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-paotien-ph-2001fel",
    "category": "waterheater",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "Paotien",
    "model": "PH-2001FEL",
    "name": "Paotien PH-2001FEL 瓦斯瞬熱式（屋內強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 31000,
      "converted": 31000,
      "confidence": "寶田台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未列全套現場耗材；多點供水前須確認水壓、瓦斯表與管徑"
    },
    "image": "https://www.paotien.com.tw/images/com_hikashop/upload/ph-2001fel.jpg",
    "buyUrl": "https://www.paotien.com.tw/pages/gas-water-heater/ph-2001fel",
    "buyLabel": "寶田台灣官方產品頁",
    "specs": [
      "類型：瓦斯瞬熱式（屋內強制排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：20 L/min",
      "能效：能源效率依官方能源標示",
      "安裝位置：屋內；須接強制排氣管至戶外",
      "尺寸：寬 37.7 x 深 17.6 x 高 63.3 cm",
      "重量：查不到",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣",
      "安全裝置：熄火、過熱、空燒與風壓異常保護",
      "溫控／操作：數位恆溫；大水量供水",
      "安裝／加價：官方定價未列全套現場耗材；多點供水前須確認水壓、瓦斯表與管徑"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Paotien PH-2001FEL\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Paotien%20PH-2001FEL%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Paotien PH-2001FEL\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Paotien%20PH-2001FEL%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Paotien PH-2001FEL\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Paotien%20PH-2001FEL%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Paotien PH-2001FEL\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Paotien%20PH-2001FEL%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Paotien PH-2001FEL\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Paotien%20PH-2001FEL%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 93,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Paotien 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "Paotien",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-paotien-ph-1607felw",
    "category": "waterheater",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "Paotien",
    "model": "PH-1607FELW",
    "name": "Paotien PH-1607FELW 瓦斯瞬熱式（屋內強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 23500,
      "converted": 23500,
      "confidence": "寶田台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未列全套現場耗材；須確認排氣孔與管長"
    },
    "image": "https://www.paotien.com.tw/images/com_hikashop/upload/ph-1607felw.jpg",
    "buyUrl": "https://www.paotien.com.tw/pages/gas-water-heater/ph-1607felw",
    "buyLabel": "寶田台灣官方產品頁",
    "specs": [
      "類型：瓦斯瞬熱式（屋內強制排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：16 L/min；瓦斯消耗量 32 kW",
      "能效：DC 變頻馬達；能源效率依官方能源標示",
      "安裝位置：屋內；須接強制排氣管至戶外",
      "尺寸：寬 35.5 x 深 12.5 x 高 57 cm",
      "重量：查不到",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣；60 mm 排氣管",
      "安全裝置：熄火、過熱、空燒與風壓異常保護",
      "溫控／操作：Q 機能數位恆溫；下置式 DC 變頻馬達",
      "安裝／加價：官方定價未列全套現場耗材；須確認排氣孔與管長"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Paotien PH-1607FELW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Paotien%20PH-1607FELW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Paotien PH-1607FELW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Paotien%20PH-1607FELW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Paotien PH-1607FELW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Paotien%20PH-1607FELW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Paotien PH-1607FELW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Paotien%20PH-1607FELW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Paotien PH-1607FELW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Paotien%20PH-1607FELW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 93,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Paotien 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "Paotien",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-paotien-ph-1301fe",
    "category": "waterheater",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "Paotien",
    "model": "PH-1301FE",
    "name": "Paotien PH-1301FE 瓦斯瞬熱式（屋內強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 16000,
      "converted": 16000,
      "confidence": "寶田台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未列全套現場耗材；須確認排氣孔與瓦斯管線"
    },
    "image": "https://www.paotien.com.tw/images/com_hikashop/upload/ph-1301fe_1494481043.jpg",
    "buyUrl": "https://www.paotien.com.tw/pages/gas-water-heater/ph-1301fe",
    "buyLabel": "寶田台灣官方產品頁",
    "specs": [
      "類型：瓦斯瞬熱式（屋內強制排氣）",
      "能源／氣源：LPG／NG，購買時須選定氣源",
      "熱水能力：13 L/min；瓦斯消耗量 27 kW",
      "能效：能源效率依官方能源標示",
      "安裝位置：屋內；須接強制排氣管至戶外",
      "尺寸：寬 36.5 x 深 15 x 高 59 cm",
      "重量：查不到",
      "電壓／頻率：110–240V／60Hz",
      "排氣／給排水：FE 強制排氣；60 mm 排氣管",
      "安全裝置：熄火、過熱、空燒與風壓異常保護",
      "溫控／操作：數位恆溫；火力自動調節",
      "安裝／加價：官方定價未列全套現場耗材；須確認排氣孔與瓦斯管線"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Paotien PH-1301FE\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Paotien%20PH-1301FE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Paotien PH-1301FE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Paotien%20PH-1301FE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Paotien PH-1301FE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Paotien%20PH-1301FE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Paotien PH-1301FE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Paotien%20PH-1301FE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Paotien PH-1301FE\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Paotien%20PH-1301FE%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 93,
    "voltage": "110–240V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Paotien 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "瓦斯熱水器",
      "Paotien",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-haier-jsq25-13e3-lpg",
    "category": "waterheater",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "type": "gas",
    "brand": "Haier",
    "model": "JSQ25-13E3 LPG",
    "name": "Haier JSQ25-13E3 LPG 瓦斯瞬熱式（屋內強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 12900,
      "converted": 12900,
      "confidence": "Haier 海爾台灣官方商城 13L exact variation 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價未含未列材料；桶裝瓦斯調整器與排氣管須現勘"
    },
    "image": "https://www.haierpro.com.tw/wp-content/uploads/haier%E6%B5%B7%E7%88%BE%E7%86%B1%E6%B0%B4%E5%99%A8_LPG%E6%A1%B6%E8%A3%9D%E7%93%A6%E6%96%AF_%E6%AD%A3%E9%9D%A2.png",
    "buyUrl": "https://www.haierpro.com.tw/product/lpg/?attribute_pa_liter=13l",
    "buyLabel": "Haier 海爾台灣官方商城 13L exact variation",
    "specs": [
      "類型：瓦斯瞬熱式（屋內強制排氣）",
      "能源／氣源：LPG 桶裝液化瓦斯專用",
      "熱水能力：13 L/min",
      "能效：能源效率依台灣官方標示",
      "安裝位置：屋內；須接強制排氣管至戶外",
      "尺寸：寬 35.5 x 深 16.5 x 高 57.5 cm",
      "重量：10.3 kg",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣",
      "安全裝置：CO 防護、熄火、過熱、空燒與風壓異常保護",
      "溫控／操作：數位恆溫；分段燃燒",
      "安裝／加價：官方建議售價未含未列材料；桶裝瓦斯調整器與排氣管須現勘"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Haier JSQ25-13E3 LPG\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Haier%20JSQ25-13E3%20LPG%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Haier JSQ25-13E3 LPG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Haier%20JSQ25-13E3%20LPG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Haier JSQ25-13E3 LPG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Haier%20JSQ25-13E3%20LPG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Haier JSQ25-13E3 LPG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Haier%20JSQ25-13E3%20LPG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Haier JSQ25-13E3 LPG\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Haier%20JSQ25-13E3%20LPG%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 92,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Haier 台灣公司貨；官方標示整機 3 年保固，施工與耗材依保證書",
    "tags": [
      "瓦斯熱水器",
      "Haier",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-haier-jsq30-16e1-lpg",
    "category": "waterheater",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "type": "gas",
    "brand": "Haier",
    "model": "JSQ30-16E1 LPG",
    "name": "Haier JSQ30-16E1 LPG 瓦斯瞬熱式（屋內強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 15800,
      "converted": 15800,
      "confidence": "Haier 海爾台灣官方商城 16L exact variation 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價未含未列材料；桶裝瓦斯調整器與排氣管須現勘"
    },
    "image": "https://www.haierpro.com.tw/wp-content/uploads/haier%E6%B5%B7%E7%88%BE%E7%86%B1%E6%B0%B4%E5%99%A8_LPG%E6%A1%B6%E8%A3%9D%E7%93%A6%E6%96%AF_%E6%AD%A3%E9%9D%A2.png",
    "buyUrl": "https://www.haierpro.com.tw/product/lpg/?attribute_pa_liter=16l",
    "buyLabel": "Haier 海爾台灣官方商城 16L exact variation",
    "specs": [
      "類型：瓦斯瞬熱式（屋內強制排氣）",
      "能源／氣源：LPG 桶裝液化瓦斯專用",
      "熱水能力：16 L/min",
      "能效：能源效率依台灣官方標示",
      "安裝位置：屋內；須接強制排氣管至戶外",
      "尺寸：寬 35.5 x 深 16.5 x 高 57.5 cm",
      "重量：10.3 kg",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣",
      "安全裝置：CO 防護、熄火、過熱、空燒與風壓異常保護",
      "溫控／操作：數位恆溫；分段燃燒",
      "安裝／加價：官方建議售價未含未列材料；桶裝瓦斯調整器與排氣管須現勘"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Haier JSQ30-16E1 LPG\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Haier%20JSQ30-16E1%20LPG%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Haier JSQ30-16E1 LPG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Haier%20JSQ30-16E1%20LPG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Haier JSQ30-16E1 LPG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Haier%20JSQ30-16E1%20LPG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Haier JSQ30-16E1 LPG\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Haier%20JSQ30-16E1%20LPG%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Haier JSQ30-16E1 LPG\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Haier%20JSQ30-16E1%20LPG%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 92,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Haier 台灣公司貨；官方標示整機 3 年保固，施工與耗材依保證書",
    "tags": [
      "瓦斯熱水器",
      "Haier",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-haier-jsq34-16dc3-ng1",
    "category": "waterheater",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "type": "gas",
    "brand": "Haier",
    "model": "JSQ34-16DC3/NG1",
    "name": "Haier JSQ34-16DC3/NG1 瓦斯瞬熱式（屋內強制排氣）",
    "price": {
      "currency": "TWD",
      "amount": 14900,
      "converted": 14900,
      "confidence": "Haier 海爾台灣官方型錄 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價未含未列材料；僅適用 NG1，須確認瓦斯別與排氣施工"
    },
    "image": "https://www.haierpro.com.tw/wp-content/uploads/haier%E6%B5%B7%E7%88%BE%E7%87%83%E6%B0%A3%E7%86%B1%E6%B0%B4%E5%99%A8DC3-%E6%AD%A3%E9%9D%A2.png",
    "buyUrl": "https://www.haierpro.com.tw/wp-content/uploads/20251013%E6%B5%B7%E7%88%BE%E5%85%A8%E7%94%A2%E5%93%81%E5%9E%8B%E9%8C%84-H.pdf",
    "buyLabel": "Haier 海爾台灣官方型錄",
    "specs": [
      "類型：瓦斯瞬熱式（屋內強制排氣）",
      "能源／氣源：NG1 天然瓦斯專用",
      "熱水能力：16 L/min",
      "能效：DC 變頻；能源效率依台灣官方標示",
      "安裝位置：屋內；須接強制排氣管至戶外",
      "尺寸：寬 37 x 深 15 x 高 54 cm",
      "重量：查不到",
      "電壓／頻率：110V／60Hz",
      "排氣／給排水：FE 強制排氣",
      "安全裝置：CO 防護、熄火、過熱、空燒與風壓異常保護",
      "溫控／操作：數位恆溫；DC 變頻風機",
      "安裝／加價：官方建議售價未含未列材料；僅適用 NG1，須確認瓦斯別與排氣施工"
    ],
    "description": "台灣住宅瓦斯瞬熱機；氣源、安裝位置與排氣方式必須在下單前逐項核對。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "即開即熱，連續供水能力適合日常淋浴",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "氣源選錯或排氣施工不合規會造成重大安全風險",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "已有合規瓦斯與排氣條件、希望連續熱水的住宅",
    "recommendation": "選購重點：即開即熱，連續供水能力適合日常淋浴；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Haier JSQ34-16DC3/NG1\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Haier%20JSQ34-16DC3%2FNG1%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Haier JSQ34-16DC3/NG1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Haier%20JSQ34-16DC3%2FNG1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Haier JSQ34-16DC3/NG1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Haier%20JSQ34-16DC3%2FNG1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Haier JSQ34-16DC3/NG1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Haier%20JSQ34-16DC3%2FNG1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Haier JSQ34-16DC3/NG1\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Haier%20JSQ34-16DC3%2FNG1%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 92,
    "voltage": "110V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Haier 台灣公司貨；官方標示整機 3 年保固，施工與耗材依保證書",
    "tags": [
      "瓦斯熱水器",
      "Haier",
      "台灣瓦斯規格",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-rinnai-reh-0856p4",
    "category": "waterheater",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "storage",
    "brand": "Rinnai",
    "model": "REH-0856P4",
    "name": "Rinnai REH-0856P4 儲熱式電熱水器（直掛）",
    "price": {
      "currency": "TWD",
      "amount": 16400,
      "converted": 16400,
      "confidence": "台灣林內官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未列現場配線與管材；需 220V 專用迴路、接地與排水"
    },
    "image": "https://www.rinnai.com.tw/storage/product/1782442090_REH-0856P4%E3%80%810856P6%E3%80%811256P4%E3%80%811256P6%E3%80%811556P4%E5%AE%98%E7%B6%B21.png",
    "buyUrl": "https://www.rinnai.com.tw/Product/V3/420",
    "buyLabel": "台灣林內官方產品頁",
    "specs": [
      "類型：儲熱式電熱水器（直掛）",
      "能源／氣源：電力；8 加侖／約 30 L 儲槽",
      "熱水能力：8 加侖；4 kW 加熱",
      "能效：貯備型電熱水器能效依能源標示",
      "安裝位置：室內牆面直掛；牆體與固定件須承載滿水重量",
      "尺寸：寬 40.5 x 深 40.5 x 高 56.5 cm",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；冷熱水與安全洩壓排水須完整配置",
      "安全裝置：漏電斷路、過熱斷電、逆止與洩壓閥",
      "溫控／操作：機械式溫控；儲槽保溫",
      "安裝／加價：官方定價未列現場配線與管材；需 220V 專用迴路、接地與排水"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Rinnai REH-0856P4\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Rinnai%20REH-0856P4%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Rinnai REH-0856P4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Rinnai%20REH-0856P4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Rinnai REH-0856P4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Rinnai%20REH-0856P4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Rinnai REH-0856P4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Rinnai%20REH-0856P4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Rinnai REH-0856P4\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Rinnai%20REH-0856P4%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 91,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Rinnai 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "Rinnai",
      "儲熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-rinnai-reh-1256p4",
    "category": "waterheater",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "storage",
    "brand": "Rinnai",
    "model": "REH-1256P4",
    "name": "Rinnai REH-1256P4 儲熱式電熱水器（直掛）",
    "price": {
      "currency": "TWD",
      "amount": 18200,
      "converted": 18200,
      "confidence": "台灣林內官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未列現場配線與管材；需 220V 專用迴路、接地與排水"
    },
    "image": "https://www.rinnai.com.tw/storage/product/1782442090_REH-0856P4%E3%80%810856P6%E3%80%811256P4%E3%80%811256P6%E3%80%811556P4%E5%AE%98%E7%B6%B21.png",
    "buyUrl": "https://www.rinnai.com.tw/Product/V3/419",
    "buyLabel": "台灣林內官方產品頁",
    "specs": [
      "類型：儲熱式電熱水器（直掛）",
      "能源／氣源：電力；12 加侖／約 45 L 儲槽",
      "熱水能力：12 加侖；4 kW 加熱",
      "能效：貯備型電熱水器能效依能源標示",
      "安裝位置：室內牆面直掛；牆體與固定件須承載滿水重量",
      "尺寸：寬 40.5 x 深 40.5 x 高 74.2 cm",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；冷熱水與安全洩壓排水須完整配置",
      "安全裝置：漏電斷路、過熱斷電、逆止與洩壓閥",
      "溫控／操作：機械式溫控；儲槽保溫",
      "安裝／加價：官方定價未列現場配線與管材；需 220V 專用迴路、接地與排水"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Rinnai REH-1256P4\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Rinnai%20REH-1256P4%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Rinnai REH-1256P4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Rinnai%20REH-1256P4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Rinnai REH-1256P4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Rinnai%20REH-1256P4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Rinnai REH-1256P4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Rinnai%20REH-1256P4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Rinnai REH-1256P4\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Rinnai%20REH-1256P4%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 91,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Rinnai 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "Rinnai",
      "儲熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-rinnai-reh-2056p4",
    "category": "waterheater",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "storage",
    "brand": "Rinnai",
    "model": "REH-2056P4",
    "name": "Rinnai REH-2056P4 儲熱式電熱水器（直掛）",
    "price": {
      "currency": "TWD",
      "amount": 20900,
      "converted": 20900,
      "confidence": "台灣林內官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未列現場配線與管材；需 220V 專用迴路、接地與排水"
    },
    "image": "https://www.rinnai.com.tw/storage/product/1782441355_REH-2056P4%E3%80%812056P6%E3%80%813056P4%E3%80%813056P6%E5%AE%98%E7%B6%B21.png",
    "buyUrl": "https://www.rinnai.com.tw/Product/V3/417",
    "buyLabel": "台灣林內官方產品頁",
    "specs": [
      "類型：儲熱式電熱水器（直掛）",
      "能源／氣源：電力；20 加侖／約 75 L 儲槽",
      "熱水能力：20 加侖；4 kW 加熱",
      "能效：貯備型電熱水器能效依能源標示",
      "安裝位置：室內牆面直掛；牆體與固定件須承載滿水重量",
      "尺寸：寬 47 x 深 47 x 高 116.6 cm",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；冷熱水與安全洩壓排水須完整配置",
      "安全裝置：漏電斷路、過熱斷電、逆止與洩壓閥",
      "溫控／操作：機械式溫控；儲槽保溫",
      "安裝／加價：官方定價未列現場配線與管材；需 220V 專用迴路、接地與排水"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Rinnai REH-2056P4\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Rinnai%20REH-2056P4%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Rinnai REH-2056P4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Rinnai%20REH-2056P4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Rinnai REH-2056P4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Rinnai%20REH-2056P4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Rinnai REH-2056P4\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Rinnai%20REH-2056P4%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Rinnai REH-2056P4\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Rinnai%20REH-2056P4%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 91,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Rinnai 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "Rinnai",
      "儲熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-paotien-peh-8gs",
    "category": "waterheater",
    "rank": 19,
    "budget": "value",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "storage",
    "brand": "Paotien",
    "model": "PEH-8GS",
    "name": "Paotien PEH-8GS 儲熱式電熱水器",
    "price": {
      "currency": "TWD",
      "amount": 10000,
      "converted": 10000,
      "confidence": "寶田台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未列現場材料；需 220V 專用迴路、接地與洩壓排水"
    },
    "image": "https://www.paotien.com.tw/images/peh-1_404546317.jpg",
    "buyUrl": "https://www.paotien.com.tw/pages/electric-water-heater/peh-8gs",
    "buyLabel": "寶田台灣官方產品頁",
    "specs": [
      "類型：儲熱式電熱水器",
      "能源／氣源：電力；8 加侖儲槽",
      "熱水能力：8 加侖",
      "能效：貯備型電熱水器能效依能源標示",
      "安裝位置：室內壁掛；結構須承載滿水重量",
      "尺寸：寬 37 x 深 37 x 高 56 cm",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；需冷熱水、洩壓及排水管路",
      "安全裝置：漏電斷路、過熱斷電、逆止與洩壓閥",
      "溫控／操作：機械式溫控；儲槽保溫",
      "安裝／加價：官方定價未列現場材料；需 220V 專用迴路、接地與洩壓排水"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Paotien PEH-8GS\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Paotien%20PEH-8GS%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Paotien PEH-8GS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Paotien%20PEH-8GS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Paotien PEH-8GS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Paotien%20PEH-8GS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Paotien PEH-8GS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Paotien%20PEH-8GS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Paotien PEH-8GS\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Paotien%20PEH-8GS%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 90,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Paotien 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "Paotien",
      "儲熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-paotien-peh-15gs",
    "category": "waterheater",
    "rank": 20,
    "budget": "value",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "storage",
    "brand": "Paotien",
    "model": "PEH-15GS",
    "name": "Paotien PEH-15GS 儲熱式電熱水器",
    "price": {
      "currency": "TWD",
      "amount": 12400,
      "converted": 12400,
      "confidence": "寶田台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未列現場材料；需 220V 專用迴路、接地與洩壓排水"
    },
    "image": "https://www.paotien.com.tw/images/peh-1_404546317.jpg",
    "buyUrl": "https://www.paotien.com.tw/pages/electric-water-heater/peh-15gs",
    "buyLabel": "寶田台灣官方產品頁",
    "specs": [
      "類型：儲熱式電熱水器",
      "能源／氣源：電力；15 加侖儲槽",
      "熱水能力：15 加侖",
      "能效：貯備型電熱水器能效依能源標示",
      "安裝位置：室內壁掛；結構須承載滿水重量",
      "尺寸：寬 40 x 深 40 x 高 73 cm",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；需冷熱水、洩壓及排水管路",
      "安全裝置：漏電斷路、過熱斷電、逆止與洩壓閥",
      "溫控／操作：機械式溫控；儲槽保溫",
      "安裝／加價：官方定價未列現場材料；需 220V 專用迴路、接地與洩壓排水"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Paotien PEH-15GS\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Paotien%20PEH-15GS%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Paotien PEH-15GS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Paotien%20PEH-15GS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Paotien PEH-15GS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Paotien%20PEH-15GS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Paotien PEH-15GS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Paotien%20PEH-15GS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Paotien PEH-15GS\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Paotien%20PEH-15GS%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 90,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Paotien 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "Paotien",
      "儲熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-paotien-ph-88",
    "category": "waterheater",
    "rank": 21,
    "budget": "value",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "instant",
    "brand": "Paotien",
    "model": "PH-88",
    "name": "Paotien PH-88 即熱式電熱水器",
    "price": {
      "currency": "TWD",
      "amount": 6800,
      "converted": 6800,
      "confidence": "寶田台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未列粗線徑配線；需約 46A 專用迴路、合格斷路器與接地"
    },
    "image": "https://www.paotien.com.tw/images/com_hikashop/upload/thumbnails/600x600f/69_g_1413439648810.jpg",
    "buyUrl": "https://www.paotien.com.tw/pages/electric-water-heater/electric-water-heater-moment/ph-88",
    "buyLabel": "寶田台灣官方產品頁",
    "specs": [
      "類型：即熱式電熱水器",
      "能源／氣源：電力；10.1 kW",
      "熱水能力：約 3–6 L/min，隨進水溫與設定而變",
      "能效：即開即熱、無儲槽待機損失",
      "安裝位置：浴室乾燥可維修處；不得被蓮蓬頭直接淋濕",
      "尺寸：寬 23 x 深 14 x 高 34 cm",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；需穩定進水、出水與接地",
      "安全裝置：漏電、過熱、空燒與水流連動保護",
      "溫控／操作：無段／多段功率與水溫控制",
      "安裝／加價：官方定價未列粗線徑配線；需約 46A 專用迴路、合格斷路器與接地"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Paotien PH-88\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Paotien%20PH-88%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Paotien PH-88\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Paotien%20PH-88%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Paotien PH-88\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Paotien%20PH-88%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Paotien PH-88\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Paotien%20PH-88%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Paotien PH-88\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Paotien%20PH-88%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 90,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Paotien 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "Paotien",
      "即熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-sakura-eh0810a6",
    "category": "waterheater",
    "rank": 22,
    "budget": "value",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "storage",
    "brand": "SAKURA",
    "model": "EH0810A6",
    "name": "SAKURA EH0810A6 儲熱式電熱水器（直掛）",
    "price": {
      "currency": "TWD",
      "amount": 13000,
      "converted": 13000,
      "confidence": "SAKURA 台灣官方產品型錄 exact-model 建議售價 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "included_basic",
      "note": "建議售價含基本安裝，不含耗材及運送；須配置 220V 專用迴路"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMBM31A900J3U55/000001_1754503298.jpg",
    "buyUrl": "https://www.sakura.com.tw/Uploads/Catalog/6516c7d9-7c55-4723-8027-f224d2e65dd8/%E7%B6%B2%E8%B7%AF%E7%94%A8_SAKURA_%E5%85%A8%E7%94%A2%E5%93%81%E5%9E%8B%E9%8C%84_%E7%94%9F%E6%B4%BB%E9%A4%A8_240418.pdf#search=EH0810A6",
    "buyLabel": "SAKURA 台灣官方產品型錄 exact-model 建議售價",
    "specs": [
      "類型：儲熱式電熱水器（直掛）",
      "能源／氣源：電力；8 加侖／31 L 儲槽",
      "熱水能力：8 加侖（31 L）；6 kW",
      "能效：貯備型電熱水器能效依能源標示",
      "安裝位置：室內牆面直掛；牆體須承載滿水重量",
      "尺寸：寬 40.5 x 深 40.5 x 高 56.5 cm",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；1/2 吋冷熱水、洩壓與排污管路",
      "安全裝置：漏電斷路器、高溫切斷、逆止與 0.6 MPa 洩壓閥",
      "溫控／操作：溫度設定與儲槽保溫",
      "安裝／加價：建議售價含基本安裝，不含耗材及運送；須配置 220V 專用迴路"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SAKURA EH0810A6\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SAKURA%20EH0810A6%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SAKURA EH0810A6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SAKURA%20EH0810A6%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SAKURA EH0810A6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SAKURA%20EH0810A6%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SAKURA EH0810A6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SAKURA%20EH0810A6%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SAKURA EH0810A6\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SAKURA%20EH0810A6%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 89,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "SAKURA 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "SAKURA",
      "儲熱式",
      "含基本安裝"
    ]
  },
  {
    "id": "waterheater-sakura-sh125",
    "category": "waterheater",
    "rank": 23,
    "budget": "value",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "instant",
    "brand": "SAKURA",
    "model": "SH125",
    "name": "SAKURA SH125 即熱式電熱水器",
    "price": {
      "currency": "TWD",
      "amount": 7850,
      "converted": 7850,
      "confidence": "SAKURA 台灣官方產品型錄 exact-model 建議售價 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "included_basic",
      "note": "建議售價含基本安裝，不含耗材及運送；須確認專用迴路線徑與斷路器"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMBM31A900FZFAL/000001_1769664709.jpg",
    "buyUrl": "https://www.sakura.com.tw/Uploads/Catalog/6516c7d9-7c55-4723-8027-f224d2e65dd8/%E7%B6%B2%E8%B7%AF%E7%94%A8_SAKURA_%E5%85%A8%E7%94%A2%E5%93%81%E5%9E%8B%E9%8C%84_%E7%94%9F%E6%B4%BB%E9%A4%A8_240418.pdf#search=SH125",
    "buyLabel": "SAKURA 台灣官方產品型錄 exact-model 建議售價",
    "specs": [
      "類型：即熱式電熱水器",
      "能源／氣源：電力；9.9 kW",
      "熱水能力：約 3–6 L/min，隨進水溫與設定而變",
      "能效：即開即熱、無儲槽待機損失",
      "安裝位置：浴室乾燥可維修處；避免直接淋水",
      "尺寸：寬 20.6 x 深 9.2 x 高 37.7 cm",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；需穩定進出水與接地",
      "安全裝置：漏電、過熱、空燒與水流連動保護",
      "溫控／操作：多段功率／水溫調整",
      "安裝／加價：建議售價含基本安裝，不含耗材及運送；須確認專用迴路線徑與斷路器"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SAKURA SH125\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SAKURA%20SH125%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SAKURA SH125\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SAKURA%20SH125%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SAKURA SH125\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SAKURA%20SH125%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SAKURA SH125\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SAKURA%20SH125%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SAKURA SH125\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SAKURA%20SH125%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 89,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "SAKURA 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "SAKURA",
      "即熱式",
      "含基本安裝"
    ]
  },
  {
    "id": "waterheater-sakura-sh186",
    "category": "waterheater",
    "rank": 24,
    "budget": "value",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "instant",
    "brand": "SAKURA",
    "model": "SH186",
    "name": "SAKURA SH186 即熱式電熱水器",
    "price": {
      "currency": "TWD",
      "amount": 6150,
      "converted": 6150,
      "confidence": "SAKURA 台灣官方產品型錄 exact-model 建議售價 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "included_basic",
      "note": "建議售價含基本安裝，不含耗材及運送；須確認專用迴路線徑與斷路器"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMBM31A900FZF9U/000001_1769664735.jpg",
    "buyUrl": "https://www.sakura.com.tw/Uploads/Catalog/6516c7d9-7c55-4723-8027-f224d2e65dd8/%E7%B6%B2%E8%B7%AF%E7%94%A8_SAKURA_%E5%85%A8%E7%94%A2%E5%93%81%E5%9E%8B%E9%8C%84_%E7%94%9F%E6%B4%BB%E9%A4%A8_240418.pdf#search=SH186",
    "buyLabel": "SAKURA 台灣官方產品型錄 exact-model 建議售價",
    "specs": [
      "類型：即熱式電熱水器",
      "能源／氣源：電力；10.1 kW",
      "熱水能力：約 3–6 L/min，隨進水溫與設定而變",
      "能效：即開即熱、無儲槽待機損失",
      "安裝位置：浴室乾燥可維修處；避免直接淋水",
      "尺寸：寬 23 x 深 13 x 高 35 cm",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；需穩定進出水與接地",
      "安全裝置：漏電、過熱、空燒與水流連動保護",
      "溫控／操作：多段功率／水溫調整",
      "安裝／加價：建議售價含基本安裝，不含耗材及運送；須確認專用迴路線徑與斷路器"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SAKURA SH186\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SAKURA%20SH186%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SAKURA SH186\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SAKURA%20SH186%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SAKURA SH186\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SAKURA%20SH186%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SAKURA SH186\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SAKURA%20SH186%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SAKURA SH186\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SAKURA%20SH186%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 89,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "SAKURA 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "SAKURA",
      "即熱式",
      "含基本安裝"
    ]
  },
  {
    "id": "waterheater-haier-hr-es15vsvh1",
    "category": "waterheater",
    "rank": 25,
    "budget": "value",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "storage",
    "brand": "Haier",
    "model": "HR-ES15VSVH1",
    "name": "Haier HR-ES15VSVH1 儲熱式電熱水器",
    "price": {
      "currency": "TWD",
      "amount": 12800,
      "converted": 12800,
      "confidence": "Haier 海爾台灣官方商城 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價未含未列管線與配電；需 220V 專用迴路與牆體承重確認"
    },
    "image": "https://www.haierpro.com.tw/wp-content/uploads/VH1F.jpg",
    "buyUrl": "https://www.haierpro.com.tw/product/vh1/",
    "buyLabel": "Haier 海爾台灣官方商城",
    "specs": [
      "類型：儲熱式電熱水器",
      "能源／氣源：電力；15 加侖儲槽；2.2 kW",
      "熱水能力：15 加侖",
      "能效：能源效率第 5 級；IPX4",
      "安裝位置：室內壁掛；結構須承載滿水重量",
      "尺寸：寬 41 x 深 42.1 x 高 78.1 cm",
      "重量：20 kg",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；需冷熱水、洩壓及排水管路",
      "安全裝置：漏電、過熱、乾燒、逆止與洩壓保護",
      "溫控／操作：溫度旋鈕與儲槽保溫",
      "安裝／加價：官方建議售價未含未列管線與配電；需 220V 專用迴路與牆體承重確認"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Haier HR-ES15VSVH1\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Haier%20HR-ES15VSVH1%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Haier HR-ES15VSVH1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Haier%20HR-ES15VSVH1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Haier HR-ES15VSVH1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Haier%20HR-ES15VSVH1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Haier HR-ES15VSVH1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Haier%20HR-ES15VSVH1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Haier HR-ES15VSVH1\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Haier%20HR-ES15VSVH1%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 88,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Haier 台灣公司貨；整機 2 年、內膽 5 年，仍以保證書為準",
    "tags": [
      "電熱水器",
      "Haier",
      "儲熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-haier-hr-es20hj5d",
    "category": "waterheater",
    "rank": 26,
    "budget": "mid",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "storage",
    "brand": "Haier",
    "model": "HR-ES20HJ5D",
    "name": "Haier HR-ES20HJ5D 儲熱式電熱水器（橫掛）",
    "price": {
      "currency": "TWD",
      "amount": 28680,
      "converted": 28680,
      "confidence": "Haier 海爾台灣官方商城 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價未含未列管線與配電；雙加熱負載須由電工核算專用迴路"
    },
    "image": "https://www.haierpro.com.tw/wp-content/uploads/5D-1.jpg",
    "buyUrl": "https://www.haierpro.com.tw/product/5d/",
    "buyLabel": "Haier 海爾台灣官方商城",
    "specs": [
      "類型：儲熱式電熱水器（橫掛）",
      "能源／氣源：電力；20 加侖儲槽；3 kW＋3D 輔助加熱 3 kW",
      "熱水能力：20 加侖",
      "能效：儲熱保溫；能效依台灣官方標示",
      "安裝位置：室內橫掛；結構須承載滿水重量",
      "尺寸：查不到",
      "重量：26 kg",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；需冷熱水、洩壓及排水管路",
      "安全裝置：漏電、過熱、乾燒、逆止與洩壓保護",
      "溫控／操作：電子溫控；一般與快速加熱模式",
      "安裝／加價：官方建議售價未含未列管線與配電；雙加熱負載須由電工核算專用迴路"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Haier HR-ES20HJ5D\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Haier%20HR-ES20HJ5D%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Haier HR-ES20HJ5D\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Haier%20HR-ES20HJ5D%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Haier HR-ES20HJ5D\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Haier%20HR-ES20HJ5D%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Haier HR-ES20HJ5D\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Haier%20HR-ES20HJ5D%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Haier HR-ES20HJ5D\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Haier%20HR-ES20HJ5D%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 88,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Haier 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "Haier",
      "儲熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-haier-hr-ei65ze1",
    "category": "waterheater",
    "rank": 27,
    "budget": "value",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "instant",
    "brand": "Haier",
    "model": "HR-EI65ZE1",
    "name": "Haier HR-EI65ZE1 變頻即熱式電熱水器",
    "price": {
      "currency": "TWD",
      "amount": 10990,
      "converted": 10990,
      "confidence": "Haier 海爾台灣官方商城 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價未含未列配線；需 220V 約 30A 專用迴路、接地與合格斷路器"
    },
    "image": "https://www.haierpro.com.tw/wp-content/uploads/facebooking%E5%8D%B3%E7%86%B1%E5%BC%8F%E9%9B%BB%E7%86%B1%E6%B0%B4%E5%99%A8ZE1.jpg",
    "buyUrl": "https://www.haierpro.com.tw/product/ze1-6500w/",
    "buyLabel": "Haier 海爾台灣官方商城",
    "specs": [
      "類型：變頻即熱式電熱水器",
      "能源／氣源：電力；6.5 kW；額定電流 29.5A",
      "熱水能力：依進水溫與流量變化；設定 30–55°C",
      "能效：即開即熱、無儲槽待機損失；IPX4",
      "安裝位置：浴室乾燥可維修處；避免直接淋水",
      "尺寸：查不到",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；需穩定進出水與接地",
      "安全裝置：漏電、過熱、空燒與水流連動保護",
      "溫控／操作：變頻恆溫；30–55°C 數位設定",
      "安裝／加價：官方建議售價未含未列配線；需 220V 約 30A 專用迴路、接地與合格斷路器"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Haier HR-EI65ZE1\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Haier%20HR-EI65ZE1%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Haier HR-EI65ZE1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Haier%20HR-EI65ZE1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Haier HR-EI65ZE1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Haier%20HR-EI65ZE1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Haier HR-EI65ZE1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Haier%20HR-EI65ZE1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Haier HR-EI65ZE1\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Haier%20HR-EI65ZE1%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 88,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Haier 台灣公司貨；整機 1 年、加熱體 5 年；登錄延長依當期官方辦法",
    "tags": [
      "電熱水器",
      "Haier",
      "即熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-hcg-e7122b",
    "category": "waterheater",
    "rank": 28,
    "budget": "value",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "instant",
    "brand": "HCG",
    "model": "E7122B",
    "name": "HCG E7122B 即熱式電熱水器",
    "price": {
      "currency": "TWD",
      "amount": 7800,
      "converted": 7800,
      "confidence": "HCG 台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未含未列配線與管材；需 220V 專用迴路、接地與合格斷路器"
    },
    "image": "https://www.hcg.com.tw/public/upload/%E5%BB%9A%E5%85%B7%E7%94%A2%E5%93%81%E5%A4%A7%E9%A0%AD%E7%85%A7/05_%E7%86%B1%E6%B0%B4%E5%99%A8%20%E7%9E%AC%E9%96%93%E9%9B%BB%E8%83%BD%E5%9E%8B%E7%86%B1%E6%B0%B4%E5%99%A8/E7122B/E7122B-200.png",
    "buyUrl": "https://www.hcg.com.tw/public/tw/product/detail/E7122B",
    "buyLabel": "HCG 台灣官方產品頁",
    "specs": [
      "類型：即熱式電熱水器",
      "能源／氣源：電力；8.8 kW",
      "熱水能力：依進水溫與流量變化",
      "能效：即開即熱、無儲槽待機損失",
      "安裝位置：浴室乾燥可維修處；避免直接淋水",
      "尺寸：查不到",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；需穩定進出水與接地",
      "安全裝置：漏電、過熱、空燒與水流連動保護",
      "溫控／操作：多段功率與溫度控制",
      "安裝／加價：官方定價未含未列配線與管材；需 220V 專用迴路、接地與合格斷路器"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HCG E7122B\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HCG%20E7122B%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HCG E7122B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HCG%20E7122B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HCG E7122B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HCG%20E7122B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HCG E7122B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HCG%20E7122B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HCG E7122B\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HCG%20E7122B%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 87,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "HCG 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "HCG",
      "即熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-hcg-e7120w",
    "category": "waterheater",
    "rank": 29,
    "budget": "value",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "instant",
    "brand": "HCG",
    "model": "E7120W",
    "name": "HCG E7120W 即熱式電熱水器",
    "price": {
      "currency": "TWD",
      "amount": 7900,
      "converted": 7900,
      "confidence": "HCG 台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方定價未含未列配線與管材；需 220V 專用迴路、接地與合格斷路器"
    },
    "image": "https://www.hcg.com.tw/upload/%E5%BB%9A%E5%85%B7%E7%94%A2%E5%93%81%E5%A4%A7%E9%A0%AD%E7%85%A7/05_%E7%86%B1%E6%B0%B4%E5%99%A8%20%E7%9E%AC%E9%96%93%E9%9B%BB%E8%83%BD%E5%9E%8B%E7%86%B1%E6%B0%B4%E5%99%A8/E7120W.P/E7120W-200.png",
    "buyUrl": "https://www.hcg.com.tw/tw/product/detail/E7120W",
    "buyLabel": "HCG 台灣官方產品頁",
    "specs": [
      "類型：即熱式電熱水器",
      "能源／氣源：電力；10.1 kW",
      "熱水能力：依進水溫與流量變化",
      "能效：即開即熱、無儲槽待機損失",
      "安裝位置：浴室乾燥可維修處；避免直接淋水",
      "尺寸：查不到",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；需穩定進出水與接地",
      "安全裝置：漏電、過熱、空燒與水流連動保護",
      "溫控／操作：多段功率與溫度控制",
      "安裝／加價：官方定價未含未列配線與管材；需 220V 專用迴路、接地與合格斷路器"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HCG E7120W\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HCG%20E7120W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HCG E7120W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HCG%20E7120W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HCG E7120W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HCG%20E7120W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HCG E7120W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HCG%20E7120W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HCG E7120W\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HCG%20E7120W%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 87,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "HCG 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "HCG",
      "即熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-hcg-eq1020a",
    "category": "waterheater",
    "rank": 30,
    "budget": "value",
    "channel": "tw",
    "type": "electric",
    "electricSubtype": "instant",
    "brand": "HCG",
    "model": "EQ1020A",
    "name": "HCG EQ1020A 即熱式電熱水器",
    "price": {
      "currency": "TWD",
      "amount": 14700,
      "converted": 14700,
      "confidence": "HCG 台灣官方產品頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價未含未列配線與管材；需約 45A 專用迴路、接地與合格斷路器"
    },
    "image": "https://www.hcg.com.tw/public/upload/%E5%BB%9A%E5%85%B7%E7%94%A2%E5%93%81%E5%A4%A7%E9%A0%AD%E7%85%A7/05_%E7%86%B1%E6%B0%B4%E5%99%A8%20%E7%9E%AC%E9%96%93%E9%9B%BB%E8%83%BD%E5%9E%8B%E7%86%B1%E6%B0%B4%E5%99%A8/EQ1020.A/EQ1020A-200-2.png",
    "buyUrl": "https://www.hcg.com.tw/public/tw/product/detail/EQ1020A",
    "buyLabel": "HCG 台灣官方產品頁",
    "specs": [
      "類型：即熱式電熱水器",
      "能源／氣源：電力；9.9 kW",
      "熱水能力：1.6–6 L/min",
      "能效：即開即熱、無儲槽待機損失",
      "安裝位置：浴室乾燥可維修處；避免直接淋水",
      "尺寸：寬 49.5 x 深 5.4 x 高 32.3 cm",
      "重量：查不到",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免排氣；需穩定進出水與接地",
      "安全裝置：漏電、過熱、空燒與水流連動保護",
      "溫控／操作：電子恆溫；流量 1.6–6 L/min",
      "安裝／加價：官方建議售價未含未列配線與管材；需約 45A 專用迴路、接地與合格斷路器"
    ],
    "description": "台灣 220V 電熱水器；須把專用迴路、接地、斷路器與給排水一起估價。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "不燃燒瓦斯，沒有燃燒廢氣",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "220V 專用迴路與線徑不足時不能直接安裝",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "無瓦斯條件且可配置合規 220V 專用迴路的住宅",
    "recommendation": "選購重點：不燃燒瓦斯，沒有燃燒廢氣；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HCG EQ1020A\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HCG%20EQ1020A%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HCG EQ1020A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HCG%20EQ1020A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HCG EQ1020A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HCG%20EQ1020A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HCG EQ1020A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HCG%20EQ1020A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HCG EQ1020A\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HCG%20EQ1020A%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 87,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "HCG 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "電熱水器",
      "HCG",
      "即熱式",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-rechi-at-062ai11-ydle",
    "category": "waterheater",
    "rank": 31,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "RECHI",
    "model": "AT-062AI11(YDLE)",
    "name": "RECHI AT-062AI11(YDLE) 一體直熱式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 120680,
      "converted": 120680,
      "confidence": "中詮 RECHI AT-062AI11(YDLE) exact-model 標準安裝含稅總價 2026-08-14 exact-model 公開新品價",
      "basis": "retailer_current",
      "scope": "single_unit"
    },
    "installation": {
      "status": "included_basic",
      "note": "標準安裝到好含稅總價；現場升級材料、吊掛、基礎與超額配管配電另計"
    },
    "image": "https://www.rechi.com/rechi_img/2026_%E7%91%9E%E6%99%BA%E7%86%B1%E6%B3%B5_%20AT-062AI_%E5%B0%81%E9%9D%A2-1.jpg",
    "buyUrl": "https://www.taiwancce.com/pages/CP2211#AT-062AI11",
    "buyLabel": "中詮 RECHI AT-062AI11(YDLE) exact-model 標準安裝含稅總價",
    "specs": [
      "類型：一體直熱式空氣源熱泵熱水器",
      "能源／氣源：電力；R410A；內建 113 L 儲槽；3.0 kW 電輔熱",
      "熱水能力：113 L；製熱能力 6.0 kW；額定供水量 135 L/h（升溫 40°C）",
      "能效：COP 4.72；額定輸入 1.27 kW",
      "安裝位置：屋外或半戶外通風處；限自來水，須保留進排風與維修空間",
      "尺寸：寬 56 x 深 56 x 高 167.8 cm",
      "重量：107 kg",
      "電壓／頻率：220V／單相／60Hz",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與洩壓排水",
      "安全裝置：冷媒高壓／洩漏、壓縮機過溫、電流／漏電、水溫與水流異常保護",
      "溫控／操作：ECO／AI／Turbo 模式；熱泵最高 55°C、搭配電輔熱最高 65°C",
      "安裝／加價：標準安裝到好含稅總價；現場升級材料、吊掛、基礎與超額配管配電另計"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"RECHI AT-062AI11(YDLE)\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22RECHI%20AT-062AI11(YDLE)%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"RECHI AT-062AI11(YDLE)\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22RECHI%20AT-062AI11(YDLE)%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"RECHI AT-062AI11(YDLE)\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22RECHI%20AT-062AI11(YDLE)%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"RECHI AT-062AI11(YDLE)\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22RECHI%20AT-062AI11(YDLE)%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"RECHI AT-062AI11(YDLE)\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22RECHI%20AT-062AI11(YDLE)%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 86,
    "voltage": "220V／單相／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "RECHI 瑞智台灣公司貨；全機 2 年、壓縮機 3 年，依原廠說明書與安裝條款",
    "tags": [
      "熱泵熱水器",
      "RECHI",
      "空氣源熱泵",
      "含基本安裝"
    ]
  },
  {
    "id": "waterheater-hmk-hmt-010200",
    "category": "waterheater",
    "rank": 32,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "HMK",
    "model": "HMT-010200",
    "name": "HMK HMT-010200 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 71250,
      "converted": 71250,
      "confidence": "Rakuten 樂天市場 KW廚房世界 HMT-010200 exact-model 新品公開價 2026-08-14 exact-model 公開新品價",
      "basis": "retailer_current",
      "scope": "single_unit"
    },
    "installation": {
      "status": "not_stated",
      "note": "通路商品頁未明示基本安裝範圍；須索取場勘、管材、配電、樓層與吊運明細"
    },
    "image": "https://tshop.r10s.com/35d/eef/c3cd/329a/f0ab/6fdf/64c2/1161ecb3a50242ac110003.jpg",
    "buyUrl": "https://www.rakuten.com.tw/shop/pokitchen/product/9916923197/",
    "buyLabel": "Rakuten 樂天市場 KW廚房世界 HMT-010200 exact-model 新品公開價",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；R134a；內建 170 L 儲槽",
      "熱水能力：170 L；製熱能力 3.7 kW",
      "能效：COP 3.9；額定輸入 0.95 kW",
      "安裝位置：陽台或屋外非密閉通風處；須保留進排風與維修空間",
      "尺寸：寬 65 x 深 65 x 高 149 cm",
      "重量：88 kg",
      "電壓／頻率：220V／單相／60Hz",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與洩壓排水",
      "安全裝置：過熱、漏電、乾燒與儲槽洩壓保護；須依原廠手冊施工",
      "溫控／操作：觸控面板；節能、自動與電熱模式；額定水溫 55°C、最高 70°C",
      "安裝／加價：通路商品頁未明示基本安裝範圍；須索取場勘、管材、配電、樓層與吊運明細"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HMK HMT-010200\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HMK%20HMT-010200%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HMK HMT-010200\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HMK%20HMT-010200%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HMK HMT-010200\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HMK%20HMT-010200%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HMK HMT-010200\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HMK%20HMT-010200%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HMK HMT-010200\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HMK%20HMT-010200%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 86,
    "voltage": "220V／單相／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "HMK 鴻茂台灣公司貨；官方標示全機 2 年，非自來水環境不在保固範圍",
    "tags": [
      "熱泵熱水器",
      "HMK",
      "空氣源熱泵",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-rechi-at-042ai",
    "category": "waterheater",
    "rank": 33,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "RECHI",
    "model": "AT-042AI",
    "name": "RECHI AT-042AI 一體直熱式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 58294,
      "converted": 58294,
      "confidence": "泰浦樂 2026-08-14 最後可驗證 exact-model 新品含基本安裝公開價；2026-08-15 Yahoo exact-model 頁明示已停售，僅供規格參考",
      "basis": "retailer_current",
      "scope": "single_unit"
    },
    "installation": {
      "status": "included_basic",
      "note": "通路公開價含基本安裝；偏遠、樓層、吊掛、基礎與超額配管配電另計"
    },
    "image": "https://img.yec.tw/zp/MerchandiseImages/323300CF95-SP-12269220.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Toppuror-%E6%B3%B0%E6%B5%A6%E6%A8%82-%E7%91%9E%E6%99%BA%E7%9B%B4%E7%86%B1%E5%BC%8F%E7%86%B1%E6%B3%B5%E7%86%B1%E6%B0%B4%E5%99%A8-%E5%90%AB%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%9D-AT-042AI-10249571.html",
    "buyLabel": "Yahoo購物中心（已停售，僅供規格）",
    "specs": [
      "類型：一體直熱式空氣源熱泵熱水器",
      "能源／氣源：電力；R410A；內建 65 L 儲槽",
      "熱水能力：65 L；製熱能力 4.0 kW；額定供水量 86 L/h（升溫 40°C）",
      "能效：COP 3.0；額定輸入 1.33 kW",
      "安裝位置：屋外或半戶外通風處；須保留進排風與維修空間",
      "尺寸：寬 72 x 深 38 x 高 82 cm",
      "重量：75 kg",
      "電壓／頻率：220V／單相／60Hz",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與洩壓排水",
      "安全裝置：冷媒高壓、壓縮機過溫、電流／漏電、水溫與水流異常保護",
      "溫控／操作：電子定溫；最高設定水溫 60°C",
      "安裝／加價：通路公開價含基本安裝；偏遠、樓層、吊掛、基礎與超額配管配電另計"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "2026-08-15 查無現售新品頁，Yahoo exact-model 頁已停售",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "規格參考：目前查無現售新品頁，不列為優先採購；若恢復供貨，仍須由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"RECHI AT-042AI\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22RECHI%20AT-042AI%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"RECHI AT-042AI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22RECHI%20AT-042AI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"RECHI AT-042AI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22RECHI%20AT-042AI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"RECHI AT-042AI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22RECHI%20AT-042AI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"RECHI AT-042AI\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22RECHI%20AT-042AI%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 86,
    "voltage": "220V／單相／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "RECHI 瑞智台灣公司貨；全機 2 年、壓縮機 3 年，依通路與原廠保證書",
    "tags": [
      "熱泵熱水器",
      "RECHI",
      "空氣源熱泵",
      "含基本安裝"
    ]
  },
  {
    "id": "waterheater-haier-hp80m8-9",
    "category": "waterheater",
    "rank": 34,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "Haier",
    "model": "HP80M8-9",
    "name": "Haier HP80M8-9 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 39000,
      "converted": 39000,
      "confidence": "Haier 海爾台灣官方商城 80L exact variation 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價另加基本安裝 NT$3,500；偏遠、樓層、配管配電與基礎另計"
    },
    "image": "https://www.haierpro.com.tw/wp-content/uploads/haier%E6%B5%B7%E7%88%BEM8%E7%B3%BB%E5%88%97R290%E7%86%B1%E6%B3%B580L-%E6%AD%A3%E9%9D%A2.png",
    "buyUrl": "https://www.haierpro.com.tw/product/m8/?attribute_pa_liter=80l",
    "buyLabel": "Haier 海爾台灣官方商城 80L exact variation",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；R290 冷媒；82 L 額定容量",
      "熱水能力：82 L；熱泵＋輔助電熱",
      "能效：COP 3.07",
      "安裝位置：半戶外或屋外通風處；R290 冷媒須依安裝規範留設空間",
      "尺寸：寬 49.2 x 深 54.7 x 高 118.4 cm",
      "重量：51 kg",
      "電壓／頻率：220–240V／60Hz",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與安全洩壓排水",
      "安全裝置：壓縮機、過熱、漏電、乾燒與洩壓保護",
      "溫控／操作：電子定溫、模式與定時操作",
      "安裝／加價：官方建議售價另加基本安裝 NT$3,500；偏遠、樓層、配管配電與基礎另計"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Haier HP80M8-9\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Haier%20HP80M8-9%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Haier HP80M8-9\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Haier%20HP80M8-9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Haier HP80M8-9\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Haier%20HP80M8-9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Haier HP80M8-9\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Haier%20HP80M8-9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Haier HP80M8-9\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Haier%20HP80M8-9%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 85,
    "voltage": "220–240V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Haier 台灣公司貨；整機 2 年、內膽 5 年，仍以保證書與安裝條款為準",
    "tags": [
      "熱泵熱水器",
      "Haier",
      "空氣源熱泵",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-haier-hp110m8-9",
    "category": "waterheater",
    "rank": 35,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "Haier",
    "model": "HP110M8-9",
    "name": "Haier HP110M8-9 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 43000,
      "converted": 43000,
      "confidence": "Haier 海爾台灣官方商城 110L exact variation 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價另加基本安裝 NT$5,000；偏遠、樓層、配管配電與基礎另計"
    },
    "image": "https://www.haierpro.com.tw/wp-content/uploads/haier%E6%B5%B7%E7%88%BEM8%E7%B3%BB%E5%88%97R290%E7%86%B1%E6%B3%B5110L-%E6%AD%A3%E9%9D%A2.png",
    "buyUrl": "https://www.haierpro.com.tw/product/m8/?attribute_pa_liter=110l",
    "buyLabel": "Haier 海爾台灣官方商城 110L exact variation",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；R290 冷媒；102 L 額定容量",
      "熱水能力：102 L；熱泵＋輔助電熱",
      "能效：COP 3.32",
      "安裝位置：半戶外或屋外通風處；R290 冷媒須依安裝規範留設空間",
      "尺寸：寬 49.2 x 深 54.7 x 高 133.4 cm",
      "重量：54 kg",
      "電壓／頻率：220–240V／60Hz",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與安全洩壓排水",
      "安全裝置：壓縮機、過熱、漏電、乾燒與洩壓保護",
      "溫控／操作：電子定溫、模式與定時操作",
      "安裝／加價：官方建議售價另加基本安裝 NT$5,000；偏遠、樓層、配管配電與基礎另計"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Haier HP110M8-9\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Haier%20HP110M8-9%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Haier HP110M8-9\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Haier%20HP110M8-9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Haier HP110M8-9\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Haier%20HP110M8-9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Haier HP110M8-9\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Haier%20HP110M8-9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Haier HP110M8-9\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Haier%20HP110M8-9%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 85,
    "voltage": "220–240V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Haier 台灣公司貨；整機 2 年、內膽 5 年，仍以保證書與安裝條款為準",
    "tags": [
      "熱泵熱水器",
      "Haier",
      "空氣源熱泵",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-haier-hp150m8-9",
    "category": "waterheater",
    "rank": 36,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "Haier",
    "model": "HP150M8-9",
    "name": "Haier HP150M8-9 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 50000,
      "converted": 50000,
      "confidence": "Haier 海爾台灣官方商城 150L exact variation 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價另加基本安裝 NT$6,000；偏遠、樓層、配管配電與基礎另計"
    },
    "image": "https://www.haierpro.com.tw/wp-content/uploads/haier%E6%B5%B7%E7%88%BEM8%E7%B3%BB%E5%88%97R290%E7%86%B1%E6%B3%B5150L-%E6%AD%A3%E9%9D%A2.png",
    "buyUrl": "https://www.haierpro.com.tw/product/m8/?attribute_pa_liter=150l",
    "buyLabel": "Haier 海爾台灣官方商城 150L exact variation",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；R290 冷媒；149 L 額定容量",
      "熱水能力：149 L；熱泵＋輔助電熱",
      "能效：COP 3.39",
      "安裝位置：半戶外或屋外通風處；R290 冷媒須依安裝規範留設空間",
      "尺寸：寬 49.2 x 深 54.7 x 高 169.4 cm",
      "重量：64 kg",
      "電壓／頻率：220–240V／60Hz",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與安全洩壓排水",
      "安全裝置：壓縮機、過熱、漏電、乾燒與洩壓保護",
      "溫控／操作：電子定溫、模式與定時操作",
      "安裝／加價：官方建議售價另加基本安裝 NT$6,000；偏遠、樓層、配管配電與基礎另計"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Haier HP150M8-9\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Haier%20HP150M8-9%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Haier HP150M8-9\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Haier%20HP150M8-9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Haier HP150M8-9\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Haier%20HP150M8-9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Haier HP150M8-9\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Haier%20HP150M8-9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Haier HP150M8-9\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Haier%20HP150M8-9%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 85,
    "voltage": "220–240V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Haier 台灣公司貨；整機 2 年、內膽 5 年，仍以保證書與安裝條款為準",
    "tags": [
      "熱泵熱水器",
      "Haier",
      "空氣源熱泵",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-atlantic-exp-200",
    "category": "waterheater",
    "rank": 37,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "Atlantic",
    "model": "EXP 200",
    "name": "Atlantic EXP 200 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 165000,
      "converted": 165000,
      "confidence": "Atlantic 亞緹娜台灣官方代理頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "not_stated",
      "note": "官方代理建議售價頁未清楚列出基本安裝範圍；須索取場勘明細"
    },
    "image": "https://www.atlantic.tw/images/ATLANTIC%20PIC/EXP4.jpg",
    "buyUrl": "https://www.atlantic.tw/%E4%BA%9E%E7%B7%B9%E5%A8%9C%E7%86%B1%E6%B3%B5.html#EXP-200",
    "buyLabel": "Atlantic 亞緹娜台灣官方代理頁",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；200 L 儲槽",
      "熱水能力：200 L",
      "能效：熱泵運轉；COP 依台灣代理規格表",
      "安裝位置：室內導風或半戶外通風處；須保留進排風及維修空間",
      "尺寸：查不到",
      "重量：80 kg",
      "電壓／頻率：220V／60Hz（台灣代理規格，施工前再確認迴路）",
      "排氣／給排水：免燃燒排氣；需進排風、冷凝排水、冷熱水與洩壓排水",
      "安全裝置：壓縮機、過熱、漏電與洩壓保護",
      "溫控／操作：電子定溫與熱泵／輔助加熱模式",
      "安裝／加價：官方代理建議售價頁未清楚列出基本安裝範圍；須索取場勘明細"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Atlantic EXP 200\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Atlantic%20EXP%20200%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Atlantic EXP 200\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Atlantic%20EXP%20200%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Atlantic EXP 200\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Atlantic%20EXP%20200%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Atlantic EXP 200\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Atlantic%20EXP%20200%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Atlantic EXP 200\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Atlantic%20EXP%20200%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 84,
    "voltage": "220V／60Hz（台灣代理規格，施工前再確認迴路） 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Atlantic 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "熱泵熱水器",
      "Atlantic",
      "空氣源熱泵",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-atlantic-exp-270",
    "category": "waterheater",
    "rank": 38,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "Atlantic",
    "model": "EXP 270",
    "name": "Atlantic EXP 270 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 179000,
      "converted": 179000,
      "confidence": "Atlantic 亞緹娜台灣官方代理頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "not_stated",
      "note": "官方代理建議售價頁未清楚列出基本安裝範圍；須索取場勘明細"
    },
    "image": "https://www.atlantic.tw/images/ATLANTIC%20PIC/EXP4.jpg",
    "buyUrl": "https://www.atlantic.tw/%E4%BA%9E%E7%B7%B9%E5%A8%9C%E7%86%B1%E6%B3%B5.html#EXP-270",
    "buyLabel": "Atlantic 亞緹娜台灣官方代理頁",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；270 L 儲槽",
      "熱水能力：270 L",
      "能效：熱泵運轉；COP 依台灣代理規格表",
      "安裝位置：室內導風或半戶外通風處；須保留進排風及維修空間",
      "尺寸：查不到",
      "重量：92 kg",
      "電壓／頻率：220V／60Hz（台灣代理規格，施工前再確認迴路）",
      "排氣／給排水：免燃燒排氣；需進排風、冷凝排水、冷熱水與洩壓排水",
      "安全裝置：壓縮機、過熱、漏電與洩壓保護",
      "溫控／操作：電子定溫與熱泵／輔助加熱模式",
      "安裝／加價：官方代理建議售價頁未清楚列出基本安裝範圍；須索取場勘明細"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Atlantic EXP 270\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Atlantic%20EXP%20270%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Atlantic EXP 270\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Atlantic%20EXP%20270%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Atlantic EXP 270\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Atlantic%20EXP%20270%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Atlantic EXP 270\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Atlantic%20EXP%20270%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Atlantic EXP 270\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Atlantic%20EXP%20270%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 84,
    "voltage": "220V／60Hz（台灣代理規格，施工前再確認迴路） 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Atlantic 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "熱泵熱水器",
      "Atlantic",
      "空氣源熱泵",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-atlantic-egeo-250",
    "category": "waterheater",
    "rank": 39,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "Atlantic",
    "model": "EGEO 250",
    "name": "Atlantic EGEO 250 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 145000,
      "converted": 145000,
      "confidence": "Atlantic 亞緹娜台灣官方代理頁 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "not_stated",
      "note": "官方代理建議售價頁未清楚列出基本安裝範圍；須索取場勘明細"
    },
    "image": "https://www.atlantic.tw/images/ATLANTIC%20PIC/EGEOIN.jpg",
    "buyUrl": "https://www.atlantic.tw/%E4%BA%9E%E7%B7%B9%E5%A8%9C%E5%85%A8%E8%87%AA%E5%8B%95%E7%86%B1%E6%B3%B5.html",
    "buyLabel": "Atlantic 亞緹娜台灣官方代理頁",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；250 L 儲槽",
      "熱水能力：250 L",
      "能效：熱泵運轉；COP 依台灣代理規格表",
      "安裝位置：室內導風或半戶外通風處；須保留進排風及維修空間",
      "尺寸：查不到",
      "重量：71 kg",
      "電壓／頻率：220V／60Hz（台灣代理規格，施工前再確認迴路）",
      "排氣／給排水：免燃燒排氣；需進排風、冷凝排水、冷熱水與洩壓排水",
      "安全裝置：壓縮機、過熱、漏電與洩壓保護",
      "溫控／操作：電子定溫與全自動熱泵運轉",
      "安裝／加價：官方代理建議售價頁未清楚列出基本安裝範圍；須索取場勘明細"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Atlantic EGEO 250\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Atlantic%20EGEO%20250%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Atlantic EGEO 250\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Atlantic%20EGEO%20250%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Atlantic EGEO 250\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Atlantic%20EGEO%20250%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Atlantic EGEO 250\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Atlantic%20EGEO%20250%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Atlantic EGEO 250\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Atlantic%20EGEO%20250%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 84,
    "voltage": "220V／60Hz（台灣代理規格，施工前再確認迴路） 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Atlantic 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "熱泵熱水器",
      "Atlantic",
      "空氣源熱泵",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-a-o-smith-cahp-1-5dt-80",
    "category": "waterheater",
    "rank": 40,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "A.O. Smith",
    "model": "CAHP-1.5DT-80",
    "name": "A.O. Smith CAHP-1.5DT-80 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 135300,
      "converted": 135300,
      "confidence": "A.O. Smith 台灣官網 2026-09-05 exact-model 公開售價",
      "basis": "retailer_current",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "公開價未含基本安裝；官網列基本安裝費 NT$8,300，吊運、基礎、配管配電另計"
    },
    "image": "https://img.yec.tw/zp/MerchandiseImages/88AEBD5AF9-SP-20236556.jpg",
    "buyUrl": "https://www.aosmith.com.tw/product/?id=8&mode=detail&top=12&type_id=3",
    "buyLabel": "A.O. Smith 台灣官方商城",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；80 加侖／約 300 L 儲槽",
      "熱水能力：80 加侖（約 300 L）",
      "能效：空氣源熱泵；效率依台灣官方規格",
      "安裝位置：屋外通風平整基礎；須保留維修及進排風空間",
      "尺寸：寬 68.6 x 深 91 x 高 170 cm",
      "重量：161 kg",
      "電壓／頻率：220V／60Hz 住宅配置（下單與施工前確認版本）",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與洩壓排水",
      "安全裝置：壓縮機、過熱、漏電與儲槽洩壓保護",
      "溫控／操作：電子恆溫與熱泵模式控制",
      "安裝／加價：公開價未含基本安裝；官網列基本安裝費 NT$8,300，吊運、基礎、配管配電另計"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"A.O. Smith CAHP-1.5DT-80\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22A.O.%20Smith%20CAHP-1.5DT-80%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"A.O. Smith CAHP-1.5DT-80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22A.O.%20Smith%20CAHP-1.5DT-80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"A.O. Smith CAHP-1.5DT-80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22A.O.%20Smith%20CAHP-1.5DT-80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"A.O. Smith CAHP-1.5DT-80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22A.O.%20Smith%20CAHP-1.5DT-80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"A.O. Smith CAHP-1.5DT-80\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22A.O.%20Smith%20CAHP-1.5DT-80%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 83,
    "voltage": "220V／60Hz 住宅配置（下單與施工前確認版本） 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "A.O. Smith 台灣公司貨；整機 3 年、內膽 5 年，施工範圍依官方條款",
    "tags": [
      "熱泵熱水器",
      "A.O. Smith",
      "空氣源熱泵",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-a-o-smith-cahp-1-5dt-120",
    "category": "waterheater",
    "rank": 41,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "A.O. Smith",
    "model": "CAHP-1.5DT-120",
    "name": "A.O. Smith CAHP-1.5DT-120 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 145300,
      "converted": 145300,
      "confidence": "A.O. Smith 台灣官網 2026-09-05 exact-model 公開售價",
      "basis": "retailer_current",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "公開價未含基本安裝；官網列基本安裝費 NT$8,300，吊運、基礎、配管配電另計"
    },
    "image": "https://img.yec.tw/zp/MerchandiseImages/D705377CA1-SP-20236626.jpg",
    "buyUrl": "https://www.aosmith.com.tw/product/?id=54&mode=detail&top=4&type_id=3",
    "buyLabel": "A.O. Smith 台灣官方商城",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；120 加侖／約 455 L 儲槽",
      "熱水能力：120 加侖（約 455 L）",
      "能效：空氣源熱泵；效率依台灣官方規格",
      "安裝位置：屋外通風平整基礎；須保留維修及進排風空間",
      "尺寸：寬 77 x 深 101.2 x 高 170 cm",
      "重量：194 kg",
      "電壓／頻率：220V／60Hz 住宅配置（下單與施工前確認版本）",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與洩壓排水",
      "安全裝置：壓縮機、過熱、漏電與儲槽洩壓保護",
      "溫控／操作：電子恆溫與熱泵模式控制",
      "安裝／加價：公開價未含基本安裝；官網列基本安裝費 NT$8,300，吊運、基礎、配管配電另計"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"A.O. Smith CAHP-1.5DT-120\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22A.O.%20Smith%20CAHP-1.5DT-120%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"A.O. Smith CAHP-1.5DT-120\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22A.O.%20Smith%20CAHP-1.5DT-120%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"A.O. Smith CAHP-1.5DT-120\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22A.O.%20Smith%20CAHP-1.5DT-120%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"A.O. Smith CAHP-1.5DT-120\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22A.O.%20Smith%20CAHP-1.5DT-120%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"A.O. Smith CAHP-1.5DT-120\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22A.O.%20Smith%20CAHP-1.5DT-120%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 83,
    "voltage": "220V／60Hz 住宅配置（下單與施工前確認版本） 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "A.O. Smith 台灣公司貨；整機 3 年、內膽 5 年，施工範圍依官方條款",
    "tags": [
      "熱泵熱水器",
      "A.O. Smith",
      "空氣源熱泵",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-suntech-hp-600",
    "category": "waterheater",
    "rank": 42,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "SUNTECH",
    "model": "HP-600",
    "name": "SUNTECH HP-600 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 59850,
      "converted": 59850,
      "confidence": "Yahoo 購物中心 exact-model 新品公開價 2026-08-14 exact-model 公開新品價",
      "basis": "retailer_current",
      "scope": "single_unit"
    },
    "installation": {
      "status": "included_basic",
      "note": "通路公開價標示含基本安裝；偏遠、樓層、吊掛、基礎與超額配管配電另計"
    },
    "image": "https://img.yec.tw/zp/MerchandiseImages/065612028A-SP-15288344.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/search/shopping/compare?enableDescription=1&productIds=10811863%2C10810847%2C10810848%2C10812025%2C10810316",
    "buyLabel": "Yahoo 購物中心 exact-model 新品公開價",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；150 L 儲槽；0.65 kW 額定輸入",
      "熱水能力：150 L；製熱量依官方規格",
      "能效：COP 3.7",
      "安裝位置：屋外通風平整處；須保留維修與進排風空間",
      "尺寸：寬 65 x 深 41 x 高 160 cm",
      "重量：75 kg",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與洩壓排水",
      "安全裝置：壓縮機、過熱、漏電、乾燒與洩壓保護",
      "溫控／操作：電子恆溫；一體式儲熱控制",
      "安裝／加價：通路公開價標示含基本安裝；偏遠、樓層、吊掛、基礎與超額配管配電另計"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SUNTECH HP-600\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SUNTECH%20HP-600%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SUNTECH HP-600\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SUNTECH%20HP-600%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SUNTECH HP-600\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SUNTECH%20HP-600%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SUNTECH HP-600\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SUNTECH%20HP-600%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SUNTECH HP-600\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SUNTECH%20HP-600%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 83,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "SUNTECH 台灣官方／公司貨保固；年限、到府範圍與施工責任依購買憑證及保證書",
    "tags": [
      "熱泵熱水器",
      "SUNTECH",
      "空氣源熱泵",
      "含基本安裝"
    ]
  },
  {
    "id": "waterheater-sakura-se8102",
    "category": "waterheater",
    "rank": 43,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "SAKURA",
    "model": "SE8102",
    "name": "SAKURA SE8102 循環一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 59500,
      "converted": 59500,
      "confidence": "SAKURA 台灣官方型錄 SE8102 exact-model 建議售價 2026-08-14 exact-model 建議售價／定價",
      "basis": "official_suggested",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "官方建議售價不含安裝、耗材、吊車與運送；全部施工項目須另行場勘報價"
    },
    "image": "https://www.sakura-kh.com/wp-content/uploads/2022/07/SE8102.png",
    "buyUrl": "https://www.sakura.com.tw/Uploads/Catalog/e3ebbf3b-39a4-4960-a8df-cd29c8913c0b/DM_2022_lifestore1.pdf#search=SE8102",
    "buyLabel": "SAKURA 台灣官方型錄 SE8102 exact-model 建議售價",
    "specs": [
      "類型：循環一體式空氣源熱泵熱水器",
      "能源／氣源：電力；R410A；內建 150 L 儲槽；4 kW 輔助電熱",
      "熱水能力：150 L；製熱能力 2.4 kW；製熱速度 60 L/h",
      "能效：COP 3.7；熱泵輸入 0.65 kW",
      "安裝位置：屋外或半戶外通風處；須保留進排風與維修空間",
      "尺寸：寬 65 x 深 41 x 高 160 cm",
      "重量：75±5 kg",
      "電壓／頻率：220V／單相／60Hz",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與洩壓排水",
      "安全裝置：微電腦控制、過熱、漏電、乾燒與儲槽洩壓保護",
      "溫控／操作：智慧微電腦定溫；熱泵與電熱最高水溫 55°C",
      "安裝／加價：官方建議售價不含安裝、耗材、吊車與運送；全部施工項目須另行場勘報價"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SAKURA SE8102\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SAKURA%20SE8102%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SAKURA SE8102\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SAKURA%20SE8102%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SAKURA SE8102\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SAKURA%20SE8102%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SAKURA SE8102\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SAKURA%20SE8102%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SAKURA SE8102\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SAKURA%20SE8102%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "220V／單相／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "SAKURA 台灣公司貨；現售通路標示 1 年保固，實際原廠服務範圍依保證書",
    "tags": [
      "熱泵熱水器",
      "SAKURA",
      "空氣源熱泵",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-dajinan-djnhp-200l",
    "category": "waterheater",
    "rank": 44,
    "budget": "mid",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "Dajinan 大金安",
    "model": "DJNHP-200L",
    "name": "Dajinan 大金安 DJNHP-200L 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 48200,
      "converted": 48200,
      "confidence": "Dajinan 大金安品牌直營 DJNHP-200L exact-model 新品公開價 2026-08-14 exact-model 公開新品價",
      "basis": "retailer_current",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "商品價含到府配送、不含安裝；標準安裝 NT$6,000，樓層、吊車與額外材料另計"
    },
    "image": "https://i1.momoshop.com.tw/1739941280/goodsimg/0009/903/017/9903017_R_m.webp",
    "buyUrl": "https://www.da-jinan.com/product/djnhp-200l/",
    "buyLabel": "Dajinan 大金安品牌直營 DJNHP-200L exact-model 新品公開價",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；R134a；內建 200 L 儲槽；2.5 kW 輔助電熱",
      "熱水能力：200 L；額定製熱能力 1.78 kW",
      "能效：額定輸入 0.42 kW；品牌頁標示省電 75%",
      "安裝位置：屋外通風平整承重處；須保留進排風與維修空間",
      "尺寸：寬 53.5 x 深 53.5 x 高 195.5 cm",
      "重量：114 kg",
      "電壓／頻率：220V／單相／60Hz",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與洩壓排水",
      "安全裝置：過熱、漏電與儲槽洩壓保護；須依手冊配置專用斷路器",
      "溫控／操作：機身觸控面板；熱泵、純電熱與混合動力模式",
      "安裝／加價：商品價含到府配送、不含安裝；標準安裝 NT$6,000，樓層、吊車與額外材料另計"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dajinan 大金安 DJNHP-200L\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dajinan%20%E5%A4%A7%E9%87%91%E5%AE%89%20DJNHP-200L%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dajinan 大金安 DJNHP-200L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dajinan%20%E5%A4%A7%E9%87%91%E5%AE%89%20DJNHP-200L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dajinan 大金安 DJNHP-200L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dajinan%20%E5%A4%A7%E9%87%91%E5%AE%89%20DJNHP-200L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dajinan 大金安 DJNHP-200L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dajinan%20%E5%A4%A7%E9%87%91%E5%AE%89%20DJNHP-200L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dajinan 大金安 DJNHP-200L\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dajinan%20%E5%A4%A7%E9%87%91%E5%AE%89%20DJNHP-200L%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "220V／單相／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "Dajinan 大金安台灣品牌直營；家用保固 2 年，地下水或不良水質不予保固",
    "tags": [
      "熱泵熱水器",
      "Dajinan 大金安",
      "空氣源熱泵",
      "施工另估"
    ]
  },
  {
    "id": "waterheater-a-o-smith-hpi-50d1-0bt",
    "category": "waterheater",
    "rank": 45,
    "budget": "premium",
    "channel": "tw",
    "type": "heat_pump",
    "brand": "A.O. Smith",
    "model": "HPI-50D1.0BT",
    "name": "A.O. Smith HPI-50D1.0BT 一體式空氣源熱泵熱水器",
    "price": {
      "currency": "TWD",
      "amount": 75000,
      "converted": 75000,
      "confidence": "Yahoo購物中心 2026-08-25 exact-model 公開結構化價格",
      "basis": "retailer_current",
      "scope": "single_unit"
    },
    "installation": {
      "status": "excluded",
      "note": "公開價未含基本安裝；官方基本安裝費 NT$5,800，吊運、樓層、基礎與超額配管配電另計"
    },
    "image": "https://img.yec.tw/zp/MerchandiseImages/52e71d80f9-Gd-10722181.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/gdsale.asp?gdid=10722181",
    "buyLabel": "Yahoo 購物中心 exact-model 新品公開價",
    "specs": [
      "類型：一體式空氣源熱泵熱水器",
      "能源／氣源：電力；50 加侖／190 L 儲槽；熱泵輸入 0.47 kW",
      "熱水能力：50 加侖（190 L）；製熱能力 1.9 kW；3 kW 速熱",
      "能效：COP 4.02；台灣節能標章機型",
      "安裝位置：室內或屋外平整承重處；須保留進排風與維修空間",
      "尺寸：寬 52 x 深 52 x 高 186 cm",
      "重量：92 kg",
      "電壓／頻率：220V／60Hz",
      "排氣／給排水：免燃燒排氣；需冷凝排水、冷熱水與洩壓排水",
      "安全裝置：壓縮機、過熱、漏電、乾燒與儲槽洩壓保護",
      "溫控／操作：35–75°C 電子定溫；節能／速熱與定時模式",
      "安裝／加價：公開價未含基本安裝；官方基本安裝費 NT$5,800，吊運、樓層、基礎與超額配管配電另計"
    ],
    "description": "台灣住宅空氣源熱泵熱水系統；效率高，但設備、儲水與施工空間須先場勘。 本表價格採公開新品價或 exact-model 官方建議售價，實際施工總價仍以現場報價為準。",
    "pros": [
      "以熱泵搬運熱能，長期用電效率通常優於純電熱",
      "具台灣公開售價、電力規格與在地保固資訊",
      "型號、容量與安裝條件分欄保留，方便詢價核對"
    ],
    "cons": [
      "初購與安裝成本高，低溫、通風及滿水承重需納入設計",
      "公開價未必包含全部管材、配線、鑽孔、樓層或吊運費",
      "尺寸或重量查不到的項目必須在下單前向原廠索取確認"
    ],
    "bestFor": "用水量較大、有屋外或半戶外空間且重視長期能耗的住宅",
    "recommendation": "選購重點：以熱泵搬運熱能，長期用電效率通常優於純電熱；仍要由合格技師完成場勘與施工。",
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
      "checkedAt": "2026-08-14",
      "note": "已實際查核 BigGo 與 FindPrice exact-model 價格頁；未取得可公開重現的同型號可信新品歷史最低價。排除會員券、點數、信用卡回饋、二手、福利品、展示、拆封、整新品、配件價與僅單一組件價。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"A.O. Smith HPI-50D1.0BT\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22A.O.%20Smith%20HPI-50D1.0BT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"A.O. Smith HPI-50D1.0BT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22A.O.%20Smith%20HPI-50D1.0BT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"A.O. Smith HPI-50D1.0BT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22A.O.%20Smith%20HPI-50D1.0BT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"A.O. Smith HPI-50D1.0BT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22A.O.%20Smith%20HPI-50D1.0BT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"A.O. Smith HPI-50D1.0BT\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22A.O.%20Smith%20HPI-50D1.0BT%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 82,
    "voltage": "220V／60Hz 台灣公司貨；須依原廠規範確認專用迴路、接地與斷路器",
    "warranty": "A.O. Smith 台灣公司貨；整機 2 年、內膽 5 年，施工範圍依官方條款",
    "tags": [
      "熱泵熱水器",
      "A.O. Smith",
      "空氣源熱泵",
      "施工另估"
    ]
  }
]);
})();
