// Estruturas Complexas - Aula 03
// Exemplo: Exiba o nome do aluno, as notas e as médias. Cálculo da média das notas de um aluno

const aluno = {
  nome: "Lucas",
  notas: [4, 6, 6, 10],
};

let soma = 0;
let nota;
let isAprovado;

for (let i = 0; i < aluno.notas.length; i++) {
  nota = aluno.notas[i];
  console.log(`Nota: ${nota}`);
  soma += nota;
}

let media = soma / aluno.notas.length;
isAprovado = media >= 7 ? "aprovado" : "reprovado";

console.log(
  `Média das notas de ${aluno.nome}: ${media.toFixed(2)} \nO aluno ${aluno.nome} está ${isAprovado}.`,
);
