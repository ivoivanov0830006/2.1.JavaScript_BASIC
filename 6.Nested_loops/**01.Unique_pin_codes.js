function codes(input) {
    firstEnd = Number(input[0]);
    secondEnd = Number(input[1]);
    thirdEnd = Number(input[2]);

    for (let i = 1; i <= firstEnd; i++) {
        for (let j = 1; j <= secondEnd; j++) {
            for (let k = 1; k <= thirdEnd; k++) {
                if ((i % 2 === 0) && (k % 2 === 0)){
                    if (j === 2 || j === 3 || j ===5 || j === 7){
                        console.log(`${i} ${j} ${k}`)
                    }
                }
            }
        }
    }
}
