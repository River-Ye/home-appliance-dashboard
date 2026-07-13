const {
  EXPECTED_PRODUCT_COUNT,
} = require("./dashboard-contract");

const EXPECTED_PRODUCT_COUNT_TEXT = String(EXPECTED_PRODUCT_COUNT);

async function waitForImages(page) {
  await page.waitForFunction(() => {
    const images = Array.from(document.images).filter((image) => {
      const rect = image.getBoundingClientRect();
      return rect.bottom >= 0
        && rect.right >= 0
        && rect.top <= window.innerHeight
        && rect.left <= window.innerWidth;
    });
    return images.length === 0 || images.every((image) => image.complete);
  }, { timeout: 3000 });
}

async function visibleText(page, selector) {
  return page.locator(selector).innerText();
}

async function waitForProductCards(page, count) {
  await page.waitForFunction((expected) => {
    return document.querySelectorAll(".product-card").length === expected;
  }, count);
}

async function loadAllVisibleProducts(page) {
  const loadAllButton = page.locator("#loadAllProducts");
  if (await loadAllButton.isVisible()) {
    await loadAllButton.click();
  }
  await page.waitForFunction(() => {
    const matched = Number(document.querySelector("#visibleCount")?.textContent || 0);
    const rendered = document.querySelectorAll(".product-card").length;
    return matched === 0 ? rendered === 0 : rendered === matched;
  });
}

async function assertProductImagesStayInsideWrap(page, name) {
  const failures = await page.$$eval(".product-card", (cards) => {
    const tolerance = 1;
    const rectFor = (element) => {
      const rect = element.getBoundingClientRect();
      return {
        top: Math.round(rect.top),
        right: Math.round(rect.right),
        bottom: Math.round(rect.bottom),
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      };
    };

    return cards.flatMap((card, index) => {
      const wrap = card.querySelector(".image-wrap");
      const image = wrap?.querySelector("img");
      if (!wrap || !image || getComputedStyle(image).display === "none") return [];

      const wrapRect = wrap.getBoundingClientRect();
      const imageRect = image.getBoundingClientRect();
      const outside = {
        top: imageRect.top < wrapRect.top - tolerance,
        right: imageRect.right > wrapRect.right + tolerance,
        bottom: imageRect.bottom > wrapRect.bottom + tolerance,
        left: imageRect.left < wrapRect.left - tolerance,
      };

      if (!Object.values(outside).some(Boolean)) return [];

      return [{
        index,
        title: card.querySelector("h3")?.textContent?.trim() || "unknown product",
        wrap: rectFor(wrap),
        image: rectFor(image),
        outside,
      }];
    });
  });

  if (failures.length) {
    throw new Error(`${name}: product image overflow ${JSON.stringify(failures.slice(0, 3))}`);
  }
}

