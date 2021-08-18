const {obj1, obj2, obj3} = require('./script5-parte1');

test('obj1 é igual obj2', () => {
    expect(obj1 === obj2).toBeFalsy();
});