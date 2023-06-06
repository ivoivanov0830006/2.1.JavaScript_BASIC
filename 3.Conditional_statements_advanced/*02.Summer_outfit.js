function outfit(input) {
    let temp = Number(input[0]);
    let time = input[1];
    let outfit = "";
    let shoes = "";

    if (time === "Morning") {
        if (temp >= 10 && temp <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if (temp <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    }
    if (time === "Afternoon") {
        if (temp >= 10 && temp <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (temp <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    }
    if (time === "Evening") {
        if (temp >= 10 && temp <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (temp <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
}

outfit(["16","Morning"])
