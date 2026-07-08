const exchange = {
  source: "ExchangeRate-API",
  date: "2026-07-07 00:02 UTC",
  USD_TWD: 32.078972,
  GBP_TWD: 42.888,
  EUR_TWD: 36.678,
  JPY_TWD: 0.198,
  CNY_TWD: 4.716,
};

const categories = [
  { id: "tv", label: "電視" },
  { id: "soundbar", label: "Soundbar" },
  { id: "fan", label: "電風扇" },
  { id: "circulator", label: "循環扇" },
  { id: "dehumidifier", label: "除濕機" },
  { id: "purifier", label: "空氣清淨機" },
  { id: "robot", label: "掃拖機器人" },
  { id: "vacuum", label: "吸塵器" },
  { id: "wifi", label: "Wi-Fi 分享機" },
  { id: "blender", label: "破壁機" },
  { id: "oven", label: "多功能氣炸烤箱/微波爐" },
  { id: "bidet", label: "免治馬桶" },
];

const pchomeImage = (path) => `https://cs-a.ecimg.tw${path}`;
const pchomeLink = (id) => `https://24h.pchome.com.tw/prod/${id}`;
const twd = (amount) => ({ currency: "TWD", amount, converted: amount, confidence: "可信通路查核價" });
const usd = (amount) => ({ currency: "USD", amount, converted: Math.round(amount * exchange.USD_TWD), confidence: "海外可信通路參考價" });
const eur = (amount) => ({ currency: "EUR", amount, converted: Math.round(amount * exchange.EUR_TWD), confidence: "海外可信通路參考價" });

