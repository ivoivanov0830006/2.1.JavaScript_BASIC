function cat(input) {
    let daysOff = Number(input); 

    let playNorm = 30000;
    let totalDays = 365;
    let workDays = totalDays - daysOff;

    let daysOffPlayTime = daysOff * 127;
    let workDaysPlayTime = workDays * 63;
    let totalPlayTime = daysOffPlayTime + workDaysPlayTime;

    let difference = Math.abs(totalPlayTime - playNorm)
    let hours = Math.floor(difference / 60 );
    let minutes = difference - (hours * 60);

    if (playNorm > totalPlayTime) {
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`)
    } else if (playNorm < totalPlayTime) {
        console.log(`Tom will run away`)
        console.log(`${hours} hours and ${minutes} minutes more for play`)
    }
}


cat(["20"])
cat(["113"])
