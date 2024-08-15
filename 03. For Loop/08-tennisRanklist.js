function program(input) {

    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let winCounter = 0;

    for (let counter = 2; counter < input.length; counter++) {
        let tournamentResult = input[counter];

        switch (tournamentResult) {
            case "W":
            startingPoints += 2000;
            winCounter++;
                break;

            case "F":
                startingPoints += 1200;
                break;

            case "SF":
                startingPoints += 720;
                break;
        }
    }

    let averagePoints = (startingPoints - Number(input[1])) / tournamentsCount;
    winCounter = winCounter / tournamentsCount * 100;

    console.log(`Final points: ${startingPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winCounter.toFixed(2)}%`);
}