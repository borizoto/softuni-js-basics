function program(input) {

    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let judgesCount = Number(input[2]);

    let pointsSum = 0;

    for (let counter = 3; counter < judgesCount * 2 + 2; counter+=2) {
        let judgeName = input[counter];
        let pointsFromJudge = Number(input[counter + 1]);

        pointsSum = judgeName.length * pointsFromJudge / 2;
        academyPoints += pointsSum;

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            return;
        } 
    }
    if (academyPoints < 1250.5) {
        let pointsDiff = 1250.5 - academyPoints;
        console.log(`Sorry, ${actorName} you need ${pointsDiff.toFixed(1)} more!`);
    }
}