function numInteiro(n){
    let soma = 0;
    for(let index = 1; index <= n; index += 1){
        soma = soma + index;    
    }
    return soma;
}
console.log(numInteiro(5));