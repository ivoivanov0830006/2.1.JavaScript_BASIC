function interval(input) {
    let currentNumber = input[0];

    if (currentNumber <= 100 && currentNumber >= -100 && currentNumber != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}

interval(["0"])
