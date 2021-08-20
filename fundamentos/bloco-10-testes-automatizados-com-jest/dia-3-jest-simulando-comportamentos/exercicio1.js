function geraNumeroAleatorio() {
    return Math.round(Math.abs(Math.random() * 100));
}
console.log(geraNumeroAleatorio());