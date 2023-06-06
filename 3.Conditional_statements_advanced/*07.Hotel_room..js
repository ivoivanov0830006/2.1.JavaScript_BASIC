function holiday(input) {
    let month = input[0];
    let days = Number(input[1]);
    let studioPrice = 0;
    let appartmentPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = 50
        appartmentPrice = 65
        if (days > 7 && days <= 14) {
            studioPrice *= 0.95 
        }
        else if (days > 14) {
            studioPrice *= 0.7 
            appartmentPrice *= 0.9
        }
    }
    else if (month === "June" || month === "September") {
        studioPrice = 75.2
        appartmentPrice = 68.7
        if (days > 14) {
            studioPrice *= 0.8
            appartmentPrice *= 0.9
        }
    }
    else if (month === "July" || month === "August") {
        studioPrice = 76
        appartmentPrice = 77
        if (days > 14) {
            appartmentPrice *= 0.9
        }
    }
    let appartmentTotal = appartmentPrice * days
    let studioTotal = studioPrice * days
    console.log(`Apartment: ${appartmentTotal.toFixed(2)} lv.`)
    console.log(`Studio: ${studioTotal.toFixed(2)} lv.`)
}

holiday(["August","20"])
