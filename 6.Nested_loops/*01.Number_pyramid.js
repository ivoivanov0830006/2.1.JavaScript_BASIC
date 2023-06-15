function pyramid(input) {
    let endNumber = Number(input[0]);
    let currentNumber = 1;
    let isDone = false;

    for (let row = 1; row <= currentNumber; row++) {
        let totalRow = "";
        for (let col = 1; col <= row; col++) {
            if (currentNumber > endNumber) {
                isDone = true;
                break;
            }
            totalRow += `${currentNumber}` + " ";
            currentNumber++;                
        }
        console.log(totalRow)
        if (isDone) {
            break;
        }
    }
}

pyramid(["7"])
