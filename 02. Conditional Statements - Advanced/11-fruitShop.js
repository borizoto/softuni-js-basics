function program (input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = input[2];

    let price = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if (fruit === "banana") {
            price = 2.5;
        } else if (fruit === "apple") {
            price = 1.2;
        } else if (fruit === "orange") {
            price = 0.85;
        } else if (fruit === "grapefruit") {
            price = 1.45;
        } else if (fruit === "kiwi") {
            price = 2.7;
        } else if (fruit === "pineapple") {
            price = 5.5;
        } else if (fruit === "grapes") {
            price = 3.85;
        } else {
            console.log("error");
            return;
        }
    } else if (day === "Sunday" || day === "Saturday") {
        if (fruit === "banana") {
            price = 2.7;
        } else if (fruit === "apple") {
            price = 1.25;
        } else if (fruit === "orange") {
            price = 0.90;
        } else if (fruit === "grapefruit") {
            price = 1.60;
        } else if (fruit === "kiwi") {
            price = 3;
        } else if (fruit === "pineapple") {
            price = 5.6;
        } else if (fruit === "grapes") {
            price = 4.2;
        } else {
            console.log("error");
            return;
        }
    } else {
        console.log("error");
        return;
    }

    price *= quantity;
    console.log(price.toFixed(2));

}