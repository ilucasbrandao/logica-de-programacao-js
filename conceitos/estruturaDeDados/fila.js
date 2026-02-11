class Fila {
  constructor(limit) {
    // Verificar se o valor do limite é maior do que 0
    if (limit && limit <= 0) {
      throw new Error("Limit must be a positive number");
    }

    this.queue = [];
    this.limit = limit || null;
  }

  enqueue(value) {
    // Verificar se a fila atingiu o limite antes de adicionar um novo elemento
    if (this.isComplete()) {
      throw new Error("Queue overflow: Cannot enqueue to a full Queue");
    }
    this.queue.push(value);
  }

  dequeue() {
    // Verificar se a fila está vazia antes de tentar remover um elemento
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue from empty Queue");
    }
    return this.queue.shift();
  }

  peek() {
    return this.queue[0] || null;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  isComplete() {
    if (this.limit !== null) {
      return this.queue.length >= this.limit;
    }
    return false;
  }

  clear() {
    this.queue.length = 0;
  }

  get sizeOfQueue() {
    return this.queue.length;
  }
}

const myQueue = new Fila(5);

console.log("Minha fila está vazia?", myQueue.isEmpty()); // true
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log("Minha fila: ", myQueue);
console.log("Minha fila está vazia?", myQueue.isEmpty()); // false
console.log("Verificando o topo da fila:", myQueue.peek()); // 1
myQueue.enqueue(77);
myQueue.enqueue(88);
console.log("Minha fila após adicionar mais elementos:", myQueue);
myQueue.dequeue();
myQueue.dequeue();
console.log("Nova fila após remover elementos:", myQueue);
console.log("Verificando o topo da fila:", myQueue.peek());
console.log("Minha fila está vazia?", myQueue.isEmpty());
console.log("Tamanho da fila:", myQueue.sizeOfQueue);
myQueue.enqueue(6);
console.log("Tamanho da fila após adicionar um elemento:", myQueue.sizeOfQueue);
console.log("Tamanho da fila após limpar:", myQueue.sizeOfQueue);
console.log("Minha fila está vazia?", myQueue.isEmpty()); // false
console.log("Minha fila está vazia?", myQueue.isEmpty()); // true
console.log("Fila final:", myQueue); // Fila final: Fila { queue: [ 6 ], limit: 5 }
myQueue.clear();

try {
  myQueue.enqueue(66); // Isso deve lançar um erro de estouro da fila
} catch (error) {
  console.error("Erro:", error.message);
}
