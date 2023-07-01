function money(input) {
    let inheritedMoney = Number(input[0]);
    let endYear = Number(input[1]);
    let years = 18;

    for (let i = 1800; i <= endYear; i++) {
        if (i % 2 == 0) {
            inheritedMoney -= 12000;
        } else {
            inheritedMoney -= (12000 + 50 * years); 
        } 
        years ++;
    }

    if (inheritedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${Math.abs(inheritedMoney).toFixed(2)} dollars to survive.`)
    }
}

money(["100000.15", "1808"])
