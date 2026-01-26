// Aula 5 - Exemplo 5: Calculando a soma dos elementos de um array usando loops

const numeros = [10, 20, 30, 40, 50];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(`A soma dos números do array é: ${soma}`);
