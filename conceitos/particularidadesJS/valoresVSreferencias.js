// Valores vs Referências em JavaScript

// Em JavaScript, os tipos de dados podem ser classificados em dois grupos principais:
// tipos primitivos (valores) e tipos de referência (objetos).

// Tipos Primitivos (Valores)
let a = 10; // número
let b = a; // b recebe uma cópia do valor de a
b = 20; // alterando b não afeta a

console.log(a); // 10
console.log(b); // 20
// Aqui, 'a' e 'b' são independentes. Alterar 'b' não afeta 'a'.

// Tipos de Referência (Objetos)
let obj1 = { nome: "Alice" }; // obj1 é um objeto
let obj2 = obj1; // obj2 referencia o mesmo objeto que obj1
obj2.nome = "Bob"; // alterando a propriedade 'nome' através de obj2
console.log(obj1.nome); // "Bob"
console.log(obj2.nome); // "Bob"
// Aqui, 'obj1' e 'obj2' referenciam o mesmo objeto na memória. Alterar o objeto através de uma referência afeta a outra.

const arr1 = [1, 2, 3]; // arr1 é um array (objeto)
function adicionarNoArray(valor, arr) {
  arr.push(valor);
}

adicionarNoArray(4, arr1);
console.log(arr1); // [1, 2, 3, 4]

// Resumo:
// - Tipos primitivos (números, strings, booleanos, null, undefined, símbolos) são copiados por valor.
// - Tipos de referência (objetos, arrays, funções) são copiados por referência.
// Isso significa que alterações em tipos primitivos não afetam outras variáveis, enquanto alterações em tipos de referência podem afetar todas as referências ao mesmo objeto.
