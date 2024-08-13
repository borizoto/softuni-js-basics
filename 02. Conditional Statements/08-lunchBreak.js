function program(input) {

    let movieName = input[0];
    let episodeLength = Number(input[1]);
    let restDuration = Number(input[2]);

    let lunchDuration = restDuration / 8;
    let relaxDuration = restDuration / 4;

    let timeLeft = restDuration - lunchDuration - relaxDuration;

    if (timeLeft >= episodeLength) {
        let timeAfterEpisode = timeLeft - episodeLength;
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeAfterEpisode)} minutes free time.`);
    } else {
        let timeNeeded = episodeLength - timeLeft;
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }

}