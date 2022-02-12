//insert value using recursion.
//this is inital practice for AVL Tress

class Node {
  constructor(value) {
    this.value = value;
    this.height = 0;
    this.left = null;
    this.right = null;
  }
}
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

    this.setHeight(parent);

    return this.treeBalancer(parent);
  }

  setHeight(parent) {
    parent.height =
      1 + Math.max(this.isChild(parent.left), this.isChild(parent.right));
  }

  treeBalancer(parent) {
    if (this.isLeftHeavy(parent)) {
      parent = this.rotateRight(parent);
      parent = this.heightBalancer(parent);
    } else if (this.isRightHeavy(parent)) {
      parent = this.rotateLeft(parent);
      parent = this.heightBalancer(parent);
    }
    return parent;
  }

  rotateRight(parent) {
    if (this.balanceFactor(parent.left) < 0) {
      parent.left = this.rotateLeft(parent.left);
      // parent = this.leftRightRotate(parent);
      //^ -> alternate rotation function that gives different but right answer
    }
    let newRoot = parent.left;
    parent.left = newRoot.right;
    newRoot.right = parent;
    // this.setHeight(parent);  //comment this.heightBalancer
    // this.setHeight(newRoot); // setHeight is another method to do set height
    // setHeight have a bug. one of the leaf's height gets 1 //here it's 21
    return newRoot;
  }
  rotateLeft(parent) {
    if (this.balanceFactor(parent.right) > 0) {
      parent.right = this.rotateRight(parent.right);
      // parent = this.rightLeftRotate(parent);
      //^ -> alternate rotation function that gives different but right answer
    }
    let newRoot = parent.right;
    parent.right = newRoot.left;
    newRoot.left = parent;
    // this.setHeight(parent);
    // this.setHeight(newRoot);
    return newRoot;
  }
  rightLeftRotate(parent) {
    let temp = parent.right;
    parent.right = temp.left;
    temp.left = null;
    parent.right.right = temp;
    return parent;
  }
  leftRightRotate(parent) {
    let temp = parent.left;
    parent.left = temp.right;
    temp.right = null;
    parent.left.left = temp;
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
// avl.insert(20);
avl.insert(1);
avl.insert(22);
avl.insert(21);
avl.display();
