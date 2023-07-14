function luggage(input) {
    let price = Number(input[0]);
    let luggageWeight = Number(input[1]);
    let daysLeft = Number(input[2]);
    let luggageCount = Number(input[3]);

    if (luggageWeight < 10) {
        price *= 0.2;
    } else if (luggageWeight <= 20) {
        price *= 0.5;
    }
 
    if (daysLeft < 7) {
        price *= 1.4;
    } else if (daysLeft <= 30) {
        price *= 1.15;
    } else {
        price *= 1.1;
    }

    let totalPrice = luggageCount * price
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`)
}

luggage(["30",
    "18",
    "15",
    "2"])
