function menorNumero(numeros){
    let menor = 0;

    for(let index in numeros){
        if(numeros[menor] > numeros[index]){
            menor = [index];
        }
    }
    return menor;
}
console.log(menorNumero([2,4,6,7,10,0,-3]));