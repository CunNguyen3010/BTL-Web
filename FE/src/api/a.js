let url = "https://provinces.open-api.vn/api/?depth=2";
async function loadProvince(url) {
  const response = await fetch(url);
  const names = await response.json();
  console.log(names);
  const fs = require("fs");
  const jsonString = JSON.stringify(names, null, 2);
  fs.writeFileSync("output.json", jsonString);
}
loadProvince(url);
