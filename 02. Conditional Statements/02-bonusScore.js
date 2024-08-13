function program(input) {

    let number = Number(input[0]);

    let points = 0;

    if (number <= 100) {
        points += 5;
    } else if (number <= 1000) {
        points = number * 0.2;
    } else if (number > 1000) {
        points = number * 0.1;
    }

    if (number % 2 === 0) {
        points += 1;
    } else if (number % 10 === 5) {
        points += 2;
    }

    console.log(points);
    console.log(number + points);
    
}