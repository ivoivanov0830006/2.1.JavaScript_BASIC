function tickets(input) {
    // Input Data
    let command = input[0];
    let index = 1;

    // Additional Variables For All Movies
    let totalTickets = 0;
    let totalStudentTickets = 0;
    let totalStandardTickets = 0;
    let totalKidTickets = 0;

    // While Loop: All Movies
    while (command !== "Finish") {
        let currentMovie = command;
        let totalSeats = Number(input[index]);
        index += 1
        let ticketType = input[index];

        // Additional Variables For Current Movie
        let studentTickets = 0;
        let standardTickets = 0;
        let kidTickets = 0;
        let takenSeats = 0;

        // Nested Loop: Current Movie and types of tickets
        while (ticketType !== "End") {
            switch(ticketType) {
                case "student": 
                    studentTickets += 1; 
                    totalStudentTickets += 1;
                    break;
                case "standard": 
                    standardTickets += 1; 
                    totalStandardTickets += 1;
                    break;
                case "kid": 
                    kidTickets += 1; 
                    totalKidTickets += 1;
                    break;
            }
            // Counting taken seats to be able to break the loop
            takenSeats += 1;

            // Brake Case: No more seats
            if (totalSeats === takenSeats) {
                break;
            }
            index ++;
            ticketType = input[index]; 
        }

        // Calculating Current Movie Info
        let currentTotalTickets = studentTickets + standardTickets + kidTickets
        let fullnessPercentage = (currentTotalTickets) / totalSeats * 100;
        totalTickets += currentTotalTickets

        console.log(`${currentMovie} - ${fullnessPercentage.toFixed(2)}% full.`)
        command = input[index + 1];
        index += 2;
    }

    // Calculating All Movies Info
    let studentPercentage = totalStudentTickets / totalTickets * 100;
    let standardPercentage = totalStandardTickets / totalTickets * 100;
    let kidsPercentage = totalKidTickets / totalTickets * 100;

    // Printing Info
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${studentPercentage.toFixed(2)}% student tickets.`)
    console.log(`${standardPercentage.toFixed(2)}% standard tickets.`)
    console.log(`${kidsPercentage.toFixed(2)}% kids tickets.`)

}


tickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
