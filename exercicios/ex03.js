import { prompt } from "../prompt.js";

// Exercício: Solicitar um número ao usuário e exibir a tabuada desse número de 1 a 100, formatando a saída a cada 10 linhas.

const input = prompt();

const number = Number(input("Digite um número para ver sua tabuada: "));

for (let i = 1; i <= 100; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
  if (i % 10 === 0) {
    console.log("-".repeat(30));
  }
}
