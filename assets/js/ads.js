(function initializeAdsModule(root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
    return;
  }

  const run = () => {
    const adsQueue = root.adsbygoogle = root.adsbygoogle || [];
    api.initializeManualAds({
      location: root.location,
      document: root.document,
      adsQueue,
      MutationObserver: root.MutationObserver,
    });
  };

  if (root.document?.readyState === "loading") {
    root.document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
}(typeof globalThis !== "undefined" ? globalThis : this, () => {
  const PUBLISHER_ID = "ca-pub-4799252410303973";
  const ADS_LOADER_ID = "manual-adsense-loader";
  const ADS_LOADER_URL = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER_ID}`;
  const initializedSlots = new WeakSet();
  const observedSlots = new WeakSet();

  function isProductionLocation(location) {
    return Boolean(
      location
      && location.protocol === "https:"
      && location.hostname === "appliance.riverye.com",
    );
  }

  function syncUnfilledState(slot) {
    const placement = slot?.closest?.(".ad-placement");
    if (!placement) return;
    placement.classList.toggle("is-unfilled", slot.getAttribute("data-ad-status") === "unfilled");
  }

  function appendLoader(document) {
    if (document.getElementById(ADS_LOADER_ID)) return;
    const loader = document.createElement("script");
    loader.id = ADS_LOADER_ID;
    loader.async = true;
    loader.src = ADS_LOADER_URL;
    loader.crossOrigin = "anonymous";
    document.head.append(loader);
  }

  function observeSlot(slot, MutationObserver) {
    if (!MutationObserver || observedSlots.has(slot)) return;
    const observer = new MutationObserver(() => syncUnfilledState(slot));
    observer.observe(slot, { attributes: true, attributeFilter: ["data-ad-status"] });
    observedSlots.add(slot);
  }

  function initializeManualAds({ location, document, adsQueue, MutationObserver } = {}) {
    if (!isProductionLocation(location) || !document || typeof adsQueue?.push !== "function") return;
    const slots = [...document.querySelectorAll(".adsbygoogle")];
    if (!slots.length) return;

    appendLoader(document);
    slots.forEach((slot) => {
      syncUnfilledState(slot);
      observeSlot(slot, MutationObserver);
      if (initializedSlots.has(slot)) return;
      adsQueue.push({});
      initializedSlots.add(slot);
    });
  }

  return {
    ADS_LOADER_ID,
    ADS_LOADER_URL,
    PUBLISHER_ID,
    initializeManualAds,
    isProductionLocation,
    syncUnfilledState,
  };
}));
