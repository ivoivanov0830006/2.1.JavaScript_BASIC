function multiplicate(input) {
    let argument = Number(input[0]);
    for (i = 1; i <= 10; i++)
        console.log(`${i} * ${argument} = ` + i * argument)
}

multiplicate(["5"])
