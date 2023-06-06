function sumSeconds(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    totalTime = first + second + third
    timeMinutes = Math.floor(totalTime / 60)
    timeSeconds = totalTime % 60
    if (timeSeconds < 10) {
        console.log(`${timeMinutes}:0${timeSeconds}`)
    }
    else {
        console.log(`${timeMinutes}:${timeSeconds}`)
    }
    
}

sumSeconds(["50",
"50",
"49"])
