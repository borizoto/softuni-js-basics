function solve(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let comboCounter = 0;
    let isFound = false;

    for (let num1 = start; num1 <= end; num1++) {
        for (let num2 = start; num2 <= end; num2++) {
            comboCounter++;
            if (num1 + num2 === magicNum) {
                isFound = true;
                console.log(`Combination N:${comboCounter} (${num1} + ${num2} = ${magicNum})`);
                break;
            }
        }
        if (isFound === true) {
            break;
        }
    }
    if (isFound === false) {
        console.log(`${comboCounter} combinations - neither equals ${magicNum}`);
    }
}