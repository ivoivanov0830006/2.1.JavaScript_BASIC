function driver(input) {
    let season = input[0];
    let distance = Number(input[1]);

    let grossSalary = 0;
    let salaryPerKm = 0;

    if (distance <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            salaryPerKm = 0.75;
        } else if (season === "Summer") {
            salaryPerKm = 0.9;
        } else {
            salaryPerKm = 1.05;
        }
    } else if (distance <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            salaryPerKm = 0.95;
        } else if (season === "Summer") {
            salaryPerKm = 1.1;
        } else {
            salaryPerKm = 1.25;
        }
    } else if (distance <= 20000) {
            salaryPerKm = 1.45;
    }

    grossSalary = salaryPerKm * distance * 4;
    let netSalary = grossSalary * 0.9;

    console.log(`${netSalary.toFixed(2)}`)
}

driver(["Summer","3455"])
