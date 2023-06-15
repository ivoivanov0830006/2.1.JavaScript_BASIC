function train(input) {
    // Input Data
    let juryCount = Number(input[0]);
    let command = input[1];
    let index = 2;

    // Adding additional variables
    let finalAssessmentScore = 0;
    let presentationsCount = 0;

    // First Loop - Starting new presentation
    while (command !== "Finish") {
        let currentPresentation = command;
        let totalPresentationScore = 0;

        presentationsCount += 1;

        // Second loop - Scores for each jury
        for (let i = 0; i < juryCount; i++) {
            let currentScore = Number(input[index]);
            totalPresentationScore += currentScore
            index++;
        }
        
        // Result - Total score of each presentation
        let totalScore = totalPresentationScore / juryCount;
        console.log(`${currentPresentation} - ${(totalScore).toFixed(2)}.`)
        finalAssessmentScore += totalScore;
        command = input[index];
        index++;
    }

    // Result - Total score of All presentations
    let finalScore = finalAssessmentScore / presentationsCount;
    console.log(`Student's final assessment is ${finalScore.toFixed(2)}.`)

}

train(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
