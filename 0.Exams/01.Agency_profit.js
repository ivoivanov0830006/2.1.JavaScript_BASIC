function agency(input) {
    let name = input[0];
    let adultTickets = Number(input[1]);
    let childTickets = Number(input[2]);
    let adultPrice = Number(input[3]);
    let fee = Number(input[4]);

    let childPrice = adultPrice * 0.3;

    let totalCost = adultTickets * (adultPrice + fee) + childTickets * (childPrice + fee)
    let profit = totalCost * 0.2;
    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`)
}


agency(["WizzAir",
    "15",
    "5",
    "120",
    "40"])
