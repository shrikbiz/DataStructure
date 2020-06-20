class LinkedList {
  constructor() {
    this.head = this.tail = 0;
  }
  add(value) {
    if (!this.head) this.head = this.tail = new Node(value);
    else {
      let oldHead = this.head;
      this.head = new Node(value);
      this.head.next = oldHead;
    }
  }

  reverseLoop() {
    let list = this.head;
    this.empty();
    while (list) {
      this.add(list.value);
      list = list.next;
    }
  }

  getFromEnd(key) {
    if (key < 0) return "invalid input";
    let list = this.head;
    let kthNode = this.head;
    let counter = 0;
    let validator = false;

    while (list) {
      if (counter + 1 >= key) {
        validator = true;
        kthNode = kthNode.next;
      }

      counter++;
      list = list.next;
    }
    console.log(validator || key < 0 ? kthNode.value : "invalid input");
    return validator ? kthNode.value : "invalid input";
  }

  empty() {
    this.head = this.tail = 0;
  }

  check() {
    let list = this.head;
    let array = [];
    while (list) {
      array.push(list.value);
      list = list.next;
    }
    console.log(
      "linkedlist:",
      array,
      "head:",
      this.head.value,
      "tail",
      this.tail.value
    );
    return array;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

let ll = new LinkedList();
// ll.add(7);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.add(5);
// ll.add(10);
// // ll.empty();
// ll.add(8);
ll.getFromEnd(0);
ll.check();
ll.reverseLoop();
ll.check();

/*

{value:
next:{
    value:
    next:...
}
}
--------------------
kth from the end

[10 -> 20 -> 30 -> 40 -> 50]
              c2          c1          
k = 3;

let list = this.head;
let kthValue = this.head;
counter = 0;
while(list){
    if(counter >= k) {
        kthValue = kthValue.next;
    }
    counter++
    list = list.next;
}
kthValue.value
*/
