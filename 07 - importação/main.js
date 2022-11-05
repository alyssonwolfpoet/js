//const funcoes = require('./funcoes-auxiliares');
const { gets, print } = require('./funcoes-auxiliares'); //utiliza o conceito de destructuring
//console.log(funcoes);

//const pessoa = {
//    nome: "vitor"
//}

//const {nome} = pessoa;
//const nome = pessoa.nome;

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);

}

print(numerosSorteados);

let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if(numerosSorteado > maiorValor){
        maiorValor = numerosSorteado;
    }
}
console.log(maiorValor);