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
      throw Error(
        `Para adicionar produto, o valor de ser maior ou diferente de 0`,
      );
    }
    this.stock += qtd;
    console.log(`Você adicionou ${qtd} unidade(s) do produto ${this.name}.`);
  }

  verificarEstoque() {
    return `A quantidade atual de estoque do produto ${this.name} é ${this.stock}.`;
  }
}

// Criando uma instância da classe produto

const produto1 = new Produto("Notebook", 50);
const produto2 = new Produto("Smartphone", 30);

// Acessando os atributos e métodos do objeto
console.log("Informações dos produtos:");
console.log(produto1);
console.log(produto2);
console.log("-".repeat(30));

// Comprando 5 unidades dos produtos
console.log("Comprando 5 unidades dos produtos:");
produto1.comprar(5);
produto2.comprar(5);
console.log("-".repeat(30));

// Acessando nova informações dos produtos
console.log("Informações dos produtos após a compra:");
console.log(produto1);
console.log(produto2);
console.log("-".repeat(30));

// Adicionando 10 unidades dos produtos
console.log("Adicionando 10 unidades dos produtos:");
produto1.adicionar(10);
produto2.adicionar(10);
console.log("-".repeat(30));

// Acessando nova informações dos produtos
console.log("Informações dos produtos após a adição:");
console.log(produto1);
console.log(produto2);
console.log("-".repeat(30));

console.log(produto1.verificarEstoque());
console.log(produto2.verificarEstoque());

// Teste de erro ao comprar/adicionar produtos
console.log("Testando erros ao comprar/adicionar produtos:");
produto1.comprar(-5);
produto2.adicionar(-10);

console.log("Fim da aula 01");
