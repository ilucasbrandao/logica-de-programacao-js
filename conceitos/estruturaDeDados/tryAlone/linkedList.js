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

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const last = this.tail;
      last.next = newNode;
      this.tail = newNode;
    }
    this.#size++;
  }
}
