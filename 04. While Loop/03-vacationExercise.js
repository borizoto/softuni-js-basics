function solve(input) {

    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);
    let index = 2;
    let dayCount = 0;
    let spendCount = 0;

    let command = input[index]
    index++;

    let spendOrSave = Number(input[index]);
    index++;

    while (moneyAvailable < moneyNeeded) {

        dayCount++;

        if (command === "spend") {
            spendCount++;
            moneyAvailable -= spendOrSave;
            if (moneyAvailable < 0) {
                moneyAvailable = 0;
            }

            if (spendCount === 5) {
                console.log(`You can't save the money.`);
                console.log(`${dayCount}`);
                break;
            }
        } else if (command === "save") {
            moneyAvailable += spendOrSave;
            spendCount = 0;
        }

        if (moneyAvailable >= moneyNeeded) {
            console.log(`You saved the money for ${dayCount} days.`);
            break;
        }


        command = input[index]
        index++;

        spendOrSave = Number(input[index]);
        index++;
    }
}