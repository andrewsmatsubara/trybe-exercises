const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return qtdVezesLetra = names.reduce((acc, nome) => acc + nome.split('')).reduce((acumulador, nomes) => {
    if(nomes === 'a' || nomes === 'A'){
      return acumulador + 1;
    }else{
      return acumulador;
    }
  })
  return qtdVezesLetra;
}

assert.deepStrictEqual(containsA(), 20);