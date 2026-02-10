class Pilha {
  constructor(limit) {
    if (limit && limit <= 0) {
      throw new Error("Limit must be a positive number");
    }
    this.stack = [];
    this.limit = limit || null; // Limite opcional para a pilha
  }

  // Adiciona no final
  push(newValue) {
    if (this.limit !== null && this.stack.length >= this.limit) {
      throw new Error("Stack overflow: Cannot push to a full stack");
    }
    return this.stack.push(newValue);
  }

  // Retira do final
  pop() {
    if (this.isEmpty()) throw new Error("Cannot pop from empty stack");
    return this.stack.pop();
  }

  // Lista Vazia
  isEmpty() {
    return this.stack.length === 0;
  }

  // Espiar Pilha
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  // Limpa a Pilha
  clear() {
    this.stack.length = 0;
  }

  // Obter o tamanho da Pilha
  get sizeOfStack() {
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
