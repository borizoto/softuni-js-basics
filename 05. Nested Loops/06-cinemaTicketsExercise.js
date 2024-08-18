function solve(input) {
    let counter = 0;
    let command = input[counter];
    counter++;

    let studentCoutner = 0;
    let standartCounter = 0;
    let kidCounter = 0;
    let totalTicketsCounter = 0;

    while (command !== "Finish") {
        let soldTicketsForMovie = 0;
        let movieName = command;
        let totalSeats = Number(input[counter]);
        counter++;
        let command1 = input[counter];
        counter++;

        while (command1 !== "End") {

            let ticketType = command1;

            switch (ticketType) {
                case "student": studentCoutner++; break;
                case "standard": standartCounter++; break;
                case "kid": kidCounter++; break;
            }

            soldTicketsForMovie++;

            if (soldTicketsForMovie === totalSeats) {
                break;
            }

            command1 = input[counter];
            counter++;
        }

        totalTicketsCounter += soldTicketsForMovie;

        console.log(`${movieName} - ${(soldTicketsForMovie / totalSeats * 100).toFixed(2)}% full.`);
        command = input[counter];
        counter++;
    }
    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${(studentCoutner / totalTicketsCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartCounter / totalTicketsCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalTicketsCounter * 100).toFixed(2)}% kids tickets.`);
}