async function assertHistoricalLowLayout(page, name) {
  const failures = await page.$$eval(".product-card", (cards) => {
    const tolerance = 1;
    const rectFor = (element) => {
      const rect = element.getBoundingClientRect();
      return {
        top: Math.round(rect.top),
        right: Math.round(rect.right),
        bottom: Math.round(rect.bottom),
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      };
    };
    const overlaps = (a, b) => (
      a.left < b.right - tolerance
      && a.right > b.left + tolerance
      && a.top < b.bottom - tolerance
      && a.bottom > b.top + tolerance
    );

    return cards.flatMap((card, index) => {
      const priceRow = card.querySelector(".price-row");
      const currentPrice = priceRow?.firstElementChild;
      const insight = priceRow?.querySelector(".price-insight");
      const score = priceRow?.querySelector(".score");
      if (!priceRow || !currentPrice || !insight || !score) return [];

      const cardRect = card.getBoundingClientRect();
      const priceRect = priceRow.getBoundingClientRect();
      const currentRect = currentPrice.getBoundingClientRect();
      const insightRect = insight.getBoundingClientRect();
      const scoreRect = score.getBoundingClientRect();
      const issues = [];

      if (priceRow.scrollWidth > priceRow.clientWidth + tolerance) {
        issues.push("price-row horizontal overflow");
      }
      if (currentPrice.scrollWidth > currentPrice.clientWidth + tolerance) {
        issues.push("current price text overflow");
      }
      if (insight.scrollWidth > insight.clientWidth + tolerance) {
        issues.push("historical-low text overflow");
      }
      if (priceRect.right > cardRect.right + tolerance || priceRect.left < cardRect.left - tolerance) {
        issues.push("price-row outside card");
      }
      if (overlaps(currentRect, insightRect)) {
        issues.push("current price overlaps historical low");
      }
      if (overlaps(scoreRect, insightRect)) {
        issues.push("score overlaps historical low");
      }
      if (overlaps(currentRect, scoreRect)) {
        issues.push("current price overlaps score");
      }

      if (!issues.length) return [];
      return [{
        index,
        title: card.querySelector("h3")?.textContent?.trim() || "unknown product",
        issues,
        currentPrice: rectFor(currentPrice),
        historicalLow: rectFor(insight),
        score: rectFor(score),
        priceRow: rectFor(priceRow),
        card: rectFor(card),
      }];
    });
  });

  if (failures.length) {
    throw new Error(`${name}: historical low layout failures ${JSON.stringify(failures.slice(0, 3))}`);
  }
}

async function assertHistoricalLowCompareLayout(page, name) {
  const failures = await page.$$eval("#compareTable tr", (rows) => {
    const tolerance = 1;
    const historicalRow = rows.find((row) => row.textContent.includes("歷史最低價 / 入手時機"));
    if (!historicalRow) return [{ issue: "missing historical low compare row" }];

    return Array.from(historicalRow.children).flatMap((cell, index) => {
      if (cell.scrollWidth <= cell.clientWidth + tolerance) return [];
      const rect = cell.getBoundingClientRect();
      return [{
        index,
        issue: "historical low compare cell overflow",
        text: cell.textContent.trim().slice(0, 80),
        width: Math.round(rect.width),
        scrollWidth: cell.scrollWidth,
      }];
    });
  });

  if (failures.length) {
    throw new Error(`${name}: compare table historical low layout failures ${JSON.stringify(failures.slice(0, 3))}`);
  }
}

async function assertIssueResearchCards(page, name) {
  const failures = await page.$$eval(".product-card", (cards) => {
    const tolerance = 1;
    const safeProtocols = new Set(["http:", "https:"]);

    return cards.flatMap((card, index) => {
      const section = card.querySelector(".issue-research");
      if (!section) return [{ index, issue: "missing issue research block" }];

      const issues = [];
      const status = section.getAttribute("data-issue-status");
      const text = section.textContent || "";
      const links = [...section.querySelectorAll("a[href]")];
      if (!text.includes("負評／災情查核")) issues.push("missing visible issue research label");
      if (!/\d{4}-\d{2}-\d{2}/.test(text)) issues.push("missing checked date");
      if (!new Set(["common_issue", "no_common_issue"]).has(status)) issues.push(`invalid semantic status ${status}`);
      if (section.scrollWidth > section.clientWidth + tolerance) issues.push("issue block horizontal overflow");

      for (const link of links) {
        if (!safeProtocols.has(link.protocol)) issues.push(`unsafe source protocol ${link.protocol}`);
        if (link.scrollWidth > link.clientWidth + tolerance) issues.push("source link does not wrap");
      }

      if (status === "common_issue") {
        if (!/(?:⚠|注意|多人反映)/.test(text)) issues.push("warning status relies on color alone");
        if (!/6\s*(?:位|人)|[7-9]\s*(?:位|人)|\d{2,}\s*(?:位|人)/.test(text)) issues.push("missing report count of at least 6");
        if (links.length < 2) issues.push("common issue has fewer than two source links");
        const style = getComputedStyle(section);
        if (style.backgroundColor === "rgba(0, 0, 0, 0)" || style.backgroundColor === "transparent") {
          issues.push("warning block lacks visible background color");
        }
      }

      if (status === "no_common_issue") {
        if (!text.includes("截至查核日，查無達門檻的集中負評／災情")) issues.push("missing agreed no-common-issue wording");
        if (!text.includes("查核紀錄")) issues.push("missing checked-source label");
        if (links.length < 2) issues.push("no-common-issue state has fewer than two checked-source links");
      }

      return issues.length ? [{
        index,
        title: card.querySelector("h3")?.textContent?.trim() || "unknown product",
        issues,
      }] : [];
    });
  });

  if (failures.length) {
    throw new Error(`${name}: issue research card failures ${JSON.stringify(failures.slice(0, 5))}`);
  }
}

