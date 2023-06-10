function sequence(input) {
    let end = Number(input[0]);
    let current_number = 1;
    
    while (current_number <= end) {
        let previous_number = current_number
        current_number = previous_number * 2 + 1
        console.log(previous_number)
    }
}

sequence(["2"])
