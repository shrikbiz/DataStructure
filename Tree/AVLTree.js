//insert value using recursion.
//this is inital practice for AVL Tress

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.insertValue(this.root, value);
  }

  insertValue(parent, value) {
    if (!parent) {
      return new Node(value);
    }

    if (parent.value > value) {
      parent.left = this.insertValue(parent.left, value);
    } else {
      parent.right = this.insertValue(parent.right, value);
    }

    parent.height =
      1 + Math.max(this.isChild(parent.left), this.isChild(parent.right));

    parent = this.treeBalancer(parent);

    return parent;
  }

  treeBalancer(parent) {
    let newRoot;
    let temp;

    if (this.isLeftHeavy(parent)) {
      if (this.balanceFactor(parent.left) < 0) {
        temp = parent.left;
        parent.left = temp.right;
        temp.right = null;
        parent.left.left = temp;
      }
      newRoot = parent.left;
      parent.left = newRoot.right;
      newRoot.right = parent;
      newRoot = this.heightBalancer(newRoot);
      return newRoot;
    } else if (this.isRightHeavy(parent)) {
      if (this.balanceFactor(parent.right) > 0) {
        temp = parent.right;
        parent.right = temp.left;
        temp.left = null;
        parent.right.right = temp;
      }
      newRoot = parent.right;
      parent.right = newRoot.left;
      newRoot.left = parent;
      newRoot = this.heightBalancer(newRoot);
      return newRoot;
    }
    return parent;
  }

  heightBalancer(parent) {
    if (!parent) return -1;

    this.heightBalancer(parent.left);
    this.heightBalancer(parent.right);

    parent.height =
      1 + Math.max(this.isChild(parent.left), this.isChild(parent.right));
    return parent;
  }

  isLeftHeavy(node) {
    return this.balanceFactor(node) > 1;
  }

  isRightHeavy(node) {
    return this.balanceFactor(node) < -1;
  }

  balanceFactor(node) {
    return this.isChild(node.left) - this.isChild(node.right);
  }

  isChild(node) {
    return !node ? -1 : node.height;
  }

  display() {
    console.log("AVLTree -> display -> this.root", this.root);
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.height = 0;
    this.left = null;
    this.right = null;
  }
}

let avl = new AVLTree();

avl.insert(10);
avl.insert(30);
avl.insert(20);
avl.insert(40);
avl.insert(35);
avl.insert(60);
avl.insert(70);
avl.insert(11);
avl.insert(9);
avl.insert(15);
avl.insert(13);
avl.insert(5);
avl.insert(6);
avl.insert(4);
avl.insert(8);
avl.insert(20);
avl.insert(1);
avl.insert(22);
avl.insert(21);
avl.display();
