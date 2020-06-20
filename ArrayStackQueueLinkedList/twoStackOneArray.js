/*
Question:
StacksExercises1-  Implement two stacks in one array. 
Support these operations:  
push1() // to push in the first stack
push2() // to push in the second stack
pop1()
pop2()
isEmpty1()
isEmpty2()
isFull1()
isFull2()
Make sure your implementation is space efficient. 
(hint: do not allocate the same amount of space by dividing the array in half.)
------------------------------
rough area:
[1,2,3,4,5];
[a,b,c,d,e];

[1,a,2,b,3,c,4,d,5]
push()
pop()
isEmpty();
~isFull();

*/

// time complexity: O(1)
// space complexity: O(1)

class Stack {
  constructor() {
    this.array = [];
    this.tail1 = 0;
    this.tail2 = 1;
  }
  push1(value) {
    if (!this.array[0]) {
      this.array[0] = value;
    } else {
      this.tail1 += 2;
      this.array[this.tail1] = value;
    }
  }

  push2(value) {
    if (!this.array[1]) {
      this.array[1] = value;
    } else {
      this.tail2 += 2;
      this.array[this.tail2] = value;
    }
  }

  pop1() {
    if (this.tail1 >= 0) {
      this.array[this.tail1] = "";
      this.tail1 -= 2;
    }
  }

  pop2() {
    if (this.tail2 > 0) this.array[this.tail2] = "";
    this.tail2 -= 2;
  }

  isEmpty1() {
    return this.tail1 === 0 ? true : false;
  }

  isEmpty2() {
    return this.tail2 === 1 ? true : false;
  }

  //only for checking out, so not considering its complexity
  checkout1() {
    let output = [];
    for (let i = 0; i < this.array.length; i++) {
      if (i % 2 === 0 && this.array[i]) output.push(this.array[i]);
    }
    console.log("stack1 =>", output, "and peek1:", this.array[this.tail1]);
    return output;
  }
  //only for checking out, so not considering its complexity
  checkout2() {
    let output = [];
    for (let i = 1; i < this.array.length - 1; i++) {
      if (i % 2 !== 0 && this.array[i]) output.push(this.array[i]);
    }
    console.log("stack2 =>", output, "and peek2:", this.array[this.tail2]);
    return output;
  }
}

let stack = new Stack();

stack.push1(1);
stack.push1(2);
stack.push1(3);
stack.push1(4);
stack.push1(5);
stack.push2("a");
stack.push2("b");
stack.push2("c");
stack.push2("d");
stack.push2("e");
stack.pop1();
stack.pop2();
stack.push1(34);
stack.push1(24);
stack.push1(14);
stack.checkout1();
stack.checkout2();

stack.checkout;
