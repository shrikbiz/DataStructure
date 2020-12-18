/**
2- Design a stack that supports push, pop and 
retrieving the minimum value in constant time. 

For example, we populate our stack with [5, 2, 10, 1] (from left to right). 

stack.min() // 1
stack.pop() 
stack.min() // 2 


roughArea:

[5,2,10,1]

init a class, with constructor as an array and minValue which is a stack

push():
on push of every value we compare and say, 
if the value is smaller or equalTo than minValue[minValue.length - 1]: minValue.push(value)

and continue with push method of value to the array

pop():
check minValue[minValue.length - 1] === array[array.length - 1]{
    minValue.pop()
}
array.pop();

min()
return minValue[minValue.length -1]


**/

// space complexity O(n)

class Stack {
  constructor() {
    this.stack = []; //act as stack
    this.minValue = []; //act as stack
  }

  push(value) {
    if (this.stack.length === 0) {
      this.minValue.push(value);
    } else {
      if (value < this.minValue[this.minValue.length - 1])
        this.minValue.push(value);
    }
    this.stack.push(value);
  }

  pop() {
    if (
      this.stack.length !== 0 &&
      this.minValue[this.minValue.length - 1] ===
        this.stack[this.stack.length - 1]
    ) {
      console.log("pop", this.minValue);
      this.minValue.pop();
    }
    this.stack.pop();
  }

  min() {
    if (this.minValue.length !== 0)
      return this.minValue[this.minValue.length - 1];
  }

  check() {
    console.log(`
    stack : ${this.stack} 
    min value:${this.minValue[this.minValue.length - 1]}
    `);
  }
}

let stack = new Stack();

stack.push(10);
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(1);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.check();

// console.log(stack);
