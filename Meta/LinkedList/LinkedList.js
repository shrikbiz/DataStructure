class Node {
  constructor(value) {
    this.value = value ?? null;
    this.next = null;
  }
}

class LinkedList {
  constructor(list) {
    this.head = null;
    this.tail = null;
    this.constructLinkedList(list);
  }

  constructLinkedList(list) {
    if (!list || !list.length) {
      console.error("list is empty");
      return;
    }
    let current = null;
    for (const index in list) {
      const value = list[index];
      if (!this.head) {
        this.head = new Node(value);
        current = this.head;
        continue;
      }
      current.next = new Node(value);
      current = current.next;
    }
    this.tail = current;
    this.print();
  }

  addLast(value) {
    if (!this.head && !this.tail) {
      this.constructLinkedList([value]);
      this.print();
      return;
    }
    let current = this.tail;
    current.next = new Node(value);
    this.tail = current.next;
    this.print();
  }

  addFirst(value) {
    if (!this.head && !this.tail) {
      this.constructLinkedList([value]);
      this.print();
      return;
    }
    let current = new Node(value);
    current.next = this.head;
    this.head = current;
    this.print();
  }

  print() {
    let current = this.head;
    let outputStringArray = [];
    while (current) {
      outputStringArray.push(current.value, "->");
      current = current.next;
    }
    outputStringArray.pop();
    console.log(outputStringArray.join(" "));
  }

  addValue(position, value, isBefore) {
    if (position < 0) {
      console.error("Position cant be negative");
      return;
    }
    let index = 0;
    let current = this.head;
    const positionConstant = isBefore ? position - 1 : position;
    while (index !== positionConstant && current) {
      current = current.next;
      index++;
    }
    if (!current) {
      console.error("position exceeds length of linked list");
      return;
    }
    if (!current.next) {
      this.addLast(value);
      this.print();
      return;
    }
    this.addNextTo(current, value);
  }

  addNextTo(node, value) {
    let next = node.next;
    node.next = new Node(value);
    node.next.next = next;
  }

  addValueBefore(position, value) {
    if (position === 0) {
      this.addFirst(value);
      this.print();
      return;
    }
    this.addValue(position, value, true);
    this.print();
    return;
  }

  addValueAfter(position, value) {
    if (position === 0 && !this.head) {
      this.addFirst(value);
      this.print();
      return;
    }
    this.addValue(position, value, false);
    this.print();
    return;
  }

  reverse() {
    let current = this.head;
    this.tail = null;
    this.head = null;
    while (current) {
      this.addFirst(current.value);
      current = current.next;
    }
    this.tail = current;
    this.print();
    return;
  }

  /**
   * 1 -> 2 -> 3 -> 4 -> 5 -> 6
   */

  kthNodeValueFromLast(position) {
    if (!this.head && !this.tail) {
      console.error("list is not populated");
      return;
    }
    let index = 0;
    let current = this.head;
    let kthNode = current;
    while (current) {
      console.log(current, kthNode);
      if (index > position) {
        kthNode = kthNode.next;
      }
      current = current.next;
      index++;
    }
    console.log(kthNode.value);
  }

  moveNodeIndex(node) {
    node = node.next;
  }
}

// const ll = new LinkedList([1, 2, 3, 4, 5, 6, 7]);
const ll = new LinkedList();
// ll.addLast(15);
// ll.addFirst(0);
// ll.addValueAfter(5, 10);
// ll.reverse();
ll.kthNodeValueFromLast(4);
