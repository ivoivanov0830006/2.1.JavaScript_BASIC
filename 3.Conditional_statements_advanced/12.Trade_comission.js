function credit(input) {
    let location = String(input[0]);
    let sales = Number(input[1]);
    let percentage = 0;
    let validSales = true;
    let validLocation = true;

    if (location === "Sofia") {
        if (sales >= 0 && sales <= 500) {
         percentage = 5;
        }
        else if (sales > 500 && sales <= 1000) {
         percentage = 7;
        }
        else if (sales > 1000 && sales <= 10000) {
         percentage = 8;
        }
        else if (sales > 10000) {
         percentage = 12;
        } else {
            validSales = false
        }

    } else if (location === "Varna") {
        if (sales >= 0 && sales <= 500) {
         percentage = 4.5;
        }
        else if (sales > 500 && sales <= 1000) {
         percentage = 7.5;
        }
        else if (sales > 1000 && sales <= 10000) {
         percentage = 10;
        }
        else if (sales > 10000) {
         percentage = 13;
        } else {
            validSales = false
        }
