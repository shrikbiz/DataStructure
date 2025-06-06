class Node {
    constructor(value, index) {
        this.value = value;
        this.next = null;
        this.previous = null;
        this.index = index;
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
            this.#addToEmpty(number);
            return this;
        }
        const newHead = new Node(number, this.head.index - 1);
        newHead.next = this.head;
        this.head.previous = newHead;
        this.head = newHead;
        return this;
    }

    #addToEmpty(number) {
        this.head = new Node(number, 0);
        this.tail = this.head;
    }

    // Time : O(1)
    // Space : O(1)
    addLast(number) {
        if (!this.tail) {
            this.#addToEmpty(number);
            return this;
        }
        const newTail = new Node(number, this.tail.index + 1);
        newTail.previous = this.tail;
        this.tail.next = newTail;
        this.tail = newTail;
        return this;
    }

    // Time : O(1)
    // Space : O(1)
    deleteFirst() {
        this.head = this.head.next;
        this.head.previous = null;
        return this;
    }

    // Time : O(1)
    // Space : O(1)
    deleteLast() {
        this.tail = this.tail.previous;
        this.tail.next = null;
        return this;
    }

    // Time :
    // Space :
    contains(number) {
        return this.indexOf(number) !== -1;
    }

    #resetIndex() {
        let index = 0;
        let current = this.head;
        while (current) {
            current.index = index;
            current = current.next;
            index++;
        }
    }

    // This index is different than internal index used for node.
    // Internal index is used for reference and can start from any number.
    deleteIndexOf(index) {
        this.#resetIndex();
        let current = this.head;
        while (current) {
            if (current.index === index) {
                if (current.previous) current.previous.next = current.next;
                if (current.next) current.next.previous = current.previous;
                if (current === this.head) this.head = current.next;
                if (current === this.tail) this.tail = current.previous;
            }
            current = current.next;
        }
        return this;
    }

    // Time : O(n + n) ~ O(n) | n is the length of linked list.
    // Space : O(1)
    indexOf(number) {
        this.#resetIndex();
        let current = this.head;
        while (current) {
            if (current.value === number) return current.index;
            current = current.next;
        }
        return -1;
    }

    // Time : O(1)
    // Space : O(1)
    size() {
        return this.tail.index - this.head.index + 1;
    }

    // Time :
    // Space :
    toArray() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
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
        console.log(
            `Head: ${this.head?.value ?? null} & Tail: ${
                this.tail?.value ?? null
            }`
        );
        return this;
    }

    reverse() {
        let current = this.head;
        // this.head = this.tail;
        this.tail = current;

        while (current) {
            if (!current.next) this.head = current;
            const temp = current.next;
            current.next = current.previous;
            current.previous = temp;
            current = temp;
        }
        return this;
    }
}

function executeLinkedList() {
    let s = 1;
    let ll = new LinkedList()
        .addFirst(1)
        .addFirst(2)
        .addFirst(3)
        .addFirst(4)
        .addFirst(5)
        .addFirst(6)
        .addFirst(7)
        // .addLast(8)
        // .addLast(3)
        // .addLast(4);
        .print()
        .printHeadTail();

    ll.reverse().print().printHeadTail();
    ll.reverse().print().printHeadTail();

    // console.log(`s${s++}: `, ll.indexOf(1));
    // console.log(`s${s++}: `, ll.indexOf(10));
    // console.log(`s${s++}: `, ll.contains(3));
    // console.log(`s${s++}: `, ll.contains(0));
    // console.log(`s${s++}: `, ll.size());

    // console.log(1, "-----");
    // ll.deleteIndexOf(4).print().printHeadTail();
    // // console.log(1, "-----");
    // ll.deleteIndexOf(4).print().printHeadTail();
    // // console.log(1, "-----");
    // ll.deleteIndexOf(3).print().printHeadTail();
    // // console.log(1, "-----");
    // ll.deleteIndexOf(2).print().printHeadTail();
    // // console.log(1, "-----");
    // ll.deleteIndexOf(1).print().printHeadTail();
    // // console.log(1, "-----");
    // ll.deleteIndexOf(1).print().printHeadTail();
    // console.log(1, "-----");
    // ll.deleteIndexOf(0).print().printHeadTail();
    // console.log(1, "-----");
    // ll.deleteIndexOf(0).print().printHeadTail();
    // console.log(1, "-----");
    // ll.deleteIndexOf(0).print().printHeadTail();
    // ll.deleteIndexOf(0).print().printHeadTail();
    // ll.deleteIndexOf(0).print().printHeadTail();
    // ll.deleteIndexOf(0).print().printHeadTail();
    // ll.deleteIndexOf(0).print().printHeadTail();
    // console.log(1, "-----");
    // ll.print().deleteFirst().print().printHeadTail();
    // console.log(2, "-----");
    // ll.print().deleteFirst().print().printHeadTail();
    // console.log(3, "-----");
    // ll.print().deleteLast().print().printHeadTail();
    // console.log(4, "-----");
    // ll.print().deleteLast().print().printHeadTail();
    // console.log(5, "-----");
    // ll.print().deleteLast().print().printHeadTail();
    // console.log(6, "-----");
    // ll.print().deleteLast().print().printHeadTail();
}

executeLinkedList();
