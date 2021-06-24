let nota = window.prompt("Digite a sua nota:");

if(nota >= 90){
    window.alert("A");
}else if(nota < 90 && nota >= 80){
    window.alert("B");
}else if(nota < 80 && nota >=70){
    window.alert("C");
}else if(nota < 70 && nota >= 60){
    window.alert("D");
}else if(nota < 60 && nota >=50){
    window.alert("E");
}else{
    window.alert("F");
} 