function oscars(input) {
    let actorName = input[0];
    let totalPoints = Number(input[1]);
    let juryCount = Number(input[2]);
    let hasWon = false;

    for (i = 3; i < input.length; i+=2) {
        currentJury = input[i];
        currentPoints = Number(input[i+1]);
        let pointsWon = (currentPoints * currentJury.length / 2)

        totalPoints += pointsWon
        if (totalPoints > 1250.5) {
            hasWon = true;
            break;    
        }
    }
    
    if (hasWon) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
    } else {
        let neededPoints = 1250.5 - totalPoints
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`)
    }

}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
