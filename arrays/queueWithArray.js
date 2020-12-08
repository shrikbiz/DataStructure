/**
 * build a queue using an array
 * use two pointers, and shift pointers accordingly
 * however, while dequeuing, you will be shifting the pointer, and not deleting the old value.
 *
 * enqueue
 * dequeue
 * peek
 * isEmpty
 * isFull
 *
 * class:  constructor: array, head, tail
 *
 *  let arr = [1, 2, 3, 4, 5, 6];
 *                  **
 *
 * ENQUEU(){
 * if head === tail && queue[head] === queue[tail];
 * tail = -1
 * }
 *
 */

class ArrayQueue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = -1;
  }

  enqueue(value) {
    if (this.tail < this.head) {
      this.head = this.tail = 0;
      this.queue.push(value);
    } else {
      this.tail++;
      this.queue[this.tail] = value;
    }
  }

  dequeue() {
    if (this.head > this.tail) {
      return "the queue is empty";
    } else if (this.head === this.tail) {
      this.tail = -1;
      this.head = 0;
    } else {
      this.head++;
    }
  }

  peek() {
    if (this.tail !== -1)
      return `head: ${this.queue[this.head]}, tail: ${this.queue[this.tail]}`;
  }

  isEmpty() {
    this.tail === -1 ? true : false;
  }

  realQueue() {
    if (this.head < this.tail) {
      let arr = [];
      for (let i = this.head; i <= this.tail; i++) {
        arr.push(this.queue[i]);
      }
      return `
      Read Queue: ${arr},
      Whole Array: ${this.queue}
      `;
    } else return "queue is empty";
  }
}

let queue = new ArrayQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(10);

console.log(queue.peek());
console.log(queue.realQueue());
