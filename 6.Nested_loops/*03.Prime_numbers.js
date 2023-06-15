function prime(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;
    let command = input[0];
    let index = 1

    while (command !== "stop") {
        let currentNum = Number(command); 
        let counter = 0;

        if (currentNum >= 0) {
            for (let i = 2; i < currentNum; i++) {
                if (currentNum % i === 0) {
                    counter += 1;
                    break;
                }
            }
            if (counter > 0) {
                nonPrimeSum += currentNum;
            } else {
                primeSum += currentNum;
            }
        } else {   
            console.log(`Number is negative.`)
        }
        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

prime(["30",
"83",
"33",
"-1",
"20",
"stop"])
