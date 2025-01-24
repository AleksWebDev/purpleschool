const dice = [
    {num : 'd4', val : 4},
    {num : 'd6', val : 6},
    {num : 'd8', val: 8},
    {num : 'd10', val : 10},
    {num :'d12', val: 12},
    {num : 'd16', val : 16},
    {num : 'd20', val : 20},
];

function showDice(dice){

    const minDice = 1;

    //getting random dice
    const randomDice = Math.floor(Math.random() * dice.length);
    const maxDice = dice[randomDice];

    //getting num by parametrs we have got from randomDice
    const rangeDice = Math.floor(Math.random() * (maxDice.val - minDice) + minDice);
    return `dice is : ${maxDice.num}, value is : ${rangeDice}`;

}

let res = showDice(dice);
console.log(res);