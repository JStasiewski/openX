class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  class Tree {
    constructor(root = null) {
      this.root = root;
    }
  
    print() {
      if (!this.root) {
        console.log("Tree is empty");
        return;
      }
      const printNode = (node, level = 0) => {
        if (!node) {
          return;
        }
        printNode(node.right, level + 1);
        console.log(" ".repeat(4 * level) + node.value);
        printNode(node.left, level + 1);
      };
      printNode(this.root);
    }
  }

  const root = new Node(5);
  root.left = new Node(3, new Node(2), new Node(5));
  root.right = new Node(7, new Node(1), new Node(0, new Node(2),new Node(8, null ,new Node(5))));
  
  const tree = new Tree(root);
  tree.print();