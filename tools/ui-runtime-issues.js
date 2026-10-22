function isFirstParty(url, firstPartyPrefix) {
  if (url.startsWith(firstPartyPrefix)) return true;
  try {
    const firstParty = new URL(firstPartyPrefix);
    return firstParty.protocol !== "file:" && new URL(url).origin === firstParty.origin;
  } catch (_error) {
    return false;
  }
}

function attachRuntimeIssueCollector(page, { firstPartyPrefix, consoleTypes = ["error"] }) {
  const issues = [];
  const consoleMessages = [];
  const failedRequests = [];
  const adRequests = [];
  page.on("console", (message) => {
    if (!consoleTypes.includes(message.type())) return;
    consoleMessages.push({
      type: message.type(),
      text: message.text(),
      location: message.location(),
      argumentCount: message.args().length,
    });
  });
  page.on("pageerror", (error) => issues.push(`pageerror: ${error.message}`));
  page.on("requestfailed", (request) => {
    const failure = {
      url: request.url(),
      resourceType: request.resourceType(),
      errorText: request.failure()?.errorText || "unknown",
    };
    failedRequests.push(failure);
    if (isFirstParty(failure.url, firstPartyPrefix)) {
      issues.push(`requestfailed: ${failure.url} ${failure.errorText}`);
    }
  });
  page.on("response", (response) => {
    if (isFirstParty(response.url(), firstPartyPrefix) && response.status() >= 400) {
      issues.push(`response: ${response.status()} ${response.url()}`);
    }
  });
  page.on("request", (request) => {
    if (/(googlesyndication|doubleclick|googleadservices)/i.test(request.url())) {
      adRequests.push(request.url());
    }
  });

  return {
    snapshot() {
      const fatalIssues = [...issues];
      const externalImageFailures = [];
      // Resolve after collection: console and requestfailed may arrive in either order.
      for (const message of consoleMessages) {
        const url = message.location.url || "";
        const errorText = message.text.match(/^Failed to load resource: (net::ERR_[A-Z0-9_]+(?:\.[A-Za-z0-9_]+)*)$/)?.[1];
        const matchingFailures = failedRequests.filter((failure) => failure.url === url);
        if (message.type === "error" && message.argumentCount === 0 && errorText
          && /^https?:\/\//.test(url) && !isFirstParty(url, firstPartyPrefix)
          && matchingFailures.some((failure) => failure.resourceType === "image" && failure.errorText === errorText)
          && matchingFailures.every((failure) => failure.resourceType === "image")) {
          externalImageFailures.push({ url, resourceType: "image", errorText, consoleText: message.text });
        } else {
          fatalIssues.push(`console ${message.type}: ${message.text} [${url || "unknown URL"}:${message.location.lineNumber ?? "?"}:${message.location.columnNumber ?? "?"}]`);
        }
      }
      return { issues: fatalIssues, adRequests: [...adRequests], externalImageFailures };
    },
  };
}

module.exports = { attachRuntimeIssueCollector };
