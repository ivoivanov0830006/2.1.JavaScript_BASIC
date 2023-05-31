function smallShop(input) {
    let product = String(input[0]);
    let location = String(input[1]);
    let quantity = Number(input[2]);
    let price = 0;

    // Prices in Sofia
    if (location === "Sofia") {
        if (product === "coffee") {
            price = 0.5;
        }
        if (product === "water") {
            price = 0.8;
        }
        if (product === "beer") {
            price = 1.2;
        }
        if (product === "sweets") {
            price = 1.45;
        }
        if (product === "peanuts") {
            price = 1.6;
        }

    // Prices in Plovdiv
    } else if (location === "Plovdiv") {
        if (product === "coffee") {
            price = 0.4;
        }
        if (product === "water") {
            price = 0.7;
        }
        if (product === "beer") {
            price = 1.15;
        }
        if (product === "sweets") {
            price = 1.3;
        }
        if (product === "peanuts") {
            price = 1.5;
        }
    
    // Prices in Varna
    } else if (location === "Varna") {
        if (product === "coffee") {
            price = 0.45;
        }
        else if (product === "water") {
            price = 0.7;
        }
        else if (product === "beer") {
            price = 1.1;
        }
        else if (product === "sweets") {
            price = 1.35;
        }
        else if (product === "peanuts") {
            price = 1.55;
        }
    }
