const { gets, print } = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
//const numerosSorteados = [];
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numerosSorteado = gets();
    //numerosSorteados.push(numerosSorteado);
    if(numerosSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numerosSorteado;
    }

}


console.log(maiorValorEncontrado);