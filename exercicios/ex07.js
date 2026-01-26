// Exercício 7: Laço com Continue e Break
// Escreva um programa que utilize um laço para contar de 0 a 100.
// Para cada número, se o número for múltiplo de 10, utilize a instrução 'continue' para pular a iteração atual.
// Caso contrário, imprima o número.
// Além disso, gere um número aleatório entre 1 e 100 em cada iteração e, se o número atual for múltiplo desse número aleatório, utilize a instrução 'break' para sair do laço.

for (let i = 0; i <= 100; i++) {
  if (i % 10 === 0) {
    continue;
  }
  console.log(i);

  let numberSorted = Math.floor(Math.random() * 100) + 1;
  console.log(`O número sorteado foi: ${numberSorted}`);
  if (i % numberSorted === 0) {
    break;
  }
}
