function stream(input) {
    command = input[0];
    let index = 1;

    let totalWords = "";
    let currentWord = "";
    
    let cCount = 0;
    let oCount = 0;
    let nCount = 0;

    while (command != "End") {
        currentLetter = command
        if ((currentLetter >= 'A' && currentLetter <= 'Z') || 
            (currentLetter >= 'a' && currentLetter <= 'z')) {
            if (currentLetter === "c" && cCount === 0) { 
                currentLetter = "";
                cCount++;    
            }
            if (currentLetter === "o" && oCount === 0) { 
                currentLetter = "";
                oCount++;    
            }
            if (currentLetter === "n" && nCount === 0) { 
                currentLetter = "";
                nCount++;    
            }
    
            currentWord += currentLetter;
    
            if (cCount === 1 && oCount === 1 && nCount === 1) {
                totalWords += currentWord + " "
                currentWord = "";
                cCount = 0;
                oCount = 0;
                nCount = 0;
            }
        }

        command = input[index];
        index++;
    }
    console.log(totalWords)
}

stream(["H", "n", "e", "%", "l", "o", "o", "c", 
        "t", "c", "h", "o", "e", "r", "e", "n", "e", 
        "End"])
