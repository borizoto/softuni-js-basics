function solve(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let index = 3;
    let command = input[index];

    let totalSpace = width * length * height;
    let boxesCount = 0;

    while (command !== "Done") {
        command = Number(input[index]);
        boxesCount = command;
        totalSpace -= boxesCount;

        if (totalSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
            break;
        }
        
        index++;
        command = input[index];
    }

    if (command === "Done") {
        console.log(`${totalSpace} Cubic meters left.`);
    }
}