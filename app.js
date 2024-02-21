const capityalCity = document.querySelector("#capital");
const selectElement = document.querySelector("select");

capityalCity.textContent = "tel aviv";

selectElement.addEventListener("change", (e) => {
  let countryNameValue = e.target.value;

  switch (countryNameValue) {
    case "isreal":
      capityalCity.textContent = "tel aviv";
      break;
    case "italy":
      capityalCity.textContent = "rome";
      break;
    case "brazil":
      capityalCity.textContent = "brasilia";
      break;
    case "russia":
      capityalCity.textContent = "moscow";
      break;
  }
});