const products = [
  {
    id: "tv-lg-c5-65",
    category: "tv",
    rank: 1,
    topPick: true,
    budget: "premium",
    channel: "tw",
    brand: "LG",
    model: "OLED65C5PTA",
    name: "65 型 OLED evo C5 4K 智慧顯示器",
    price: twd(49618),
    image: pchomeImage("/items/DPADYE1900JG394/000001_1762971547.jpg"),
    buyUrl: pchomeLink("DPADYE-1900JG394"),
    buyLabel: "PChome",
    specs: ["65 吋 OLED evo", "4K 120Hz", "webOS", "HDMI 2.1 / VRR"],
    description: "OLED 黑位、遊戲規格與串流支援都完整，是客廳主電視的穩健高階選擇。",
    pros: ["畫質與遊戲支援完整", "台灣通路與保固清楚"],
    cons: ["明亮客廳抗反光不如高階 Mini LED", "價格高於 QLED/Mini LED"],
    bestFor: "重視電影、遊戲與長期保固的主客廳。",
    recommendation: "綜合推薦：LG C5 評測口碑穩，OLED 畫質、遊戲功能、台灣售後與價格落點最均衡。",
    score: 94,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["OLED", "遊戲", "電影"],
  },
  {
    id: "tv-samsung-s90f-65",
    category: "tv",
    rank: 2,
    budget: "premium",
    channel: "tw",
    brand: "Samsung",
    model: "QA65S90FAEXZW",
    name: "65 型 S90F OLED 4K 智慧顯示器",
    price: twd(51900),
    image: pchomeImage("/items/DPADEW1900K4WRT/000001_1782056882.jpg"),
    buyUrl: pchomeLink("DPADEW-1900K4WRT"),
    buyLabel: "PChome",
    specs: ["65 吋 OLED", "4K 144Hz", "Tizen", "四組 HDMI 2.1"],
    description: "以同級 OLED 來看售價很有攻擊性，遊戲與亮度表現強，但不支援 Dolby Vision。",
    pros: ["OLED 價格漂亮", "遊戲規格強"],
    cons: ["無 Dolby Vision", "內建音響仍建議搭 Soundbar"],
    bestFor: "遊戲玩家與偏好 Samsung 生態系的人。",
    recommendation: "若預算有限又想進 OLED，這台比多數同尺寸 OLED 更有 CP 值。",
    score: 92,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["OLED", "CP 值", "遊戲"],
  },
  {
    id: "tv-sony-bravia7-65",
    category: "tv",
    rank: 3,
    budget: "premium",
    channel: "tw",
    brand: "Sony",
    model: "Y-65XR70",
    name: "BRAVIA 7 65 型 Mini LED 4K Google TV + 2.1 聲霸組合",
    price: twd(53910),
    image: pchomeImage("/items/DPAD061900IUE3W/000001_1779815988.jpg"),
    buyUrl: pchomeLink("DPAD06-1900IUE3W"),
    buyLabel: "PChome",
    specs: ["65 吋 Mini LED", "XR 處理器", "Google TV", "含 2.1 聲霸組合"],
    description: "Sony 影像處理與動態補償穩定，這筆採 PChome 同型號搭 2.1 聲霸的組合低價。",
    pros: ["影像處理自然", "Mini LED 亮度適合明亮空間"],
    cons: ["價格高於同尺寸國產/中階品牌", "遊戲規格不如 OLED 激進"],
    bestFor: "看電影、運動賽事與串流內容多的家庭。",
    recommendation: "想避開 OLED 烙印疑慮、又要高階影像處理時可優先看這台。",
    score: 90,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["Mini LED", "電影", "組合價"],
  },
  {
    id: "tv-hisense-u7n-65",
    category: "tv",
    rank: 4,
    budget: "mid",
    channel: "tw",
    brand: "Hisense",
    model: "65U7N",
    name: "65 型 U7 Mini LED ULED 4K Google TV",
    price: twd(31999),
    image: pchomeImage("/items/DPAD98A900I5166/000001_1733391621.jpg"),
    buyUrl: pchomeLink("DPAD98-A900I5166"),
    buyLabel: "PChome",
    specs: ["65 吋 Mini LED", "4K 144Hz", "Google TV", "雙杜比"],
    description: "Mini LED、144Hz 與 Google TV 以三萬出頭入手，CP 值很突出。",
    pros: ["規格對價格很滿", "適合明亮客廳"],
    cons: ["品牌售後與調校口碑不如日韓高階", "音質普通"],
    bestFor: "預算三萬上下、想要大尺寸與高亮度的人。",
    recommendation: "本類 CP 值推薦：畫面規格給得足，省下預算可補 Soundbar。",
    score: 88,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["Mini LED", "CP 值", "144Hz"],
  },
  {
    id: "tv-benq-e65-760",
    category: "tv",
    rank: 5,
    budget: "value",
    channel: "tw",
    brand: "BenQ",
    model: "E65-760",
    name: "65 型 4K 120Hz 量子點護眼 Google TV",
    price: twd(24900),
    image: pchomeImage("/items/DPAD0O1900IEK5W/000001_1761401167.jpg"),
    buyUrl: pchomeLink("DPAD0O-1900IEK5W"),
    buyLabel: "PChome",
    specs: ["65 吋 QLED", "4K 120Hz DLG", "Google TV", "護眼模式"],
    description: "台灣品牌、價格好入手，適合非發燒級的家庭客廳或主臥。",
    pros: ["價格親民", "護眼與本地品牌售後加分"],
    cons: ["不是 Mini LED/OLED", "極暗或 HDR 場景層次有限"],
    bestFor: "預算有限、重視大尺寸與基本智慧功能。",
    recommendation: "若預算要壓在 2.5 萬左右，這台是穩健的大尺寸選擇。",
    score: 84,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["QLED", "大尺寸", "本地品牌"],
  },
  {
    id: "soundbar-samsung-q990f",
    category: "soundbar",
    rank: 1,
    topPick: true,
    budget: "premium",
    channel: "tw",
    brand: "Samsung",
    model: "HW-Q990F",
    name: "11.1.4 聲道旗艦 Soundbar",
    price: twd(44900),
    image: pchomeImage("/items/DMAAODA900JMDR5/000001_1773978957.jpg"),
    buyUrl: pchomeLink("DMAAOD-A900JMDR5"),
    buyLabel: "PChome",
    specs: ["11.1.4 聲道", "無線後環繞", "無線重低音", "Dolby Atmos / DTS:X"],
    description: "一次補齊天空聲道、後環繞與低頻，是最接近家庭劇院的一體式方案。",
    pros: ["包圍感最完整", "Samsung TV 可用 Q-Symphony"],
    cons: ["價格高", "後環繞仍需擺位與電源"],
    bestFor: "客廳電影、遊戲與球賽沉浸感。",
    recommendation: "綜合推薦：Q990F 評價強，含後環繞、重低音與 Atmos，折扣後雖高價但一次到位且售後穩。",
    score: 95,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["Atmos", "後環繞", "旗艦"],
  },
  {
    id: "soundbar-samsung-q800h",
    category: "soundbar",
    rank: 2,
    budget: "mid",
    channel: "tw",
    brand: "Samsung",
    model: "HW-Q800H/ZW",
    name: "5.1.2 聲道 Q 系列 Soundbar 家庭劇院",
    price: twd(35900),
    image: pchomeImage("/items/DMAAODA900K53X0/000001_1782210112.jpg"),
    buyUrl: pchomeLink("DMAAOD-A900K53X0"),
    buyLabel: "PChome",
    specs: ["5.1.2 聲道", "無線重低音", "Dolby Atmos", "Q-Symphony"],
    description: "改列正常新品頁的 Q 系列 5.1.2 聲道聲霸，適合想升級 Atmos 與重低音的客廳。",
    pros: ["聲道規格比入門聲霸完整", "Samsung TV 搭配性好"],
    cons: ["沒有獨立後環繞喇叭", "沉浸感不如 Q990F"],
    bestFor: "想升級 Atmos 與重低音，但不需要完整後環繞的人。",
    recommendation: "均衡推薦：比入門聲霸更完整，並採用正常新品購買頁。",
    score: 91,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["Atmos", "均衡", "後環繞"],
  },
  {
    id: "soundbar-sony-b600",
    category: "soundbar",
    rank: 3,
    budget: "value",
    channel: "tw",
    brand: "Sony",
    model: "HT-B600",
    name: "BRAVIA Theatre Bar 6 3.1.2 聲道",
    price: twd(11900),
    image: pchomeImage("/items/DMAAODA900JMC1Q/000001_1781726516.jpg"),
    buyUrl: pchomeLink("DMAAOD-A900JMC1Q"),
    buyLabel: "PChome",
    specs: ["3.1.2 聲道", "Dolby Atmos", "無線重低音", "BRAVIA 連動"],
    description: "預算友善且有獨立重低音，適合把電視內建聲音升級到清楚有力。",
    pros: ["價格好入手", "對白與低頻改善明顯"],
    cons: ["非完整後環繞", "高度效果有限"],
    bestFor: "中小客廳與 Sony TV 用戶。",
    recommendation: "CP 值推薦：萬元出頭補足對白與低頻最有感。",
    score: 87,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["CP 值", "重低音", "對白"],
  },
  {
    id: "soundbar-sonos-arc-ultra",
    category: "soundbar",
    rank: 4,
    budget: "premium",
    channel: "tw",
    brand: "Sonos",
    model: "Arc Ultra",
    name: "旗艦級無線智能聲霸",
    price: twd(41900),
    image: pchomeImage("/items/DMAAO6A900IE4HM/000001_1740554860.jpg"),
    buyUrl: pchomeLink("DMAAO6-A900IE4HM"),
    buyLabel: "PChome",
    specs: ["單件式 Soundbar", "Dolby Atmos", "Wi-Fi 串流", "Sonos 生態系"],
    description: "音樂串流與多房間體驗強，外型俐落，適合不想擺重低音與後喇叭的人。",
    pros: ["App 與串流體驗佳", "單件式好擺"],
    cons: ["完整低頻需另購 Sub", "總價容易拉高"],
    bestFor: "音樂、串流與簡潔客廳。",
    recommendation: "若你重視質感與多房間音響，Sonos 比傳統劇院聲霸更順手。",
    score: 89,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["單件式", "音樂", "Wi-Fi"],
  },
  {
    id: "soundbar-jbl-500mk2",
    category: "soundbar",
    rank: 5,
    budget: "mid",
    channel: "tw",
    brand: "JBL",
    model: "BAR 500 MK2",
    name: "5.1 聲道 Soundbar",
    price: twd(23560),
    image: pchomeImage("/items/DMAAHGA900JCY9J/000001_1760777146.jpg"),
    buyUrl: pchomeLink("DMAAHG-A900JCY9J"),
    buyLabel: "PChome",
    specs: ["5.1 聲道", "無線重低音", "Dolby Atmos 模擬", "藍牙/Wi-Fi"],
    description: "JBL 低頻與電影感討喜，適合想要震撼感但不想上旗艦環繞的人。",
    pros: ["低頻量感好", "電影與遊戲氣氛強"],
    cons: ["環繞定位不如後喇叭系統", "音樂細緻度非強項"],
    bestFor: "重視動作片、遊戲與低頻衝擊。",
    recommendation: "中價位想要爽度，JBL 是很直接的選項。",
    score: 86,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["低頻", "電影", "中價位"],
  },
  {
    id: "fan-panasonic-fh16",
    category: "fan",
    rank: 1,
    topPick: true,
    budget: "mid",
    channel: "tw",
    brand: "Panasonic",
    model: "F-H16GND",
    name: "16 吋 DC 微電腦定時電風扇",
    price: twd(3272),
    image: pchomeImage("/items/DMAB30A900EOQ24/000001_1753338098.png"),
    buyUrl: pchomeLink("DMAB30-A900EOQ24"),
    buyLabel: "PChome",
    specs: ["16 吋", "DC 變頻", "負離子", "ECO 溫控"],
    description: "功能、靜音、耗電與品牌售後都均衡，是不容易踩雷的主力立扇。",
    pros: ["穩定耐用", "風量與靜音平衡"],
    cons: ["造型保守", "價格比入門 DC 扇高"],
    bestFor: "客廳、臥室日常長時間使用。",
    recommendation: "綜合推薦：Panasonic 售後維修穩，三千多元有 DC、遙控與足夠風量，長期使用 CP 最好。",
    score: 92,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["DC", "靜音", "溫控"],
  },
  {
    id: "fan-sharp-pv16",
    category: "fan",
    rank: 2,
    budget: "mid",
    channel: "tw",
    brand: "SHARP",
    model: "PJ-PV16AT-W",
    name: "16 吋自動除菌離子 DC 電風扇",
    price: twd(3890),
    image: pchomeImage("/items/DMABPEA900JYOWP/000001_1779868844.jpg"),
    buyUrl: pchomeLink("DMABPE-A900JYOWP"),
    buyLabel: "PChome",
    specs: ["16 吋", "DC 馬達", "Plasmacluster", "遙控"],
    description: "主打除菌離子與節能 DC，適合想兼顧風扇與空氣感受的人。",
    pros: ["附加空氣淨化概念", "價格合理"],
    cons: ["除菌離子效果不等於空氣清淨機", "風感偏傳統"],
    bestFor: "臥室、書房與有 SHARP 偏好的使用者。",
    recommendation: "比入門扇多一些空氣循環附加功能，價差仍可接受。",
    score: 88,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["DC", "除菌離子", "中價位"],
  },
  {
    id: "fan-dyson-am12",
    category: "fan",
    rank: 3,
    budget: "premium",
    channel: "tw",
    brand: "Dyson",
    model: "AM12",
    name: "Cool CF1 智能涼風扇",
    price: twd(9990),
    image: pchomeImage("/items/DMAU3CA900J971J/000001_1767758265.jpg"),
    buyUrl: pchomeLink("DMAU3C-A900J971J"),
    buyLabel: "PChome",
    specs: ["無葉片", "智慧控制", "擺頭", "易清潔"],
    description: "外型與安全性佳，適合有小孩、寵物或重視空間美感的家庭。",
    pros: ["安全好清潔", "外型俐落"],
    cons: ["價格高", "同價位風量 CP 不如傳統扇"],
    bestFor: "重視安全、設計與清潔便利。",
    recommendation: "若風量不是唯一優先，Dyson 的設計與易清潔值得考慮。",
    score: 84,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["無葉片", "設計", "安全"],
  },
  {
    id: "fan-heran-hdf16",
    category: "fan",
    rank: 4,
    budget: "value",
    channel: "tw",
    brand: "HERAN",
    model: "HDF-16S6",
    name: "16 吋 ECO 溫控智能變頻 DC 風扇",
    price: twd(1480),
    image: pchomeImage("/items/DMABKUA900F4MB2/000001_1760585255.jpg"),
    buyUrl: pchomeLink("DMABKU-A900F4MB2"),
    buyLabel: "PChome",
    specs: ["16 吋", "DC 變頻", "ECO 溫控", "遙控"],
    description: "低價位就有 DC 變頻與溫控，適合租屋或多房間配置。",
    pros: ["價格低", "功能給得完整"],
    cons: ["質感與耐用口碑不如日系", "風切聲控制普通"],
    bestFor: "租屋、多房間補扇、預算優先。",
    recommendation: "CP 值入門款：花小錢補齊 DC 與遙控。",
    score: 82,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["CP 值", "DC", "租屋"],
  },
  {
    id: "fan-nwt-wpf16",
    category: "fan",
    rank: 5,
    budget: "value",
    channel: "tw",
    brand: "NWT",
    model: "WPF-16S7",
    name: "16 吋 DC 變頻直流電風扇",
    price: twd(1290),
    image: pchomeImage("/items/DMABP5A900HDZSK/000001_1760322125.jpg"),
    buyUrl: pchomeLink("DMABP5-A900HDZSK"),
    buyLabel: "PChome",
    specs: ["16 吋", "DC 馬達", "多段風量", "基本遙控"],
    description: "價格壓得很低，適合把風扇當消耗型家電的人。",
    pros: ["便宜", "基本功能齊"],
    cons: ["品牌與售後能見度較低", "質感普通"],
    bestFor: "預算極限、備用扇或短期租屋。",
    recommendation: "若只想要便宜 DC 立扇，這台很有價格優勢。",
    score: 78,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["低價", "DC", "備用"],
  },
  {
    id: "circ-vornado-660",
    category: "circulator",
    rank: 1,
    topPick: true,
    budget: "mid",
    channel: "tw",
    brand: "Vornado",
    model: "660",
    name: "渦流空氣循環機",
    price: twd(4032),
    image: pchomeImage("/items/QBAF31A9008YQOZ/000001_1765269816.jpg"),
    buyUrl: pchomeLink("QBAF31-A9008YQOZ"),
    buyLabel: "PChome",
    specs: ["渦流循環", "四段風速", "適合中大空間", "機械旋鈕"],
    description: "經典強力循環扇，搭冷氣能快速打散室內溫差。",
    pros: ["循環距離強", "耐用口碑好"],
    cons: ["無遙控", "低速仍有存在感"],
    bestFor: "客廳、餐廳或開放式空間搭配冷氣。",
    recommendation: "綜合推薦：Vornado 660 循環口碑與耐用度穩，價格高於小扇但效果明顯，售後與耗材風險低。",
    score: 92,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["強循環", "冷氣搭配", "經典"],
  },
  {
    id: "circ-iris-sc15t",
    category: "circulator",
    rank: 2,
    budget: "value",
    channel: "tw",
    brand: "IRIS OHYAMA",
    model: "PCF-SC15T",
    name: "遙控空氣循環扇",
    price: twd(1990),
    image: pchomeImage("/items/DSBE18A900J27XM/000001_1754619793.jpg"),
    buyUrl: pchomeLink("DSBE18-A900J27XM"),
    buyLabel: "PChome",
    specs: ["桌上型", "遙控", "上下左右擺頭", "小坪數"],
    description: "小型空間很好用，遙控與擺頭讓使用便利性高。",
    pros: ["體積小", "價格合理且有遙控"],
    cons: ["大客廳推送距離有限", "清潔拆洗普通"],
    bestFor: "臥室、書房、小坪數循環。",
    recommendation: "小房間 CP 值推薦，不需要 Vornado 那種強推力時更好用。",
    score: 88,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["小空間", "遙控", "CP 值"],
  },
  {
    id: "circ-panasonic-fe10",
    category: "circulator",
    rank: 3,
    budget: "mid",
    channel: "tw",
    brand: "Panasonic",
    model: "F-E10HMD",
    name: "10 吋 DC 直流遙控空氣循環扇",
    price: twd(3990),
    image: pchomeImage("/items/DMABLYA900EV5DV/000001_1649666306.jpg"),
    buyUrl: pchomeLink("DMABLY-A900EV5DV"),
    buyLabel: "PChome",
    specs: ["10 吋", "DC 馬達", "遙控", "立體擺頭"],
    description: "日系品牌與 DC 靜音優勢，適合臥室與長時間低速循環。",
    pros: ["安靜穩定", "品牌售後佳"],
    cons: ["價格偏高", "強循環不如 Vornado"],
    bestFor: "重視靜音、品牌與保固。",
    recommendation: "臥室用比強力型更合適，低速循環舒服。",
    score: 86,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["DC", "靜音", "遙控"],
  },
  {
    id: "circ-balmuda-cirq",
    category: "circulator",
    rank: 4,
    budget: "premium",
    channel: "tw",
    brand: "BALMUDA",
    model: "EGF-3300",
    name: "GreenFan Cirq 空氣循環扇",
    price: twd(6990),
    image: pchomeImage("/items/DSBE18A900J154H/000001_1754540295.jpg"),
    buyUrl: pchomeLink("DSBE18-A900J154H"),
    buyLabel: "PChome",
    specs: ["渦輪循環", "低噪設計", "大角度俯仰", "設計家電"],
    description: "價格高但設計感強，風感與擺放質感優於一般循環扇。",
    pros: ["外型好看", "風感細膩"],
    cons: ["價格高", "純推力 CP 值不如 Vornado"],
    bestFor: "開放空間、客廳與重視家電美感的人。",
    recommendation: "願意為設計感付費時可選，功能與外觀都不突兀。",
    score: 83,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["設計", "低噪", "高質感"],
  },
  {
    id: "circ-iris-hd15",
    category: "circulator",
    rank: 5,
    budget: "value",
    channel: "tw",
    brand: "IRIS OHYAMA",
    model: "PCF-HD15",
    name: "強力氣流循環扇",
    price: twd(990),
    image: pchomeImage("/items/DEEO01A900GCMTC/000001_1723452738.jpg"),
    buyUrl: pchomeLink("DEEO01-A900GCMTC"),
    buyLabel: "PChome",
    specs: ["15cm 級", "手動調整", "強力氣流", "小坪數"],
    description: "低價、簡單、風量夠，適合冷氣旁補循環。",
    pros: ["便宜", "小巧好移動"],
    cons: ["功能簡單", "無智慧/遙控便利性"],
    bestFor: "預算有限的小房間與租屋。",
    recommendation: "千元內補冷氣循環，很難要求更多。",
    score: 80,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["低價", "小巧", "租屋"],
  },
  {
    id: "dh-panasonic-yv32nn",
    category: "dehumidifier",
    rank: 1,
    topPick: true,
    budget: "mid",
    channel: "tw",
    brand: "Panasonic",
    model: "F-YV32NN",
    name: "16 公升高效型變頻除濕機",
    price: twd(14872),
    image: pchomeImage("/items/DMBQ3PA900J0L88/000001_1776323540.jpg"),
    buyUrl: pchomeLink("DMBQ3P-A900J0L88"),
    buyLabel: "PChome",
    specs: ["16L 級", "變頻", "高效除濕", "連續排水"],
    description: "台灣潮濕環境常見安心牌，除濕效率、耗電與售後都平衡。",
    pros: ["變頻節能", "品牌維修方便"],
    cons: ["無清淨複合功能", "價格高於基本款"],
    bestFor: "客廳、主臥與日常長時間除濕。",
    recommendation: "綜合推薦：Panasonic 容量、能效、台灣售後與價格最均衡；除濕機長期穩定比最低價更重要。",
    score: 92,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["變頻", "節能", "主力款"],
  },
  {
    id: "dh-lg-de221",
    category: "dehumidifier",
    rank: 2,
    budget: "premium",
    channel: "tw",
    brand: "LG",
    model: "DE221MWE0",
    name: "22 公升 PuriCare 雙變頻除濕機",
    price: twd(20900),
    image: pchomeImage("/items/DMBQ4NA900JMY77/000001_1783337653.jpg"),
    buyUrl: pchomeLink("DMBQ4N-A900JMY77"),
    buyLabel: "PChome",
    specs: ["22L 級", "雙變頻", "一級能效", "PuriCare"],
    description: "大坪數與高濕環境更合適，外型與智慧功能也比傳統除濕機漂亮。",
    pros: ["除濕量大", "能效與外型佳"],
    cons: ["價格高", "機身較大"],
    bestFor: "大坪數客廳、連續高濕環境。",
    recommendation: "坪數較大或常曬衣，LG 大容量款會更從容。",
    score: 91,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["大容量", "變頻", "智慧"],
  },
  {
    id: "dh-mitsubishi-ehv220",
    category: "dehumidifier",
    rank: 3,
    budget: "premium",
    channel: "tw",
    brand: "Mitsubishi",
    model: "MJ-EHV220KX-TW",
    name: "22.5L 日製變頻空氣清淨除濕機",
    price: twd(27810),
    image: pchomeImage("/items/DMBQ02A900JO0NA/000001_1769056503.jpg"),
    buyUrl: pchomeLink("DMBQ02-A900JO0NA"),
    buyLabel: "PChome",
    specs: ["22.5L 級", "日製", "HEPA 清淨", "變頻"],
    description: "兼具清淨與除濕，價格高但用料與口碑強。",
    pros: ["日製質感", "清淨除濕二合一"],
    cons: ["價格最高", "濾網耗材需納入成本"],
    bestFor: "預算充足、希望一機兼顧清淨與除濕。",
    recommendation: "旗艦推薦：高濕又有過敏需求時可以一次解決。",
    score: 90,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["日製", "清淨", "旗艦"],
  },
  {
    id: "dh-lg-dd201",
    category: "dehumidifier",
    rank: 4,
    budget: "mid",
    channel: "tw",
    brand: "LG",
    model: "DD201MEE0",
    name: "19.6 公升 PuriCare 雙變頻除濕機",
    price: twd(21300),
    image: pchomeImage("/items/DMBQ4OA900JX7GH/000001_1782957608.jpg"),
    buyUrl: pchomeLink("DMBQ4O-A900JX7GH"),
    buyLabel: "PChome",
    specs: ["19.6L 級", "雙變頻", "一級能效", "Wi-Fi"],
    description: "比 22L 款省一些預算，仍保有 LG 變頻與智慧功能。",
    pros: ["容量足夠多數家庭", "外型與操作友善"],
    cons: ["售價接近大容量款", "清淨能力非主打"],
    bestFor: "中大坪數、重視外型與智慧控制。",
    recommendation: "不需要最大容量時，這台是 LG 系列中較均衡的選擇。",
    score: 87,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["變頻", "智慧", "中大坪數"],
  },
  {
    id: "dh-whirlpool-wdee10",
    category: "dehumidifier",
    rank: 5,
    budget: "value",
    channel: "tw",
    brand: "Whirlpool",
    model: "WDEE10TW",
    name: "10L 第六感智能除濕機",
    price: twd(5690),
    image: pchomeImage("/items/DMBQ34A900HD2SP/000001_1767074559.jpg"),
    buyUrl: pchomeLink("DMBQ34-A900HD2SP"),
    buyLabel: "PChome",
    specs: ["10L 級", "第六感智能", "小坪數", "基本除濕"],
    description: "價格漂亮，適合小房間或不需要全屋大除濕能力的使用情境。",
    pros: ["便宜", "小坪數夠用"],
    cons: ["容量較小", "高濕連續除濕較吃力"],
    bestFor: "臥室、書房、衣櫃附近補除濕。",
    recommendation: "小坪數 CP 值推薦，大坪數請往 16L 以上看。",
    score: 82,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["小坪數", "低價", "CP 值"],
  },
  {
    id: "ap-coway-ap1019",
    category: "purifier",
    rank: 1,
    topPick: true,
    budget: "value",
    channel: "tw",
    brand: "Coway",
    model: "AP-1019C",
    name: "5-10 坪綠淨力玩美雙禦空氣清淨機",
    price: twd(5428),
    image: pchomeImage("/items/DMAU3EA900AU9PA/000001_1782107657.jpg"),
    buyUrl: pchomeLink("DMAU3E-A900AU9PA"),
    buyLabel: "PChome",
    specs: ["5-10 坪", "HEPA/活性碳", "雙禦濾網", "小中坪數"],
    description: "價格、濾網取得與品牌口碑平衡，是小家庭最不容易買錯的清淨機。",
    pros: ["耗材好找", "價格合理"],
    cons: ["大客廳不夠力", "智慧功能較少"],
    bestFor: "臥室、書房與中小坪數空間。",
    recommendation: "綜合推薦：Coway AP-1019C 價格低、濾網成本可控、通路與口碑穩，小中坪數最有 CP。",
    score: 91,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["CP 值", "耗材", "小中坪數"],
  },
  {
    id: "ap-blueair-3450i",
    category: "purifier",
    rank: 2,
    budget: "mid",
    channel: "tw",
    brand: "Blueair",
    model: "BlueMax 3450i",
    name: "14-29 坪智能 Wi-Fi 空氣清淨機",
    price: twd(11950),
    image: pchomeImage("/items/DMAUE4A900I5SSZ/000001_1780654673.jpg"),
    buyUrl: pchomeLink("DMAUE4-A900I5SSZ"),
    buyLabel: "PChome",
    specs: ["14-29 坪", "Wi-Fi", "HEPASilent", "低噪"],
    description: "Blueair 強項是大風量與低噪，適合客廳或開放式空間。",
    pros: ["大坪數效率好", "運轉安靜"],
    cons: ["耗材成本較高", "外型較家電感"],
    bestFor: "客廳、開放式餐廚與過敏家庭。",
    recommendation: "大坪數中價位推薦，比小型清淨機更能有效換氣。",
    score: 90,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["大坪數", "低噪", "Wi-Fi"],
  },
  {
    id: "ap-dyson-tp11",
    category: "purifier",
    rank: 3,
    budget: "premium",
    channel: "tw",
    brand: "Dyson",
    model: "TP11",
    name: "Purifier Cool 二合一涼風智能空氣清淨機",
    price: twd(11900),
    image: pchomeImage("/items/DMAU3CA900K0T3T/000001_1779087672.jpg"),
    buyUrl: pchomeLink("DMAU3C-A900K0T3T"),
    buyLabel: "PChome",
    specs: ["清淨 + 涼風", "智慧偵測", "無葉片", "App 控制"],
    description: "清淨與風扇二合一，空間有限時比多擺一台風扇更清爽。",
    pros: ["一機兩用", "外型與易清潔佳"],
    cons: ["清淨 CP 值不如方盒型", "濾網成本較高"],
    bestFor: "臥室、書房與重視設計感的人。",
    recommendation: "不是最便宜的清淨方案，但空間整潔與使用體驗加分。",
    score: 86,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["二合一", "無葉片", "設計"],
  },
  {
    id: "ap-philips-ac2936",
    category: "purifier",
    rank: 4,
    budget: "mid",
    channel: "tw",
    brand: "Philips",
    model: "AC2936",
    name: "17 坪 360 度高效過濾空氣清淨機",
    price: twd(7899),
    image: pchomeImage("/items/DMAC2OA900GH5RL/000001_1781800112.jpg"),
    buyUrl: pchomeLink("DMAC2O-A900GH5RL"),
    buyLabel: "PChome",
    specs: ["17 坪", "360 度進風", "奈米級濾網", "空氣品質顯示"],
    description: "常見品牌、價位合理、坪數覆蓋實用，適合中型房間。",
    pros: ["價格與覆蓋坪數平衡", "操作直覺"],
    cons: ["耗材需定期更換", "外型占地較大"],
    bestFor: "主臥、中型客廳或兒童房。",
    recommendation: "想要國際品牌與合理價格，AC2936 是安全牌。",
    score: 85,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["中坪數", "360 度", "安全牌"],
  },
  {
    id: "ap-coway-noble",
    category: "purifier",
    rank: 5,
    budget: "premium",
    channel: "tw",
    brand: "Coway",
    model: "AP-2023K",
    name: "Noble 4D 美學空氣清淨機",
    price: twd(27416),
    image: pchomeImage("/items/DMAU3EA900I6ITM/000001_1782876939.jpg"),
    buyUrl: pchomeLink("DMAU3E-A900I6ITM"),
    buyLabel: "PChome",
    specs: ["15-25 坪", "4D 進出風", "美型設計", "高階濾網"],
    description: "外型與大坪數兼顧，適合放在客廳而不想破壞裝潢。",
    pros: ["外型高級", "大坪數與偵測能力強"],
    cons: ["價格高", "耗材成本需預留"],
    bestFor: "大客廳、開放式空間與重視裝潢一致性。",
    recommendation: "高階推薦：外型與性能都要，Noble 比一般方盒更好融入空間。",
    score: 87,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["大坪數", "美型", "旗艦"],
  },
  {
    id: "robot-roborock-qrevo-c",
    category: "robot",
    rank: 1,
    topPick: true,
    budget: "mid",
    channel: "tw",
    brand: "Roborock",
    model: "Qrevo C",
    name: "全能掃拖機器人",
    price: twd(12999),
    image: pchomeImage("/items/DMBL1CA900IM30C/000001_1782870295.jpg"),
    buyUrl: pchomeLink("DMBL1C-A900IM30C"),
    buyLabel: "PChome",
    specs: ["12000Pa", "自動洗烘拖布", "伸縮機械臂", "雙重零纏繞"],
    description: "基站功能完整、價格合理，掃拖自動化程度已經很高。",
    pros: ["功能完整", "價格甜點"],
    cons: ["避障與旗艦仍有差距", "基站占空間"],
    bestFor: "硬地板、寵物毛與日常維護清潔。",
    recommendation: "高 CP 值推薦：萬元出頭就有完整基站，預算有限時很有競爭力。",
    score: 92,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["自動洗拖", "CP 值", "寵物"],
  },
  {
    id: "robot-roborock-qrevo-l",
    category: "robot",
    rank: 2,
    budget: "value",
    channel: "tw",
    brand: "Roborock",
    model: "Qrevo L",
    name: "全能掃拖機器人",
    price: twd(9999),
    image: pchomeImage("/items/DMBT0GA900J1M89/000001_1782870189.jpg"),
    buyUrl: pchomeLink("DMBT0G-A900J1M89"),
    buyLabel: "PChome",
    specs: ["10000Pa", "自動洗烘拖布", "自動集塵", "零纏繞邊刷"],
    description: "入門全能基站款，適合想第一次升級掃拖機器人的家庭。",
    pros: ["價格低", "基站功能夠用"],
    cons: ["邊角與避障不如高階", "拖地重污仍需人工"],
    bestFor: "小家庭、租屋與首次購買。",
    recommendation: "預算優先時選它，先把每日維護交給機器。",
    score: 88,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["入門全能", "自動集塵", "低價"],
  },
  {
    id: "robot-ecovacs-t50",
    category: "robot",
    rank: 3,
    budget: "mid",
    channel: "tw",
    brand: "Ecovacs",
    model: "DEEBOT T50 PRO OMNI",
    name: "超薄全覆蓋全能旗艦掃拖機器人",
    price: twd(14999),
    image: pchomeImage("/items/DMBL0LA900IDIPA/000001_1763087835.jpg"),
    buyUrl: pchomeLink("DMBL0L-A900IDIPA"),
    buyLabel: "PChome",
    specs: ["超薄 81mm", "高溫洗烘", "沿邊清潔", "OMNI 基站"],
    description: "低機身更適合鑽沙發床底，拖地與基站功能也完整。",
    pros: ["超薄機身", "邊角覆蓋佳"],
    cons: ["App 生態偏複雜", "耗材成本需留意"],
    bestFor: "家具底部低、邊角多的家庭。",
    recommendation: "若家具間隙低，T50 的超薄設計比高吸力更關鍵。",
    score: 87,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["超薄", "沿邊", "基站"],
  },
  {
    id: "robot-dreame-d30",
    category: "robot",
    rank: 4,
    budget: "mid",
    channel: "tw",
    brand: "Dreame",
    model: "D30 Ultra",
    name: "全能掃拖機器人",
    price: twd(11980),
    image: pchomeImage("/items/DMBL3EA900JY43L/000001_1780035614.jpg"),
    buyUrl: pchomeLink("DMBL3E-A900JY43L"),
    buyLabel: "PChome",
    specs: ["25000Pa", "熱風烘乾", "LDS 雷射", "智慧避障"],
    description: "吸力規格漂亮，價格落在中階，是 Dreame 的高 CP 選擇。",
    pros: ["吸力標示高", "價格不貴"],
    cons: ["避障仍需實際居家調校", "品牌服務需確認通路"],
    bestFor: "硬地板、毛髮與灰塵量較大的家庭。",
    recommendation: "重視吸力規格與基站功能，D30 Ultra 值得列入比較。",
    score: 86,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["高吸力", "中價位", "雷射導航"],
  },
  {
    id: "robot-narwal-z-ultra",
    category: "robot",
    rank: 5,
    budget: "premium",
    channel: "tw",
    brand: "Narwal",
    model: "Freo Z Ultra",
    name: "雙目 AI 掃拖機器人",
    price: twd(23888),
    image: pchomeImage("/items/DMBL4UA900JA072/000001_1766479545.jpg"),
    buyUrl: pchomeLink("DMBL4U-A900JA072"),
    buyLabel: "PChome",
    specs: ["雙目 AI", "熱水熱烘", "零纏繞 2.0", "自動集塵"],
    description: "主打 AI 與拖地體驗，適合希望機器少出錯、少人工介入的人。",
    pros: ["避障與拖地體驗佳", "基站高階"],
    cons: ["價格高", "掃吸 CP 值不如中階款"],
    bestFor: "障礙物多、重視拖地與低干預。",
    recommendation: "高階推薦：如果家中雜物多，AI 避障比單純高吸力更有感。",
    score: 85,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["AI 避障", "熱水洗拖", "旗艦"],
  },
  {
    id: "vac-dyson-v12",
    category: "vacuum",
    rank: 1,
    topPick: true,
    budget: "mid",
    channel: "tw",
    brand: "Dyson",
    model: "V12 Detect Slim Fluffy SV46",
    name: "輕量智能無線吸塵器",
    price: twd(16888),
    image: pchomeImage("/items/DMAX001900JVQDR/000001_1775552057.jpg"),
    buyUrl: pchomeLink("DMAX00-1900JVQDR"),
    buyLabel: "PChome",
    specs: ["輕量無線", "雷射顯塵", "HEPA 過濾", "多吸頭"],
    description: "重量、吸力、顯塵與維修支援平衡，是多數家庭乾吸主力機。",
    pros: ["輕巧好拿", "顯塵很實用"],
    cons: ["價格高", "集塵筒容量較小"],
    bestFor: "日常灰塵、毛髮、地板與床墊快速清潔。",
    recommendation: "綜合推薦：Dyson V12 輕量、雷射偵測與清潔評價穩，台灣通路售後清楚，比更大機種更常被拿起來用。",
    score: 93,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["輕量", "顯塵", "乾吸"],
  },
  {
    id: "vac-lg-a9x",
    category: "vacuum",
    rank: 2,
    budget: "mid",
    channel: "tw",
    brand: "LG",
    model: "CordZero A9X-AUTO",
    name: "自動集塵無線吸塵器",
    price: twd(17900),
    image: pchomeImage("/items/DMAX8KA900HLX9W/000001_1744871467.jpg"),
    buyUrl: pchomeLink("DMAX8K-A900HLX9W"),
    buyLabel: "PChome",
    specs: ["280W 吸力", "自動集塵", "LCD 螢幕", "除蟎吸頭"],
    description: "自動集塵減少倒灰粉塵，對過敏家庭更友善。",
    pros: ["自動集塵方便", "配件收納完整"],
    cons: ["基站占空間", "手持重量感比輕量機明顯"],
    bestFor: "過敏家庭、重視倒灰便利的人。",
    recommendation: "若討厭倒灰，LG 的自動集塵比單純高吸力更有感。",
    score: 90,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["自動集塵", "除蟎", "乾吸"],
  },
  {
    id: "vac-lg-a9k",
    category: "vacuum",
    rank: 3,
    budget: "value",
    channel: "tw",
    brand: "LG",
    model: "CordZero A9K-MOP3",
    name: "寵物家庭濕拖無線吸塵器",
    price: twd(11900),
    image: pchomeImage("/items/DMAX8KA900JI8XJ/000001_1764582934.jpg"),
    buyUrl: pchomeLink("DMAX8K-A900JI8XJ"),
    buyLabel: "PChome",
    specs: ["無線吸塵", "濕拖吸頭", "寵物家庭", "多配件"],
    description: "價格比 A9X 低，仍保有 LG CordZero 基本優勢與濕拖配件。",
    pros: ["價格合理", "可吸可拖"],
    cons: ["無自動集塵", "濕拖不是洗地機等級"],
    bestFor: "小家庭、寵物毛與輕度濕拖。",
    recommendation: "想要 LG 品牌但預算有限，A9K 系列比旗艦更實際。",
    score: 86,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["CP 值", "寵物", "濕拖"],
  },
  {
    id: "vac-tineco-s7",
    category: "vacuum",
    rank: 4,
    budget: "premium",
    channel: "tw",
    brand: "Tineco",
    model: "Switch S7 Stretch",
    name: "無線多工平躺速乾洗地吸塵器",
    price: twd(18880),
    image: pchomeImage("/items/DMAXB5A900JFCJP/000001_1762402803.jpg"),
    buyUrl: pchomeLink("DMAXB5-A900JFCJP"),
    buyLabel: "PChome",
    specs: ["22000Pa", "平躺洗地", "85 度熱水洗", "5 分鐘速乾"],
    description: "偏洗地機定位，對廚房油污、毛髮與硬地板濕拖更強。",
    pros: ["洗地能力強", "自清潔便利"],
    cons: ["不適合取代輕量乾吸", "機身與基站較大"],
    bestFor: "硬地板、廚房、寵物腳印與濕污。",
    recommendation: "若你痛點是拖地不是吸灰，Tineco 比 Dyson 類乾吸更對題。",
    score: 87,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["洗地", "熱水洗", "寵物"],
  },
  {
    id: "vac-dyson-submarine",
    category: "vacuum",
    rank: 5,
    budget: "premium",
    channel: "tw",
    brand: "Dyson",
    model: "V12s Detect Slim Submarine",
    name: "乾濕全能洗地吸塵器",
    price: twd(22900),
    image: pchomeImage("/items/DMBF05A900GCL8W/000001_1780460543.jpg"),
    buyUrl: pchomeLink("DMBF05-A900GCL8W"),
    buyLabel: "PChome",
    specs: ["乾吸 + 濕拖", "Submarine 洗地頭", "顯塵", "雙主吸頭"],
    description: "把 Dyson 乾吸優勢與洗地頭整合，適合想一套系統解決的人。",
    pros: ["乾吸能力強", "一套配件完整"],
    cons: ["價格高", "洗地便利性不如專門洗地機"],
    bestFor: "已鎖定 Dyson 生態、想補濕拖功能。",
    recommendation: "若乾吸仍是主需求，Submarine 比純洗地機更通用。",
    score: 85,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["乾濕", "顯塵", "旗艦"],
  },
  {
    id: "wifi-asus-be58u",
    category: "wifi",
    rank: 1,
    topPick: true,
    budget: "value",
    channel: "tw",
    brand: "ASUS",
    model: "RT-BE58U",
    name: "BE3600 AiMesh 雙頻 Wi-Fi 7 路由器",
    price: twd(3499),
    image: pchomeImage("/items/DRAFLPA900JKWXK/000001_1782952070.jpg"),
    buyUrl: pchomeLink("DRAFLP-A900JKWXK"),
    buyLabel: "PChome",
    specs: ["Wi-Fi 7", "BE3600", "AiMesh", "Gigabit"],
    description: "以低價進入 Wi-Fi 7，ASUS 韌體與 AiMesh 延展性好。",
    pros: ["價格低", "韌體功能完整"],
    cons: ["雙頻非高階三頻", "無多 10G 埠"],
    bestFor: "小家庭、公寓與想低成本升級 Wi-Fi 7。",
    recommendation: "綜合推薦：ASUS RT-BE58U 價格低、Wi-Fi 7 基礎規格夠，韌體與保固支援成熟，多數家庭升級 CP 最好。",
    score: 91,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["Wi-Fi 7", "CP 值", "AiMesh"],
  },
  {
    id: "wifi-tplink-be400",
    category: "wifi",
    rank: 2,
    budget: "value",
    channel: "tw",
    brand: "TP-Link",
    model: "Archer BE400",
    name: "BE6500 雙頻雙 2.5G Wi-Fi 7 路由器",
    price: twd(4399),
    image: pchomeImage("/items/DRAN5BA900HSVDW/000001_1780372077.jpg"),
    buyUrl: pchomeLink("DRAN5B-A900HSVDW"),
    buyLabel: "PChome",
    specs: ["Wi-Fi 7", "BE6500", "雙 2.5G", "EasyMesh"],
    description: "雙 2.5G 埠對 NAS 或高速寬頻更友善，價格仍在入門中階。",
    pros: ["2.5G 埠實用", "價格合理"],
    cons: ["雙頻非三頻", "進階資安功能可能需訂閱"],
    bestFor: "有 1G 以上寬頻或 NAS 的家庭。",
    recommendation: "需要 2.5G 有線口時，比只看無線速度更值得。",
    score: 89,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["2.5G", "Wi-Fi 7", "EasyMesh"],
  },
  {
    id: "wifi-deco-be65",
    category: "wifi",
    rank: 3,
    budget: "mid",
    channel: "tw",
    brand: "TP-Link",
    model: "Deco BE65",
    name: "BE11000 三頻 Mesh 路由器 1 入",
    price: twd(6999),
    image: pchomeImage("/items/DRAN08A900H8512/000001_1770357818.jpg"),
    buyUrl: pchomeLink("DRAN08-A900H8512"),
    buyLabel: "PChome",
    specs: ["Wi-Fi 7", "BE11000", "三頻 Mesh", "全 2.5G"],
    description: "Mesh 對透天或隔間多的空間更有感，單顆可先試再擴充。",
    pros: ["Mesh 覆蓋強", "三頻規格完整"],
    cons: ["多顆總價高", "部分管理功能可能需 App/訂閱"],
    bestFor: "透天、長型屋、隔間多的家。",
    recommendation: "不是單點速度最快，但全屋覆蓋比單台路由器更重要時選它。",
    score: 88,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["Mesh", "三頻", "全屋"],
  },
  {
    id: "wifi-asus-be88u",
    category: "wifi",
    rank: 4,
    budget: "premium",
    channel: "tw",
    brand: "ASUS",
    model: "RT-BE88U",
    name: "雙頻 Wi-Fi 7 AiMesh 可擴充路由器",
    price: twd(9999),
    image: pchomeImage("/items/DSBC07A900HMDR6/000001_1769581415.jpg"),
    buyUrl: pchomeLink("DSBC07-A900HMDR6"),
    buyLabel: "PChome",
    specs: ["Wi-Fi 7", "多埠有線", "AiMesh", "進階 QoS"],
    description: "適合有多台有線設備、遊戲主機、NAS 的進階家庭網路。",
    pros: ["有線擴充強", "ASUS 韌體成熟"],
    cons: ["雙頻不是頂規三頻", "價格高"],
    bestFor: "重度有線設備、玩家與 NAS 使用者。",
    recommendation: "需要有線口與 ASUS 管理功能時，比單看無線標稱速率更實用。",
    score: 87,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["多埠", "玩家", "AiMesh"],
  },
  {
    id: "wifi-eero-max7",
    category: "wifi",
    rank: 5,
    budget: "premium",
    channel: "global",
    brand: "eero",
    model: "Max 7",
    name: "Wi-Fi 7 Mesh Router",
    price: usd(599.99),
    image: "https://cdn.mos.cms.futurecdn.net/hUhJCMK3bHxT9WWr6hT8gC.jpg",
    buyUrl: "https://eero.com/shop/eero-max-7",
    buyLabel: "eero 官方",
    specs: ["Wi-Fi 7", "Mesh", "10G/2.5G Ethernet", "Matter / Thread"],
    description: "海外熱門 Mesh，設定簡單、智慧家庭整合佳，但台灣保固與電源需確認。",
    pros: ["設定簡單", "智慧家庭整合強"],
    cons: ["海外價未含運稅", "部分進階功能需訂閱"],
    bestFor: "熟悉 Amazon/eero 生態、想要簡單 Mesh 的使用者。",
    recommendation: "海外參考：台灣通路不好買，除非你需要 eero 生態，否則 TP-Link/ASUS 較安心。",
    score: 82,
    voltage: "海外版本，需確認變壓器 100-240V",
    warranty: "可能無台灣保固",
    tags: ["海外", "Mesh", "智慧家庭"],
  },
  {
    id: "blender-vitamix-a3500i",
    category: "blender",
    rank: 2,
    budget: "premium",
    channel: "tw",
    brand: "Vitamix",
    model: "A3500i",
    name: "Ascent 領航者全食物調理機",
    price: twd(35820),
    image: pchomeImage("/items/DMAYE8A900BKOKK/000001_1782889462.jpg"),
    buyUrl: pchomeLink("DMAYE8-A900BKOKK"),
    buyLabel: "PChome",
    specs: ["高效馬達", "智慧偵測杯", "預設程式", "全食物調理"],
    description: "破壁機標竿品牌，耐用、口感細緻、售後與配件完整。",
    pros: ["攪打細緻", "耐用口碑強"],
    cons: ["價格高", "聲音大"],
    bestFor: "綠拿鐵、濃湯、堅果醬與高頻使用。",
    recommendation: "旗艦推薦：A3500i 介面與預設程式更完整，但若看 CP 值，A2500i 更值得先選。",
    score: 91,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["旗艦", "耐用", "全食物"],
  },
  {
    id: "blender-vitamix-a2500i",
    category: "blender",
    rank: 1,
    topPick: true,
    budget: "premium",
    channel: "tw",
    brand: "Vitamix",
    model: "A2500i",
    name: "Ascent 領航者全食物調理機",
    price: twd(26640),
    image: pchomeImage("/items/QBAO0FA900AS2G7/000001_1782460590.jpg"),
    buyUrl: pchomeLink("QBAO0F-A900AS2G7"),
    buyLabel: "PChome",
    specs: ["高效馬達", "智慧杯", "手動控制", "2L 容杯"],
    description: "保留 Vitamix 核心攪打能力，價格比 A3500i 低。",
    pros: ["核心性能強", "比 A3500i 划算"],
    cons: ["介面與預設較少", "仍屬高價"],
    bestFor: "重視性能、不太需要觸控與完整預設程式。",
    recommendation: "綜合推薦：保留 Vitamix 核心馬達、容杯與售後，價格比 A3500i 低很多，日常果昔/濃湯 CP 最好。",
    score: 93,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["性能", "均衡", "全食物"],
  },
  {
    id: "blender-joyoung-k8s",
    category: "blender",
    rank: 3,
    budget: "mid",
    channel: "tw",
    brand: "Joyoung",
    model: "DJ12M-K8S",
    name: "免清洗多功能破壁調理機",
    price: twd(10115),
    image: pchomeImage("/items/DMAY4YA900HB8CN/000001_1780309793.jpg"),
    buyUrl: pchomeLink("DMAY4Y-A900HB8CN"),
    buyLabel: "PChome",
    specs: ["冷熱調理", "豆漿/濃湯", "自動清洗", "預約"],
    description: "適合豆漿、米糊、熱飲，免清洗功能對日常使用很加分。",
    pros: ["自清潔便利", "冷熱料理多"],
    cons: ["攪打口感不如高階 Vitamix", "體積較大"],
    bestFor: "豆漿、米糊、濃湯與早餐熱飲。",
    recommendation: "若需求是熱飲與豆漿，Joyoung 比純果汁型更對題。",
    score: 87,
    voltage: "110V 台灣通路",
    warranty: "依通路",
    tags: ["豆漿", "自清潔", "冷熱"],
  },
  {
    id: "blender-philips-hr2038",
    category: "blender",
    rank: 4,
    budget: "value",
    channel: "tw",
    brand: "Philips",
    model: "HR2038/30",
    name: "營養冷熱調理機 / 豆漿機 / 破壁機",
    price: twd(2488),
    image: pchomeImage("/items/DMAY51A900JCIJ6/000001_1776160163.jpg"),
    buyUrl: pchomeLink("DMAY51-A900JCIJ6"),
    buyLabel: "PChome",
    specs: ["冷熱調理", "豆漿", "小家庭容量", "預設行程"],
    description: "價格親民，適合嘗試冷熱調理與豆漿，不適合高強度商用攪打。",
    pros: ["便宜", "品牌與售後較安心"],
    cons: ["馬達與細緻度有限", "容量與耐用度非旗艦"],
    bestFor: "入門、偶爾豆漿與小份量料理。",
    recommendation: "入門 CP 值推薦：先確認自己會不會常用破壁機。",
    score: 82,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["入門", "冷熱", "低價"],
  },
  {
    id: "blender-ninja-bn701",
    category: "blender",
    rank: 5,
    budget: "value",
    channel: "global",
    brand: "Ninja",
    model: "BN701",
    name: "Professional Plus Blender",
    price: usd(79.99),
    image: "https://ak1.ostkcdn.com/images/products/is/images/direct/d1c25153baa2aa99eae7831be826d2a51d87c485/Ninja-BN701-Professional-Plus-Blender-with-Auto-iQ.jpg",
    buyUrl: "https://www.sharkninja.com/ninja-professional-plus-blender-with-auto-iq/BN701.html",
    buyLabel: "Ninja 官方",
    specs: ["1400W 級", "72oz 容杯", "Auto-iQ", "冰沙/果昔"],
    description: "海外 CP 值很高的果汁冰沙機，但 120V 與保固風險需自行確認。",
    pros: ["海外價格低", "冰沙與果昔強"],
    cons: ["可能無台灣保固", "不主打熱飲/豆漿"],
    bestFor: "冰沙、果昔、冷飲為主且可接受海外購買風險。",
    recommendation: "海外參考：價格漂亮，但若要熱豆漿請改看 Joyoung 或 Philips。",
    score: 80,
    voltage: "海外 120V，台灣可用但需確認插頭與保固",
    warranty: "可能無台灣保固",
    tags: ["海外", "冰沙", "CP 值"],
  },
  {
    id: "oven-panasonic-bs607",
    category: "oven",
    rank: 1,
    topPick: true,
    budget: "mid",
    channel: "tw",
    brand: "Panasonic",
    model: "NN-BS607",
    name: "27L 蒸烘烤微波爐",
    price: twd(12490),
    image: pchomeImage("/items/DMBJ021900HFATV/000001_1779702402.jpg"),
    buyUrl: pchomeLink("DMBJ02-1900HFATV"),
    buyLabel: "PChome",
    specs: ["27L", "微波 + 蒸氣 + 烘烤", "平台式", "變頻"],
    description: "一台整合微波、蒸、烤，對家電櫃空間有限的人最實用。",
    pros: ["功能完整", "尺寸比 30L 旗艦友善"],
    cons: ["氣炸效果不如專門氣炸鍋", "內腔清潔需勤快"],
    bestFor: "小家庭、家電櫃有限、需要微波與蒸烤合一。",
    recommendation: "綜合推薦：Panasonic NN-BS607 價格中段、蒸烤微波功能完整且售後穩，小家電櫃一台抵多台最均衡。",
    score: 92,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["多合一", "蒸烤", "變頻"],
  },
  {
    id: "oven-whirlpool-mwp269",
    category: "oven",
    rank: 2,
    budget: "mid",
    channel: "tw",
    brand: "Whirlpool",
    model: "MWP269TMT",
    name: "26L 8 合 1 變頻氣炸蒸烤微波爐",
    price: twd(16900),
    image: pchomeImage("/items/DMBJ02A900J1WEX/000001_1753093870.jpg"),
    buyUrl: pchomeLink("DMBJ02-A900J1WEX"),
    buyLabel: "PChome",
    specs: ["26L", "微波/氣炸/蒸烤", "8 合 1", "變頻"],
    description: "功能名單很完整，特別適合明確想把氣炸鍋也整併掉的人。",
    pros: ["氣炸整合", "容量與價格均衡"],
    cons: ["操作學習成本較高", "氣炸大量食材不如專用機"],
    bestFor: "想省掉微波爐、烤箱、氣炸鍋三台設備。",
    recommendation: "若你最在意多合一功能，Whirlpool 比純蒸烘烤機更貼近需求。",
    score: 90,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["氣炸", "多合一", "變頻"],
  },
  {
    id: "oven-panasonic-bs807",
    category: "oven",
    rank: 3,
    budget: "premium",
    channel: "tw",
    brand: "Panasonic",
    model: "NN-BS807",
    name: "30L 蒸氣烘烤微波爐",
    price: twd(19399),
    image: pchomeImage("/items/DMBJ02A900IXED0/000001_1749708993.jpg"),
    buyUrl: pchomeLink("DMBJ02-A900IXED0"),
    buyLabel: "PChome",
    specs: ["30L", "蒸氣烘烤", "微波", "平台式"],
    description: "容量更大、烹調彈性更高，適合常備餐或一次料理較多份量。",
    pros: ["容量與火力更充裕", "Panasonic 食譜資源多"],
    cons: ["價格高", "家電櫃需確認散熱與尺寸"],
    bestFor: "常下廚、備餐、需要 30L 容量。",
    recommendation: "若櫃體放得下，BS807 比 27L 更適合長期主力使用。",
    score: 89,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["30L", "蒸烤", "主力機"],
  },
  {
    id: "oven-sharp-xp10",
    category: "oven",
    rank: 4,
    budget: "premium",
    channel: "tw",
    brand: "SHARP",
    model: "AX-XP10T",
    name: "30L Healsio 炙燒水波爐",
    price: twd(27600),
    image: pchomeImage("/items/DMBJ021900I5KFC/000001_1779346148.jpg"),
    buyUrl: pchomeLink("DMBJ02-1900I5KFC"),
    buyLabel: "PChome",
    specs: ["30L", "水波爐", "蒸氣烘烤微波", "炙燒"],
    description: "水波爐在蒸烤與減油料理上有特色，適合重視健康烹調的人。",
    pros: ["蒸氣料理強", "烤色與水波特色明顯"],
    cons: ["價格高", "清潔與水箱維護較費心"],
    bestFor: "健康蒸烤、減油料理與多樣食譜。",
    recommendation: "喜歡蒸氣烹調與水波爐料理邏輯，SHARP 很有代表性。",
    score: 87,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["水波爐", "蒸氣", "健康料理"],
  },
  {
    id: "oven-breville-joule",
    category: "oven",
    rank: 5,
    budget: "premium",
    channel: "global",
    brand: "Breville",
    model: "Joule Oven Air Fryer Pro",
    name: "智慧氣炸烤箱",
    price: usd(549.95),
    image: "https://cdn11.bigcommerce.com/s-ihwnd7z21q/images/stencil/640w/products/1251/4666/212814_JouleOvenAirFryer1__10534.1724079466.jpg?c=1",
    buyUrl: "https://www.breville.com/us/en/products/ovens/bov950.html",
    buyLabel: "Breville 官方",
    specs: ["氣炸/烘烤", "智慧食譜", "大容量", "App 輔助"],
    description: "海外評價高的智慧烤箱，但不是微波爐，且 120V/保固風險需確認。",
    pros: ["烤箱與氣炸能力強", "智慧食譜體驗佳"],
    cons: ["不能微波", "海外運稅與保固風險"],
    bestFor: "已經有微波爐、想升級高階氣炸烤箱的人。",
    recommendation: "海外參考：烤箱能力強，但不符合一台取代微波爐的需求時要小心。",
    score: 80,
    voltage: "海外 120V，需確認插頭與保固",
    warranty: "可能無台灣保固",
    tags: ["海外", "氣炸", "智慧"],
  },
  {
    id: "bidet-toto-s2",
    category: "bidet",
    rank: 1,
    topPick: true,
    budget: "mid",
    channel: "tw",
    brand: "TOTO",
    model: "TCF8342TW S2",
    name: "WASHLET 溫水洗淨便座",
    price: twd(9900),
    image: pchomeImage("/items/DPAL2NA900HYYVV/000001_1732173829.jpg"),
    buyUrl: pchomeLink("DPAL2N-A900HYYVV"),
    buyLabel: "PChome",
    specs: ["溫水洗淨", "溫熱無縫便座", "噴嘴自潔", "基本安裝需確認"],
    description: "TOTO 口碑與維修能見度高，中階價格已具備日常所需功能。",
    pros: ["品牌與維修安心", "功能完整不過度昂貴"],
    cons: ["需確認馬桶尺寸", "安裝與插座可能另計"],
    bestFor: "首次安裝免治、重視品牌安心。",
    recommendation: "綜合推薦：TOTO S2 安裝尺寸、零件與售後最安心，價格比高階款親民，長期使用風險最低。",
    score: 93,
    voltage: "110V 台灣公司貨，浴廁需有安全插座",
    warranty: "台灣保固",
    tags: ["WASHLET", "中階", "安心牌"],
  },
  {
    id: "bidet-toto-c2",
    category: "bidet",
    rank: 2,
    budget: "value",
    channel: "tw",
    brand: "TOTO",
    model: "TCF23710ATW C2",
    name: "WASHLET 溫水洗淨便座",
    price: twd(8990),
    image: pchomeImage("/items/DEDW0RA900I2TTG/000001_1764912449.jpg"),
    buyUrl: pchomeLink("DEDW0R-A900I2TTG"),
    buyLabel: "PChome",
    specs: ["溫水洗淨", "噴嘴自潔", "溫熱便座", "標準款"],
    description: "TOTO 入門到中階的實用款，價格比高階 WASHLET 容易下手。",
    pros: ["價格較低", "TOTO 品牌安心"],
    cons: ["高階除臭/遙控功能較少", "仍需確認安裝條件"],
    bestFor: "預算一萬元內、想要 TOTO 基本款。",
    recommendation: "小預算選 TOTO 時，C2 是務實入口。",
    score: 89,
    voltage: "110V 台灣公司貨，浴廁需有安全插座",
    warranty: "台灣保固",
    tags: ["入門", "WASHLET", "CP 值"],
  },
  {
    id: "bidet-panasonic-pstk09",
    category: "bidet",
    rank: 3,
    budget: "value",
    channel: "tw",
    brand: "Panasonic",
    model: "DL-PSTK09TWW",
    name: "瞬熱式溫水洗淨便座",
    price: twd(8990),
    image: pchomeImage("/items/DMAL8LA900H03A0/000001_1760407099.jpg"),
    buyUrl: pchomeLink("DMAL8L-A900H03A0"),
    buyLabel: "PChome",
    specs: ["瞬熱式", "溫水洗淨", "基本安裝", "省電"],
    description: "瞬熱式不用長時間保溫，適合重視節能與基本清潔的人。",
    pros: ["瞬熱省電", "Panasonic 售後普及"],
    cons: ["設計感普通", "高階功能較少"],
    bestFor: "一萬元內、重視瞬熱與品牌售後。",
    recommendation: "若偏好家電品牌售後，Panasonic 瞬熱款很有 CP 值。",
    score: 88,
    voltage: "110V 台灣公司貨，浴廁需有安全插座",
    warranty: "台灣保固",
    tags: ["瞬熱", "節能", "CP 值"],
  },
  {
    id: "bidet-kohler-c3430",
    category: "bidet",
    rank: 4,
    budget: "mid",
    channel: "tw",
    brand: "KOHLER",
    model: "C3-430",
    name: "瞬熱式電腦免治馬桶蓋",
    price: twd(12900),
    image: pchomeImage("/items/DEDW1HA900FW2KD/000001_1672380333.jpg"),
    buyUrl: pchomeLink("DEDW1H-A900FW2KD"),
    buyLabel: "PChome",
    specs: ["瞬熱式", "UV 除菌", "三檔溫控", "不鏽鋼噴嘴"],
    description: "衛浴品牌質感好，UV 除菌與不鏽鋼噴嘴是差異化重點。",
    pros: ["質感佳", "UV 除菌加分"],
    cons: ["價格高於入門", "需確認座型相容"],
    bestFor: "重視衛浴品牌與外觀質感。",
    recommendation: "衛浴整體質感優先，KOHLER 比家電品牌更搭配裝潢。",
    score: 86,
    voltage: "110V 台灣通路，浴廁需有安全插座",
    warranty: "依通路",
    tags: ["UV", "衛浴品牌", "瞬熱"],
  },
  {
    id: "bidet-hcg-af890",
    category: "bidet",
    rank: 5,
    budget: "value",
    channel: "tw",
    brand: "HCG",
    model: "AF890AW",
    name: "免治沖洗馬桶座",
    price: twd(8537),
    image: pchomeImage("/items/DMAL6WA900IYWWR/000001_1750758652.jpg"),
    buyUrl: pchomeLink("DMAL6W-A900IYWWR"),
    buyLabel: "PChome",
    specs: ["44/47cm", "免治沖洗", "台灣衛浴品牌", "不含安裝"],
    description: "本地衛浴品牌，價格與維修可得性不錯，但需另外確認安裝費。",
    pros: ["本地品牌", "價格合理"],
    cons: ["頁面標示不含安裝", "功能不如高階 TOTO/Panasonic"],
    bestFor: "預算有限、偏好台灣衛浴品牌。",
    recommendation: "若已有 HCG 馬桶或偏好本地維修，可列為務實選項。",
    score: 82,
    voltage: "110V 台灣通路，浴廁需有安全插座",
    warranty: "依通路",
    tags: ["本地品牌", "低價", "需安裝"],
  },
];

