class LinkedList2 {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFirst(value) {
    this.head = new Node(value, this.head);
    if (!this.tail) this.tail = this.head;
  }

  addLast(value) {
    const newTail = new Node(value);
    this.tail.next = newTail;
    this.tail = newTail;
    if (!this.head) this.head = this.tail;
  }

  deleteFirst() {
    this.head = this.head.next;
  }

  deleteLast() {
    let secondLastNode = this.head;
    let current = this.head;
    while (true) {
      if (current.next) {
        secondLastNode = current;
        current = this.head.next;
      } else {
        this.tail = secondLastNode;
        this.tail.next = null;
        break;
      }
    }
  }
  /**
   * 1 <- 2   3 -> 4 -> 5
   *      c    n
   *
   *
   */

  reverse() {
    if (this.head.next === null) {
      return;
    }

    let current = this.head;
    let next = this.head.next;
    this.tail = this.head;
    this.tail.next = null;
    let i = 0;
    while (next) {
      let temp = next;
      next = next.next;
      temp.next = current;
      current = temp;

      // safeguard
      i++;
      if (i > 100) break;
    }
    this.head = current;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) break;
      current = current.next;
    }
    console.log("🚀 ~ LinkedList ~ contains ~ current:", current?.value);
    return current?.value;
  }

  indexOfNode(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) break;
      current = current.next;
      index++;
    }
    const result = current ? index : -1;
    console.log("🚀 ~ LinkedList ~ indexOfNode ~ result:", result);
    return result;
  }

  viewList() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log("LL: ", arr.join(" -> "));
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

const ll = new LinkedList2();

ll.addFirst(1);
ll.addLast(2);
ll.addLast(3);
ll.addLast(4);
ll.addLast(5);
ll.viewList();
ll.reverse();
ll.viewList();
ll.indexOfNode(1);
ll.indexOfNode(10);
ll.contains(10);
ll.contains(3);
