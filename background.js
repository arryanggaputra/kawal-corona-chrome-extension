async function getStatus() {
  let doFetch = await fetch("https://api.kawalcovid19.id/v1/api/case/summary", {
    method: "GET",
    mode: "cors"
  });

  let result = await doFetch.json();

  chrome.browserAction.setBadgeText({ text: `${result.confirmed}` });
  chrome.browserAction.setBadgeBackgroundColor({ color: "red" });
}

window.setInterval(getStatus, 10000);
