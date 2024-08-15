function program(input) {

    let groupsCount = Number(input[0]);

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;
    
    for (let groupCounter = 1; groupCounter <= groupsCount; groupCounter++) {
        
        let peopleCount = Number(input[groupCounter]);

        if (peopleCount <= 5) {
            p1Count += peopleCount;
        } else if (peopleCount > 5 && peopleCount <= 12) {
            p2Count += peopleCount;
        } else if (peopleCount > 12 && peopleCount <= 25) {
            p3Count += peopleCount;
        } else if (peopleCount > 25 && peopleCount <= 40) {
            p4Count += peopleCount;
        } else if (peopleCount > 40) {
            p5Count += peopleCount;
        }
    }

    let totalPeopleCount = p1Count + p2Count + p3Count + p4Count + p5Count;
    
    p1Count = p1Count / totalPeopleCount * 100;
    p2Count = p2Count / totalPeopleCount * 100;
    p3Count = p3Count / totalPeopleCount * 100;
    p4Count = p4Count / totalPeopleCount * 100;
    p5Count = p5Count / totalPeopleCount * 100;

    console.log(`${p1Count.toFixed(2)}%`);
    console.log(`${p2Count.toFixed(2)}%`);
    console.log(`${p3Count.toFixed(2)}%`);
    console.log(`${p4Count.toFixed(2)}%`);
    console.log(`${p5Count.toFixed(2)}%`);

}