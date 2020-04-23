function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
    : Math.sign(num) * Math.abs(num);
}

async function getStatus() {
  let doFetch = await fetch("https://api.kawalcovid19.id/v1/api/case/summary", {
    method: "GET",
    mode: "cors",
  });

  let result = await doFetch.json();

  chrome.browserAction.setBadgeText({
    text: `${kFormatter(result.confirmed)}`,
  });
  chrome.browserAction.setBadgeBackgroundColor({ color: "#a64452" });
}

window.setInterval(getStatus, 10000);
