function vineyard(input) {
    let area = Number(input[0]);
    let grapesPerMeter = Number(input[1]);
    let neededLiters = Number(input[2]);
    let workersCount = Number(input[3]);

    let totalGrapesKg = area * grapesPerMeter * 0.4;
    let totalWineLiters = totalGrapesKg / 2.5;
    
    let difference = Math.abs(neededLiters - totalWineLiters);

    if (neededLiters <= totalWineLiters) {
        let winePerWorker = difference / workersCount
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWineLiters)} liters.`)
        console.log(`${Math.ceil(difference)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`)
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(difference)} liters wine needed.`)
    }
}

vineyard(["650",
    "2",
    "175",
    "3"])

vineyard(["1020",
"1.5",
"425",
"4"])
