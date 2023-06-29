function tickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let groupCount = Number(input[2]);

    let price = 0;
    let discount = 0;

    switch(category) {
        case "VIP": price = 499.99; break;
        case "Normal": price = 249.99; break;
    }

    let neededMoney = price * groupCount;

    if (groupCount < 5) {
        discount = 0.75;
    } else if (groupCount < 10) {
        discount = 0.6;
    } else if (groupCount < 25) {
        discount = 0.5;
    } else if (groupCount < 50) {
        discount = 0.4;
    } else {
        discount = 0.25;

    let transportCost = budget * discount;
    let currentMoney = budget - transportCost;

    let difference = Math.abs(currentMoney - neededMoney);

    if (currentMoney >= neededMoney) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
    }
}

tickets(["1000",
    "Normal",
    "1"])
tickets(["30000",
"VIP",
"49"])
