/**
the name of the file suggest what the question is. 

fifo;
we only have head and tail;


take help of stack: 

QUEUE   [10, 20 ,30]
        [1st 2nd 3rd]

STACK   [30,20,10]

queue   [30,20,10]


*/

let reverseQueue = (queue) => {
  let stack = [];
  while (queue.length !== 0) {
    stack.push(queue.shift());
  }
  while (stack.length !== 0) {
    queue.push(stack.pop());
  }
  console.log(queue);
};

reverseQueue([1, 2, 3, 3, 4, 5, 6]);
