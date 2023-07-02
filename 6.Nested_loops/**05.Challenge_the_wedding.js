 function wedding(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);

    let result = "";
    let tableCount = 0;

    let noTables = false;

    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {
            tableCount += 1
            result += `(${i} <-> ${j}) `;
            if (tableCount === tables) {
                noTables = true;
                break;
            }
        }   
        if (noTables) {
            break;
        }
    }
    console.log(result)
}

wedding(["2",
    "2",
    "3"])
