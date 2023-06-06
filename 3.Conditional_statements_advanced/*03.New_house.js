function flowers(input) {
    // Input Data
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalCost = 0;
    let price = 0;
    let discount = 1;

    // All Cases
    if (flowerType === "Roses") {
        price = 5
        if (flowerCount > 80) {
            discount -= 0.1
        }
    }
    if (flowerType === "Dahlias") {
        price = 3.8
        if (flowerCount > 90) {
            discount -= 0.15
        }
    }
    if (flowerType === "Tulips") {
        price = 2.8
        if (flowerCount > 80) {
            discount -= 0.15
        }
    }
    if (flowerType === "Narcissus") {
        price = 3
        if (flowerCount < 120) {
            discount += 0.15
        }
    }
    if (flowerType === "Gladiolus") {
        price = 2.5
        if (flowerCount < 80) {
            discount += 0.2
        }
    }

    // Calculating Order
    totalCost = flowerCount * price * discount

    // Final Result
    if (budget >= totalCost) {
        let restMoney = budget - totalCost
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${restMoney.toFixed(2)} leva left.`)
    } else {
        let neededMoney = totalCost - budget
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
    }
}

flowers(["Roses","55","250"])
