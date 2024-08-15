function program(input) {

    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneySaved = 0;
    let moneyForBirthday = 10;

    for (let counter = 1; counter <= age; counter++) {
        if (counter % 2 === 0) {
            moneySaved += moneyForBirthday - 1;
            moneyForBirthday += 10;
            
        } else {
            moneySaved += toyPrice;
        }
    }

    if (moneySaved >= washerPrice) {
        let moneyDiff = moneySaved - washerPrice;
        console.log(`Yes! ${moneyDiff.toFixed(2)}`);
    } else {
        let moneyDiff = washerPrice - moneySaved;
        console.log(`No! ${moneyDiff.toFixed(2)}`);
    }
}