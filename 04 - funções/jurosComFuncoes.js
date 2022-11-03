/* 
3)Elabore um algoritmo de calcule o que deve ser pago por um produto,considerando o preço de etiqueta e a escolha da condição de pagamento.
Utiliza os códigos da tabela a seguir para ler qual condição de pagamento escolhido e efetuar o cálculo adequado.

Código  condição de pagamento;
1 À Vista Débito, recebe 10% de desconto;
2 À Vista no dinheiro ou Pix, recebe 15% de desconto;
3 Em duas vezes, preço normal da etiqueta sem juros;
4 Acima de duas vezes, preço normal da etiqueta mais juros de 10%;

*/

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100))
}

function main() {

    const precoEtiquea = 100;
    const formaDePagamento = 4;

    if (formaDePagamento === 1) {
        console.log("À Vista Débito, recebe 10% de desconto;");
        console.log(aplicarDesconto(precoEtiquea, 10));
        //console.log(precoEtiquea - (precoEtiquea/10))
    } else if (formaDePagamento === 2) {
        console.log("À Vista no dinheiro ou Pix, recebe 15% de desconto;");
        console.log(aplicarDesconto(precoEtiquea, 15));
    } else if (formaDePagamento === 3) {
        console.log("Em duas vezes, preço normal da etiqueta sem juros;");
        console.log(precoEtiquea);
    } else {
        console.log("Acima de duas vezes, preço normal da etiqueta mais juros de 10%;");
        console.log(aplicarJuros(precoEtiquea, 10));
    }

}

main();