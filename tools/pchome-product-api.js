function positiveNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function selectPchomeCurrentPrice(price) {
  if (!price || typeof price !== "object") return null;
  return positiveNumber(price.Low) ?? positiveNumber(price.P);
}

function matchesPchomeProductId(expectedId, item) {
  if (typeof expectedId !== "string" || typeof item?.Id !== "string") return false;
  const returnedProductId = item.Id.replace(/-\d{3}$/i, "");
  return returnedProductId.toUpperCase() === expectedId.toUpperCase();
}

module.exports = { matchesPchomeProductId, selectPchomeCurrentPrice };
