const { expect } = require("chai");

describe('após a escrita do arquivo', () => {
  it('deve-se retornar um ok', () => {
    const resposta = escritorDeConteudo();

    expect(resposta).to.be.equal('ok');
  });
});