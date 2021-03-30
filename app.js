const amountElement = document.querySelector("#amount");
const firstCurrency = document.querySelector("#firstCurrency");
const secondCurrency = document.querySelector("#secondCurrency");

function addEventListeners() {
  amountElement.addEventListener("keyup", updateAmount);
  firstCurrency.addEventListener("change", updateAmount);
  secondCurrency.addEventListener("change", updateAmount);
}

function updateAmount(e) {
  const amount = parseFloat(amountElement.value);
  Currency.exchange(firstCurrency.value, secondCurrency.value, amount)
    .then(exchange => {
      UI.setAmountToUI(exchange);
    })
    .catch(err => console.error(err));
}

addEventListeners();
