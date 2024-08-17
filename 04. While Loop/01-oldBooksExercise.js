function solve(input) {

    let bookWanted = input[0];
    let index = 1;
    let command = input[index];
    let bookCounter = 0;

    while (command !== "No More Books") {
       
        index++;

        if (command === bookWanted) {
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        }

        bookCounter++;
        command = input[index];
    }

    if (command === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`);
    }

}