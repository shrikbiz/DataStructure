// [10, 5, 15, 6, 1, 8, 12, 18, 17]

/**
 * we will be taking first value as root node.
 *
 *
 * left < parent
 * right > parent
 *
 * class name : BST
 * constructor:
 * root:
 *
 * insert(value):
 * if !root root = new Node(value)
 * else:
 *  let parent = root
 *  while(parent):
 *      if(parent.value > value) {
 *          if(!parent.left)parent.left = new Node(value)
 *          else parent = parent.left
 *
 *      } else {
 *
 *          if (!parent.right)parent.right = new Node(value);
 *          else parent = parent.right
 *          };
 *
 *
 *
 *
 *
 *  class Node:
 * constructor(value):
 * value: value
 * left:
 * right:
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

  //   insert(value) {
  //     if (!this.root) this.root = new Node(value);
  //     else {
  //       let parent = this.root;
  //       let done = false;
  //       while (!done) {
  //         if (parent.value <= value) {
  //           if (parent.right) parent = parent.right;
  //           else {
  //             parent.right = new Node(value);
  //             done = true;
  //           }
  //         } else {
  //           if (parent.left) parent = parent.left;
  //           else {
  //             parent.left = new Node(value);
  //             done = true;
  //           }
  //         }
  //       }
  //     }
  //   }

  //better insert
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
    let parent = this.root;
    console.log(parent);
  }

  preOrder() {
    let arr = [];
    this.traversePreOrder(this.root, arr);
    // console.log("pre-order:", arr);
    return arr;
  }

  traversePreOrder(parent, arr) {
    if (!parent) return;
    arr.push(parent.value);
    this.traversePreOrder(parent.left, arr);
    this.traversePreOrder(parent.right, arr);
    console.log("start ->", " parent:::", parent.value);
  }

  inOrder() {
    let arr = [];
    this.traverseInOrder(this.root, arr);
    return arr;
  }

  traverseInOrder(parent, arr) {
    if (!parent) return;
    this.traverseInOrder(parent.left, arr);
    arr.push(parent.value);
    this.traverseInOrder(parent.right, arr);
  }

  postOrder() {
    let arr = [];
    this.traversePostOrder(this.root, arr);
    return arr;
  }

  traversePostOrder(parent, arr) {
    if (!parent) return;
    this.traversePostOrder(parent.left, arr);
    this.traversePostOrder(parent.right, arr);
    arr.push(parent.value);
  }
}

//filling tree

arr = [10, 5, 15, 6, 1, 8, 12, 18, 17];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bst = new BST();

let runBst = (array) => {
  for (let value of array) {
    bst.insert(value);
  }
  return bst.check();
};

runBst(arr);
// bst.preOrder();

console.log("pre-order", bst.preOrder());
// console.log("in-order", bst.inOrder());
// console.log("post-order", bst.postOrder());
