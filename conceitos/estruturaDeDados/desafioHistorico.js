class Historico {
  constructor(limit) {
    this.stack = [];
    this.limit = limit || null;
    this.cursor = -1; // variável de rastreio
  }

  push(value) {
    if (value === undefined) return;

    // 1. Limpa o futuro se o cursor estiver "para trás"
    if (this.cursor < this.stack.length - 1) {
      this.stack.splice(this.cursor + 1);
    }

    // 2. Mantém o limite
    if (this.limit && this.stack.length >= this.limit) {
      this.stack.shift();
    }

    // 3. Adiciona e atualiza o ponteiro
    this.stack.push(value);
    this.cursor = this.stack.length - 1;
  }

  // Verificar a página atual no indice para navegação
  atualPage() {
    if (this.isEmpty() || this.cursor === -1) {
      return null;
    }
    return this.stack[this.cursor];
  }

  // Avançando para a próxima página sem excluí-la do histórico
  nextPage() {
    if (this.isEmpty()) return "Histórico vazio.";
    if (this.cursor < this.stack.length - 1) {
      this.cursor++;
      return this.stack[this.cursor];
    }
    return "Fim do histórico";
  }

  // Retornando a página anterior sem excluí-la do histórico
  backPage() {
    if (this.cursor > 0) {
      this.cursor--;
      return this.stack[this.cursor];
    }
    return "Inicio do histórico.";
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.atualPage();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

// Testando o desafio do histórico
const historico = new Historico(5);

console.log("Meu histórico: ", historico.stack); // Meu histórico: []
historico.push("Página 1");
historico.push("Página 2");
console.log("Atual: ", historico.peek()); // Página 2
historico.push("Página 3");
console.log("Meu histórico: ", historico.stack); // [Página 1, Página 2, Página 3]
console.log("Voltando uma casa: ", historico.backPage()); // Página 2
console.log("Atual: ", historico.peek()); // Página 2
console.log("Voltando outra casa: ", historico.backPage()); // Página 1
console.log("Meu histórico: ", historico.stack);
console.log("Avançando uma casa: ", historico.nextPage()); // Página 2
historico.push("Página 10");
console.log("Atual: ", historico.peek()); // Página 10
console.log("Meu histórico: ", historico.stack);
historico.push("Página 12");
historico.push("Página 20");
console.log("Meu historico: ", historico.stack);
historico.push("Página 30");
console.log("Meu histórico: ", historico.stack);
historico.push("Página 40");
console.log("Meu historico: ", historico.stack);
