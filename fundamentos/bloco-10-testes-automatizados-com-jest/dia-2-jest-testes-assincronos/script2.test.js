const { findUserById, getUserName } = require('./script2');

test('verifica o resultado da função getUserName para o caso em que o usuário é encontrado', () => {
    getUserName(1).then((nome) => expect(nome).toBe('Mark'));
});
test('verifica o resultado da função getUserName para o caso em que o usuário não é encontrado', () => {
    getUserName(3).catch((error) => expect(error).toBe('User with 3 not found'));
})