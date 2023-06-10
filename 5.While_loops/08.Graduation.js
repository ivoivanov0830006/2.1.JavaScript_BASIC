function scores(input) {
    let studentName = input[0];
    let currentScore = Number(input[1]);
    let index = 2;

    let currentGrade = 1;
    let totalScore = 0;
    let scoreCount = 12;
    let totalFails = 0;

    let isFailed = false;

    while(index <= input.length) {
        if (currentScore < 4) {
            totalFails += 1
            scoreCount += 1
            if (totalFails > 1) {
                isFailed = true;
                break;
            }
        } else {
            currentGrade += 1
        }
        totalScore += currentScore;
        currentScore = Number(input[index]);
        index++;
    }
    if (isFailed) {
        console.log(`${studentName} has been excluded at ${currentGrade} grade`)
    } else {
        let averageGrade = totalScore / scoreCount
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    } 
}       
    

scores(["Mimi",
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

