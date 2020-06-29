// find the node at given distance;

// since its tree we are going to use recurision

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
    console.log(parent.left.left.left);
  }

  distance(val) {
    let array = [];
    this.nodeAtDistance(this.root, val, array);
    return array;
  }

  nodeAtDistance(parent, distance, array) {
    if (!parent) return;
    console.log(parent.value);
    if (distance === 0) {
      console.log("distance", parent.value);
      array.push(parent.value);
      return;
    }

    this.nodeAtDistance(parent.left, distance - 1, array);
    this.nodeAtDistance(parent.right, distance - 1, array);
  }
}

//filling tree

arr = [10, 5, 15, 6, 1, 8, 12, 18, 17];
let bst = new BST();

let runBst = (array) => {
  for (let value of array) {
    bst.insert(value);
  }
  return bst.check();
};

runBst(arr);

console.log(bst.distance(3));
