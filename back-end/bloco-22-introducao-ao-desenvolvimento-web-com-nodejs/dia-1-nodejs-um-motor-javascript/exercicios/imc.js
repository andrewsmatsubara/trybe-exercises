const readline = require('readline-sync');

const imc = (peso, altura) => (peso/altura**2).toFixed(2);

const altura = readline.question('Qual a sua altura? ');
const peso = readline.questionFloat('Qual o seu peso? ');

console.log(imc(peso, altura));
