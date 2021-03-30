const amountElement = document.querySelector("#amount");
const firstCurrency = document.querySelector("#firstCurrency");
const secondCurrency = document.querySelector("#secondCurrency");
const exchangeButton = document.querySelector("#exchangeBtn");

exchangeButton.addEventListener("click", updateAmount);

function updateAmount(e) {
  const amount = parseFloat(amountElement.value);
  Currency.exchange(firstCurrency.value, secondCurrency.value, amount)
    .then(exchange => {
      UI.setAmountToUI(exchange);
      UI.changeTitleInUI(firstCurrency.value, secondCurrency.value);
    })
    .catch(err => console.error(err));
}
