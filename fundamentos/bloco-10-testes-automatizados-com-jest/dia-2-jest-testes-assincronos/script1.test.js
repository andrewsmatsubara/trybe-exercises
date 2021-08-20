const uppercase = require('./script1');

test('verifique a chamada do callback de uma função uppercase', (done) => {
    uppercase('paralelepipedo', (string) => {
        try {
            expect(string).toBe('PARALELEPIPEDO');
            done();
        } catch (error) {
            done(error);
        }
    });
});

// 1 - Montamos a estrutura test com a string explicativa e uma callback que espera a função assíncrona ser finalizada (done);
// 2 - Os parâmetros retornam a função uppercase, onde o primeiro parâmetro é a palavra-teste e o segundo parâmetro é um callback;
// 3 - Esses parâmetros retornam um bloco: try (testa se o parâmetro string é a mesma daquela passada posteriormente, finalizando com a callback done()), catch (especifica uma resposta, caso uma exceção seja lançada, finalizando também com a callback done(error), onde error é a exceção que o bloco tenta identificar);