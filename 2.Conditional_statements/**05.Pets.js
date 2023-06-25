function pets(input) {
    let days = Number(input[0]);
    let initialFood = Number(input[1]);         // kg
    let dogFoodPerDay = Number(input[2]);       // kg
    let catFoodPerDay = Number(input[3]);       // kg
    let turtleFoodPerDay = Number(input[4]);    // grams

    let neededFood = (dogFoodPerDay + catFoodPerDay + (turtleFoodPerDay / 1000)) * days
    let difference = Math.abs(initialFood - neededFood)

    if (initialFood >= neededFood) {
        console.log(`${Math.floor(difference)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(difference)} more kilos of food are needed.`)
    }
}

pets(["2",
    "10",
    "1",
    "1",
    "1200"])