const extraCategoryCopy = {
  tv: {
    label: "電視",
    bestFor: "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    reason: "可用來橫向比較面板技術、刷新率、系統與套組價格。",
    pros: ["同尺寸規格可直接比價", "台灣通路資訊與圖片完整"],
    cons: ["套組贈品與活動價波動大", "內建音響仍建議另搭 Soundbar"],
    voltage: "110V 台灣通路",
  },
  soundbar: {
    label: "Soundbar",
    bestFor: "想依客廳大小、聲道數與預算挑選家庭劇院的人。",
    reason: "補足不同聲道、重低音與後環繞配置，方便和電視一起配套。",
    pros: ["安裝門檻低", "可快速補強電視音場"],
    cons: ["後環繞與重低音占用插座", "小空間未必需要高聲道數"],
    voltage: "110V 台灣通路",
  },
  fan: {
    label: "電風扇",
    bestFor: "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    reason: "用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    pros: ["DC 機種普遍省電", "台灣夏季替代冷氣循環很實用"],
    cons: ["平價款塑料感較明顯", "部分功能款清潔拆裝較麻煩"],
    voltage: "110V 台灣通路",
  },
  circulator: {
    label: "循環扇",
    bestFor: "需要冷氣輔助循環、跨房間送風或小坪數空氣流動的人。",
    reason: "補入桌上、渦流、復古與直立型，方便依擺放位置篩選。",
    pros: ["體積小、移動容易", "搭配冷氣可改善溫度分布"],
    cons: ["直吹舒適度不如電風扇", "高風量款噪音需留意"],
    voltage: "110V 台灣通路",
  },
  dehumidifier: {
    label: "除濕機",
    bestFor: "台灣潮濕環境、衣物乾燥與長時間居家除濕需求。",
    reason: "補入不同公升數與清淨除濕款，方便依坪數和耗能取捨。",
    pros: ["容量選擇更完整", "多數台灣通路售後明確"],
    cons: ["實際除濕量受室溫影響", "水箱容量與噪音需現場確認"],
    voltage: "110V 台灣通路",
  },
  purifier: {
    label: "空氣清淨機",
    bestFor: "過敏、寵物、開放式客廳或想補強臥室空氣品質的人。",
    reason: "補入不同坪數、涼暖合一與抑菌機種，方便比濾網與適用面積。",
    pros: ["坪數帶涵蓋更完整", "HEPA/活性碳濾網資訊易比較"],
    cons: ["耗材價格差異大", "標示適用坪數需和實際空間打折看待"],
    voltage: "110V 台灣通路",
  },
  robot: {
    label: "掃拖機器人",
    bestFor: "希望自動洗拖布、自動集塵並減少日常掃拖時間的家庭。",
    reason: "補入新一代熱水洗、沿邊清潔、薄型與 iRobot/Narwal 選項。",
    pros: ["自動基站規格越來越完整", "長毛髮與寵物家庭選擇變多"],
    cons: ["耗材與清潔液成本需估算", "門檻、地毯與家具高度仍會影響體驗"],
    voltage: "110V 台灣通路",
  },
  vacuum: {
    label: "吸塵器",
    bestFor: "重視毛髮、除螨、洗地或輕量日常清潔的人。",
    reason: "補齊旗艦、洗地、除螨與入門無線吸塵器價格帶。",
    pros: ["從手持到洗地機價差清楚", "可依重量與吸頭配置挑選"],
    cons: ["電池衰退與耗材需留意", "濕拖/洗地款維護時間較高"],
    voltage: "110V 台灣通路",
  },
  wifi: {
    label: "Wi-Fi 分享機",
    bestFor: "正在升級 Wi-Fi 7、Mesh 或多 Gigabit 有線骨幹的家庭。",
    reason: "補入單機、Mesh 套裝、電競與高階 10G 機種，方便依戶型比較。",
    pros: ["Wi-Fi 7 與 Mesh 選項完整", "可依 2.5G/10G 埠數挑選"],
    cons: ["終端裝置需支援才吃得到升級", "Mesh 套組價格與擺位影響大"],
    voltage: "110V 台灣通路",
  },
  blender: {
    label: "破壁機",
    bestFor: "常做豆漿、堅果飲、濃湯、冰沙或全食物料理的人。",
    reason: "補入 Vitamix、Blendtec 與加熱破壁機，方便比較馬力、容量與保固。",
    pros: ["高階馬力與杯體選擇多", "可依加熱/冷打需求分流"],
    cons: ["高轉速機種噪音明顯", "入門款耐用度與售後需確認"],
    voltage: "110V 台灣通路",
  },
  oven: {
    label: "多功能氣炸烤箱/微波爐",
    bestFor: "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    reason: "補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    pros: ["一機多用節省檯面", "高階款蒸烤與微波整合度高"],
    cons: ["腔體清潔與散熱空間要預留", "多功能機價格高且學習成本較大"],
    voltage: "110V 台灣通路",
  },
  bidet: {
    label: "免治馬桶",
    bestFor: "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    reason: "補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    pros: ["舒適度升級明顯", "高階款除菌、除臭與遙控功能完整"],
    cons: ["需確認馬桶尺寸與插座位置", "安裝費與基本安裝範圍需看通路"],
    voltage: "110V 台灣通路，浴廁需有安全插座",
  },
};

