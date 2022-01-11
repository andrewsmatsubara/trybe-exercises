const funcao = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números'));
    }
      const resultado = ((a + b) * c);

      if (resultado < 50) reject(new Error('Valor muito baixo'));
      
      resolve(resultado);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

const parametros = () => {
  const arrayAleatorios = Array.from({length: 3}).map(getRandomNumber);

  funcao(...arrayAleatorios).then(result => console.log(result)).catch(err => console.error(err.message));
}

parametros();
