const outputElement = document.querySelector("#outputResult");
class UI {
  static setAmountToUI(amount) {
    if (isNaN(amount)) {
      this.changeAlert("Please Enter a Valid Amount ! ", "danger");
      return;
    }
    if (!isNaN(amount)) this.changeAlert("Succesfully Exchanged !", "success");
    outputElement.value = amount.toFixed(2);
  }
  static changeAlert(alertText, alertType) {
    const alertElement = document.querySelector("#alertElement");
    alertElement.style.display = "block";
    alertElement.className = `alert alert-${alertType}`;
    alertElement.innerHTML = alertText;
  }

  static changeTitleInUI(firstCurrency, secondCurrency) {
    document.querySelector("#outputFirst").innerHTML = `${firstCurrency}`;
    document.querySelector("#outputSecond").innerHTML = `${secondCurrency}`;
  }
}
