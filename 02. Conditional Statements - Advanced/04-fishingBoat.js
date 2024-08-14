function summer(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let peopleCount = Number(input[2]);

    let rent = 0;

    if (season === "Spring") {
        rent = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        rent = 4200;
    } else if (season === "Winter") {
        rent = 2600;
    }
    
    if (peopleCount <= 6) {
        rent *= 0.9;
    } else if (peopleCount >= 7 && peopleCount <= 11) {
        rent *= 0.85;
    } else if (peopleCount >= 12) {
        rent *= 0.75;
    }

    if (peopleCount % 2 === 0 && season != "Autumn") {
        rent *= 0.95;
    }

    let moneyDiff = Math.abs(budget - rent);

    if (budget >= rent) {
      console.log(`Yes! You have ${moneyDiff.toFixed(2)} leva left.`);  
    } else {
        console.log(`Not enough money! You need ${moneyDiff.toFixed(2)} leva.`);
    }

}