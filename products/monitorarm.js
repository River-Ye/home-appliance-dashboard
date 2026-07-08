(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("monitorarm", [
  {
    "id": "monitorarm-raymii-ls116m1",
    "category": "monitorarm",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Raymii",
    "model": "LS-116-M1",
    "name": "SAKER 30KG 57 吋高承重氣壓式螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 2549,
      "converted": 2549,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBBC5A900JM6ZN/000001_1767687719.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBBC5-A900JM6ZN",
    "buyLabel": "PChome",
    "specs": [
      "支援 24-57 吋",
      "承重最高 30kg",
      "標示支援 49 吋 Odyssey G9 / 55 吋 Odyssey ARK",
      "USB-A / Type-C 底座",
      "大螢幕優先確認 VESA 與桌板厚度"
    ],
    "description": "Raymii LS-116-M1 是這批裡承重標示最高的桌上型懸臂支架，適合 49/57 吋超寬螢幕優先比較。",
    "pros": [
      "30kg 承重餘裕最大",
      "明確標示支援大型電競螢幕",
      "價格比國際高階支架低很多"
    ],
    "cons": [
      "大螢幕仍需確認 VESA 位置與桌板強度",
      "品牌售後與精密度不如 Ergotron 等高階品牌"
    ],
    "bestFor": "49 吋、57 吋或重量接近 20kg 的超寬螢幕使用者。",
    "recommendation": "本類 Top Pick：承重 30kg、支援 57 吋，最適合先拿來比對超寬螢幕支撐風險。",
    "score": 92,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "57吋",
      "30kg",
      "大螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-raymii-ls104m1",
    "category": "monitorarm",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "Raymii",
    "model": "LS-104-M1",
    "name": "TAYLOR 27KG 57 吋鋁合金氣壓式螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 2899,
      "converted": 2899,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAGRJA900I6VLQ/000001_1734668162.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAGRJ-A900I6VLQ",
    "buyLabel": "PChome",
    "specs": [
      "支援 24-57 吋",
      "承重 2-27kg",
      "VESA 中心最高 660mm",
      "可支援三星 49 吋 Odyssey G9 類大型曲面螢幕",
      "USB3.0 / Type-C"
    ],
    "description": "Raymii LS-104-M1 是 27kg 級高承重支架，特別強調大型曲面螢幕不下垂與較高 VESA 中心。",
    "pros": [
      "27kg 承重足以涵蓋多數 49/57 吋螢幕",
      "VESA 中心高度較適合大螢幕",
      "I/O 底座方便"
    ],
    "cons": [
      "大螢幕安裝需要兩人與穩固桌板",
      "使用前仍需確認螢幕實際重量不含腳架"
    ],
    "bestFor": "需要把 49 吋 Odyssey G9 類超寬螢幕架高並保持可調的人。",
    "recommendation": "57 吋高承重推薦：27kg 加高中心點對超寬螢幕很實用，價格也還在可接受範圍。",
    "score": 90,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "57吋",
      "27kg",
      "大螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-raymii-halo-max2-1m",
    "category": "monitorarm",
    "rank": 3,
    "budget": "mid",
    "channel": "tw",
    "brand": "Raymii",
    "model": "HALO-MAX2-1M",
    "name": "HALO MAX 27KG 57 吋鋁合金氣壓式螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 2519,
      "converted": 2519,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAGRJA900JVFLM/000001_1775109563.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAGRJ-A900JVFLM",
    "buyLabel": "PChome",
    "specs": [
      "支援 57 吋級距",
      "承重 0-27kg",
      "三軸旋轉",
      "氣壓彈簧",
      "USB3.0 底座"
    ],
    "description": "Raymii HALO-MAX2-1M 是 27kg 級高承重款，適合想要較大承重但預算低於三千元的使用者。",
    "pros": [
      "27kg 承重",
      "價格相對漂亮",
      "鋁合金結構與氣壓調整"
    ],
    "cons": [
      "0-27kg 範圍很寬，輕螢幕需確認可否穩定調校",
      "大螢幕需確認桌板夾持面積"
    ],
    "bestFor": "想用較低預算支撐 49 吋或更大曲面螢幕的人。",
    "recommendation": "高承重 CP 候選：27kg 規格很強，適合預算有限但螢幕重量不輕的配置。",
    "score": 88,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "57吋",
      "27kg",
      "CP 值"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-happytech-t101-12u",
    "category": "monitorarm",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "Happy Tech",
    "model": "T101-12U",
    "name": "27KG 57 吋鋁合金氣壓式螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 3099,
      "converted": 3099,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB69A900INQG2/000001_1745485048.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB69-A900INQG2",
    "buyLabel": "PChome",
    "specs": [
      "支援 24-57 吋",
      "承重 2-27kg",
      "USB3.0 + Type-C",
      "下臂可鎖定",
      "鋁合金結構"
    ],
    "description": "Happy Tech T101-12U 是 27kg 級大型螢幕支架，適合需要高承重與 USB/Type-C 底座的人。",
    "pros": [
      "27kg 承重",
      "支援 57 吋級距",
      "下臂鎖定對大型螢幕較安心"
    ],
    "cons": [
      "價格高於入門高承重支架",
      "品牌能見度低於 Ergotron/Loctek"
    ],
    "bestFor": "想找非 Raymii 的 57 吋高承重候選者。",
    "recommendation": "高承重替代推薦：同樣 27kg，適合作為 Raymii 之外的比較選項。",
    "score": 86,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "57吋",
      "27kg",
      "大螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-raymii-ls129m1",
    "category": "monitorarm",
    "rank": 5,
    "budget": "mid",
    "channel": "tw",
    "brand": "Raymii",
    "model": "LS-129-M1",
    "name": "NEON 27KG 57 吋高承重電競氣壓式螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 2459,
      "converted": 2459,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAGRJA900JZFGW/000001_1778056158.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAGRJ-A900JZFGW",
    "buyLabel": "PChome",
    "specs": [
      "支援 57 吋級距",
      "承重 27kg",
      "適合大型曲面螢幕",
      "俯仰與旋轉調整",
      "氣壓式"
    ],
    "description": "Raymii LS-129-M1 是偏電競定位的 27kg 高承重支架，規格明確指向大型曲面螢幕。",
    "pros": [
      "27kg 承重且價格低",
      "強調大型曲面螢幕",
      "調整角度完整"
    ],
    "cons": [
      "電競外型不一定適合安靜辦公桌",
      "需確認螢幕與桌板實際安裝條件"
    ],
    "bestFor": "49/57 吋電競寬螢幕，且希望支架價格壓低的人。",
    "recommendation": "低價高承重候選：規格漂亮，但如果預算可上 LS-116-M1，30kg 餘裕更安心。",
    "score": 87,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "57吋",
      "27kg",
      "電競"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-raymii-ls118m1",
    "category": "monitorarm",
    "rank": 6,
    "budget": "value",
    "channel": "tw",
    "brand": "Raymii",
    "model": "LS-118-M1",
    "name": "DELTA-S 20KG 49 吋高承重氣壓式螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 2024,
      "converted": 2024,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAGRJA900JS174/000001_1772508775.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAGRJ-A900JS174",
    "buyLabel": "PChome",
    "specs": [
      "支援 49 吋級距",
      "承重 20kg",
      "氣壓式升降",
      "強化轉接頭",
      "大型曲面螢幕防下垂設計"
    ],
    "description": "Raymii LS-118-M1 是 20kg、49 吋級距的高承重支架，適合 49 吋 DQHD 或較重 45 吋 OLED。",
    "pros": [
      "20kg 對多數 49 吋螢幕夠用",
      "價格低於 27/30kg 款",
      "強調曲面螢幕不下垂"
    ],
    "cons": [
      "57 吋或超重款建議上 27kg/30kg",
      "大螢幕安裝仍需兩人"
    ],
    "bestFor": "49 吋 Odyssey G9 / OLED G9 類型，但重量未超過 20kg 的螢幕。",
    "recommendation": "49 吋 CP 推薦：不需要 57 吋承重時，20kg 級距比較省錢。",
    "score": 88,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "49吋",
      "20kg",
      "大螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-raymii-ls114s1",
    "category": "monitorarm",
    "rank": 7,
    "budget": "value",
    "channel": "tw",
    "brand": "Raymii",
    "model": "LS-114-S1",
    "name": "MOJO 20KG 49 吋超高承重螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 1079,
      "converted": 1079,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAGRJA900IWS5L/000001_1749202897.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAGRJ-A900IWS5L",
    "buyLabel": "PChome",
    "specs": [
      "支援 49 吋級距",
      "承重 20kg",
      "彈簧反向支撐",
      "可旋轉/俯仰",
      "適合大尺寸曲面螢幕"
    ],
    "description": "Raymii LS-114-S1 是價格很低的 20kg 級螢幕懸臂支架，適合先控制支架預算。",
    "pros": [
      "20kg 規格但價格低",
      "支援 49 吋級距",
      "適合預算型大螢幕配置"
    ],
    "cons": [
      "質感與順暢度可能不如高階款",
      "大螢幕建議優先確認桌夾穩定度"
    ],
    "bestFor": "預算有限，但需要支撐 34-49 吋寬螢幕的人。",
    "recommendation": "低價高承重推薦：規格漂亮但價格低，適合願意自己仔細安裝調校的人。",
    "score": 84,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "49吋",
      "20kg",
      "低價"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-raymii-ls114exm1",
    "category": "monitorarm",
    "rank": 8,
    "budget": "value",
    "channel": "tw",
    "brand": "Raymii",
    "model": "LS-114-EX-M1",
    "name": "MOJO 20KG 49 吋加高型超高承重螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 1439,
      "converted": 1439,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAGRJA900JVFY0/000001_1775114085.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAGRJ-A900JVFY0",
    "buyLabel": "PChome",
    "specs": [
      "支援 49 吋級距",
      "承重 20kg",
      "加高型",
      "三軸旋轉",
      "適合大重量曲面螢幕"
    ],
    "description": "Raymii LS-114-EX-M1 是 LS-114 系列的加高款，適合需要把 49 吋螢幕抬高或桌面配置較特殊的人。",
    "pros": [
      "20kg 承重",
      "加高型對大型螢幕更友善",
      "價格仍低"
    ],
    "cons": [
      "加高後力矩更大，桌板強度更重要",
      "不建議忽略桌板厚度與夾具限制"
    ],
    "bestFor": "需要把 34-49 吋寬螢幕抬高、或螢幕下方要放音響/設備的人。",
    "recommendation": "加高款推薦：若一般支架高度不夠，這台比直接買 27kg 款便宜。",
    "score": 85,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "49吋",
      "20kg",
      "加高"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-happytech-tc92-10",
    "category": "monitorarm",
    "rank": 9,
    "budget": "value",
    "channel": "tw",
    "brand": "Happy Tech",
    "model": "TC92-10",
    "name": "17-49 吋 20KG 中柱款螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 1499,
      "converted": 1499,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB69A900IHPC0/000001_1742812418.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB69-A900IHPC0",
    "buyLabel": "PChome",
    "specs": [
      "支援 17-49 吋",
      "承重 20kg",
      "夾桌/鎖桌兩用",
      "中柱款",
      "線材收納"
    ],
    "description": "Happy Tech TC92-10 是中柱款 20kg 支架，適合希望結構簡單、支撐大於靈活伸縮的人。",
    "pros": [
      "20kg 承重",
      "夾桌/鎖桌兩用",
      "中柱結構相對直覺"
    ],
    "cons": [
      "調整自由度通常不如長臂氣壓款",
      "49 吋以上不適合"
    ],
    "bestFor": "想支撐 34-49 吋螢幕，但不需要頻繁拉伸調角度的人。",
    "recommendation": "穩定中柱候選：如果你不常移動螢幕，中柱款比長懸臂更單純。",
    "score": 83,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "49吋",
      "20kg",
      "中柱"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-tdgb-t95-gamw",
    "category": "monitorarm",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "brand": "TDGB",
    "model": "T95-GAMW",
    "name": "17-49 吋 20KG 無重力電競氣壓式螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 2050,
      "converted": 2050,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAGQ5A900JJ59E/000001_1769669615.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAGQ5-A900JJ59E",
    "buyLabel": "PChome",
    "specs": [
      "支援 17-49 吋",
      "承重 2-20kg",
      "氣壓式",
      "電競燈效",
      "航太級鋁合金"
    ],
    "description": "TDGB T95-GAMW 是 20kg 級電競風格支架，適合 49 吋以下的大型或寬螢幕。",
    "pros": [
      "2-20kg 調整範圍清楚",
      "支援 49 吋級距",
      "外觀較電競"
    ],
    "cons": [
      "燈效不是所有桌面都需要",
      "不建議拿來支撐 57 吋旗艦"
    ],
    "bestFor": "34-49 吋電競寬螢幕，且想要電競外觀的人。",
    "recommendation": "電競支架候選：20kg 夠用，外觀比一般商務支架更有存在感。",
    "score": 82,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "49吋",
      "20kg",
      "電競"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-loctek-d7h",
    "category": "monitorarm",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "brand": "Loctek",
    "model": "D7H / DLB511L",
    "name": "6-15KG 電競螢幕人體工學支架",
    "price": {
      "currency": "TWD",
      "amount": 3499,
      "converted": 3499,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1TA900HSZYL/000001_1727240766.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC1T-A900HSZYL",
    "buyLabel": "PChome",
    "specs": [
      "承重 6-15kg",
      "航空鋁材",
      "氣彈簧懸臂",
      "夾桌/鑽孔安裝",
      "大螢幕需確認重量低於 15kg"
    ],
    "description": "Loctek D7H 是較有品牌能見度的 15kg 級人體工學支架，適合較重 32/34 吋或部分 45/49 吋輕量螢幕。",
    "pros": [
      "Loctek 品牌與人體工學產品線較完整",
      "15kg 比一般 8/9kg 支架有餘裕",
      "夾桌與鑽孔兩種安裝"
    ],
    "cons": [
      "不適合 57 吋或超過 15kg 的螢幕",
      "價格高於 Raymii 20kg 款"
    ],
    "bestFor": "34 吋 OLED、較重 32 吋或重量在 15kg 內的寬螢幕。",
    "recommendation": "品牌型中高承重推薦：若你重視品牌與做工，且螢幕低於 15kg，可列入比較。",
    "score": 84,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "15kg",
      "Loctek",
      "人體工學"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-ergotron-lx-pro",
    "category": "monitorarm",
    "rank": 12,
    "budget": "premium",
    "channel": "tw",
    "brand": "Ergotron",
    "model": "LX Pro",
    "name": "LX Pro 桌上型單螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 6500,
      "converted": 6500,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DGBJPWA900IO3XY/000001_1745568644.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DGBJPW-A900IO3XY",
    "buyLabel": "PChome",
    "specs": [
      "單螢幕支架",
      "LX 系列升級款",
      "標示 10 年保固",
      "適合一般 24-34 吋工作螢幕",
      "大於 34 吋或超寬重螢幕請改看 HX/高承重款"
    ],
    "description": "Ergotron LX Pro 主打高品質調整手感與長保固，比起撐 49/57 吋，它更適合一般工作螢幕與高階桌面配置。",
    "pros": [
      "Ergotron 支架口碑強",
      "調整手感與耐用度通常較好",
      "保固資訊較完整"
    ],
    "cons": [
      "價格高",
      "不是 49/57 吋超寬大螢幕的優先選項"
    ],
    "bestFor": "重視支架手感、耐用度與保固的 24-34 吋工作螢幕使用者。",
    "recommendation": "品質型推薦：一般螢幕選它很安心；若是 49/57 吋超寬螢幕，請改看 20kg 以上款。",
    "score": 83,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "Ergotron",
      "高質感",
      "一般螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-j5create-jtsa101",
    "category": "monitorarm",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "j5create",
    "model": "JTSA101",
    "name": "17-32 吋 8KG 氣壓式舒適螢幕懸臂支架",
    "price": {
      "currency": "TWD",
      "amount": 1930,
      "converted": 1930,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAX3NA900HNTHZ/000001_1724123200.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAX3N-A900HNTHZ",
    "buyLabel": "PChome",
    "specs": [
      "支援 17-32 吋",
      "承重 8kg",
      "VESA",
      "夾桌/穿桌",
      "不建議用於大寬螢幕"
    ],
    "description": "j5create JTSA101 是一般 17-32 吋螢幕用的氣壓支架，適合標準 24/27/32 吋，不適合 49 吋寬螢幕。",
    "pros": [
      "j5create 通路與品牌辨識度高",
      "安裝方式清楚",
      "適合一般螢幕"
    ],
    "cons": [
      "8kg 承重不適合大型寬螢幕",
      "32 吋以上需重新確認重量與 VESA"
    ],
    "bestFor": "24-32 吋一般辦公螢幕，想要乾淨桌面與基本調整的人。",
    "recommendation": "一般螢幕推薦：標準螢幕可買，但若你買 34/49/57 吋寬螢幕請直接跳過。",
    "score": 79,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "32吋",
      "8kg",
      "一般螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-j5create-jtsa102",
    "category": "monitorarm",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "j5create",
    "model": "JTSA102",
    "name": "17-32 吋 8KG/臂 雙螢幕氣壓式懸臂支架",
    "price": {
      "currency": "TWD",
      "amount": 2750,
      "converted": 2750,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAX3NA900HNTEF/000001_1724123227.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAX3N-A900HNTEF",
    "buyLabel": "PChome",
    "specs": [
      "雙螢幕",
      "每臂承重 8kg",
      "支援 17-32 吋",
      "VESA",
      "夾桌/穿桌"
    ],
    "description": "j5create JTSA102 是雙螢幕支架，每臂 8kg，適合兩台 24/27/32 吋標準螢幕，不是 49 吋超寬螢幕方案。",
    "pros": [
      "雙螢幕一次整理",
      "每臂重量標示清楚",
      "夾桌/穿桌彈性高"
    ],
    "cons": [
      "不適合單台超寬大螢幕",
      "雙 32 吋需確認總桌面寬度"
    ],
    "bestFor": "雙 24/27 吋辦公螢幕、或兩台輕量 32 吋螢幕。",
    "recommendation": "雙螢幕推薦：如果你不是買超寬螢幕，而是保留雙螢幕配置，這台比單臂更合適。",
    "score": 78,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "雙螢幕",
      "8kg",
      "一般螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-loctek-d5s",
    "category": "monitorarm",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "Loctek",
    "model": "D5S",
    "name": "17-32 吋 2-9KG 人體工學螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 939,
      "converted": 939,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAGQ5A900JUC1W/000001_1774344481.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAGQ5-A900JUC1W",
    "buyLabel": "PChome",
    "specs": [
      "支援 17-32 吋",
      "承重 2-9kg",
      "氣彈簧升降",
      "一般螢幕用",
      "不建議支撐 34 吋以上寬螢幕"
    ],
    "description": "Loctek D5S 是低價一般螢幕支架，適合 24/27/32 吋輕量螢幕，並不適合作為大寬螢幕支撐。",
    "pros": [
      "價格低",
      "Loctek 品牌常見",
      "適合一般桌面整理"
    ],
    "cons": [
      "9kg 承重不適合大螢幕",
      "34 吋以上寬螢幕需看更高承重款"
    ],
    "bestFor": "24/27 吋輕量工作螢幕，想用最少預算清出桌面的人。",
    "recommendation": "低價一般款：只推薦給標準螢幕，寬螢幕用戶請至少看 15kg 或 20kg 以上。",
    "score": 76,
    "voltage": "無需用電；台灣通路",
    "warranty": "依 PChome/供應商頁面；安裝前確認桌板厚度與 VESA 規格",
    "tags": [
      "懸臂支架",
      "32吋",
      "9kg",
      "低價"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-extra-16-dcagu1a900i6wcy",
    "category": "monitorarm",
    "rank": 16,
    "budget": "value",
    "channel": "tw",
    "brand": "BenQ",
    "model": "BSH01",
    "name": "45吋 20KG 氣壓式螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 2999,
      "converted": 2999,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAGU1A900I6WCY/000001_1754374453.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAGU1-A900I6WCY",
    "buyLabel": "PChome",
    "specs": [
      "支援 45吋",
      "承重 20kg",
      "氣壓式",
      "VESA"
    ],
    "description": "BenQ BSH01 補進本分類比較池，重點是支援 45吋、承重 20kg、氣壓式，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "品牌售後比雜牌安心",
      "20kg 可支援多數 34/45 吋螢幕"
    ],
    "cons": [
      "不適合 57 吋超重螢幕",
      "價格高於一般支架"
    ],
    "bestFor": "想依螢幕尺寸、重量、桌板厚度與 VESA 規格挑支架的人。",
    "recommendation": "補充推薦：45吋 20KG 氣壓式螢幕支架 的優勢在品牌售後比雜牌安心，但仍建議把不適合 57 吋超重螢幕納入取捨。",
    "score": 86,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "45吋",
      "20kg",
      "大螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-extra-17-dcagu1a900ix2md",
    "category": "monitorarm",
    "rank": 17,
    "budget": "value",
    "channel": "tw",
    "brand": "BenQ",
    "model": "BDH01",
    "name": "35吋 20KG 雙臂氣壓式螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 5390,
      "converted": 5390,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAGU1A900IX2MD/000001_1749518938.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAGU1-A900IX2MD",
    "buyLabel": "PChome",
    "specs": [
      "雙臂",
      "支援 35吋",
      "承重 20kg",
      "氣壓式"
    ],
    "description": "BenQ BDH01 補進本分類比較池，重點是雙臂、支援 35吋、承重 20kg，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "雙螢幕桌面整線方便",
      "單臂承重規格高"
    ],
    "cons": [
      "35 吋以上寬螢幕要保守評估",
      "雙臂需要較深桌面"
    ],
    "bestFor": "想依螢幕尺寸、重量、桌板厚度與 VESA 規格挑支架的人。",
    "recommendation": "補充推薦：35吋 20KG 雙臂氣壓式螢幕支架 的優勢在雙螢幕桌面整線方便，但仍建議把35 吋以上寬螢幕要保守評估納入取捨。",
    "score": 85,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "雙臂",
      "20kg",
      "雙螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-extra-18-dsabn2a900ginee",
    "category": "monitorarm",
    "rank": 18,
    "budget": "value",
    "channel": "tw",
    "brand": "LINDY",
    "model": "40693+40940",
    "name": "台灣製氣壓式螢幕支架加長桿組",
    "price": {
      "currency": "TWD",
      "amount": 4540,
      "converted": 4540,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DSABN2A900GINEE/000001_1690179981.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSABN2-A900GINEE",
    "buyLabel": "PChome",
    "specs": [
      "氣壓式",
      "70cm C型夾鉗支桿",
      "桌夾",
      "VESA"
    ],
    "description": "LINDY 40693+40940 補進本分類比較池，重點是氣壓式、70cm C型夾鉗支桿、桌夾，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "加長支桿對高度調整友善",
      "台灣製造"
    ],
    "cons": [
      "承重需依頁面確認",
      "大寬螢幕不如 20kg/30kg 款明確"
    ],
    "bestFor": "想依螢幕尺寸、重量、桌板厚度與 VESA 規格挑支架的人。",
    "recommendation": "補充推薦：台灣製氣壓式螢幕支架加長桿組 的優勢在加長支桿對高度調整友善，但仍建議把承重需依頁面確認納入取捨。",
    "score": 84,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "加長桿",
      "氣壓式",
      "台灣製"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-extra-19-dcbb62a900fv397",
    "category": "monitorarm",
    "rank": 19,
    "budget": "value",
    "channel": "tw",
    "brand": "EGTC",
    "model": "EGTC743Q",
    "name": "三螢幕快拆式穿夾兩用鋁合金支架",
    "price": {
      "currency": "TWD",
      "amount": 4288,
      "converted": 4288,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADYKA900B0UWS/000001_1722844563.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADYK-A900B0UWS",
    "buyLabel": "PChome",
    "specs": [
      "三螢幕",
      "穿夾兩用",
      "鋁合金",
      "快拆"
    ],
    "description": "EGTC EGTC743Q 補進本分類比較池，重點是三螢幕、穿夾兩用、鋁合金，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "多螢幕一次整理",
      "桌夾與穿孔彈性高"
    ],
    "cons": [
      "不適合超寬重螢幕",
      "安裝與配重較麻煩"
    ],
    "bestFor": "想依螢幕尺寸、重量、桌板厚度與 VESA 規格挑支架的人。",
    "recommendation": "補充推薦：三螢幕快拆式穿夾兩用鋁合金支架 的優勢在多螢幕一次整理，但仍建議把不適合超寬重螢幕納入取捨。",
    "score": 83,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "三螢幕",
      "快拆",
      "穿夾兩用"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "monitorarm-extra-20-dcbakfa900hafjo",
    "category": "monitorarm",
    "rank": 20,
    "budget": "value",
    "channel": "tw",
    "brand": "易控王",
    "model": "ZENO M10",
    "name": "17-35吋 10KG 氣壓懸臂式螢幕支架",
    "price": {
      "currency": "TWD",
      "amount": 1130,
      "converted": 1130,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBAKFA900HAFJO/000001_1709791102.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBAKF-A900HAFJO",
    "buyLabel": "PChome",
    "specs": [
      "17-35吋",
      "承重 10kg",
      "氣壓式",
      "曲面螢幕可用"
    ],
    "description": "易控王 ZENO M10 補進本分類比較池，重點是17-35吋、承重 10kg、氣壓式，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格親民",
      "一般 27/32 吋很夠用"
    ],
    "cons": [
      "不適合 49/57 吋大寬螢幕",
      "10kg 承重餘裕有限"
    ],
    "bestFor": "想依螢幕尺寸、重量、桌板厚度與 VESA 規格挑支架的人。",
    "recommendation": "補充推薦：17-35吋 10KG 氣壓懸臂式螢幕支架 的優勢在價格親民，但仍建議把不適合 49/57 吋大寬螢幕納入取捨。",
    "score": 82,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "35吋",
      "10kg",
      "預算"
    ],
    "releaseDate": "找不到"
  }
  ]);
})();
