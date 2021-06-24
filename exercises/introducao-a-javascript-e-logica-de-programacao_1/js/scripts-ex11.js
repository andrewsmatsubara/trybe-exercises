let salarioBruto = window.prompt("Digite o seu salário bruto: ");

if(salarioBruto <= 1556.94 && salarioBruto > 0){
    salarioLiquido = salarioBruto - ((8 / 100) * salarioBruto)
}
let inss;
let ir;
let salarioLiquido = salarioBruto - inss - ir;

