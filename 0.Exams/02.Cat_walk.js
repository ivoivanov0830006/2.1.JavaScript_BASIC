function cat(input) {
    let minutesPerWalk = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let caloriesPerMinute = 5
    let enoughBurntCalories = caloriesPerDay / 2;

    let totalBurntCalories = caloriesPerMinute * minutesPerWalk * walksPerDay

    if (totalBurntCalories >= enoughBurntCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurntCalories}.`)
    } else { 
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurntCalories}.`)
    }
}


cat(["30",
    "3",
    "600"])
