class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(key, value, replace) {
    // Verificar se a chave já existe
    let current = this.head;
    while (current) {
      if (current.key === key) {
        if (replace) {
          current.value = value;
        } else {
          throw Error("Key already exist");
        }
        return false;
      }
      current = current.next;
    }

    // Se a chave não existir, criar um novo nó e adicioná-lo à lista
    const hash = new HashNode(key, value);

    if (this.head === null) {
      this.head = hash;
      this.tail = hash;
    } else {
      const last = this.tail;
      last.next = hash;
      this.tail = hash;
    }
    this.size++;
    return true;
  }

  getByKey(key) {
    let current = this.head;

    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }

  remove(key) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.key === key) {
        if (previous) {
          previous.next = current.next;
          current.next = null;
        } else {
          this.head = current.next;
          current.next = null;
        }
        this.size--;
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }

  isEmpty() {
    return this.size;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `${current.value} ---> `;
      current = current.next;
    }

    console.log(result);
  }
}

class HashTable {
  constructor(maxSize) {
    this.size = 0;
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

  insert(key, value) {
    const index = this.hash(key);

    if (this.table[index] === undefined) {
      this.table[index] = new LinkedList();
    }

    const result = this.table[index].append(key, value);
    if (result) this.size++;
  }

  get(key) {
    const index = this.hash(key);

    if (this.table[index] !== undefined) {
      return this.table[index].getByKey(KEY);
    }

    return undefined;
  }
}
