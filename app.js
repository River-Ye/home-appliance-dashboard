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
  { id: "tv", label: "電視", group: "影音" },
  { id: "soundbar", label: "Soundbar", group: "影音" },
  { id: "fan", label: "電風扇", group: "空氣環境" },
  { id: "circulator", label: "循環扇", group: "空氣環境" },
  { id: "dehumidifier", label: "除濕機", group: "空氣環境" },
  { id: "purifier", label: "空氣清淨機", group: "空氣環境" },
  { id: "robot", label: "掃拖機器人", group: "清潔家務" },
  { id: "vacuum", label: "吸塵器", group: "清潔家務" },
  { id: "cookware", label: "鍋具", group: "廚房餐飲" },
  { id: "knife", label: "刀具", group: "廚房餐飲" },
  { id: "blender", label: "破壁機", group: "廚房餐飲" },
  { id: "oven", label: "多功能氣炸烤箱/微波爐", group: "廚房餐飲" },
  { id: "waterdispenser", label: "櫥下飲水機", group: "廚房餐飲" },
  { id: "dishwasher", label: "洗碗機", group: "廚房餐飲" },
  { id: "bidet", label: "免治馬桶", group: "衛浴安全" },
  { id: "smartlock", label: "電子鎖", group: "衛浴安全" },
  { id: "wifi", label: "無線路由器", group: "工作網路" },
  { id: "standingdesk", label: "升降桌", group: "工作網路" },
  { id: "chair", label: "電腦椅", group: "工作網路" },
  { id: "monitor", label: "電腦螢幕", group: "工作網路" },
];

const products = [];
const dashboardRoot = typeof window === "undefined" ? globalThis : window;
const dashboardData = dashboardRoot.applianceDashboard || {};

dashboardData.exchange = exchange;
dashboardData.categories = categories;
dashboardData.products = products;
dashboardData.registerProducts = (categoryId, items) => {
  products.push(...items.map((product) => ({
    ...product,
    category: product.category || categoryId,
  })));
};

dashboardRoot.applianceDashboard = dashboardData;

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

const filterControlNames = ["category", "brand", "budget", "channel", "sort"];
const comboState = Object.fromEntries(filterControlNames.map((name) => [name, { open: false, activeIndex: 0 }]));

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function filterStateValue(name) {
  return state[name];
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
    const brands = brandOptionsForCurrentCategory();
    return [
      { value: "all", label: "全部品牌", keywords: "all" },
      ...brands.map((brand) => ({ value: brand, label: brand, keywords: brand })),
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
    { value: "scoreDesc", label: "評估分數", keywords: "score 分數 評估" },
  ];
}

function selectedFilterOption(name) {
  const selected = filterOptions(name).find((option) => option.value === filterStateValue(name));
  return selected || filterOptions(name)[0];
}

function filterInput(name) {
  return document.getElementById(`${name}Input`);
}

function filterList(name) {
  return document.getElementById(`${name}Options`);
}

function filterControl(name) {
  return document.querySelector(`[data-combo="${name}"]`);
}

function comboQuery(name) {
  const input = filterInput(name);
  const selected = selectedFilterOption(name);
  const raw = input ? input.value.trim() : "";
  if (!raw || normalizeText(raw) === normalizeText(selected.label)) return "";
  return normalizeText(raw);
}

function filteredComboOptions(name) {
  const query = comboQuery(name);
  const options = filterOptions(name);
  if (!query) return options;
  return options.filter((option) => normalizeText(`${option.label} ${option.keywords}`).includes(query));
}

function renderComboOptions(name) {
  const input = filterInput(name);
  const list = filterList(name);
  if (!input || !list) return;

  const options = filteredComboOptions(name);
  const selectedValue = filterStateValue(name);
  comboState[name].activeIndex = Math.min(Math.max(comboState[name].activeIndex, 0), Math.max(options.length - 1, 0));

  if (!options.length) {
    list.innerHTML = `<div class="combo-empty">沒有符合的選項</div>`;
    input.removeAttribute("aria-activedescendant");
    return;
  }

  list.innerHTML = options.map((option, index) => {
    const active = index === comboState[name].activeIndex;
    const selected = option.value === selectedValue;
    return `
      <button
        id="${name}Option${index}"
        class="combo-option ${active ? "active" : ""}"
        type="button"
        role="option"
        data-value="${escapeHtml(option.value)}"
        aria-selected="${selected}"
        tabindex="-1"
      >
        <span>${escapeHtml(option.label)}</span>
      </button>
    `;
  }).join("");

  input.setAttribute("aria-activedescendant", `${name}Option${comboState[name].activeIndex}`);
}

function syncComboInput(name, force = false) {
  const input = filterInput(name);
  if (!input) return;
  if (!force && document.activeElement === input) return;
  input.value = selectedFilterOption(name).label;
}

