// Array, Vetores, Listas e Matrizes em JavaScript
// Em JavaScript, arrays são usados para armazenar múltiplos valores em uma única variável.
// Eles são dinâmicos, o que significa que podem crescer e encolher conforme necessário.
// Aqui está um exemplo básico de como criar e manipular arrays:

const notas = [
  [5, 8, 4, 6],
  [9, 7, 4, 6],
  [6, 8, 5, 4],
];

for (let i = 0; i < notas.length; i++) {
  const notaAlunos = notas[i];
  console.log(notaAlunos);

  for (let j = 0; j < notaAlunos.length; j++) {
    console.log(notaAlunos[j]);
  }
}
