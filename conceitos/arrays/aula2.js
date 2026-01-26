// Aula 2 - Adicionando elementos em um array sem usar push()
// Desafio: Crie um array de nomes, adicione um novo nome ao array sem usar o método push(),
// exiba cada nome usando um loop e mostre o tamanho atualizado do array.

import { prompt } from "../../prompt.js";
let input = prompt();

let nomes = ["Lucas", "Julianne", "Sophia", "Maria"];

let nomeNovo = input("Digite um novo nome: ");

nomes[nomes.length] = nomeNovo;

for (let i = 0; i < nomes.length; i++) {
  console.log(`nome: ${nomes[i]}`);
}

console.log(`A lista de nomes tem ${nomes.length} elementos`);
