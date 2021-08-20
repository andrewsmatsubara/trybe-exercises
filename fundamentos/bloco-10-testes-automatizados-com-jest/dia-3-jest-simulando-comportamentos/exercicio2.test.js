const exercicio2 = require('./exercicio1');

test('Implementa a função com 2 parâmetros, testamos o retorno da função para aquela implementação, testamos se a função foi chamada, quantas vezes foi chamada e com quais parâmetros foi chamada', () => {
    exercicio2.geraNumeroAleatorio = jest.fn().mockImplementationOnce((num1, num2) => num1/num2);
    expect(exercicio2.geraNumeroAleatorio(10, 5)).toBe(2);
    expect(exercicio2.geraNumeroAleatorio).toHaveBeenCalled();
    expect(exercicio2.geraNumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(exercicio2.geraNumeroAleatorio).toHaveBeenCalledWith(10, 5);
});