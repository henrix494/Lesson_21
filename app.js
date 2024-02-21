const countryName = document.querySelectorAll("option");
const capityalCity = document.querySelector("#capital");
let countryNameValue = "tel aviv";
capityalCity.textContent = countryNameValue;
document.addEventListener("DOMContentLoaded", function () {
  const capityalCity = document.querySelector("#capital");
  const selectElement = document.querySelector("select");

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
      default:
        capityalCity.textContent = "tel aviv";
        break;
    }
  });
});
