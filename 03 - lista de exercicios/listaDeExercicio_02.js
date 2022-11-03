/*

2) O IMC - Indice de massa corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

elabore um algoritimo que dado o peso e a altura de um adulto mostre sua consição de acordo coma a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 Obeso
- Acima de 40 Obesidade grave
*/

const peso = 80;
const altura = 1.75;
const imc = peso/Math.pow(altura,2); //const imc = peso/(altura**2); || const imc = peso/(altura*altura);
//Math.pow(altura,2);
//console.log(imc);

if (imc <18.5) {
    console.log(` Abaixo de 18.5 Abaixo do peso: ${imc}`); 
} else if (imc >=18.5 && imc < 25) {
    console.log(` Entre 25 e 30 acima do peso: ${imc}`);
}else if (imc >=25 && imc <= 30) {
    console.log(` Entre 25 e 30 acima do peso: ${imc}`);
}else if (imc >=30 && imc <= 40) {
    console.log(` Entre 30 e 40 Obeso: ${imc}`);
}else if (imc > 40) {
    console.log(` Acima de 40 Obesidade grave: ${imc}`);
}else{
    console.log(` fora do paramentro de comparação ERRO!: ${imc}`);
}
