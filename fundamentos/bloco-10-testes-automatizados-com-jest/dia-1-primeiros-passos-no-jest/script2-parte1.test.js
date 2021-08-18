const myRemove = require('./script2-parte1.js');

it('Remove item', () => {
    expect(myRemove([1, 2, 3, 4], 3))
});