function program(input) {

    let nylon  = Number(input[0]);
    let paint  = Number(input[1]);
    let thinner  = Number(input[2] * 5);
    let workedHours = Number(input[3]);
    
    nylon = nylon + 2;
    nylon = nylon * 1.5;
    paint = paint + paint * 0.1;
    paint = paint * 14.5;

    let materialsExpenses = nylon + paint + thinner + 0.4;
    let workersPayForHour = materialsExpenses * 0.3;

    let totalSum = materialsExpenses + workersPayForHour * workedHours;

    console.log(totalSum);

}