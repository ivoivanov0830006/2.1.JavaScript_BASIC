function title(input) {
    let personAge = Number(input[0]);
    let personGender = String(input[1]);
    let personTitle = "";

    if (personGender === "f") {
        if (personAge >= 16) {
            personTitle = "Ms.";
        } else {
            personTitle = "Miss";
        }
    } else {
        if (personAge >= 16) {
            personTitle = "Mr.";
        } else {
            personTitle = "Master";
        }
    }
    console.log(personTitle)
}

title(["17","m"])
