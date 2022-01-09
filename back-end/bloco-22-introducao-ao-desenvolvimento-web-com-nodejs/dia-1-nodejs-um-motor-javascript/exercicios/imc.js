const readline = require('readline-sync');

const imc = (peso, altura) => (peso / altura ** 2).toFixed(2);

const altura = readline.question('Qual a sua altura? ');
const peso = readline.questionFloat('Qual o seu peso? ');

console.log(imc(peso, altura));

const imcCondicao = () => {
  let categoria = '';

  if (imc(peso, altura) < 18.5) {
    categoria =  'Abaixo do peso (magreza)';
  } else if (imc(peso, altura) >= 18.5 && imc(peso, altura) <= 24.9) {
    categoria = 'Peso normal';
  } else if (imc(peso, altura) >= 25.0 && imc(peso, altura) <= 29.9) {
    categoria = 'Acima do peso (sobrepeso)';
  } else if (imc(peso, altura) >= 30.0 && imc(peso, altura) <= 34.9) {
    categoria = 'Obesidade grau I';
  } else if (imc(peso, altura) >= 35.0 && imc(peso, altura) <= 39.9) {
    categoria = 'Obesidade grau II';
  } else if (imc(peso, altura) >= 40.0) {
    categoria = 'Obesidade graus III e IV';
  }
  return categoria;
}

console.log(`A sua categoria é: ${imcCondicao()}`);
