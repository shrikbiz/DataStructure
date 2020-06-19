class Queue {
  constructor() {
    this.storage = {};
    //this is index of head and tail not the value of head and tail
    this.head = this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    if (this.tail) {
      let itemRemove = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      if (this.head === this.tail) this.head = this.tail = 0;
      return itemRemove;
    }
  }
}

let queue = new Queue();

queue.enqueue("ronaldo");
queue.enqueue("messi");
queue.enqueue("marcelo");
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
