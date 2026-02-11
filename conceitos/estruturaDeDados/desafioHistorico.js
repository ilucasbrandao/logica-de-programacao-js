class Historico {
  constructor(limit) {
    this.stack = [];
    this.limit = limit || null;
  }

  push(value) {
    if (this.isComplete() || value === undefined) {
      return;
    }
    this.stack.push(value);
  }

  // Verificar a página atual no indice para navegação
  atualPage() {
    if (this.isEmpty()) {
      return null;
    }
    return this.peek();
  }

  // Avançando para a próxima página sem excluí-la do histórico
  nextPage() {
    if (this.isEmpty()) {
      return null;
    }
    return this.atualPage() + 1;
  }

  // Retornando a página anterior sem excluí-la do histórico
  backPage() {
    if (this.isEmpty()) {
      return null;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return `${this.stack[this.stack.length - 1]}`;
  }

  isComplete() {
    if (this.limit !== null) {
      return this.stack.length >= this.limit;
    }
    return false;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

// Testando o desafio do histórico
const historico = new Historico(5);

console.log("Meu histórico: ", historico.stack); // Meu histórico: []

historico.push("Página 1");

console.log("Meu histórico: ", historico.stack); // [Página 1]

historico.push("Página 2");

console.log("Meu histórico: ", historico.stack); // [Página 1, Página 2]

console.log("Atual: ", historico.peek()); // Página 2

historico.push("Página 3");

console.log("Meu histórico: ", historico.stack); // [Página 1, Página 2, Página 3]

console.log("Voltando uma casa: ", historico.backPage()); // Página 2

console.log("Meu histórico: ", historico.stack);

console.log("Voltando uma casa: ", historico.backPage()); // Página 1

console.log("Meu histórico: ", historico.stack);

console.log("Avançando uma casa: ", historico.nextPage()); // Página 2
