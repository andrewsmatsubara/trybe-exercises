let nomeDaPeca = window.prompt("Digite o nome de uma peça do xadrez");

switch(nomeDaPeca.toLowerCase()){
    case "peao":
        window.alert("Se movimenta em 1 casa na vertical");
    break;
    case "torre":
        window.alert("Movimento na vertical e na horizontal");
    break;
    case "cavalo":
        window.alert("Movimento em L");
    break;
    case " bispo":
        window.alert("Movimento em diagonal");
    break;
    case "rainha":
        window.alert("Movimento em vertical, horizontal e em diagonal");
    break;
    case "rei":
        window.alert("Se movimenta em 1 casa em qualquer direção");
    break;
    default:
        window.alert("Erro! Nome de peça inválido...")
    break;
}



