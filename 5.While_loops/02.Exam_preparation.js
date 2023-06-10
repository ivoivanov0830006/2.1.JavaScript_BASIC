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
