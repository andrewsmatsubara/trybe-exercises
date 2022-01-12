const {expect} = require('chai');

const {identificador} = require('../exercicio1');

describe('o número em questão', () => {
  it('retorna uma string', () => {
    const resposta = identificador(1);

    expect(resposta).to.be.a('string');
  });
});

describe('quando o número é maior que 0', () => {
  it('retorna positivo', () => {
    const resposta = identificador(1);

    expect(resposta).to.be.equal('positivo');
  });
});

describe('quando o número é igual a 0', () => {
  it('neutro', () => {
    const resposta = identificador(0);

    expect(resposta).to.be.equal('neutro');
  });
});

describe('quando o número é menor que 0', () => {
  it('negativo', () => {
    const resposta = identificador(-1);

    expect(resposta).to.be.equal('negativo');
  });
});

describe('quando o tipo do parâmetro é diferente de Number', () => {
  it('retorna que o valor deve ser um número', () => {
    const resposta = identificador(String);

    expect(resposta).to.be.equal('o valor deve ser um número');
  });
});
