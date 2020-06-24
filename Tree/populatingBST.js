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

  find(value) {
    let parent = this.root;
    while (parent) {
      if (parent.value === value) return true;
      else if (parent.value > value) parent = parent.left;
      else parent = parent.right;
    }
    return false;
  }

  check() {
    console.log(this.root);
  }
}

//testing

arr = [10, 5, 15, 6, 1, 8, 12, 18, 17];
let bst = new BST();

let runBst = (array) => {
  for (let value of array) {
    bst.insert(value);
  }
  return bst.check();
};

runBst(arr);

let findArr = [1, 2, 3, 9, 10, 15, 22, 18];

let valueInBst = (arr) => {
  for (let val of arr) {
    console.log(
      bst.find(val) ? `${val} is in the tree` : `${val} is not in the tree`
    );
  }
};

valueInBst(findArr);
