class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }
  pop() {
    let remove = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return remove;
  }
  peek() {
    console.log(this.storage);
    return this.storage;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(5);
stack.peek();
stack.pop();
stack.peek();
