const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");
const { matchesPchomeProductId, selectPchomeCurrentPrice } = require("./pchome-product-api");

const root = path.resolve(__dirname, "..");
const write = process.argv.includes("--write");
const dateArgument = process.argv.find((argument) => argument.startsWith("--date="));
const checkedAt = dateArgument?.slice("--date=".length);
const concurrency = Number(process.env.PCHOME_AUDIT_CONCURRENCY || 16);

if (write && !/^\d{4}-\d{2}-\d{2}$/.test(checkedAt || "")) {
  throw new Error("--write requires --date=YYYY-MM-DD");
}

function productIdFromUrl(url) {
  const match = new URL(url).pathname.match(/^\/prod\/([^/]+)$/);
  return match?.[1] || null;
}

async function fetchPchomeProduct(product) {
  const productId = productIdFromUrl(product.buyUrl);
  if (!productId) throw new Error(`Unsupported PChome URL for ${product.id}: ${product.buyUrl}`);
  const apiUrl = `https://ecapi-cdn.pchome.com.tw/ecshop/prodapi/v2/prod?id=${productId}&fields=Id,Name,Nick,Price,Qty`;
  const response = await fetch(apiUrl, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!response.ok) throw new Error(`${product.id} PChome API returned ${response.status}`);
  const payload = await response.json();
  const item = Object.values(payload)[0];
  if (!item) throw new Error(`${product.id} PChome API returned no product`);
  if (!matchesPchomeProductId(productId, item)) {
    throw new Error(`${product.id} PChome API product ID mismatch: expected ${productId}, received ${item.Id || "missing"}`);
  }
  return { apiUrl, item };
}

function updateProductPrice(product, amount) {
  const file = path.join(root, "products", `${product.category}.js`);
  let source = fs.readFileSync(file, "utf8");
  const idMarker = `"id": ${JSON.stringify(product.id)}`;
  const idIndex = source.indexOf(idMarker);
  if (idIndex < 0) throw new Error(`Unable to locate ${product.id} in ${file}`);
  const priceIndex = source.indexOf('"price": {', idIndex);
  const priceEnd = source.indexOf("\n    },", priceIndex);
  if (priceIndex < 0 || priceEnd < 0) throw new Error(`Unable to locate ${product.id} price block`);

  const before = source.slice(priceIndex, priceEnd);
  const confidence = `PChome ${checkedAt} exact-model 公開價；有正值 Price.Low 時優先於 Price.P`;
  const after = before
    .replace(/"amount":\s*[\d.]+/, `"amount": ${amount}`)
    .replace(/"converted":\s*[\d.]+/, `"converted": ${amount}`)
    .replace(/"confidence":\s*"[^"]*"/, `"confidence": ${JSON.stringify(confidence)}`);
  if (before === after) throw new Error(`Unable to update ${product.id} price block`);
  source = `${source.slice(0, priceIndex)}${after}${source.slice(priceEnd)}`;
  fs.writeFileSync(file, source);
}

async function main() {
  const { products } = readDashboardProducts(root);
  const pchomeProducts = products.filter((product) => productIdFromUrl(product.buyUrl));
  const results = [];
  let cursor = 0;

  async function worker() {
    while (cursor < pchomeProducts.length) {
      const product = pchomeProducts[cursor++];
      try {
        const { apiUrl, item } = await fetchPchomeProduct(product);
        const amount = selectPchomeCurrentPrice(item.Price);
        const quantity = Number(item.Qty || 0);
        const status = quantity <= 0
          ? "tracking_out_of_stock"
          : amount === null
            ? "invalid_price"
            : amount === product.price.amount
              ? "unchanged"
              : "price_changed";
        results.push({
          id: product.id,
          category: product.category,
          status,
          before: product.price.amount,
          after: amount,
          quantity,
          networkPrice: item.Price?.P ?? null,
          discountPrice: item.Price?.Low ?? null,
          apiUrl,
        });
      } catch (error) {
        results.push({ id: product.id, category: product.category, status: "request_failed", error: error.message });
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker));
  results.sort((left, right) => left.id.localeCompare(right.id));
  const changes = results.filter((result) => result.status === "price_changed");
  const unsafeResults = results.filter((result) => ["invalid_price", "request_failed"].includes(result.status));
  if (write) {
    if (unsafeResults.length > 0) {
      throw new Error(`Refusing to write with ${unsafeResults.length} unsafe PChome audit result(s)`);
    }
    for (const change of changes) {
      const product = products.find((candidate) => candidate.id === change.id);
      updateProductPrice(product, change.after);
    }
  }

  console.log(JSON.stringify({
    checkedAt: new Date().toISOString(),
    write,
    audited: results.length,
    changed: changes.length,
    decreases: changes.filter((change) => change.after < change.before).length,
    increases: changes.filter((change) => change.after > change.before).length,
    outOfStockTracked: results.filter((result) => result.status === "tracking_out_of_stock").length,
    outOfStock: results.filter((result) => result.status === "tracking_out_of_stock"),
    invalidPrices: results.filter((result) => result.status === "invalid_price").length,
    requestFailures: results.filter((result) => result.status === "request_failed").length,
    unsafeResults,
    changes,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
