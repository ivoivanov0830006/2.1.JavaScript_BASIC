function substitute(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    let count = 0;
    let isEnough = false;

    for (let i = k; i <= 8; i++) {
        for (let j = 9; j >= l; j--) {
            for (let x = m; x <= 8; x++) {
                for (let y = 9; y >= n; y--) {
                    if ((i % 2 === 0) && (x % 2 === 0) && (j % 2 !== 0) && (y % 2 !== 0)) {
                        let firstPlayer = `${i}${j}`
                        let secondPlayer = `${x}${y}`
                        if (firstPlayer === secondPlayer) {
                            console.log(`Cannot change the same player.`)
                        } else {
                            console.log(`${i}${j} - ${x}${y}`)
                            count++;
                            if (count === 6) {
                                isEnough = true;
                            }
                        }
                    } if (isEnough) {
                        break;
                    }
                } if (isEnough) {
                    break;
                }
            } if (isEnough) {
                break;
            }
        } if (isEnough) {
            break;
        }
    }
}

substitute(["6",
    "7",
    "5",
    "6"])
