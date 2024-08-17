function solve(input) {

    let index = 0;
    let command = input[index];
    index++;
    let totalSteps = 0;

    while (command !== "Going home") {
        totalSteps += Number(command);

        if (totalSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - 10000} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Going home") {
        totalSteps += Number(input[index]);

        if (totalSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - 10000} steps over the goal!`);
        } else {
            console.log(`${Math.abs(10000 - totalSteps)} more steps to reach goal.`);
        }
    }
}