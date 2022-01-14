const fs = require('fs').promises;

const leArquivo = () => {
  return fs.readFile('./simpsons.json', 'utf-8').then(conteudo => JSON.parse(conteudo));
}

const escreveArquivo = (simpson) => {
  return fs.writeFile('./simpsons.json', JSON.stringify(simpson));
}

module.exports = leArquivo, escreveArquivo;
