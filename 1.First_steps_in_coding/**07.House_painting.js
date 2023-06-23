function painting(input) {
    // Input Data
    let height = Number(input[0]);      // x
    let length = Number(input[1]);      // y
    let roofHeight = Number(input[2]);  // h

    let greenConsumption = 3.4;         // per liter
    let redConsumption = 4.3;           // per liter

    // Green paint
    let door = 1.2 * 2;
    let frontSide = height ** 2 - door;
    let backSide = height ** 2;
    let window = 1.5 ** 2;
    let bothSides = 2 * (height * length - window);


    // Red paint
    let roofSides = 2 * (height * length);
    let roofTriangles = 2 * (roofHeight * height / 2);


    // Calculations
    let totalGreenPaint = (frontSide + backSide + bothSides) / greenConsumption;
    let totalRedPaint = (roofSides + roofTriangles) / redConsumption;

    console.log(totalGreenPaint.toFixed(2));
    console.log(totalRedPaint.toFixed(2));
}


painting(["6",
    "10",
    "5.2"])
