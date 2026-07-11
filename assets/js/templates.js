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

  function imageMarkup(product, options = {}) {
    const brand = utils.escapeHtml(product.brand);
    const model = utils.escapeHtml(product.model);
    const width = options.width || 320;
    const height = options.height || 180;
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
    return `<img src="${utils.escapeHtml(product.image)}" alt="${brand} ${model}" width="${width}" height="${height}" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">${fallback}`;
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

  function issueSourceLink(source, urlField = "url") {
    const safeUrl = utils.safeHttpUrl(source?.[urlField]);
    if (!safeUrl) return "";
    const label = source.title
      ? `${source.platform}：${source.title}`
      : source.platform;
    return `<a href="${utils.escapeHtml(safeUrl)}" target="_blank" rel="noreferrer">${utils.escapeHtml(label)}</a>`;
  }

  function issueResearchText(product) {
    const research = product.issueResearch || {};
    if (research.status !== "common_issue") {
      return `${research.summary || "截至查核日，查無達門檻的集中負評／災情"}（查核日：${research.checkedAt || "未標示"}）`;
    }
    const issues = (research.issues || []).map((issue) => (
      `${issue.title}：${issue.detail}（${issue.reportCount} 位獨立使用者）`
    ));
    return `${research.summary}；${issues.join("；")}（查核日：${research.checkedAt || "未標示"}）`;
  }

  function issueResearchMarkup(product) {
    const research = product.issueResearch || {};
    const isWarning = research.status === "common_issue";
    const status = isWarning ? "common_issue" : "no_common_issue";
    const sources = isWarning
      ? (research.issues || []).flatMap((issue) => issue.sources || [])
      : research.checkedSources || [];
    const sourceLinks = sources
      .map((source) => issueSourceLink(source, isWarning ? "url" : "queryUrl"))
      .filter(Boolean)
      .join("");

    return `
      <section class="issue-research issue-research--${isWarning ? "warning" : "clear"}" data-issue-status="${status}" aria-label="負評／災情查核">
        <div class="issue-research-heading">
          <span class="issue-research-icon" aria-hidden="true">${isWarning ? "!" : "✓"}</span>
          <div>
            <span class="field-label">負評／災情查核</span>
            <strong>${utils.escapeHtml(isWarning ? "多人反映，購買前請注意" : "查無達門檻的集中反映")}</strong>
          </div>
        </div>
        <p>${utils.escapeHtml(research.summary || "截至查核日，查無達門檻的集中負評／災情")}</p>
        ${isWarning ? (research.issues || []).map((issue) => `
          <div class="issue-research-item">
            <strong>${utils.escapeHtml(issue.title)}</strong>
            <span class="issue-report-count">${utils.escapeHtml(issue.reportCount)} 位獨立使用者反映</span>
            <p>${utils.escapeHtml(issue.detail)}</p>
          </div>
        `).join("") : ""}
        <div class="issue-research-meta">
          <span>查核日 ${utils.escapeHtml(research.checkedAt || "未標示")}</span>
          ${sourceLinks ? `<span class="issue-source-links"><b>${isWarning ? "原文出處" : "查核紀錄"}</b>${sourceLinks}</span>` : ""}
        </div>
      </section>
    `;
  }

  function topPickMarkup(product) {
    const category = categoryById.get(product.category);
    return `
      <button
        class="pick-card"
        type="button"
        data-focus-product="${utils.escapeHtml(product.id)}"
        aria-label="查看 ${utils.escapeHtml(product.brand)} ${utils.escapeHtml(product.model)} 商品卡"
      >
        ${imageMarkup(product, { width: 74, height: 74 })}
        <div>
          <p class="eyebrow">${utils.escapeHtml(category.label)} 綜合推薦</p>
          <h3>${utils.escapeHtml(product.brand)} ${utils.escapeHtml(product.model)}</h3>
          <p>${utils.escapeHtml(product.recommendation)}</p>
        </div>
      </button>
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
    const keySpecs = product.specs.slice(0, 3);
    const detailSpecs = product.specs.slice(3);

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
          <div class="price-row decision-strip">
            <div>
              <span class="field-label">建議/常見售價</span>
              <strong>${utils.escapeHtml(utils.formatTwd(product.price.converted))}</strong>
              <small>${utils.escapeHtml(utils.formatOriginal(product.price))} · ${utils.escapeHtml(priceNote)}</small>
            </div>
            ${historicalLowMarkup(product)}
            <div class="score" title="綜合評估分數">${utils.escapeHtml(product.score)}</div>
            <div class="channel-risk ${product.channel === "global" ? "channel-risk--global" : ""}">
              <span class="field-label">通路風險</span>
              <strong>${utils.escapeHtml(utils.channelLabel(product.channel))}</strong>
              <small>${utils.escapeHtml(product.channel === "global" ? "需自行確認運費、關稅、電壓與保固" : "台灣可信新品通路")}</small>
            </div>
          </div>
          ${issueResearchMarkup(product)}
          <div class="spec-list spec-list--key">
            ${keySpecs.map((spec, index) => specItemMarkup(`重點 ${index + 1}`, spec)).join("")}
          </div>
          <details class="card-details">
            <summary>完整規格與評估</summary>
            <div class="card-details-body">
              ${detailSpecs.length ? `
                <div class="spec-list">
                  ${detailSpecs.map((spec, index) => specItemMarkup(`規格 ${index + 4}`, spec)).join("")}
                </div>
              ` : ""}
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
          </details>
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
      {
        label: "操作",
        html: true,
        get: (product) => `
          <button
            class="compare-remove-button"
            type="button"
            data-compare-remove="${utils.escapeHtml(product.id)}"
            aria-label="從比較清單移除 ${utils.escapeHtml(product.brand)} ${utils.escapeHtml(product.model)}"
          >移除</button>
        `,
      },
      { label: "分類", get: (product) => categoryById.get(product.category).label },
      { label: "品牌/型號", get: (product) => `${product.brand} ${product.model}` },
      { label: "TWD 價格", get: (product) => utils.formatTwd(product.price.converted) },
      { label: "原幣價格", get: (product) => utils.formatOriginal(product.price) },
      { label: "歷史最低價 / 入手時機", get: historicalLowText },
      { label: "負評／災情", get: issueResearchText },
      { label: "上市/發售", get: releaseDateText },
      { label: "規格", get: (product) => product.specs.join(" / ") },
      { label: "優勢", get: (product) => product.pros.join(" / ") },
      { label: "留意", get: (product) => product.cons.join(" / ") },
      { label: "適合", get: (product) => product.bestFor },
      { label: "電壓保固", get: (product) => `${product.voltage}；${product.warranty}` },
    ];

    return `
      <table class="compare-table">
        <tbody>
          ${rows.map((row) => `
            <tr>
              <th scope="row">${utils.escapeHtml(row.label)}</th>
              ${selected.map((product) => `<td>${row.html ? row.get(product) : utils.escapeHtml(row.get(product))}</td>`).join("")}
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
    issueResearchText,
    issueResearchMarkup,
    imageMarkup,
    specItemMarkup,
    topPickMarkup,
    cardMarkup,
    compareTableMarkup,
  };
})();
