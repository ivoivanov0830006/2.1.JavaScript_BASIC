function combination(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);

    let count = 0;
    let isFound = false;
    let result = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count ++;
            result = i + j;
            if (result === magic) {
                isFound = true;
                console.log(`Combination N:${count} (${i} + ${j} = ${magic})`)
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (isFound === false) {
        console.log(`${count} combinations - neither equals ${magic}`)
    }
}

combination(["23",
    "24",
    "20"])
