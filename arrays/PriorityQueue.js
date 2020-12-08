//time complexity: O(n); -> enqueue
//space complexity:  O(1); -> enqueue

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    if (this.queue.length === 0 || this.queue[this.queue.length - 1] < value) {
      this.queue.push(value);
    } else {
      for (let i = this.queue.length - 1; i >= 0; i--) {
        if (this.queue[i] >= value) {
          this.queue[i + 1] = this.queue[i];
          if (i === 0) {
            this.queue[i] = value;
          }
        } else if (this.queue[i] < value) {
          this.queue[i + 1] = value;
          break;
        }
      }
    }
  }

  dequeue() {
    this.queue.shift();
  }

  check() {
    console.log(this.queue, this.queue.length);
  }
}

let queue = new PriorityQueue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(10);
queue.enqueue(18);
queue.dequeue();
queue.enqueue(16);
queue.enqueue(222);
queue.enqueue(9);
queue.enqueue(100);

queue.check();
