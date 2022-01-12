const identificador = (num) => {
  if (num < 0) {
    return 'negativo';
  } else if (num === 0) {
    return 'neutro';
  } else if (num > 0) {
    return 'positivo';
  }
}

module.exports = {identificador};