function transport(input) {
    // Input Data
    let distance = Number(input[0]);
    let type = input[1];
    let startingPrice = 0;

    // Taxi
    if (distance < 20) {
        startingPrice = 0.7;
        if (type === "day") {
            price = 0.79;
        } else if (type === "night") {
            price = 0.9;
        }
    // Bus
    } else if (distance < 100) {
        price = 0.09;
    // Train 
    } else {
        price = 0.06;
    }

    let totalCost = distance * price + startingPrice

    console.log(totalCost.toFixed(2));
}

transport(["5","day"])
transport(["7","night"])
transport(["25","day"])
