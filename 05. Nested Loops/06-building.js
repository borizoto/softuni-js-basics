function solve(input) {

    let floorCount = Number(input[0]);
    let roomCountPerFloor = Number(input[1]);

for (let currFloor = floorCount; currFloor >= 1; currFloor--) {
    let roomType = "";
    for (let currRoom = 0; currRoom < roomCountPerFloor; currRoom++) {

        if (currFloor === floorCount) {
            roomType += `L${currFloor}${currRoom} `;
        } else if (currFloor % 2 === 0) {
            roomType += `O${currFloor}${currRoom} `;
        } else {
            roomType += `A${currFloor}${currRoom} `;
        }
    }
    console.log(roomType);
}
}