function trainingHall(input) {
    // Input Data
    let width = Number(input[0]);
    let height = Number(input[1]);

    // Dimensions
    let deskWidth = 1.2;
    let deskHeight = 0.7;
    let corridor = 1;

    // Calculations
    let columns = Math.floor((height - corridor) / deskHeight);
    let rows = Math.floor(width / deskWidth);

    let count = (columns * rows - 3)
    console.log(count)
}

trainingHall(["8.5","5.2"])
