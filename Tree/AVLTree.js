//insert value using recursion.
//this is inital practice for AVL Tress

class AVLTree {
  constructor() {
    this.root = null;
  }
  //   insertValue(parent, value, height) {
  //     if (!parent) {
  //       this.height = this.height < height ? height : this.height;
  //       return new Node(value);
  //     }
  //     parent.value > value
  //       ? (parent.left = this.insertValue(parent.left, value, height + 1))
  //       : (parent.right = this.insertValue(parent.right, value, height + 1));
  //     return parent;
  //   }

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
      1 + Math.max(this.height(parent.left), this.height(parent.right));

    parent = this.balance(parent);

    parent.height =
      1 + Math.max(this.height(parent.left), this.height(parent.right));
    return parent;
  }

  balance(parent) {
    let newRoot;
    if (this.isLeftHeavy(parent)) {
      newRoot = parent.left;

      parent.left = newRoot.right;

      newRoot.right = parent;

      return newRoot;

      //   let leftBalance = this.balanceFactor(parent.left);
      //   if (leftBalance < 0) console.log("Left Rotation on", parent.left.value);
      //   console.log("Right Rotation on ", parent.value);
    } else if (this.isRightHeavy(parent)) {
      newRoot = parent.right;

      parent.right = newRoot.left;

      newRoot.left = parent;
      return newRoot;
      //   let rightBalance = this.balanceFactor(parent.right);
      //   if (rightBalance > 0)
      //     console.log("Right Rotation on", parent.right.value);
      //   console.log("Left Rotation on", parent.value);
    }
    return parent;
  }

  isLeftHeavy(node) {
    return this.balanceFactor(node) > 1;
  }
  isRightHeavy(node) {
    return this.balanceFactor(node) < -1;
  }

  balanceFactor(node) {
    return (
      (node.left ? node.left.height : 0) - (node.right ? node.right.height : 0)
    );
  }

  height(node) {
    return !node ? -1 : node.height;
  }

  display() {
    console.log("tree =>", this.root);
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

let avl = new AVLTree();

avl.insert(10);
avl.insert(20);
avl.insert(30);
// avl.insert(11);
// avl.insert(9);
// avl.insert(15);
// avl.insert(13);
// avl.insert(5);
avl.display();
// avl.insert(6);
// avl.insert(4);
// avl.insert(8);
// avl.insert(20);
// avl.insert(1);
// avl.insert(22);
// avl.insert(21);
