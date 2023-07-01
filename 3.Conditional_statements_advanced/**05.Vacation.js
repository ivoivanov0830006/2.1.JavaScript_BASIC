function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let location = "";
    let housing = "";
    let price = 0;

    if (budget <= 1000) {
        housing = "Camp";
        if (season === "Winter") {
            location = "Morocco";
            price = budget * 0.45;
        } else {
            location = "Alaska";
            price = budget * 0.65;
        }
    } else if (budget <= 3000) {
        housing = "Hut";
        if (season === "Winter") {
            location = "Morocco";
            price = budget * 0.6;
        } else {
            location = "Alaska";
            price = budget * 0.8;
        }
    } else {
        housing = "Hotel";
        if (season === "Winter") {
            location = "Morocco";
        } else {
            location = "Alaska";
        }
        price = budget * 0.9;
    }
    console.log(`${location} - ${housing} - ${price.toFixed(2)}`)
}

vacation(["5000","Winter"])
