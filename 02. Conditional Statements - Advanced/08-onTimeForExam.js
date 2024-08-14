function onTimeForExam(input) {

    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let ExamMinsTotal = (examHour * 60) + examMinutes;
    let arrivalMinsTotal = (arrivalHour * 60) + arrivalMinutes;

    if ((ExamMinsTotal - arrivalMinsTotal <= 30) && (ExamMinsTotal - arrivalMinsTotal >= 0)) { //ontime
        console.log('On time');
        if ((ExamMinsTotal - arrivalMinsTotal < 60) && (ExamMinsTotal - arrivalMinsTotal !== 0)) {
            let minutesDiff = ExamMinsTotal - arrivalMinsTotal;
            console.log(`${minutesDiff} minutes before the start`);
        }
    } else if (ExamMinsTotal - arrivalMinsTotal > 30) { //early
        console.log('Early');
        if (ExamMinsTotal - arrivalMinsTotal >= 60) {
            let hourDiff = Math.trunc((ExamMinsTotal - arrivalMinsTotal) / 60);
            let minutesDiff = (ExamMinsTotal - arrivalMinsTotal) % 60;
            if (minutesDiff < 10) {
                console.log(`${hourDiff}:0${minutesDiff} hours before the start`);
            } else {
                console.log(`${hourDiff}:${minutesDiff} hours before the start`);
            }
        } else {
            let minutesDiff = ExamMinsTotal - arrivalMinsTotal;
            console.log(`${minutesDiff} minutes before the start`);
        }
    } else if (arrivalMinsTotal > ExamMinsTotal) { //late
        console.log('Late');
        let lateMinutesDiff = arrivalMinsTotal - ExamMinsTotal;
        let hourDiff = arrivalHour - examHour;
        let minutesDiff = arrivalMinutes - examMinutes;
        if (lateMinutesDiff < 60) {
            console.log(`${lateMinutesDiff} minutes after the start`);
        } else if (lateMinutesDiff >= 60) { // late with hour or more
            if (minutesDiff < 10) {
                console.log(`${hourDiff}:0${minutesDiff} hours after the start`);
            } else {
                console.log(`${hourDiff}:${minutesDiff} hours after the start`);
            }
        }
    }

}