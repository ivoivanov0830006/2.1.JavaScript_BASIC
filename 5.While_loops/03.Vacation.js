function vacation(input) {
    // Input Data
    let holidayCost = Number(input[0]);
    let currentMoney = Number(input[1]);
    let action = input[2];
    let actionMoney = Number(input[3])
    let index = 4;

    // New variables
    let spendingSpreeDays = 0;
    let totalDays = 0;
    let isFailed = false;

    while(true) {
        totalDays += 1;
        
        // Spending
        if (action === "spend") { 
            currentMoney -= actionMoney;
            spendingSpreeDays += 1;
            if (spendingSpreeDays === 5) {
                isFailed = true;
                break;
            } else if (currentMoney < 0) {
                currentMoney = 0;
            }
        // Saving
        } else if (action === "save") {
            spendingSpreeDays = 0;
            currentMoney += actionMoney
            if (currentMoney >= holidayCost) {
                break;
            }
        }
        // Reading New Input Data
        action = input[index];
        actionMoney = Number(input[index + 1]);
        index += 2;
    }

    if (isFailed) {
        console.log(`You can't save the money.\n${totalDays}`)
    } else {
        console.log(`You saved the money for ${totalDays} days.`)
    }
}


vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
