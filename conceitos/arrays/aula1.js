// Aula 1 - Exemplo 1: Trabalhando com arrays em JavaScript
// Lógica de Programção - desafio está solicitando que você crie um array de nomes, exiba cada nome usando um loop,
// adicione um novo nome ao array e exiba o tamanho atualizado do array.

import { prompt } from "../../prompt.js";
let input = prompt();

let nomes = ["Lucas", "Julianne", "Sophia", "Maria"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

nomes.push(input("Digite um novo nome: "));

console.log(`A lista de nomes tem ${nomes.length} elementos.`);
