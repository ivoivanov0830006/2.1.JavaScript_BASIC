function toyStore(input) {
    // Input Data
    let holidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);
    let totalPrice = 0;
    let totalCount = 0;
    
    // Toy Prices
    let puzzlePrice = 2.6;
    let dollPrice = 3;
    let bearPrice = 4.1;
    let minionPrice = 8.2;
    let truckPrice = 2;

    // Calculating Order
    totalPrice = puzzlePrice * puzzleCount + dollPrice * dollCount + bearPrice * bearCount + minionPrice * minionCount + truckPrice * truckCount;
    totalCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;

    // Checking Discount
    if (totalCount >= 50) {
        totalPrice = totalPrice * 0.75
    }

    // Calculating Rent
    let rent = totalPrice * 0.1
    totalPrice -= rent

    // Holiday or Not
    if (totalPrice < holidayPrice) {
        let diff = Math.abs(holidayPrice - totalPrice);
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    } else {
        let diff = Math.abs(holidayPrice - totalPrice);
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }

}

toyStore(["40.8","20","25","30","50","10"])
toyStore(["320","8","2","5","5","1"])
