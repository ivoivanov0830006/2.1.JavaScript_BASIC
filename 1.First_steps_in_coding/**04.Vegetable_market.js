function vegetables(input) {
    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let kgVegetables = Number(input[2]);
    let kgFruits = Number(input[3]);

    let totalLeva = priceVegetables * kgVegetables + priceFruits * kgFruits
    let totalEuro = totalLeva / 1.94

    console.log(totalEuro.toFixed(2))
}

vegetables(["0.194",
    "19.4",
    "10",
    "10"])
