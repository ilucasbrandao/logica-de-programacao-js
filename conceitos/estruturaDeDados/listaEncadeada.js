class Node {
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  #size;
  constructor() {
    this.head = null;
    this.tail = null;
    this.#size = 0;
  }

  // adiciona um elemento no final da lista
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      // adicionando o primeiro elemento na lista
      this.head = newNode;
      this.tail = newNode;
    } else {
      const last = this.tail; // se não for o primeiro na lista
      last.next = newNode;
      this.tail = newNode;
    }
    this.#size++;
  }

  // adiciona um elemento no inicio da lista
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    if (this.#size === 0) {
      this.tail = newNode;
    }
    this.#size++;
  }

  // remove um elemento da lista
  remove(value) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.value === value) {
        if (prev) {
          prev.next = current.next;
          if (current === this.tail) {
            this.tail = prev;
          }
          current.next = null;
        } else {
          this.head = current.next;
          if (current === this.tail) {
            this.tail = null;
          }
          current.next = null;
        }
        if (current === this.tail) {
          this.tail = prev;
        }
        this.#size--;
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  // adiciona um elemento em uma posição específica da lista
  insertAt(position, value) {
    const newNode = new Node(value);
    let current = this.head;
    let prev = null;

    if (position >= 0 && position <= this.#size) {
      // se a posição for 0, adiciona no início da lista
      if (position === 0) {
        this.prepend(value);
        return true;
      }

      if (position === this.#size) {
        // se a posição for igual ao tamanho da lista, adiciona no final
        this.append(value);
        return true;
      }

      for (let i = 0; i < position; i++) {
        prev = current;
        current = current.next;
      }

      if (!prev) return;

      newNode.next = current;
      prev.next = newNode;
      this.#size++;
      return true;
    }
    return false;
  }

  // remove um elemento de uma posição específica da lista
  removeAt(position) {
    if (position >= 0 && position < this.#size) {
      if (position === 0) return this.shift();
      if (position === this.#size - 1) return this.pop();
    }
    let current = this.head;
    let prev = null;

    for (let i = 0; i < position; i++) {
      prev = current;
      current = current.next;
    }

    const value = current.value;
    prev.next = current.next;
    current.next = null;
    this.#size--;
    return value;
  }

  // retorna o índice de um valor na lista, ou -1 se não encontrado
  indexOf(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // retorna true se a lista estiver vazia
  isEmpty() {
    return this.head === null;
  }

  // método para retornar o tamanho da lista
  get size() {
    return this.#size;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += `${current.value} --> `;
      current = current.next;
    }

    console.log(`${result} --- Size: ${this.#size}`);
  }

  // verifica se um valor existe na lista
  contain(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        console.log(`O valor ${value} existe na lista`);
        return;
      }
      current = current.next;
    }

    console.log(`O valor ${value} não existe na lista`);
  }

  // remove o último elemento da lista e retorna seu valor
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

      let current = this.head;
      let prev = null;

      while (current !== last) {
        prev = current;
        current = current.next;
      }

      prev.next = null;
      this.tail = prev;
      this.#size--;
      return value;
    }
    return null;
  }

  // remove o primeiro elemento da lista e retorna seu valor
  shift() {
    if (this.isEmpty()) return null;

    if (this.head) {
      const first = this.head;
      const value = first.value;

      if (this.#size === 1) {
        this.head = null;
        this.tail = null;
        this.#size = 0;
        return value;
      }

      this.head = first.next;
      this.#size--;
      first.next = null;
      return value;
    }
  }
}

const list = new LinkedList();
list.prepend(1);
list.print();
console.log(list.indexOf(5));
