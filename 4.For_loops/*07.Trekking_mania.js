function trekking(input) {
    let groupsCount = Number(input[0])
    
    let group1 = 0; // Musala = 1 - 5
    let group2 = 0; // Montblan = 6 - 12
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
