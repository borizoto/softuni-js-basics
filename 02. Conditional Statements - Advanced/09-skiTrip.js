function operations(input) {

    let daysCount = Number(input[0]);
    let roomType = input[1];
    let review = input[2];

    let price = 0;
    let nightsCount = daysCount - 1;

    switch (roomType) {
        case "room for one person":
            price = nightsCount * 18;
            break;

        case "apartment":
            price = nightsCount * 25;

            if (daysCount < 10) {
                price *= 0.7;
            } else if (daysCount >= 10 && daysCount <= 15) {
                price *= 0.65;
            } else if (daysCount > 15) {
                price *= 0.5;
            }
            break;

        case "president apartment":
            price = nightsCount * 35;

            if (daysCount < 10) {
                price *= 0.9;
            } else if (daysCount >= 10 && daysCount <= 15) {
                price *= 0.85;
            } else if (daysCount > 15) {
                price *= 0.8;
            }
            break;
    }

    if (review === "positive") {
        price *= 1.25;
    } else if (review === "negative") {
        price *= 0.9;
    }

    console.log(price.toFixed(2));

}