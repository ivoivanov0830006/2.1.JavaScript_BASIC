function calculateArea(input) {
    let figure = input[0];
    let area = 0

    // Calculating SQUARE AREA
    if (figure === "square") {
        let side = Number(input[1]);
        area = side * side
    }

    // Calculating RECTANGLE AREA
    else if (figure === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB 
    }

    // Calculating CIRCLE AREA
    else if (figure === "circle") {
        let radius = Number(input[1]);
        area = Math.PI * (radius ** 2)
    }

    // Calculating TRIANGLE AREA
    else if (figure === "triangle") {
        let sideA = Number(input[1]);
        let heightA = Number(input[2]);
        area = sideA * heightA / 2
    }

    // Returning CALCULATED AREA
    console.log(area.toFixed(3));
}

calculateArea(["circle","6"])
