function range(input) {
    let currentNumber = Number(input[0]);
    if (currentNumber < 100) {
        console.log("Less than 100"); 
    }
    if (currentNumber > 200) {
        console.log("Greater than 200")
    }
    if (100 <= currentNumber & currentNumber <= 200) {
        console.log("Between 100 and 200");
    }
}

range(["210"])
