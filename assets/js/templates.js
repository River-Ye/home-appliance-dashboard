(() => {
  const dashboard = globalThis.applianceDashboard;
  const {
    categoryById,
    meta,
    state,
    utils,
  } = dashboard;

  function releaseDateText(product) {
    return product.releaseDate || "找不到";
  }

  function historicalLowInfo(product) {
    const low = product.historicalLow || {};
    if (low.status !== "found" || typeof low.converted !== "number" || low.converted <= 0) {
      return {
        className: "unknown",
        label: "無法判定",
        lowText: "歷史最低價：找不到",
        detail: "尚無可公開驗證的同型號新品史低來源",
        sourceUrl: "",
      };
    }

    const diffRatio = (product.price.converted - low.converted) / low.converted;
    const diffPercent = Math.abs(diffRatio * 100).toFixed(diffRatio < 0.01 ? 1 : 0);
    let className = "high";
    let label = "偏高";
    if (diffRatio <= 0) {
      className = "buy";
      label = "史低可入手";
    } else if (diffRatio <= 0.05) {
      className = "near";
      label = "接近史低";
    } else if (diffRatio <= 0.10) {
      className = "watch";
      label = "可觀望";
    }

    const originalLow = low.currency === "TWD"
      ? ""
      : `（${utils.formatCurrencyAmount(low.currency, low.amount)}）`;
    const detail = diffRatio <= 0
      ? "現價等於或低於可驗證史低"
      : `現價高出史低約 ${diffPercent}%`;

    return {
      className,
      label,
      lowText: `歷史最低價：${utils.formatTwd(low.converted)}${originalLow}`,
      detail,
      sourceUrl: low.sourceUrl || "",
    };
  }

  function historicalLowText(product) {
    const info = historicalLowInfo(product);
    return `${info.label}；${info.lowText}；${info.detail}`;
  }

  function imageMarkup(product) {
    const brand = utils.escapeHtml(product.brand);
    const model = utils.escapeHtml(product.model);
    const fallback = `
      <div class="fallback-art">
        <div>
          <strong>${brand}</strong>
          <span>${model}</span>
        </div>
      </div>`;
    if (!product.image) {
      return `
        <div class="fallback-art" style="display:grid">
          <div>
            <strong>${brand}</strong>
            <span>${model}</span>
          </div>
        </div>`;
    }
    return `<img src="${utils.escapeHtml(product.image)}" alt="${brand} ${model}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">${fallback}`;
  }

  function specItemMarkup(label, value) {
    return `
      <div class="spec-item">
        <b>${utils.escapeHtml(label)}</b>
        <span>${utils.escapeHtml(value)}</span>
      </div>
    `;
  }

  function historicalLowMarkup(product) {
    const info = historicalLowInfo(product);
    return `
      <div class="price-insight price-insight--${utils.escapeHtml(info.className)}">
        <span class="field-label">歷史最低價 / 入手時機</span>
        <strong>${utils.escapeHtml(info.label)}</strong>
        <small>${utils.escapeHtml(info.lowText)} · ${utils.escapeHtml(info.detail)}</small>
        ${info.sourceUrl ? `<a href="${utils.escapeHtml(info.sourceUrl)}" target="_blank" rel="noreferrer">史低出處</a>` : ""}
      </div>
    `;
  }

  function topPickMarkup(product) {
    const category = categoryById.get(product.category);
    return `
      <article
        class="pick-card"
        role="button"
        tabindex="0"
        data-focus-product="${utils.escapeHtml(product.id)}"
        aria-label="查看 ${utils.escapeHtml(product.brand)} ${utils.escapeHtml(product.model)} 商品卡"
      >
        ${imageMarkup(product)}
        <div>
          <p class="eyebrow">${utils.escapeHtml(category.label)} 綜合推薦</p>
          <h3>${utils.escapeHtml(product.brand)} ${utils.escapeHtml(product.model)}</h3>
          <p>${utils.escapeHtml(product.recommendation)}</p>
        </div>
      </article>
    `;
  }

  function cardMarkup(product) {
    const category = categoryById.get(product.category);
    const isCompared = state.compare.has(product.id);
    const priceNote = product.price.currency === "TWD"
      ? "台灣通路售價"
      : `${product.price.confidence}，匯率 ${product.price.currency} 轉 TWD；未含國際運費/進口稅`;
    const sourceDate = /costco|好市多/i.test(`${product.buyLabel} ${product.buyUrl}`)
      ? meta.costcoDate
      : meta.dataDate;

    return `
      <article class="product-card" data-product-id="${utils.escapeHtml(product.id)}">
        <div class="image-wrap">
          <div class="badge-row">
            <span class="badge ${utils.escapeHtml(product.budget)}">${utils.escapeHtml(utils.budgetLabel(product.budget))}</span>
            <span class="badge ${product.channel === "global" ? "risk" : ""}">${utils.escapeHtml(utils.channelLabel(product.channel))}</span>
            ${product.topPick ? `<span class="badge value">綜合推薦</span>` : ""}
          </div>
          ${imageMarkup(product)}
        </div>
        <div class="card-body">
          <div>
            <div class="meta-row">
              <span>${utils.escapeHtml(category.label)}</span>
              <span>${utils.escapeHtml(product.brand)}</span>
              <span class="model">${utils.escapeHtml(product.model)}</span>
            </div>
            <h3>${utils.escapeHtml(product.name)}</h3>
          </div>
          <div class="price-row">
            <div>
              <span class="field-label">建議/常見售價</span>
              <strong>${utils.escapeHtml(utils.formatTwd(product.price.converted))}</strong>
              <small>${utils.escapeHtml(utils.formatOriginal(product.price))} · ${utils.escapeHtml(priceNote)}</small>
            </div>
            ${historicalLowMarkup(product)}
            <div class="score" title="綜合評估分數">${utils.escapeHtml(product.score)}</div>
          </div>
          <div class="spec-list">
            ${product.specs.map((spec, index) => specItemMarkup(`規格 ${index + 1}`, spec)).join("")}
          </div>
          <p class="description">${utils.escapeHtml(product.description)}</p>
          <p class="recommendation">${utils.escapeHtml(product.recommendation)}</p>
          <div class="pros-cons">
            <div>
              <span class="field-label">優勢</span>
              <ul>${product.pros.map((item) => `<li>${utils.escapeHtml(item)}</li>`).join("")}</ul>
            </div>
            <div>
              <span class="field-label">留意</span>
              <ul>${product.cons.map((item) => `<li>${utils.escapeHtml(item)}</li>`).join("")}</ul>
            </div>
          </div>
          ${specItemMarkup("適合對象", product.bestFor)}
          ${specItemMarkup("電壓 / 保固", `${product.voltage}；${product.warranty}`)}
          ${specItemMarkup("上市 / 發售日期", releaseDateText(product))}
          <div class="tag-row">${product.tags.map((tag) => `<span class="tag">${utils.escapeHtml(tag)}</span>`).join("")}</div>
          <p class="fineprint">資料來源：${utils.escapeHtml(product.buyLabel)}，擷取日 ${sourceDate}。</p>
        </div>
        <div class="card-actions">
          <a class="buy-link" href="${utils.escapeHtml(product.buyUrl)}" target="_blank" rel="noreferrer">購買連結</a>
          <button class="compare-button ${isCompared ? "active" : ""}" type="button" data-compare="${utils.escapeHtml(product.id)}" aria-pressed="${isCompared}">
            ${isCompared ? "已加入比較" : "加入比較"}
          </button>
        </div>
      </article>
    `;
  }

  function compareTableMarkup(selected) {
    const rows = [
      ["分類", (product) => categoryById.get(product.category).label],
      ["品牌/型號", (product) => `${product.brand} ${product.model}`],
      ["TWD 價格", (product) => utils.formatTwd(product.price.converted)],
      ["原幣價格", (product) => utils.formatOriginal(product.price)],
      ["歷史最低價 / 入手時機", historicalLowText],
      ["上市/發售", releaseDateText],
      ["規格", (product) => product.specs.join(" / ")],
      ["優勢", (product) => product.pros.join(" / ")],
      ["留意", (product) => product.cons.join(" / ")],
      ["適合", (product) => product.bestFor],
      ["電壓保固", (product) => `${product.voltage}；${product.warranty}`],
    ];

    return `
      <table class="compare-table">
        <tbody>
          ${rows.map(([label, getter]) => `
            <tr>
              <th>${utils.escapeHtml(label)}</th>
              ${selected.map((product) => `<td>${utils.escapeHtml(getter(product))}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  dashboard.templates = {
    releaseDateText,
    historicalLowInfo,
    historicalLowText,
    imageMarkup,
    specItemMarkup,
    topPickMarkup,
    cardMarkup,
    compareTableMarkup,
  };
})();
