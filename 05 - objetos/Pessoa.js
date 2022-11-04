class Pesssoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const alysson = new Pesssoa();
const alysson2 = new Pesssoa('alysson2',100);

alysson.nome = "Alysson";
alysson.idade = 100;
alysson.descrever();
console.log(alysson2);