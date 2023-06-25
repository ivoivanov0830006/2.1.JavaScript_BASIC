function tank(input) {
    let fuel = input[0];
    let quantity = Number(input[1]);
    let clubCard = input[2];

    let total = 0;
    let price = 0;

    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;

    if (clubCard === "Yes") {
        gasolinePrice -= 0.18;
        dieselPrice -= 0.12;
        gasPrice -= 0.08;
    }

    switch(fuel) {
        case "Diesel": price = dieselPrice; break;
        case "Gasoline": price = gasolinePrice; break;
        case "Gas": price = gasPrice; break;
    }
    
    if (quantity < 20) {
        total = quantity * price;
    } else if (quantity <= 25) {
        total = quantity * price * 0.92;
    } else {
        total = quantity * price * 0.9;
    }
    
    console.log(`${total.toFixed(2)} lv.`)
}

tank(["Gas", "30", "Yes"])
