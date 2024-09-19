const votosRoboRat = parseInt(prompt("Digite a quantidade de votos para o RoboRat: "));
const votosSuperKeyboard = parseInt(prompt("Digite a quantidade de votos para o SuperKeyboard: "));
const votosInvalidos = parseInt(prompt("Digite a quantidade de votos inválidos: "));

const totalVotos = votosRoboRat + votosSuperKeyboard + votosInvalidos;

const porcentagemRoboRat = (votosRoboRat / totalVotos) * 100;
const porcentagemSuperKeyboard = (votosSuperKeyboard / totalVotos) * 100;
const porcentagemInvalidos = (votosInvalidos / totalVotos) * 100;

const totalVotosValidos = votosRoboRat + votosSuperKeyboard;
const porcentagemRoboRatValidos = (votosRoboRat / totalVotosValidos) * 100;
const porcentagemSuperKeyboardValidos = (votosSuperKeyboard / totalVotosValidos) * 100;

alert(`Porcentagem de votos para o RoboRat: ${porcentagemRoboRat.toFixed(2)}%`);
alert(`Porcentagem de votos para o SuperKeyboard: ${porcentagemSuperKeyboard.toFixed(2)}%`);
alert(`Porcentagem de votos inválidos: ${porcentagemInvalidos.toFixed(2)}%`);
alert(`Porcentagem de votos para o RoboRat (considerando apenas votos válidos): ${porcentagemRoboRatValidos.toFixed(2)}%`);
alert(`Porcentagem de votos para o SuperKeyboard (considerando apenas votos válidos): ${porcentagemSuperKeyboardValidos.toFixed(2)}%`);

if (votosRoboRat > votosSuperKeyboard) {
  alert("O novo mascote do time será o RoboRat!");
} else if (votosSuperKeyboard > votosRoboRat) {
  alert("O novo mascote do time será o SuperKeyboard!");
} else {
  alert("Houve um empate! O time precisará decidir o novo mascote de outra forma.");
}