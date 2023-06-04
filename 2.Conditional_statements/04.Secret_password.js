function password(input) {
    let currentPass = input[0];
    if (currentPass !== "s3cr3t!P@ssw0rd") {
        console.log("Wrong password!");
    }
    else {
        console.log("Welcome")
    }
}

password(["s3cr3t!P@ssw0r"])
