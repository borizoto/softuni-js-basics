function program(input) {

    let command = (input[0]);
    let area = 0;

    if (command === "square") {
         let a = Number(input[1]);
         area = a * a;
    } else if (command === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    } else if (command === "circle") {
        let r = Number(input[1]);
        area = Math.PI * r * r; 
    } else if (command === "triangle") {
        let a = Number(input[1]);
        let ha = Number(input[2]);
        area = (a * ha) / 2;
    }

    console.log(area.toFixed(3));

}