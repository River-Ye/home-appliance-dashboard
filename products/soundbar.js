(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("soundbar", [
  {
    "id": "soundbar-samsung-q990f",
    "category": "soundbar",
    "rank": 1,
    "topPick": true,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-Q990F",
    "name": "11.1.4 聲道旗艦 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 44900,
      "converted": 44900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900JMDR5/000001_1773978957.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900JMDR5",
    "buyLabel": "PChome",
    "specs": [
      "11.1.4 聲道",
      "無線後環繞",
      "無線重低音",
      "Dolby Atmos / DTS:X"
    ],
    "description": "一次補齊天空聲道、後環繞與低頻，是最接近家庭劇院的一體式方案。",
    "pros": [
      "包圍感最完整",
      "Samsung TV 可用 Q-Symphony"
    ],
    "cons": [
      "價格高",
      "後環繞仍需擺位與電源"
    ],
    "bestFor": "客廳電影、遊戲與球賽沉浸感。",
    "recommendation": "綜合推薦：Q990F 評價強，含後環繞、重低音與 Atmos，折扣後雖高價但一次到位且售後穩。",
    "score": 95,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "Atmos",
      "後環繞",
      "旗艦"
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
      "checkedAt": "2026-07-09",
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-samsung-q800h",
    "category": "soundbar",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-Q800H/ZW",
    "name": "5.1.2 聲道 Q 系列 Soundbar 家庭劇院",
    "price": {
      "currency": "TWD",
      "amount": 35900,
      "converted": 35900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900K53X0/000001_1782210112.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900K53X0",
    "buyLabel": "PChome",
    "specs": [
      "5.1.2 聲道",
      "無線重低音",
      "Dolby Atmos",
      "Q-Symphony"
    ],
    "description": "改列正常新品頁的 Q 系列 5.1.2 聲道聲霸，適合想升級 Atmos 與重低音的客廳。",
    "pros": [
      "聲道規格比入門聲霸完整",
      "Samsung TV 搭配性好"
    ],
    "cons": [
      "沒有獨立後環繞喇叭",
      "沉浸感不如 Q990F"
    ],
    "bestFor": "想升級 Atmos 與重低音，但不需要完整後環繞的人。",
    "recommendation": "均衡推薦：比入門聲霸更完整，並採用正常新品購買頁。",
    "score": 91,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "Atmos",
      "均衡",
      "後環繞"
    ],
    "releaseDate": "2026",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-sony-b600",
    "category": "soundbar",
    "rank": 3,
    "budget": "value",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-B600",
    "name": "BRAVIA Theatre Bar 6 3.1.2 聲道",
    "price": {
      "currency": "TWD",
      "amount": 10700,
      "converted": 10700,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900JMC1Q/000001_1781726516.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900JMC1Q",
    "buyLabel": "PChome",
    "specs": [
      "3.1.2 聲道",
      "Dolby Atmos",
      "無線重低音",
      "BRAVIA 連動"
    ],
    "description": "預算友善且有獨立重低音，適合把電視內建聲音升級到清楚有力。",
    "pros": [
      "價格好入手",
      "對白與低頻改善明顯"
    ],
    "cons": [
      "非完整後環繞",
      "高度效果有限"
    ],
    "bestFor": "中小客廳與 Sony TV 用戶。",
    "recommendation": "CP 值推薦：萬元出頭補足對白與低頻最有感。",
    "score": 87,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "CP 值",
      "重低音",
      "對白"
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
      "checkedAt": "2026-07-09",
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-sonos-arc-ultra",
    "category": "soundbar",
    "rank": 4,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sonos",
    "model": "Arc Ultra",
    "name": "旗艦級無線智能聲霸",
    "price": {
      "currency": "TWD",
      "amount": 41900,
      "converted": 41900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAO6A900IE4HM/000001_1740554860.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAO6-A900IE4HM",
    "buyLabel": "PChome",
    "specs": [
      "單件式 Soundbar",
      "Dolby Atmos",
      "Wi-Fi 串流",
      "Sonos 生態系"
    ],
    "description": "音樂串流與多房間體驗強，外型俐落，適合不想擺重低音與後喇叭的人。",
    "pros": [
      "App 與串流體驗佳",
      "單件式好擺"
    ],
    "cons": [
      "完整低頻需另購 Sub",
      "總價容易拉高"
    ],
    "bestFor": "音樂、串流與簡潔客廳。",
    "recommendation": "若你重視質感與多房間音響，Sonos 比傳統劇院聲霸更順手。",
    "score": 89,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "單件式",
      "音樂",
      "Wi-Fi"
    ],
    "releaseDate": "2024-10-15",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-jbl-500mk2",
    "category": "soundbar",
    "rank": 5,
    "budget": "mid",
    "channel": "tw",
    "brand": "JBL",
    "model": "BAR 500 MK2",
    "name": "5.1 聲道 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 23560,
      "converted": 23560,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAHGA900JCY9J/000001_1760777146.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAHG-A900JCY9J",
    "buyLabel": "PChome",
    "specs": [
      "5.1 聲道",
      "無線重低音",
      "Dolby Atmos 模擬",
      "藍牙/Wi-Fi"
    ],
    "description": "JBL 低頻與電影感討喜，適合想要震撼感但不想上旗艦環繞的人。",
    "pros": [
      "低頻量感好",
      "電影與遊戲氣氛強"
    ],
    "cons": [
      "環繞定位不如後喇叭系統",
      "音樂細緻度非強項"
    ],
    "bestFor": "重視動作片、遊戲與低頻衝擊。",
    "recommendation": "中價位想要爽度，JBL 是很直接的選項。",
    "score": 86,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "低頻",
      "電影",
      "中價位"
    ],
    "releaseDate": "2023",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-6-dmaaod-a900k3qsm",
    "category": "soundbar",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-Q930H/ZW",
    "name": "Q 系列 9.1.4 聲道 Soundbar 家庭劇院",
    "price": {
      "currency": "TWD",
      "amount": 49900,
      "converted": 49900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900K3QSM/000001_1782969828.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900K3QSM",
    "buyLabel": "PChome",
    "specs": [
      "9.1.4 聲道",
      "Dolby Atmos",
      "後環繞喇叭",
      "Q 系列"
    ],
    "description": "Samsung HW-Q930H/ZW 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Atmos",
      "環繞",
      "旗艦"
    ],
    "releaseDate": "2026-04",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-7-dmaaod-a900jmdr4",
    "category": "soundbar",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-QS700F",
    "name": "3.1.2 聲道 Q 系列 Soundbar 聲霸",
    "price": {
      "currency": "TWD",
      "amount": 19900,
      "converted": 19900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900JMDR4/000001_1776914225.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900JMDR4",
    "buyLabel": "PChome",
    "specs": [
      "3.1.2 聲道",
      "Dolby Atmos",
      "Q 系列",
      "中階聲霸"
    ],
    "description": "Samsung HW-QS700F 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Atmos",
      "中階",
      "電視搭配"
    ],
    "releaseDate": "2025-01-15",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-8-dmbm1d-a900j5jaz",
    "category": "soundbar",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "S80TR",
    "name": "LG Soundbar S80TR 5.1.3 聲道立體環繞聲霸",
    "price": {
      "currency": "TWD",
      "amount": 19900,
      "converted": 19900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM1DA900J5JAZ/000001_1779262704.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM1D-A900J5JAZ",
    "buyLabel": "PChome",
    "specs": [
      "5.1.3 聲道",
      "Dolby Atmos",
      "立體環繞",
      "LG Soundbar"
    ],
    "description": "LG S80TR 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "LG",
      "環繞",
      "均衡"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-9-dpado2-a900k5vut",
    "category": "soundbar",
    "rank": 9,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-Q990H/ZW",
    "name": "Q 系列 11.1.4 聲道 Soundbar 家庭劇院",
    "price": {
      "currency": "TWD",
      "amount": 59900,
      "converted": 59900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADO2A900K5VUT/000001_1782993730.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADO2-A900K5VUT",
    "buyLabel": "PChome",
    "specs": [
      "11.1.4 聲道",
      "重低音",
      "後環繞",
      "Dolby Atmos"
    ],
    "description": "Samsung HW-Q990H/ZW 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Atmos",
      "旗艦",
      "劇院"
    ],
    "releaseDate": "2026",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-10-dmaaod-a900k5489",
    "category": "soundbar",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "HW-QS90H/ZW",
    "name": "Q 系列 7.1.2 聲道 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 36900,
      "converted": 36900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAODA900K5489/000001_1782988490.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAOD-A900K5489",
    "buyLabel": "PChome",
    "specs": [
      "7.1.2 聲道",
      "Q 系列",
      "Dolby Atmos",
      "重低音"
    ],
    "description": "Samsung HW-QS90H/ZW 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Atmos",
      "客廳",
      "均衡"
    ],
    "releaseDate": "2026-04-02",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-11-dmbm1d-a900ghtfe",
    "category": "soundbar",
    "rank": 11,
    "budget": "value",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-S40R",
    "name": "5.1 聲道 Soundbar 家庭劇院組",
    "price": {
      "currency": "TWD",
      "amount": 8490,
      "converted": 8490,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM1DA900GHTFE/000001_1776774078.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM1D-A900GHTFE",
    "buyLabel": "PChome",
    "specs": [
      "5.1 聲道",
      "後環繞",
      "重低音",
      "藍牙"
    ],
    "description": "Sony HT-S40R 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "CP 值",
      "入門劇院",
      "Sony"
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
      "checkedAt": "2026-07-09",
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-12-dmaamt-a900i5hho",
    "category": "soundbar",
    "rank": 12,
    "budget": "value",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-S100F",
    "name": "2.0 聲道單件式藍牙 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 7590,
      "converted": 7590,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAMTA900I5HHO/000001_1778661010.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAMT-A900I5HHO",
    "buyLabel": "PChome",
    "specs": [
      "2.0 聲道",
      "單件式",
      "藍牙",
      "小空間"
    ],
    "description": "Sony HT-S100F 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "小空間",
      "入門",
      "簡潔"
    ],
    "releaseDate": "2018-02-17",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-13-dmaahg-a900jcy2v",
    "category": "soundbar",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "JBL",
    "model": "BAR 300 MK2",
    "name": "BAR 300MK2 5.0 聲道 Soundbar",
    "price": {
      "currency": "TWD",
      "amount": 15010,
      "converted": 15010,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAHGA900JCY2V/000001_1760766812.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAHG-A900JCY2V",
    "buyLabel": "PChome",
    "specs": [
      "5.0 聲道",
      "Dolby Atmos",
      "單件式",
      "黑/白色"
    ],
    "description": "JBL BAR 300 MK2 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "JBL",
      "小客廳",
      "均衡"
    ],
    "releaseDate": "2026",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-14-dmaahg-a900j56ok",
    "category": "soundbar",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "JBL",
    "model": "BAR 800 MK2",
    "name": "7.1 聲道家庭劇院喇叭",
    "price": {
      "currency": "TWD",
      "amount": 32800,
      "converted": 32800,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAHGA900J56OK/000001_1755250707.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAHG-A900J56OK",
    "buyLabel": "PChome",
    "specs": [
      "7.1 聲道",
      "無線後環繞",
      "重低音",
      "家庭劇院"
    ],
    "description": "JBL BAR 800 MK2 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "JBL",
      "後環繞",
      "客廳"
    ],
    "releaseDate": "2022",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-15-dmaanj-a900hzbzv",
    "category": "soundbar",
    "rank": 15,
    "budget": "mid",
    "channel": "tw",
    "brand": "Bose",
    "model": "Smart Soundbar 600 Ultra",
    "name": "家庭娛樂揚聲器 600 Ultra",
    "price": {
      "currency": "TWD",
      "amount": 19900,
      "converted": 19900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAANJA900HZBZV/000001_1729154632.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAANJ-A900HZBZV",
    "buyLabel": "PChome",
    "specs": [
      "單件式聲霸",
      "智慧連線",
      "Bose 調音",
      "家庭娛樂"
    ],
    "description": "Bose Smart Soundbar 600 Ultra 是Soundbar類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "安裝門檻低",
      "可快速補強電視音場"
    ],
    "cons": [
      "後環繞與重低音占用插座",
      "小空間未必需要高聲道數"
    ],
    "bestFor": "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    "recommendation": "同類推薦：補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Bose",
      "音樂",
      "簡潔"
    ],
    "releaseDate": "2022-10-10",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-16-dmaalna900hp6mr",
    "category": "soundbar",
    "rank": 16,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "TAB4288",
    "name": "2.0 聲道無線藍牙聲霸",
    "price": {
      "currency": "TWD",
      "amount": 4990,
      "converted": 4990,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAALNA900HP6MR/000001_1722414518.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAALN-A900HP6MR",
    "buyLabel": "PChome",
    "specs": [
      "2.0 聲道",
      "藍牙",
      "無線聲霸",
      "入門"
    ],
    "description": "Philips TAB4288 補進本分類比較池，重點是2.0 聲道、藍牙、無線聲霸，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格低、比電視內建喇叭好",
      "安裝簡單"
    ],
    "cons": [
      "沒有獨立重低音",
      "環繞感有限"
    ],
    "bestFor": "想依預算補強電視音效，並比較入門、Atmos 與實體環繞的人。",
    "recommendation": "補充推薦：2.0 聲道無線藍牙聲霸 的優勢在價格低、比電視內建喇叭好，但仍建議把沒有獨立重低音納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "入門",
      "藍牙",
      "Philips"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-17-dmbm1da900hpuxn",
    "category": "soundbar",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-A8000",
    "name": "BRAVIA Theatre Bar 8 聲霸",
    "price": {
      "currency": "TWD",
      "amount": 22950,
      "converted": 22950,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM1DA900HTC64/000001_1781747501.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM1D-A900HTC64",
    "buyLabel": "PChome",
    "specs": [
      "11 單體",
      "Dolby Atmos",
      "空間音場",
      "Sony"
    ],
    "description": "Sony HT-A8000 補進本分類比較池，重點是11 單體、Dolby Atmos、空間音場，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "音場與人聲強化表現好",
      "適合 Sony 電視搭配"
    ],
    "cons": [
      "價格較高",
      "低頻可視需求加購重低音"
    ],
    "bestFor": "想依預算補強電視音效，並比較入門、Atmos 與實體環繞的人。",
    "recommendation": "補充推薦：BRAVIA Theatre Bar 8 聲霸 的優勢在音場與人聲強化表現好，但仍建議把價格較高納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Atmos",
      "Sony",
      "高階"
    ],
    "releaseDate": "2026",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-18-dmbm1da900iuzuj",
    "category": "soundbar",
    "rank": 18,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sony",
    "model": "HT-A9000",
    "name": "BRAVIA Theatre Bar 9 旗艦聲霸",
    "price": {
      "currency": "TWD",
      "amount": 38855,
      "converted": 38855,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM1DA900IUZUJ/000001_1781790756.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM1D-A900IUZUJ",
    "buyLabel": "PChome",
    "specs": [
      "13 單體",
      "360 空間音場",
      "Dolby Atmos",
      "旗艦"
    ],
    "description": "Sony HT-A9000 補進本分類比較池，重點是13 單體、360 空間音場、Dolby Atmos，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "Sony 旗艦單件式聲霸",
      "電影沉浸感強"
    ],
    "cons": [
      "價格高",
      "完整環繞仍需後環繞/重低音"
    ],
    "bestFor": "想依預算補強電視音效，並比較入門、Atmos 與實體環繞的人。",
    "recommendation": "補充推薦：BRAVIA Theatre Bar 9 旗艦聲霸 的優勢在Sony 旗艦單件式聲霸，但仍建議把價格高納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "旗艦",
      "Atmos",
      "Sony"
    ],
    "releaseDate": "2024-04-17",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-19-dmaahga900j5777",
    "category": "soundbar",
    "rank": 19,
    "budget": "premium",
    "channel": "tw",
    "brand": "JBL",
    "model": "BAR 1000 MK2",
    "name": "7.1.4 聲道家庭劇院聲霸",
    "price": {
      "currency": "TWD",
      "amount": 42900,
      "converted": 42900,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAHGA900J5777/000001_1755253698.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAHG-A900J5777",
    "buyLabel": "PChome",
    "specs": [
      "7.1.4 聲道",
      "可拆式無線喇叭",
      "10 吋重低音",
      "Dolby Atmos"
    ],
    "description": "JBL BAR 1000 MK2 補進本分類比較池，重點是7.1.4 聲道、可拆式無線喇叭、10 吋重低音，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "實體後環繞彈性高",
      "低頻與環繞感完整"
    ],
    "cons": [
      "價格與空間需求較高",
      "後喇叭充電/擺放要規劃"
    ],
    "bestFor": "想依預算補強電視音效，並比較入門、Atmos 與實體環繞的人。",
    "recommendation": "補充推薦：7.1.4 聲道家庭劇院聲霸 的優勢在實體後環繞彈性高，但仍建議把價格與空間需求較高納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "7.1.4",
      "可拆環繞",
      "重低音"
    ],
    "releaseDate": "2025-06-12",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-extra-20-dmaf02a900h2g5r",
    "category": "soundbar",
    "rank": 20,
    "budget": "premium",
    "channel": "tw",
    "brand": "Philips",
    "model": "TAFB1/96",
    "name": "Fidelio 7.1.2 Dolby Atmos 旗艦聲霸",
    "price": {
      "currency": "TWD",
      "amount": 38900,
      "converted": 38900,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAF02A900H2G5R/000001_1704612188.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAF02-A900H2G5R",
    "buyLabel": "PChome",
    "specs": [
      "7.1.2 聲道",
      "Dolby Atmos",
      "IMAX Enhanced",
      "無線重低音"
    ],
    "description": "Philips TAFB1/96 補進本分類比較池，重點是7.1.2 聲道、Dolby Atmos、IMAX Enhanced，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "規格完整、價格低於部分旗艦",
      "重低音與聲道數一次到位"
    ],
    "cons": [
      "Philips 高階聲霸討論度較少",
      "尺寸與擺位需確認"
    ],
    "bestFor": "想依預算補強電視音效，並比較入門、Atmos 與實體環繞的人。",
    "recommendation": "補充推薦：Fidelio 7.1.2 Dolby Atmos 旗艦聲霸 的優勢在規格完整、價格低於部分旗艦，但仍建議把Philips 高階聲霸討論度較少納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Fidelio",
      "Atmos",
      "旗艦"
    ],
    "releaseDate": "2022",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-marshall-heston-120",
    "category": "soundbar",
    "rank": 21,
    "budget": "premium",
    "channel": "global",
    "brand": "Marshall",
    "model": "Heston 120",
    "name": "5.1.2 聲道 Dolby Atmos Soundbar",
    "price": {
      "currency": "USD",
      "amount": 1000,
      "converted": 32128,
      "confidence": "WIRED 2025 發表價約 USD 1,000，依 2026-07-08 匯率換算"
    },
    "image": "https://images.ctfassets.net/javen7msabdh/2C2sn9CKoKFdIyd94Gm9z5/f3019d4e721511167ebe5c229bf490dd/heston-120_plp.jpg",
    "buyUrl": "https://www.marshall.com/us/en/product/heston-120",
    "buyLabel": "Marshall US",
    "specs": [
      "5.1.2 聲道",
      "Dolby Atmos / DTS:X",
      "HDMI eARC / HDMI IN 4K 120Hz passthrough",
      "Wi-Fi 6 / Bluetooth 5.3 / AirPlay 2 / Google Cast",
      "可搭配主動式重低音或 Heston Sub 200"
    ],
    "description": "Marshall 首款旗艦 Soundbar，走單件式高質感設計，適合作為 Sonos、Bose 與高階 Samsung 聲霸的海外參考。",
    "pros": [
      "5.1.2 聲道與雙後置低音單體規格完整",
      "外觀辨識度高，音樂串流支援完整"
    ],
    "cons": [
      "海外參考價未含國際運費與進口稅",
      "台灣保固、庫存與售後需購買前另行確認"
    ],
    "bestFor": "重視外觀、音樂播放與單件式 Atmos 聲霸，且願意自行評估海外採購風險的人。",
    "recommendation": "海外參考：Heston 120 適合拿來和 Sonos Arc Ultra、Bose、Samsung 旗艦聲霸比較；規格漂亮但需把運費、稅金與台灣保固風險算進總成本。",
    "score": 84,
    "voltage": "海外版本，購買前確認 110V/插頭與變壓器需求",
    "warranty": "Marshall US / 海外通路，可能無台灣保固",
    "tags": [
      "Marshall",
      "Atmos",
      "DTS:X",
      "海外參考"
    ],
    "releaseDate": "2025-06-03",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "USD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-marshall-heston-60",
    "category": "soundbar",
    "rank": 22,
    "budget": "mid",
    "channel": "global",
    "brand": "Marshall",
    "model": "Heston 60",
    "name": "5.1 聲道 Dolby Atmos 緊湊型 Soundbar",
    "price": {
      "currency": "USD",
      "amount": 699.99,
      "converted": 22489,
      "confidence": "Marshall US 2026-07-09 查核價；官方頁顯示 Out of stock，依 2026-07-08 匯率換算"
    },
    "image": "https://images.ctfassets.net/javen7msabdh/3yitHqjPBTgQk5qRE72PSn/2788206646aa153f71f2c0ebefaff580/Heston-60-black_plp_800x800-v3.jpeg",
    "buyUrl": "https://www.marshall.com/us/en/product/heston-60",
    "buyLabel": "Marshall US",
    "specs": [
      "5.1 聲道",
      "Dolby Atmos / DTS:X",
      "HDMI eARC / AUX 3.5mm / RCA Mono Sub Out / USB-C",
      "Wi-Fi 6 / Bluetooth 5.3 / AirPlay 2 / Google Cast",
      "可加購 Heston Sub 200 補強低頻"
    ],
    "description": "Marshall Heston 60 是較小空間取向的 Atmos 聲霸，適合和 Sonos Beam、Bose Smart Soundbar 等單件式機型比較。",
    "pros": [
      "尺寸較短，桌面與壁掛彈性高",
      "支援 DTS:X 與主流 Wi-Fi 串流"
    ],
    "cons": [
      "官方頁查核時顯示缺貨",
      "若要更強低頻需另購 Heston Sub 200"
    ],
    "bestFor": "想在小客廳、臥室或書房比較有設計感的 Atmos 聲霸，但可接受海外庫存與保固不確定性的人。",
    "recommendation": "海外參考：Heston 60 是 Marshall 較好入手的緊湊型聲霸，聲道與串流規格完整；但缺貨、運費稅金與台灣保固需先確認。",
    "score": 83,
    "voltage": "海外版本，購買前確認 110V/插頭與變壓器需求",
    "warranty": "Marshall US / 海外通路，官方頁查核時顯示缺貨且可能無台灣保固",
    "tags": [
      "Marshall",
      "Atmos",
      "DTS:X",
      "小空間",
      "海外參考"
    ],
    "releaseDate": "2025-09-23",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "USD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-costco-denon-dht-s517",
    "category": "soundbar",
    "rank": 23,
    "budget": "mid",
    "channel": "tw",
    "brand": "Denon",
    "model": "DHT-S517",
    "name": "3.1.2 聲道 Dolby Atmos Soundbar 重低音組合",
    "price": {
      "currency": "TWD",
      "amount": 14999,
      "converted": 14999,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h6e/ha2/204392565112862.webp",
    "buyUrl": "https://www.costco.com.tw/p/144030",
    "buyLabel": "Costco 好市多",
    "specs": [
      "3.1.2 聲道",
      "Dolby Atmos",
      "無線重低音",
      "Costco 評價 4.6 / 52 則"
    ],
    "description": "Denon DHT-S517 是 Costco 評價穩定的 Atmos 聲霸，保留獨立重低音又不需要後環繞喇叭。",
    "pros": [
      "Atmos 與重低音配置完整",
      "Costco 評價 4.6 且評論數足夠"
    ],
    "cons": [
      "不是完整後環繞系統",
      "低頻與擺位仍需依客廳調整"
    ],
    "bestFor": "想用 Costco 通路升級電視音效、但不想擺後喇叭的人。",
    "recommendation": "好市多補充推薦：DHT-S517 比入門聲霸更有沉浸感，價格也比旗艦套組低很多。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "Atmos",
      "重低音"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-costco-philips-tab6309",
    "category": "soundbar",
    "rank": 24,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "TAB6309",
    "name": "2.1 聲道無線重低音 Dolby Atmos 聲霸",
    "price": {
      "currency": "TWD",
      "amount": 7599,
      "converted": 7599,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h84/h32/278946106834974.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Soundbars-Home-Theater/Philips-21-CH-Soundbar-TAB6309/p/147918",
    "buyLabel": "Costco 好市多",
    "specs": [
      "2.1 聲道",
      "無線重低音",
      "Dolby Atmos",
      "主機 30W / 重低音 40W",
      "Costco 評價 4.6 / 48 則"
    ],
    "description": "Costco 評價不錯的聲霸候選，補進聲音升級比較池。",
    "pros": [
      "評價穩定且通路清楚",
      "可補強電視內建喇叭"
    ],
    "cons": [
      "聲道與低頻能力仍需依空間比較",
      "不一定能取代完整家庭劇院"
    ],
    "bestFor": "想在好市多購買聲霸或小型劇院升級的人",
    "recommendation": "好市多補充推薦：2.1 聲道無線重低音 Dolby Atmos 聲霸 評價不錯，補進Soundbar分類作為 Costco 候選比較。",
    "score": 87,
    "voltage": "100-240V AC 50/60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "Soundbar",
      "Atmos",
      "重低音"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  },
  {
    "id": "soundbar-costco-soodatek-ss0220",
    "category": "soundbar",
    "rank": 25,
    "budget": "value",
    "channel": "tw",
    "brand": "Soodatek",
    "model": "SS0220-CS2000PBK",
    "name": "2.0 聲道二合一分離式聲霸",
    "price": {
      "currency": "TWD",
      "amount": 599,
      "converted": 599,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h21/hac/367883491278878.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Soundbars-Home-Theater/Soodatek-20Ch-2-in-1-Detachable-Soundbar/p/154302",
    "buyLabel": "Costco 好市多",
    "specs": [
      "2.0 聲道",
      "二合一分離式設計",
      "重量：680公克",
      "Costco 稀少分類例外候選",
      "Costco 評價 4.6 / 14 則"
    ],
    "description": "Costco 評價不錯的聲霸候選，補進聲音升級比較池。",
    "pros": [
      "評價穩定且通路清楚",
      "可補強電視內建喇叭"
    ],
    "cons": [
      "聲道與低頻能力仍需依空間比較",
      "不一定能取代完整家庭劇院"
    ],
    "bestFor": "想在好市多購買聲霸或小型劇院升級的人",
    "recommendation": "好市多補充推薦：2.0 聲道二合一分離式聲霸 評價不錯，補進Soundbar分類作為 Costco 候選比較。",
    "score": 81,
    "voltage": "通路頁未標示；購買前確認電源規格",
    "warranty": "依 Costco 好市多商品頁與品牌 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "平價",
      "2.0聲道",
      "小空間"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  }
]);
})();
