function weather(input) {
    let weatherDescription = input[0];

    switch(weatherDescription) {
        case "sunny": 
            console.log(`It's warm outside!`); break;
        default:
            console.log(`It's cold outside!`); break;
        }
}

weather(["sunny"])
weather(["cloudy"])
weather(["snowy"])
