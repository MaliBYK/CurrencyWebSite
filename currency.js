class Currency {
  static exchange(firstCurrency, secondCurrency, amount) {
    return new Promise(function (resolve, reject) {
      fetch(
        `http://api.currencylayer.com/live?access_key=dfe3da272d64e79c1486d48fce1bb176`
      )
        .then(response => response.json())
        .then(data => {
          let change = data.quotes[`USD${secondCurrency}`];
          let change2 = data.quotes[`USD${firstCurrency}`];
          resolve((amount * change) / change2);
        })
        .catch(err => reject(new Error(err)));
    });
  }
}
