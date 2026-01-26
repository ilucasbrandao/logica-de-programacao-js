// Aula 08 - Soma dos números ímpares em um array
// Dado o array abaixo, calcule a soma de todos os números ímpares presentes no array e exiba o resultado no console.

const numbers = [2, 3, 7, 8, 11, 35, 50, 72, 91, 100];

let soma = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) {
    soma += numbers[index];
    console.log(`Número impar: ${numbers[index]}`);
  }
}

console.log(`A soma dos números ímpares é: ${soma}`);
