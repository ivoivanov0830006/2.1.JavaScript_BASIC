function average(input) {
    let numbersCount = Number(input[0]);
    let total = 0;

    for (let i = 1; i <= numbersCount; i++) {
        let currentNumber = Number(input[i]);
        total += currentNumber
    }
    let totalAverage = total / numbersCount;
    console.log(totalAverage.toFixed(2));
}

average(["4",
    "3",
    "2",
    "4",
    "2"])
