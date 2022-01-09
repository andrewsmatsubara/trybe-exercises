const readline = require('readline-sync');

const listaScripts = [
  `1 - imc`,
  `2 - velocidade`,
  `3 - sorteio`
]

const escolha = readline.question(`Escolha um dos scripts para rodar: 
${listaScripts}, [1/2/3]`)

if (escolha == 1) {
  require('./imc');
} else if (escolha == 2) {
  require('./velocidade');
} else if (escolha == 3) {
  require('./sorteio');
} else {
  console.log('Número inválido, escolha novamente!');
  escolha;
}
