function movie(input) {
    // Input Data
    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clothingPrice = Number(input[2]);
    let totalCost = 0;

    // Checking Discount
    if (actorsCount > 150) {
        clothingPrice *= 0.9
    }
    
    // Calculating Decoration
    let decor = budget * 0.1

    // Calculating Order
    totalCost = clothingPrice * actorsCount + decor

    // Action or not
    if (totalCost <= budget) {
        let restMoney = budget - totalCost;
        console.log(`Action!\nWingard starts filming with ${restMoney.toFixed(2)} leva left.`);
    } else {
        let neededMoney = totalCost - budget;
        console.log(`Not enough money!\nWingard needs ${neededMoney.toFixed(2)} leva more.`);
    }

}

movie(["20000","120","55.5"])
movie(["15437.62","186","57.99"])
movie(["9587.88","222","55.68"])
