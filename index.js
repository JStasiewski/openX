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

    hasChildren() {                                 // Count nodes without any children
      const leafsArr = [];
      
      const countNodes = (node) => {
        if (!node) return 0;
        if (!node.left && !node.right) {
          leafsArr.push(node.value);
          return 1;
        }
        return countNodes(node.left) + countNodes(node.right);
      };
      const leafs = countNodes(this.root)
      if(leafs !== 0) {
        console.log("Number of nodes without any children is : " + leafs);
        console.log("List of leafs values : " + leafsArr);
      }
      else {
        console.log("Tree is empty")
      }
    }

    longestNode() {
      let maxDepth = 0;
      let deepestNode = null;
      const currNode = [];
      
      const traverse = (node, depth) => {
        if (node === null) return;
        
        if (depth > maxDepth && node.left === null && node.right === null) {
          deepestNode = node;
          maxDepth = depth;
        }
        currNode[depth] = node.value;
        
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
      };
      
      traverse(this.root, 0);
      
      if (deepestNode !== null) {
        const printedArr = currNode.map(num => num.toString()).join(" -> ");
        console.log(`Largest numper of edges in path form root to leaf : ` + (maxDepth + 1))
        console.log(`Path : ` + printedArr)
      } else {
        console.log('Tree is empty');
      }
    }
  }

  const root = new Node(5);
  root.left = new Node(3, new Node(2), new Node(5));
  root.right = new Node(7, new Node(1), new Node(0, new Node(2),new Node(8, null ,new Node(5))));
  
  const tree = new Tree(root);
  tree.print();
  tree.hasChildren();
  tree.longestNode();