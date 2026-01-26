import { prompt } from "../../prompt.js";

/*
  O loop while é utilizado para repetir um bloco de código enquanto uma
  condição for verdadeira. Neste exemplo, o programa solicita ao usuário
  um número e exibe a tabuada desse número de 0 a 50. Se o usuário inserir um
  valor inválido (não numérico ou menor ou igual a zero), o programa exibirá
  uma mensagem de erro e encerrará a execução.
*/

const input = prompt();

let number = Number(input("Digite um número: "));
let account = 0;

while (account <= 50) {
  if (isNaN(number) || number <= 0) {
    console.log("Número inválido");
    break;
  } else {
    console.log(`${number} * ${account} = ${number * account}`);
    account++;
  }
}

console.log("Fim do programa");
