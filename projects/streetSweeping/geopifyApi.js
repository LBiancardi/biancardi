const inputBox = document.getElementById("address");

inputBox.addEventListener("keyup", async () => {
  const address = document.getElementById("address").value;
  console.log(address);
});

var requestOptions = {
  method: "GET",
};

fetch(
  `https://api.geoapify.com/v1/geocode/autocomplete?text=${address}&apiKey=4c07a1832c8c4401b6bc762376312853`,
  requestOptions
)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
