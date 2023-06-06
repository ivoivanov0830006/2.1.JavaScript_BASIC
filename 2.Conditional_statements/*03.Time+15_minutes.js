function time(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    minutes += 15
    
    if (minutes > 59 && hours < 23) {
        hours += 1
        minutes -= 60
    }
    else if (minutes > 59 && hours == 23) {
        hours = 0
        minutes -= 60
    } 

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`)
    }
    else {
        console.log(`${hours}:${minutes}`)
    }
}

time(["23", "45"])
