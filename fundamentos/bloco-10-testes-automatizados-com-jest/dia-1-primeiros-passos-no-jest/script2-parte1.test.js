const myRemove = require('./script2-parte1.js');

it('Remove item 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});
it('Não retorna array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});
it('Verifica se o array passado não sofreu alteração', () => {
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});
it('Verifica se a função retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});