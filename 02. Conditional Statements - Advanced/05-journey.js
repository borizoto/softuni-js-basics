function program(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let stay = "";
    let destination = "";

    if (budget <= 100) {
        destination = "Bulgaria";

        if (season === "summer") {
            stay = "Camp";
            budget *= 0.3;
        } else if (season === "winter") {
            stay = "Hotel";
            budget *= 0.7;
        }

    } else if (budget <= 1000) {
        destination = "Balkans";

        if (season === "summer") {
            stay = "Camp";
            budget *= 0.4;
        } else if (season === "winter") {
            stay = "Hotel";
            budget *= 0.8;
        }

    } else if (budget > 1000) {
        destination = "Europe";
        stay = "Hotel";
        budget *= 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${stay} - ${budget.toFixed(2)}`);
    
}