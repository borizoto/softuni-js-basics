function solve(input) {

    let counter = 0;
    let numbers = input[counter];
    counter++;

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (numbers !== "stop") {
        let isPrime = true;
        numbers = Number(numbers);

        if (numbers < 0) {
            console.log("Number is negative.");
            numbers = input[counter];
            counter++;
            continue;
        }

        for (let divisor = 2; divisor < numbers; divisor++) {
            if (numbers % divisor === 0) {
                nonPrimeSum += numbers;
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeSum += numbers;
        }
        
        numbers = input[counter];
        counter++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}