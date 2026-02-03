// Function Declaration

function saudação(nome) {
  return `Olá, ${nome}! Seja bem-vindo(a)!`;
}

console.log("function declaration: ", saudação("Lucas"));

const saudação2 = function (nome) {
  return `Olá, ${nome}! Seja bem-vindo(a)!`;
};

console.log("function expression: ", saudação2("Lucas"));

const saudação3 = (nome) =>
  `Olá, eu sou ${nome} e fui declarado via arrow function.`;

console.log("arrow function: ", saudação3("Lucas"));
