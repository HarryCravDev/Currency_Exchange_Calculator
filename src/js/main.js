import "../scss/main.scss";

// DOM ELEMENTS
const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Calculate Function
function calculate() {
  // Currency values
  const currencyOne = currencyEl_one.value;
  const currencyTwo = currencyEl_two.value;

  // Fetch exchange rates and display to UI
  fetch(`https://api.exchangeratesapi.io/latest?base=${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
      // Get Rate
      const rate = data.rates[currencyTwo];

      // Display Rate
      rateEl.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      // Calculate amount
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event Listeners
amountEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
amountEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
