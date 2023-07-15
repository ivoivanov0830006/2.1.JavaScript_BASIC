function vacation(input) {
    let peopleCount = Number(input[0]);
    let season = input[1];

    if (peopleCount <= 5) {
        switch(season) {
            case "spring": price = 50; break;
            case "summer": price = 48.5 * 0.85; break;
            case "autumn": price = 60; break;
            case "winter": price = 86 * 1.08; break;
        }
    } else {
        switch(season) {
            case "spring": price = 48; break;
            case "summer": price = 45 * 0.85; break;
            case "autumn": price = 49.5; break;
            case "winter": price = 85 * 1.08; break;
        }
    }
    let totalPrice = peopleCount * price;
    console.log(`${totalPrice.toFixed(2)} leva.`)
}

vacation(["5","spring"])
