function solve(input) {

    let badGradesPossible = Number(input[0]);
    let index = 1;

    let taskName = input[index];
    index++;
    let taskGrade = input[index];
    index++;

    let badGradesCounter = 0;
    let gradeCounter = 0;
    let gradeSum = 0;
    let lastTask = '';

    while (taskName !== "Enough") {
        
        lastTask = taskName;
        gradeSum += Number(taskGrade);

        if (taskGrade <= 4) {
            badGradesCounter++;
        }
        if (badGradesCounter === badGradesPossible) {
            console.log(`You need a break, ${badGradesCounter} poor grades.`);
            break;
        }
        taskName = input[index];
        index++;

        taskGrade = input[index];
        index++;

        gradeCounter++;
    }

    if (taskName === "Enough") {
        let averageGrade = gradeSum / gradeCounter;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCounter}`);
        console.log(`Last problem: ${lastTask}`);
    }
}