function solve(input) {

    let country = input[0];
    let instrument = input[1];
    let grade = 0;

    if (country === "Russia") {
        switch (instrument) {
            case "ribbon": grade = 9.1 + 9.4; break;

            case "hoop": grade = 9.3 + 9.8; break;

            case "rope": grade = 9.6 + 9; break;
        }
    } else if (country === "Bulgaria") {
        switch (instrument) {
            case "ribbon": grade = 9.6 + 9.4; break;

            case "hoop": grade = 9.55 + 9.75; break;

            case "rope": grade = 9.5 + 9.4; break;
        }
    } else if (country === "Italy") {
        switch (instrument) {
            case "ribbon": grade = 9.5 + 9.2; break;

            case "hoop": grade = 9.35 + 9.45; break;

            case "rope": grade = 9.7 + 9.15; break;
        }
    }

    let percent = (20 - grade) * 100 /20;
    console.log(`The team of ${country} get ${grade.toFixed(3)} on ${instrument}.`);
    console.log(`${percent.toFixed(2)}%`);
}