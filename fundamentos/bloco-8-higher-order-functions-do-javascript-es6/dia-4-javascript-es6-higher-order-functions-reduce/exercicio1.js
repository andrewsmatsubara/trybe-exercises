const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, array) => acc.concat(array), []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

//Nesse exercício, precisei da ajuda do gabarito, porém a consulta me ajudou a entender a função 'concat()' que concatenou o acumulador vazio ([]) com as arrays dentro da constante array.