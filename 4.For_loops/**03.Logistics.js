function logistics(input) {
    let loadsCount = Number(input[0]);
    
    let busTotal = 0;
    let truckTotal = 0;
    let trainTotal = 0;
    let totalLoadWeight = 0;

    for (let i = 1; i <= loadsCount; i++) {
        let loadWeight = Number(input[i]);
        if (loadWeight <= 3) {
            busTotal += loadWeight;
        } else if (loadWeight <= 11) {
            truckTotal += loadWeight;
        } else {
            trainTotal += loadWeight;
        }
        totalLoadWeight += loadWeight;
    }
    let total = busTotal * 200 + truckTotal * 175 + trainTotal * 120
    let averagePrice = total / totalLoadWeight
    let busPercentage = busTotal / totalLoadWeight * 100;
    let truckPercentage = truckTotal / totalLoadWeight * 100;
    let trainPercentage = trainTotal / totalLoadWeight * 100;
    
    console.log(averagePrice.toFixed(2))
    console.log(busPercentage.toFixed(2) + "%")
    console.log(truckPercentage.toFixed(2) + "%")
    console.log(trainPercentage.toFixed(2) + "%")
}

logistics(["4",
    "1",
    "5",
    "16",
    "3"])
