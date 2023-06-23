function pool(input) {
    let poolVolume = Number(input[0]);
    let pipeFlow1 = Number(input[1]);
    let pipeFlow2 = Number(input[2]);
    let time = Number(input[3]);

    let pipeVolume1 = pipeFlow1 * time;
    let pipeVolume2 = pipeFlow2 * time;

    let totalVolume = pipeVolume1 + pipeVolume2;

    if (totalVolume <= poolVolume) {
        let pipePercentage1 = pipeVolume1 / totalVolume * 100;
        let pipePercentage2 = pipeVolume2 / totalVolume * 100;
        let totalVolumePercentage  = totalVolume / poolVolume * 100;

        console.log(`The pool is ${totalVolumePercentage.toFixed(2)}% full. 
        Pipe 1: ${pipePercentage1.toFixed(2)}%. 
        Pipe 2: ${pipePercentage2.toFixed(2)}%.`)
    } else {
        let difference = totalVolume - poolVolume
        console.log(`For ${time.toFixed(2)} hours the pool overflows with ${difference.toFixed(2)}} liters.`)
    }
}

pool(["1000",
    "100",
    "120",
    "3"])
