function zoo(input) {
    let countDogFood = Number(input[0]);
    let countCatFood = Number(input[1]);
    let priceDogFood = 2.5
    let priceCatFood = 4
    let totalAmount = countDogFood * priceDogFood + countCatFood * priceCatFood;
    console.log(`${totalAmount} lv.`)
}

zoo(["5 ","4 "])
