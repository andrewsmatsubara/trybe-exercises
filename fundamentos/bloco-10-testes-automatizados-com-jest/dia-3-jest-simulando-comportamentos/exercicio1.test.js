const exercicio1 = require('./exercicio1');

test('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    exercicio1.geraNumeroAleatorio = jest.fn().mockReturnValue();
    exercicio1.geraNumeroAleatorio();
    expect(exercicio1.geraNumeroAleatorio()).
});