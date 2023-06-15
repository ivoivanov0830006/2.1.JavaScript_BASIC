function equal(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let finalString = "";

    for (let num = start; num <= end; num++) {
        let currentNum = String(num);
        let sumEven = 0;
        let sumOdd = 0;
        for (let index = 0; index < 6; index++) {
            if (index % 2 === 0) {
                sumEven += Number(currentNum[index]);
            } else {
                sumOdd += Number(currentNum[index]);
            }
        }
        if (sumEven === sumOdd) {
            finalString += `${currentNum} `;
        }
    }
    if (finalString) {
        console.log(finalString)
    }
}

equal(["100000","100050"])
