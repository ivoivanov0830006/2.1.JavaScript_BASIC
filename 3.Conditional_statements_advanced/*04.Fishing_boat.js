function fishing(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);
    let price = 0;

    // Season Cases
    if (season === "Spring") {
        price = 3000
    }
    else if (season === "Summer" || season === "Autumn") {
        price = 4200
    }
    else if (season === "Winter") {
        price = 2600
    }

    // Group Cases
    if (fishermans <= 6) {
        price *= 0.9
    }
    else if (fishermans <= 11) {
        price *= 0.85
    } else {
        price *= 0.75
    }
    // Special Case
    if (fishermans % 2 == 0 && season != "Autumn") {
        price *= 0.95
    }

    // Final Result
    if (budget >= price) {
        let restMoney = budget - price
        console.log(`Yes! You have ${restMoney.toFixed(2)} leva left.`)
    } else {
        let neededMoney = price - budget
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`)
    }
}

fishing(["2000",
"Winter",
"12"])