const extraPremiumFloor = {
  tv: 70000,
  soundbar: 35000,
  fan: 3500,
  circulator: 5000,
  dehumidifier: 20000,
  purifier: 18000,
  robot: 20000,
  vacuum: 18000,
  wifi: 10000,
  blender: 28000,
  oven: 28000,
  bidet: 18000,
};

const extraValueFloor = {
  tv: 35000,
  soundbar: 12000,
  fan: 2000,
  circulator: 2000,
  dehumidifier: 14000,
  purifier: 10000,
  robot: 12000,
  vacuum: 8000,
  wifi: 5000,
  blender: 8000,
  oven: 15000,
  bidet: 10000,
};

const extraProductRows = [
  ["tv", "Sony", "Y-65XR80", "BRAVIA 8 65 型 XR OLED 4K HDR Google TV 顯示器", 84510, "/items/DPAD06A900HLBJO/000001_1776334113.jpg", "DPAD06-A900HLBJO", ["65 吋 OLED", "4K HDR Google TV", "XR 影像處理", "高階 OLED"], ["OLED", "電影", "旗艦"]],
  ["tv", "LG", "OLED65G5PTA", "65 型 OLED evo G5 零間隙藝廊系列 4K 顯示器", 71910, "/items/DPADYE1900JGOYA/000001_1778348657.jpg", "DPADYE-1900JGOYA", ["65 吋 OLED evo", "4K 120Hz", "零間隙藝廊設計", "AI 物聯網智慧顯示器"], ["OLED", "藝廊", "旗艦"]],
  ["tv", "Panasonic", "TV-65Z90BGT", "65 型 OLED 智慧聯網顯示器", 69615, "/items/DPAD09A900J9GHB/000001_1781081862.jpg", "DPAD09-A900J9GHB", ["65 吋 OLED", "智慧聯網", "4K", "日本品牌調校"], ["OLED", "電影", "均衡"]],
  ["tv", "Philips", "65OLED809", "65 型 4K 144Hz VRR OLED Google TV 顯示器", 79900, "/items/DPADIKA900HJGF2/000001_1782900149.jpg", "DPADIK-A900HJGF2", ["65 吋 OLED", "4K 144Hz", "VRR", "Google TV"], ["OLED", "遊戲", "Google TV"]],
  ["tv", "Samsung", "QA65S95FAXXZW", "65 型 OLED 4K Vision AI 智慧顯示器", 94900, "/items/DMBM10A900IXJZG/000001_1772871053.jpg", "DMBM10-A900IXJZG", ["65 吋 OLED", "Vision AI", "4K", "高階 S95F 系列"], ["OLED", "高亮度", "旗艦"]],
  ["tv", "TCL", "65C8L", "65 型 4K SQD-Mini LED Google TV 顯示器", 56990, "/items/DPADZMA900K3904/000001_1780907613.jpg", "DPADZM-A900K3904", ["65 吋 Mini LED", "4K", "Google TV", "量子點背光"], ["Mini LED", "Google TV", "客廳"]],
  ["tv", "TCL", "65A400M", "65 型 4K QD-Mini LED Google TV 顯示器", 30990, "/items/DPADZMA900K2RGJ/000001_1780552782.jpg", "DPADZM-A900K2RGJ", ["65 吋 QD-Mini LED", "4K", "Google TV", "中階價格帶"], ["Mini LED", "CP 值", "串流"]],
  ["tv", "Xiaomi", "S Pro Mini 65 2026", "65 型 4K Mini LED 144Hz Google TV 顯示器", 26999, "/items/DPADBU1900JC97W/000001_1761379704.jpg", "DPADBU-1900JC97W", ["65 吋 Mini LED", "4K 144Hz", "Google TV", "智慧聯網"], ["Mini LED", "遊戲", "CP 值"]],
  ["tv", "Samsung", "QA65QN900FXXZW", "65 型 8K Neo QLED 165Hz Mini LED AI 顯示器", 89910, "/items/DPADEW1900JPY1S/000001_1770558909.jpg", "DPADEW-1900JPY1S", ["65 吋 8K Neo QLED", "Mini LED", "165Hz", "AI 智慧顯示器"], ["8K", "Mini LED", "旗艦"]],
  ["tv", "BenQ", "J65-770", "65 型 4K 144Hz Mini LED 量子點遊戲 Google TV 顯示器", 32899, "/items/DPAD0O1900JL0Z8/000001_1766513999.jpg", "DPAD0O-1900JL0Z8", ["65 吋 Mini LED", "4K 144Hz", "Google TV", "內建重低音"], ["Mini LED", "遊戲", "CP 值"]],

  ["soundbar", "Samsung", "HW-Q930H/ZW", "Q 系列 9.1.4 聲道 Soundbar 家庭劇院", 49900, "/items/DMAAODA900K3QSM/000001_1782969828.jpg", "DMAAOD-A900K3QSM", ["9.1.4 聲道", "Dolby Atmos", "後環繞喇叭", "Q 系列"], ["Atmos", "環繞", "旗艦"]],
  ["soundbar", "Samsung", "HW-QS700F", "3.1.2 聲道 Q 系列 Soundbar 聲霸", 19900, "/items/DMAAODA900JMDR4/000001_1776914225.jpg", "DMAAOD-A900JMDR4", ["3.1.2 聲道", "Dolby Atmos", "Q 系列", "中階聲霸"], ["Atmos", "中階", "電視搭配"]],
  ["soundbar", "LG", "S80TR", "LG Soundbar S80TR 5.1.3 聲道立體環繞聲霸", 19900, "/items/DMBM1DA900J5JAZ/000001_1779262704.jpg", "DMBM1D-A900J5JAZ", ["5.1.3 聲道", "Dolby Atmos", "立體環繞", "LG Soundbar"], ["LG", "環繞", "均衡"]],
  ["soundbar", "Samsung", "HW-Q990H/ZW", "Q 系列 11.1.4 聲道 Soundbar 家庭劇院", 59900, "/items/DPADO2A900K5VUT/000001_1782993730.jpg", "DPADO2-A900K5VUT", ["11.1.4 聲道", "重低音", "後環繞", "Dolby Atmos"], ["Atmos", "旗艦", "劇院"]],
  ["soundbar", "Samsung", "HW-QS90H/ZW", "Q 系列 7.1.2 聲道 Soundbar", 36900, "/items/DMAAODA900K5489/000001_1782988490.jpg", "DMAAOD-A900K5489", ["7.1.2 聲道", "Q 系列", "Dolby Atmos", "重低音"], ["Atmos", "客廳", "均衡"]],
  ["soundbar", "Sony", "HT-S40R", "5.1 聲道 Soundbar 家庭劇院組", 8490, "/items/DMBM1DA900GHTFE/000001_1776774078.jpg", "DMBM1D-A900GHTFE", ["5.1 聲道", "後環繞", "重低音", "藍牙"], ["CP 值", "入門劇院", "Sony"]],
  ["soundbar", "Sony", "HT-S100F", "2.0 聲道單件式藍牙 Soundbar", 7590, "/items/DMAAMTA900I5HHO/000001_1778661010.jpg", "DMAAMT-A900I5HHO", ["2.0 聲道", "單件式", "藍牙", "小空間"], ["小空間", "入門", "簡潔"]],
  ["soundbar", "JBL", "BAR 300 MK2", "BAR 300MK2 5.0 聲道 Soundbar", 15010, "/items/DMAAHGA900JCY2V/000001_1760766812.jpg", "DMAAHG-A900JCY2V", ["5.0 聲道", "Dolby Atmos", "單件式", "黑/白色"], ["JBL", "小客廳", "均衡"]],
  ["soundbar", "JBL", "BAR 800 MK2", "7.1 聲道家庭劇院喇叭", 31160, "/items/DMAAHGA900J56OK/000001_1755250707.jpg", "DMAAHG-A900J56OK", ["7.1 聲道", "無線後環繞", "重低音", "家庭劇院"], ["JBL", "後環繞", "客廳"]],
  ["soundbar", "Bose", "Smart Soundbar 600 Ultra", "家庭娛樂揚聲器 600 Ultra", 19900, "/items/DMAANJA900HZBZV/000001_1729154632.jpg", "DMAANJ-A900HZBZV", ["單件式聲霸", "智慧連線", "Bose 調音", "家庭娛樂"], ["Bose", "音樂", "簡潔"]],

  ["fan", "Panasonic", "F-S16LMD", "16 吋 DC 變頻電風扇", 2472, "/items/DMABLMA900EOROV/000001_1757038312.jpg", "DMABLM-A900EOROV", ["16 吋", "DC 變頻", "立扇", "節能"], ["DC", "16 吋", "CP 值"]],
  ["fan", "Panasonic", "F-H14GND-K", "14 吋 DC 微電腦定時電風扇", 3112, "/items/DMABLMA900EOQ12/000001_1695005225.jpg", "DMABLM-A900EOQ12", ["14 吋", "DC 馬達", "負離子", "ECO 溫控"], ["DC", "負離子", "臥室"]],
  ["fan", "Panasonic", "F-H14LXD-K", "14 吋 DC 微電腦定時電風扇", 3920, "/items/DMABLMA900EORP0/000001_1697161466.jpg", "DMABLM-A900EORP0", ["14 吋", "DC 馬達", "定時", "遙控"], ["DC", "高階", "臥室"]],
  ["fan", "Panasonic", "F-S14KM", "14 吋微電腦 DC 直流電風扇", 1444, "/items/DMAB1FA900B4SP0/000001_1612233290.jpg", "DMAB1F-A900B4SP0", ["14 吋", "DC 直流", "微電腦", "台灣製造"], ["DC", "低價", "租屋"]],
  ["fan", "Panasonic", "F-L16GMD", "16 吋 DC 變頻高級型溫感遙控電風扇", 3231, "/items/DMAB30A900EOQ5X/000001_1693793932.jpg", "DMAB30-A900EOQ5X", ["16 吋", "DC 變頻", "溫感", "遙控"], ["DC", "溫控", "客廳"]],
  ["fan", "Panasonic", "F-S14QT", "14 吋五片扇葉 ECO 溫度感知 DC 馬達電風扇", 2380, "/items/DMAB1FA900JXKNN/000001_1776674767.jpg", "DMAB1F-A900JXKNN", ["14 吋", "五片扇葉", "ECO 溫度感知", "附遙控器"], ["DC", "溫控", "CP 值"]],
  ["fan", "Panasonic", "F-S12QT", "12 吋五片扇葉 ECO 溫度感知 DC 馬達電風扇", 2079, "/items/DMAB1FA900JX6MJ/000001_1776674604.jpg", "DMAB1F-A900JX6MJ", ["12 吋", "五片扇葉", "ECO 溫控", "附遙控器"], ["小空間", "DC", "臥室"]],
  ["fan", "SHARP", "PJ-DC16VT-W", "16 吋 DC 節能直流馬達立扇", 3290, "/items/DMABPEA900JZZ0Q/000001_1778477239.jpg", "DMABPE-A900JZZ0Q", ["16 吋", "DC 馬達", "節能", "立扇"], ["SHARP", "DC", "客廳"]],
  ["fan", "SHARP", "PJ-V14A-W", "14 吋 DC 直流馬達伸縮立扇", 1861, "/items/DMABPMA900K2J9E/000001_1780381094.jpg", "DMABPM-A900K2J9E", ["14 吋", "DC 直流", "伸縮立扇", "入門價位"], ["SHARP", "低價", "小空間"]],
  ["fan", "SHARP", "PJ-E14GE", "14 吋 DC 直流馬達遙控立扇", 1706, "/items/DMABPMA900J334P/000001_1753932662.jpg", "DMABPM-A900J334P", ["14 吋", "DC 馬達", "遙控", "立扇"], ["SHARP", "低價", "遙控"]],

  ["circulator", "Vornado", "52-TW", "52-TW 黑色渦流空氣循環扇", 2457, "/items/DMAB3XA900JWRUP/000001_1776066916.jpg", "DMAB3X-A900JWRUP", ["渦流循環", "桌上/地面", "黑色", "小坪數"], ["渦流", "小空間", "Vornado"]],
  ["circulator", "Vornado", "62-TW", "62-TW 黑色渦流空氣循環扇", 3492, "/items/DMAB3XA900IIGO1/000001_1765272569.jpg", "DMAB3X-A900IIGO1", ["渦流循環", "中坪數", "黑色", "強風量"], ["渦流", "客廳", "Vornado"]],
  ["circulator", "Vornado", "V-FAN", "7.5 吋經典復古循環扇綠色", 5305, "/items/QBAF31A900ARWXH/000001_1765269049.jpg", "QBAF31-A900ARWXH", ["7.5 吋", "復古外型", "金屬風格", "循環扇"], ["復古", "設計", "小空間"]],
  ["circulator", "Vornado", "RTRHD-TW", "RTRHD-TW 渦流空氣循環機", 4518, "/items/DMAB3XA900HNEWA/000001_1782713198.jpg", "DMAB3X-A900HNEWA", ["渦流循環", "高風量", "循環機", "客廳用"], ["渦流", "高風量", "客廳"]],
  ["circulator", "Vornado", "FLYMAX-TW", "FLYMAX-TW 破風渦流空氣循環扇", 5922, "/items/DMAB3XA900JY5I9/000001_1777019492.jpg", "DMAB3X-A900JY5I9", ["破風渦流", "高風量", "循環扇", "美國品牌"], ["渦流", "高風量", "旗艦"]],
  ["circulator", "Vornado", "735B", "美國渦流空氣循環機 735B", 6190, "/items/DMAB1OA900EQ6Z4/000001_1765275011.jpg", "DMAB1O-A900EQ6Z4", ["大型渦流", "高風量", "黑色", "空氣循環機"], ["大坪數", "渦流", "Vornado"]],
  ["circulator", "Vornado", "6303DC", "6303DC 白色渦流空氣循環機", 6282, "/items/QBAF31A9008YBED/000001_1765269212.jpg", "QBAF31-A9008YBED", ["DC 馬達", "白色", "渦流循環", "中大坪數"], ["DC", "渦流", "高階"]],
  ["circulator", "Vornado", "EXO61HD-TW", "EXO61HD-TW 渦流空氣循環機", 4033, "/items/DMAB3XA900HN9W0/000001_1782713517.jpg", "DMAB3X-A900HN9W0", ["渦流循環", "中階價位", "循環機", "耐用取向"], ["渦流", "均衡", "客廳"]],
  ["circulator", "IRIS OHYAMA", "TAF-MKM10", "極靜音自動擺動空氣循環扇", 799, "/items/DMABLLA900IJ6JP/000001_1744101771.jpg", "DMABLL-A900IJ6JP", ["桌上扇", "自動擺動", "極靜音", "小坪數"], ["低價", "桌上", "臥室"]],
  ["circulator", "IRIS OHYAMA", "PCF-HM23W", "擺動式循環扇 10 坪專用", 1990, "/items/DMBM3GA900FHKJ2/000001_1773203478.jpg", "DMBM3G-A900FHKJ2", ["10 坪", "擺動式", "循環扇", "家用"], ["IRIS", "10 坪", "均衡"]],

  ["dehumidifier", "Panasonic", "F-YV32NXK", "16 公升變頻高效型除濕機磁石黑", 16800, "/items/DMBQ4YA900IKOCC/000001_1744795213.jpg", "DMBQ4Y-A900IKOCC", ["16 公升", "變頻", "一級能效", "磁石黑"], ["16L", "變頻", "節能"]],
  ["dehumidifier", "Panasonic", "F-YV32MH", "16 公升變頻高效型清淨除濕機", 20961, "/items/DMBQ3PA900GTPHC/000001_1699597155.jpg", "DMBQ3P-A900GTPHC", ["16 公升", "變頻", "清淨除濕", "高效型"], ["清淨", "16L", "高階"]],
  ["dehumidifier", "Panasonic", "F-Y16FH", "8 公升清淨除濕機", 11030, "/items/DMAU0FA900B1HPU/000001_1782813379.jpg", "DMAU0F-A900B1HPU", ["8 公升", "清淨除濕", "小坪數", "省空間"], ["8L", "小坪數", "清淨"]],
  ["dehumidifier", "Panasonic", "F-Y18PN", "9 公升除濕機", 8263, "/items/DMBQ00A900JB38A/000001_1776329911.jpg", "DMBQ00-A900JB38A", ["9 公升", "DC 低噪音馬達", "一級能效", "多項安全保護"], ["9L", "節能", "臥室"]],
  ["dehumidifier", "LG", "MD161QPK3", "PuriCare WiFi 變頻除濕機粉紅 16 公升", 14900, "/items/DMBQ07A900HQ3L5/000001_1761827365.jpg", "DMBQ07-A900HQ3L5", ["16 公升", "WiFi", "變頻", "PuriCare"], ["LG", "WiFi", "16L"]],
  ["dehumidifier", "LG", "DD121QWE0", "PuriCare 12 公升雙變頻除濕機", 12800, "/items/DMBQ4NA900JF9HP/000001_1778165423.jpg", "DMBQ4N-A900JF9HP", ["12 公升", "雙變頻", "PuriCare", "ThinQ 遠端控制"], ["LG", "12L", "變頻"]],
  ["dehumidifier", "LG", "DD141QWE0", "PuriCare 雙變頻除濕機經典款白", 15800, "/items/DMBQ4YA900JBQP2/000001_1759892926.jpg", "DMBQ4Y-A900JBQP2", ["14 公升級", "雙變頻", "經典白", "PuriCare"], ["LG", "變頻", "均衡"]],
  ["dehumidifier", "LG", "WD261VKF0", "PuriCare 雙變頻除濕機 25.6 公升曜黑", 20900, "/items/DMBQ07A900GFBVP/000001_1767340170.jpg", "DMBQ07-A900GFBVP", ["25.6 公升", "雙變頻", "曜黑", "大坪數"], ["LG", "大容量", "高階"]],
  ["dehumidifier", "LG", "DD181MWE0", "18 公升一級能效 PuriCare 雙變頻除濕機", 17900, "/items/DMBQ4NA900JCHFZ/000001_1783342859.jpg", "DMBQ4N-A900JCHFZ", ["18 公升", "雙變頻", "一級能效", "PuriCare"], ["LG", "18L", "節能"]],
  ["dehumidifier", "Whirlpool", "WDEE20TW", "20L 第六感智能除濕機", 9999, "/items/DMBQ3SA900K13ZR/000001_1779265654.jpg", "DMBQ3S-A900K13ZR", ["20 公升", "第六感智能", "30-80% 濕度設定", "廣口上吹"], ["Whirlpool", "20L", "高 CP"]],

  ["purifier", "Blueair", "ClassicPro CP9i", "ClassicPro CP9i 空氣清淨機", 24830, "/items/DMAUE4A900IJCAP/000001_1780654528.jpg", "DMAUE4-A900IJCAP", ["最大適用 41 坪", "高效濾淨", "智慧清淨", "大坪數"], ["大坪數", "Blueair", "高階"]],
  ["purifier", "Blueair", "Blue Signature SP4i", "Blue Signature SP4i 極夜藍空氣清淨機", 18390, "/items/DMAUE4A900J9KNK/000001_1780654611.jpg", "DMAUE4-A900J9KNK", ["22-39 坪", "智慧清淨", "大坪數", "極夜藍"], ["大坪數", "Blueair", "設計"]],
  ["purifier", "Blueair", "BlueMax 3250i", "BlueMax 智能 WiFi 空氣清淨機 3250i", 4590, "/items/DMAUE4A900I7DJ1/000001_1780654701.jpg", "DMAUE4-A900I7DJ1", ["8-12 坪", "WiFi", "輕巧", "除異味"], ["小坪數", "WiFi", "CP 值"]],
  ["purifier", "Blueair", "BlueMax 3350i", "BlueMax 智能 WiFi 空氣清淨機 3350i", 7350, "/items/DMAUE4A900I7DN1/000001_1780654653.jpg", "DMAUE4-A900I7DN1", ["15-24 坪", "WiFi", "輕巧", "除異味"], ["中坪數", "WiFi", "均衡"]],
  ["purifier", "Blueair", "ComfortPure T20i", "ComfortPure 智能三合一涼暖空氣清淨機", 16550, "/items/DMAUE4A900J40NE/000001_1780654570.jpg", "DMAUE4-A900J40NE", ["15-19 坪", "涼暖三合一", "智慧控制", "空氣清淨"], ["涼暖", "三合一", "臥室"]],
  ["purifier", "Blueair", "ClassicPro CP7i", "ClassicPro CP7i 空氣清淨機", 21150, "/items/DMAU1FA900IJCA6/000001_1780654549.jpg", "DMAU1F-A900IJCA6", ["最大適用 31 坪", "高效濾淨", "中大坪數", "智慧清淨"], ["Blueair", "中大坪數", "高效"]],
  ["purifier", "Dyson", "HP12", "Purifier Hot+Cool De-NOx 甲醛 NOx 偵測涼暖空氣清淨機", 25900, "/items/DMAU3CA900I7ORK/000001_1782810487.jpg", "DMAU3C-A900I7ORK", ["涼暖二合一", "甲醛/NOx 偵測", "空氣清淨", "Dyson app"], ["涼暖", "偵測", "旗艦"]],
  ["purifier", "Dyson", "HP11", "Purifier Hot+Cool 三合一涼暖智能空氣清淨機", 14900, "/items/DMAU3CA900J2MV6/000001_1767758338.jpg", "DMAU3C-A900J2MV6", ["涼暖三合一", "空氣清淨", "智能偵測", "白色"], ["涼暖", "Dyson", "均衡"]],
  ["purifier", "Dyson", "TP12", "Purifier Cool De-NOx 甲醛 NOx 偵測涼風空氣清淨機", 20900, "/items/DMAU3CA900HTKRG/000001_1767758629.jpg", "DMAU3C-A900HTKRG", ["涼風清淨", "甲醛/NOx 偵測", "塔扇型", "白金色"], ["涼風", "偵測", "客廳"]],
  ["purifier", "Philips", "MUJI AC0650", "奈米級空氣清淨機 MUJI AC0650", 4890, "/items/DMAC2OA900GD1ZV/000001_1781800174.jpg", "DMAC2O-A900GD1ZV", ["奈米級濾淨", "簡約外型", "小坪數", "入門價位"], ["小坪數", "低價", "簡約"]],

  ["robot", "Roborock", "Qrevo Curv 2 Flow", "Qrevo Curv 2 Flow 掃拖機器人", 19999, "/items/DMBL1CA900JA04J/000001_1782870267.jpg", "DMBL1C-A900JA04J", ["20000Pa", "滾筒拖地", "自動洗烘", "全能基站"], ["熱銷", "高吸力", "自動洗烘"]],
  ["robot", "Roborock", "Qrevo Edge 2 Pro", "Qrevo Edge 2 Pro 超薄掃拖機器人", 26980, "/items/DMBL1CA900JPHOP/000001_1782870240.jpg", "DMBL1C-A900JPHOP", ["7.98cm 超薄", "25000Pa", "100 度熱水洗", "雙門檻越障"], ["超薄", "高吸力", "熱水洗"]],
  ["robot", "Roborock", "Qrevo EdgeT", "Qrevo EdgeT 智慧升降 LDS 掃拖機器人", 26888, "/items/DMBL1C1900J3MLN/000001_1782870373.jpg", "DMBL1C-1900J3MLN", ["18500Pa", "智慧升降 LDS", "三重零纏繞", "75 度熱水洗"], ["熱水洗", "零纏繞", "旗艦"]],
  ["robot", "Dreame", "D30 Ultra CE", "D30 Ultra CE 全能掃拖機器人", 9999, "/items/DMBL3EA900JY4G0/000001_1780033612.jpg", "DMBL3E-A900JY4G0", ["全能基站", "掃拖一體", "自動清潔", "入門價位"], ["Dreame", "低價", "全能基站"]],
  ["robot", "Ecovacs", "DEEBOT N50", "DEEBOT N50 強清潔全能掃拖機器人", 12999, "/items/DMBL0LA900J0KF3/000001_1765762606.jpg", "DMBL0L-A900J0KF3", ["20000Pa", "雙恆貼邊", "全能基站", "掃拖一體"], ["Ecovacs", "高吸力", "沿邊"]],
  ["robot", "Ecovacs", "DEEBOT mini2", "DEEBOT mini2 光彩全能掃拖機器人", 11999, "/items/DMBL10A900K2SWR/000001_1781171629.jpg", "DMBL10-A900K2SWR", ["小機身", "全能基站", "掃拖一體", "18 色氛圍燈"], ["小宅", "全能基站", "設計"]],
  ["robot", "Ecovacs", "DEEBOT T80 OMNI", "T80 OMNI 滾筒活水洗地掃拖機器人", 17999, "/items/DMBL4VA900JCOCU/000001_1772789545.jpg", "DMBL4V-A900JCOCU", ["滾筒活水洗地", "全能基站", "掃拖一體", "新一代 T80"], ["滾筒", "Ecovacs", "濕拖"]],
  ["robot", "iRobot", "Roomba Plus 405 Combo", "Roomba Plus 405 Combo 旋風全能掃拖機器人", 16880, "/items/DMBL0JA900ITF88/000001_1782803241.jpg", "DMBL0J-A900ITF88", ["掃拖 Combo", "自動基站", "旋風清潔", "iRobot"], ["iRobot", "掃拖", "均衡"]],
  ["robot", "iRobot", "Roomba Plus 505 Combo", "Roomba Plus 505 Combo 熱旋風延邊避障掃拖機器人", 21880, "/items/DMBL0JA900ITF7U/000001_1782802931.jpg", "DMBL0J-A900ITF7U", ["熱旋風", "延邊避障", "全能掃拖", "自動基站"], ["iRobot", "避障", "高階"]],
  ["robot", "iRobot", "Roomba Max 705 Combo", "Roomba Max 705 Combo 全能滾筒旗艦掃拖機器人", 30800, "/items/DMBL0JA900JOLNZ/000001_1773298765.jpg", "DMBL0J-A900JOLNZ", ["滾筒旗艦", "全能掃拖", "自動基站", "高階 Combo"], ["iRobot", "旗艦", "滾筒"]],

  ["vacuum", "Dyson", "V12 Fluffy SV46", "V12 Fluffy 智慧輕量吸塵器", 18900, "/items/DMAX001900I2DSH/000001_1780465775.jpg", "DMAX00-1900I2DSH", ["輕量無線", "智慧感測", "Fluffy 吸頭", "SV46"], ["Dyson", "輕量", "無線"]],
  ["vacuum", "Dyson", "V12s Origin Submarine SV49", "V12s Origin Submarine 乾濕全能洗地吸塵器", 17900, "/items/DMAX001900JRA9W/000001_1780465600.jpg", "DMAX00-1900JRA9W", ["乾濕全能", "Submarine 洗地", "雙主吸頭", "SV49"], ["洗地", "Dyson", "寵物"]],
  ["vacuum", "Dyson", "V15 Detect Fluffy SV47", "V15 Detect Fluffy 智慧無線吸塵器", 17900, "/items/DMAX00A900HC7B6/000001_1782183523.jpg", "DMAX00-A900HC7B6", ["無線吸塵", "Detect 顯塵", "除螨", "SV47"], ["顯塵", "Dyson", "高吸力"]],
  ["vacuum", "Dyson", "V8 Focus Mattress HH15", "V8 Focus Mattress origin 強勁無線除塵螨機", 6999, "/items/DMAX00A900HC5BZ/000001_1780458569.jpg", "DMAX00-A900HC5BZ", ["除塵螨", "手持無線", "床墊清潔", "HH15"], ["除螨", "手持", "CP 值"]],
  ["vacuum", "LG", "CordZero A9X-STEAM", "CordZero A9X 蒸氣濕拖自動集塵無線吸塵器", 25900, "/items/DMAX8KA900HLXAQ/000001_1744871444.jpg", "DMAX8K-A900HLXAQ", ["280W 吸力", "蒸氣濕拖", "自動集塵", "LCD 螢幕"], ["自動集塵", "蒸氣", "LG"]],
  ["vacuum", "LG", "CordZero A9 Air A7-LITE", "CordZero A9 Air 快清式無線吸塵器", 7990, "/items/DMBM2ZA900IUKMI/000001_1768459978.jpg", "DMBM2Z-A900IUKMI", ["無線吸塵", "輕量", "快清式", "A7-LITE"], ["LG", "輕量", "低價"]],
  ["vacuum", "LG", "CordZero A9 Air", "CordZero A9 Air 輕量美型無線吸塵器雪霧白", 7190, "/items/DMAX6FA900K2NSV/000001_1780464185.jpg", "DMAX6F-A900K2NSV", ["無線吸塵", "輕量", "雪霧白", "A9 Air"], ["LG", "輕量", "均衡"]],
  ["vacuum", "Siroca", "SV-SP3710", "超輕量無線吸塵器", 3280, "/items/DSBE1AA900JJ4LU/000001_1765270758.jpg", "DSBE1A-A900JJ4LU", ["超輕量", "無線吸塵", "小空間", "入門價位"], ["輕量", "低價", "小宅"]],
  ["vacuum", "Plus Minus Zero", "XJC-Y011", "正負零 XJC-Y011 無線手持吸塵器", 3990, "/items/DSBE1AA900J8H81/000001_1757576197.jpg", "DSBE1A-A900J8H81", ["無線手持", "輕量", "簡約設計", "入門價格"], ["低價", "手持", "設計"]],
  ["vacuum", "HERAN", "HVC-35SC050", "旗艦吸力智能感應高效率吸塵器", 3990, "/items/DSBE1AA900HA30V/000001_1709535798.jpg", "DSBE1A-A900HA30V", ["智能感應", "高效率吸塵", "無線", "入門價位"], ["HERAN", "低價", "家用"]],

  ["wifi", "TP-Link", "Deco BE25 3-pack", "Deco BE25 Wi-Fi 7 BE5000 Mesh 三入組", 7999, "/items/DRAN5BA900HSE8K/000001_1782099095.jpg", "DRAN5B-A900HSE8K", ["Wi-Fi 7", "BE5000", "3 入 Mesh", "雙 2.5G 埠"], ["Mesh", "Wi-Fi 7", "CP 值"]],
  ["wifi", "TP-Link", "Deco BE65 2-pack", "Deco BE65 Wi-Fi 7 BE11000 Mesh 二入組", 11999, "/items/DRAN08A900H851Z/000001_1782099268.jpg", "DRAN08-A900H851Z", ["Wi-Fi 7", "BE11000", "2 入 Mesh", "全 2.5G"], ["Mesh", "高速", "大戶型"]],
  ["wifi", "TP-Link", "Deco BE65 3-pack", "Deco BE65 Wi-Fi 7 BE11000 Mesh 三入組", 16999, "/items/DRAN08A900H8532/000001_1782099285.jpg", "DRAN08-A900H8532", ["Wi-Fi 7", "BE11000", "3 入 Mesh", "全屋網狀"], ["Mesh", "大戶型", "高階"]],
  ["wifi", "D-Link", "R95 AQUILA PRO AI", "R95 AQUILA PRO AI BE9500 Wi-Fi 7 三頻 Mesh 路由器", 5299, "/items/DRAF09A900IXX1D/000001_1760923958.jpg", "DRAF09-A900IXX1D", ["Wi-Fi 7", "BE9500", "三頻", "2.5G Mesh"], ["D-Link", "三頻", "台灣製造"]],
  ["wifi", "Mercusys", "MR27BE", "MR27BE Wi-Fi 7 BE3600 雙頻路由器", 1890, "/items/DSBC1TA900IR9CO/000001_1746532107.jpg", "DSBC1T-A900IR9CO", ["Wi-Fi 7", "BE3600", "雙 2.5G", "EasyMesh"], ["低價", "Wi-Fi 7", "入門"]],
  ["wifi", "TP-Link", "Archer BE700", "Archer BE700 Wi-Fi 7 BE15000 三頻 10G 路由器", 7999, "/items/DRAFJBA900I4F5A/000001_1780372394.jpg", "DRAFJB-A900I4F5A", ["Wi-Fi 7", "BE15000", "三頻 8 串流", "10G"], ["10G", "三頻", "高階"]],
  ["wifi", "Mercusys", "MR47BE", "MR47BE Wi-Fi 7 BE9300 三頻路由器", 4399, "/items/DRAFJ9A900H3SL0/000001_1753463636.jpg", "DRAFJ9-A900H3SL0", ["Wi-Fi 7", "BE9300", "三頻", "全 2.5G"], ["三頻", "CP 值", "EasyMesh"]],
  ["wifi", "TP-Link", "Archer BE805", "Archer BE805 Wi-Fi 7 BE19000 三頻 12 串流路由器", 12999, "/items/DRAN5BA900HQT2A/000001_1780372414.jpg", "DRAN5B-A900HQT2A", ["Wi-Fi 7", "BE19000", "雙 10G", "12 串流"], ["10G", "高階", "大戶型"]],
  ["wifi", "TP-Link", "Deco BE22", "Deco BE22 Wi-Fi 7 BE3600 Mesh 單入組", 2699, "/items/DSBC5UA900J0QSL/000001_1779184048.jpg", "DSBC5U-A900J0QSL", ["Wi-Fi 7", "BE3600", "單入 Mesh", "雙 1G 埠"], ["Mesh", "入門", "小宅"]],
  ["wifi", "TP-Link", "Archer BE900", "Archer BE900 Wi-Fi 7 BE24000 四頻 16 串流路由器", 16999, "/items/DRAN5BA900HF2LS/000001_1782099036.jpg", "DRAN5B-A900HF2LS", ["Wi-Fi 7", "BE24000", "四頻 16 串流", "雙 10G"], ["旗艦", "10G", "四頻"]],

  ["blender", "Vitamix", "VITA PREP", "VITA PREP 2.3 匹馬力生機調理機", 24500, "/items/QBAO0FA9008QMG3/000001_1782719707.jpg", "QBAO0F-A9008QMG3", ["2.3 匹馬力", "2L 杯", "美國原廠貨", "商家用"], ["Vitamix", "高馬力", "耐用"]],
  ["blender", "Vitamix", "VITA PREP 3", "VITA PREP3 多功能營養調理機", 26500, "/items/DMAY9TA900G068X/000001_1782790517.jpg", "DMAY9T-A900G068X", ["3 匹馬力", "高轉速", "美國原廠貨", "商家用"], ["Vitamix", "旗艦", "高馬力"]],
  ["blender", "Vitamix", "E320 Explorian", "E320 Explorian 探索者調理機雙杯組黑色", 22230, "/items/DMAY0GA900AGMD8/000001_1782460348.jpg", "DMAY0G-A900AGMD8", ["2.0L + 1.4L", "美國原裝", "Explorian 系列", "雙杯組"], ["Vitamix", "雙杯", "家用"]],
  ["blender", "Vitamix", "A2500i White", "Ascent A2500i 全食物調理機白色", 26640, "/items/QBAO0FA900AS2DJ/000001_1782460671.jpg", "QBAO0F-A900AS2DJ", ["Ascent 系列", "智能杯偵測", "全食物調理", "白色"], ["Vitamix", "智能", "家用"]],
  ["blender", "Blendtec", "Professional 800", "Professional 800 高效能食物調理機尊爵黑", 49500, "/items/DMAY0HA9009QNF5/000001_1782873831.png", "DMAY0H-A9009QNF5", ["高效能馬達", "隔音罩", "專業 800", "尊爵黑"], ["Blendtec", "隔音", "旗艦"]],
  ["blender", "Blendtec", "Connoisseur 825", "CONNOISSEUR 825 SpaceSaver 數位全能調理機", 30800, "/items/QBAO0GA900A6DWK/000001_1782719457.jpg", "QBAO0G-A900A6DWK", ["3.8 匹", "數位控制", "SpaceSaver", "美國原廠貨"], ["Blendtec", "商用", "高馬力"]],
  ["blender", "Blendtec", "Designer 650", "Designer 650 高效能食物調理機寶石紅", 26800, "/items/DMAYBBA900K6VSY/000001_1783390508.jpg", "DMAYBB-A900K6VSY", ["設計師 650", "高效能馬達", "預設行程", "寶石紅"], ["Blendtec", "設計", "家用"]],
  ["blender", "Blendtec", "Total Blender", "Total Blender 數位三匹馬力生機調理機", 28000, "/items/DMAYBBA900K3CZM/000001_1780982111.jpg", "DMAYBB-A900K3CZM", ["3 匹馬力", "數位控制", "台灣公司貨", "全食物調理"], ["Blendtec", "公司貨", "高馬力"]],
  ["blender", "Joyoung", "L19N-Y1W", "1.2L 高速調理果汁機", 1290, "/items/DMAY7KA900JXOTJ/000001_1779933584.jpg", "DMAY7K-A900JXOTJ", ["1.2L", "高速調理", "果汁/冰沙", "入門價位"], ["Joyoung", "低價", "小家庭"]],
  ["blender", "XD", "XD-A08", "豆漿機 XD-A08", 3793, "/items/DMAY4YA900J7NYF/000001_1757141350.jpg", "DMAY4Y-A900J7NYF", ["加熱豆漿", "破壁料理", "多功能料理", "家用"], ["加熱", "豆漿", "CP 值"]],

  ["oven", "only", "OM27-M54", "微波大師 27L 氣炸烤箱微波爐", 8990, "/items/DMBJ02A900I9LQ2/000001_1782379010.jpg", "DMBJ02-A900I9LQ2", ["27L", "微波/烤箱/氣炸", "乾果/舒肥/優格", "質感黑"], ["多合一", "CP 值", "小家庭"]],
  ["oven", "Cuisinart", "AMW-90TW", "25.5L 旗艦級三合一多功能微波氣炸烤箱", 9999, "/items/DMBJ6GA900J947G/000001_1757918714.jpg", "DMBJ6G-A900J947G", ["25.5L", "微波", "氣炸", "烤箱"], ["Cuisinart", "多合一", "CP 值"]],
  ["oven", "Panasonic", "NN-BS1700", "30L 蒸氣烘烤微波爐", 26900, "/items/DMBJ7P1900HCI3E/000001_1782972848.jpg", "DMBJ7P-1900HCI3E", ["30L", "蒸氣烘烤", "微波", "高階水波爐"], ["Panasonic", "蒸烤", "旗艦"]],
  ["oven", "Whirlpool", "MWP329TST", "Coloris 系列 32L 8 合 1 變頻氣炸蒸烤微波爐", 22900, "/items/DMBJ03A900IYX0L/000001_1750758530.jpg", "DMBJ03-A900IYX0L", ["32L", "8 合 1", "變頻", "氣炸蒸烤微波"], ["Whirlpool", "32L", "多合一"]],
  ["oven", "Cuisinart", "CSO-500TW", "20L 多功能蒸氣氣炸烤箱", 10800, "/items/DMBM0GA900HF91A/000001_1768545220.jpg", "DMBM0G-A900HF91A", ["20L", "蒸氣", "氣炸", "烘焙"], ["Cuisinart", "氣炸", "蒸氣"]],
  ["oven", "Whirlpool", "WSO2500B", "25 公升獨立式蒸烤爐", 9999, "/items/DMBJ6QA900EO5DH/000001_1704094465.jpg", "DMBJ6Q-A900EO5DH", ["25L", "蒸烤", "舒肥", "低溫發酵"], ["Whirlpool", "蒸烤", "小家庭"]],
  ["oven", "SHARP", "AX-XW10T", "AIoT 智慧連網 30L 水波爐蒸氣烘烤微波爐", 38800, "/items/DMBM0GA900G41CW/000001_1780306175.jpg", "DMBM0G-A900G41CW", ["30L", "水波爐", "AIoT", "蒸氣烘烤微波"], ["SHARP", "水波爐", "旗艦"]],
  ["oven", "Panasonic", "NU-SC180B", "20L 蒸氣烘烤爐", 9990, "/items/DMBJ7P1900HCM99/000001_1780393215.jpg", "DMBJ7P-1900HCM99", ["20L", "蒸氣烘烤", "18 項自動菜單", "120 度快速蒸"], ["Panasonic", "蒸氣", "省空間"]],
  ["oven", "SHARP", "AX-XS10T", "31L 極智烘烤系列水波爐", 24900, "/items/DMBJ0RA900JT4ZV/000001_1781238451.jpg", "DMBJ0R-A900JT4ZV", ["31L", "極智烘烤", "水波爐", "黑/白"], ["SHARP", "31L", "均衡"]],
  ["oven", "Whirlpool", "WSO322EB", "32 公升獨立式萬用蒸烤爐", 14800, "/items/DMBJ6QA900EO9M8/000001_1716271473.jpg", "DMBJ6Q-A900EO9M8", ["32L", "蒸氣", "烘烤", "旋風"], ["Whirlpool", "32L", "蒸烤"]],

  ["bidet", "TOTO", "TCF47160GTW S7", "S7 輕奢款 WASHLET 溫水洗淨便座", 23900, "/items/DMAL6WA900JNQF2/000001_1783412715.jpg", "DMAL6W-A900JNQF2", ["WASHLET", "電解除菌水", "溫熱便座", "S7 輕奢款"], ["TOTO", "除菌", "高階"]],
  ["bidet", "TOTO", "TCF24460ATW C5", "C5 藏線式 WASHLET 溫水洗淨便座", 14300, "/items/DMAL6IA900JEWPS/000001_1765348841.jpg", "DMAL6I-A900JEWPS", ["WASHLET", "噴嘴自潔", "溫熱便座", "藏線式"], ["TOTO", "藏線", "均衡"]],
  ["bidet", "TOTO", "TCF34461GTW S5", "S5 除菌溫水洗淨便座", 17900, "/items/DMAL6WA900JVX5O/000001_1775638184.jpg", "DMAL6W-A900JVX5O", ["電解除菌水", "強力除臭", "無線遙控", "WASHLET"], ["TOTO", "除臭", "遙控"]],
  ["bidet", "TOTO", "TCF33161GTW S2", "S2 標準款除菌溫水洗淨便座", 11900, "/items/DMAL6WA900JW0LW/000001_1775705407.jpg", "DMAL6W-A900JW0LW", ["電解除菌水", "智慧洗淨", "溫熱便座", "標準款"], ["TOTO", "標準", "CP 值"]],
  ["bidet", "TOTO", "TCF47360GTW S7", "S7 旗艦款 WASHLET 溫水洗淨便座", 34900, "/items/DMAL6IA900JEKAD/000001_1783410655.jpg", "DMAL6I-A900JEKAD", ["WASHLET", "噴嘴自潔", "溫熱便座", "旗艦款"], ["TOTO", "旗艦", "除菌"]],
  ["bidet", "TOTO", "TCF33461GTW S2", "S2 進階款除菌溫水洗淨便座", 14900, "/items/DMAL6WA900JVWI8/000001_1775634174.jpg", "DMAL6W-A900JVWI8", ["電解除菌水", "強力除臭", "暖風烘乾", "WASHLET"], ["TOTO", "暖風", "除臭"]],
  ["bidet", "Panasonic", "DL-F610RTWS", "儲熱式溫水洗淨便座含原廠基本安裝", 6190, "/items/DMAL8LA900GH6F4/000001_1724400418.jpg", "DMAL8L-A900GH6F4", ["儲熱式", "溫水洗淨", "含基本安裝", "入門價位"], ["Panasonic", "低價", "安裝"]],
  ["bidet", "Panasonic", "DL-RT30TWWS", "纖薄美型瞬熱式溫水洗淨便座", 15752, "/items/DMAL6WA900I0L73/000001_1729761324.jpg", "DMAL6W-A900I0L73", ["瞬熱式", "纖薄設計", "溫水洗淨", "美型"], ["Panasonic", "瞬熱", "設計"]],
  ["bidet", "Panasonic", "DL-PU30TWWS", "瞬熱式溫水洗淨便座", 11954, "/items/DMAL6WA900JEEZE/000001_1776140283.jpg", "DMAL6W-A900JEEZE", ["瞬熱式", "溫水洗淨", "溫控", "家用"], ["Panasonic", "瞬熱", "均衡"]],
  ["bidet", "KOHLER", "C3-150", "C3-150 電腦免治馬桶蓋", 14900, "/items/DMALE4A900FW2KJ/000001_1752829867.jpg", "DMALE4-A900FW2KJ", ["瞬熱出水", "五檔溫控", "不鏽鋼噴嘴", "KOHLER"], ["KOHLER", "瞬熱", "衛浴品牌"]],
];

