const sum = require('./script1-parte1.js');

it('soma entre 4 e 5', () => {
  expect(sum(4, 5)).toEqual(9);
});

it('soma entre 0 e 0', () => {
  expect(sum(0, 0)).toEqual(0);
});

it('lança erro na soma entre 4 e "5"', () => {
  expect(() => {
    sum(4, "5");
  }).toThrow();
});

it('lança mensagem de erro ao somar 4 e "5"', () => {
  expect(() => {
    sum(4, "5");
  }).toThrow('parameters must be numbers');
});