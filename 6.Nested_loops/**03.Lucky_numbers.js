function lucky(input) {
    let specialNumber = Number(input[0]);
    let result = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for ( let n = 1; n <= 9; n++) {
                    let firstSum = i + j;
                    let secondSum = k + n;
                    if ((firstSum === secondSum) && (specialNumber % firstSum === 0)) {
                        result += `${i}${j}${k}${n} `;
                    }
                }
            }
        }
    }
    console.log(result)
}

lucky(["3"])
