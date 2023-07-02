function dishwasher(input) {
    let detegrentBottles = Number(input[0]);
    let command = input[1];
    let index = 2;

    let isEnough = true;
    let loadingCount = 0;
    let consumption = 0;
    let neededDetegrent = 0;
    let detegrentAmount = detegrentBottles * 750;
    let dishesCount = 0;
    let potsCount = 0;

    while (command != "End") {
        currentDishes = Number(command );
        loadingCount ++;
        if (loadingCount % 3 === 0) {
            consumption = 15;
            potsCount += currentDishes;
        } else {
            consumption = 5;
            dishesCount += currentDishes;
        }
        neededDetegrent = currentDishes * consumption;
        if (neededDetegrent > detegrentAmount) {
            isEnough = false;
            break;
        }
        detegrentAmount -= neededDetegrent;
        command = input[index];
        index++;
    }
    if (isEnough) {
        console.log(`Detergent was enough!`);
        console.log(`${dishesCount} dishes and ${potsCount} pots were washed.`)
        console.log(`Leftover detergent ${detegrentAmount} ml.`)
    } else {
        let difference = neededDetegrent - detegrentAmount;
        console.log(`Not enough detergent, ${difference} ml. more necessary!`)
    }
}