function extraBudget(category, price) {
  if (price >= extraPremiumFloor[category]) return "premium";
  if (price < extraValueFloor[category]) return "value";
  return "mid";
}

const extraCategoryRanks = {};
const extraProducts = extraProductRows.map(([category, brand, model, name, price, image, sku, specs, tags]) => {
  const rank = (extraCategoryRanks[category] || 5) + 1;
  extraCategoryRanks[category] = rank;
  const copy = extraCategoryCopy[category];
  return {
    id: `${category}-extra-${rank}-${sku.toLowerCase()}`,
    category,
    rank,
    budget: extraBudget(category, price),
    channel: "tw",
    brand,
    model,
    name,
    price: twd(price),
    image: pchomeImage(image),
    buyUrl: pchomeLink(sku),
    buyLabel: "PChome",
    specs,
    description: `${brand} ${model} 是${copy.label}類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。`,
    pros: copy.pros,
    cons: copy.cons,
    bestFor: copy.bestFor,
    recommendation: `同類推薦：${copy.reason}`,
    score: Math.max(76, 87 - (rank - 6)),
    voltage: copy.voltage,
    warranty: "依 PChome/供應商頁面",
    tags,
  };
});

products.push(...extraProducts);

const robotTierCopy = {
  flagship: {
    label: "旗艦",
    budget: "premium",
    pros: ["規格完整、清潔自動化程度高", "避障、拖地或基站通常是品牌當代主力"],
    cons: ["價格高、耗材成本需預留", "大型基站需要確認家中擺放空間"],
    bestFor: "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
  },
  subflagship: {
    label: "次旗艦",
    budget: "mid",
    pros: ["保留多數高階功能", "價格通常比旗艦更容易入手"],
    cons: ["避障、越障或拖地細節可能少一階", "部分新功能會留給旗艦款"],
    bestFor: "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
  },
};

