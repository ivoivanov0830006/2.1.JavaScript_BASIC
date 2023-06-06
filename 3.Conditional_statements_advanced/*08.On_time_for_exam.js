function exam(input) {
    // Input Data
    let examHours = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHours = Number(input[2]);
    let arrivalMinutes = Number(input[3]);
    let diff = 0

    // Converting Time Into Minutes 
    totalExamTime = examHours * 60 + examMinutes
    totalArrivalTime = arrivalHours * 60 + arrivalMinutes

    // Case: Exactly On time
    if (totalExamTime == totalArrivalTime) {
        console.log("On time");
    }

    // Case: To be Late 
    // Including: 1.Late 60 minutes or less 
    //            2.Late more than 60 minutes
    else if (totalExamTime < totalArrivalTime) {
        console.log("Late");
        diff = totalArrivalTime - totalExamTime
        if (diff < 60) {
            console.log(`${diff} minutes after the start`)
        } else {
            let hours = Math.floor(diff / 60)
            let minutes = diff % 60
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`)
            } else {
                console.log(`${hours}:${minutes} hours after the start`)
            }
        }
    }

    // Case: To be Early
    // Including: 1.Early 30 minutes or less and be still on time
    //            2.Early between 30 minutues than 60 minutes
    //            3.Early more than 60 minutes
    else if (totalExamTime > totalArrivalTime) {
        diff = totalExamTime - totalArrivalTime
        if (diff <= 30) {
            console.log("On time");
            console.log(`${diff} minutes before the start`)
        }
        else if (30 < diff && diff < 60) {
            console.log("Early")
            console.log(`${diff} minutes before the start`)
        } else {
            console.log("Early")
            let hours = Math.floor(diff / 60)
            let minutes = diff % 60
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`)
            } else {
                console.log(`${hours}:${minutes} hours before the start`)
            }
        }
    }
}

exam(["11","30","11","00"])
