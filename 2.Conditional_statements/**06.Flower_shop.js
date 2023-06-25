function flowers(input) {
    let magnoliasCount = Number(input[0]);
    let ziumbiulsCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusesCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnoliasPrice = 3.25;
    let ziumbiulsPrice = 4;
    let rosesPrice = 3.5;
    let cactusesPrice = 8;

    let totalMoney = (magnoliasCount * magnoliasPrice + 
                    ziumbiulsCount * ziumbiulsPrice + 
                    rosesCount * rosesPrice + 
                    cactusesCount * cactusesPrice) * 0.95;
    
    let restMoney = Math.abs(totalMoney - giftPrice);

    if (totalMoney >= giftPrice) {
        console.log(`She is left with ${Math.floor(restMoney)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(restMoney)} leva.`)
    }
}

flowers(["2",
    "3",
    "5",
    "1",
    "50"])
