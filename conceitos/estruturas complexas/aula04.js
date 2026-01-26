// Estruturas complexas - Arrays de objetos com arrays
// Exemplo: Exiba o nome dos alunos e suas respectivas notas

const alunos = [
  {
    nome: "Lucas",
    notas: [7, 8, 8, 9],
  },
  {
    nome: "Julianne",
    notas: [9, 7, 9, 7],
  },
];

let nota;
console.log("-".repeat(20));

for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i].nome);
  for (let j = 0; j < alunos[i].notas.length; j++) {
    console.log(alunos[i].notas[j]);
  }

  console.log("-".repeat(20));
}
