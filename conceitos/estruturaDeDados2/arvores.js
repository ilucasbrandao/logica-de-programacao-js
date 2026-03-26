class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }

  #insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.#insertNode(node.left, newNode);
      }
    } else if (newNode.key > node.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.#insertNode(node.right, newNode);
      }
    }
  }

  search(key) {
    return this.#searchNode(this.root, key);
  }

  #searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return this.#searchNode(node.left, key);
    } else if (key > node.key) {
      return this.#searchNode(node.right, key);
    } else {
      return true;
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(20);
bst.insert(15);
bst.insert(30);
console.log(bst);
console.log(bst.search(15));