function syncControls(force = false) {
  filterControlNames.forEach((name) => syncComboInput(name, force));
  document.getElementById("searchInput").value = state.search;
}

function setComboOpen(name, open) {
  const input = filterInput(name);
  const list = filterList(name);
  const control = filterControl(name);
  if (!input || !list || !control) return;

  comboState[name].open = open;
  control.classList.toggle("open", open);
  input.setAttribute("aria-expanded", String(open));
  list.hidden = !open;

  if (!open) {
    input.removeAttribute("aria-activedescendant");
    return;
  }

  const options = filteredComboOptions(name);
  const selectedIndex = options.findIndex((option) => option.value === filterStateValue(name));
  comboState[name].activeIndex = selectedIndex >= 0 ? selectedIndex : 0;
  renderComboOptions(name);
}

function closeAllCombos(exceptName = "") {
  filterControlNames.forEach((name) => {
    if (name !== exceptName) setComboOpen(name, false);
  });
}

function selectFilterValue(name, value) {
  if (name === "category") {
    state.category = value;
    ensureSelectedBrandIsAvailable();
    syncControls(true);
  } else {
    state[name] = value;
    syncComboInput(name, true);
  }
  setComboOpen(name, false);
  render();
}

function moveComboActiveOption(name, direction) {
  if (!comboState[name].open) setComboOpen(name, true);
  const options = filteredComboOptions(name);
  if (!options.length) return;
  comboState[name].activeIndex = (comboState[name].activeIndex + direction + options.length) % options.length;
  renderComboOptions(name);
  document.getElementById(`${name}Option${comboState[name].activeIndex}`)?.scrollIntoView({ block: "nearest" });
}

function selectActiveComboOption(name) {
  const options = filteredComboOptions(name);
  const option = options[comboState[name].activeIndex];
  if (option) selectFilterValue(name, option.value);
}

function initializeFilterCombos() {
  filterControlNames.forEach((name) => {
    const input = filterInput(name);
    const list = filterList(name);
    const control = filterControl(name);
    const button = control?.querySelector(".combo-button");
    if (!input || !list || !control || !button) return;

    input.addEventListener("focus", () => {
      closeAllCombos(name);
      setComboOpen(name, true);
      input.select();
    });

    input.addEventListener("input", () => {
      comboState[name].activeIndex = 0;
      setComboOpen(name, true);
      renderComboOptions(name);
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        moveComboActiveOption(name, 1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        moveComboActiveOption(name, -1);
      } else if (event.key === "Enter") {
        event.preventDefault();
        selectActiveComboOption(name);
      } else if (event.key === "Escape") {
        setComboOpen(name, false);
        syncComboInput(name, true);
      }
    });

    input.addEventListener("blur", () => {
      window.setTimeout(() => {
        if (control.contains(document.activeElement)) return;
        setComboOpen(name, false);
        syncComboInput(name, true);
      }, 80);
    });

    button.addEventListener("mousedown", (event) => event.preventDefault());
    button.addEventListener("click", () => {
      closeAllCombos(name);
      const shouldOpen = !comboState[name].open;
      input.focus();
      setComboOpen(name, shouldOpen);
    });

    list.addEventListener("mousedown", (event) => event.preventDefault());
    list.addEventListener("click", (event) => {
      const optionButton = event.target.closest("[data-value]");
      if (!optionButton) return;
      selectFilterValue(name, optionButton.dataset.value);
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".combo-control")) return;
    closeAllCombos();
  });
}

function renderTabs() {
  const tabs = document.getElementById("categoryTabs");
  const allButton = `<button class="tab-button ${state.category === "all" ? "active" : ""}" type="button" data-category="all" aria-pressed="${state.category === "all"}">全部</button>`;
  let lastGroup = "";
  const groupedButtons = categories.map((category) => {
    const count = products.filter((product) => product.category === category.id).length;
    const groupLabel = category.group !== lastGroup
      ? `<span class="tab-group-label">${escapeHtml(category.group)}</span>`
      : "";
    lastGroup = category.group;
    return `${groupLabel}<button class="tab-button ${state.category === category.id ? "active" : ""}" type="button" data-category="${category.id}" aria-pressed="${state.category === category.id}">${category.label} ${count}</button>`;
  }).join("");
  tabs.innerHTML = allButton + groupedButtons;
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
  ensureSelectedBrandIsAvailable();
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
  ensureSelectedBrandIsAvailable();
  syncControls(true);
  render();
}

function resetFilters() {
  state.category = "all";
  state.brand = "all";
  state.budget = "all";
  state.channel = "all";
  state.sort = "rank";
  state.search = "";
  syncControls(true);
  closeAllCombos();
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
  initializeFilterCombos();
  syncControls(true);
  render();
  updateMobileDock();

  document.getElementById("searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
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
