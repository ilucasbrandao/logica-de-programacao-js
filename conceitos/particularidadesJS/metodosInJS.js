// Métodos são funções que estão associadas a objetos em JavaScript.
// Eles permitem que os objetos realizem ações ou comportamentos específicos.
// Aqui está um exemplo de um objeto com um método:

const produto = {
  nome: "Caneca",
  estoque: 20,
  vender: function (qtd) {
    if (qtd > this.estoque) {
      return `Quantidade insuficiente, tente um valor menor. Nosso estoque é ${this.estoque} ${this.nome}(s).`;
    } else {
      this.estoque -= qtd;
      return `Venda realizada com sucesso!\nEstoque atual é: ${this.estoque}`;
    }
  },
};

console.log(produto.vender(35));

// Quando se estiver trabalhando com métodos em JavaScript, é importante entender o uso do "this".
// O "this" refere-se ao objeto ao qual o método pertence.
// Nunca usar arrow function e sim function expression ou function declaration para declarar métodos,
// pois o "this" em arrow functions não se comporta como esperado em métodos de objetos.
