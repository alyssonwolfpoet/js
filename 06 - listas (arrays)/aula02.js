const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);


console.log(notas.length);

console.log("\n=================\n");
const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(soma / 5);
notas.push(8);

console.log("\n=================\n");
//estrutura de repetiçao
let cont = 0;
for (let i = 0; i < notas.length; i++) {
    cont+= notas[i];
    console.log("nota ",i, ":", notas[i]);
}
console.log("somas das notas: ",cont);
console.log("media das notas: ",cont / notas.length);