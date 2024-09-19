let cor1 = prompt("Digite a primeira cor (vermelho, azul ou amarelo): ");
let cor2 = prompt("Digite a segunda cor (vermelho, azul ou amarelo): ");

if (cor1 === "vermelho" && cor2 === "azul") {
  alert("Roxo.");
} else if (cor1 === "azul" && cor2 === "amarelo") {
  alert("Verde.");
} else if (cor1 === "vermelho" && cor2 === "amarelo") {
  alert("Laranja.");
} else if ((cor1 === "vermelho" && cor2 === "vermelho") || (cor1 === "azul" && cor2 === "azul") || (cor1 === "amarelo" && cor2 === "amarelo")) {
  alert("A cor é a mesma que foi inserida."); /*caso coolocar a msm cor, vai sair a msm cor colocadaa */
} else {
  alert("Mistura de cores não deu certo."); /*caso não coloque nada, essa mensagem vai aparecer */
}