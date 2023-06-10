function ballance(input) {
    let totalBallance = 0;
    let currentTransaction = Number(input[0]);
    let index = 1;
    
    while(true) {
        if (currentTransaction === "NoMoreMoney") {
            break;
        } else if (Number(currentTransaction) < 0 ) {
            console.log("Invalid operation!")
            break;
        }
        currentTransaction = Number(currentTransaction)
        totalBallance += currentTransaction;
        console.log(`Increase: ${currentTransaction.toFixed(2)}`)
        currentTransaction = input[index];
        index++;
    }
    console.log(`Total: ${totalBallance.toFixed(2)}`)
}

ballance(["5.51",
"69.42",
"100",
"NoMoreMoney"])
