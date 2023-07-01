function hospital(input) {
    let days = Number(input[0]);
    let day = 1;
    let doctors = 7;

    let uncheckedPatients = 0;
    let checkedPatients = 0;

    for (let i = day; day <= days; day ++) {
        if (day % 3 == 0 && uncheckedPatients > checkedPatients) {
            doctors ++;
        }

        let currentPatients = Number(input[day]);

        let restPatients = currentPatients - doctors;

        if (currentPatients > doctors) {
            checkedPatients += doctors
            uncheckedPatients += restPatients;
        } else {
            checkedPatients += currentPatients;
        }
    }
    console.log(`Treated patients: ${checkedPatients}.`)
    console.log(`Untreated patients: ${uncheckedPatients}.`)
}

hospital(["4",
    "7",
    "27",
    "9",
    "1"])

hospital(["6",
"25",
"25",
"25",
"25",
"25",
"2"])
