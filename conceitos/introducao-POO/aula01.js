// Introdução à Programação Orientada a Objetos (POO)

// Em POO, um objeto é uma instância de uma classe que encapsula dados e comportamentos relacionados.
// Vamos criar uma classe simples chamada "Carro" para ilustrar os conceitos básicos de POO.

class Produto {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
  }

  comprar(qtd) {
    if (qtd > this.stock || qtd < 0) {
      throw Error(`Quantidade indisponível no estoque`);
    }

    this.stock -= qtd;
    console.log(`Você comprou ${qtd} unidade(s) do produto ${this.name}.`);
  }

  adicionar(qtd) {
    if (qtd <= 0) {
      return `Para adicionar produto, o valor de ser maior ou diferente de 0`;
    }
    this.stock += qtd;
  }
}

// Criando uma instância da classe produto

const produto1 = new Produto("Notebook", 50);
const produto2 = new Produto("Smartphone", 30);
