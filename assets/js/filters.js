(() => {
  const dashboard = globalThis.applianceDashboard;
  const { categories, products, state, constants, utils } = dashboard;
  let lazyLoadingPausedUntil = 0;
  const typeOptionsByCategory = {
    aircon: [
      { value: "cooling_only", label: "冷專", keywords: "冷專 cooling only" },
      { value: "heat_cool", label: "冷暖", keywords: "冷暖 heat cool" },
    ],
    waterheater: [
      { value: "gas", label: "瓦斯", keywords: "gas 瓦斯 天然氣 液化石油氣" },
      { value: "electric", label: "電熱", keywords: "electric 電熱 儲熱 瞬熱" },
      { value: "heat_pump", label: "熱泵", keywords: "heat pump 熱泵" },
    ],
    "network-switch": [
      { value: "1g", label: "1G（8 埠）", keywords: "1g gigabit 1000mbps 八埠 8 port" },
      { value: "2_5g", label: "2.5G（8 埠）", keywords: "2.5g multi gig multigig 八埠 8 port" },
      { value: "10g", label: "10G（8 埠）", keywords: "10g 10gbe multi gig multigig 八埠 8 port" },
    ],
    mouse: [
      { value: "standard", label: "一般滑鼠", keywords: "standard 辦公 電競" },
      { value: "vertical", label: "直立式", keywords: "vertical 垂直 人體工學" },
      { value: "trackball", label: "軌跡球", keywords: "trackball 軌跡球" },
    ],
    keyboard: [
      { value: "membrane", label: "薄膜", keywords: "membrane 薄膜" },
      { value: "scissor", label: "剪刀腳", keywords: "scissor 剪刀腳" },
      { value: "mechanical", label: "機械", keywords: "mechanical 機械軸" },
      { value: "magnetic", label: "磁軸", keywords: "magnetic hall effect 磁軸 霍爾" },
      { value: "optical", label: "光軸", keywords: "optical 光軸" },
    ],
    mousepad: [
      { value: "cloth", label: "布面", keywords: "cloth 布面 長桌墊" },
      { value: "hard", label: "硬質", keywords: "hard 硬質 非玻璃" },
      { value: "glass", label: "玻璃", keywords: "glass 玻璃" },
    ],
    bedsheet: [
      { value: "cotton", label: "棉", keywords: "cotton 棉 純棉" },
      { value: "lyocell", label: "萊賽爾（天絲）", keywords: "lyocell tencel 天絲 萊賽爾" },
      { value: "linen", label: "亞麻", keywords: "linen 亞麻" },
      { value: "synthetic", label: "化纖", keywords: "synthetic polyester 聚酯 化纖" },
      { value: "other_natural", label: "其他天然纖維", keywords: "natural bamboo hemp 天然纖維 竹纖維" },
    ],
    comforter: [
      { value: "cotton", label: "棉", keywords: "cotton 棉 棉花" },
      { value: "down", label: "羽絨", keywords: "down feather 羽絨 羽毛" },
      { value: "synthetic", label: "化纖", keywords: "synthetic polyester 聚酯 化纖" },
      { value: "wool", label: "羊毛", keywords: "wool 羊毛" },
      { value: "silk", label: "蠶絲", keywords: "silk 蠶絲" },
    ],
    pillow: [
      { value: "latex", label: "乳膠", keywords: "latex 乳膠" },
      { value: "memory_foam", label: "記憶棉", keywords: "memory foam 記憶棉 慢回彈" },
      { value: "down", label: "羽絨／羽毛", keywords: "down feather 羽絨 羽毛" },
      { value: "fiber", label: "纖維", keywords: "fiber polyester 纖維 聚酯" },
      { value: "hybrid", label: "混合材質", keywords: "hybrid blend 混合 複合" },
    ],
  };

  function defaultSortCompare(a, b) {
    const catDiff = categories.findIndex((category) => category.id === a.category)
      - categories.findIndex((category) => category.id === b.category);
    return catDiff || a.rank - b.rank;
  }

  function releaseDateSortValue(product) {
    const value = String(product.releaseDate || "").trim();
    if (!value || value === "找不到") return null;

    const match = value.match(/^(20\d{2})(?:[-/.](\d{1,2})(?:[-/.](\d{1,2}))?)?/);
    if (!match) return null;

    const [, year, month = "1", day = "1"] = match;
    return Number(`${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`);
  }

  function compareReleaseDate(a, b, direction) {
    const aDate = releaseDateSortValue(a);
    const bDate = releaseDateSortValue(b);

    if (aDate === null && bDate === null) return defaultSortCompare(a, b);
    if (aDate === null) return 1;
    if (bDate === null) return -1;
    const diff = direction === "asc" ? aDate - bDate : bDate - aDate;
    return diff || defaultSortCompare(a, b);
  }

  function sortedProducts(list) {
    return [...list].sort((a, b) => {
      if (state.sort === "priceAsc") return (a.price.converted - b.price.converted) || defaultSortCompare(a, b);
      if (state.sort === "priceDesc") return (b.price.converted - a.price.converted) || defaultSortCompare(a, b);
      if (state.sort === "scoreAsc") return (a.score - b.score) || defaultSortCompare(a, b);
      if (state.sort === "scoreDesc") return (b.score - a.score) || defaultSortCompare(a, b);
      if (state.sort === "releaseDateAsc") return compareReleaseDate(a, b, "asc");
      if (state.sort === "releaseDateDesc") return compareReleaseDate(a, b, "desc");
      return defaultSortCompare(a, b);
    });
  }

  function filteredProducts() {
    const queryTokens = utils.searchTokens(state.search);
    return sortedProducts(products.filter((product) => {
      if (state.category !== "all" && product.category !== state.category) return false;
      if (state.type !== "all" && product.type !== state.type) return false;
      if (state.brand !== "all" && product.brand !== state.brand) return false;
      if (state.budget !== "all" && product.budget !== state.budget) return false;
      if (state.channel !== "all" && product.channel !== state.channel) return false;
      if (queryTokens.length) {
        const searchText = utils.productText(product);
        if (!queryTokens.every((token) => searchText.includes(token))) return false;
      }
      return true;
    }));
  }

  function resetRenderedProductLimit() {
    state.renderLimit = constants.initialProductLimit;
  }

  function renderedProducts(matchedProducts) {
    return matchedProducts.slice(0, Math.min(state.renderLimit, matchedProducts.length));
  }

  function hasMoreProducts(matchedProducts) {
    return state.renderLimit < matchedProducts.length;
  }

  function pauseLazyLoading(duration = 1800) {
    lazyLoadingPausedUntil = Date.now() + duration;
  }

  function isLazyLoadingPaused() {
    return Date.now() < lazyLoadingPausedUntil;
  }

  function loadMoreProducts(options = {}) {
    if (isLazyLoadingPaused()) return;
    const matchedProducts = filteredProducts();
    if (!hasMoreProducts(matchedProducts)) return;
    state.renderLimit = Math.min(
      matchedProducts.length,
      state.renderLimit + constants.loadMoreProductCount,
    );
    const manualFocusTarget = hasMoreProducts(matchedProducts)
      ? "#loadMoreProducts"
      : "#productListHeading";
    dashboard.ui.render({
      focusTarget: options.restoreFocus ? manualFocusTarget : null,
    });
  }

  function loadAllProducts() {
    const matchedProducts = filteredProducts();
    state.renderLimit = matchedProducts.length;
    dashboard.ui.render({ focusTarget: "#productListHeading" });
  }

  function brandOptionsForCurrentCategory() {
    const sourceProducts = state.category === "all"
      ? products
      : products.filter((product) => product.category === state.category);
    return [...new Set(sourceProducts.map((product) => product.brand))]
      .sort((a, b) => a.localeCompare(b, "zh-Hant"));
  }

  function ensureSelectedBrandIsAvailable() {
    if (state.brand === "all") return;
    if (!brandOptionsForCurrentCategory().includes(state.brand)) {
      state.brand = "all";
    }
  }

  function typeFilterAvailable() {
    return Object.hasOwn(typeOptionsByCategory, state.category);
  }

  function ensureSelectedTypeIsAvailable() {
    const availableValues = (typeOptionsByCategory[state.category] || []).map((option) => option.value);
    if (!availableValues.includes(state.type)) state.type = "all";
  }

  function filterOptions(name) {
    if (name === "category") {
      return [
        { value: "all", label: "全部分類", keywords: "all" },
        ...categories.map((category) => ({
          value: category.id,
          label: category.label,
          keywords: `${category.id} ${category.label}`,
        })),
      ];
    }

    if (name === "brand") {
      return [
        { value: "all", label: "全部品牌", keywords: "all" },
        ...brandOptionsForCurrentCategory().map((brand) => ({
          value: brand,
          label: brand,
          keywords: brand,
        })),
      ];
    }

    if (name === "type") {
      return [
        { value: "all", label: "全部型態", keywords: "all" },
        ...(typeOptionsByCategory[state.category] || []),
      ];
    }

    if (name === "budget") {
      return [
        { value: "all", label: "全部", keywords: "all 所有預算" },
        { value: "value", label: "CP 值", keywords: "value cp 低價" },
        { value: "mid", label: "均衡", keywords: "mid 中階" },
        { value: "premium", label: "旗艦", keywords: "premium 高階" },
      ];
    }

    if (name === "channel") {
      return [
        { value: "all", label: "全部", keywords: "all 所有通路" },
        { value: "tw", label: "台灣通路", keywords: "tw 台灣 公司貨 pchome momo yahoo costco" },
        { value: "global", label: "海外通路", keywords: "global 海外 amazon best buy 國外" },
      ];
    }

    return [
      { value: "rank", label: "推薦排序", keywords: "rank 推薦 綜合" },
      { value: "priceAsc", label: "價格低到高", keywords: "price asc 低價 便宜" },
      { value: "priceDesc", label: "價格高到低", keywords: "price desc 高價" },
      { value: "scoreDesc", label: "分數高到低", keywords: "score desc 分數 評估 高分" },
      { value: "scoreAsc", label: "分數低到高", keywords: "score asc 分數 評估 低分" },
      { value: "releaseDateDesc", label: "上市 / 發售日期新到舊", keywords: "release date desc 上市 發售 日期 新" },
      { value: "releaseDateAsc", label: "上市 / 發售日期舊到新", keywords: "release date asc 上市 發售 日期 舊" },
    ];
  }

  function selectedFilterOption(name) {
    const selected = filterOptions(name).find((option) => option.value === state[name]);
    return selected || filterOptions(name)[0];
  }

  function defaultFilterValue(name) {
    return filterOptions(name)[0].value;
  }

  function applyFilterValue(name, value) {
    if (name === "category") {
      if (state.category !== value) state.type = "all";
      state.category = value;
      ensureSelectedBrandIsAvailable();
      ensureSelectedTypeIsAvailable();
    } else {
      state[name] = value;
    }
  }

  function activeAdvancedFilterCount() {
    return [
      state.category !== "all",
      state.type !== "all",
      state.brand !== "all",
      state.budget !== "all",
      state.channel !== "all",
      state.sort !== "rank",
    ].filter(Boolean).length;
  }

  dashboard.filters = {
    defaultSortCompare,
    releaseDateSortValue,
    sortedProducts,
    filteredProducts,
    resetRenderedProductLimit,
    renderedProducts,
    hasMoreProducts,
    pauseLazyLoading,
    loadMoreProducts,
    loadAllProducts,
    brandOptionsForCurrentCategory,
    ensureSelectedBrandIsAvailable,
    typeFilterAvailable,
    ensureSelectedTypeIsAvailable,
    filterOptions,
    selectedFilterOption,
    defaultFilterValue,
    applyFilterValue,
    activeAdvancedFilterCount,
  };
})();
