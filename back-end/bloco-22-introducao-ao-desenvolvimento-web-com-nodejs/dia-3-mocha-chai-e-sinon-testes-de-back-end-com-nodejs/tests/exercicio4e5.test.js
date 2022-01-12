const fs = require('fs');
const sinon = require('sinon');
const { expect } = require("chai");
const {escritorDeConteudo} = require('../exercicio4e5');

const filename = 'test.txt'
const fileContent = 'texto teste!'

describe('após a escrita do arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync').returns();
  });

  after(() => {
    fs.writeFileSync.restore();
  });
});

describe('o tipo do valor retornado', () => {
  it('é uma string', () => {
    const resposta = escritorDeConteudo(filename, fileContent);

    expect(resposta).to.be.a('string');
  });
});

describe('o valor retornado', () => {
  it('é ok', () => {
    const resposta = escritorDeConteudo(filename, fileContent);

    expect(resposta).to.be.equal('ok');
  });
});