function histogram(input) {
    let numbersCount = Number(input[0])
    
    let group1 = 0; // group1 = 1 - 199
    let group2 = 0; // group2 = 200 - 399
    let group3 = 0; // group3 = 400 - 599
    let group4 = 0; // group4 = 600 - 799
    let group5 = 0; // group5 = 800 - 1000
    
    for (i = 1; i <= numbersCount; i++) {
        currentNumber = input[i]
        if (currentNumber < 200) {
            group1++;
        } else if (currentNumber < 400) {
            group2++;
        } else if (currentNumber < 600) {
            group3++;
        } else if (currentNumber < 800) {
            group4++;
        } else {
            group5++;
        }
    }

    resultGroup1 = group1 / numbersCount * 100
    resultGroup2 = group2 / numbersCount * 100
    resultGroup3 = group3 / numbersCount * 100
    resultGroup4 = group4 / numbersCount * 100
    resultGroup5 = group5 / numbersCount * 100

    console.log(resultGroup1.toFixed(2) + "%")
    console.log(resultGroup2.toFixed(2) + "%")
    console.log(resultGroup3.toFixed(2) + "%")
    console.log(resultGroup4.toFixed(2) + "%")
    console.log(resultGroup5.toFixed(2) + "%")
}

histogram(["7","800","801","250","199","399","599","799"])
