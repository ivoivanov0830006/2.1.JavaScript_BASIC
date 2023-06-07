function vowels(input) {
    let text = input[0];
    let total = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "a") {
            total += 1;
        } else if (text[i] === "e") {
            total += 2;
        } else if (text[i] === "i") {
            total += 3;
        } else if (text[i] === "o") {
            total += 4;
        } else if (text[i] === "u") {
            total += 5;
        }
    }
    console.log(total)
}

vowels(["hello"])


// --------------------------- Another Solution ------------------------------

// function vowels(input) {
//     let text = input[0];
//     let total = 0
//     for (let i = 0; i < text.length; i++) {
//         let char = text[i]
//         switch(char) {
//             case "a": total += 1; break; 
//             case "e": total += 2; break;
//             case "i": total += 3; break;
//             case "o": total += 4; break;
//             case "u": total += 5; break;
//         }
//     }
//     console.log(total)
// }

// vowels(["hello"]) 
