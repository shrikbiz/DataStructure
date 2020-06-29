//validate if tree is binary tree or not.
//you have to check that all the values in left side is smaller and all the values in right side is greater

//scratchPad
/**
 *
 *           tree
 * [10, 5, 15, 6, 1, 8, 12, 18, 17]
 *
 *          10
 *        /    \
 *       5      15
 *      / \     / \
 *     1   6   12  18
 *          \      /
 *           8    17
 *
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) this.root = node;
    else {
      let parent = this.root;
      while (true) {
        if (parent.value <= value) {
          if (parent.right) parent = parent.right;
          else {
            parent.right = node;
            break;
          }
        } else {
          if (parent.left) parent = parent.left;
          else {
            parent.left = node;
            break;
          }
        }
      }
    }
  }

  check() {
    console.log(this.root, this.root.left, this.root.right);
  }

  unBst() {
    let temp = this.root.left.right.right;
    this.root.left.right.right = this.root.right.right.left;
    this.root.right.right.left = temp;
    console.log(this.root.value, this.root.left, this.root.right);
  }

  isBST() {
    return this.validate(this.root, -Infinity, Infinity);
  }

  validate(parent, min, max) {
    if (!parent) return true;

    if (parent.value < min || parent.value > max) {
      console.log(
        "here is where it didn't work",
        min,
        parent.value < min ? "!<" : "<",
        parent.value,
        parent.value > max ? "!<" : "<",
        max
      );
      return false;
    }
    console.log(min, "<", parent.value, "<", max);
    return (
      this.validate(parent.left, min, parent.value - 1) &&
      this.validate(parent.right, parent.value - 1, max)
    );
  }
}

//testing

values = [10, 5, 15, 6, 1, 8, 12, 18, 17];
let bst = new BST();

let runBst = (nodeArray) => {
  for (let node of nodeArray) {
    bst.insert(node);
  }
  bst.unBst();
  bst.check();
};

runBst(values);

console.log(bst.isBST());
