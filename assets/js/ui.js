(() => {
  const dashboard = globalThis.applianceDashboard;
  const {
    categories,
    products,
    categoryById,
    constants,
    state,
    filters,
    templates,
    utils,
  } = dashboard;

  function renderTabs() {
    const tabs = document.getElementById("categoryTabs");
    const allButton = `<button class="tab-button ${state.category === "all" ? "active" : ""}" type="button" data-category="all" aria-pressed="${state.category === "all"}">全部</button>`;
    let lastGroup = "";
    const groupedButtons = categories.map((category) => {
      const count = products.filter((product) => product.category === category.id).length;
      const groupLabel = category.group !== lastGroup
        ? `<span class="tab-group-label">${utils.escapeHtml(category.group)}</span>`
        : "";
      lastGroup = category.group;
      return `${groupLabel}<button class="tab-button ${state.category === category.id ? "active" : ""}" type="button" data-category="${category.id}" aria-pressed="${state.category === category.id}">${utils.escapeHtml(category.label)} ${count}</button>`;
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

  function renderResultToolbar(matchedProducts, cards) {
    const hasMore = filters.hasMoreProducts(matchedProducts);
    const renderedCount = document.getElementById("renderedCount");
    const lazyHint = document.getElementById("lazyHint");
    const loadMoreButton = document.getElementById("loadMoreProducts");
    const loadAllButton = document.getElementById("loadAllProducts");

    if (renderedCount) {
      renderedCount.textContent = `已載入 ${cards.length} / ${matchedProducts.length}`;
    }

    if (lazyHint) {
      if (!matchedProducts.length) {
        lazyHint.textContent = "目前沒有符合條件的商品，請調整搜尋或篩選。";
      } else if (hasMore) {
        lazyHint.textContent = "往下滑會自動再載入 40 筆，也可一次載入全部。搜尋仍會查完整資料。";
      } else {
        lazyHint.textContent = "已載入所有符合目前條件的商品。";
      }
    }

    if (loadMoreButton) {
      loadMoreButton.hidden = !hasMore;
      loadMoreButton.disabled = !hasMore;
    }

    if (loadAllButton) {
      loadAllButton.hidden = !hasMore;
      loadAllButton.disabled = !hasMore;
    }
  }

  function renderTopPicks(visible) {
    const topPickIds = new Set(products.filter((product) => product.topPick).map((product) => product.id));
    const picks = visible.filter((product) => topPickIds.has(product.id));
    const container = document.getElementById("topPicks");
    if (!picks.length) {
      container.innerHTML = "";
      return;
    }
    container.innerHTML = picks.map(templates.topPickMarkup).join("");
  }

  function renderProducts(visible) {
    const grid = document.getElementById("productGrid");
    if (!visible.length) {
      grid.innerHTML = `<div class="empty-state">沒有符合目前篩選條件的產品。</div>`;
      return;
    }
    grid.innerHTML = visible.map(templates.cardMarkup).join("");
  }

  function renderCompare() {
    const selected = products.filter((product) => state.compare.has(product.id));
    const wrap = document.getElementById("compareTable");
    document.getElementById("clearCompare").disabled = selected.length === 0;
    if (!selected.length) {
      wrap.innerHTML = `<div class="empty-state">點選產品卡片的「加入比較」後，這裡會出現橫向比較表。</div>`;
      return;
    }
    wrap.innerHTML = templates.compareTableMarkup(selected);
  }

  function isMobileFilterLayout() {
    return window.matchMedia("(max-width: 620px)").matches;
  }

  function updateFilterDisclosure() {
    const toolbar = document.getElementById("filters");
    const panel = document.getElementById("advancedFilters");
    const toggle = document.getElementById("filterToggle");
    const countBadge = document.getElementById("activeFilterCount");
    if (!toolbar || !panel || !toggle || !countBadge) return;

    const mobile = isMobileFilterLayout();
    const open = !mobile || state.mobileFiltersOpen;
    const activeCount = filters.activeAdvancedFilterCount();
    toolbar.classList.toggle("filters-open", mobile && open);
    panel.hidden = !open;
    toggle.hidden = !mobile;
    toggle.setAttribute("aria-expanded", String(open));
    countBadge.hidden = activeCount === 0;
    countBadge.textContent = activeCount;
  }

  function render(options = {}) {
    if (options.resetProducts) {
      filters.resetRenderedProductLimit();
    }
    filters.ensureSelectedBrandIsAvailable();
    const visible = filters.filteredProducts();
    const cards = filters.renderedProducts(visible);
    renderTabs();
    renderStats(visible);
    renderTopPicks(visible);
    renderResultToolbar(visible, cards);
    renderProducts(cards);
    renderCompare();
    updateFilterDisclosure();
    dashboard.combobox.syncComboClears();
  }

  function setCategory(category) {
    state.category = category;
    filters.ensureSelectedBrandIsAvailable();
    dashboard.combobox.syncControls(true);
    render({ resetProducts: true });
  }

  function resetFilters() {
    state.category = "all";
    state.brand = "all";
    state.budget = "all";
    state.channel = "all";
    state.sort = "rank";
    state.search = "";
    dashboard.combobox.syncControls(true);
    dashboard.combobox.closeAllCombos();
    render({ resetProducts: true });
  }

  function setMobileFiltersOpen(open) {
    state.mobileFiltersOpen = open;
    updateFilterDisclosure();
  }

  function updateMobileDock() {
    document.body.classList.toggle("show-mobile-dock", window.scrollY > 360);
  }

  function initializeLazyLoading() {
    const sentinel = document.getElementById("lazySentinel");
    if (!sentinel || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      filters.loadMoreProducts();
    }, {
      rootMargin: "260px 0px",
      threshold: 0.01,
    });

    observer.observe(sentinel);
  }

  function scrollToPageTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToPageBottom() {
    const target = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
    );
    window.scrollTo({ top: target, behavior: "smooth" });
  }

  function shouldReduceMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function scrollProductCardIntoView(card) {
    const rect = card.getBoundingClientRect();
    const stickyOffset = window.innerWidth < 760 ? 88 : 112;
    const targetTop = Math.max(0, Math.round(window.scrollY + rect.top - stickyOffset));
    const distance = Math.abs(window.scrollY - targetTop);
    const behavior = shouldReduceMotion() || distance > 6000 ? "auto" : "smooth";

    window.scrollTo({ top: targetTop, behavior });
    return behavior === "auto" ? 80 : 360;
  }

  function productCardIsVisible(card) {
    const rect = card.getBoundingClientRect();
    return rect.top < window.innerHeight - 80 && rect.bottom > 80;
  }

  function markProductCardWhenVisible(productId, startedAt) {
    const card = document.querySelector(`[data-product-id="${productId}"]`);
    if (!card) return;

    if (!productCardIsVisible(card) && Date.now() - startedAt < 1800) {
      window.requestAnimationFrame(() => markProductCardWhenVisible(productId, startedAt));
      return;
    }

    card.classList.add("is-targeted");
    window.setTimeout(() => {
      card.classList.remove("is-targeted");
    }, 1500);
  }

  function highlightProductCard(productId) {
    const card = document.querySelector(`[data-product-id="${productId}"]`);
    if (!card) return;
    card.classList.remove("is-targeted");
    const highlightDelay = scrollProductCardIntoView(card);
    window.setTimeout(() => {
      markProductCardWhenVisible(productId, Date.now());
    }, highlightDelay);
  }

  function focusProductFromTopPick(productId) {
    const visible = filters.filteredProducts();
    const index = visible.findIndex((product) => product.id === productId);
    if (index < 0) return;
    filters.pauseLazyLoading();
    if (index >= state.renderLimit) {
      state.renderLimit = Math.min(visible.length, index + constants.loadMoreProductCount);
      render();
    }
    window.requestAnimationFrame(() => highlightProductCard(productId));
  }

  function toggleCompare(productId) {
    if (state.compare.has(productId)) {
      state.compare.delete(productId);
    } else {
      state.compare.add(productId);
    }
    render();
  }

  dashboard.ui = {
    render,
    setCategory,
    resetFilters,
    setMobileFiltersOpen,
    updateFilterDisclosure,
    updateMobileDock,
    initializeLazyLoading,
    scrollToPageTop,
    scrollToPageBottom,
    focusProductFromTopPick,
    toggleCompare,
  };
})();
