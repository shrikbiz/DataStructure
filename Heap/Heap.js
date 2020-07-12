class Heap {
  constructor() {
    this.heap = [];
  }

  add(value) {
    this.heap[this.heap.length] = value;
    let child = this.heap.length - 1;
    let parent = child % 2 === 0 ? (child - 2) / 2 : (child - 1) / 2;
    while (this.heap[child] > this.heap[parent]) {
      let temp = this.heap[parent];
      this.heap[parent] = value;
      this.heap[child] = temp;
      child = parent;
      parent = child % 2 === 0 ? (child - 2) / 2 : (child - 1) / 2;
    }
  }

  remove() {
    let parent = 0;
    let root = this.heap[parent];
    this.heap[parent] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let child = this.leftRightChild(this.heap, parent);
    while (this.heap[child] > this.heap[parent]) {
      let temp = this.heap[parent];
      this.heap[parent] = this.heap[child];
      this.heap[child] = temp;

      parent = child;
      child = this.leftRightChild(this.heap, parent);
    }
    return root;
  }

  leftChild(parent) {
    return parent * 2 + 1;
  }
  rightChild(parent) {
    return parent * 2 + 2;
  }

  leftRightChild(heap, parent) {
    if (!heap[this.rightChild(parent)]) return this.leftChild(parent);
    return this.heap[this.leftChild(parent)] >
      this.heap[this.rightChild(parent)]
      ? this.leftChild(parent)
      : this.rightChild(parent);
  }

  display() {
    console.log("Heap -> display -> this.heap", this.heap);
    return this.heap;
  }
  findKth(times) {
    if (times < 1 || times > this.heap.length) {
      console.log("Wrong parameter in .findKth()");
      return;
    }
    for (let i = 0; i < times - 1; i++) {
      this.remove();
    }
    console.log("Heap -> findKth -> Kth Largest Value", this.heap[0]);
    return this.heap[0];
  }
}

let heap = new Heap();

heap.add(5);
heap.add(3);
heap.add(8);
heap.add(4);
heap.add(1);
heap.add(2);
// heap.remove();
heap.display();
// heap.findKth(0);
heap.display();


