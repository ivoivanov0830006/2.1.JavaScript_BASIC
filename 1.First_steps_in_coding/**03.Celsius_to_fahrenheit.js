function farhrenheit(input) {
    let inputDegrees = Number(input);
    let convertedDegrees = inputDegrees * 1.8 + 32

    console.log(convertedDegrees.toFixed(2))
}

farhrenheit("25")
