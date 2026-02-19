class Pilha {
  constructor(limit) {
    // Verificar se o limite é um número positivo
    if (limit && limit <= 0) {
      throw new Error("Limit must be a positive number");
    }
    this.stack = []; // Array para armazenar os elementos da pilha
    this.limit = limit || null; // Limite opcional para a pilha
  }

  // Adiciona no final
  push(newValue) {
    // Verificar se a pilha atingiu o limite antes de adicionar um novo elemento
    if (this.limit !== null && this.stack.length >= this.limit) {
      throw new Error("Stack overflow: Cannot push to a full stack");
    }
    return this.stack.push(newValue);
  }

  // Retira do final
  pop() {
    // Verificar se a pilha está vazia antes de tentar remover um elemento
    if (this.isEmpty()) throw new Error("Cannot pop from empty stack");
    return this.stack.pop();
  }

  // Inverte a palavra
  invertePalavra(texto) {
    if (!texto || typeof texto !== "string") {
      throw new Error("Digite um texto válido");
    }
    const pilha = new Pilha(texto.length);
    let resultado = "";
    for (let letra of texto) {
      pilha.push(letra);
    }
    while (!pilha.isEmpty()) {
      resultado += pilha.pop();
    }

    return resultado;
  }

  verificarParenteses(expressao) {
    const pilha = new Pilha(expressao.length);

    try {
      for (let char of expressao) {
        if (char === "(") {
          pilha.push("(");
          console.log("( adicionado");
        } else if (char === ")") {
          pilha.pop();
        }
        return pilha.isEmpty()
          ? "Expressão Correta!"
          : "Erro: há parenteses abertos";
      }
    } catch (error) {
      return "Erro: Você fechou um parêntese que não abriu!";
    }
  }

  // Lista Vazia
  isEmpty() {
    // Retorna true se a pilha estiver vazia, caso contrário, retorna false
    return this.stack.length === 0;
  }

  // Espiar Pilha
  peek() {
    // Verificar se a pilha está vazia antes de espiar o topo
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  // Limpa a Pilha
  clear() {
    // Limpa todos os elementos da pilha
    this.stack.length = 0;
  }

  // Obter o tamanho da Pilha
  get sizeOfStack() {
    // Retorna o número de elementos atualmente na pilha
    return this.stack.length;
  }
}

const myStack = new Pilha(5); // Criando uma pilha com limite de 5 elementos

console.log("Minha pilha está vazia?", myStack.isEmpty());
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
console.log("Minha pilha está vazia?", myStack.isEmpty());
console.log("Verificando o topo da pilha:", myStack.peek());
myStack.pop();
myStack.pop();
console.log("Nova pilha após remover elementos:", myStack);
console.log("Verificando o topo da pilha:", myStack.peek());
console.log("Minha pilha está vazia?", myStack.isEmpty());
console.log("Tamanho da pilha:", myStack.sizeOfStack);
myStack.push(6);
console.log(
  "Tamanho da pilha após adicionar um elemento:",
  myStack.sizeOfStack,
);
myStack.clear();
console.log("Tamanho da pilha após limpar:", myStack.sizeOfStack);
console.log("Minha pilha está vazia?", myStack.isEmpty());
console.log("Pilha final:", myStack);
console.log(myStack.invertePalavra("LOGICA"));
console.log(myStack.verificarParenteses("(5 + 3) * 5"));
