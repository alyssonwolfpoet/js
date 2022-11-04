class Pesssoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const alysson = new Pesssoa();
alysson.nome = "Alysson";
alysson.idade = "100";

alysson.descrever();