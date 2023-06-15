function traveling(input) {

    let command = input[0];
    let index = 1;

    while (command != "End") {
        let destination = command;
        let neededBudget = Number(input[index]);
        let totalMoney = 0;
        
        while (totalMoney < neededBudget) {
            let currentMoney = Number(input[index + 1]);
            totalMoney += currentMoney;
            index++;
        }
        console.log(`Going to ${destination}!`)
        command = input[index + 1];
        index += 2;
    }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
