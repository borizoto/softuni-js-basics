function program(input) {

    let tabsOpened = Number(input[0]);
    let salary = Number(input[1]);

    for (let tabsCount = 2; tabsCount <= tabsOpened + 2; tabsCount++) {
       if (input[tabsCount] === "Facebook") {
        salary -= 150;
       } else if (input[tabsCount] === "Instagram") {
        salary -= 100;
       } else if (input[tabsCount] === "Reddit") {
        salary -= 50;
       }
        
       if (salary <= 0) {
        console.log("You have lost your salary.");
        return;
       }
    }
    console.log(salary);
}