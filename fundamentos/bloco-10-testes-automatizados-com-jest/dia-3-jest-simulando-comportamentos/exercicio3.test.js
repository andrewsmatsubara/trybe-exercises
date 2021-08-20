const exercicio3 = require('./exercicio1');

test('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    exercicio3.geraNumeroAleatorio = jest.fn().mockImplementationOnce((num1, num2, num3) => num1 * num2 * num3);

    expect(exercicio3.geraNumeroAleatorio(2, 3, 5)).toEqual(30);
    expect(exercicio3.geraNumeroAleatorio).toHaveBeenCalled();
    expect(exercicio3.geraNumeroAleatorio).toHaveBeenCalledTimes(1);

    exercicio3.geraNumeroAleatorio.mockReset();

    exercicio3.geraNumeroAleatorio = jest.fn().mockImplementationOnce((num1) => num1 * 2);

    expect(exercicio3.geraNumeroAleatorio(5)).toEqual(10);
    expect(exercicio3.geraNumeroAleatorio).toHaveBeenCalled();
    expect(exercicio3.geraNumeroAleatorio).toHaveBeenCalledTimes(1);
});