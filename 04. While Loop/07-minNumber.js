function solve(input) {

    let counter = 0;
    let number = input[counter];
    let minNum = Number.MAX_SAFE_INTEGER;

    while (number !== "Stop") {
        let currentNumber = Number(number);
        if (currentNumber < minNum) {
            minNum = currentNumber;
        }
        counter++;
        number = input[counter];
    }
    console.log(minNum);

}