function robotPchomeProduct(row) {
  const tier = robotTierCopy[row.tier];
  return {
    id: row.id,
    category: "robot",
    rank: row.rank,
    topPick: row.topPick,
    budget: row.budget || tier.budget,
    channel: "tw",
    brand: row.brand,
    model: row.model,
    name: row.name,
    price: twd(row.price),
    image: pchomeImage(row.image),
    buyUrl: pchomeLink(row.sku),
    buyLabel: "PChome",
    specs: row.specs,
    description: `${row.brand} ${row.model} 是${tier.label}級掃拖機器人，這筆以 2026-07-08 台灣通路可查售價與規格整理。`,
    pros: row.pros || tier.pros,
    cons: row.cons || tier.cons,
    bestFor: row.bestFor || tier.bestFor,
    recommendation: row.recommendation || `同類推薦：列入 ${row.brand} ${tier.label}代表機種，適合和同品牌下一階機型一起比較。`,
    score: row.score,
    voltage: "110V 台灣通路",
    warranty: "依 PChome/供應商頁面",
    tags: row.tags,
  };
}

function robotGlobalProduct(row) {
  const tier = robotTierCopy[row.tier];
  return {
    id: row.id,
    category: "robot",
    rank: row.rank,
    budget: row.budget || tier.budget,
    channel: "global",
    brand: row.brand,
    model: row.model,
    name: row.name,
    price: row.price,
    image: row.image,
    buyUrl: row.buyUrl,
    buyLabel: row.buyLabel,
    specs: row.specs,
    description: `${row.brand} ${row.model} 是${tier.label}級海外參考機型，換算 TWD 僅供比較，未含國際運費、進口稅與台灣保固。`,
    pros: row.pros || tier.pros,
    cons: row.cons || ["海外購買價格波動大", "需確認電壓、插頭、耗材與台灣保固"],
    bestFor: row.bestFor || "想追新款、可接受海外購買與保固風險，並願意自行確認電壓與耗材的人。",
    recommendation: row.recommendation || `海外參考：用來對照 ${row.brand} 台灣上市機種與同級旗艦功能差異。`,
    score: row.score,
    voltage: "海外版本，需確認 100-240V、插頭與變壓器需求",
    warranty: "可能無台灣保固，購買前需向通路確認",
    tags: row.tags,
  };
}

