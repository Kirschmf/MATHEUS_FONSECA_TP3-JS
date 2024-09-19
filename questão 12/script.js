function calcularDesconto(valorCompra, tipoConsumidor) {
    let desconto = 0;

    if (tipoConsumidor === 'A') { // Gestante
        if (valorCompra >= 80) {
            desconto = 0.20; // 20% de desconto
        } else {
            desconto = 0.15; // 15% de desconto
        }
    } else if (tipoConsumidor === 'B') { // Aposentado
        if (valorCompra >= 80) {
            desconto = 0.15; // 15% de desconto
        } else {
            desconto = 0.10; // 10% de desconto
        }
    } else if (tipoConsumidor === 'C') { // Pensionista
        if (valorCompra >= 80) {
            desconto = 0.10; // 10% de desconto
        } else {
            desconto = 0.05; // 5% de desconto
        }
    } else {
        alert("Erro: Tipo de consumidor inválido!");
        return; 
    }


    let valorFinal = valorCompra - (valorCompra * desconto);
    
    alert("O valor final da compra, com desconto aplicado, é: R$ " + valorFinal.toFixed(2));
}

let valorCompra = parseFloat(prompt("Digite o valor total da compra:"));
let tipoConsumidor = prompt("Digite o código do consumidor (A para Gestante, B para Aposentado, C para Pensionista):").toUpperCase();

calcularDesconto(valorCompra, tipoConsumidor);
