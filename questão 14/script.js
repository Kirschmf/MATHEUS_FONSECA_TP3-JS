const x = parseInt(prompt("Digite um número inteiro e positivo: "));
const a = parseFloat(prompt("Digite um valor real: "));
const b = parseFloat(prompt("Digite um valor real: "));
const c = parseFloat(prompt("Digite um valor real: "));

switch (x) {
  case 1:

    const sortedValuesCrescente = [a, b, c].sort((a, b) => a - b);
    alert(`Os valores em ordem crescente são: ${sortedValuesCrescente.join(', ')}`);
    break;
  case 2:

    const sortedValuesDecrescente = [a, b, c].sort((a, b) => b - a);
    alert(`Os valores em ordem decrescente são: ${sortedValuesDecrescente.join(', ')}`);
    break;
  case 3:

    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    const middle = [a, b, c].find(val => val !== max && val !== min);
    alert(`Os valores são: ${min}, ${max}, ${middle}`);
    break;
  default:
    alert("O valor de x não corresponde a nenhuma das condições acima.");
}