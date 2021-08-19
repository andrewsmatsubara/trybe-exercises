function encode(frase) {
    const fraseASeparar = frase.split('')
    fraseASeparar.forEach((letra, index) => {
        if (letra === 'a') {
            fraseASeparar[index] = '1';
        } else if (letra === 'e') {
            fraseASeparar[index] = '2';
        } else if (letra === 'i') {
            fraseASeparar[index] = '3';
        } else if (letra === 'o') {
            fraseASeparar[index] = '4';
        } else if (letra === 'u') {
            fraseASeparar[index] = '5';
        }
    });
    return fraseASeparar.join('');
}
console.log(encode('hi there!'));

function decode(frase) {
    const fraseASeparar = frase.split('')
    fraseASeparar.forEach((letra, index) => {
        if (letra === '1') {
            fraseASeparar[index] = 'a';
        } else if (letra === '2') {
            fraseASeparar[index] = 'e';
        } else if (letra === '3') {
            fraseASeparar[index] = 'i';
        } else if (letra === '4') {
            fraseASeparar[index] = 'o';
        } else if (letra === '5') {
            fraseASeparar[index] = 'u';
        }
    });
    return fraseASeparar.join('');
}
console.log(decode('h3 th2r2!'));

module.exports = {encode, decode};