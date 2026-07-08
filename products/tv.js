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
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADYE1900JG394/000001_1762971547.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADYE-1900JG394",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED evo",
      "4K 120Hz",
      "webOS",
      "HDMI 2.1 / VRR"
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
    ]
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
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADEW1900K4WRT/000001_1782056882.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADEW-1900K4WRT",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "4K 144Hz",
      "Tizen",
      "四組 HDMI 2.1"
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
    ]
  },
  {
    "id": "tv-sony-bravia7-65",
    "category": "tv",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sony",
    "model": "Y-65XR70",
    "name": "BRAVIA 7 65 型 Mini LED 4K Google TV + 2.1 聲霸組合",
    "price": {
      "currency": "TWD",
      "amount": 56900,
      "converted": 56900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD061900IUE3W/000001_1779815988.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD06-1900IUE3W",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "XR 處理器",
      "Google TV",
      "含 2.1 聲霸組合"
    ],
    "description": "Sony 影像處理與動態補償穩定，這筆採 PChome 同型號搭 2.1 聲霸的組合低價。",
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
      "組合價"
    ]
  },
  {
    "id": "tv-hisense-u7n-65",
    "category": "tv",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "Hisense",
    "model": "65U7N",
    "name": "65 型 U7 Mini LED ULED 4K Google TV",
    "price": {
      "currency": "TWD",
      "amount": 31999,
      "converted": 31999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD98A900I5166/000001_1733391621.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD98-A900I5166",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K 144Hz",
      "Google TV",
      "雙杜比"
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
    ]
  },
  {
    "id": "tv-benq-e65-760",
    "category": "tv",
    "rank": 5,
    "budget": "value",
    "channel": "tw",
    "brand": "BenQ",
    "model": "E65-760",
    "name": "65 型 4K 120Hz 量子點護眼 Google TV",
    "price": {
      "currency": "TWD",
      "amount": 24900,
      "converted": 24900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD0O1900IEK5W/000001_1761401167.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD0O-1900IEK5W",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 QLED",
      "4K 120Hz DLG",
      "Google TV",
      "護眼模式"
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
    ]
  },
  {
    "id": "tv-extra-6-dpad06-a900hlbjo",
    "category": "tv",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sony",
    "model": "Y-65XR80",
    "name": "BRAVIA 8 65 型 XR OLED 4K HDR Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 93900,
      "converted": 93900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD06A900HLBJO/000001_1776334113.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD06-A900HLBJO",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "4K HDR Google TV",
      "XR 影像處理",
      "高階 OLED"
    ],
    "description": "Sony Y-65XR80 是電視類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  },
  {
    "id": "tv-extra-7-dpadye-1900jgoya",
    "category": "tv",
    "rank": 7,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "OLED65G5PTA",
    "name": "65 型 OLED evo G5 零間隙藝廊系列 4K 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 71910,
      "converted": 71910,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADYE1900JGOYA/000001_1778348657.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADYE-1900JGOYA",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED evo",
      "4K 120Hz",
      "零間隙藝廊設計",
      "AI 物聯網智慧顯示器"
    ],
    "description": "LG OLED65G5PTA 是電視類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  },
  {
    "id": "tv-extra-8-dpad09-a900j9faz",
    "category": "tv",
    "rank": 8,
    "budget": "premium",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "TV-65Z90BGT",
    "name": "65 型 OLED 智慧聯網顯示器",
    "price": {
      "currency": "TWD",
      "amount": 72072,
      "converted": 72072,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD09A900J9FAZ/000001_1761888394.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD09-A900J9FAZ",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "智慧聯網",
      "4K",
      "日本品牌調校"
    ],
    "description": "Panasonic TV-65Z90BGT 是電視類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  },
  {
    "id": "tv-extra-9-dpadik-a900hjgf2",
    "category": "tv",
    "rank": 9,
    "budget": "premium",
    "channel": "tw",
    "brand": "Philips",
    "model": "65OLED809",
    "name": "65 型 4K 144Hz VRR OLED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 79900,
      "converted": 79900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADIKA900HJGF2/000001_1782900149.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADIK-A900HJGF2",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "4K 144Hz",
      "VRR",
      "Google TV"
    ],
    "description": "Philips 65OLED809 是電視類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  },
  {
    "id": "tv-extra-10-dmbm10-a900ixjzg",
    "category": "tv",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "QA65S95FAXXZW",
    "name": "65 型 OLED 4K Vision AI 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 94900,
      "converted": 94900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM10A900IXJZG/000001_1772871053.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM10-A900IXJZG",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "Vision AI",
      "4K",
      "高階 S95F 系列"
    ],
    "description": "Samsung QA65S95FAXXZW 是電視類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  },
  {
    "id": "tv-extra-11-dpadzm-a900k3904",
    "category": "tv",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "brand": "TCL",
    "model": "65C8L",
    "name": "65 型 4K SQD-Mini LED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 56990,
      "converted": 56990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADZMA900K3904/000001_1780907613.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADZM-A900K3904",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K",
      "Google TV",
      "量子點背光"
    ],
    "description": "TCL 65C8L 是電視類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  },
  {
    "id": "tv-extra-12-dpadzm-a900k2rgj",
    "category": "tv",
    "rank": 12,
    "budget": "value",
    "channel": "tw",
    "brand": "TCL",
    "model": "65A400M",
    "name": "65 型 4K QD-Mini LED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 30990,
      "converted": 30990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADZMA900K2RGJ/000001_1780552782.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADZM-A900K2RGJ",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 QD-Mini LED",
      "4K",
      "Google TV",
      "中階價格帶"
    ],
    "description": "TCL 65A400M 是電視類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  },
  {
    "id": "tv-extra-13-dpadbu-1900jc97w",
    "category": "tv",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "S Pro Mini 65 2026",
    "name": "65 型 4K Mini LED 144Hz Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 26999,
      "converted": 26999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADBU1900JC97W/000001_1761379704.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADBU-1900JC97W",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K 144Hz",
      "Google TV",
      "智慧聯網"
    ],
    "description": "Xiaomi S Pro Mini 65 2026 是電視類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  },
  {
    "id": "tv-extra-14-dpadew-1900jpy1s",
    "category": "tv",
    "rank": 14,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "QA65QN900FXXZW",
    "name": "65 型 8K Neo QLED 165Hz Mini LED AI 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 89910,
      "converted": 89910,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADEW1900JPY1S/000001_1770558909.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADEW-1900JPY1S",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 8K Neo QLED",
      "Mini LED",
      "165Hz",
      "AI 智慧顯示器"
    ],
    "description": "Samsung QA65QN900FXXZW 是電視類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  },
  {
    "id": "tv-extra-15-dpad0o-1900jl0z8",
    "category": "tv",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "BenQ",
    "model": "J65-770",
    "name": "65 型 4K 144Hz Mini LED 量子點遊戲 Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 32899,
      "converted": 32899,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD0O1900JL0Z8/000001_1766513999.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD0O-1900JL0Z8",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K 144Hz",
      "Google TV",
      "內建重低音"
    ],
    "description": "BenQ J65-770 是電視類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  }
]);
})();
