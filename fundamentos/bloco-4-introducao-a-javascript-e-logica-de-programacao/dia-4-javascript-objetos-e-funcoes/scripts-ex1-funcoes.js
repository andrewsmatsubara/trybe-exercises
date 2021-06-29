function verificaPalindromo(palavra){
    for(let index = 0; index <= palavra.length; palavra += 1){    
        if(palavra[index] != palavra[(palavra.length - 1) - index]){
            return false;
        }else{
            return true;
        }
    }
}
console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));


