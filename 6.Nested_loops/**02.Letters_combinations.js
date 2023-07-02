function letters(input) {
    let start = input[0];
    let end = input[1];
    let skip = input[2];

    let finalResult = "";
    let totalCombinations = 0;
    
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
        for (let j = start.charCodeAt(0); j <= end.charCodeAt(0); j++) {
            for (let k = start.charCodeAt(0); k <= end.charCodeAt(0); k++) {
                if ((i !== skip.charCodeAt(0)) && (j !== skip.charCodeAt(0)) && (k !== skip.charCodeAt(0))) {
                    finalResult += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}` + " ";
                    totalCombinations ++;
                }
            }       
        }
    }
    console.log(`${finalResult}${totalCombinations}`)
}

letters(["a",
    "c",
    "b"])
