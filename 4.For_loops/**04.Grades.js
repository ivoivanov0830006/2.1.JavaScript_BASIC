function grades(input) {
    let studentsCount = Number(input[0]);
    let totalScore = 0;
    let poorCount = 0;
    let goodCount = 0;
    let veryGoodCount = 0;
    let excellentCount = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let currentGrade = Number(input[i]);

        if (currentGrade < 3) {
            poorCount ++;
        } else if (currentGrade < 4) {
            goodCount ++;
        } else if (currentGrade < 5) {
            veryGoodCount ++;
        } else {
            excellentCount ++;
        }
        totalScore += currentGrade
    }

    let poorPercentage =  poorCount / studentsCount * 100;
    let goodPercentage =  goodCount / studentsCount * 100;
    let veryGoodPercentage = veryGoodCount / studentsCount * 100;
    let excellentPercentage = excellentCount / studentsCount * 100;
    let averageScore = totalScore / studentsCount;

    console.log(`Top students: ${excellentPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${veryGoodPercentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${goodPercentage.toFixed(2)}%`);
    console.log(`Fail: ${poorPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageScore.toFixed(2)}`)
}
 
grades(["10",
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
