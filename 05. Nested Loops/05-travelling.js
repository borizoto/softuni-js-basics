function solve(input) {
    let index = 0;
    let command = input[index];

    let sum = 0;

    while (command !== "End") {
        let destination = command;
        index++;
        let budget = Number(input[index]);

        while (sum <= budget) {
            index++;
            sum = sum + Number(input[index]);

            if (sum >= budget) {
                console.log(`Going to ${destination}!`);
                sum = 0;
                break;
            }
        }

        index++;
        command = input[index];
    }
    
}