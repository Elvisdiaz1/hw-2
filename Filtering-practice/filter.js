const hyundai = document.getElementById("hyundai");
const toyota = document.getElementById("toyota");
const mercedes = document.getElementById("mercedes");

// Show Image Functions
const showHyundai = () => {
  hyundai.style.display = "block";
  toyota.style.display = "none";
  mercedes.style.display = "none";
};
const showMercedes = () => {
  hyundai.style.display = "none";
  toyota.style.display = "none";
  mercedes.style.display = "block";
};
const showToyota = () => {
  hyundai.style.display = "none";
  toyota.style.display = "block";
  mercedes.style.display = "none";
};
const showAll = () => {
  hyundai.style.display = "block";
  toyota.style.display = "block";
  mercedes.style.display = "block";
};

// Mercedes Button
document
  .querySelector("#mercedes-button")
  .addEventListener("click", showMercedes);

// Hyundai Button
document
  .querySelector("#hyundai-button")
  .addEventListener("click", showHyundai);

// Toyota Button
document.querySelector("#toyota-button").addEventListener("click", showToyota);

// Show All Button
document.querySelector("#all-button").addEventListener("click", showAll);
