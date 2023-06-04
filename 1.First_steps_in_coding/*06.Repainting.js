function calculate(input) {
    // Input Data:
    let nylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let tinnerQuantity = Number(input[2]);
    let hoursQuantity = Number(input[3]);

    // Prices:
    let nylonPrice = 1.5
    let paintPrice = 14.5
    let tinnerPrice = 5

    // Materials Calculations: 
    let totalNylon = nylonPrice * nylonQuantity + 2 * nylonPrice
    let totalPaint = paintPrice * paintQuantity * 1.1
    let totalTinner = tinnerPrice * tinnerQuantity
    let bags = 0.4
    let totalMaterials = totalNylon + totalPaint + totalTinner + bags

    // Working Hours Calculations:
    let totalHours = hoursQuantity * totalMaterials * 0.3

    // Final Result:
    let total = totalMaterials + totalHours
    console.log(total);
}

calculate(["10 ","11 ","4 ","8 "])
