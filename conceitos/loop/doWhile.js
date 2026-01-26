// Exemplo de uso do loop do...while em JavaScript
// Solicita ao usuário que escolha uma opção para continuar ou encerrar o loop

import { prompt } from "../../prompt.js";

const input = prompt();

console.log(
  `Selecione a opção para continuar\n1 - Continuar o loop\n2 - Encerrar o loop`,
);
let opcao = Number(input(`Qual opção você escolhe: `));

do {
  if (opcao < 1 || opcao > 2 || isNaN(opcao)) {
    console.log("Escolha uma opção válida.");
    break;
  }

  console.log(`Opção ${opcao} selecionada\nContinuamos ...`);
  opcao = Number(input(`Qual opção você escolhe: `));
} while (opcao != 2);

console.log(`Opção ${opcao} selecionada\nEncerrando o programa ...`);
