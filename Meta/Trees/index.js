class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(arg) {
    this.root = null;
    this.populateTree(arg);
  }

  populateTree(arg) {
    if (arg === undefined || arg === null) {
      return;
    }

    if (this.checkNumberType(arg)) {
      this.root = new Node(arg);
      return;
    }

    if (Array.isArray(arg)) {
      for (const value of arg) {
        if (!this.checkNumberType(value)) {
          console.log(`value: ${value} in array is not a number.
                    It wont be added in tree`);
          continue;
        }
        this.addNewNode(value);
      }
      return;
    }
    console.error(`value is invalid`);
  }

  addNewNode(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      if (current.value > value) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  print() {
    console.log(this.root);
  }

  checkNumberType(value) {
    return typeof value == "number";
  }
}

const tree = new BinaryTree([7, 10, 4, 5, 2, 3, 1, 15, 8, 9, 12, 13, 17]);
tree.print();

function inOrder(tree, array) {
  if (!tree) {
    return;
  }
  inOrder(tree.left, array);
  array.push(tree.value);
  inOrder(tree.right, array);
}

function preOrder(tree, array) {
  if (!tree) {
    return;
  }

  array.push(tree.value);
  preOrder(tree.left, array);
  preOrder(tree.right, array);
}
function postOrder(tree, array) {
  if (!tree) {
    return;
  }
  postOrder(tree.left, array);
  postOrder(tree.right, array);
  array.push(tree.value);
}

function dfs(tree, searchType) {
  let current = tree.root;
  const order = [];
  if (searchType === "inOrder") {
    inOrder(current, order);
  } else if (searchType === "postOrder") {
    postOrder(current, order);
  } else if (searchType === "preOrder") {
    preOrder(current, order);
  } else {
    console.log(`search value is not of type preOrder, inOrder or postOrder.`);
    return;
  }
  return order;
}

// const preOrderTree = dfs(tree, "preOrder");
// console.log("🚀 ~ file: index.js ~ line 123 ~ preOrderTree", preOrderTree);

// const inOrderTree = dfs(tree, "inOrder");
// console.log("🚀 ~ file: index.js ~ line 125 ~ inOrderTree", inOrderTree);

// const postOrderTree = dfs(tree, "postOrder");
// console.log("🚀 ~ file: index.js ~ line 127 ~ postOrderTree", postOrderTree);
// tree.root.left.right.value = 100;

function bfs(tree) {
  const order = [];
  const queue = [tree];
  while (queue.length) {
    tree = queue.shift();
    order.push(tree.value);
    if (tree.left) {
      queue.push(tree.left);
    }
    if (tree.right) {
      queue.push(tree.right);
    }
  }
  return order;
}

console.log(bfs(tree.root));

function validateTree(tree, lowerRange = -Infinity, upperRange = Infinity) {
  if (!tree) {
    return true;
  }
  if (tree.value <= upperRange && tree.value >= lowerRange) {
    return (
      validateTree(tree.left, lowerRange, tree.value) &&
      validateTree(tree.right, tree.value, upperRange)
    );
  }
  return false;
}
console.log("validate:", validateTree(tree.root));
