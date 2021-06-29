function maiorNumero(numeros){
    let maior = 0;

    for(let index in numeros){
        if(numeros[maior] < numeros[index]){
            maior = [index];
        }
    }
    return maior;
}
console.log(maiorNumero([2,3,6,7,10,1]));