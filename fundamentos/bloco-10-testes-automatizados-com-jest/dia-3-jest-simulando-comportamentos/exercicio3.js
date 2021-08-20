function geraNumeroAleatorio() {
    return Math.round(Math.abs(Math.random() * 101));
}

module.exports = { geraNumeroAleatorio };