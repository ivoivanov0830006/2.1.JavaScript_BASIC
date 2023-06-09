function trekking(input) {
    let groupsCount = Number(input[0])
    
    let group1 = 0; // Musala = 1 - 5
    let group2 = 0; // Montblanc = 6 - 12
    let group3 = 0; // Kilimandjaro = 13 - 25
    let group4 = 0; // K2 = 26 - 40
    let group5 = 0; // Everest = 41 and more
    let totalPeople = 0;
    
    for (i = 1; i <= groupsCount; i++) {
        currentGroup = Number(input[i])
        if (currentGroup <= 5) {
            group1 += currentGroup;
        } else if (currentGroup <= 12) {
            group2 += currentGroup;
        } else if (currentGroup <= 25) {
            group3 += currentGroup;
        } else if (currentGroup <= 40) {
            group4 += currentGroup;
        } else {
            group5 += currentGroup;
        }
        totalPeople += currentGroup
    }

    resultGroup1 = group1 / totalPeople * 100
    resultGroup2 = group2 / totalPeople * 100
    resultGroup3 = group3 / totalPeople * 100
    resultGroup4 = group4 / totalPeople * 100
    resultGroup5 = group5 / totalPeople * 100

    console.log(resultGroup1.toFixed(2) + "%")
    console.log(resultGroup2.toFixed(2) + "%")
    console.log(resultGroup3.toFixed(2) + "%")
    console.log(resultGroup4.toFixed(2) + "%")
    console.log(resultGroup5.toFixed(2) + "%")
}

trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
