function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
    //const imc = peso/(altura**2); || const imc = peso/(altura*altura);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ` Abaixo de 18.5 Abaixo do peso: ${imc}`;
    } else if (imc >= 18.5 && imc < 25) {
        return ` Entre 25 e 30 acima do peso: ${imc}`;
    } else if (imc >= 25 && imc <= 30) {
        return ` Entre 25 e 30 acima do peso: ${imc}`;
    } else if (imc >= 30 && imc <= 40) {
        return ` Entre 30 e 40 Obeso: ${imc}`;
    } else if (imc > 40) {
        return ` Acima de 40 Obesidade grave: ${imc}`;
    } else {
        return ` fora do paramentro de comparação ERRO!: ${imc}`;
    }
}


function main() {
    const peso = 80;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}
main();
