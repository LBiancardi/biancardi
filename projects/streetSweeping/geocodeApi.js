const inputBox = document.getElementById("address");
const subRequest = document.getElementById("subRequest");

subRequest.addEventListener("click", () => {
  const address = inputBox.value;
  apiReq(address);
});
const apiReq = async (address) => {
  const req = await fetch(
    `https://app.geocodeapi.io/api/v1/autocomplete?apikey=e4ac2630-6d81-11ec-831a-951eb9acc408&text=${address}&size=5`
  );
  const res = await req.json();
  const cityList = res.features;
  console.log(cityList);
  for (const city of cityList) {
    const countryName = city.properties.country;
    const countyName = city.properties.county;
    const label = city.properties.label;
    const locality = city.properties.locality;
    const cityName = city.properties.name;
    const region = city.properties.region;
    const region_a = city.properties.region_a;
    console.log(`${cityName}, ${region_a}, ${countyName}, ${countryName}`);
    console.log(`More info: ${label}, ${locality}, ${region}`);
  }
};