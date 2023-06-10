function exam(input) {
    // Input Data
    let badScoresLimit = Number(input[0]);
    let currentProblem = input[1];
    let currentScore = Number(input[2]);
    let index = 3;
    
    // New variables
    let allProblemsCount = 0;
    let lastProblem = "";
    let needBrake = false;
    let totalScore = 0;
    let badScoresCount = 0;

    while(true) {
        // First Case: Ending the Loop
        if (currentProblem === "Enough") {
            break;
        // Second Case: Ending the Loop
        } else if (currentScore <= 4) {
            badScoresCount += 1;
            if (badScoresLimit === badScoresCount) {
                needBrake = true;
                break;
            }
        }
        // All Calculations
        lastProblem = currentProblem;
        totalScore += currentScore;
        allProblemsCount += 1

        // Reading New Input Data
        currentProblem = input[index];
        currentScore = Number(input[index + 1]);
        index += 2;
    } 

    // Second Case: Result 
    if (needBrake) {
        console.log(`You need a break, ${badScoresLimit} poor grades.`)
    // First Case: Result
    } else {
        let averageScore = totalScore / allProblemsCount
        console.log(`Average score: ${averageScore.toFixed(2)}`)
        console.log(`Number of problems: ${allProblemsCount}`)
        console.log(`Last problem: ${lastProblem}`)
    }
}

exam(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
