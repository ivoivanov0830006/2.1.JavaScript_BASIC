function numbers(input) {
    let allNumbers = input[0];
    let totalSum = 0;
    for (let i = 0; i < allNumbers.length; i++) {
        totalSum += Number(allNumbers[i])
    }
    console.log(`The sum of the digits is:${totalSum}`)
}

numbers(["1234"])
