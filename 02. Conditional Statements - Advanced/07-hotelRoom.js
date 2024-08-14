function program(input) {

    let month = input[0];
    let nightsCount = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = 50;
        apartmentPrice = 65;

        if (nightsCount > 7 && nightsCount <= 14) {
            studioPrice *= 0.95;
        } else if (nightsCount > 14) {
            studioPrice *= 0.7;
        }
        
    } else if (month === "June" || month === "September") {
        studioPrice = 75.2;
        apartmentPrice = 68.7;

        if (nightsCount > 14) {
            studioPrice *= 0.8;
        }

    } else if (month === "July" || month === "August") {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    if (nightsCount > 14) {
        apartmentPrice *= 0.9;
    }

    studioPrice *= nightsCount;
    apartmentPrice *= nightsCount;

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
   
}