(() => {
  const dashboard = globalThis.applianceDashboard;
  const {
    constants,
    filters,
    state,
    utils,
  } = dashboard;

  const comboState = Object.fromEntries(
    constants.filterControlNames.map((name) => [name, { open: false, activeIndex: 0 }]),
  );

  function filterInput(name) {
    return document.getElementById(`${name}Input`);
  }

  function filterList(name) {
    return document.getElementById(`${name}Options`);
  }

  function filterControl(name) {
    return document.querySelector(`[data-combo="${name}"]`);
  }

  function comboClearButton(name) {
    return filterControl(name)?.querySelector(".combo-clear");
  }

  function comboQuery(name) {
    const input = filterInput(name);
    const selected = filters.selectedFilterOption(name);
    const raw = input ? input.value.trim() : "";
    if (!raw || utils.normalizeText(raw) === utils.normalizeText(selected.label)) return "";
    return utils.normalizeText(raw);
  }

  function filteredComboOptions(name) {
    const query = comboQuery(name);
    const options = filters.filterOptions(name);
    if (!query) return options;
    return options.filter((option) => (
      utils.normalizeText(`${option.label} ${option.keywords}`).includes(query)
    ));
  }

  function comboHasClearableValue(name) {
    const input = filterInput(name);
    if (!input) return false;
    const raw = input.value.trim();
    const selected = filters.selectedFilterOption(name);
    const hasManualQuery = raw && utils.normalizeText(raw) !== utils.normalizeText(selected.label);
    return hasManualQuery || state[name] !== filters.defaultFilterValue(name);
  }

  function syncComboClear(name) {
    const clearButton = comboClearButton(name);
    if (!clearButton) return;
    clearButton.hidden = !comboHasClearableValue(name);
  }

  function syncComboClears() {
    constants.filterControlNames.forEach(syncComboClear);
  }

  function renderComboOptions(name) {
    const input = filterInput(name);
    const list = filterList(name);
    if (!input || !list) return;

    const options = filteredComboOptions(name);
    const selectedValue = state[name];
    comboState[name].activeIndex = Math.min(
      Math.max(comboState[name].activeIndex, 0),
      Math.max(options.length - 1, 0),
    );

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
          data-value="${utils.escapeHtml(option.value)}"
          aria-selected="${selected}"
          tabindex="-1"
        >
          <span>${utils.escapeHtml(option.label)}</span>
        </button>
      `;
    }).join("");

    input.setAttribute("aria-activedescendant", `${name}Option${comboState[name].activeIndex}`);
  }

  function syncComboInput(name, force = false) {
    const input = filterInput(name);
    if (!input) return;
    if (!force && document.activeElement === input) {
      syncComboClear(name);
      return;
    }
    input.value = filters.selectedFilterOption(name).label;
    syncComboClear(name);
  }

  function syncControls(force = false) {
    constants.filterControlNames.forEach((name) => syncComboInput(name, force));
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
    const selectedIndex = options.findIndex((option) => option.value === state[name]);
    comboState[name].activeIndex = selectedIndex >= 0 ? selectedIndex : 0;
    renderComboOptions(name);
  }

  function closeAllCombos(exceptName = "") {
    constants.filterControlNames.forEach((name) => {
      if (name !== exceptName) setComboOpen(name, false);
    });
  }

  function selectFilterValue(name, value) {
    filters.applyFilterValue(name, value);
    if (name === "category") {
      syncControls(true);
    } else {
      syncComboInput(name, true);
    }
    setComboOpen(name, false);
    dashboard.ui.render({ resetProducts: true });
  }

  function clearFilterValue(name) {
    filters.applyFilterValue(name, filters.defaultFilterValue(name));
    comboState[name].activeIndex = 0;
    syncControls(true);
    setComboOpen(name, false);
    dashboard.ui.render({ resetProducts: true });
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
    constants.filterControlNames.forEach((name) => {
      const input = filterInput(name);
      const list = filterList(name);
      const control = filterControl(name);
      const button = control?.querySelector(".combo-button");
      const clearButton = control?.querySelector(".combo-clear");
      if (!input || !list || !control || !button || !clearButton) return;

      input.addEventListener("focus", () => {
        closeAllCombos(name);
        setComboOpen(name, true);
        input.select();
      });

      input.addEventListener("input", () => {
        comboState[name].activeIndex = 0;
        syncComboClear(name);
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

      clearButton.addEventListener("mousedown", (event) => event.preventDefault());
      clearButton.addEventListener("click", (event) => {
        event.stopPropagation();
        clearFilterValue(name);
        input.focus();
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

  dashboard.combobox = {
    initializeFilterCombos,
    syncControls,
    syncComboClears,
    closeAllCombos,
  };
})();
