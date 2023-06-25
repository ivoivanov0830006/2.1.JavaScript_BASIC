function race(input) {
    let junioursCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let raceType = input[2];

    let spendings = 0;
    let total = 0;

    if (raceType === "trail") {
        total = junioursCount * 5.5 + seniorsCount * 7;
    } else if (raceType === "cross-country") {
        total = junioursCount * 8 + seniorsCount * 9.5
        let totalCount = junioursCount + seniorsCount;
        if (totalCount >= 50) {
            total *= 0.75;
        }
    } else if (raceType === "downhill") {
        total = junioursCount * 12.25 + seniorsCount * 13.75;
    } else if (raceType === "road") {
        total = junioursCount * 20 + seniorsCount * 21.5;
    }

    spendings = total * 0.05;

    let giftedSum = total - spendings
    console.log(`${giftedSum.toFixed(2)}`)
}

race(["10",
    "20", 
    "trail"])
