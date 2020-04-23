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
  "Desember",
];

const loadData = async function () {
  let doFetch = await fetch("https://api.kawalcorona.com/", {
    method: "GET",
  });

  let result = await doFetch.json();

  result.filter((data) => {
    if (data.attributes.Country_Region === "Indonesia") {
      document.getElementById("confirmed").innerText =
        data.attributes.Confirmed;
      document.getElementById("recovered").innerText =
        data.attributes.Recovered;
      document.getElementById("deceased").innerText = data.attributes.Deaths;
      document.getElementById("activeCare").innerText = data.attributes.Active;

      let _date = new Date(data.attributes.Last_Update);

      document.getElementById("metadata").innerText = `${_date.getUTCDate()} ${
        monthNames[_date.getMonth()]
      } ${_date.getFullYear()} ${_date.getHours()}:${_date.getMinutes()}:${_date.getSeconds()}`;
    }
  });
};

loadData();
