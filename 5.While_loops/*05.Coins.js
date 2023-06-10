function coins(input) {
    let initialValue = Number(input[0]);
    let convertedValue = Math.floor(100 * initialValue)
    let totalCoins = 0;

    while (convertedValue > 0) {
        if (convertedValue >= 200) {
            convertedValue -= 200;
        } else if (convertedValue >= 100) {
            convertedValue -= 100;
        } else if (convertedValue >= 50) {
            convertedValue -= 50;
        } else if (convertedValue >= 20) {
            convertedValue -= 20;
        } else if (convertedValue >= 10) {
            convertedValue -= 10;
        } else if (convertedValue >= 5) {
            convertedValue -= 5;
        } else if (convertedValue >= 2) {
            convertedValue -= 2;
        } else if (convertedValue >= 1) {
            convertedValue -= 1;
        }
        totalCoins += 1;
    }
    console.log(totalCoins)
}

coins(["1.23"])