async function assertIssueResearchCompareRow(page, name) {
  const rows = page.locator("#compareTable tr", { hasText: "負評／災情" });
  if (await rows.count() !== 1) throw new Error(`${name}: compare table missing issue research row`);
  const row = rows.first();
  if (!/\d{4}-\d{2}-\d{2}/.test(await row.innerText())) {
    throw new Error(`${name}: compare issue research row missing checked date`);
  }
}

async function assertSingleCompareFitsViewport(page, name) {
  const failures = await page.$$eval("#compareTable .compare-table", (tables) => {
    const tolerance = 2;
    return tables.flatMap((table) => {
      const wrap = table.closest(".compare-table-wrap");
      const firstRow = table.querySelector("tr");
      const comparedItems = firstRow ? Math.max(0, firstRow.children.length - 1) : 0;
      if (window.innerWidth >= 700 || comparedItems !== 1) return [];

      const issues = [];
      if (wrap && table.scrollWidth > wrap.clientWidth + tolerance) {
        issues.push("single compare table requires horizontal scroll");
      }

      const overflowingCells = [...table.querySelectorAll("th, td")]
        .filter((cell) => cell.scrollWidth > cell.clientWidth + tolerance)
        .slice(0, 5)
        .map((cell) => ({
          text: cell.textContent.trim().slice(0, 80),
          clientWidth: cell.clientWidth,
          scrollWidth: cell.scrollWidth,
        }));

      if (overflowingCells.length) {
        issues.push({ overflowingCells });
      }

      return issues.length ? [{ issues }] : [];
    });
  });

  if (failures.length) {
    throw new Error(`${name}: mobile single compare layout failures ${JSON.stringify(failures.slice(0, 3))}`);
  }
}

async function assertProductDetailsDisclosure(page, name) {
  const details = page.locator(".product-card details.card-details").first();
  if (!await details.count()) throw new Error(`${name}: product cards missing details disclosure`);
  const initiallyOpen = await details.evaluate((node) => node.open);
  if (initiallyOpen) throw new Error(`${name}: product details should be collapsed by default`);

  await details.locator("summary").click();
  const opened = await details.evaluate((node) => node.open);
  if (!opened) throw new Error(`${name}: product details did not open`);
  await assertNoHorizontalOverflow(page, `${name} details open`);
  const stretchedPeers = await page.evaluate(() => {
    if (window.innerWidth < 700) return [];
    const cards = [...document.querySelectorAll(".product-card")];
    const openedCard = cards.find((card) => card.querySelector("details.card-details[open]"));
    if (!openedCard) return ["missing opened card"];
    const openedRect = openedCard.getBoundingClientRect();
    const peers = cards.filter((card) => {
      if (card === openedCard) return false;
      return Math.abs(card.getBoundingClientRect().top - openedRect.top) <= 2;
    });
    if (!peers.length) return [];
    return peers
      .filter((card) => card.getBoundingClientRect().height >= openedRect.height - 40)
      .map((card) => ({
        openedHeight: Math.round(openedRect.height),
        peerHeight: Math.round(card.getBoundingClientRect().height),
        peerId: card.dataset.productId,
      }));
  });
  if (stretchedPeers.length) {
    throw new Error(`${name}: collapsed cards stretched to opened-card height ${JSON.stringify(stretchedPeers.slice(0, 3))}`);
  }

  await details.locator("summary").click();
  const closed = await details.evaluate((node) => !node.open);
  if (!closed) throw new Error(`${name}: product details did not close`);
}

