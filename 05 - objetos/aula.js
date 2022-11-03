const alysson = {
    nome: 'Alysson',
    idade: 100,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};



function main() {
    console.log(alysson.nome)
    console.log(alysson.idade);
    console.log(alysson);

    alysson.altura = 5.00;
    console.log(alysson);

    alysson.descrever();

    alysson.descrever = function () {
        console.log(`Meu nome é ${this.nome}`);
    }

    alysson.descrever();

    const atributo = 'idade';
    console.log(alysson[atributo]);
    console.log(alysson['idade']);
    alysson['nome'] = 'teste';
    console.log(alysson.nome);
}
main();
