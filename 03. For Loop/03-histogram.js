function program(input) {

    let numberCount = Number(input[0]);

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

for (let number = 1; number <= numberCount; number++) {
    if (input[number] < 200) {
        count1++;
    } else if (input[number] < 400) {
        count2++;
    } else if (input[number] < 600) {
        count3++;
    } else if (input[number] < 800) {
        count4++;
    } else {
        count5++;
    }
}

let p1 = count1 / numberCount * 100;
    let p2 = count2 / numberCount * 100;
    let p3 = count3 / numberCount * 100;
    let p4 = count4 / numberCount * 100;
    let p5 = count5 / numberCount * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}