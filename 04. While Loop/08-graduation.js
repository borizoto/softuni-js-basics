function solve(input) {

    let name = input[0];
    let gradesCounter = 1;
    let grade = 0;
    let sumGrades = 0;

    while (gradesCounter <= 12) {
        grade = Number(input[gradesCounter]);
        sumGrades += grade;
        if (grade >= 4) {
            gradesCounter++;
        } else {
            console.log(`${name} has been excluded at ${gradesCounter} grade`);
            break;
        }
    }

    if (gradesCounter >= 12) {
        let averageGrade = sumGrades / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
            
}