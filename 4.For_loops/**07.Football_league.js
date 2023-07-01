function leauge(input) {
    let stadiumCapacity = Number(input[0]);
    let fansCount = Number(input[1]);

    let totalA = 0;
    let totalB = 0;
    let totalV = 0;
    let totalG = 0;

    for (let i = 1; i <= fansCount; i++) {
        let currentSector = input[i + 1];

        if (currentSector === "A") {
            totalA ++;
        } else if (currentSector === "B") {
            totalB ++;
        } else if (currentSector === "V") {
            totalV ++;
        } else if (currentSector === "G") {
            totalG ++;
        }
    }

    let percentageA = totalA / fansCount * 100;
    let percentageB = totalB / fansCount * 100;
    let percentageV = totalV / fansCount * 100;
    let percentageG = totalG / fansCount * 100;
    let percentageTotal = fansCount / stadiumCapacity * 100;

    console.log(`${percentageA.toFixed(2)}%`);
    console.log(`${percentageB.toFixed(2)}%`);
    console.log(`${percentageV.toFixed(2)}%`);
    console.log(`${percentageG.toFixed(2)}%`);
    console.log(`${percentageTotal.toFixed(2)}%`);
}

leauge(["76",
    "10",
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"])
