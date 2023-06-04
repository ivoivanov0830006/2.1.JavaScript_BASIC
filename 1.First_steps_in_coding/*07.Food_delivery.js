function calculate(input) {
    // Input Data:
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let vegiMenuCount = Number(input[2]);

    // Prices:
    let chickenMenuPrice = 10.35
    let fishMenuPrice = 12.4
    let vegiMenuPrice = 8.15
    let deliveryPrice = 2.5

    // Order Calculation
    let totalOrder = chickenMenuCount * chickenMenuPrice + fishMenuCount * fishMenuPrice + vegiMenuCount * vegiMenuPrice
    let desert = 0.2 * totalOrder

    // Total Calculation
    console.log(totalOrder + desert + deliveryPrice);
}

calculate(["2 ","4 ","3 "])
