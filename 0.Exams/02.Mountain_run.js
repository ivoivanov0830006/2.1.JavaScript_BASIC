function run(input) {
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let meterPerSeconds = Number(input[2]);

    let delay = (Math.floor(distanceMeters / 50)) * 30;
    let totalSeconds = delay + distanceMeters * meterPerSeconds;

    if (totalSeconds < recordSeconds) {
        console.log(`Yes! The new record is ${totalSeconds.toFixed(2)} seconds.`)
    } else {
        let neededSeconds = totalSeconds - recordSeconds;
        console.log(`No! He was ${neededSeconds.toFixed(2)} seconds slower.`)
    }
}

run (["5554.36",
    "1340",
    "3.23"])
