let dado1 = Math.floor(Math.random() * 10) + 1;
let dado2 = Math.floor(Math.random() * 10) + 1;

let soma = dado1 + dado2;
let contador = 0;

while (contador <= 10) {
  if (soma % 2 === 0) {
    contador++;
  }
  console.log(dado1, dado2, soma);
  dado1 = Math.floor(Math.random() * 10) + 1;
  dado2 = Math.floor(Math.random() * 10) + 1;
  soma = dado1 + dado2;
}

console.log("Número de somas pares encontradas: " + contador);

let qtdeTentativas = 0;
let somaDosPares = 0;
while (true) {
  let dadoA = Math.floor(Math.random() * 10) + 1;
  let dadoB = Math.floor(Math.random() * 10) + 1;

  console.log(dadoA, dadoB, qtdeTentativas, somaDosPares);

  // ignorando quando os dados são iguais
  if (dadoA === dadoB) {
    continue;
  }
  qtdeTentativas++;

  if ((dadoA + dadoB) % 2 === 0) {
    somaDosPares++;
  }

  if (somaDosPares === 10) {
    console.log(
      "Número de tentativas para encontrar 10 somas pares: " + qtdeTentativas,
    );
    break;
  }
}
