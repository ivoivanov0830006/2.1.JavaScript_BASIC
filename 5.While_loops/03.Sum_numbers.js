function numbers(input) {
    let searchNumber = Number(input[0]);
    let nextNumber = Number(input[1]);
    let index = 2;
    let totalSum = 0;
    
    while ( totalSum < searchNumber ) {
        totalSum += nextNumber

        nextNumber = Number(input[index]);
        index++;
    }
    console.log(totalSum)
}

numbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
