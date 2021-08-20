function geraNumeroAleatorio() {
    return Math.round(Math.abs(Math.random() * 100));
}

module.exports = { geraNumeroAleatorio };