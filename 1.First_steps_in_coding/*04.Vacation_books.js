function calculate(input) {
    let pagesTotal = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let result = (pagesTotal / days) / pagesPerHour 
    console.log(result);
}

calculate(["212 ","20 ","2 "])
