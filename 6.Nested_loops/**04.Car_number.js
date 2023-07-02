function carNumber(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let result = "";

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            for (let k = start; k <= end; k++) {
                for ( let n = start; n <= end; n++) {
                    let midSum = j + k;
                    if ((((i % 2 === 0) && (n % 2 !== 0)) || ((i % 2 !== 0) && (n % 2 === 0))) && (i > n) && (midSum % 2 === 0)) {
                        result += `${i}${j}${k}${n} `;
                    }
                }
            }
        }
    }
    console.log(result)
}
