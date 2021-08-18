const myFizzBuzz = require('./script4-parte1');

test('O retorno deverá ser "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
});
test('O retorno deverá ser "fizz"', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
});
test('O retorno deverá ser "buzz"', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
});
test('O retorno deverá ser false', () => {
    expect(myFizzBuzz(7)).toEqual(7);
});
test('O retorno deverá ser false', () => {
    expect(myFizzBuzz('3')).toBeFalsy();
});