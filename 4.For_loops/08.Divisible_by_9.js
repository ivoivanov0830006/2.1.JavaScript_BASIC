function divisibleRange(input) {
    let startRange = Number(input[0]);
    let endRange = Number(input[1]);
    let totalSum = 0;
    let storage = "";

    for (i = startRange; i < endRange; i++) {
        if (i % 9 == 0) {
            totalSum += i
            storage += i + "\n"
        }
    }
    console.log(`The sum: ${totalSum}`)
    console.log(storage)
}

divisibleRange(["100", "200"])


// --------------------------- Another Solution ------------------------------

// function divisibleRange(input) {
//     let startRange = Number(input[0]);
//     let endRange = Number(input[1]);
//     let totalSum = 0;
//     for (i = startRange; i < endRange; i++) {
//         if (i % 9 == 0) {
//             totalSum += i
//         }
//     }
//     console.log(`The sum: ${totalSum}`)
//     for (i = startRange; i < endRange; i++) {
//         if (i % 9 == 0) {
//             console.log(i)
//         }
//     }
// }

// divisibleRange(["100", "200"])


