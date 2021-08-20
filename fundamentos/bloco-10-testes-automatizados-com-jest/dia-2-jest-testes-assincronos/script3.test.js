const { findUserById, getUserName } = require('./script3');

test('verifica o resultado da função getUserName para o caso em que o usuário é e não é encontrado', async () => {
    try {
        await getUserName(3);
    } catch (error) {
        expect(error).toEqual(new Error('User with 3 not found.'));
    }
});