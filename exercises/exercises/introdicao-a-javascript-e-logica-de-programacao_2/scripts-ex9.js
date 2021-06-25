let comeco = 1;
let final = 25;
let array = [];

for(let index = comeco; index <= final; index += 1){
    array.push(index);
}
console.log(array);

let res = [];

for(let index = 0; index < array.length; index += 1){
    res = array[index] / 2;
    console.log(res);
}


