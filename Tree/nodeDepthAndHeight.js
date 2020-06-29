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
    // console.log(this.root);
    return this.root;
  }

  height() {
    return this.heightCheck(this.root);
  }

  heightCheck(parent) {
    if (!parent) return -1;
    return (
      1 +
      Math.max(this.heightCheck(parent.left), this.heightCheck(parent.right))
    );
  }

  minimum() {
    return this.minValue(this.root);
  }

  minValue(parent) {
    if (!parent.left) {
      return parent.value;
    }
    return this.minValue(parent.left);
  }

  minimum2() {
    return this.min(this.root);
  }

  min(parent) {
    let right = parent.right ? this.min(parent.right) : parent.value;
    let left = parent.left ? this.min(parent.left) : parent.value;
    return left > right ? right : left;
  }

  isSimilar(tree2) {
    return this.checkSimilar(this.root, tree2);
  }

  // checkSimilar(parent1, parent2) {
  //   if (!parent1 && !parent2) return true;
  //   console.log(parent1.value, parent2.value);

  //   if (parent1 && parent2) {
  //     return (
  //       parent1.value === parent2.value &&
  //       parent1.left !== null &&
  //       parent2.left !== null &&
  //       this.checkSimilar(parent1.left, parent2.left) &&
  //       parent1.right !== null &&
  //       parent2.right !== null &&
  //       this.checkSimilar(parent1.right, parent2.right)
  //     );
  //   }
  //   return false;
  // }

  checkSimilar(parent1, parent2) {
    if (!parent1 && !parent2) return true;
    if (
      (parent1 && parent2 && parent1.value !== parent2.value) ||
      (!parent1 && parent2) ||
      (parent1 && !parent2)
    )
      return false;
    let left = this.checkSimilar(parent1.left, parent2.left);
    let right = this.checkSimilar(parent1.right, parent2.right);

    console.log("l&r", left, right);
    return left && right;
  }
}

//testing

// arr = [];
// arr2 = [];
arr = [10, 5, 15, 6, 1, 12, 18];
arr2 = [10, 5, 15, 6, 1, 8, 12, 18];
// arr = [];
let bst = new BST();
let bst2 = new BST();

let runBst = (array, tree) => {
  for (let value of array) {
    tree.insert(value);
  }
  // return tree.check();
};

runBst(arr, bst);
runBst(arr2, bst2);
// console.log(bst, bst2);

console.log("height:", bst2.height());
// console.log(bst.minimum2());
// console.log(bst.isSimilar(bst2.check()));
