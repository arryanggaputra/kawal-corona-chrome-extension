const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
];

window.onload = async function() {
  let doFetch = await fetch("https://api.kawalcovid19.id/v1/api/case/summary", {
    method: "GET",
    mode: "cors"
  });

  let result = await doFetch.json();

  document.getElementById("confirmed").innerText = result.confirmed;
  document.getElementById("recovered").dinnerText = result.recovered;
  document.getElementById("deceased").innerText = result.deceased;
  document.getElementById("activeCare").innerText = result.activeCare;

  let _date = new Date(result.metadata.lastUpdatedAt);

  document.getElementById("metadata").innerText = `${_date.getUTCDate()} ${
    monthNames[_date.getMonth()]
  } ${_date.getFullYear()} ${_date.getHours()}:${_date.getMinutes()}:${_date.getSeconds()}`;
};
