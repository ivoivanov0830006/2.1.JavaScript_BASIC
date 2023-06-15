function combination(input) {
    let start = Number(input[0]); 
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;
    let combinationCount = 0;
    let totalSum = 0

    for (num1 = start; num1 <= end; num1++) {
        for (num2 = start; num2 <= end; num2++) {
            totalSum = num1 + num2;
            combinationCount += 1;
            if (totalSum == magicNumber) {
                isFound = true;
                break;
            } 
        }
        if (isFound) {
            break;
        }
    }
    if (isFound) {
        console.log(`Combination N:${combinationCount} (${num1} + ${num2} = ${magicNumber})`)
    } else {
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`)
    }
}

combination(["23",
"24",
"20"])
