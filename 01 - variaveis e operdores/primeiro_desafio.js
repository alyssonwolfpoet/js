/*faça um programa para calcular o valor  de uma viagem.

você terá 3 variaveis. sendo elas:
1 - preço do combustivel;
2 - gasto médio de combustivel dp carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem

*/
const precoCombustivel = 4.00;
const kmPorLitros = 10;
const distanciaEmKm = 200;

const listrosConsumido = distanciaEmKm / kmPorLitros;
const valorGasto = listrosConsumido * precoCombustivel;
//console.log(valorGasto.toFixed(2));
console.log(`valor gasto da gasolina: ${valorGasto.toFixed(2)}`);
