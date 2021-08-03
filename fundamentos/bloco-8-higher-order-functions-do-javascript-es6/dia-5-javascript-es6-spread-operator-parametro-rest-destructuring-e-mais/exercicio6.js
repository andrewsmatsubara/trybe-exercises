const assert = require('assert');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([name, brand, year]) => ({name, brand, year});

assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 });

/*Utilizei estes sites para me ajudar a resolver o problema: 

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer 

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

Além disso, inicialmente fiz o exercício dessa maneira: 

const toObject = (carro) => ({
    name: carro[0],
    brand: carro[1],
    year: carro[2],
});

Porém, como o exercício pedia a resolução através do array destructuring, modifiquei a sintaxe!*/