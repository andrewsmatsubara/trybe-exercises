const { test, expect } = require('@jest/globals');
const exercicio1 = require('./exercicio1');

test('Testa se a função foi chamada', () => {
    exercicio1.geraNumeroAleatorio = jest.fn().mockReturnValue(10);
    exercicio1.geraNumeroAleatorio();
    expect(exercicio1.geraNumeroAleatorio).toHaveBeenCalled();
    expect(exercicio1.geraNumeroAleatorio()).toBe(10);
    expect(exercicio1.geraNumeroAleatorio).toHaveBeenCalledTimes(1);
});