function program(input) {

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let priceForOneCloth = Number(input[2]);

    let decor = budget * 0.1;
    let clothes = statists * priceForOneCloth;

    if (statists > 150) {
        clothes *= 0.9;
    }

    let totalExpenses = decor + clothes;

    if (totalExpenses > budget) {
        let moneyDiff = totalExpenses - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyDiff.toFixed(2)} leva more.`);
    } else {
        let moneyDiff = budget - totalExpenses;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyDiff.toFixed(2)} leva left.`);
    }
    
}