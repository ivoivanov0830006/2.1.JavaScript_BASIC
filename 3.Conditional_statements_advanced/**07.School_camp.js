function camp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let staysCount = Number(input[3]);

    let price = 0;
    let totalPrice = 0;
    let sportType = "";

    if (groupType === "boys") {
        if (season === "Spring") {
            price = 7.2;
            sportType = "Tennis";
        } else if (season === "Summer") {
            price = 15;
            sportType = "Football";
        } else {
            price = 9.6;
            sportType = "Judo";
        }
    } else if (groupType === "girls") {
        if (season === "Spring") {
            price = 7.2;
            sportType = "Athletics";
        } else if (season === "Summer") {
            price = 15;
            sportType = "Volleyball";
        } else {
            price = 9.6;
            sportType = "Gymnastics";
        }
    } else {
        if (season === "Spring") {
            price = 9.5;
            sportType = "Cycling";
        } else if (season === "Summer") {
            price = 20;
            sportType = "Swimming";
        } else {
            price = 10;
            sportType = "Ski";
        }
    }

    if (studentsCount < 10) {
        totalPrice = studentsCount * price * staysCount;
    } else if (studentsCount < 20) {
        totalPrice = (studentsCount * price * staysCount) * 0.95;
    } else if (studentsCount < 50) {
        totalPrice = (studentsCount * price * staysCount) * 0.85;
    } else {
        totalPrice = (studentsCount * price * staysCount) * 0.5;
    }
    console.log(`${sportType} ${totalPrice.toFixed(2)} lv.`)
}

camp(["Spring",
    "girls",
    "20",
    "7"])
