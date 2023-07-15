function barcode(input) {
    let start = input[0];
    let end = input[1];

    let iStart = Number(start[0]);
    let jStart = Number(start[1]);
    let kStart = Number(start[2]);
    let mStart = Number(start[3]);

    let iEnd = Number(end[0]);
    let jEnd = Number(end[1]);
    let kEnd = Number(end[2]);
    let mEnd = Number(end[3]);

    result = ``;

    for (let i = iStart; i <= iEnd; i++) {
        for (let j = jStart; j <= jEnd; j++) {
            for (let k = kStart; k <= kEnd; k++ ) {
                for (let m = mStart; m <= mEnd; m++) {
                    if ((i % 2 !== 0) && (j % 2 !== 0) && (k % 2 !== 0) && (m % 2 !== 0)) {
                        result += `${i}${j}${k}${m} `;
                    }
                }
            }
        }
    }
    console.log(result)
}

barcode(["3256",
    "6579"])
