function cake(input) {
    let cakeLength = Number(input[0]);
    let cakeWidth = Number(input[1]);
    let takenPieces = Number(input[2]);
    index = 3

    let totalPieces = cakeLength * cakeWidth

    while (totalPieces > 0) {
        totalPieces -= takenPieces;
        takenPieces = input[index];
        if (takenPieces === "STOP") {
            break;
        }
        takenPieces = Number(takenPieces)
        index++;
    }

    if (totalPieces > 0) {
        console.log(`${totalPieces} pieces are left.`);
    } else {
        difference = Math.abs(totalPieces);
        console.log(`No more cake left! You need ${difference} pieces more.`)
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
