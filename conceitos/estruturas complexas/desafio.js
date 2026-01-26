const alunos = [
  {
    nome: "Lucas",
    notas: [6, 9, 8, 8],
  },
  {
    nome: "Julianne",
    notas: [8, 7, 8, 9],
  },
  {
    nome: "Sophia",
    notas: [9, 8, 7, 8],
  },
];
let media = 0;

for (let i = 0; i < alunos.length; i++) {
  let somaNotas = 0;

  for (let j = 0; j < alunos[i].notas.length; j++) {
    somaNotas += alunos[i].notas[j];
    media = somaNotas / alunos[i].notas.length;
  }
  console.log(`Média das notas de ${alunos[i].nome}: ${media.toFixed(2)}`);
}
