function checking(input) {
    let currentNumber = Number(input[0])

    if(currentNumber != 0 && (currentNumber < 100 || currentNumber > 200)) {
        console.log("invalid")
    }
}

checking(["0"])
