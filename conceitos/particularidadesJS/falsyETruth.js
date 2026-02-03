// Entendendo Falsy e Truthy em JavaScript

// Em JavaScript, valores podem ser classificados como "falsy" ou "truthy" quando avaliados em um contexto booleano, como em condicionais.

// Valores Falsy
// Os seguintes valores são considerados falsy, ou seja, eles são avaliados como false:
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

falsyValues.forEach((value) => {
  if (!value) {
    console.log(`${value} é falsy`);
  } else {
    console.log(`${value} é truthy`);
  }
});

// Valores Truthy
// Quase todos os outros valores são considerados truthy, ou seja, eles são avaliados como true:
const truthyValues = [true, 1, -1, 1n, "hello", [], {}, function () {}];

truthyValues.forEach((value) => {
  if (value) {
    console.log(`${value} é truthy`);
  } else {
    console.log(`${value} é falsy`);
  }
});

// Exemplos práticos
if ("") {
  console.log("Esta string vazia é truthy");
} else {
  console.log("Esta string vazia é falsy");
}
if (42) {
  console.log("O número 42 é truthy");
} else {
  console.log("O número 42 é falsy");
}

// Resumo:
// - Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// - Truthy: Quase todos os outros valores
// Compreender a diferença entre falsy e truthy é crucial para evitar erros em condicionais e expressões booleanas em JavaScript.
