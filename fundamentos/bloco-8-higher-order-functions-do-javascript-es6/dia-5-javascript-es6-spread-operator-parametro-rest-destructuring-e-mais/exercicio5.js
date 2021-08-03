const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo

const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);

//Ideia para realizar o exercício retirado do site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment