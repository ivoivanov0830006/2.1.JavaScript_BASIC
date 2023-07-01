function pairs(input) {
    let totalPairs = Number(input[0]);

    let maxDiff = Number.MIN_SAFE_INTEGER;
    let previousSum = 0;
    let currentSum = 0;
    let allEqual = true;

    for (let i = 1; i <= totalPairs * 2; i += 2) {
        let num1 = Number(input[i]);
        let num2 = Number(input[i+1]);
        
        currentSum = num1 + num2; 

        if (i <= 2) {
            previousSum = currentSum
        }
        if (currentSum !== previousSum) {
            allEqual = false;
            let currentDiff = Math.abs(currentSum - previousSum);
            if (currentDiff > maxDiff) {
                maxDiff = currentDiff;
            }
        }
        previousSum = currentSum
    }
    if (allEqual) {
        console.log(`Yes, value=${currentSum}`)
    } else { 
        console.log(`No, maxdiff=${maxDiff}`)
    }
}

pairs (["4",
    "1",
    "1",
    "3",
    "1",
    "2",
    "2",
    "0",
    "0"])
