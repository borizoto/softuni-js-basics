function program(input) {

    let num = Number(input[0]);

    for (let counter = 1; counter <= 10; counter++) {
        let result = counter * num;
        console.log(`${counter} * ${num} = ${result}`);
    }
}