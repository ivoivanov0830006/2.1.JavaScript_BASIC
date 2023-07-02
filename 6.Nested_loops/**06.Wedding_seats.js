function seats(input) {
    let lastSector = input[0];
    let rows = Number(input[1]);
    let seatsOddCount = Number(input[2]);

    let firstSector = "A";
    let totalCount = 0;

    for (let i = firstSector.charCodeAt(0); i <= lastSector.charCodeAt(0); i++) {
        for (let j = 1; j <= rows; j++) {
            let seatsCount = seatsOddCount;

            if (j % 2 === 0) {
                seatsCount += 2;
            }

            for (let k = 0; k < seatsCount; k++) {
                let currentSeat = String.fromCharCode(97 + k);
                let currentRow = j;
                let currentSector = String.fromCharCode(i);
                console.log(`${currentSector}${currentRow}${currentSeat}`)
                totalCount ++;
                
            }
        }
        rows++;
    }
    console.log(totalCount)
}

seats(["B",
    "3",
    "2"])
