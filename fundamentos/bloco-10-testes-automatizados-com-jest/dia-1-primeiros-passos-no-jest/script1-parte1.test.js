const sum = require('./script1-parte1.js')

it('soma dois valores', () => {
    expect(sum(1, 2)).toEqual(3);
  });