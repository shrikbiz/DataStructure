/**             TREE
 *
 *                  10
 *               /       \
 *             5           20
 *           /   \       /    \
 *          3     7     16     22
 *           \
 *            4
 *
 *
 *
 *              INVERSE TREE
 *
 *                  10
 *               /       \
 *             20          5
 *           /   \       /    \
 *         22     16    7      3
 *                            /
 *                           4
 */

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.insertValue(this.root, value);
  }

  insertValue(root, value) {
    if (!root) return new Node(value);
    // console.log(value, root);

    if (root.value > value) root.left = this.insertValue(root.left, value);
    else root.right = this.insertValue(root.right, value);

    return root;
  }

  check() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

let tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(4);
tree.insert(20);
tree.insert(16);
tree.insert(22);
tree.check();
//--------------------------------------------------//
// code //

class InverseTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.insertValue(this.root, value);
  }

  insertValue(root, value) {
    if (!root) return new Node(value);
    if (root.value < value) root.left = this.insertValue(root.left, value);
    else root.right = this.insertValue(root.right, value);
    return root;
  }
}

let inverseTree = (oldTree) => {
  let inverseTree = new InverseTree();
  let oldRoot = oldTree.root;
  let traverse = (oldTree, inverse) => {
    if (!oldTree) return;
    inverse.insert(oldTree.value);
    traverse(oldTree.left, inverse);
    traverse(oldTree.right, inverse);
    return inverse;
  };
  inverseTree = traverse(oldRoot, inverseTree);
  return inverseTree;
};

console.log("old Tree", tree);
console.log("new Tree:", inverseTree(tree));
