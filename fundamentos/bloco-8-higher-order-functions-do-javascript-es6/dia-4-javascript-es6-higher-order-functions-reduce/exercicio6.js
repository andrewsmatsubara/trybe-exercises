const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const estudanteComNotas = students.map((aluno, index) => ({
    name: aluno,
    average: grades[index].reduce((acc, nota) => acc + nota, 0) / (grades[index].length),
  }));
  return estudanteComNotas;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);

//Acabei me atrapalhando no começo do exercício, pois tentei utilizar o método reduce() já na hora de criar um array com map(), invertendo assim todo o processo lógico do exercício. A partir do gabarito consegui entender a aplicação do map() para indexar cada elemento do array 'students', criando um objeto para os respectivos alunos com as respectivas médias, obtidas através do método reduce(), onde o retorno são os parâmetros acc (acumulador), que começa com o valor 0 e acumula as somatórias até então feitas entre ela mesma e a nota(valores de cada elemento do array 'grades'). 