function start() {
  const readline = require('readline-sync');

  const randomNumber = Math.round(Math.random() * 10);
  
  const adivinha = readline.question('Qual número a máquina gerou? ');
  
  if (parseInt(adivinha) === randomNumber) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  }

  const novamente = readline.question('Gostaria de jogar novamente? [s/n]');

  if(novamente === 's') {
    start();
  } else {
    console.log('Até a próxima!');
  }
}

start();
