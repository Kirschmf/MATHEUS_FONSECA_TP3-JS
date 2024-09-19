const passoInicial = parseInt(prompt("Digite o passo que você deseja começar (1-10): "));

const instrucoes = [
  "Passo 1: Ligue a máquina de café.",
  "Passo 2: Selecione o tipo de café.",
  "Passo 3: Coloque o café em grãos na máquina de torrar.",
  "Passo 4: Torre o café.",
  "Passo 5: Moa o café torrado até que esteja bem fino, parecendo pó.",
  "Passo 6: Coloque o café moído na máquina de café.",
  "Passo 7: Adicione água à máquina de café.",
  "Passo 8: Selecione a quantidade de café que você deseja.",
  "Passo 9: Espere o café ser preparado pela máquina.",
  "Passo 10: Sirva o café!"
];

switch (passoInicial) {
  case 1:
    for (let i = 0; i < instrucoes.length; i++) {
      alert(instrucoes[i]);
    }
    break;
  case 2:
    for (let i = 1; i < instrucoes.length; i++) {
      alert(instrucoes[i]);
    }
    break;
  case 3:
    for (let i = 2; i < instrucoes.length; i++) {
      alert(instrucoes[i]);
    }
    break;
  case 4:
    for (let i = 3; i < instrucoes.length; i++) {
      alert(instrucoes[i]);
    }
    break;
  case 5:
    for (let i = 4; i < instrucoes.length; i++) {
      alert(instrucoes[i]);
    }
    break;
  case 6:
    for (let i = 5; i < instrucoes.length; i++) {
      alert(instrucoes[i]);
    }
    break;
  case 7:
    for (let i = 6; i < instrucoes.length; i++) {
      alert(instrucoes[i]);
    }
    break;
  case 8:
    for (let i = 7; i < instrucoes.length; i++) {
      alert(instrucoes[i]);
    }
    break;
  case 9:
    for (let i = 8; i < instrucoes.length; i++) {
      alert(instrucoes[i]);
    }
    break;
  case 10:
    alert(instrucoes[9]);
    break;
  default:
    alert("Passo infelizmente inválido. Por favor, tente novamente.");
}