function highest(input) {
    let currentCommand = input[0];
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let index = 1

    while (true) {
        if (currentCommand === "Stop") {
            break;
        }
        currentNumber = Number(currentCommand);
        
        if (currentNumber > maxNumber) {
            maxNumber = currentNumber
        }
        currentCommand = input[index];
        index++;
    }
    console.log(maxNumber)
}



highest(["-1",
"-2",
"Stop"])
