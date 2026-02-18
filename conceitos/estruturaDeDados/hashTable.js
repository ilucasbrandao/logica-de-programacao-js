class HashNode {
  constructor(key, value) {
    this.key = key;
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

  // adiciona um elemento no final da lista
  append(key, value, replace) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        if (replace) {
          current.value = value;
        } else {
          throw new Error(`Key ${key} already exists in the list`);
        }
        return;
      }
      current = current.next;
    }
    const newNode = new HashNode(key, value);

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

  // pega um elemento da lista pelo seu índice
  getByKey(key) {
    let current = this.head;

    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return false;
  }

  // remove um elemento da lista
  remove(key) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.key === key) {
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

  // retorna true se a lista estiver vazia
  isEmpty() {
    return this.head === null;
  }

  // método para retornar o tamanho da lista
  get size() {
    return this.#size;
  }

  // método para imprimir a lista
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += `${current.value} --> `;
      current = current.next;
    }

    console.log(`${result} --- Size: ${this.#size}`);
  }
}

class HashTable {
  #size;
  constructor(maxSize) {
    this.#size = 0;
    this.table = [];
    this.max = maxSize;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.max;
  }
}

const list = new LinkedList();
list.append("nome", "João", false);
list.append("idade", 25, false);
list.print(); // Saída: João --> 25 -->  --- Size: 2
console.log(list.getByKey("nome")); // Saída: João