async function assertMobileDockClearance(page, name) {
  const result = await page.evaluate(() => {
    if (window.innerWidth > 620) return null;
    const dock = document.querySelector(".mobile-dock");
    if (!dock) return { issue: "missing mobile dock" };
    const dockRect = dock.getBoundingClientRect();
    const bodyPaddingBottom = Number.parseFloat(getComputedStyle(document.body).paddingBottom || "0");
    return {
      dockHeight: Math.round(dockRect.height),
      bodyPaddingBottom: Math.round(bodyPaddingBottom),
    };
  });

  if (!result) return;
  if (result.issue) throw new Error(`${name}: ${result.issue}`);
  if (result.bodyPaddingBottom < result.dockHeight + 16) {
    throw new Error(`${name}: mobile dock clearance too small ${JSON.stringify(result)}`);
  }
}

async function assertMobileFloatingControlsDoNotOverlap(page, name) {
  if (await page.evaluate(() => window.innerWidth > 620)) return;

  await page.locator(".pick-card").first().evaluate((card) => {
    const rect = card.getBoundingClientRect();
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, Math.max(0, window.scrollY + rect.top - 48));
    html.style.scrollBehavior = previousScrollBehavior;
  });
  await page.waitForFunction(() => {
    const visiblePick = [...document.querySelectorAll(".pick-card")].some((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });
    return visiblePick && !document.body.classList.contains("show-mobile-dock");
  });
  const earlyRecommendationState = await page.evaluate(() => ({
    dockVisible: document.body.classList.contains("show-mobile-dock"),
    visiblePick: [...document.querySelectorAll(".pick-card")].some((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }),
  }));
  if (earlyRecommendationState.dockVisible || !earlyRecommendationState.visiblePick) {
    throw new Error(`${name}: mobile utility band should stay hidden over recommendation cards ${JSON.stringify(earlyRecommendationState)}`);
  }

  await page.locator(".result-toolbar").evaluate((toolbar) => {
    const rect = toolbar.getBoundingClientRect();
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, Math.max(0, window.scrollY + rect.top - 72));
    html.style.scrollBehavior = previousScrollBehavior;
  });
  await page.waitForFunction(() => document.body.classList.contains("show-mobile-dock"));
  await page.waitForTimeout(220);

  const collisions = await page.evaluate(() => {
    const rectFor = (element) => {
      const rect = element.getBoundingClientRect();
      return {
        top: Math.round(rect.top),
        right: Math.round(rect.right),
        bottom: Math.round(rect.bottom),
        left: Math.round(rect.left),
      };
    };
    const overlaps = (a, b) => (
      a.left < b.right
      && a.right > b.left
      && a.top < b.bottom
      && a.bottom > b.top
    );
    const jumpButtons = [...document.querySelectorAll(".page-jump-button")]
      .filter((element) => getComputedStyle(element).visibility !== "hidden")
      .map((element) => ({ label: element.getAttribute("aria-label"), rect: rectFor(element) }));
    const dockRect = rectFor(document.querySelector(".mobile-dock"));
    const protectedControls = [
      ...document.querySelectorAll(".result-actions button:not([hidden]), .mobile-dock a"),
    ].filter((element) => getComputedStyle(element).visibility !== "hidden")
      .map((element) => ({ label: element.textContent.trim(), rect: rectFor(element) }));

    const controlCollisions = jumpButtons.flatMap((jump) => protectedControls
      .filter((control) => overlaps(jump.rect, control.rect))
      .map((control) => ({ jump, control })));
    const bandViolations = jumpButtons
      .filter((jump) => jump.rect.top < dockRect.top || jump.rect.bottom > dockRect.bottom)
      .map((jump) => ({ jump, control: { label: "mobile utility band", rect: dockRect } }));

    return [...controlCollisions, ...bandViolations];
  });

  if (collisions.length) {
    throw new Error(`${name}: mobile floating controls overlap ${JSON.stringify(collisions)}`);
  }
}

