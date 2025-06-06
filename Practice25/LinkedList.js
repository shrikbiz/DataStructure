class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        return this;
    }

    // Time : O(1)
    // Space : O(1)
    addFirst(number) {
        if (!this.head) {
            // Its assumed that if the head is empty,
            // the tail will also be empty as LL is empty.
            this.#addToEmpty(number);
        } else {
            let currentHead = this.head;
            this.head = new Node(number);
            this.head.next = currentHead;
        }
        return this;
    }

    #addToEmpty(number) {
        this.head = new Node(number);
        this.tail = this.head;
    }

    // Time : O(1)
    // Space : O(1)
    addLast(number) {
        if (!this.tail) {
            // Its assumed that if the tail is empty,
            // the head will also be empty as LL is empty.
            this.#addToEmpty(number);
        } else {
            this.tail.next = new Node(number);
            this.tail = this.tail.next;
        }
        return this;
    }

    clear() {
        this.head = null;
        this.tail = null;
        return this;
    }

    // Time : O(1)
    // Space : O(1)
    deleteFirst() {
        if (this.head === this.tail) return this.clear();
        this.head = this.head.next;
        return this;
    }

    // Time : O(n) | n is the length of linked list
    // Space : O(1)
    deleteLast() {
        if (this.head === this.tail) return this.clear();
        let previous = this.head;
        let current = this.head;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        return this;
    }

    // Time : O(n) | n is the length of linked list
    // Space : O(1)
    contains(number) {
        return this.indexOf(number) !== -1;
    }

    // Time : O(n) | n is the length of linked list
    // Space : O(1)
    indexOf(number) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === number) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    // Time : O(n) | n is the length of linked list
    // Space : O(1)
    size() {
        let current = this.head;
        let index = 0;
        while (current) {
            current = current.next;
            index++;
        }
        return index;
    }

    // Time : O(n) | n is the length of linked list
    // Space : O(1)
    toArray() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }

    reverse() {
        if (this.head === this.tail) return this;
        let current = this.head;
        this.clear();
        while (current) {
            this.addFirst(current.value);
            current = current.next;
        }
        return this;
    }

    print() {
        console.log(this.toArray());
        return this;
    }

    printTail() {
        console.log(this.tail.value);
        return this;
    }

    printHead() {
        console.log(this.head.value);
        return this;
    }

    printHeadTail() {
        console.log(`Head: ${this.head.value} & Tail: ${this.tail.value}`);
        return this;
    }

    kthNodeFromTheEnd(k) {
        // let index = 0;
        let kthNode = null;
        let current = this.head;
        while (current) {
            if (k > 1) k--;
            else kthNode = kthNode?.next ?? this.head;
            current = current.next;
        }
        return kthNode?.value;
    }

    findMiddle() {
        if (!this.head.next) return this.head?.value;
        let current = this.head;
        let middleNode;
        while (current !== this.tail && current.next !== this.tail) {
            middleNode = middleNode?.next ?? this.head;
            current = current.next.next;
        }
        if (current === this.tail) {
            return middleNode.value;
        } else {
            return [middleNode.value, middleNode.next.value];
        }
    }
}

function executeLinkedList() {
    let s = 1;
    let ll = new LinkedList();
    console.log("kthNode: ", ll.kthNodeFromTheEnd(20));
    ll.addFirst(1)
        .addFirst(2)
        .addFirst(5)
        .addFirst(6)
        .addFirst(7)
        .addFirst(8)
        .addFirst(3)
        .addLast(4)
        .addFirst(5)
        .addFirst(6)
        .printHeadTail()
        .print();

    console.log("-----");
    ll.reverse().print().printHeadTail();
    console.log("middle node:", ll.findMiddle());
    ll.reverse().print().printHeadTail();
    console.log("middle node:", ll.findMiddle());
    ll.deleteFirst();
    ll.deleteFirst();
    ll.deleteFirst();
    ll.deleteFirst();
    ll.deleteFirst().print();
    console.log("middle node:", ll.findMiddle());
    // console.log(`s${s++}: `, ll.indexOf(1));
    // console.log(`s${s++}: `, ll.indexOf(10));
    // console.log(`s${s++}: `, ll.contains(3));
    // console.log(`s${s++}: `, ll.contains(0));
    // console.log(`s${s++}: `, ll.size());

    // ll.print().deleteFirst().print();
    // console.log("-----");
    // ll.print().deleteFirst().print();
    // console.log("-----");
    // ll.print().deleteLast().print();
    // console.log("-----");
    // ll.print().deleteLast().print();
    // console.log("-----");
    // ll.print().deleteLast().print();
    // console.log("-----");
    // ll.print().deleteLast().print();
}

executeLinkedList();
