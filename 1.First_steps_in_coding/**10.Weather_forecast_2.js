function weather(input) {
    let weatherDescription = Number(input[0]);

    if (26 <= weatherDescription && weatherDescription <= 35) {
        console.log("Hot");
    } else if (20 < weatherDescription && weatherDescription < 26) {
        console.log("Warm");
    } else if (15 <= weatherDescription && weatherDescription <= 20) {
        console.log("Mild");
    } else if (12 <= weatherDescription && weatherDescription < 15) {
        console.log("Cool");
    } else if (5 <= weatherDescription && weatherDescription < 12) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}

weather(["16.5"])
weather(["8"])
weather(["22.4"])
weather(["26"])
weather(["0"])
