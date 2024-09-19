const altura = parseFloat(prompt("Digite sua altura em metros: "));
const peso = parseFloat(prompt("Digite seu peso em quilos: "));

const imc = peso / (altura * altura);

let classificacao = '';

if (imc < 16) {
  classificacao = 'Baixo peso (grau I)';
} else if (imc >= 16 && imc <= 16.99) {
  classificacao = 'Baixo peso (grau II)';
} else if (imc >= 17 && imc <= 18.49) {
  classificacao = 'Baixo peso (grau III)';
} else if (imc >= 18.5 && imc <= 24.99) {
  classificacao = 'Peso adequado';
} else if (imc >= 25 && imc <= 29.99) {
  classificacao = 'Sobrepeso';
} else if (imc >= 30 && imc <= 34.99) {
  classificacao = 'Obesidade (grau I)';
} else if (imc >= 35 && imc <= 39.99) {
  classificacao = 'Obesidade (grau II)';
} else if (imc >= 40) {
  classificacao = 'Obesidade (grau III)';
}

alert(`Seu IMC é ${imc.toFixed(2)} e sua classificação é ${classificacao}`);