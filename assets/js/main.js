(() => {
  const dashboard = globalThis.applianceDashboard;
  const { combobox, filters, state, ui } = dashboard;

  document.addEventListener("DOMContentLoaded", () => {
    combobox.initializeFilterCombos();
    ui.initializeLazyLoading();
    combobox.syncControls(true);
    ui.render();
    ui.updateMobileDock();

    document.getElementById("searchInput").addEventListener("input", (event) => {
      state.search = event.target.value;
      ui.render({ resetProducts: true });
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

    document.getElementById("topPicks").addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const pick = event.target.closest("[data-focus-product]");
      if (!pick) return;
      event.preventDefault();
      ui.focusProductFromTopPick(pick.dataset.focusProduct);
    });

    document.getElementById("categoryTabs").addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      ui.setCategory(button.dataset.category);
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

    window.addEventListener("scroll", ui.updateMobileDock, { passive: true });
  });
})();
