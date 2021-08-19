function hydrate(string) {
    const numeroString = string.match(/[0-9]+/g);

    const totalBebidas = numeroString.map((qtdString) => parseInt(qtdString)).reduce((acc, curr) => acc + curr, 0);

    if(totalBebidas > 1){
        return `${totalBebidas} copos de água`;
    } else {
        return `${totalBebidas} copo de água`;
    }
}

module.exports = hydrate;