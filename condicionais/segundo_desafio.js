/*faça um programa para calcular o valor  de uma viagem.

você terá 5 variaveis. sendo elas:
1 - preço do etanol;
2 - preço do combustivel;
3 - tipo combustivel que esta no carro;
4 - gasto médio de combustivel dp carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem

*/

//alt + shift +F

/*
aspas dupla ""
aspa simples ''
acento invertido craze ``
*/
const precoEtanol = 2.00;
const precoGasolina = 4.00;
const kmPorLitros = 10;
const distanciaEmKm = 200;
const tipoCombustivel = 'Etanol';
const listrosConsumido = distanciaEmKm / kmPorLitros;

const valorGasto = listrosConsumido * precoCombustivel;
//console.log(valorGasto.toFixed(2));


if (tipoCombustivel === 'Etanol') {
    const valorGasto = listrosConsumido * precoEtanol;
    console.log(`valor gasto do Etanol: ${valorGasto.toFixed(2)}`);
} else {
    const valorGasto = listrosConsumido * precoGasolina;
    console.log(`valor gasto da gasolina: ${valorGasto.toFixed(2)}`);
}