const readline = require('readline-sync');

const distancia = readline.questionInt('Digite uma distância: ');
const tempo = readline.questionInt('Digite o tempo de locomoção: ');

const velocidade = (distancia, tempo) => distancia / tempo;

console.log(velocidade(distancia, tempo));