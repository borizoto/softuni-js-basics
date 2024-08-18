function solve(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let output = "";

    for (let currentNum = num1; currentNum <= num2; currentNum++) {

        currentNum = currentNum.toString();
        
        let evenSum = 0;
        let oddSum = 0;

        for (let digitCounter = 0; digitCounter < currentNum.length; digitCounter++) {
            let currentDigit = Number(currentNum[digitCounter]);

            if (digitCounter % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            output += Number(currentNum) + " ";
        }
    }
    console.log(output);
}