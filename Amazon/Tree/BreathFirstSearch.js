class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
      return;
    }
    let current = this;
    while (true) {
      if (current.value >= value) {
        if (!current.left) {
          current.left = new Tree(value);
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = new Tree(value);
          break;
        }
        current = current.right;
      }
    }
  }

  print() {
    console.log("Tree:", this);
  }

  //   T: O(n) | n = # of elements in tree
  //   S: O(n+n) = O(n) | n = # of elements in tree
  bfs() {
    let traversal = []; // S: O(n) | n = # of elemnts in tree
    let queue = [this]; //S: O(n) | n = # of elements in tree
    //T: O(n) | n = # of elements in tree
    let index = 0;
    while (index < queue.length) {
      let current = queue[index];
      traversal.push(current.value);
      index++;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    console.log(traversal);
  }

  //T: O(n^2)
  //   bfs() {
  //     let traversal = [];
  //     let queue = [this];
  //     //T: O(n) | n = n of elements in array
  //     // let index = 0;
  //     while (queue.length) {
  //       let current = queue.shift();
  //       traversal.push(current.value);
  //       //   index++;
  //       if (current.left) queue.push(current.left);
  //       if (current.right) queue.push(current.right);
  //     }
  //     console.log(traversal);
  //   }
}

let tree = new Tree(7);

tree.insert(4);
tree.insert(6);
tree.insert(1);
tree.insert(9);
tree.insert(8);
tree.insert(0);
tree.insert(2);
tree.insert(3);
tree.insert(10);
tree.insert(10);
tree.bfs();
tree.print();

//               7
//             /    \
//            4      9
//           / \    / \
//          1   6  8   10
//         / \          \
//        0   2         10
//           / \
//              3
//