async function assertAccessibleStructure(page, name) {
  const result = await page.evaluate(() => {
    const headings = [...document.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((heading) => ({
      level: Number(heading.tagName.slice(1)),
      text: heading.textContent.trim(),
    }));
    const jumps = headings.flatMap((heading, index) => {
      if (!index) return heading.level === 1 ? [] : [{ index, from: 0, to: heading.level, text: heading.text }];
      const previous = headings[index - 1];
      return heading.level > previous.level + 1
        ? [{ index, from: previous.level, to: heading.level, text: heading.text }]
        : [];
    });
    return {
      h1Count: headings.filter((heading) => heading.level === 1).length,
      h2Texts: headings.filter((heading) => heading.level === 2).map((heading) => heading.text),
      jumps,
      placeholdersWithoutEllipsis: [...document.querySelectorAll("input[placeholder]")]
        .map((input) => input.getAttribute("placeholder"))
        .filter((placeholder) => placeholder && !placeholder.endsWith("…")),
    };
  });

  if (result.h1Count !== 1) throw new Error(`${name}: expected one h1, got ${result.h1Count}`);
  for (const expected of ["每類快速推薦", "商品列表", "比較清單"]) {
    if (!result.h2Texts.includes(expected)) throw new Error(`${name}: missing h2 ${expected}`);
  }
  if (result.jumps.length) throw new Error(`${name}: heading hierarchy jumps ${JSON.stringify(result.jumps.slice(0, 5))}`);
  if (result.placeholdersWithoutEllipsis.length) {
    throw new Error(`${name}: placeholders missing ellipsis ${JSON.stringify(result.placeholdersWithoutEllipsis)}`);
  }
}

async function assertOptimizationContracts(page, name, viewport) {
  const result = await page.evaluate(() => {
    const badge = document.querySelector(".ai-disclosure-badge");
    const badgeRect = badge?.getBoundingClientRect();
    const badgeDocumentTop = badgeRect ? badgeRect.top + window.scrollY : null;
    const badgeDocumentBottom = badgeRect ? badgeRect.bottom + window.scrollY : null;
    const method = document.querySelector("#researchMethod");
    const results = document.querySelector(".result-toolbar");
    const clearIssue = document.querySelector('[data-issue-status="no_common_issue"]');
    const status = document.querySelector("#dashboardStatus");
    return {
      h1: document.querySelector("h1")?.textContent?.trim() || "",
      badgeText: badge?.textContent?.trim() || "",
      badgeAboveFold: Boolean(
        badgeRect
        && badgeDocumentTop >= 0
        && badgeDocumentBottom <= window.innerHeight
      ),
      disclosure: document.querySelector(".ai-disclosure")?.textContent?.replace(/\s+/g, " ").trim() || "",
      methodBeforeResults: Boolean(method && results && (method.compareDocumentPosition(results) & Node.DOCUMENT_POSITION_FOLLOWING)),
      methodLinkCount: document.querySelectorAll('a[href="#researchMethod"]').length,
      githubHeroLinkCount: document.querySelectorAll('.topbar a[href="https://github.com/River-Ye/home-appliance-dashboard"]').length,
      topPickImageCount: document.querySelectorAll("#topPicks img").length,
      clearIssueTag: clearIssue?.tagName || "",
      clearIssueOpen: clearIssue?.hasAttribute("open") || false,
      mainBusy: document.querySelector("#mainContent")?.getAttribute("aria-busy"),
      statusRole: status?.getAttribute("role") || "",
      statusLive: status?.getAttribute("aria-live") || "",
    };
  });

  if (result.h1 !== "家電推薦與價格比較工作台") throw new Error(`${name}: homepage H1 mismatch ${JSON.stringify(result.h1)}`);
  if (!result.badgeText.includes("AI 協作製作") || !result.badgeAboveFold) {
    throw new Error(`${name}: AI disclosure badge is not visible above the fold ${JSON.stringify(result)}`);
  }
  for (const phrase of ["AI 協助研究、整理與製作", "依公開規則查核", "仍可能有錯漏"]) {
    if (!result.disclosure.includes(phrase)) throw new Error(`${name}: AI disclosure missing ${phrase}`);
  }
  if (!result.methodBeforeResults || result.methodLinkCount < 1 || result.githubHeroLinkCount !== 1) {
    throw new Error(`${name}: trust links or stable method placement mismatch ${JSON.stringify(result)}`);
  }
  if (result.topPickImageCount !== 0) throw new Error(`${name}: top picks should not download product images`);
  if (result.clearIssueTag !== "DETAILS" || result.clearIssueOpen) {
    throw new Error(`${name}: no-common-issue summary should be collapsed details ${JSON.stringify(result)}`);
  }
  if (result.mainBusy !== "false" || result.statusRole !== "status" || result.statusLive !== "polite") {
    throw new Error(`${name}: loading/live-status contract mismatch ${JSON.stringify(result)}`);
  }

  if (viewport.width <= 620) {
    await page.evaluate(() => new Promise((resolve) => {
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      document.scrollingElement.scrollTop = 0;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        window.applianceDashboard?.ui?.updateMobileDock?.();
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
        resolve();
      }));
    }));
    const hiddenControls = await page.evaluate(() => ({
      scrollY: Math.round(window.scrollY),
      toolbarTop: Math.round(document.querySelector(".result-toolbar")?.getBoundingClientRect().top || 0),
      dockHidden: document.querySelector(".mobile-dock")?.hidden,
      dockInert: document.querySelector(".mobile-dock")?.inert,
      jumpHidden: document.querySelector(".page-jump")?.hidden,
      jumpInert: document.querySelector(".page-jump")?.inert,
    }));
    if (!hiddenControls.dockHidden || !hiddenControls.dockInert || !hiddenControls.jumpHidden || !hiddenControls.jumpInert) {
      throw new Error(`${name}: hidden mobile controls remain exposed ${JSON.stringify(hiddenControls)}`);
    }

    const evidenceDetails = page.locator(".homepage-evidence");
    await evidenceDetails.locator("summary").click();
    const undersizedSourceLinks = await page.evaluate(() => [...document.querySelectorAll(
      ".price-insight a, .homepage-evidence a",
    )]
      .filter((link) => link.getClientRects().length > 0)
      .map((link) => ({ text: link.textContent.trim(), height: link.getBoundingClientRect().height }))
      .filter((link) => link.height < 43));
    if (undersizedSourceLinks.length) {
      throw new Error(`${name}: source links have undersized touch targets ${JSON.stringify(undersizedSourceLinks.slice(0, 5))}`);
    }
    await evidenceDetails.locator("summary").click();
  }
}

