// Entendo o operador de curto-circuito em JavaScript

// Em JavaScript, os operadores lógicos "&&" (E lógico) e "||" (OU lógico) podem ser usados para realizar operações de curto-circuito. Isso significa que a avaliação de expressões pode parar assim que o resultado final for determinado.

// Operador "||" (OU lógico)
// O operador "||" retorna o primeiro valor truthy encontrado ou o último valor se todos forem falsy.
let valor1 = null;
let valor2 = "Olá";
let valor3 = "Mundo";
let resultadoOU = valor1 || valor2 || valor3;
console.log(resultadoOU); // "Olá"
// Aqui, como valor1 é null (falsy), a avaliação continua para valor2, que é "Olá" (truthy). Portanto, resultadoOU recebe "Olá".

// Operador "&&" (E lógico)
// O operador "&&" retorna o primeiro valor falsy encontrado ou o último valor se todos forem truthy.
let valorA = "JavaScript";
let valorB = "";
let valorC = "ES6";
let resultadoE = valorA && valorB && valorC;
console.log(resultadoE); // ""
// Aqui, como valorB é uma string vazia (falsy), a avaliação para e resultadoE recebe "".

// Exemplos práticos
function verificarNome(nome) {
  return nome || "Nome padrão";
}
console.log(verificarNome("Alice")); // "Alice"
console.log(verificarNome("")); // "Nome padrão"

function verificarIdade(idade) {
  return idade && `Idade: ${idade}`;
}
console.log(verificarIdade(25)); // "Idade: 25"
console.log(verificarIdade(0)); // 0

// Resumo:
// - O operador "||" retorna o primeiro valor truthy ou o último valor se todos forem falsy.
// - O operador "&&" retorna o primeiro valor falsy ou o último valor se todos forem truthy.
// Esses operadores são úteis para definir valores padrão e controlar o fluxo de avaliação em expressões lógicas.
