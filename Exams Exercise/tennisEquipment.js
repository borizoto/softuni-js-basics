function solve(input) {

    let rocketPrice = Number(input[0]);
    let rocketCount = Number(input[1]);
    let shoes = Number(input[2]);
 
    let shoesPricePair = rocketPrice / 6;
 
    let expenses = (rocketCount * rocketPrice) + (shoes * shoesPricePair);
 
    let jokovic = (expenses / 8) * 1.2;
    let other = (expenses * 1.2) - jokovic;
    console.log(`Price to be paid by Djokovic ${Math.floor(jokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(other)}`);
 }