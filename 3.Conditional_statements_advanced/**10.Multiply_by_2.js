function numbers(input) {
    for (let i = 0; i < input.length; i++) {
        currentNumber = Number(input[i]);
        if (currentNumber >= 0) {
            result = currentNumber * 2
            console.log(`Result: ${result.toFixed(2)}`)
        } else {
            console.log(`Negative number!`)
            break;
        }
    }
}

numbers(["12",
    "43.2144",
    "12.3",
    "543.23",
    "-20", 
    "10"])
