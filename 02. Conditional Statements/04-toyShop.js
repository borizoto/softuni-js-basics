function program(input) {

    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let count = puzzles + dolls + bears + minions + trucks;
    let sum = (puzzles * 2.6) + (dolls * 3) + (bears * 4.1) + (minions * 8.2) + (trucks * 2);

    if (count >= 50) {
        sum *= 0.75;
    }

    sum *= 0.9;

    if (sum >= tripPrice) {
        let moneyLeft = sum - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = tripPrice - sum;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

}