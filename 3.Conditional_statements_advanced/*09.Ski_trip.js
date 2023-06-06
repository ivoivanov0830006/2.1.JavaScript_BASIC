function vacation(input) {
    let days = Number(input[0]);
    let place = input[1];
    let score = input[2];
    let price = 0;
    let nights = days - 1

    if (place === "room for one person") {
        price = 18
    }
    else if (place === "apartment") {
        price = 25
        if (nights < 10) {
            price *= 0.7
        } else if (10 <= nights && nights <= 15) {
            price *= 0.65
        } else {
            price *= 0.5
        }
    }
    else if (place === "president apartment") {
        price = 35
        if (nights < 10) {
            price *= 0.9
        } else if (10 <= nights && nights <= 15) {
            price *= 0.85
        } else {
            price *= 0.80
        }
    }
    if (score === "positive") {
        price *= 1.25
    } else {
        price *= 0.9
    }
    
    totalCost = price * nights
    console.log(`${totalCost.toFixed(2)}`)
}

vacation(["30","president apartment","negative"])
