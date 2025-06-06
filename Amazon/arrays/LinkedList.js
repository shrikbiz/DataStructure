//technique 1

/*

//sort of what interface look like for LinkedList
class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  // add to the end of the list / tail
  append(value) {
    // if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    }
    // if linkedlist has >= one node
    else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  //add to beginning of list / head
  prepend(value) {
    if (!this.head) {
      this.head = this.tail = newNode(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead() {
    this.head = this.head.next;
    this.head.prev = null;
  }

  deleteTail() {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  search(value) {
    let searchList = this.head;
    while (searchList) {
      if (searchList.value === value) return value;
      searchList = searchList.next;
    }
    console.log(searchList.value, searchList.prev, searchList.next);
    return null;
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(5);
list.append(6);
list.append(31);
list.append(33);
list.append(98);
list.prepend(0);
list.prepend(-1);
list.deleteHead();
list.deleteTail();
list.search(6);

*/

// technique 2

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  addFirst(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      this.r.next = oldHead;
    }
  }

  addLast(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let newTail = new Node(value);
      this.tail = this.tail.next = newTail;
    }
  }

  deleteFirst() {
    if (this.head && this.head.next) this.head = this.head.next;
    else this.head = this.tail = null;
  }

  deleteLast() {
    if (this.head && this.head.next) {
      let list = this.head;
      let prevNode;
      while (list) {
        if (!list.next) {
          prevNode.next = null;
          this.tail = prevNode;
          break;
        }
        prevNode = list;
        list = list.next;
      }
    } else this.head = this.tail = null;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    while (current !== null) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    console.log("🚀 -> LinkedList -> reverse -> prev", prev);
    this.head = prev;
  }

  contains(value) {
    let list = this.head;
    let ans = false;
    while (list) {
      if (list.value === value) {
        ans = true;
        break;
      }
      list = list.next;
    }
    console.log(`this list contains ${value}: ${ans}`);
  }

  indexOfNode(value) {
    let list = this.head;
    let position = 0;
    let ans = false;
    while (list) {
      if (list.value === value) {
        ans = true;
        break;
      }
      if (!list.next) {
        position = -1;
        break;
      }
      position++;
      list = list.next;
    }
    console.log(`this list contains ${value} at position: ${position}`);
  }
  viewList() {
    let list = this.head;
    let listAsArray = [];
    while (list) {
      listAsArray.push(list.value);
      list = list.next;
    }
    console.log("list now is", listAsArray);
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

let list = new LinkedList();

list.addFirst(0);
// list.addFirst(1);

// list.addFirst(2);
// list.addFirst(3);
// list.addFirst(4);
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);
list.addLast(5);
list.addLast(6);
list.addLast(7);
list.addLast(8);
list.addLast(9);
// list.addLast(7);

// list.reverse();
list.viewList();
function removeKthNodeFromEnd(head, k) {
  let current = head;
  let previous;
  let currentLength = 1;
  while (true) {
    if (!current.next) {
      if (currentLength === k) {
        head = head.next;
        console.log("removeKthNodeFromEnd -> head", head);
      } else {
        previous.next = previous.next.next;
      }
      break;
    }
    if (previous) previous = previous.next;
    if (currentLength === k) {
      previous = head;
    }
    currentLength++;
    current = current.next;
  }
  let curr = head;
  while (curr) {
    console.log(curr.value);
    curr = curr.next;
  }
  return head;
}

console.log(removeKthNodeFromEnd(list.head, 10));
