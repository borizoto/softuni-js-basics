function solve(input) {

    let competitionState = input[0];
    let ticketType = input[1];
    let ticketCount = Number(input[2]);
    let photo = input[3];

    let ticketPrice = 0;
    let totalPrice = 0;

    if (competitionState === "Quarter final") {
        switch (ticketType) {
            case "Standard": ticketPrice = 55.5; break;
            case "Premium": ticketPrice = 105.2; break;
            case "VIP": ticketPrice = 118.9; break;
        }
    } else if (competitionState === "Semi final") {
        switch (ticketType) {
            case "Standard": ticketPrice = 75.88; break;
            case "Premium": ticketPrice = 125.22; break;
            case "VIP": ticketPrice = 300.4; break;
        }
    } else if (competitionState === "Final") {
        switch (ticketType) {
            case "Standard": ticketPrice = 110.1; break;
            case "Premium": ticketPrice = 160.66; break;
            case "VIP": ticketPrice = 400; break;
        }
    }

    totalPrice = ticketCount * ticketPrice;

    if (totalPrice > 2500 && totalPrice <= 4000) {
        totalPrice = totalPrice * 0.9;
    } else if (totalPrice > 4000) {
        totalPrice = totalPrice * 0.75;
    }

    if (photo === "Y" && (ticketCount * ticketPrice) <= 4000) {
        totalPrice = totalPrice + (ticketCount * 40);
    }

    console.log(totalPrice.toFixed(2));
    
}