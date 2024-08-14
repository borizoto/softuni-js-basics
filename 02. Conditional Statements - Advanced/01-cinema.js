function program(input) {

    let projectionType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let ticketPrice = 0;

    switch (projectionType) {
        case "Premiere":
            ticketPrice = 12;
            break;

        case "Normal":
            ticketPrice = 7.5;
            break;

        case "Discount":
            ticketPrice = 5;
            break;
    }

    let finalPrice = rows * cols * ticketPrice;

    console.log(`${finalPrice.toFixed(2)} leva.`);

}