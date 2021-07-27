const assert = require('assert');
// escreva a função sumAllNumbers aqui

let sumAllNumbers = (array) => {
    let soma = 0;

    for(let i = 0; i < array.length; i += 1){
        soma += array[i];
    }
    return soma;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);