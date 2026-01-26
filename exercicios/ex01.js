// Exercício: Simular o lançamento de dois dados até que os valores sejam iguais. Exibir quantas tentativas foram necessárias para isso.

let dado1 = Math.floor(Math.random() * (6 - 0 + 1) + 0);
let dado2 = Math.floor(Math.random() * (6 - 0 + 1) + 0);
let acc = 0;
console.log(`Iniciando o contador em ${acc}`);

if (dado1 == dado2) {
  console.log(
    `Programa encerrado.\n Foi necessário ${acc}x para os números fosse sorteados iguais.`,
  );
} else {
  while (dado1 !== dado2) {
    console.log(dado1, dado2);
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;
    acc++;
  }
}
console.log(`Resultado final: ${dado1} e ${dado2}`);
console.log(
  `Programa encerrado.\nFoi necessário ${acc}x para os números fosse sorteados iguais.`,
);
