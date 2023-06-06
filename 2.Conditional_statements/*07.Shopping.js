function shopping(input) {
    // Input Data
    let budget = Number(input[0]);
    let videoCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let memoryCount = Number(input[3]);
    
    // Toy Prices
    let videoPrice = 250;
    let processorPrice = videoCount * videoPrice * 0.35;
    let memoryPrice = videoCount * videoPrice * 0.1;

    // Calculating Total Cost
    let totalPrice = videoPrice * videoCount + processorPrice * processorCount + memoryPrice * memoryCount 

    // Checking Discount
    if (videoCount > processorCount) {
        totalPrice *= 0.85
    }

    // Holiday or Not
    if (totalPrice <= budget) {
        let diff = Math.abs(totalPrice - budget);
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        let diff = Math.abs(totalPrice - budget);
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }

}

shopping(["900","2","1","3"])
shopping(["920.45","3","1","1"])
