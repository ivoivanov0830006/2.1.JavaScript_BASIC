function perimeter(input) {
    let radius = Number(input[0]);
    let area = Math.PI * (radius ** 2);
    let perimeter = 2 * Math.PI * radius;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

perimeter(["3"])
