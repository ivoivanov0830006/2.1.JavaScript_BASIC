function penalty(input) {
    let totalTabs = Number(input[0]);
    let salary = Number(input[1]);
    let salaryLost = false;

    for (i = 0; i <= totalTabs; i++) {
        let site = input[i+2];
        switch(site) {
            case "Facebook": salary -= 150; break; 
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }
        if (salary <= 0) {
            salaryLost = true;
            break;
        }
    }
    if (salaryLost) {
        console.log("You have lost your salary.")
       } else {
        console.log(salary)
       }

}

penalty(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
