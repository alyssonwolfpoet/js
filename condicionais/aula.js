//const eNumeroPar = true;
//const eNumeroPar = numero % 2;
/*
= atribui
== compara sem tipo 
const eNumeroPar = (numero % 2) === 0;
=== compara com tipo 
const eNumeroPar = (numero % 2) === "0";

*/
const numero = 10;
const eNumeroPar = (numero % 2) === 0;
console.log(`numero ${numero} é par?`);
console.log("resposta:" + eNumeroPar);

console.log('\n=====\n');
if (numero === 0) {
    console.log('numero é invalido!');
} else if (eNumeroPar) {
    console.log('numero é par :)');
} else { console.log("Erro") }

