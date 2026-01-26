// Aula 3 - Percorrendo Arrays com Loops e Criando um Novo Array a partir de Outro usando método push()

let numeros = [2, 23, 56, 87, 75, 23, 6, 100, 230, 400];
let numerosDobro = [];

for (let i = 0; i < numeros.length; i++) {
  let dobro = numeros[i] * 2;
  numerosDobro.push(dobro);
}

console.log(`Números original: ${numeros}`);
console.log(`Números ao dobro: ${numerosDobro}`);
