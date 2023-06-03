function cinema(input) {
    let typeMovie = String(input[0]);
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let price = 0;

    if (typeMovie === "Premiere") {
        price = 12
    }
    else if (typeMovie === "Normal") {
        price = 7.5
    }
    else if (typeMovie === "Discount") {
        price = 5
    }

    let total = price * rows * cols
    console.log(`${total.toFixed(2)} leva`)
}

cinema(["Premiere","10","12"])
