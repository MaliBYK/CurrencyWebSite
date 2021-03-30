class Currency {
  static exchange(firstCurrency, secondCurrency, amount) {
    return new Promise(function (resolve, reject) {
      fetch(`https://api.exchangeratesapi.io/latest?base=${firstCurrency}`)
        .then(response => response.json())
        .then(data => {
          let change = data.rates[secondCurrency];
          resolve(amount * change);
        })
        .catch(err => reject(new Error(err)));
    });
  }
}
