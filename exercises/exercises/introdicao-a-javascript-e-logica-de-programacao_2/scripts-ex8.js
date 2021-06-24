/*Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;*/

let comeco = 1;
let final = 25;
let array = [];

for(let index = comeco; index <= final; index += 1){
    array.push(index);
}
console.log(array);