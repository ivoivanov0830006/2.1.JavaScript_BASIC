function converting(input) {
    let radian = Number(input[0])
    let degree = (radian * 180)/Math.PI;
    console.log(degree);
}

converting(["3.1416"])
