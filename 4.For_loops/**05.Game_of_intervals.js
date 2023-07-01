function intervals(input) {
    let turns = Number(input[0]);
    let result = 0;

    let tensCount = 0;
    let twentiesCount = 0;
    let thirtiesCount = 0;
    let fourtiesCount = 0;
    let fiftiesCount = 0;
    let invalidCount = 0;
    
    for (let i = 1; i <= turns; i++) {
        let currentNumber = Number(input[i]);
        
        if (0 > currentNumber || currentNumber > 50){
            result /= 2;
            invalidCount ++;
        } else if (currentNumber < 10) {
            result += currentNumber * 0.2;
            tensCount ++;
        } else if (currentNumber < 20) {
            result += currentNumber * 0.3;
            twentiesCount ++;
        } else if (currentNumber < 30) {
            result += currentNumber * 0.4;
            thirtiesCount ++;
        } else if (currentNumber < 40) {
            result += 50;
            fourtiesCount ++;
        } else if (currentNumber <= 50) {
            result += 100;
            fiftiesCount ++;
        }
    }

    let tensPercentage = tensCount / turns * 100;
    let twentiesPercentage = twentiesCount / turns * 100;
    let thirtiesPercentage = thirtiesCount / turns * 100;
    let fourtiesPercentage = fourtiesCount / turns * 100;
    let fiftiesPercentage = fiftiesCount / turns * 100;
    let invalidPercentage = invalidCount / turns * 100;

    console.log(`${result.toFixed(2)}`);
    console.log(`From 0 to 9: ${tensPercentage.toFixed(2)}%`)
    console.log(`From 10 to 19: ${twentiesPercentage.toFixed(2)}%`)
    console.log(`From 20 to 29: ${thirtiesPercentage.toFixed(2)}%`)
    console.log(`From 30 to 39: ${fourtiesPercentage.toFixed(2)}%`)
    console.log(`From 40 to 50: ${fiftiesPercentage.toFixed(2)}%`)
    console.log(`Invalid numbers: ${invalidPercentage.toFixed(2)}%`)
}

intervals(["10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20"])
