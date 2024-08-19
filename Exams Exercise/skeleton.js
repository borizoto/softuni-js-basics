function solve(input) {
   
    let controlMinutes = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let length = Number(input[2]);
    let secondsFor100Meters = Number(input[3]);

    controlMinutes *= 60; // in seconds
    let totalSeconds = controlMinutes + controlSeconds;
    let slowererTimes = length / 120;
    let slowererSec = slowererTimes * 2.5;
    let ownTime = (length / 100) * secondsFor100Meters - slowererSec;

    if (ownTime <= totalSeconds) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${ownTime.toFixed(3)}.`);
    } else {
        let diff = Math.abs(totalSeconds - ownTime);
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }

}