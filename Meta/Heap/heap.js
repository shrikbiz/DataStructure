class MaxHeap {
  constructor(array) {
    this.array = [];
    this.sortArray(array);
  }

  sortArray(array) {
    if (!array.length) return;

    for (let value of array) {
      this.insert(value);
    }
  }

  insert(value) {
    if (!this.array.length) {
      this.array.push(value);
      return;
    }
    this.array.push(value);
    this.bubbleUp(this.array.length - 1);
  }

  bubbleUp(position) {
    if (position === 0) return;
    const parent = Math.floor(position - 1 / 2);
    if (this.array[parent] < this.array[position]) {
      this.swap(parent, position);
      this.bubbleUp(parent);
    }
  }

  bubbleDown(position) {
    if (!this.array.length || this.array.length === 1) {
      return;
    }
    if (position === this.array.length) {
      return;
    }
    const left = position * 2 + 1;
    const right = position * 2 + 2;

    if (left >= this.array.length) {
      return;
    }

    const greaterOfTwoChildren =
      right >= this.array.length || this.array[left] > this.array[right]
        ? left
        : right;

    if (this.array[greaterOfTwoChildren] > this.array[position]) {
      this.swap(position, greaterOfTwoChildren);
      this.bubbleDown(greaterOfTwoChildren);
    }
  }

  popTop() {
    if (!this.array.length) return;
    this.swap(0, this.array.length - 1);
    const greatestNumber = this.array.pop();
    console.log(greatestNumber);
    this.bubbleDown(0);
    return greatestNumber;
  }

  swap(index1, index2) {
    const temp = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = temp;
  }
  print() {
    console.log(this.array);
  }

  getSortedArray() {
    const array = [];
    let safeIndex = 0;
    while (this.array.length) {
      if (safeIndex > 1000) break;
      const value = this.popTop();
      array.push(value);
      safeIndex++;
    }
    console.log(array);
  }
}

const newHeap = new Heap([5, 4, 3, 6, 10, 7, 8, 20, 20]);
newHeap.insert(100);
newHeap.getSortedArray();
newHeap.print();
