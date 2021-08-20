const exercicio5 = require('./exercicio4');

test('retorna uma string com as letras minúsculas', () => {
    exercicio5.uppercase = jest
    .spyOn(exercicio5, 'uppercase')
    .mockImplementation((string) => string.toLowerCase());
    expect(exercicio5.uppercase('BElugA')).toBe('beluga');

    exercicio5.uppercase.mockRestore();

    expect(exercicio5.uppercase('uiui papai')).toBe('UIUI PAPAI');
});