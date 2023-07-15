function player(input) {
    let command = input[0];
    let maxGoals = Number.MIN_SAFE_INTEGER; 
    let index = 1;

    let hatTrick = false;
    let isEnough = false;
    let bestPlayer = "";

    while (command !== "END") {
        let playerName = command;
        let playerGoals = Number(input[index]);
        
        if (playerGoals > maxGoals) {
            maxGoals = playerGoals;
            bestPlayer = playerName;
        }
        if (playerGoals >= 3) {
            hatTrick = true;
        }
        if (playerGoals >= 10) {
            isEnough = true;
            break;
        }
        command = input[index + 1];
        index += 2;
    }
    console.log(`${bestPlayer} is the best player!`);
    if (hatTrick) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${maxGoals} goals.`)
    }
}
player(["Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"])

player(["Silva",
    "5",
    "Harry Kane",
    "10",
    "fdafaafa", 
    "5"])
