function walking(input) {
    // Input Data
    let targetSteps = 10000;
    let command = input[0];
    let index = 1;

    let totalSteps = 0;

    while (totalSteps < targetSteps) {
        if (command === "Going home") {
            let finalSteps = Number(input[index]);
            totalSteps += finalSteps;
            break;
        }
        currentSteps = Number(command);
        totalSteps += currentSteps;
        command = input[index];
        index ++;
    }

    difference = Math.abs(totalSteps - targetSteps);
    if (totalSteps >= targetSteps) {
        console.log(`Goal reached! Good job!\n${difference} steps over the goal!`)
    } else {
        console.log(`${difference} more steps to reach goal.`)
    }
}

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
