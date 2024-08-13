function program(input) {

    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let rams = Number(input[3]);

    let processorsPrice = (videoCards * 250) * 0.35;
    let ramsPrice = (videoCards * 250) * 0.1;
    
    let totalSum = videoCards * 250 + processors * processorsPrice + rams * ramsPrice;
    
    if (videoCards > processors) {
        totalSum *= 0.85;
    }

    if (totalSum > budget) {
        let moneyDiff = totalSum - budget;
        console.log(`Not enough money! You need ${moneyDiff.toFixed(2)} leva more!`);
    } else {
        let moneyDiff = budget - totalSum;
        console.log(`You have ${moneyDiff.toFixed(2)} leva left!`);
    }
}