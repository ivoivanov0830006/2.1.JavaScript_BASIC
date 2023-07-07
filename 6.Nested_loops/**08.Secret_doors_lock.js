function locks(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);

    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
            for (let k = 1; k <= z; k++) {
                if ((i % 2 === 0) && (k % 2 === 0)) {
                    if (j === 2 || j === 3 || j ===5 || j === 7){
                        console.log(`${i} ${j} ${k}`) 
                    }
                }
            }
        }
    }
}

locks(["3",
    "5",
    "5"])
