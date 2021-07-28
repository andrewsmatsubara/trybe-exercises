const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaRespostas = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    let contador = 0;
    for (let i in RIGHT_ANSWERS && STUDENT_ANSWERS) {
        if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]) {
            contador += 1;
        } else if (STUDENT_ANSWERS[i] === 'N.A'){
            contador += 0;
        } else {
            contador -= 0.5;
        }
    }
    return contador;
}
console.log(comparaRespostas(RIGHT_ANSWERS, STUDENT_ANSWERS));