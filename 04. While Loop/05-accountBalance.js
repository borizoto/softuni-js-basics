function solve(input) {

    let counter = 0;
    let amount = input[counter];
    let sumBalance = 0;
    

    while (amount !== "NoMoreMoney" && Number(amount) >= 0) {

        amount = Number(input[counter]);
        sumBalance += amount;
        counter++;
        console.log(`Increase: ${amount.toFixed(2)}`);
        amount = input[counter];
    }

    if (amount < 0) {
        console.log("Invalid operation!");
    }

    console.log(`Total: ${sumBalance.toFixed(2)}`);

}