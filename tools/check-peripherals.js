const assert = require("assert/strict");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const {
  PERIPHERAL_TYPES,
  PERIPHERAL_SPEC_PREFIXES,
  dimensionPatternForCategory,
  weightPatternForCategory,
} = require("./dashboard-contract");
const { validatePeripheralProduct, validatePeripheralCatalog, validateCandidateReview } = require("./verify-data");
const { isEligibleTaiwanCoverageProduct } = require("./japanese-brand-audit");

function fixture(category, index = 0) {
  const type = { mouse: "standard", keyboard: "mechanical", mousepad: "cloth" }[category];
  return {
    id: `${category}-${index}`, category, brand: "Example", model: `SKU-${index}`, type,
    variantFamily: `Family-${index}`, budget: index < 6 ? "value" : index < 18 ? "mid" : "premium",
    channel: "tw", topPick: index === 0, warranty: "台灣原廠保固",
    voltage: category === "mousepad" ? "非電器，不需供電" : "USB DC 5V / 500mA",
    tags: [index % 2 ? "電競推薦" : "辦公推薦"],
    specs: PERIPHERAL_SPEC_PREFIXES[category].map((prefix) => {
      if (prefix === "尺寸：") return category === "mousepad"
        ? "尺寸：長 450 x 寬 400 mm" : "尺寸：寬 70 x 深 120 x 高 40 mm";
      if (prefix === "重量：") return "重量：淨重 60 g";
      if (prefix === "厚度：") return "厚度：4 mm";
      if (prefix === "軸體：") return "軸體：Example 紅軸";
      return `${prefix}來源明示規格`;
    }),
  };
}

