function program(input) {

    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    hour = hour * 60;

    let totaltime = hour + minutes + 15;

    let newHour = Math.trunc(totaltime / 60);
    let newMinutes = totaltime % 60;

    if (newHour === 24) {
        newHour = 0;
    }

    if (newMinutes > 9) {
        console.log(`${newHour}:${newMinutes}`);
    } else {
        console.log(`${newHour}:0${newMinutes}`);
    }
}