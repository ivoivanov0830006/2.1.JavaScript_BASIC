function exam(input) {
    let totalStudents = Number(input[0]);
    let index = 1;

    let totalScore = 0;

    let excellentScore = 0;
    let veryGoodScore = 0;
    let goodScore = 0;
    let poorScore = 0;
    
    for (let i = 1; i <= totalStudents; i++) {
        let currentScore = Number(input[i]);
        totalScore += currentScore

        if (currentScore < 3) {
            poorScore++;
        } else if (currentScore < 4) {
            goodScore++;
        } else if (currentScore < 5) {
            veryGoodScore++;
        } else {
            excellentScore++;
        }
    }

    let averageScore = totalScore / totalStudents;

    let poorPercentage = poorScore / totalStudents * 100;
    let goodPercentage = goodScore / totalStudents * 100;
    let veryGoodPercentage = veryGoodScore / totalStudents * 100;
    let excellentPercentage = excellentScore / totalStudents * 100;

    console.log(`Top students: ${excellentPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${veryGoodPercentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${goodPercentage.toFixed(2)}%`);
    console.log(`Fail: ${poorPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageScore.toFixed(2)}`)
}

exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"])
