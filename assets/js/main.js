(() => {
  const dashboard = globalThis.applianceDashboard;
  const {
    combobox,
    filters,
    productLoader,
    state,
    ui,
    utils,
    urlState,
  } = dashboard;

  function renderLoadFailure(error) {
    console.error(error);
    const grid = document.getElementById("productGrid");
    if (!grid) return;
    grid.innerHTML = `
      <div class="empty-state">
        商品資料載入失敗，請重新整理頁面或稍後再試。${utils.escapeHtml(error.message || "")}
      </div>
    `;
  }

  function initializeApp() {
    combobox.initializeFilterCombos();
    urlState.applyFromQuery();
    ui.initializeLazyLoading();
    combobox.syncControls(true);
    ui.render();
    ui.updateMobileDock();

    document.getElementById("searchInput").addEventListener("input", (event) => {
      state.search = event.target.value;
      ui.render({ resetProducts: true, syncUrl: true });
    });

    document.getElementById("resetFilters").addEventListener("click", ui.resetFilters);
    document.getElementById("loadMoreProducts").addEventListener("click", filters.loadMoreProducts);
    document.getElementById("loadAllProducts").addEventListener("click", filters.loadAllProducts);
    document.getElementById("scrollTopButton").addEventListener("click", ui.scrollToPageTop);
    document.getElementById("scrollBottomButton").addEventListener("click", ui.scrollToPageBottom);
    document.getElementById("filterToggle").addEventListener("click", () => {
      ui.setMobileFiltersOpen(!state.mobileFiltersOpen);
    });

    document.querySelector('.mobile-dock a[href="#filters"]').addEventListener("click", () => {
      if (window.matchMedia("(max-width: 620px)").matches) {
        ui.setMobileFiltersOpen(true);
      }
    });

    window.addEventListener("resize", ui.updateFilterDisclosure);

    document.getElementById("topPicks").addEventListener("click", (event) => {
      const pick = event.target.closest("[data-focus-product]");
      if (!pick) return;
      ui.focusProductFromTopPick(pick.dataset.focusProduct);
    });

    document.getElementById("categoryTabs").addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      ui.setCategory(button.dataset.category);
    });

    document.getElementById("activeFilterChips").addEventListener("click", (event) => {
      const button = event.target.closest("[data-clear-filter]");
      if (!button) return;
      ui.clearFilter(button.dataset.clearFilter);
    });

    document.getElementById("productGrid").addEventListener("click", (event) => {
      const button = event.target.closest("[data-compare]");
      if (!button) return;
      ui.toggleCompare(button.dataset.compare);
    });

    document.getElementById("clearCompare").addEventListener("click", () => {
      state.compare.clear();
      ui.render();
    });

    document.getElementById("compareTable").addEventListener("click", (event) => {
      const button = event.target.closest("[data-compare-remove]");
      if (!button) return;
      ui.removeCompare(button.dataset.compareRemove);
    });

    window.addEventListener("scroll", ui.updateMobileDock, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    productLoader.loadAll()
      .then(initializeApp)
      .catch(renderLoadFailure);
  });
})();
