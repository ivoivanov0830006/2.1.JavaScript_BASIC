function calculate(input) {
    // Input Data:
    let fee = Number(input[0]);

    // Prices:
    let sneakers = 0.6 * fee
    let outfit = 0.8 * sneakers
    let ball = outfit * 0.25
    let accessories = ball * 0.2

    // Expenses Calculation
    let totalExpenses = fee + sneakers + outfit + ball + accessories

    // Total Expenses
    console.log(totalExpenses);
}

calculate(["365 "])
