let salarioBruto = window.prompt("Digite o seu salário bruto: ");
let descontoInss;
let descontoIr;

//Desconto INSS

if(salarioBruto <= 1556.94 && salarioBruto > 0){
    descontoInss = ((8 / 100) * salarioBruto);
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    descontoInss = ((9/100) * salarioBruto);
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    descontoInss = ((11/100) * salarioBruto);
}else{
    descontoInss = 570.88;
}

//Desconto IR

if(salarioBruto >= 1903.99 || salarioBruto <= 2826.65){
    descontoIr = (((7.5/100) * salarioBruto) + 142.80);
}else if(salarioBruto >= 2826.66 || salarioBruto <= 3751.05){
    descontoIr = (((15/100) * salarioBruto) + 354.80);
}else if(salarioBruto >= 3751.06 || salarioBruto <= 4664.68){
    descontoIr = (((22.5/100) * salarioBruto) + 636.13);
}else{
    descontoIr = (((27.5/100) * salarioBruto) + 869.36);
}

salarioLiquido = salarioBruto - (descontoInss + descontoIr);

window.alert(salarioLiquido);
