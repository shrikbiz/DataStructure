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

  delete() {
    let parent = 0;
    console.log("Deleting:", this.heap[parent]);
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
    console.log("Heap:", this.heap);
    return this.heap;
  }
}

let heap = new Heap();

heap.add(25);
heap.add(22);
heap.add(21);
heap.add(15);
heap.add(11);
heap.add(9);
heap.add(8);
heap.add(2);
heap.add(1);
heap.add(19);

heap.display();

heap.delete();
heap.display();
heap.delete();
heap.display();
heap.delete();
heap.display();
heap.add(20);
heap.display();
