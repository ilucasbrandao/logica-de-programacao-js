class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  #size;
  constructor() {
    this.head = null;
    this.tail = null;
    this.#size = 0;
  }

  // método para adicionar um novo nó ao final da lista
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      // se o head for nulo, significa que a lista está vazia, então o novo nó se torna o head e o tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // caso contrário, o novo nó é adicionado ao final da lista, e o tail é atualizado para apontar para o novo nó
      const last = this.tail;
      last.next = newNode;
      this.tail = newNode;
    }
    this.#size++;
  }

  // método para adicionar um novo nó no início da lista
  prepend(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;

      if (this.#size === 0) {
        this.tail = node;
      }
      this.head = node;
      this.#size++;
    }
  }

  // método para inserir um novo nó em uma posição específica da lista
  insertAt(position, value) {
    if (position >= 0 && position <= this.#size) {
      if (position === 0) {
        return this.prepend(value);
      }
      if (position === this.#size) {
        return this.append(value);
      }
    }
    const newNode = new Node(value);
    let current = this.head;
    let previous = null;

    for (let i = 0; i < position; i++) {
      previous = current;
      current = current.next;
    }
    newNode.next = current;
    previous.next = newNode;
    this.#size++;
  }

  // método para remover um nó específico da lista
  remove() {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.value === current) {
        if (previous) {
          previous.next = current.next;
        }
        if (current === this.tail) {
          this.tail = previous.next;
        } else {
          this.head = current.next;

          if (current === this.tail) {
            this.tail = null;
          }
        }
      }
    }
    this.#size--;
    previous = current;
    current = current.next;
  }

  // método para remover o último nó da lista
  pop() {
    if (this.tail) {
      const last = this.tail;
      const value = last.value;

      if (this.#size === 1) {
        this.head = null;
        this.tail = null;
        this.#size--;
        return value;
      }
    }

    let current = this.head;
    let previous = null;

    while (current !== last) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.tail = previous;
    this.#size--;

    return value;
  }

  // método para remover o primeiro nó da lista
  shift() {
    if (this.head) {
      const first = this.head;
      const value = first.value;
      const next = first.next;

      if (this.#size === 1) {
        this.tail = null;
        this.head = null;
        this.#size--;
        return value;
      }

      first.next = null;
      this.head = next;
      this.#size--;
      return value;
    }
  }

  // método para reverter a ordem dos nós na lista
  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;

    this.tail = this.head;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += `${current.value}  ---> `;
      current = current.next;
    }

    console.log(`${result} --- Size: ${this.#size}`);
  }

  isEmpty() {
    return this.head === null;
  }
}

const list = new LinkedList();

list.prepend(3);
list.append(10);
list.append(20);
list.append(30);
list.print();
list.insertAt(4, 15);
list.print();
