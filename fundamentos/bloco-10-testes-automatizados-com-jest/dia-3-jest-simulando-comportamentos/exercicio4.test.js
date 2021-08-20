const exercicio4 = require('./exercicio4');

jest.mock('./exercicio4');

test('retorna uma string com as letras minúsculas, retorna a última letra da string, retorna a concatenação das 3 strings', () => {
    exercicio4.uppercase.mockImplementationOnce((string) => string.toLowerCase());
    expect(exercicio4.uppercase('BElugA')).toBe('beluga');
    
    exercicio4.firstLetter.mockImplementationOnce((string) => string.charAt(string.length - 1));
    expect(exercicio4.firstLetter('paozinho')).toBe('o');

    exercicio4.concatenate.mockImplementationOnce((string1, string2, string3) => string1 + string2 + string3);
    expect(exercicio4.concatenate('comer', 'pãozinho', 'quentinho')).toBe('comerpãozinhoquentinho');
});