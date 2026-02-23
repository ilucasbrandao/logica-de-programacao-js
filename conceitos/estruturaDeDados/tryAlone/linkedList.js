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

  pop() {
    if (this.tail) {
      const last = this.tail;
      const value = last.value;

      if (this.#size === 1) {
        this.head;
      }
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
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.print(); // 10 --> 20 --> 30
list.reverse();
list.print(); // 30 --> 20 --> 10
