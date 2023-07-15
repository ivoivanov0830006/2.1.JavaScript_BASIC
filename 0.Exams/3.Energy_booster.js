function energy(input) {
    let fruit = input[0];
    let size = input[1];
    let count = Number(input[2]);

    if (fruit === "Watermelon") {
        if (size === "small") {
            price = 56 * 2;
        } else {
            price = 28.7 * 5;
        }
    } else if (fruit === "Mango") {
        if (size === "small") {
            price = 36.66 * 2;
        } else {
            price = 19.6 * 5;
        }
    } else if (fruit === "Pineapple") {
        if (size === "small") {
            price = 42.1 * 2;
        } else {
            price = 24.8 * 5;
        }
    } else if (fruit === "Raspberry") {
        if (size === "small") {
            price = 20 * 2;
        } else {
            price = 15.2 * 5;
        }
    }

    let total = price * count

    if (400 <= total && total <= 1000) {
        total *= 0.85;
    } else if (total > 1000) {
        total *= 0.5;
    }
    console.log(`${total.toFixed(2)} lv.`)
}

energy(["Pineapple",
    "small",
    "1"])
