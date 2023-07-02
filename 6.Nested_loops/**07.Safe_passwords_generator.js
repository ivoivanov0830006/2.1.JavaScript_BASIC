function safe(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxPass = Number(input[2]);

    let digitA = 35;
    let digitB = 64;
    let result = "";

    let totalPass = 0;
    let isEnough = false;

    for (let x = 1; x <= a; x++) {
        for (let y = 1; y <= b; y++) {
            if (totalPass === maxPass) {
                isEnough = true;
                break;
            }

            let A = String.fromCharCode(digitA)
            let B = String.fromCharCode(digitB)
            result += `${A}${B}${x}${y}${B}${A}|`;
            totalPass ++;

            if (digitA === 55) {
                digitA = 35;
            } else {
                digitA ++;
            } 
            if (digitB === 96) {
                digitB = 64;
            } else {    
                digitB ++;
            }

        }
        if (isEnough) {
            break;
        }
    }
    console.log(result)
}

safe(["2",
    "3",
    "10"])
