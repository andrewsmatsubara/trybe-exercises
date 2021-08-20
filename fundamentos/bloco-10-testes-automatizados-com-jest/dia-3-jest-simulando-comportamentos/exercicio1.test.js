const exercicio1 = require('./exercicio1');

test('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    exercicio1.geraNumeroAleatorio = jest.fn().mockReturnValue(10);
    expect(exercicio1.geraNumeroAleatorio()).toEqual(10);
    expect(exercicio1.geraNumeroAleatorio).toHaveBeenCalled();
    expect(exercicio1.geraNumeroAleatorio).toHaveBeenCalledTimes(1);
});