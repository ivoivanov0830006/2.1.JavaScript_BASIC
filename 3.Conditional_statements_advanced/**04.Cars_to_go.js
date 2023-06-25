function rentACar(input) {
    let budget = Number(input[0]); 
    let season = input[1];
    
    let classType = "";
    let carType = "";
    let price = 0;

    if (budget <= 100) {
        classType = "Economy class";
        if (season === "Summer") {
            carType = "Cabrio"
            price = budget * 0.35;
        } else {
            carType = "Jeep"
            price = budget * 0.65;
        }
    } else if (budget <= 500) {
        classType = "Compact class";
        if (season === "Summer") {
            carType = "Cabrio"
            price = budget * 0.45;
        } else {
            carType = "Jeep"
            price = budget * 0.80;
        }
    } else {
        classType = "Luxury class";
        carType = "Jeep"
        price = budget * 0.9;
    }
    console.log(`${classType}\n${carType} - ${price.toFixed(2)}`)
}

rentACar(["450", "Summer"])
