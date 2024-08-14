function program(input) {

    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (flowersType) {
        case "Roses":
            price = 5 * flowersCount;
        if (flowersCount > 80) {
            price *= 0.9;
        }
            break;

        case "Dahlias":
            price = 3.8 * flowersCount;
            if (flowersCount > 90) {
                price *= 0.85;
            }
            break;

        case "Tulips":
            price = 2.8 * flowersCount;
            if (flowersCount > 80) {
                price *= 0.85;
            }
            break;

        case "Narcissus":
            price = 3 * flowersCount;
            if (flowersCount < 120) {
                price *= 1.15;
            }
            break;

        case "Gladiolus":
            price = 2.5 * flowersCount;
            if (flowersCount < 80) {
                price *= 1.2;
            }
            break;
    }

    if (price > budget) {
        let moneyDiff = price - budget;
        console.log(`Not enough money, you need ${moneyDiff.toFixed(2)} leva more.`);
    } else {
        let moneyDiff = budget - price;
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${moneyDiff.toFixed(2)} leva left.`);
    }
}