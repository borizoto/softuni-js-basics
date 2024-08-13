function program(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentOccupied = Number(input[3] / 100);

    let finalLiters = length * width * height;
    finalLiters = finalLiters - finalLiters * percentOccupied;
    console.log(finalLiters / 1000);

}