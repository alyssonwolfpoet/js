function EscravaMeuNome(nome) {
    console.log("Meu nome é " + nome);
}

function EscravaMeuNomeReturn(nome) {
    return `Meu nome é ${nome} `;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(EscravaMeuNomeReturn("Alysson") + "sou Maior de idade");
    } else {
        console.log(EscravaMeuNomeReturn("Alysson") + "sou Menor de idade");
    }
    console.log("idade : " + idade);
}


function main() {
    EscravaMeuNome("Alysson");
    verificarIdade(24);
}

main();