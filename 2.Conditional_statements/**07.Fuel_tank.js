/////////////////////////////////////////////////////////////////
//// --------------- SOLUTION 1 - NO METHODS --------------- ////
/////////////////////////////////////////////////////////////////

function tank(input) {
    let fuel = input[0];
    let quantity = Number(input[1]);

    if (fuel === "Diesel") {
        if (quantity >= 25) {
            console.log(`You have enough diesel.`)
        } else {
            console.log(`Fill your tank with diesel!`)
        } 
    } else if (fuel === "Gasoline") {
        if (quantity >= 25) {
            console.log(`You have enough gasoline.`)
        } else {
            console.log(`Fill your tank with gasoline!`)
        } 
    } else if (fuel === "Gas") {
        if (quantity >= 25) {
            console.log(`You have enough gas.`)
        } else {
            console.log(`Fill your tank with gas!`)
        } 
    } else {
        console.log(`Invalid fuel!`);
    }
}

tank(["Diesel", "10"])
