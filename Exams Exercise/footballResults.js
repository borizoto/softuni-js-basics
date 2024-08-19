function solve(input) {
    let index = 0;
    let match = input[index];

    let counterWin = 0;
    let counterDraw = 0;
    let counterLose = 0;

    for (let current = 1; current <= 3; current++) {
        let num1Res1 = Number(match[0]);
        let num1Res2 = Number(match[2]);

        if (num1Res1 > num1Res2) {
            counterWin++;
        } else if (num1Res1 === num1Res2) {
            counterDraw++;
        } else if (num1Res1 < num1Res2) {
            counterLose++;
        }

        index++;
        match = input[index];
    }

    console.log(`Team won ${counterWin} games.`);
    console.log(`Team lost ${counterLose} games.`);
    console.log(`Drawn games: ${counterDraw}`);

}