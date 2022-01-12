const identificador = (num) => {
  if (num < 0) {
    return 'negativo';
  } else if (num === 0) {
    return 'neutro';
  } else if (num > 0) {
    return 'positivo';
  } else if (typeof num !== 'number') {
    return 'o valor deve ser um número';
  }
}

module.exports = {identificador};