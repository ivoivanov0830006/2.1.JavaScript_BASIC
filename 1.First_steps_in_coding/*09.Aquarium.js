function calculate(input) {
    // Input Data:
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    // Volume Calculation:
    let aquariumVolume = length * width * height

    // Total Cubic Liters Calculation
    let totalLiters = (aquariumVolume - aquariumVolume * (percentage / 100)) / 1000

    // Total
    console.log(totalLiters);
}

calculate(["85 ","75 ","47 ","17 "])
