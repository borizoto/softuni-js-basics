function program(input) {

    let chickenMenu  = Number(input[0]);
    let fishMenu  = Number(input[1]);
    let veganMenu  = Number(input[2]);

    chickenMenu *= 10.35;
    fishMenu *= 12.4;
    veganMenu *= 8.15;

    let sum = chickenMenu + fishMenu + veganMenu;
    let dessert = sum * 0.2;
    sum = sum + dessert + 2.5;

    console.log(sum);

}