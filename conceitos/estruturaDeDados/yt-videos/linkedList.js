class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // ------ Adicionando Valores ------

  // Complexidade de tempo de execução: O(1)
  prepend(value) {
    const node = new Node(value); // cria um novo nó

    if (this.isEmpty()) {
      this.head = node; // head aponta para o novo nó
    } else {
      node.next = this.head; // next do novo nó aponta pro head
      this.head = node; // head atualiza para o novo nó
    }
    this.size++;
  }

  // Complexidade de tempo de execução: O(n)
  append(value) {
    const node = new Node(value); // cria um novo nó

    if (this.isEmpty()) {
      this.head = node; // head aponta para o novo nó
    } else {
      let prev = this.head; // ponteiro auxiliar

      while (prev.next) {
        prev = prev.next; //enquanto houver um next com valor
      }
      prev.next = node; // quando o next é nulo, é direcionado para o novo nó
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      // menor que 0 ou maior que a lista
      throw Error("Inserção inválida, revise os valores.");
    } else if (index === 0) {
      this.prepend(value); // index for 0, aciona o prepend.
    } else {
      const node = new Node(value); // cria um novo nó
      let previous = this.head; // ponteiro auxiliar

      for (let i = 0; i < index - 1; i++) {
        // executa até achar o anterior
        previous = previous.next;
      }

      node.next = previous.next; // next do novo nó recebe o vaLor do next do anterior
      previous.next = node; // nexto do anterior aponto para o novo nó
      this.size++;
    }
  }

  // ------ Removendo Valores ------

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      throw Error("Remoção inválida, revise os valores.");
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return `Valor removido: ${removedNode.value}`;
  }

  // ------ Status da Lista ------

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty.");
      return;
    } else {
      let current = this.head;
      let listValues = "";

      while (current) {
        listValues += `${current.value} --> `;
        current = current.next;
      }

      console.log(listValues, "null");
    }
  }
}

// ----------------------------------------------
// Área de implementação
// ----------------------------------------------

const list = new LinkedList();
console.log("List is empty? ", list.isEmpty());
console.log("List size: ", list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();
list.append(2);
list.insert(1, 0);
list.insert(5, 3);
list.print();
console.log(list.removeFrom(0));
list.print();
console.log(list.removeFrom(2));
list.print();
