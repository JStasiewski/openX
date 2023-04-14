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
      console.log(`Tree is empty`);
      return;
    }
    const printNode = (node, level = 0) => {
      if (!node) {
        return;
      }
      printNode(node.right, level + 1);
      console.log(` `.repeat(4 * level) + node.value);
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
    if (leafs !== 0) {
      console.log(`Number of nodes without any children is : ` + leafs);
      console.log(`List of leafs values : ` + leafsArr);
      return leafsArr;
    }
    else {
      console.log(`Tree is empty`)
      return [];
    }
  }

  longestNode() {                                 // Finding the longest node
    let maxDepth = 0;
    let deepestNode = null;
    let currNode = [];
    const tempArr = [];

    const traverse = (node, depth) => {
      if (node === null) {
        if (depth > maxDepth) {
          currNode = [...tempArr];
        }
        return;
      }

      if (depth > maxDepth && node.left === null && node.right === null) {
        deepestNode = node;
        maxDepth = depth;
      }
      tempArr[depth] = node.value;

      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
    };

    traverse(this.root, 0);

    if (deepestNode !== null) {
      const printedArr = currNode.map(num => num.toString()).join(` -> `);
      console.log(`Largest numper of edges in path form root to leaf : ` + (maxDepth + 1))
      console.log(`Path : ` + printedArr)
      return currNode;
    } else {
      console.log(`Tree is empty`);
      return [];
    }
  }
}

function compareTrees(tree1, tree2) {             // Checking if two trees have same values and nodes
  const areNodesEqual = (node1, node2) => {       // nomater if they are left or right
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    return (
      node1.value === node2.value &&
      ((areNodesEqual(node1.left, node2.left) && areNodesEqual(node1.right, node2.right)) ||
        (areNodesEqual(node1.left, node2.right) && areNodesEqual(node1.right, node2.left)))
    );
  };

  return areNodesEqual(tree1.root, tree2.root);
}

const root1 = new Node(5);
root1.left = new Node(3, new Node(2), new Node(5));
root1.right = new Node(7, new Node(1), new Node(0, new Node(2), new Node(8, null, new Node(5))));

const root2 = new Node(5);
root2.left = new Node(7, new Node(1), new Node(0, new Node(2), new Node(8, null, new Node(5))));
root2.right = new Node(3, new Node(2), new Node(5));

const tree1 = new Tree(root1);
const tree2 = new Tree(root2);

tree1.print();
tree1.hasChildren();
tree1.longestNode();

tree2.print();
tree2.hasChildren();
tree2.longestNode();

console.log(`Are Trees the same? ` + compareTrees(tree1, tree2));

module.exports = {
  Node,
  Tree,
  compareTrees
};

///////////////////////////////////////////////
//###########################################//
//####    To run unit tests pleas run    ####// 
//####    "npm install -g jest"          ####//
//####    "npx jest .\index.test.js"     ####//
//####    commands in Task_1 folder      ####//
//###########################################//
///////////////////////////////////////////////