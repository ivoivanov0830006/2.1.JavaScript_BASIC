function change(input) {
    let bitcoins = Number(input[0]);
    let yuan = Number(input[1]);
    let commission = Number(input[2]);

    let bitcoinPrice = 1168; // LEVA
    let dollarPrice = 1.76;  // LEVA 
    let yuanPrice = 0.15 * dollarPrice;

    let euroPrice = 1.95;    // LEVA

    let totalMoney = (bitcoins * bitcoinPrice) / euroPrice + (yuan * yuanPrice) / euroPrice;
    let finalMoney = totalMoney * ((100 - commission) / 100);
    console.log(finalMoney.toFixed(2));
}

change(["1",
    "5",
    "5"])
