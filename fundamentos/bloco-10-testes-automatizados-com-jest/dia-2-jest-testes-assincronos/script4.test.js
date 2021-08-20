const getRepos = require('./script4');

test("verifica se os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram na lista do repositório", () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(url).then((projeto) => {
        expect(projeto).toContain('sd-01-week4-5-project-todo-list');
        expect(projeto).toContain('sd-01-week4-5-project-meme-generator');
    });
});