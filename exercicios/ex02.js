import { prompt } from "../prompt.js";

// Exercício: Solicitar um número ao usuário e exibir todos os números pares de 0 até esse número. O programa deve continuar solicitando números até que o usuário decida sair.

const input = prompt();
let continuar = true;

while (continuar) {
  let number = input(`Digite um valor para ver os pares (ou 'sair'): `);
  if (number == "sair") break;

  if (isNaN(number) || number < 0) {
    console.log(`Erro: "${input}" não é um número válido ou é negativo.`);
  } else {
    console.log(`Exibindo números pares até ${number}:`);

    for (let i = 0; i <= number; i += 2) {
      console.log(i);
    }

    continuar = false;
  }
}
console.log("Programa encerrado.");