const flagshipRobotProducts = [
  robotPchomeProduct({
    id: "robot-roborock-saros-z70",
    rank: 2,
    tier: "flagship",
    brand: "Roborock",
    model: "Saros Z70",
    name: "全能機械手臂旗艦掃拖王者",
    price: 36980,
    image: "/items/DMBL1CA900IGHHM/000001_1782870336.jpg",
    sku: "DMBL1C-A900IGHHM",
    specs: ["機械手臂", "22000Pa", "7.98cm 超薄", "80 度熱洗"],
    recommendation: "旗艦展示型：機械手臂與超薄設計很吸睛，但價格高，綜合 CP 不如 Qrevo Curv 2 Flow。",
    score: 94,
    tags: ["旗艦", "機械手臂", "零纏繞"],
  }),
  robotPchomeProduct({
    id: "robot-roborock-saros-20-aqua",
    rank: 3,
    tier: "flagship",
    brand: "Roborock",
    model: "Saros 20 水立方",
    name: "跨越奇兵旗艦掃拖王者水立方版",
    price: 34980,
    image: "/items/DMBL1CA900JNELR/000001_1769062030.jpg",
    sku: "DMBL1C-A900JNELR",
    specs: ["36000Pa", "100 度熱水洗", "雙門檻越障", "旗艦水立方基站"],
    recommendation: "Roborock 旗艦補強：如果不需要 Z70 機械手臂，Saros 20 水立方是清潔、越障與熱水洗拖更務實的旗艦選項。",
    score: 95,
    tags: ["旗艦", "熱水洗拖", "越障"],
  }),
  robotPchomeProduct({
    id: "robot-roborock-saros-20",
    rank: 4,
    tier: "flagship",
    brand: "Roborock",
    model: "Saros 20",
    name: "跨越奇兵旗艦越障掃拖王者",
    price: 32980,
    image: "/items/DMBL1CA900JMMCO/000001_1769061975.jpg",
    sku: "DMBL1C-A900JMMCO",
    specs: ["36000Pa", "8.8cm 雙門檻越障", "300+ 障礙物識別", "雙重防纏繞"],
    recommendation: "Roborock 當代旗艦代表：比 Z70 更聚焦吸力、越障與日常穩定性，適合家中門檻多的人。",
    score: 94,
    tags: ["旗艦", "越障", "寵物毛"],
  }),
  robotPchomeProduct({
    id: "robot-roborock-qrevo-edge-2-pro",
    rank: 5,
    tier: "subflagship",
    brand: "Roborock",
    model: "Qrevo Edge 2 Pro",
    name: "雙越野高智商旗艦級掃拖機器人",
    price: 26980,
    image: "/items/DMBL1CA900JPHOP/000001_1782870240.jpg",
    sku: "DMBL1C-A900JPHOP",
    specs: ["25000Pa", "7.98cm 超薄", "100 度熱水洗", "雙門檻越障"],
    score: 92,
    tags: ["次旗艦", "超薄", "熱水洗拖"],
  }),
  robotPchomeProduct({
    id: "robot-roborock-qrevo-curv-2-flow",
    rank: 1,
    topPick: true,
    tier: "subflagship",
    brand: "Roborock",
    model: "Qrevo Curv 2 Flow",
    name: "滾筒全自動洗拖烘掃地機器人",
    price: 18999,
    image: "/items/DMBL1CA900JA04J/000001_1782870267.jpg",
    sku: "DMBL1C-A900JA04J",
    specs: ["滾筒拖地", "20000Pa", "自動洗烘", "全能基站"],
    recommendation: "綜合推薦：價格約頂級旗艦一半，仍有滾筒拖地、全能基站與 Roborock 口碑，CP/功能/售後最均衡。",
    score: 95,
    tags: ["次旗艦", "滾筒拖地", "自動洗烘"],
  }),
  robotPchomeProduct({
    id: "robot-ecovacs-x11-pro-plumbed",
    rank: 6,
    tier: "flagship",
    brand: "Ecovacs",
    model: "DEEBOT X11 PRO 上下水款",
    name: "無限續航滾筒洗地機器人上下水款",
    price: 25999,
    image: "/items/DMBL0LA900JRDAS/000001_1771917633.jpg",
    sku: "DMBL0L-A900JRDAS",
    specs: ["滾筒洗地", "自動上下水", "氮化鎵瞬時閃充", "全能基站"],
    recommendation: "ECOVACS 旗艦補強：若可安裝上下水，這台比一般水箱版更接近真正免維護。",
    score: 95,
    tags: ["旗艦", "上下水", "滾筒洗地"],
  }),
  robotPchomeProduct({
    id: "robot-ecovacs-x11-pro",
    rank: 7,
    tier: "flagship",
    brand: "Ecovacs",
    model: "DEEBOT X11 PRO",
    name: "無限續航滾筒洗地機器人",
    price: 22999,
    image: "/items/DMBL0LA900J5HJ0/000001_1766715791.jpg",
    sku: "DMBL0L-A900J5HJ0",
    specs: ["滾筒洗地", "氮化鎵瞬時閃充", "GPT 級語音", "全能基站"],
    score: 94,
    tags: ["旗艦", "滾筒洗地", "快速回充"],
  }),
  robotPchomeProduct({
    id: "robot-ecovacs-t80-omni",
    rank: 8,
    tier: "subflagship",
    brand: "Ecovacs",
    model: "DEEBOT T80 OMNI",
    name: "滾筒活水洗地掃拖機器人",
    price: 16999,
    image: "/items/DMBL0LA900IT3IU/000001_1763087795.jpg",
    sku: "DMBL0L-A900IT3IU",
    specs: ["滾筒活水洗地", "16 倍壓強", "無縫貼邊", "全能基站"],
    score: 91,
    tags: ["次旗艦", "滾筒洗地", "貼邊清潔"],
  }),
  robotPchomeProduct({
    id: "robot-ecovacs-t50-pro",
    rank: 9,
    tier: "subflagship",
    brand: "Ecovacs",
    model: "DEEBOT T50 PRO OMNI",
    name: "超薄全覆蓋全能旗艦掃拖機器人",
    price: 14999,
    image: "/items/DMBL0LA900IDIPA/000001_1763087835.jpg",
    sku: "DMBL0L-A900IDIPA",
    specs: ["81mm 超薄", "高溫洗烘", "萬物沿邊", "OMNI 基站"],
    score: 89,
    tags: ["次旗艦", "超薄", "沿邊清潔"],
  }),
  robotPchomeProduct({
    id: "robot-ecovacs-n50",
    rank: 10,
    tier: "subflagship",
    brand: "Ecovacs",
    model: "DEEBOT N50",
    name: "強清潔全能掃拖機器人",
    price: 12999,
    image: "/items/DMBL0LA900J0KF3/000001_1765762606.jpg",
    sku: "DMBL0L-A900J0KF3",
    specs: ["20000Pa", "雙恆貼邊", "全能基站", "強清潔定位"],
    recommendation: "ECOVACS 次旗艦/高 CP 補位：想要 OMNI 基站但預算不想上 X/T 旗艦線時可看。",
    score: 87,
    tags: ["次旗艦", "CP 值", "全能基站"],
  }),
  robotPchomeProduct({
    id: "robot-dreame-x60-master",
    rank: 11,
    tier: "flagship",
    brand: "Dreame",
    model: "X60 Master",
    name: "AI 藍光辨識超薄掃拖旗艦機低矮版",
    price: 31980,
    image: "/items/DMBL3EA900JZ3SP/000001_1780033309.jpg",
    sku: "DMBL3E-A900JZ3SP",
    specs: ["7.95cm 超薄", "36000Pa", "AI 藍光辨識", "低矮版旗艦"],
    score: 95,
    tags: ["旗艦", "超薄", "AI 辨識"],
  }),
  robotPchomeProduct({
    id: "robot-dreame-d30-ultra-ce",
    rank: 12,
    tier: "subflagship",
    brand: "Dreame",
    model: "D30 Ultra CE",
    name: "全能掃拖機器人",
    price: 9999,
    image: "/items/DMBL3EA900JY4G0/000001_1780033612.jpg",
    sku: "DMBL3E-A900JY4G0",
    specs: ["全能基站", "掃拖一體", "自動清潔", "入門旗艦功能"],
    score: 88,
    tags: ["次旗艦", "全能基站", "CP 值"],
  }),
  robotPchomeProduct({
    id: "robot-narwal-freo-z-ultra",
    rank: 13,
    tier: "flagship",
    brand: "Narwal",
    model: "Freo Z Ultra",
    name: "真雙目 AI 掃拖機器人",
    price: 23888,
    image: "/items/DMBL4UA900JA072/000001_1766479545.jpg",
    sku: "DMBL4U-A900JA072",
    specs: ["真雙目 AI", "熱水熱烘", "零纏繞 2.0", "自動集塵"],
    score: 92,
    tags: ["旗艦", "AI 避障", "熱水熱烘"],
  }),
  robotGlobalProduct({
    id: "robot-narwal-flow-2",
    rank: 14,
    tier: "flagship",
    brand: "Narwal",
    model: "Flow 2",
    name: "滾筒洗地旗艦掃拖機器人",
    price: eur(1299),
    image: "https://boulanger.scene7.com/is/image/Boulanger/6972075738536_h_f_l_0?fmt=png-alpha&wid=640&hei=640",
    buyUrl: "https://www.boulanger.com/ref/1238998",
    buyLabel: "Boulanger",
    specs: ["31000Pa", "60 度熱水洗", "4cm 越障", "滾筒刷洗地"],
    score: 90,
    tags: ["旗艦", "海外參考", "滾筒洗地"],
  }),
  robotGlobalProduct({
    id: "robot-narwal-freo-z10-ultra",
    rank: 15,
    tier: "subflagship",
    brand: "Narwal",
    model: "Freo Z10 Ultra",
    name: "18,000Pa AI 視覺全能掃拖機器人",
    price: usd(553.09),
    image: "https://img.gkbcdn.com/p/2025-04-11/Narwal-Freo-Z10-Ultra-Robot-Vacuum-with-Base-Station-Gray-528438-0._w315_.jpg",
    buyUrl: "https://www.geekbuying.com/item/Narwal-Freo-Z10-Ultra-Robot-Vacuum-with-Base-Station-Gray-528438.html",
    buyLabel: "Geekbuying",
    specs: ["18000Pa", "AI 視覺避障", "45-75 度熱水洗", "All-in-One Dock"],
    score: 87,
    tags: ["次旗艦", "海外參考", "熱水洗拖"],
  }),
  robotPchomeProduct({
    id: "robot-irobot-max-705",
    rank: 16,
    tier: "flagship",
    brand: "iRobot",
    model: "Roomba Max 705 Combo",
    name: "全能滾筒旗艦機皇掃拖機器人",
    price: 29380,
    image: "/items/DMBL0JA900JCCJT/000001_1782802020.jpg",
    sku: "DMBL0J-A900JCCJT",
    specs: ["滾筒旗艦", "全能掃拖", "自動基站", "Combo 系列"],
    score: 90,
    tags: ["旗艦", "滾筒", "Roomba"],
  }),
  robotPchomeProduct({
    id: "robot-irobot-plus-505",
    rank: 17,
    tier: "subflagship",
    brand: "iRobot",
    model: "Roomba Plus 505 Combo",
    name: "熱旋風延邊避障全能掃拖機器人",
    price: 19880,
    image: "/items/DMBL0JA900ITF7U/000001_1782802931.jpg",
    sku: "DMBL0J-A900ITF7U",
    specs: ["熱旋風", "延邊避障", "全能掃拖", "自動基站"],
    score: 87,
    tags: ["次旗艦", "延邊清潔", "Roomba"],
  }),
  robotPchomeProduct({
    id: "robot-irobot-plus-405",
    rank: 18,
    tier: "subflagship",
    brand: "iRobot",
    model: "Roomba Plus 405 Combo",
    name: "旋風全能掃拖機器人",
    price: 16880,
    image: "/items/DMBL0JA900ITF88/000001_1782803241.jpg",
    sku: "DMBL0J-A900ITF88",
    specs: ["旋風清潔", "全能掃拖", "自動基站", "Combo 系列"],
    score: 84,
    tags: ["次旗艦", "Roomba", "均衡"],
  }),
  robotPchomeProduct({
    id: "robot-irobot-205-combo",
    rank: 19,
    tier: "subflagship",
    brand: "iRobot",
    model: "Roomba 205 Combo",
    name: "自動壓縮集塵掃拖機器人",
    price: 13380,
    image: "/items/DMBL0JA900J02LR/000001_1782803287.jpg",
    sku: "DMBL0J-A900J02LR",
    specs: ["自動壓縮集塵", "掃拖一體", "Combo 系列", "極夜黑"],
    recommendation: "iRobot 次旗艦補位：比 Plus/Max 便宜，仍保留 Roomba Combo 掃拖與自動集塵核心體驗。",
    score: 83,
    tags: ["次旗艦", "自動集塵", "Roomba"],
  }),
  robotPchomeProduct({
    id: "robot-eufy-omni-s2",
    rank: 20,
    tier: "flagship",
    brand: "eufy",
    model: "Omni S2",
    name: "12 合 1 自清潔 AI 掃拖機器人",
    price: 31990,
    image: "/items/DMBL2DA900JOEN3/000001_1782120334.jpg",
    sku: "DMBL2D-A900JOEN3",
    specs: ["12 合 1 基站", "AI 掃拖", "自清潔", "全能機器人"],
    recommendation: "eufy 旗艦代表：Anker 生態系品牌的高階全能款，適合重視自清潔與簡潔 App 體驗的人。",
    score: 90,
    tags: ["旗艦", "AI 掃拖", "自清潔"],
  }),
  robotPchomeProduct({
    id: "robot-eufy-omni-e25",
    rank: 21,
    tier: "subflagship",
    brand: "eufy",
    model: "Omni E25",
    name: "自清潔掃拖一體全能機器人",
    price: 15990,
    image: "/items/DMBL2DA900IUBA2/000001_1782120226.jpg",
    sku: "DMBL2D-A900IUBA2",
    specs: ["20000Pa", "活水洗地", "零纏繞伸縮滾刷", "自清潔基站"],
    recommendation: "eufy 次旗艦甜點：用不到 S2 高階完整包時，E25 的吸力、活水洗地與價格更均衡。",
    score: 88,
    tags: ["次旗艦", "活水洗地", "零纏繞"],
  }),
  robotPchomeProduct({
    id: "robot-eufy-omni-c28",
    rank: 22,
    tier: "subflagship",
    brand: "eufy",
    model: "Omni C28",
    name: "自清潔掃拖一體全能機器人",
    price: 13990,
    image: "/items/DMBL2DA900K13C9/000001_1782120164.jpg",
    sku: "DMBL2D-A900K13C9",
    specs: ["自清潔基站", "掃拖一體", "白色機身", "全能入門定位"],
    recommendation: "eufy 高 CP 補位：價格低於 E25/S2，適合先上自清潔基站但不追最高規格的人。",
    score: 85,
    tags: ["次旗艦", "CP 值", "自清潔"],
  }),
  robotPchomeProduct({
    id: "robot-mova-s70-ultra-roller",
    rank: 23,
    tier: "flagship",
    brand: "MOVA",
    model: "S70 Ultra Roller",
    name: "極薄滾筒掃拖機器人旗艦版",
    price: 26980,
    image: "/items/DMBL5WA900JXBY3/000001_1776393356.jpg",
    sku: "DMBL5W-A900JXBY3",
    specs: ["極薄機身", "滾筒洗地", "旗艦版", "全能基站"],
    recommendation: "MOVA 旗艦代表：把極薄機身與滾筒拖地放在同一台，適合家具底部低又重視拖地的人。",
    score: 89,
    tags: ["旗艦", "極薄", "滾筒洗地"],
  }),
  robotPchomeProduct({
    id: "robot-mova-s70-roller",
    rank: 24,
    tier: "subflagship",
    brand: "MOVA",
    model: "S70 Roller",
    name: "極薄滾筒掃拖機器人",
    price: 16990,
    image: "/items/DMBL5WA900K13VT/000001_1779264098.jpg",
    sku: "DMBL5W-A900K13VT",
    specs: ["極薄機身", "滾筒掃拖", "全能基站", "貼邊清潔"],
    recommendation: "MOVA 次旗艦補位：想要 S70 系列滾筒拖地，但預算不想上 Ultra 時更有 CP 值。",
    score: 86,
    tags: ["次旗艦", "極薄", "滾筒洗地"],
  }),
  robotPchomeProduct({
    id: "robot-lg-r5t-ultimate",
    rank: 25,
    tier: "subflagship",
    brand: "LG",
    model: "R5-ULTIMATE1",
    name: "R5T 變頻濕拖掃地機器人",
    price: 13490,
    image: "/items/DMBM2ZA900IUC17/000001_1778123320.jpg",
    sku: "DMBM2Z-A900IUC17",
    specs: ["變頻濕拖", "掃地機器人", "LG ThinQ 生態", "R5T 系列"],
    recommendation: "LG 代表機：規格不追中系旗艦，但品牌售後與家電生態明確，適合偏好 LG 的家庭。",
    score: 82,
    tags: ["次旗艦", "LG 生態", "濕拖"],
  }),
  robotPchomeProduct({
    id: "robot-lg-r5-proplus",
    rank: 26,
    tier: "subflagship",
    brand: "LG",
    model: "R5-PROPLUS1",
    name: "R5 變頻濕拖掃地機器人",
    price: 9490,
    image: "/items/DMBM2ZA900IUC1E/000001_1768835646.jpg",
    sku: "DMBM2Z-A900IUC1E",
    specs: ["變頻濕拖", "掃地機器人", "入門 R5 系列", "台灣通路"],
    recommendation: "LG 高 CP 補位：若只需要基礎掃拖與品牌售後，這台比追旗艦更省預算。",
    score: 80,
    tags: ["次旗艦", "CP 值", "濕拖"],
  }),
  robotGlobalProduct({
    id: "robot-shark-powerdetect-nevertouch-pro",
    rank: 27,
    tier: "flagship",
    brand: "Shark",
    model: "PowerDetect NeverTouch Pro RV2820ZE",
    name: "自動補水洗烘拖布掃拖機器人",
    price: usd(499.99),
    image: "https://assets.sharkninja.com/image/upload/f_auto/q_auto/SharkNinja-NA/RV2820ZE_01.jpg",
    buyUrl: "https://www.sharkninja.com/shark-powerdetect-2-in-1-robot-vacuum-and-mop-with-nevertouch-pro-base/RV2820ZE.html",
    buyLabel: "SharkNinja US",
    specs: ["NeverTouch Pro 基站", "自動補水", "自動洗烘拖布", "官網標示 In Stock"],
    pros: ["官方頁目前有明確折扣價與庫存", "基站維護自動化程度高"],
    cons: ["海外版需確認電壓/保固/耗材", "台灣購買便利性不如本地通路"],
    bestFor: "想比較美系旗艦掃拖機器人，且可接受海外購買與保固風險的人。",
    recommendation: "Shark 海外旗艦代表：用來補足台灣通路較少見的美系自動維護基站方案。",
    score: 86,
    tags: ["旗艦", "海外參考", "自動洗烘"],
  }),
  robotGlobalProduct({
    id: "robot-dyson-spot-scrub-ai",
    rank: 28,
    tier: "flagship",
    brand: "Dyson",
    model: "Spot+Scrub Ai",
    name: "AI 汙漬偵測濕乾掃拖機器人",
    price: usd(1199),
    image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/home/floorcare/robot/spot-scrub-ai/rcc/Web-804A-Category-Page-Module1.jpg?$responsive$&fmt=pjpeg&wid=640",
    buyUrl: "https://www.dyson.com/vacuum-cleaners/robot/spot-scrub-ai",
    buyLabel: "Dyson US",
    specs: ["18000Pa", "AI 汙漬辨識", "自清潔滾筒", "Cyclonic dock"],
    pros: ["Dyson 官方頁可查規格與評論", "濕拖、汙漬偵測與無集塵袋基站有特色"],
    cons: ["官方頁目前顯示 Notify me，供貨需確認", "海外版需確認電壓、插頭與台灣保固"],
    bestFor: "想追 Dyson 最新掃拖機器人，且能等待供貨、接受海外版風險的人。",
    recommendation: "Dyson 海外旗艦參考：品牌辨識度高，但供貨與價格不穩，不列為台灣綜合推薦。",
    score: 84,
    tags: ["旗艦", "海外參考", "供貨待確認"],
  }),
];

