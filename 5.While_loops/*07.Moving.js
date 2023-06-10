function moving(input) {
    // Input Data
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let command = input[3];
    let index = 4;

    // New variables
    let totalSpace = width * length * height;

    while (command) {
        if (command === "Done") {
            break;
            }
        currentBoxes = Number(command);
        totalSpace -= currentBoxes;

        // Reading New Input Data
        command = input[index];
        index++;
    } 

    let difference = Math.abs(totalSpace) 

    // Result with No more space
    if (totalSpace < 0) {
        console.log(`No more free space! You need ${difference} Cubic meters more.`)
    } else {
        console.log(`${difference} Cubic meters left.`)
    }
}

moving(["10","1","2","4","6","Done"])
