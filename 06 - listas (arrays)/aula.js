const aluno = 'joao;' //atribuição normal
const aluno2 =  { //objeto literal sem clase
    nome: 'joao'
}
const alunos = ["joão","victor","marinwa"];

console.log(alunos);
console.log(alunos[2]);

alunos.push('Renan');
alunos[4] = 'vinicios';
console.log(alunos);

alunos[3] = 'renan';
console.log(alunos);
console.log("\n=================\n");
const alunosVazia = [];
alunosVazia.push('teste');
alunosVazia.push(10);
console.log(alunosVazia);

console.log("\n=================\n");
const alunos3 = ['1','2','3'];
console.log(alunos3.pop());
console.log(alunos3);
console.log(alunos3.shift());
console.log(alunos3);
