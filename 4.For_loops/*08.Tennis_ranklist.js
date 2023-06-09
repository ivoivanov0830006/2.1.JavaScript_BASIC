function tennis(input) {
    let tourCounts = Number(input[0]);
    let initialPoints = Number(input[1]);
    let totalPoints = 0;
    let totalWonTours = 0;

    for (i = 2; i < input.length; i++) {
        let podium = input[i];
        switch(podium) {
            case "W": totalPoints += 2000; totalWonTours += 1; break; 
            case "F": totalPoints += 1200; break;
            case "SF": totalPoints += 720; break;
        }
    }

    let averagePoints = totalPoints / tourCounts
    let percentageWon = totalWonTours / tourCounts * 100
    totalPoints += initialPoints
    
    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${percentageWon.toFixed(2)}%`)
}

tennis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
