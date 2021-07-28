const comparacao = (numeroApostado, numeroAleatorio) => numeroApostado === numeroAleatorio;

const comparaNumero = (numeroApostado, callback) => {
    numeroAleatorio = Math.trunc((Math.random() * 5) + 1);

    return callback(numeroApostado, numeroAleatorio) ? 'Parabéns você ganhou' : 'Tente novamente';
}
console.log(comparaNumero(3, comparacao));

//Método tirado dos sites:
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc