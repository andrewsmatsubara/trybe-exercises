const { encode, decode } = require('./script1-parte2');

describe('As funções encode e decode retornam a codificação e decodificação das frases passadas no parâmetro', () => {
    test('encode e decode são funções', () => {
        expect(typeof encode && typeof decode).toEqual('function');
    });
    test('as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('aeiou')).toEqual('12345');
    });
    test('os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
        expect(decode('12345')).toEqual('aeiou');
    });
    test('as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('bcdfg')).not.toEqual('67890');
    });
    test('a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        const frase = 'pãozinho quentinho';
        expect(encode(frase).length).toEqual(frase.length);
    });
});