function program (input) {

    let city = input[0];
    let salesCount = Number(input[1]);

    let commissionPercent = 0;

    if (city === "Sofia") {
        if (salesCount >= 0 && salesCount <= 500) {
            commissionPercent = salesCount * 0.05;
        } else if (salesCount > 500 && salesCount <= 1000) {
            commissionPercent = salesCount * 0.07;
        } else if (salesCount > 1000 && salesCount <= 10000) {
            commissionPercent = salesCount * 0.08;
        } else if (salesCount > 10000) {
            commissionPercent = salesCount * 0.12;
        } else {
            console.log("error");
            return;
        }
    } else if (city === "Plovdiv") {
        if (salesCount >= 0 && salesCount <= 500) {
            commissionPercent = salesCount * 0.055;
        } else if (salesCount > 500 && salesCount <= 1000) {
            commissionPercent = salesCount * 0.08;
        } else if (salesCount > 1000 && salesCount <= 10000) {
            commissionPercent = salesCount * 0.12;
        } else if (salesCount > 10000) {
            commissionPercent = salesCount * 0.145;
        } else {
            console.log("error");
            return;
        }
    } else if (city === "Varna") {
        if (salesCount >= 0 && salesCount <= 500) {
            commissionPercent = salesCount * 0.045;
        } else if (salesCount > 500 && salesCount <= 1000) {
            commissionPercent = salesCount * 0.075;
        } else if (salesCount > 1000 && salesCount <= 10000) {
            commissionPercent = salesCount * 0.1;
        } else if (salesCount > 10000) {
            commissionPercent = salesCount * 0.13;
        } else {
            console.log("error");
            return;
        }
    } else {
        console.log("error");
        return;
    }

    console.log(commissionPercent.toFixed(2));
   
}