async function assertProjectSourceLink(page, name) {
  const link = page.locator('footer .project-source a[href="https://github.com/River-Ye/home-appliance-dashboard"]');
  const count = await link.count();
  if (count !== 1) throw new Error(`${name}: expected one GitHub project source link, got ${count}`);
  if (await link.innerText() !== "GitHub Repo") throw new Error(`${name}: GitHub project source link label mismatch`);
  const sourceText = await link.locator("xpath=..").innerText();
  if (sourceText.replace(/\s+/g, "") !== "專案原始碼：GitHubRepo") {
    throw new Error(`${name}: GitHub project source text mismatch ${JSON.stringify(sourceText)}`);
  }
  if (await link.getAttribute("target") !== "_blank") throw new Error(`${name}: GitHub project source link should open in a new tab`);
  const rel = new Set((await link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
  if (!rel.has("noopener") || !rel.has("noreferrer")) {
    throw new Error(`${name}: GitHub project source link is missing safe rel attributes`);
  }

  const layout = await link.evaluate((element) => {
    const footer = element.closest("footer");
    const footerRect = footer.getBoundingClientRect();
    const linkRect = element.getBoundingClientRect();
    return {
      footerOverflow: footer.scrollWidth - footer.clientWidth,
      linkOutsideFooter: linkRect.left < footerRect.left - 1 || linkRect.right > footerRect.right + 1,
    };
  });
  if (layout.footerOverflow > 2 || layout.linkOutsideFooter) {
    throw new Error(`${name}: GitHub project source link overflows the footer ${JSON.stringify(layout)}`);
  }
}

async function assertManualAdPlacements(page, name) {
  const result = await page.evaluate(() => {
    const placements = [...document.querySelectorAll("main > .ad-placement")];
    const slots = placements.map((placement) => placement.querySelector(".adsbygoogle"));
    const main = document.querySelector("main");
    const mainRect = main.getBoundingClientRect();
    const placementDetails = placements.map((placement) => {
      const rect = placement.getBoundingClientRect();
      const style = getComputedStyle(placement);
      return {
        id: placement.id,
        label: placement.querySelector(".ad-label")?.textContent?.trim() || "",
        ariaLabel: placement.getAttribute("aria-label"),
        height: rect.height,
        outsideMain: rect.left < mainRect.left - 1 || rect.right > mainRect.right + 1,
        overflow: placement.scrollWidth - placement.clientWidth,
        position: style.position,
      };
    });
    const slotDetails = slots.map((slot) => ({
      client: slot?.getAttribute("data-ad-client") || "",
      slot: slot?.getAttribute("data-ad-slot") || "",
      format: slot?.getAttribute("data-ad-format") || "",
      responsive: slot?.getAttribute("data-full-width-responsive") || "",
      status: slot?.getAttribute("data-ad-status"),
    }));
    const topPicks = document.querySelector("#topPicks");
    const resultToolbar = document.querySelector(".result-toolbar");
    const comparePanel = document.querySelector("#comparePanel");
    const afterPicks = document.querySelector("#ad-after-picks");
    const beforeFooter = document.querySelector("#ad-before-footer");
    const follows = (first, second) => Boolean(first && second && (first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING));
    return {
      placementDetails,
      slotDetails,
      invalidNesting: document.querySelectorAll(".top-picks .ad-placement, .pick-card .ad-placement, #productGrid .ad-placement, .product-card .ad-placement, #comparePanel .ad-placement").length,
      validOrder: follows(topPicks, afterPicks)
        && follows(afterPicks, resultToolbar)
        && follows(comparePanel, beforeFooter),
    };
  });

  if (result.placementDetails.length !== 2) throw new Error(`${name}: expected two manual ad placements`);
  if (result.slotDetails.length !== 2) throw new Error(`${name}: expected two manual AdSense slots`);
  if (result.invalidNesting) throw new Error(`${name}: manual ad placement is nested inside product or recommendation content`);
  if (!result.validOrder) throw new Error(`${name}: manual ad placement order is incorrect`);

  const slotIds = new Set();
  result.placementDetails.forEach((placement) => {
    if (placement.label !== "廣告" || placement.ariaLabel !== "廣告") {
      throw new Error(`${name}: ${placement.id} is not clearly labelled as an ad`);
    }
    if (placement.height < 80) throw new Error(`${name}: ${placement.id} does not reserve stable height`);
    if (placement.outsideMain || placement.overflow > 2) {
      throw new Error(`${name}: ${placement.id} overflows main ${JSON.stringify(placement)}`);
    }
    if (["fixed", "sticky"].includes(placement.position)) {
      throw new Error(`${name}: ${placement.id} must not cover page controls`);
    }
  });
  result.slotDetails.forEach((slot, index) => {
    if (slot.client !== "ca-pub-4799252410303973") throw new Error(`${name}: ad slot ${index + 1} publisher mismatch`);
    if (!/^\d+$/.test(slot.slot)) throw new Error(`${name}: ad slot ${index + 1} ID should be numeric`);
    if (slotIds.has(slot.slot)) throw new Error(`${name}: manual ad slot IDs should be unique`);
    slotIds.add(slot.slot);
    if (slot.format !== "auto" || slot.responsive !== "true") throw new Error(`${name}: ad slot ${index + 1} is not responsive`);
    if (slot.status !== null) throw new Error(`${name}: local UI should not initialize AdSense status`);
  });

  const privacyLink = page.locator('footer a[href="https://riverye.com/privacy.html"]');
  if (await privacyLink.count() !== 1) throw new Error(`${name}: expected one privacy policy link`);
  if (await privacyLink.innerText() !== "隱私權政策") throw new Error(`${name}: privacy policy link label mismatch`);
  await privacyLink.focus();
  if (!await privacyLink.evaluate((element) => document.activeElement === element)) {
    throw new Error(`${name}: privacy policy link should be keyboard focusable`);
  }
}

async function assertPremiumBadgeContrast(page, name) {
  const result = await page.evaluate(() => {
    const badge = document.querySelector(".badge.premium");
    if (!badge) return { issue: "missing premium badge" };
    const parse = (value) => {
      const channels = value.match(/[\d.]+/g)?.slice(0, 3).map(Number) || [];
      return channels.map((channel) => channel / 255);
    };
    const luminance = (channels) => channels
      .map((channel) => channel <= 0.04045
        ? channel / 12.92
        : ((channel + 0.055) / 1.055) ** 2.4)
      .reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
    const style = getComputedStyle(badge);
    const foreground = luminance(parse(style.color));
    const background = luminance(parse(style.backgroundColor));
    const ratio = (Math.max(foreground, background) + 0.05) / (Math.min(foreground, background) + 0.05);
    return { ratio, color: style.color, backgroundColor: style.backgroundColor };
  });

  if (result.issue) throw new Error(`${name}: ${result.issue}`);
  if (result.ratio < 4.5) throw new Error(`${name}: premium badge contrast below 4.5 ${JSON.stringify(result)}`);
}

async function assertCompareRowHeaders(page, name) {
  const rowHeaders = await page.locator('#compareTable tbody th[scope="row"]').count();
  const invalidRowHeaders = await page.locator('#compareTable tbody th:not([scope="row"])').count();
  const columnHeaders = await page.locator('#compareTable thead th[scope="col"]').count();
  if (!rowHeaders || invalidRowHeaders) {
    throw new Error(`${name}: compare row headers are incomplete`);
  }
  if (columnHeaders < 2) throw new Error(`${name}: compare table is missing product column headers`);
}


async function assertNoHorizontalOverflow(page, name) {
  const overflow = await page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth - window.innerWidth;
  });
  if (overflow > 2) throw new Error(`${name}: horizontal overflow ${overflow}px`);
}

async function resetFilters(page) {
  await page.getByRole("button", { name: "重設篩選" }).click();
  await page.waitForFunction((expected) => {
    return document.querySelector("#visibleCount")?.textContent?.trim() === expected;
  }, EXPECTED_PRODUCT_COUNT_TEXT);
  await waitForProductCards(page, 12);
}

async function selectComboboxOption(page, inputSelector, optionSelector, query) {
  await page.fill(inputSelector, query);
  await page.locator(optionSelector).click();
}


module.exports = {
  waitForImages,
  visibleText,
  waitForProductCards,
  loadAllVisibleProducts,
  assertProductImagesStayInsideWrap,
  assertHistoricalLowLayout,
  assertHistoricalLowCompareLayout,
  assertIssueResearchCards,
  assertIssueResearchCompareRow,
  assertSingleCompareFitsViewport,
  assertProductDetailsDisclosure,
  assertMobileDockClearance,
  assertMobileFloatingControlsDoNotOverlap,
  assertAccessibleStructure,
  assertOptimizationContracts,
  assertProjectSourceLink,
  assertManualAdPlacements,
  assertPremiumBadgeContrast,
  assertCompareRowHeaders,
  assertNoHorizontalOverflow,
  resetFilters,
  selectComboboxOption,
};
