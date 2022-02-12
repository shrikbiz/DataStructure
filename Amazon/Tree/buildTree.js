class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    if (!this.root || !this.root.value) this.root = new Node(value);
    else {
      let current = this.root;
      while (true) {
        if (current.value >= value) {
          if (!current.left) {
            current.left = new Node(value);
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = new Node(value);
            break;
          }
          current = current.right;
        }
      }
    }
  }

  print() {
    console.log("Tree:", this.root);
  }

  //solution 1
  // find(value) {
  //   let current = this.root;
  //   while (true) {
  //     if (current.value === value) return true;
  //     if (current.value < value) current = current.left;
  //     else current = current.right;
  //     if (!current) break;
  //   }
  //   return false;
  // }

  //solution 2
  find(value) {
    let current = this.root;
    while (current) {
      if (current.value > value) current = current.left;
      else if (current.value < value) current = current.right;
      else return true;
    }
    return false;
  }
  //--------DFS trevarse methods----------//
  preOrder(current = this.root, order = []) {
    if (!current) return;
    order.push(current.value);
    this.preOrder(current.left, order);
    this.preOrder(current.right, order);
    return order;
  }
  inOrder(current = this.root, order = []) {
    if (!current) return;
    this.inOrder(current.left, order);
    order.push(current.value);
    this.inOrder(current.right, order);
    return order;
  }

  postOrder(current = this.root, order = []) {
    if (!current) return;
    this.postOrder(current.left, order);
    this.postOrder(current.right, order);
    order.push(current.value);
    return order;
  }

  //--------------end of DFS trevarse methods---------//
  //--------------BFS trevarse method---------//

  bfs(current = this.root, order = [this.root.value]) {
    if (!current) return;
    if (current.left) order.push(current.left.value);
    if (current.right) order.push(current.right.value);
    this.bfs(current.left, order);
    this.bfs(current.right, order);
    return order;
  }

  //--------------end of BFS trevarse method---------//

  height(current = this.root) {
    if (!current) return -1;
    if (!current.right && !current.left) return 0;
    let left = current.left ? current.left : null;
    let right = current.right ? current.right : null;
    return 1 + Math.max(this.height(left), this.height(right));
  }

  //my solution
  minValue(current = this.root, minVal = this.root.value) {
    // if (!current) return Infinity;
    if (!current) return minVal;
    minVal = Math.min(current.value, minVal);
    let left = this.minValue(current.left, minVal);
    console.log("🚀 left", left, current.value);
    let right = this.minValue(current.right, minVal);
    console.log("🚀 right", right, current.value);
    return Math.min(left, right);
  }
  maxValue(current = this.root) {
    if (!current) return;
    if (!current.right && !current.left) return current.value;
    let left = current && current.left ? this.maxValue(current.left) : 0;
    let right = current && current.right ? this.maxValue(current.right) : 0;
    return Math.max(left, right);
  }

  disript() {
    this.root.left.right = new Node(100);
    this.root.right.right.left = new Node(15);
  }

  // nodeDepth() {
  //   let root = this.root;
  //   let sum = 0;
  //   let level = 0;
  //   sum = this.nodeDepthHelper(root, sum, level);
  //   return sum;
  // }

  nodeDepths(root = this.root, level = 0) {
    if (!root) return 0;
    console.log("🚀 -> Tree -> nodeDepthHelper -> sum", level);
    return (
      level +
      this.nodeDepths(root.left, level + 1) +
      this.nodeDepths(root.right, level + 1)
    );
  }

  //this is not how it is done //re do please
  // T: O(Number of Node) S:O(max depth of the tree)
  isBST(current = this.root, leftRange = -Infinity, rightRange = Infinity) {
    if (!current) return true; //base condition
    if (current.value >= leftRange && current.value <= rightRange) {
      //check if the curret node value is valid (in between the range)
      return (
        this.isBST(current.left, leftRange, current.value) &&
        this.isBST(current.right, current.value, rightRange)
      );
    }
    return false;
  }
}

let tree = new Tree();
tree.insert(7);
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
// console.log("bfs:", tree.bfs());
// tree.disript();
tree.print();

// let value = 121;
// console.log(
//   tree.find(value) ? `${value} is available` : `${value} is not available`
// );
// console.log("DFS: in-order:", tree.inOrder());
// console.log("DFS: post-order:", tree.postOrder());
// console.log("maxHeight:", tree.height());
// console.log("min Value:", tree.minValue());
// console.log("max Value:", tree.maxValue());
// console.log("nodedepth", tree.nodeDepths());
// console.log("isBST:", tree.isBST());
