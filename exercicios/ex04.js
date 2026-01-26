// Exercício: Exibir todos os anos bissextos entre 1004 e 2024, e ao final exibir a quantidade total de anos bissextos exibidos.

let acc = 0;
for (let ano = 1004; ano <= 2024; ano += 4) {
  console.log(ano);
  acc++;
}
console.log(`Total de anos bissextos: ${acc}`);
