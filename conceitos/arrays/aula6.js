// Aula 6 - Exemplo 6: Somando apenas os números em um array com tipos mistos
// Desafio: Dado um array com diferentes tipos de dados, some apenas os números presentes no array e exiba cada número somado.

const arr = [4, 8, "Olá", true, 28, "45", "JavaScript", 50];
let soma = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    soma += arr[i];
    console.log(arr[i]);
  }
}
console.log(`A soma dos números do array é: ${soma} `);