function checkPeripherals() {
  for (const sourceExcerpt of [undefined, 123]) {
    const failures = [];
    assert.doesNotThrow(() => validateCandidateReview({ sourceExcerpt }, "candidate", "2026-08-31", failures));
    assert(failures.some((failure) => failure.includes("requires a specific original-page excerpt")));
  }
  for (const category of ["mouse", "keyboard", "mousepad"]) {
    const product = fixture(category);
    const failures = [];
    validatePeripheralProduct(product, failures);
    assert.deepEqual(failures, [], `${category} complete specification should pass`);
    const dimension = product.specs.find((spec) => spec.startsWith("尺寸："));
    assert(dimensionPatternForCategory(category).test(dimension));
    assert(weightPatternForCategory(category).test("重量：淨重 60 g"));
    assert(dimensionPatternForCategory(category).test("尺寸：查不到"));
    assert(weightPatternForCategory(category).test("重量：查不到"));
    for (const invalid of ["尺寸：70 x 120 x 40 mm", "尺寸：包裝 寬 70 x 深 120 x 高 40 mm"]) {
      assert(!dimensionPatternForCategory(category).test(invalid));
    }
    assert(!weightPatternForCategory(category).test("重量：毛重 60 g"));
    assert(!weightPatternForCategory(category).test("重量：淨重 0.06 kg"));
    const invalidType = [];
    validatePeripheralProduct({ ...product, type: "gas" }, invalidType);
    assert(invalidType.some((failure) => failure.includes("type")));
    const missingSpec = [];
    validatePeripheralProduct({ ...product, specs: product.specs.slice(1) }, missingSpec);
    assert(missingSpec.length > 0);
    for (const name of ["福利品", "裸套", "Barebone keyboard", "替換腳貼", "單獨鍵帽", "軸體套裝", "Touchpad", "獨立數字鍵盤"]) {
      const excluded = [];
      validatePeripheralProduct({ ...product, name }, excluded);
      assert(excluded.some((failure) => /complete|excluded listing/.test(failure)), `${name} must not be a complete peripheral`);
    }
  }
  assert(dimensionPatternForCategory("tv").test("尺寸：寬 120 x 深 10 x 高 70 cm"));
  assert(!dimensionPatternForCategory("tv").test("尺寸：寬 1200 x 深 100 x 高 700 mm"));
  assert(weightPatternForCategory("tv").test("重量：淨重 20 kg"));
  assert(!weightPatternForCategory("tv").test("重量：淨重 20000 g"));
  assert(weightPatternForCategory("mouse").test("重量：不含金屬板／不含接收器 164 g；含金屬板／不含接收器 259 g"));
  assert(!weightPatternForCategory("mouse").test("重量：本體 164 g；包裝 259 g"));
  assert(!weightPatternForCategory("mouse").test("重量：本體 164 g；含金屬板 0.259 kg"));
  assert(dimensionPatternForCategory("keyboard").test("尺寸：高 147 x 寬 401 x 深 39.6 mm"));
  assert(dimensionPatternForCategory("mouse").test("尺寸：長 129 x 握持寬 62 x 高 43 mm（約；握持寬非最大外寬）"));
  assert(!dimensionPatternForCategory("mouse").test("尺寸：長 129 x 握持寬 62 x 寬 43 mm"));
  assert(dimensionPatternForCategory("keyboard").test("尺寸：不含護腕墊 長 363 x 寬 139 x 高 39 mm；含護腕墊 長 363 x 寬 224 x 高 39 mm"));
  assert(dimensionPatternForCategory("keyboard").test("尺寸：機殼（不含鍵帽）長 447.9 x 寬 149 x 高 32.5 mm；前高 23.6 mm"));
  assert(dimensionPatternForCategory("mousepad").test("尺寸：寬 235 x 深 205 x 高 2 mm（約）"));
  assert(weightPatternForCategory("mousepad").test("重量：65 g（約）"));
  assert(weightPatternForCategory("keyboard").test("重量：943 g（含線；未單列裸鍵盤）"));
  assert(weightPatternForCategory("mouse").test("重量：135 g（含 AA 電池）"));
  for (const invalid of [
    "尺寸：長 363 x 寬 139 x 高 39 mm；含護腕墊 長 363 x 長 224 x 高 39 mm",
    "尺寸：長 363 x 寬 139 x 高 39 mm；包裝 長 400 x 寬 300 x 高 50 mm",
    "尺寸：長 363 x 寬 139 x 高 39 mm；",
    "尺寸：前高 23.6 mm",
  ]) assert(!dimensionPatternForCategory("keyboard").test(invalid), invalid);
  assert(!weightPatternForCategory("mousepad").test("重量：65 g（含包裝）"));
  assert(!weightPatternForCategory("keyboard").test("重量：943 g（毛重）"));
  assert(dimensionPatternForCategory("mousepad").test("尺寸：高 280 x 寬 340 x 深 3 mm"));
  assert(!dimensionPatternForCategory("mouse").test("尺寸：高 120 x 寬 70 x 高 40 mm"));

  for (const category of ["mouse", "keyboard", "mousepad"]) {
    const products = Array.from({ length: 30 }, (_, index) => fixture(category, index));
    const types = {
      mouse: ["standard", "vertical", "trackball"],
      keyboard: ["membrane", "scissor", "mechanical", "magnetic", "optical"],
      mousepad: ["cloth", "hard", "glass"],
    }[category];
    products.forEach((product, index) => { product.type = types[index % types.length]; });
    const failures = [];
    validatePeripheralCatalog(products, failures);
    assert.deepEqual(failures, []);
    const wrongBudget = [];
    validatePeripheralCatalog(products.map((product) => ({ ...product, budget: "premium" })), wrongBudget);
    assert(wrongBudget.some((failure) => failure.includes("budget")));
    const overseasPick = [];
    validatePeripheralProduct({ ...products[0], channel: "global" }, overseasPick);
    assert(overseasPick.some((failure) => failure.includes("Top Pick")));
    const noWarrantyPick = [];
    validatePeripheralProduct({ ...products[0], warranty: "台灣官方明示本商品無保固" }, noWarrantyPick);
    assert(noWarrantyPick.some((failure) => failure.includes("Top Pick")));
    if (category === "mouse") continue;

    const siblings = products.slice(0, 3);
    siblings.forEach((product, index) => {
      product.variantFamily = "One family";
      const prefix = category === "keyboard" ? "軸體：" : "尺寸：";
      product.specs = product.specs.map((spec) => spec.startsWith(prefix)
        ? (category === "keyboard" ? `軸體：Example switch ${index}` : `尺寸：長 ${400 + index * 50} x 寬 400 mm`)
        : spec);
    });
    const threeVariants = [];
    validatePeripheralCatalog(products, threeVariants);
    assert.deepEqual(threeVariants, []);
    if (category === "keyboard") {
      const originalSpecs = siblings[1].specs;
      for (const note of ["；線性，45 g 觸發力", "; RGB、英文版"]) {
        siblings[1].specs = siblings[0].specs.map((spec) => spec.startsWith("軸體：") ? `${spec}${note}` : spec);
        const duplicateWithNotes = [];
        validatePeripheralCatalog(products, duplicateWithNotes);
        assert(duplicateWithNotes.some((failure) => failure.includes("duplicate variant")), "switch notes cannot create a different variant");
      }
      siblings[1].specs = originalSpecs;
    }
    products[3].variantFamily = "One family";
    const fourVariants = [];
    validatePeripheralCatalog(products, fourVariants);
    assert(fourVariants.some((failure) => failure.includes("at most 3")));
    products[3].variantFamily = "Family-3";
    siblings[1].specs = [...siblings[0].specs];
    const duplicateVariant = [];
    validatePeripheralCatalog(products, duplicateVariant);
    assert(duplicateVariant.some((failure) => failure.includes("duplicate variant")));
    if (category === "mousepad") {
      siblings[1].specs = siblings[1].specs.map((spec) => spec.startsWith("尺寸：")
        ? "尺寸：寬 400 x 長 400.0 mm" : spec);
      const rotatedDuplicate = [];
      validatePeripheralCatalog(products, rotatedDuplicate);
      assert(rotatedDuplicate.some((failure) => failure.includes("duplicate variant")));
      siblings[1].specs = siblings[1].specs.map((spec) => spec.startsWith("尺寸：")
        ? "尺寸：高 400 x 寬 400 x 深 5 mm" : spec);
      const ambiguousPlanarSize = [];
      validatePeripheralCatalog(products, ambiguousPlanarSize);
      assert(ambiguousPlanarSize.some((failure) => failure.includes("two explicit planar dimensions")));
    }
  }
  assert.equal(isEligibleTaiwanCoverageProduct({
    ...fixture("mousepad"), warranty: "台灣 Sony Store 新品，官方明示本商品無保固",
    price: { currency: "TWD", amount: 1990, converted: 1990, basis: "retailer_current" },
    installation: { status: "not_stated", note: "非電器桌面用品" },
  }, { requireNewContract: true }), false, "no warranty cannot count as a Taiwan-warranty representative");
  const context = vm.createContext({ URL, URLSearchParams });
  for (const file of ["config", "utils", "filters", "url-state"]) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, `../assets/js/${file}.js`), "utf8"), context);
  }
  const { categories, products, filters, state, urlState } = context.applianceDashboard;
  categories.splice(0, categories.length, ...Object.keys(PERIPHERAL_TYPES).map((id) => ({ id, label: id })));
  products.push(...Object.entries(PERIPHERAL_TYPES).flatMap(([category, types]) => types.map((type, index) => ({
    ...fixture(category, index), type, brand: `${category}-brand`, rank: index,
  }))));
  context.history = { replaceState(_state, _title, url) { context.location = new URL(url); } };
  for (const [category, types] of Object.entries(PERIPHERAL_TYPES)) {
    for (const type of types) {
      context.location = new URL(`https://example.test/?category=${category}&type=${type}&brand=${category}-brand`);
      urlState.applyFromQuery();
      assert.equal(state.type, type, `${category}/${type} direct link`);
      assert.equal(filters.filteredProducts().length, 1);
      assert.equal(filters.activeAdvancedFilterCount(), 3, "mobile category/type/brand count");
      assert.deepEqual(Array.from(filters.brandOptionsForCurrentCategory()), [`${category}-brand`]);
      urlState.syncToQuery();
      assert.equal(context.location.searchParams.get("type"), type, "shared URL retains type");
      const otherCategory = Object.keys(PERIPHERAL_TYPES).find((value) => value !== category);
      filters.applyFilterValue("category", otherCategory);
      assert.equal(state.type, "all", "cross-category type clears");
      assert.equal(state.brand, "all", "cross-category brand clears");
    }
    context.location = new URL(`https://example.test/?category=${category}&type=gas`);
    urlState.applyFromQuery();
    assert.equal(state.type, "all");
    assert(!context.location.searchParams.has("type"), "invalid type removed from URL");
    for (const name of ["category", "type", "brand", "budget", "channel", "sort"]) {
      filters.applyFilterValue(name, filters.defaultFilterValue(name));
    }
    assert.equal(filters.activeAdvancedFilterCount(), 0, "reset clears advanced filters");
  }
}

if (require.main === module) {
  checkPeripherals();
  console.log("peripheral contract check passed");
}

module.exports = { checkPeripherals };
