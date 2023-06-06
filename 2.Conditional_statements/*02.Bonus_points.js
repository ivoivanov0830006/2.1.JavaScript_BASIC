function bonusPoints(input) {
    let currentNumber = Number(input[0]);
    let bonus = 0
    if (currentNumber <= 100) {
        bonus += 5;
    }
    if (currentNumber > 100 && currentNumber <= 1000)
        bonus += currentNumber * 0.2;
    if (currentNumber > 1000)
        bonus += currentNumber * 0.1;
    if (currentNumber % 2 === 0)
        bonus += 1;
    if (currentNumber % 10 === 5)
        bonus += 2;
    
    total = currentNumber + bonus
    console.log(bonus)
    console.log(total)
}
