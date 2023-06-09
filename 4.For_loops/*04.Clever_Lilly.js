function lilly(input) {
    let lillyAge = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let totalMoney = 0;
    let totalToys = 0;

    for (i = 1; i <= lillyAge; i ++) {
        if (i % 2 == 0) {
            totalMoney += (10 * i / 2) - 1;
        } else {
            totalToys += 1;
        }
    }

    totalMoney += (totalToys * toyPrice);
    if (totalMoney < washerPrice) {
        let neededMoney = washerPrice - totalMoney
        console.log(`No! ${neededMoney.toFixed(2)}`)
    } else {
        let restMoney = totalMoney - washerPrice
        console.log(`Yes! ${restMoney.toFixed(2)}`)
    }

}

lilly(["10","170.00","6"])
