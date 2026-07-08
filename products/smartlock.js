(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("smartlock", [
  {
    "id": "smartlock-yale-ymf40a",
    "category": "smartlock",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Yale",
    "model": "YMF-40A",
    "name": "YMF-40A 四合一電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 17999,
      "converted": 17999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900IAG1Z/000001_1754276294.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900IAG1Z",
    "buyLabel": "PChome",
    "specs": [
      "指紋/密碼/藍牙/Wi-Fi",
      "機械鑰匙",
      "含基本安裝",
      "Yale 台灣通路"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Yale 鎖具品牌與售後通路成熟",
      "功能完整但價格仍在中階"
    ],
    "cons": [
      "非人臉/掌靜脈高階款",
      "需確認門厚與天地栓"
    ],
    "bestFor": "多數家庭第一次裝主門電子鎖，想要品牌、功能、售後都穩。",
    "recommendation": "綜合推薦：Yale 品牌口碑與台灣售後較安心，四合一功能加含基本安裝，價格落點比高階人臉款更有 CP。",
    "score": 94,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "綜合推薦",
      "指紋",
      "含安裝"
    ]
  },
  {
    "id": "smartlock-yale-ymf30a",
    "category": "smartlock",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "Yale",
    "model": "YMF-30A",
    "name": "YMF-30A 四合一電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 16149,
      "converted": 16149,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900I5HGS/000001_1733814561.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900I5HGS",
    "buyLabel": "PChome",
    "specs": [
      "密碼/卡片",
      "機械鑰匙",
      "含基本安裝",
      "手把式"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Yale 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "偏好 Yale、但想比 YMF-40A 再省一點預算的家庭。",
    "recommendation": "Yale 入門主鎖：品牌與安裝支援清楚，適合不追求人臉辨識的使用者。",
    "score": 90,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "Yale",
      "中階",
      "含安裝"
    ]
  },
  {
    "id": "smartlock-yale-byyou-pro-apple",
    "category": "smartlock",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Yale",
    "model": "ByYou Pro Apple",
    "name": "ByYou Pro Apple 認證智能電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 25399,
      "converted": 25399,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS40A900ITUBT/000001_1747374050.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS40-A900ITUBT",
    "buyLabel": "PChome",
    "specs": [
      "指紋/卡片/密碼",
      "Apple 認證解鎖",
      "藍牙/Wi-Fi",
      "含安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Apple 生態整合是少見亮點",
      "Yale 售後與品牌信任感高"
    ],
    "cons": [
      "價格高於一般四合一款",
      "Apple 功能需求不高者 CP 較低"
    ],
    "bestFor": "iPhone/Apple Watch 使用者，想把門鎖整合進 Apple 生態。",
    "recommendation": "Apple 生態推薦：預算較高但使用體驗完整，適合全家都用 Apple 裝置。",
    "score": 91,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "Apple",
      "Yale",
      "指紋"
    ]
  },
  {
    "id": "smartlock-yale-luna-pro-plus",
    "category": "smartlock",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "Yale",
    "model": "Luna Pro+",
    "name": "Luna Pro+ 六合一電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 23750,
      "converted": 23750,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900K6BSE/000001_1782972514.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900K6BSE",
    "buyLabel": "PChome",
    "specs": [
      "人臉/指紋/卡片/密碼",
      "機械鑰匙",
      "藍牙",
      "含基本安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "人臉辨識與推拉式使用方便",
      "Yale 高階線功能完整"
    ],
    "cons": [
      "價格接近旗艦區",
      "庫存量較少需下單前確認"
    ],
    "bestFor": "想要人臉辨識與 Yale 售後的主門升級。",
    "recommendation": "Yale 高階推薦：功能比 YMF 系列更完整，但 CP 值不如 YMF-40A。",
    "score": 89,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "人臉",
      "高階",
      "Yale"
    ]
  },
  {
    "id": "smartlock-yale-ydm7216a",
    "category": "smartlock",
    "rank": 5,
    "budget": "mid",
    "channel": "tw",
    "brand": "Yale",
    "model": "YDM-7216A",
    "name": "YDM-7216A 五合一電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 18049,
      "converted": 18049,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900I5H7X/000001_1733811821.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900I5H7X",
    "buyLabel": "PChome",
    "specs": [
      "指紋/密碼/卡片",
      "藍牙/Wi-Fi",
      "機械鑰匙",
      "含基本安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Yale 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想要 Yale 傳統把手式、指紋與遠端功能都保留的人。",
    "recommendation": "Yale 均衡款：規格比入門款完整，價格仍低於高階人臉款。",
    "score": 88,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "五合一",
      "Yale",
      "均衡"
    ]
  },
  {
    "id": "smartlock-yale-ydr343a",
    "category": "smartlock",
    "rank": 6,
    "budget": "value",
    "channel": "tw",
    "brand": "Yale",
    "model": "YDR-343A",
    "name": "YDR-343A 電子輔助鎖",
    "price": {
      "currency": "TWD",
      "amount": 7999,
      "converted": 7999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900IAG3B/000001_1754286009.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900IAG3B",
    "buyLabel": "PChome",
    "specs": [
      "密碼/卡片",
      "藍牙/Wi-Fi",
      "輔助鎖",
      "含基本安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Yale 入門價最親民",
      "適合補強既有門鎖"
    ],
    "cons": [
      "輔助鎖功能不如主鎖完整",
      "無指紋與人臉辨識"
    ],
    "bestFor": "想低成本導入電子鎖、保留原本主鎖的人。",
    "recommendation": "Yale 低預算推薦：價格漂亮，但定位是輔助鎖，安全與便利性不能和主鎖直接比較。",
    "score": 82,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "輔助鎖",
      "低預算",
      "Yale"
    ]
  },
  {
    "id": "smartlock-philips-7300",
    "category": "smartlock",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "7300",
    "name": "7300 五合一把手式電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 16000,
      "converted": 16000,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900I7LS6/000001_1768190214.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900I7LS6",
    "buyLabel": "PChome",
    "specs": [
      "指紋/卡片/密碼",
      "機械鑰匙",
      "藍牙或 Wi-Fi",
      "含安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Philips 品牌辨識度高",
      "五合一功能價格合理"
    ],
    "cons": [
      "售後依代理/安裝商體系",
      "非推拉式旗艦"
    ],
    "bestFor": "想買大品牌、預算在一萬多的家庭主門。",
    "recommendation": "Philips CP 款：品牌、功能與價格平衡，適合不需要貓眼或人臉的使用者。",
    "score": 90,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "Philips",
      "指紋",
      "五合一"
    ]
  },
  {
    "id": "smartlock-philips-ddl610",
    "category": "smartlock",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "DDL610",
    "name": "DDL610 防潑水五合一電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 18700,
      "converted": 18700,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900JPZMY/000001_1770615435.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900JPZMY",
    "buyLabel": "PChome",
    "specs": [
      "指紋/卡片/密碼",
      "機械鑰匙",
      "Wi-Fi",
      "防潑水"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Philips 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "門口較可能接觸濕氣，仍希望選 Philips 的家庭。",
    "recommendation": "防潑水取向：比 7300 貴一些，換來更明確的戶外門口使用彈性。",
    "score": 88,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "Philips",
      "防潑水",
      "五合一"
    ]
  },
  {
    "id": "smartlock-philips-alpha-vp",
    "category": "smartlock",
    "rank": 9,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "ALPHA VP",
    "name": "ALPHA VP 貓眼推拉電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 23500,
      "converted": 23500,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900I7PXH/000001_1782804290.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900I7PXH",
    "buyLabel": "PChome",
    "specs": [
      "貓眼/指紋/卡片/密碼",
      "機械鑰匙",
      "Wi-Fi",
      "推拉式"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Philips 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想在電子鎖上同時整合可視門鈴/貓眼功能的人。",
    "recommendation": "Philips 進階款：貓眼與推拉式便利性好，價格仍低於人臉旗艦。",
    "score": 89,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "貓眼",
      "推拉式",
      "Philips"
    ]
  },
  {
    "id": "smartlock-philips-702fvp",
    "category": "smartlock",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "Philips",
    "model": "702 FVP",
    "name": "702 FVP 人臉貓眼智能門鎖",
    "price": {
      "currency": "TWD",
      "amount": 25000,
      "converted": 25000,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900IZX3T/000001_1782804390.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900IZX3T",
    "buyLabel": "PChome",
    "specs": [
      "人臉/指紋/卡片/密碼",
      "貓眼",
      "Wi-Fi",
      "含安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Philips 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想要人臉、貓眼與聯網功能都到位的 Philips 使用者。",
    "recommendation": "Philips 旗艦入門：人臉和貓眼一次到位，價格比 709-FVP 低。",
    "score": 88,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "人臉",
      "貓眼",
      "旗艦"
    ]
  },
  {
    "id": "smartlock-philips-709fvp",
    "category": "smartlock",
    "rank": 11,
    "budget": "premium",
    "channel": "tw",
    "brand": "Philips",
    "model": "709-FVP",
    "name": "709-FVP 人臉貓眼七合一電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 32500,
      "converted": 32500,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900I7PXE/000001_1779064763.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900I7PXE",
    "buyLabel": "PChome",
    "specs": [
      "人臉/貓眼/指紋",
      "卡片/密碼/鑰匙",
      "Wi-Fi",
      "七合一"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Philips 高階功能最完整",
      "人臉與貓眼適合高頻出入家庭"
    ],
    "cons": [
      "價格高",
      "功能多也更依賴安裝與設定品質"
    ],
    "bestFor": "想要 Philips 旗艦規格、預算較高的家庭。",
    "recommendation": "Philips 高階款：功能滿，但若重視 CP，可先看 7300 或 ALPHA VP。",
    "score": 86,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "七合一",
      "人臉",
      "高階"
    ]
  },
  {
    "id": "smartlock-philips-ddl801",
    "category": "smartlock",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "DDL801",
    "name": "EASYKEY DDL801 推拉式智能門鎖",
    "price": {
      "currency": "TWD",
      "amount": 22950,
      "converted": 22950,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900JBQF3/000001_1782804231.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900JBQF3",
    "buyLabel": "PChome",
    "specs": [
      "指紋/卡片/密碼",
      "機械鑰匙",
      "Wi-Fi",
      "推拉式"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Philips 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想要推拉式手感，但不一定需要人臉辨識的人。",
    "recommendation": "Philips 推拉式均衡款：外型與功能比把手式完整，價格仍可控。",
    "score": 87,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "推拉式",
      "Philips",
      "Wi-Fi"
    ]
  },
  {
    "id": "smartlock-kaadas-q3",
    "category": "smartlock",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "brand": "Kaadas",
    "model": "Q3",
    "name": "Q3 指紋感應推拉式智能電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 9900,
      "converted": 9900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900K1RGN/000001_1779784957.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900K1RGN",
    "buyLabel": "PChome",
    "specs": [
      "指紋/密碼/卡片",
      "機械鑰匙",
      "推拉式",
      "送安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "推拉式價格很有競爭力",
      "功能比同價位入門款完整"
    ],
    "cons": [
      "品牌售後能見度低於 Yale/Philips",
      "非人臉/貓眼款"
    ],
    "bestFor": "預算一萬元上下，但想要推拉式與指紋功能。",
    "recommendation": "萬元推拉式 CP 推薦：功能和價格很漂亮，品牌售後需再確認安裝商。",
    "score": 89,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "CP 值",
      "推拉式",
      "指紋"
    ]
  },
  {
    "id": "smartlock-kaadas-q9-fvp",
    "category": "smartlock",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "Kaadas",
    "model": "Q9-FVP",
    "name": "Q9-FVP 人臉辨識推拉式智能電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 16900,
      "converted": 16900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900JA8W9/000001_1758855158.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900JA8W9",
    "buyLabel": "PChome",
    "specs": [
      "人臉/指紋/指靜脈",
      "密碼/卡片/鑰匙",
      "推拉式",
      "送安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Kaadas 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想用較低價格取得人臉與指靜脈功能的人。",
    "recommendation": "功能堆料推薦：人臉、指靜脈、推拉式一次給滿，售後確認後很有吸引力。",
    "score": 88,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "人臉",
      "指靜脈",
      "高 CP"
    ]
  },
  {
    "id": "smartlock-kaadas-m7w",
    "category": "smartlock",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "Kaadas",
    "model": "M7-W",
    "name": "M7-W 指紋款把手式智能電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 8900,
      "converted": 8900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900JA8TZ/000001_1758854380.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900JA8TZ",
    "buyLabel": "PChome",
    "specs": [
      "指紋/密碼/卡片",
      "Wi-Fi",
      "機械鑰匙",
      "送安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Kaadas 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "預算有限、想要基本指紋與 Wi-Fi 的家庭。",
    "recommendation": "Kaadas 入門款：價格低且含安裝，但品牌售後要比大牌多確認。",
    "score": 84,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "低價",
      "指紋",
      "Wi-Fi"
    ]
  },
  {
    "id": "smartlock-aqara-a100",
    "category": "smartlock",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "brand": "Aqara",
    "model": "A100",
    "name": "A100 智能門鎖",
    "price": {
      "currency": "TWD",
      "amount": 13599,
      "converted": 13599,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900I8573/000001_1749627194.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900I8573",
    "buyLabel": "PChome",
    "specs": [
      "指紋/密碼/卡片",
      "智慧家庭連動",
      "推拉式",
      "Aqara 生態"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Aqara 智慧家庭整合度好",
      "價格比多數旗艦低"
    ],
    "cons": [
      "需要確認台灣安裝與保固條件",
      "最適合已有 Aqara 生態的人"
    ],
    "bestFor": "已使用 Aqara、Apple Home 或米家周邊的智慧家庭。",
    "recommendation": "智慧家庭推薦：生態整合是強項，適合把門鎖納入自動化場景。",
    "score": 88,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "智慧家庭",
      "Aqara",
      "指紋"
    ]
  },
  {
    "id": "smartlock-aqara-d200i",
    "category": "smartlock",
    "rank": 17,
    "budget": "premium",
    "channel": "tw",
    "brand": "Aqara",
    "model": "D200i",
    "name": "D200i 智能門鎖",
    "price": {
      "currency": "TWD",
      "amount": 24900,
      "converted": 24900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAAPFA900JXSH5/000001_1776828240.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAAPF-A900JXSH5",
    "buyLabel": "PChome",
    "specs": [
      "高階智慧門鎖",
      "智慧家庭連動",
      "指紋/密碼",
      "Aqara 生態"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Aqara 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想要 Aqara 高階款並重視智慧家庭連動的人。",
    "recommendation": "Aqara 高階款：適合智慧家庭玩家；一般家庭可先看 A100。",
    "score": 84,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "Aqara",
      "高階",
      "智慧家庭"
    ]
  },
  {
    "id": "smartlock-lockin-x9",
    "category": "smartlock",
    "rank": 18,
    "budget": "value",
    "channel": "tw",
    "brand": "Lockin",
    "model": "X9",
    "name": "X9 指紋把手電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 11400,
      "converted": 11400,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900JJ8LG/000001_1765347346.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900JJ8LG",
    "buyLabel": "PChome",
    "specs": [
      "指紋把手",
      "密碼/卡片",
      "機械鑰匙",
      "中價位"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Lockin 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想要鹿客品牌、但預算不想上人臉旗艦的人。",
    "recommendation": "Lockin 入門推薦：功能務實、價格合理，適合一般公寓主門。",
    "score": 86,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "鹿客",
      "指紋",
      "中價位"
    ]
  },
  {
    "id": "smartlock-lockin-halo",
    "category": "smartlock",
    "rank": 19,
    "budget": "premium",
    "channel": "tw",
    "brand": "Lockin",
    "model": "Halo",
    "name": "Halo 指靜脈人臉辨識電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 25175,
      "converted": 25175,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900JUBVW/000001_1774253039.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900JUBVW",
    "buyLabel": "PChome",
    "specs": [
      "人臉/指靜脈",
      "密碼/卡片",
      "推拉式",
      "高階辨識"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Lockin 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "追求不用手指接觸、辨識方式多元的家庭。",
    "recommendation": "Lockin 高階款：指靜脈與人臉辨識方便，價格已進旗艦區。",
    "score": 86,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "人臉",
      "指靜脈",
      "高階"
    ]
  },
  {
    "id": "smartlock-zigbang-shp-p52",
    "category": "smartlock",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "Zigbang",
    "model": "SHP-P52",
    "name": "SHP-P52 推拉式電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 23275,
      "converted": 23275,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900JXYBS/000001_1776909348.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900JXYBS",
    "buyLabel": "PChome",
    "specs": [
      "APP/指紋/卡片/密碼",
      "機械鑰匙",
      "推拉式",
      "Samsung SHP 系列延伸"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "SHP 系列在電子鎖市場能見度高",
      "推拉式與 APP 功能完整"
    ],
    "cons": [
      "品牌已由 Samsung 電子鎖脈絡轉為 Zigbang",
      "售後需看台灣代理頁面"
    ],
    "bestFor": "熟悉 Samsung SHP 系列，想買推拉式電子鎖的人。",
    "recommendation": "SHP 系列代表：品牌脈絡熟悉，功能完整，但要確認代理與保固。",
    "score": 84,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "SHP",
      "推拉式",
      "APP"
    ]
  },
  {
    "id": "smartlock-dormakaba-rl360",
    "category": "smartlock",
    "rank": 21,
    "budget": "value",
    "channel": "tw",
    "brand": "dormakaba",
    "model": "RL360",
    "name": "RL360 智慧輔助電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 10450,
      "converted": 10450,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DXBO0TA900ENKZA/000001_1646372826.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DXBO0T-A900ENKZA",
    "buyLabel": "PChome",
    "specs": [
      "輔助電子鎖",
      "密碼/卡片",
      "原廠保固",
      "低門檻升級"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "dormakaba 鎖具品牌專業度高",
      "價格低於主鎖款"
    ],
    "cons": [
      "輔助鎖定位，功能不如主鎖",
      "門型相容性仍需確認"
    ],
    "bestFor": "想補強既有門鎖、不想大幅更動門體的人。",
    "recommendation": "dormakaba 入門推薦：專業鎖具品牌，適合保守升級。",
    "score": 84,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "輔助鎖",
      "dormakaba",
      "低預算"
    ]
  },
  {
    "id": "smartlock-dormakaba-ml660",
    "category": "smartlock",
    "rank": 22,
    "budget": "mid",
    "channel": "tw",
    "brand": "dormakaba",
    "model": "ML660",
    "name": "ML660 四合一智能電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 23750,
      "converted": 23750,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DECE4EA900DXNUC/000001_1643338134.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DECE4E-A900DXNUC",
    "buyLabel": "PChome",
    "specs": [
      "指紋/卡片/密碼/鑰匙",
      "含基本安裝",
      "原廠保固",
      "主鎖"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "dormakaba 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "重視鎖具本業品牌、想要四合一主鎖的人。",
    "recommendation": "專業鎖具品牌推薦：比智慧功能堆料更重視品牌與機構穩定。",
    "score": 86,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "dormakaba",
      "指紋",
      "四合一"
    ]
  },
  {
    "id": "smartlock-dormakaba-ml770",
    "category": "smartlock",
    "rank": 23,
    "budget": "mid",
    "channel": "tw",
    "brand": "dormakaba",
    "model": "ML770",
    "name": "ML770 四合一智能電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 23750,
      "converted": 23750,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900J0U5A/000001_1752128145.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900J0U5A",
    "buyLabel": "PChome",
    "specs": [
      "指紋/卡片/密碼/鑰匙",
      "含基本安裝",
      "主鎖",
      "四合一"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "dormakaba 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想在 dormakaba 主鎖款中比較外觀與型號差異的人。",
    "recommendation": "dormakaba 主鎖備選：價格與 ML660 接近，可依門型與外觀挑選。",
    "score": 85,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "dormakaba",
      "四合一",
      "含安裝"
    ]
  },
  {
    "id": "smartlock-dormakaba-fa9000",
    "category": "smartlock",
    "rank": 24,
    "budget": "premium",
    "channel": "tw",
    "brand": "dormakaba",
    "model": "FA9000",
    "name": "FA9000 五合一人臉辨識電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 27540,
      "converted": 27540,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900IAVXZ/000001_1740465068.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900IAVXZ",
    "buyLabel": "PChome",
    "specs": [
      "人臉辨識",
      "指紋/卡片/密碼",
      "推拉式",
      "含基本安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "dormakaba 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想要 dormakaba 品牌加人臉辨識的高階主門。",
    "recommendation": "dormakaba 旗艦推薦：人臉功能到位，但價格高於四合一款。",
    "score": 86,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "人臉",
      "dormakaba",
      "旗艦"
    ]
  },
  {
    "id": "smartlock-milre-mdl510f",
    "category": "smartlock",
    "rank": 25,
    "budget": "value",
    "channel": "tw",
    "brand": "Milre",
    "model": "MI-510F",
    "name": "MI-510F 三合一輔助型電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 9025,
      "converted": 9025,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900ILR7A/000001_1767853677.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900ILR7A",
    "buyLabel": "PChome",
    "specs": [
      "密碼/指紋/卡片",
      "輔助鎖",
      "含基本安裝",
      "韓系品牌"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Milre 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想用較低預算加入指紋輔助鎖的人。",
    "recommendation": "Milre 低價指紋款：適合輔助鎖需求，不建議當作高安防主鎖期待。",
    "score": 81,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "輔助鎖",
      "低價",
      "指紋"
    ]
  },
  {
    "id": "smartlock-milre-mi6450",
    "category": "smartlock",
    "rank": 26,
    "budget": "mid",
    "channel": "tw",
    "brand": "Milre",
    "model": "MI-6450",
    "name": "MI-6450 三合一電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 14250,
      "converted": 14250,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900ILR3T/000001_1767087495.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900ILR3T",
    "buyLabel": "PChome",
    "specs": [
      "卡片/密碼/鑰匙",
      "含基本安裝",
      "主鎖",
      "三合一"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Milre 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "偏好簡單穩定開鎖方式，不需要指紋的人。",
    "recommendation": "Milre 主鎖入門：功能單純、價格中等，適合不想要太多智慧功能的人。",
    "score": 79,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "Milre",
      "三合一",
      "含安裝"
    ]
  },
  {
    "id": "smartlock-milre-mi7150",
    "category": "smartlock",
    "rank": 27,
    "budget": "mid",
    "channel": "tw",
    "brand": "Milre",
    "model": "MI-7150+",
    "name": "MI-7150+ 四合一電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 18050,
      "converted": 18050,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900IOJ43/000001_1766741547.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900IOJ43",
    "buyLabel": "PChome",
    "specs": [
      "指紋/卡片/密碼/鑰匙",
      "含基本安裝",
      "四合一",
      "黑色"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Milre 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想要 Milre 四合一完整功能的人。",
    "recommendation": "Milre 均衡款：比輔助鎖完整，但價格已接近更知名品牌中階款。",
    "score": 80,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "Milre",
      "四合一",
      "指紋"
    ]
  },
  {
    "id": "smartlock-fibre-fb63m",
    "category": "smartlock",
    "rank": 28,
    "budget": "mid",
    "channel": "tw",
    "brand": "FIBRE",
    "model": "FB63M",
    "name": "FB63M 精簡電子智慧門鎖",
    "price": {
      "currency": "TWD",
      "amount": 13775,
      "converted": 13775,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900I8ITU/000001_1753416985.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900I8ITU",
    "buyLabel": "PChome",
    "specs": [
      "細窄門框",
      "電子智慧門鎖",
      "密碼/卡片",
      "含安裝依頁面"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "FIBRE 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "門框較窄或一般電子鎖不好裝的門型。",
    "recommendation": "窄框門推薦：FIBRE 精簡系列對特殊門型更友善，安裝前仍要丈量。",
    "score": 84,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "窄框",
      "FIBRE",
      "特殊門型"
    ]
  },
  {
    "id": "smartlock-fibre-fb70x",
    "category": "smartlock",
    "rank": 29,
    "budget": "mid",
    "channel": "tw",
    "brand": "FIBRE",
    "model": "FB70X",
    "name": "FB70X 樸實電子智慧門鎖",
    "price": {
      "currency": "TWD",
      "amount": 20900,
      "converted": 20900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQAT0IA900GXIHM/000001_1764834253.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQAT0I-A900GXIHM",
    "buyLabel": "PChome",
    "specs": [
      "APP/指紋/感應卡",
      "密碼/鑰匙",
      "抗菌塗層",
      "含基本安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "FIBRE 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想要台灣通路、抗菌塗層與 APP 功能的家庭。",
    "recommendation": "FIBRE 均衡款：功能完整且重視抗菌塗層，價格略高於純入門款。",
    "score": 85,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "FIBRE",
      "APP",
      "抗菌"
    ]
  },
  {
    "id": "smartlock-fibre-fb90",
    "category": "smartlock",
    "rank": 30,
    "budget": "premium",
    "channel": "tw",
    "brand": "FIBRE",
    "model": "FB90",
    "name": "FB90 築韻掌靜脈貓眼電子門鎖",
    "price": {
      "currency": "TWD",
      "amount": 42000,
      "converted": 42000,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900J43AP/000001_1764829802.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900J43AP",
    "buyLabel": "PChome",
    "specs": [
      "掌靜脈/人臉/指紋",
      "電子貓眼",
      "遠距通話",
      "防水/抗菌"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "規格完整，適合追求旗艦功能",
      "辨識方式多元"
    ],
    "cons": [
      "價格很高",
      "功能多，安裝與設定品質更重要"
    ],
    "bestFor": "願意為掌靜脈、貓眼與遠端通話一次到位付費的人。",
    "recommendation": "FIBRE 旗艦款：功能很滿，但 CP 不如 FB70X 或 Yale YMF-40A。",
    "score": 82,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "掌靜脈",
      "貓眼",
      "旗艦"
    ]
  },
  {
    "id": "smartlock-hitachi-fh10t",
    "category": "smartlock",
    "rank": 31,
    "budget": "premium",
    "channel": "tw",
    "brand": "HITACHI",
    "model": "HIT-FH10-T",
    "name": "七合一人臉/貓眼掌靜脈電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 28310,
      "converted": 28310,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900IT8YL/000001_1782961750.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900IT8YL",
    "buyLabel": "PChome",
    "specs": [
      "人臉/貓眼/掌靜脈",
      "指紋/卡片/密碼/鑰匙",
      "Wi-Fi",
      "含安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "HITACHI 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想要日系品牌與多辨識方式的高階電子鎖。",
    "recommendation": "HITACHI 高階推薦：辨識方式完整，售價偏高但品牌安心感強。",
    "score": 86,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "人臉",
      "掌靜脈",
      "HITACHI"
    ]
  },
  {
    "id": "smartlock-hitachi-fv70t",
    "category": "smartlock",
    "rank": 32,
    "budget": "mid",
    "channel": "tw",
    "brand": "HITACHI",
    "model": "HIT-FV70-T",
    "name": "和系列全自動七合一智慧鎖",
    "price": {
      "currency": "TWD",
      "amount": 21755,
      "converted": 21755,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900JLLZ3/000001_1782963047.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900JLLZ3",
    "buyLabel": "PChome",
    "specs": [
      "3D 人臉",
      "指紋/卡片/密碼",
      "鑰匙/APP",
      "全自動推拉式"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "HITACHI 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "希望日系品牌、人臉辨識與價格不要超過三萬的人。",
    "recommendation": "HITACHI CP 高階款：功能很滿，價格比同品牌貓眼旗艦更容易接受。",
    "score": 88,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "人臉",
      "全自動",
      "HITACHI"
    ]
  },
  {
    "id": "smartlock-hitachi-fy10t",
    "category": "smartlock",
    "rank": 33,
    "budget": "premium",
    "channel": "tw",
    "brand": "HITACHI",
    "model": "HIT-FY10-T",
    "name": "逸系列微光夜視貓眼電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 36860,
      "converted": 36860,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900K2QWO/000001_1782963114.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900K2QWO",
    "buyLabel": "PChome",
    "specs": [
      "300 萬畫素貓眼",
      "微光夜視",
      "七合一解鎖",
      "含安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "貓眼與夜視規格清楚",
      "適合重視門外影像的人"
    ],
    "cons": [
      "價格高",
      "需確認網路與 APP 使用情境"
    ],
    "bestFor": "公寓門口較暗、想把可視門鈴與門鎖整合的人。",
    "recommendation": "HITACHI 影像旗艦：門外影像需求強時很適合，一般家庭可選 FV70-T。",
    "score": 84,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "貓眼",
      "夜視",
      "旗艦"
    ]
  },
  {
    "id": "smartlock-lockly-latch-plus",
    "category": "smartlock",
    "rank": 34,
    "budget": "mid",
    "channel": "tw",
    "brand": "Lockly",
    "model": "Latch Plus",
    "name": "Latch Plus 指紋款智慧電子門鎖",
    "price": {
      "currency": "TWD",
      "amount": 12000,
      "converted": 12000,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DECE2SA900B5V4Y/000001_1614234907.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DECE2S-A900B5V4Y",
    "buyLabel": "PChome",
    "specs": [
      "指紋",
      "密碼/手機",
      "把手款",
      "美國品牌"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Lockly 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "偏好美系品牌與把手款外型的人。",
    "recommendation": "美系品牌補位：價格合理，但台灣安裝與售後要比日韓大牌多確認。",
    "score": 80,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "Lockly",
      "指紋",
      "美系"
    ]
  },
  {
    "id": "smartlock-waferlock-d310",
    "category": "smartlock",
    "rank": 35,
    "budget": "value",
    "channel": "tw",
    "brand": "WAFERLOCK",
    "model": "D310",
    "name": "D310 三合一電子指紋輔助鎖",
    "price": {
      "currency": "TWD",
      "amount": 8990,
      "converted": 8990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DECE36A900EXHPC/000001_1776403865.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DECE36-A900EXHPC",
    "buyLabel": "PChome",
    "specs": [
      "指紋/卡片/密碼",
      "輔助鎖",
      "含標準安裝",
      "台灣電子鎖品牌"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "WAFERLOCK 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想支持台灣品牌、用輔助鎖低成本升級的人。",
    "recommendation": "台灣品牌輔助鎖：價格好入手，適合補強既有門鎖。",
    "score": 82,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "台灣品牌",
      "輔助鎖",
      "指紋"
    ]
  },
  {
    "id": "smartlock-sharp-tiko-one",
    "category": "smartlock",
    "rank": 36,
    "budget": "mid",
    "channel": "tw",
    "brand": "SHARP",
    "model": "Tiko One",
    "name": "Tiko One 指紋卡片密碼電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 16910,
      "converted": 16910,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900K0KZV/000001_1779265986.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900K0KZV",
    "buyLabel": "PChome",
    "specs": [
      "指紋/卡片/密碼",
      "機械鑰匙",
      "原廠公司貨",
      "日系品牌"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "SHARP 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "偏好 SHARP 品牌、需求集中在基本指紋與密碼的人。",
    "recommendation": "SHARP 品牌備選：功能務實，適合已信任 SHARP 售後的人。",
    "score": 81,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "SHARP",
      "指紋",
      "公司貨"
    ]
  },
  {
    "id": "smartlock-panasonic-g11",
    "category": "smartlock",
    "rank": 37,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "G-11",
    "name": "G-11 指紋密碼電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 9310,
      "converted": 9310,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900K1WBU/000001_1779862478.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900K1WBU",
    "buyLabel": "PChome",
    "specs": [
      "指紋/密碼",
      "卡片",
      "電子鎖",
      "入門價位"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Panasonic 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想買日系品牌入門電子鎖、預算壓在萬元上下的人。",
    "recommendation": "Panasonic 入門款：品牌安心感高，但商品頁資訊較精簡，下單前要確認安裝內容。",
    "score": 80,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "Panasonic",
      "低價",
      "指紋"
    ]
  },
  {
    "id": "smartlock-hyundai-hdl1100s",
    "category": "smartlock",
    "rank": 38,
    "budget": "value",
    "channel": "tw",
    "brand": "HYUNDAI",
    "model": "HDL-1100S",
    "name": "HDL-1100S 二合一智慧電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 6999,
      "converted": 6999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQAT0BA900GKLUM/000001_1691734006.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQAT0B-A900GKLUM",
    "buyLabel": "PChome",
    "specs": [
      "卡片/密碼",
      "輔助電子鎖",
      "韓國製造",
      "一次性訪客密碼"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "HYUNDAI 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "低預算、想要卡片與密碼輔助鎖的人。",
    "recommendation": "低價輔助鎖：價格漂亮，功能較簡單，適合出租或副門。",
    "score": 78,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "低價",
      "輔助鎖",
      "密碼"
    ]
  },
  {
    "id": "smartlock-3e-z",
    "category": "smartlock",
    "rank": 39,
    "budget": "value",
    "channel": "tw",
    "brand": "3E",
    "model": "Z",
    "name": "3E 小島快鎖 Z 電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 6490,
      "converted": 6490,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS3CA900HOV94/000001_1722063380.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS3C-A900HOV94",
    "buyLabel": "PChome",
    "specs": [
      "電子鎖",
      "入門價格",
      "小島快鎖",
      "台灣通路"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "3E 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "預算很低、需要基本電子鎖功能的人。",
    "recommendation": "低價補位：價格最低之一，但售後與安裝細節要先問清楚。",
    "score": 76,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "低價",
      "3E",
      "入門"
    ]
  },
  {
    "id": "smartlock-3e-t9-plus",
    "category": "smartlock",
    "rank": 40,
    "budget": "mid",
    "channel": "tw",
    "brand": "3E",
    "model": "T9 Plus+",
    "name": "T9 Plus+ 掌靜脈九合一電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 23750,
      "converted": 23750,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900K03FM/000001_1778558520.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900K03FM",
    "buyLabel": "PChome",
    "specs": [
      "掌靜脈",
      "九合一",
      "Wi-Fi",
      "含基本安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "3E 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想要掌靜脈等高階功能、但不想買國際大牌的人。",
    "recommendation": "功能型高階款：規格很多，品牌售後與安裝口碑需自行再確認。",
    "score": 80,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "掌靜脈",
      "九合一",
      "高階"
    ]
  },
  {
    "id": "smartlock-3e-tk",
    "category": "smartlock",
    "rank": 41,
    "budget": "premium",
    "channel": "tw",
    "brand": "3E",
    "model": "TK",
    "name": "TK 九合一電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 30248,
      "converted": 30248,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900JG66I/000001_1771990337.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900JG66I",
    "buyLabel": "PChome",
    "specs": [
      "人臉/掌靜脈/指紋",
      "密碼/鑰匙",
      "Wi-Fi",
      "九合一"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "3E 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想用一台電子鎖一次取得多種生物辨識的人。",
    "recommendation": "規格堆料款：功能完整但價格高，建議重視安裝服務者再選。",
    "score": 79,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "人臉",
      "掌靜脈",
      "九合一"
    ]
  },
  {
    "id": "smartlock-moorgen-t12",
    "category": "smartlock",
    "rank": 42,
    "budget": "mid",
    "channel": "tw",
    "brand": "moorgen",
    "model": "T12",
    "name": "T12 五合一把手式電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 14155,
      "converted": 14155,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900IDEPI/000001_1748323634.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900IDEPI",
    "buyLabel": "PChome",
    "specs": [
      "指紋/卡片/密碼",
      "鑰匙/遠端 APP",
      "把手式",
      "含基本安裝"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "moorgen 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想用中價位買到 APP 與基本五合一功能的人。",
    "recommendation": "中價位備選：功能完整，品牌知名度不如 Yale/Philips。",
    "score": 79,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "APP",
      "五合一",
      "中價位"
    ]
  },
  {
    "id": "smartlock-kingnet-djs-sk07",
    "category": "smartlock",
    "rank": 43,
    "budget": "mid",
    "channel": "tw",
    "brand": "KingNet",
    "model": "DJS-SK07",
    "name": "DJS-SK07 全自動智慧電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 22230,
      "converted": 22230,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900J5GYW/000001_1755762130.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900J5GYW",
    "buyLabel": "PChome",
    "specs": [
      "全自動",
      "指紋/密碼",
      "電子鎖",
      "台灣通路"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "KingNet 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "偏好監控/門禁通路品牌，想一起規劃門口安全的人。",
    "recommendation": "門禁通路備選：適合已使用 KingNet/帝網系統的人。",
    "score": 78,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "全自動",
      "門禁",
      "中價位"
    ]
  },
  {
    "id": "smartlock-arpha-z2",
    "category": "smartlock",
    "rank": 44,
    "budget": "premium",
    "channel": "tw",
    "brand": "arpha",
    "model": "Z2",
    "name": "Z2 指靜脈貓眼智慧靜音電子鎖",
    "price": {
      "currency": "TWD",
      "amount": 32138,
      "converted": 32138,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900JISCM/000001_1780306235.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900JISCM",
    "buyLabel": "PChome",
    "specs": [
      "指靜脈",
      "貓眼",
      "智慧靜音",
      "高階款"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "arpha 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "想要指靜脈、貓眼與靜音設計的人。",
    "recommendation": "高階特色款：規格亮眼，但品牌與售後要先確認。",
    "score": 78,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "指靜脈",
      "貓眼",
      "高階"
    ]
  },
  {
    "id": "smartlock-chatlock-a50",
    "category": "smartlock",
    "rank": 45,
    "budget": "premium",
    "channel": "tw",
    "brand": "Chatlock",
    "model": "A50",
    "name": "AI 智慧 A50 頂級電子門鎖",
    "price": {
      "currency": "TWD",
      "amount": 39800,
      "converted": 39800,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900K2WIC/000001_1783308785.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900K2WIC",
    "buyLabel": "PChome",
    "specs": [
      "12 合 1",
      "人臉/指紋/掌靜脈",
      "日本製",
      "高階款"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "Chatlock 通路能見度高",
      "PChome 正常新品頁，價格與圖片可查核"
    ],
    "cons": [
      "安裝前需確認門型與加價項目",
      "實際保固與基本安裝範圍以購買頁為準"
    ],
    "bestFor": "預算高、想要日本製與多重辨識功能的人。",
    "recommendation": "日本製高階參考：規格與價格都很高，適合有特殊偏好者。",
    "score": 77,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "日本製",
      "12合1",
      "高階"
    ]
  },
  {
    "id": "smartlock-chatlock-a90",
    "category": "smartlock",
    "rank": 46,
    "budget": "premium",
    "channel": "tw",
    "brand": "Chatlock",
    "model": "A90",
    "name": "AI 智慧 A90 頂級電子門鎖",
    "price": {
      "currency": "TWD",
      "amount": 49800,
      "converted": 49800,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4NA900K2STR/000001_1783309040.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4N-A900K2STR",
    "buyLabel": "PChome",
    "specs": [
      "13 合 1",
      "人臉/指紋/掌靜脈",
      "日本製",
      "旗艦款"
    ],
    "description": "電子鎖購買前要先確認門厚、門向、鎖體、天地栓與安裝條件；本清單僅列可信通路正常新品。",
    "pros": [
      "功能規格最滿",
      "日本製與外觀用料有特色"
    ],
    "cons": [
      "價格是本類最高級距",
      "CP 值不如中階品牌款"
    ],
    "bestFor": "想買頂級規格、預算不是主要限制的人。",
    "recommendation": "頂級規格參考：適合看天花板，不是本類 CP 首選。",
    "score": 76,
    "voltage": "多為電池供電；需確認門厚、門向、鎖體與是否有天地栓",
    "warranty": "依 PChome 商品頁、原廠或台灣代理保固與安裝條款",
    "tags": [
      "日本製",
      "13合1",
      "旗艦"
    ]
  }
]);
})();
