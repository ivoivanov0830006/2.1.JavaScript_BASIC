function holiday(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let holidayType = "";
    let moneySpent = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            holidayType = "Camp";
            moneySpent = budget * 0.3;
        } else { 
            holidayType = "Hotel";
            moneySpent = budget * 0.7;
        }
    } 
    else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            holidayType = "Camp";
            moneySpent = budget * 0.4;
        } else { 
            holidayType = "Hotel";
            moneySpent = budget * 0.8;
        }
    } else {
        destination = "Europe";
        holidayType = "Hotel";
        moneySpent = budget * 0.9;
    }

    // Final Result
    console.log(`Somewhere in ${destination}\n${holidayType} - ${moneySpent.toFixed(2)}`)
}


holiday(["50", "summer"])
