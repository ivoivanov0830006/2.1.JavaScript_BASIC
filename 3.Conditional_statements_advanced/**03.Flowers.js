function flowers(input) {
    // Initial Data
    let chrisantemasCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipsCount = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    // Calculating Flowers Count
    let totalFlowers = chrisantemasCount + rosesCount + tulipsCount;
    let totalPrice = 0;

    // Calculating Bouquet Price
    if (season === "Spring" || season === "Summer") {
        totalPrice = chrisantemasCount * 2 + rosesCount * 4.1 + tulipsCount * 2.5;
    } else if (season === "Autumn" || season === "Winter") {
        totalPrice = chrisantemasCount * 3.75 + rosesCount * 4.5 + tulipsCount * 4.15;
    }

    // Holiday Condition
    if (holiday === "Y") {
        totalPrice *= 1.15;
    }

    // Tulips Condition
    if (tulipsCount > 7 && season === "Spring") {
        totalPrice *= 0.95;
    }

    // Roses Condition
    if (rosesCount >= 10 && season === "Winter") {
        totalPrice *= 0.9;
    }

    // Flowers > 20 Condition
    if (totalFlowers > 20) {
        totalPrice *= 0.8;
    }

    totalPrice += 2
    console.log(totalPrice.toFixed(2))
}

flowers(["2",
    "4",
    "8",
    "Spring",
    "Y"])
