/*
1) Faça um algorítimo que dado os 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a 
sua média e a sua classificação conforme a tabela abaixo

Média = (nota 1 + nota2 + nota 3) / 3;

classificaçao 
- Média menor que 5, reprovação;
- Média entre 5 a 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 07;
const nota2 = 07;
const nota3 = 08;

const media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
    console.log(`Aluno aprovado! Média: ${media.toFixed(2)}`);
} else if (media >= 5 && media <= 7) {
    console.log(`Aluno recuperação! Média: ${media.toFixed(2)}`);
} else {
    console.log(`Aluno reprovado! Média: ${media.toFixed(2)}`);
}