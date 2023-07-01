function bills(input) {
    let months = Number(input[0]);

    let waterBill = 20;
    let interBill = 15;

    let totalElect = 0;
    let totalWater = waterBill * months;
    let totalInter = interBill * months;
    let totalOther = 0;

    for (let i = 1; i <= months; i++) {
        let electBill = Number(input[i]);
        let otherBill = (electBill + waterBill + interBill) * 1.2;
        
        totalElect += electBill;
        totalOther += otherBill;
    }

    let totalAverage = (totalElect + totalWater + totalInter + totalOther) / months;

    console.log(`Electricity: ${totalElect.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInter.toFixed(2)} lv`)
    console.log(`Other: ${totalOther.toFixed(2)} lv`)
    console.log(`Average: ${totalAverage.toFixed(2)} lv`);
}

bills(["5",
    "68.63",
    "89.25",
    "132.53",
    "93.53",
    "63.22"])
