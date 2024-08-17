function solve(input) {

    let counter = 0;
    let number = input[counter];
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (number !== "Stop") {
        number = Number(input[counter]);
        if (number > maxNum) {
            maxNum = number;
        }
        counter++;
        number = input[counter];
    }
    console.log(maxNum);

}