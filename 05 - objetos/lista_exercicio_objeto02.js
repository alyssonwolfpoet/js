/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() {
        const imc = this.calcularImc();
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

}

const jose = new Pessoa("jose", 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarImc());
console.log("\n");

const renan = new Pessoa("renan", 63, 1.75);
console.log(renan);
console.log(renan.calcularImc());
console.log(renan.classificarImc());
console.log("\n");


const vitor = new Pessoa("vitor", 60, 1.69);
console.log(vitor);
console.log(vitor.calcularImc());
console.log(vitor.classificarImc());

