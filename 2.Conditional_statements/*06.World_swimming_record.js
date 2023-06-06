function swimming(input) {
    // Input Data
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    // Calculating Needed Time
    let swimmingTime = distance * secondsPerMeter;
    
    // Calculating Resistance Time
    let resistanceCount = Math.floor(distance / 15);
    let resistanceSeconds = resistanceCount * 12.5;

    // Calculating Swim
    
    let totalTime = swimmingTime + resistanceSeconds

    // Success or Not
    if (totalTime >= record) {
        let diff = Math.abs(record - totalTime);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    } else {
        let diff = Math.abs(record - totalTime);
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}

swimming(["55555.67","3017","5.03"])
