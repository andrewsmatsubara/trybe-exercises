const { findAnimalByName, getAnimal } = require('./script6');

describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
        test('Retorne o objeto do animal', () => {
            expect.assertions(1);
            return findAnimalByName('Dorminhoco').then(animal => {
                expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
            });
        });
    });

    describe('Quando não existe o animal com o nome procurado', () => {
        test('Retorna um erro', () => {
            expect.assertions(1);
            return findAnimalByName('Bob').catch((error) => {
                expect(error.message).toEqual('Nenhum animal com esse nome!')
            });
        });
    });
});