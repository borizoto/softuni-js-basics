function solve(input) {

    let annualTax = Number(input[0]);
 
    let shoes = annualTax * 0.6;
    let clothes = shoes * 0.8;   
    let ball = clothes / 4;
    let accessories = ball / 5;
 
    let total = shoes + clothes + ball + accessories + annualTax;
    console.log(total.toFixed(2));
 
 }