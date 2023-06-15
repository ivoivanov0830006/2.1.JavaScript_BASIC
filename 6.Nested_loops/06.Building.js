function building(input) {
    // Initial Data
    let totalFloors = Number(input[0]);
    let totalRooms = Number(input[1]);

    // Starting from Top to Down
    for (floor = totalFloors; floor >= 1; floor --) {
        let totalFloor = "";

        // Starting from 0 to Last Room
        for (room = 0; room < totalRooms; room ++) {
            let type = "";

            if (floor === totalFloors) {
                type = "L";
            } else if (floor % 2 === 0) {
                type = "O";
            } else {
                type = "A";
            }
            // Defining Room String
            totalFloor += `${type}${floor}${room}` + ` `;
        }
        // Printing All Rooms on Current Floor
        console.log(totalFloor)
    }
}


building(["6", "4"])
