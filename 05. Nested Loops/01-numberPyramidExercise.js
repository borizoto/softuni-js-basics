function solve(input) {

    let number = Number(input[0]);
    let current = 1;

    for (let maxNumOnRow = 1; maxNumOnRow <= number; maxNumOnRow++) {
        let output = "";
        for (let currNumOnRow = 1; currNumOnRow <= maxNumOnRow; currNumOnRow++) {
            if (current > number) {
                break;
            } 
            output += current + " ";
            current++;
        }
        console.log(output);
        
        if (current > number) {
            break;
        }
    }
}