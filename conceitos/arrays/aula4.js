// Aula 4 - Exemplo 4: Identificando o dia da semana atual usando arrays e loops

const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const today = new Date().getDay();

const diaAtual = diasDaSemana[today];

console.log(`Hoje é: ${diaAtual}`);
console.log(`Índice do dia da semana: ${today + 1}`);
