const fs = require('fs');

const escritorDeConteudo = (nome, conteudo) => {
  fs.writeFileSync(nome, conteudo);

  return 'ok';
}

module.exports = {escritorDeConteudo};
