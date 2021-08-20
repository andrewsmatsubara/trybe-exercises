const exercicio6 = require('./exercicio6');

exercicio6.fetchAPI = jest.spyOn(exercicio6, 'fetchAPI');
afterEach(exercicio6.fetchAPI.mockReset);

test('testa requisição caso a promise resolva', async () => {
    exercicio6.fetchAPI.mockResolvedValue('request success');
    exercicio6.fetchAPI();
    expect(exercicio6.fetchAPI()).resolves.toBe('request success');
});

test('testa requisição caso a promise seja rejeitada', async () => {
    exercicio6.fetchAPI.mockRejectedValue('request failed');
    exercicio6.fetchAPI();
    expect(exercicio6.fetchAPI()).rejects.toBe('request failed');
});