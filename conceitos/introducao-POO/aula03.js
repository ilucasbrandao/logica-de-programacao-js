class Produto {
  #stock;
  constructor(name) {
    this.name = name;
    this.#stock = 0;
  }

  // Métodos Públicos
  exibirEstoque() {
    console.log(`Estoque atual de ${this.name}: ${this.#stock} unidade(s).`);
  }

  vender(qtd) {
    if (qtd <= 0 || isNaN(qtd)) {
      throw Error("Quantidade inválida");
    }

    if (qtd > this.#stock) {
      throw Error("Estoque insuficiente");
    }
    console.log(`Você vendeu ${qtd} unidade(s) do produto ${this.name}.`);
    this.#atualizarEstoque(qtd);
  }

  adicionarEstoque(qtd) {
    if (qtd <= 0 || isNaN(qtd)) {
      throw Error(`Para adicionar "O valor deve ser maior que 0`);
    }

    this.#stock += qtd;
    console.log(`Você adicionou ${qtd} unidade(s) do produto ${this.name}.`);
    this.exibirEstoque();
  }

  // Métodos Privados
  #atualizarEstoque(qtd) {
    this.#stock -= qtd;
    this.exibirEstoque();
  }
}

const caneta = new Produto("Caneta");

// Exibindo o estoque inicial
console.log("-".repeat(40));
console.log(caneta);

// Adicionando estoque
console.log("-".repeat(40));
caneta.adicionarEstoque(20);
console.log(caneta);

// Vendendo produtos
console.log("-".repeat(40));
caneta.vender(5);
console.log("-".repeat(40));

// Informações do produto após a venda
console.log(caneta);
