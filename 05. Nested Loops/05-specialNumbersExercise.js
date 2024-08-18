function solve(input) {

    let N = Number(input[0]);
    let specialCounter = 0;
    let output = "";

    for (let number = 1111; number <= 9999; number++) {
        let numberToString = number.toString();
        specialCounter = 0;

        for (let digitCounter = 0; digitCounter < numberToString.length; digitCounter++) {
            let currentDigit = Number(numberToString[digitCounter]);
            if (N % currentDigit === 0) {
                specialCounter++;
            }
        }
        
        if (specialCounter === 4) {
           output += `${number} `; 
        }
        
    }
    console.log(output);
}