products.splice(
  0,
  products.length,
  ...products.filter((product) => product.category !== "robot"),
  ...flagshipRobotProducts,
);

const categoryById = new Map(categories.map((category) => [category.id, category]));
const state = {
  category: "all",
  brand: "all",
  budget: "all",
  channel: "all",
  sort: "rank",
  search: "",
  compare: new Set(),
  mobileFiltersOpen: false,
};

const currencyFormatter = new Intl.NumberFormat("zh-TW", {
  maximumFractionDigits: 0,
});

function formatTwd(value) {
  return `NT$${currencyFormatter.format(value)}`;
}

function formatOriginal(price) {
  if (price.currency === "TWD") {
    return `TWD ${currencyFormatter.format(price.amount)}`;
  }
  return `${price.currency} ${price.amount.toLocaleString(undefined, {
    minimumFractionDigits: price.amount % 1 ? 2 : 0,
    maximumFractionDigits: 2,
  })}`;
}

function budgetLabel(value) {
  return {
    value: "CP 值",
    mid: "均衡",
    premium: "旗艦",
  }[value] || value;
}

function channelLabel(value) {
  return value === "global" ? "海外通路" : "台灣通路";
}

function productText(product) {
  return [
    product.brand,
    product.model,
    product.name,
    product.description,
    product.bestFor,
    product.recommendation,
    product.specs.join(" "),
    product.tags.join(" "),
  ].join(" ").toLowerCase();
}

function sortedProducts(list) {
  return [...list].sort((a, b) => {
    if (state.sort === "priceAsc") return a.price.converted - b.price.converted;
    if (state.sort === "priceDesc") return b.price.converted - a.price.converted;
    if (state.sort === "scoreDesc") return b.score - a.score;
    const catDiff = categories.findIndex((c) => c.id === a.category) - categories.findIndex((c) => c.id === b.category);
    return catDiff || a.rank - b.rank;
  });
}

function filteredProducts() {
  const query = state.search.trim().toLowerCase();
  return sortedProducts(products.filter((product) => {
    if (state.category !== "all" && product.category !== state.category) return false;
    if (state.brand !== "all" && product.brand !== state.brand) return false;
    if (state.budget !== "all" && product.budget !== state.budget) return false;
    if (state.channel !== "all" && product.channel !== state.channel) return false;
    if (query && !productText(product).includes(query)) return false;
    return true;
  }));
}

function renderSelects() {
  const categorySelect = document.getElementById("categorySelect");
  categorySelect.innerHTML = `<option value="all">全部分類</option>${categories
    .map((category) => `<option value="${category.id}">${category.label}</option>`)
    .join("")}`;

  const brands = [...new Set(products.map((product) => product.brand))].sort((a, b) => a.localeCompare(b, "zh-Hant"));
  const brandSelect = document.getElementById("brandSelect");
  brandSelect.innerHTML = `<option value="all">全部品牌</option>${brands
    .map((brand) => `<option value="${brand}">${brand}</option>`)
    .join("")}`;
}

function renderTabs() {
  const tabs = document.getElementById("categoryTabs");
  const allButton = `<button class="tab-button ${state.category === "all" ? "active" : ""}" type="button" data-category="all" aria-pressed="${state.category === "all"}">全部</button>`;
  tabs.innerHTML = allButton + categories.map((category) => {
    const count = products.filter((product) => product.category === category.id).length;
    return `<button class="tab-button ${state.category === category.id ? "active" : ""}" type="button" data-category="${category.id}" aria-pressed="${state.category === category.id}">${category.label} ${count}</button>`;
  }).join("");
}

function renderStats(visible) {
  document.getElementById("categoryCount").textContent = categories.length;
  document.getElementById("productCount").textContent = products.length;
  document.getElementById("visibleCount").textContent = visible.length;
  document.getElementById("compareCount").textContent = state.compare.size;
  document.getElementById("mobileVisibleCount").textContent = visible.length;
  document.getElementById("mobileCompareCount").textContent = state.compare.size;
  document.getElementById("mobileCompareLink").classList.toggle("active", state.compare.size > 0);
}

function renderTopPicks(visible) {
  const topPickIds = new Set(products.filter((product) => product.topPick).map((product) => product.id));
  const picks = visible.filter((product) => topPickIds.has(product.id));
  const container = document.getElementById("topPicks");
  if (!picks.length) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = picks.map((product) => `
    <article class="pick-card">
      ${imageMarkup(product)}
      <div>
        <p class="eyebrow">${categoryById.get(product.category).label} 綜合推薦</p>
        <h3>${product.brand} ${product.model}</h3>
        <p>${product.recommendation}</p>
      </div>
    </article>
  `).join("");
}

function imageMarkup(product) {
  const fallback = `
    <div class="fallback-art">
      <div>
        <strong>${product.brand}</strong>
        <span>${product.model}</span>
      </div>
    </div>`;
  if (!product.image) {
    return `
      <div class="fallback-art" style="display:grid">
        <div>
          <strong>${product.brand}</strong>
          <span>${product.model}</span>
        </div>
      </div>`;
  }
  return `<img src="${product.image}" alt="${product.brand} ${product.model}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">${fallback}`;
}

function cardMarkup(product) {
  const isCompared = state.compare.has(product.id);
  const priceNote = product.price.currency === "TWD"
    ? "台灣通路售價"
    : `${product.price.confidence}，匯率 ${product.price.currency} 轉 TWD；未含國際運費/進口稅`;
  return `
    <article class="product-card">
      <div class="image-wrap">
        <div class="badge-row">
          <span class="badge ${product.budget}">${budgetLabel(product.budget)}</span>
          <span class="badge ${product.channel === "global" ? "risk" : ""}">${channelLabel(product.channel)}</span>
          ${product.topPick ? `<span class="badge value">綜合推薦</span>` : ""}
        </div>
        ${imageMarkup(product)}
      </div>
      <div class="card-body">
        <div>
          <div class="meta-row">
            <span>${categoryById.get(product.category).label}</span>
            <span>${product.brand}</span>
            <span class="model">${product.model}</span>
          </div>
          <h3>${product.name}</h3>
        </div>
        <div class="price-row">
          <div>
            <span class="field-label">建議/常見售價</span>
            <strong>${formatTwd(product.price.converted)}</strong>
            <small>${formatOriginal(product.price)} · ${priceNote}</small>
          </div>
          <div class="score" title="綜合評估分數">${product.score}</div>
        </div>
        <div class="spec-list">
          ${product.specs.map((spec, index) => `
            <div class="spec-item">
              <b>規格 ${index + 1}</b>
              <span>${spec}</span>
            </div>
          `).join("")}
        </div>
        <p class="description">${product.description}</p>
        <p class="recommendation">${product.recommendation}</p>
        <div class="pros-cons">
          <div>
            <span class="field-label">優勢</span>
            <ul>${product.pros.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <span class="field-label">留意</span>
            <ul>${product.cons.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
        <div class="spec-item">
          <b>適合對象</b>
          <span>${product.bestFor}</span>
        </div>
        <div class="spec-item">
          <b>電壓 / 保固</b>
          <span>${product.voltage}；${product.warranty}</span>
        </div>
        <div class="tag-row">${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <p class="fineprint">資料來源：${product.buyLabel}，擷取日 2026-07-08。</p>
      </div>
      <div class="card-actions">
        <a class="buy-link" href="${product.buyUrl}" target="_blank" rel="noreferrer">購買連結</a>
        <button class="compare-button ${isCompared ? "active" : ""}" type="button" data-compare="${product.id}" aria-pressed="${isCompared}">
          ${isCompared ? "已加入比較" : "加入比較"}
        </button>
      </div>
    </article>
  `;
}

function renderProducts(visible) {
  const grid = document.getElementById("productGrid");
  if (!visible.length) {
    grid.innerHTML = `<div class="empty-state">沒有符合目前篩選條件的產品。</div>`;
    return;
  }
  grid.innerHTML = visible.map(cardMarkup).join("");
}

function renderCompare() {
  const selected = products.filter((product) => state.compare.has(product.id));
  const wrap = document.getElementById("compareTable");
  document.getElementById("clearCompare").disabled = selected.length === 0;
  if (!selected.length) {
    wrap.innerHTML = `<div class="empty-state">點選產品卡片的「加入比較」後，這裡會出現橫向比較表。</div>`;
    return;
  }
  const rows = [
    ["分類", (product) => categoryById.get(product.category).label],
    ["品牌/型號", (product) => `${product.brand} ${product.model}`],
    ["TWD 價格", (product) => formatTwd(product.price.converted)],
    ["原幣價格", (product) => formatOriginal(product.price)],
    ["規格", (product) => product.specs.join(" / ")],
    ["優勢", (product) => product.pros.join(" / ")],
    ["留意", (product) => product.cons.join(" / ")],
    ["適合", (product) => product.bestFor],
    ["電壓保固", (product) => `${product.voltage}；${product.warranty}`],
  ];
  wrap.innerHTML = `
    <table class="compare-table">
      <tbody>
        ${rows.map(([label, getter]) => `
          <tr>
            <th>${label}</th>
            ${selected.map((product) => `<td>${getter(product)}</td>`).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function render() {
  const visible = filteredProducts();
  renderTabs();
  renderStats(visible);
  renderTopPicks(visible);
  renderProducts(visible);
  renderCompare();
  updateFilterDisclosure();
}

function setCategory(category) {
  state.category = category;
  syncControls();
  render();
}

function syncControls() {
  document.getElementById("categorySelect").value = state.category;
  document.getElementById("brandSelect").value = state.brand;
  document.getElementById("budgetSelect").value = state.budget;
  document.getElementById("channelSelect").value = state.channel;
  document.getElementById("sortSelect").value = state.sort;
  document.getElementById("searchInput").value = state.search;
}

function resetFilters() {
  state.category = "all";
  state.brand = "all";
  state.budget = "all";
  state.channel = "all";
  state.sort = "rank";
  state.search = "";
  syncControls();
  render();
}

function activeAdvancedFilterCount() {
  return [
    state.category !== "all",
    state.brand !== "all",
    state.budget !== "all",
    state.channel !== "all",
    state.sort !== "rank",
  ].filter(Boolean).length;
}

function isMobileFilterLayout() {
  return window.matchMedia("(max-width: 620px)").matches;
}

function setMobileFiltersOpen(open) {
  state.mobileFiltersOpen = open;
  updateFilterDisclosure();
}

function updateFilterDisclosure() {
  const toolbar = document.getElementById("filters");
  const panel = document.getElementById("advancedFilters");
  const toggle = document.getElementById("filterToggle");
  const countBadge = document.getElementById("activeFilterCount");
  if (!toolbar || !panel || !toggle || !countBadge) return;

  const mobile = isMobileFilterLayout();
  const open = !mobile || state.mobileFiltersOpen;
  const activeCount = activeAdvancedFilterCount();
  toolbar.classList.toggle("filters-open", mobile && open);
  panel.hidden = !open;
  toggle.hidden = !mobile;
  toggle.setAttribute("aria-expanded", String(open));
  countBadge.hidden = activeCount === 0;
  countBadge.textContent = activeCount;
}

function updateMobileDock() {
  document.body.classList.toggle("show-mobile-dock", window.scrollY > 360);
}

document.addEventListener("DOMContentLoaded", () => {
  renderSelects();
  syncControls();
  render();
  updateMobileDock();

  document.getElementById("searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });
  document.getElementById("categorySelect").addEventListener("change", (event) => {
    setCategory(event.target.value);
  });
  document.getElementById("brandSelect").addEventListener("change", (event) => {
    state.brand = event.target.value;
    render();
  });
  document.getElementById("budgetSelect").addEventListener("change", (event) => {
    state.budget = event.target.value;
    render();
  });
  document.getElementById("channelSelect").addEventListener("change", (event) => {
    state.channel = event.target.value;
    render();
  });
  document.getElementById("sortSelect").addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
  });
  document.getElementById("resetFilters").addEventListener("click", resetFilters);
  document.getElementById("filterToggle").addEventListener("click", () => {
    setMobileFiltersOpen(!state.mobileFiltersOpen);
  });
  document.querySelector('.mobile-dock a[href="#filters"]').addEventListener("click", () => {
    if (isMobileFilterLayout()) {
      setMobileFiltersOpen(true);
    }
  });
  window.addEventListener("resize", updateFilterDisclosure);
  document.getElementById("categoryTabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    setCategory(button.dataset.category);
  });
  document.getElementById("productGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-compare]");
    if (!button) return;
    const id = button.dataset.compare;
    if (state.compare.has(id)) {
      state.compare.delete(id);
    } else {
      state.compare.add(id);
    }
    render();
  });
  document.getElementById("clearCompare").addEventListener("click", () => {
    state.compare.clear();
    render();
  });
  window.addEventListener("scroll", updateMobileDock, { passive: true });
});
