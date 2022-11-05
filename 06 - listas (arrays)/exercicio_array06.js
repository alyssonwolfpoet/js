//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
const numerosPares = [];



for (let i = 0; i < 10; i++) {

    const numeroPar = i % 2 === 0;

    if (numeroPar) {

        numerosPares.push(i);

    }

}



console.log(numerosPares);
