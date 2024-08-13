function program(input) {

    let recordToBeat = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeter = Number(input[2]);
    
    let slowerer = Math.trunc(distance / 15);
    slowerer *= 12.5;
    let totalTime = distance * timeForOneMeter + slowerer;

    if (totalTime >= recordToBeat) {
        let secondsDiff = totalTime - recordToBeat;
        console.log(`No, he failed! He was ${secondsDiff.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }

}