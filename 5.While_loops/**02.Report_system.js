function report(input) {
    let expectedSum = Number(input[0]);
    let index = 1;
    let command = input[index];
    let isSuccessful = false;

    let cashCount = 0;
    let cardCount = 0;

    let cashTotal = 0;
    let cardTotal = 0;

    while (command != "End") {
        let currentPrice = Number(command);
        
        // Approved Transaction By Card
        if (index % 2 === 0) {
            if (currentPrice >= 10)  {
                console.log("Product sold!")
                expectedSum -= currentPrice;
                cardTotal += currentPrice
                cardCount ++;
            } else {
                console.log("Error in transaction!")
            }
        // Approved Transaction By Cash
        } else {
            if (currentPrice <= 100) {
                console.log("Product sold!")
                expectedSum -= currentPrice;
                cashTotal += currentPrice
                cashCount ++;
            } else {
                console.log("Error in transaction!")
            }
        }
        if (expectedSum <= 0) {
            isSuccessful = true;
            break;
            }
        index++;
        command = input[index];
    }

    let totalTransactions = cashTotal + cardTotal;

    if (isSuccessful) {
        let averageCash = cashTotal / cashCount;
        let averageCard = cardTotal / cardCount;
        console.log(`Average CS: ${averageCash.toFixed(2)}`);
        console.log(`Average CC: ${averageCard.toFixed(2)}`);
    } else {
        console.log(`Failed to collect required money for charity.`)
    }
}
