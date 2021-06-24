let angulo1 = 60;
let angulo2 = 120;
let angulo3 = 180;
let soma = angulo1 + angulo2 + angulo3;

if(soma == 180){
    console.log("true");
}else{
    console.log("false");
}

if(angulo1 >= 180 || angulo2 >= 180 || angulo3 >= 180){
    console.log("Erro! Um dos ângulos não pode ser parte de um triângulo D:");
}