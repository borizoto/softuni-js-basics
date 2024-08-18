function solve(input) {
    let counter = 0;
    let judgesCount = Number(input[counter]);
    counter++;
    let presentationName = input[counter];
    counter++;
    let allGradesAverage = 0;
    let allGradesCount = 0;

    while (presentationName !== "Finish") {

        let gradeSum = 0;

        for (let currentJudgeCounter = 1; currentJudgeCounter <= judgesCount; currentJudgeCounter++) {
            let currentGrade = Number(input[counter]);
            counter++;
            gradeSum += currentGrade;
            allGradesAverage += currentGrade;
            allGradesCount++;
        }

        let averageGradeForPrezi = gradeSum / judgesCount;
        console.log(`${presentationName} - ${averageGradeForPrezi.toFixed(2)}.`);

        presentationName = input[counter];
        counter++;
    }
        allGradesAverage = allGradesAverage / allGradesCount;
        console.log(`Student's final assessment is ${allGradesAverage.toFixed(2)}.`);
}