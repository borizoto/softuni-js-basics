function solve(input) {

    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let index = 2;
    let command = input[index];

    let cakeSize = cakeWidth * cakeLength;
    let cakePieces = 0;

    while (command !== "STOP") {
        command = Number(input[index]);
        cakePieces = command;
        cakeSize -= cakePieces;

        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
        
        index++;
        command = input[index];
    }

    if (command === "STOP") {
        console.log(`${cakeSize} pieces are left.`);
    }
}