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
const amazonSearch = (query) => `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
const bestBuySearch = (query) => `https://www.bestbuy.com/site/searchpage.jsp?st=${encodeURIComponent(query)}`;
const twd = (amount) => ({ currency: "TWD", amount, converted: amount, confidence: "通路售價" });
const usd = (amount) => ({ currency: "USD", amount, converted: Math.round(amount * exchange.USD_TWD), confidence: "海外參考價" });

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
    price: twd(79900),
    image: pchomeImage("/items/DPADYE1900JLU9J/000001_1778338118.jpg"),
    buyUrl: pchomeLink("DPADYE-1900JLU9J"),
    buyLabel: "PChome",
    specs: ["65 吋 OLED evo", "4K 120Hz", "webOS", "HDMI 2.1 / VRR"],
    description: "OLED 黑位、遊戲規格與串流支援都完整，是客廳主電視的穩健高階選擇。",
    pros: ["畫質與遊戲支援完整", "台灣通路與保固清楚"],
    cons: ["明亮客廳抗反光不如高階 Mini LED", "價格高於 QLED/Mini LED"],
    bestFor: "重視電影、遊戲與長期保固的主客廳。",
    recommendation: "本類 Top Pick：畫質、功能、台灣售後與價格落點最均衡。",
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
    price: twd(54900),
    image: pchomeImage("/items/DPADEW1900K4WN4/000001_1782056707.jpg"),
    buyUrl: pchomeLink("DPADEW-1900K4WN4"),
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
    name: "BRAVIA 7 65 型 Mini LED 4K Google TV",
    price: twd(56900),
    image: pchomeImage("/items/DPAD06A900HKV58/000001_1776333721.jpg"),
    buyUrl: pchomeLink("DPAD06-A900HKV58"),
    buyLabel: "PChome",
    specs: ["65 吋 Mini LED", "XR 處理器", "Google TV", "Dolby Vision"],
    description: "Sony 影像處理與動態補償穩定，適合電影、運動與有明亮環境的客廳。",
    pros: ["影像處理自然", "Mini LED 亮度適合明亮空間"],
    cons: ["價格高於同尺寸國產/中階品牌", "遊戲規格不如 OLED 激進"],
    bestFor: "看電影、運動賽事與串流內容多的家庭。",
    recommendation: "想避開 OLED 烙印疑慮、又要高階影像處理時可優先看這台。",
    score: 90,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["Mini LED", "電影", "明亮客廳"],
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
    price: twd(49900),
    image: pchomeImage("/items/DPAD8RA900JSC3L/000001_1772688080.jpg"),
    buyUrl: pchomeLink("DPAD8R-A900JSC3L"),
    buyLabel: "PChome",
    specs: ["11.1.4 聲道", "無線後環繞", "無線重低音", "Dolby Atmos / DTS:X"],
    description: "一次補齊天空聲道、後環繞與低頻，是最接近家庭劇院的一體式方案。",
    pros: ["包圍感最完整", "Samsung TV 可用 Q-Symphony"],
    cons: ["價格高", "後環繞仍需擺位與電源"],
    bestFor: "客廳電影、遊戲與球賽沉浸感。",
    recommendation: "本類 Top Pick：想少拉線又要完整環繞，優先看 Q990F。",
    score: 95,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["Atmos", "後環繞", "旗艦"],
  },
  {
    id: "soundbar-samsung-q930f",
    category: "soundbar",
    rank: 2,
    budget: "mid",
    channel: "tw",
    brand: "Samsung",
    model: "HW-Q930F",
    name: "9.1.4 聲道 Q 系列 Soundbar",
    price: twd(29900),
    image: pchomeImage("/items/DPAD8RA900K47QK/000001_1781586727.png"),
    buyUrl: pchomeLink("DPAD8R-A900K47QK"),
    buyLabel: "PChome",
    specs: ["9.1.4 聲道", "後環繞", "重低音", "Dolby Atmos"],
    description: "少一點旗艦規格但保留後環繞與天空聲道，價格更容易接受。",
    pros: ["環繞完整度高", "價格比 Q990F 友善"],
    cons: ["音場規模不如旗艦", "仍需要後喇叭擺位"],
    bestFor: "想要真環繞但不想上到五萬元級距。",
    recommendation: "均衡推薦：多數客廳已經很夠用。",
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
    price: twd(24800),
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
    price: twd(4090),
    image: pchomeImage("/items/DMAB30A900EOQ24/000001_1753338098.png"),
    buyUrl: pchomeLink("DMAB30-A900EOQ24"),
    buyLabel: "PChome",
    specs: ["16 吋", "DC 變頻", "負離子", "ECO 溫控"],
    description: "功能、靜音、耗電與品牌售後都均衡，是不容易踩雷的主力立扇。",
    pros: ["穩定耐用", "風量與靜音平衡"],
    cons: ["造型保守", "價格比入門 DC 扇高"],
    bestFor: "客廳、臥室日常長時間使用。",
    recommendation: "本類 Top Pick：想買一台長用、好維修、規格夠的電風扇就選它。",
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
    price: twd(4480),
    image: pchomeImage("/items/DMAB3XA9007ZI67/000001_1765274878.jpg"),
    buyUrl: pchomeLink("DMAB3X-A9007ZI67"),
    buyLabel: "PChome",
    specs: ["渦流循環", "四段風速", "適合中大空間", "機械旋鈕"],
    description: "經典強力循環扇，搭冷氣能快速打散室內溫差。",
    pros: ["循環距離強", "耐用口碑好"],
    cons: ["無遙控", "低速仍有存在感"],
    bestFor: "客廳、餐廳或開放式空間搭配冷氣。",
    recommendation: "本類 Top Pick：純循環能力強，買它就是為了把空氣推遠。",
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
    image: pchomeImage("/items/DMABLYA900K12AS/000001_1779248169.jpg"),
    buyUrl: pchomeLink("DMABLY-A900K12AS"),
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
    price: twd(16900),
    image: pchomeImage("/items/DMBQ3PA900J0L88/000001_1776323540.jpg"),
    buyUrl: pchomeLink("DMBQ3P-A900J0L88"),
    buyLabel: "PChome",
    specs: ["16L 級", "變頻", "高效除濕", "連續排水"],
    description: "台灣潮濕環境常見安心牌，除濕效率、耗電與售後都平衡。",
    pros: ["變頻節能", "品牌維修方便"],
    cons: ["無清淨複合功能", "價格高於基本款"],
    bestFor: "客廳、主臥與日常長時間除濕。",
    recommendation: "本類 Top Pick：除濕機建議優先看穩定與售後，這台最均衡。",
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
    price: twd(22900),
    image: pchomeImage("/items/DMBQ4NA900JMY74/000001_1783337705.jpg"),
    buyUrl: pchomeLink("DMBQ4N-A900JMY74"),
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
    price: twd(21900),
    image: pchomeImage("/items/DMBQ4YA900JT7XM/000001_1773335754.jpg"),
    buyUrl: pchomeLink("DMBQ4Y-A900JT7XM"),
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
    price: twd(5900),
    image: pchomeImage("/items/DMAU3EA900AU9PA/000001_1782107657.jpg"),
    buyUrl: pchomeLink("DMAU3E-A900AU9PA"),
    buyLabel: "PChome",
    specs: ["5-10 坪", "HEPA/活性碳", "雙禦濾網", "小中坪數"],
    description: "價格、濾網取得與品牌口碑平衡，是小家庭最不容易買錯的清淨機。",
    pros: ["耗材好找", "價格合理"],
    cons: ["大客廳不夠力", "智慧功能較少"],
    bestFor: "臥室、書房與中小坪數空間。",
    recommendation: "本類 Top Pick：清淨機先看 CADR 與耗材成本，小坪數這台很實際。",
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
    price: twd(12990),
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
    price: twd(12900),
    image: pchomeImage("/items/DMAU3CA900J2MVZ/000001_1767758291.jpg"),
    buyUrl: pchomeLink("DMAU3C-A900J2MVZ"),
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
    price: twd(7999),
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
    price: twd(29800),
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
    recommendation: "本類 Top Pick：萬元出頭就有完整基站，CP 值很強。",
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
    price: twd(19900),
    image: pchomeImage("/items/DMAX001900JVQDR/000001_1775552057.jpg"),
    buyUrl: pchomeLink("DMAX00-1900JVQDR"),
    buyLabel: "PChome",
    specs: ["輕量無線", "雷射顯塵", "HEPA 過濾", "多吸頭"],
    description: "重量、吸力、顯塵與維修支援平衡，是多數家庭乾吸主力機。",
    pros: ["輕巧好拿", "顯塵很實用"],
    cons: ["價格高", "集塵筒容量較小"],
    bestFor: "日常灰塵、毛髮、地板與床墊快速清潔。",
    recommendation: "本類 Top Pick：每天拿得起來用，比規格最大更重要。",
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
    price: twd(24900),
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
    price: twd(3699),
    image: pchomeImage("/items/DRAFJ5A900J5PSH/000001_1757899395.jpg"),
    buyUrl: pchomeLink("DRAFJ5-A900J5PSH"),
    buyLabel: "PChome",
    specs: ["Wi-Fi 7", "BE3600", "AiMesh", "Gigabit"],
    description: "以低價進入 Wi-Fi 7，ASUS 韌體與 AiMesh 延展性好。",
    pros: ["價格低", "韌體功能完整"],
    cons: ["雙頻非高階三頻", "無多 10G 埠"],
    bestFor: "小家庭、公寓與想低成本升級 Wi-Fi 7。",
    recommendation: "本類 Top Pick：多數家庭先升級穩定性，這台價格最漂亮。",
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
    image: "",
    buyUrl: amazonSearch("eero Max 7 Wi-Fi 7 router"),
    buyLabel: "Amazon 搜尋",
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
    rank: 1,
    topPick: true,
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
    recommendation: "本類 Top Pick：如果每天用，Vitamix 的穩定與口感值得投資。",
    score: 94,
    voltage: "110V 台灣公司貨",
    warranty: "台灣保固",
    tags: ["旗艦", "耐用", "全食物"],
  },
  {
    id: "blender-vitamix-a2500i",
    category: "blender",
    rank: 2,
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
    recommendation: "Vitamix CP 值款：省下預算但保留核心馬達與容杯系統。",
    score: 90,
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
    price: twd(2688),
    image: pchomeImage("/items/DMAC0EA900IDTBC/000001_1782894815.jpg"),
    buyUrl: pchomeLink("DMAC0E-A900IDTBC"),
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
    price: usd(99.99),
    image: "",
    buyUrl: amazonSearch("Ninja BN701 Professional Plus Blender"),
    buyLabel: "Amazon 搜尋",
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
    price: twd(15900),
    image: pchomeImage("/items/DMBJ021900HFATV/000001_1779702402.jpg"),
    buyUrl: pchomeLink("DMBJ02-1900HFATV"),
    buyLabel: "PChome",
    specs: ["27L", "微波 + 蒸氣 + 烘烤", "平台式", "變頻"],
    description: "一台整合微波、蒸、烤，對家電櫃空間有限的人最實用。",
    pros: ["功能完整", "尺寸比 30L 旗艦友善"],
    cons: ["氣炸效果不如專門氣炸鍋", "內腔清潔需勤快"],
    bestFor: "小家庭、家電櫃有限、需要微波與蒸烤合一。",
    recommendation: "本類 Top Pick：以有限空間換最多功能，NN-BS607 很均衡。",
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
    image: pchomeImage("/items/DMBJ0QA900IVQ00/000001_1762230788.jpg"),
    buyUrl: pchomeLink("DMBJ0Q-A900IVQ00"),
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
    price: twd(24900),
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
    price: twd(28800),
    image: pchomeImage("/items/DMBJ8TA900HL4NR/000001_1770884873.jpg"),
    buyUrl: pchomeLink("DMBJ8T-A900HL4NR"),
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
    image: "",
    buyUrl: bestBuySearch("Breville Joule Oven Air Fryer Pro"),
    buyLabel: "Best Buy 搜尋",
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
    price: twd(9901),
    image: pchomeImage("/items/DEDW27A900HSK9B/000001_1764911324.jpg"),
    buyUrl: pchomeLink("DEDW27-A900HSK9B"),
    buyLabel: "PChome",
    specs: ["溫水洗淨", "溫熱無縫便座", "噴嘴自潔", "基本安裝需確認"],
    description: "TOTO 口碑與維修能見度高，中階價格已具備日常所需功能。",
    pros: ["品牌與維修安心", "功能完整不過度昂貴"],
    cons: ["需確認馬桶尺寸", "安裝與插座可能另計"],
    bestFor: "首次安裝免治、重視品牌安心。",
    recommendation: "本類 Top Pick：免治最怕不合尺寸與售後麻煩，TOTO S2 最穩。",
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
    price: twd(8991),
    image: pchomeImage("/items/DEDW0YA900FBB5E/000001_1732173976.jpg"),
    buyUrl: pchomeLink("DEDW0Y-A900FBB5E"),
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

const categoryById = new Map(categories.map((category) => [category.id, category]));
const state = {
  category: "all",
  brand: "all",
  budget: "all",
  channel: "all",
  sort: "rank",
  search: "",
  compare: new Set(),
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
  const allButton = `<button class="tab-button ${state.category === "all" ? "active" : ""}" type="button" data-category="all">全部</button>`;
  tabs.innerHTML = allButton + categories.map((category) => {
    const count = products.filter((product) => product.category === category.id).length;
    return `<button class="tab-button ${state.category === category.id ? "active" : ""}" type="button" data-category="${category.id}">${category.label} ${count}</button>`;
  }).join("");
}

function renderStats(visible) {
  document.getElementById("categoryCount").textContent = categories.length;
  document.getElementById("productCount").textContent = products.length;
  document.getElementById("visibleCount").textContent = visible.length;
  document.getElementById("compareCount").textContent = state.compare.size;
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
        <p class="eyebrow">${categoryById.get(product.category).label} Top Pick</p>
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
          ${product.topPick ? `<span class="badge value">Top Pick</span>` : ""}
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
        <p class="fineprint">資料來源：${product.buyLabel}，擷取日 2026-07-07。</p>
      </div>
      <div class="card-actions">
        <a class="buy-link" href="${product.buyUrl}" target="_blank" rel="noreferrer">購買連結</a>
        <button class="compare-button ${isCompared ? "active" : ""}" type="button" data-compare="${product.id}">
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
}

function setCategory(category) {
  state.category = category;
  document.getElementById("categorySelect").value = category;
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  renderSelects();
  render();

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
});
