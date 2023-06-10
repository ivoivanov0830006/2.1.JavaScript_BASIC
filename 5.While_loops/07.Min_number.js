function lowest(input) {
    let currentCommand = input[0];
    let minNumber = Number.MAX_SAFE_INTEGER;
    let index = 1

    while (true) {
        if (currentCommand === "Stop") {
            break;
        }
        currentNumber = Number(currentCommand);
        
        if (currentNumber < minNumber) {
            minNumber = currentNumber
        }
        currentCommand = input[index];
        index++;
    }
    console.log(minNumber)
}



lowest(["100",
"99",
"80",
"70",
"Stop"])
