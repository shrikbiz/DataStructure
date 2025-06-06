/**
 * Finding parent
 *  Math.ceil(index/2) - 1
 *
 * Finding child
 *  Left = (index * 2) + 1
 *  Right = (index * 2) + 2
 */

class MaxHeap {
    constructor() {
        this.heap = [];
        return this;
    }

    push(...args) {
        args.forEach((value) => {
            this.heap.push(value);
            if (this.heap.length > 1) this.#bubbleUp();
        });
        return this;
    }

    pop() {
        if (!this.heap.length) return this;
        this.#swap(0, this.heap.length - 1);
        const popped = this.heap.pop();
        this.#bubbleDown();
        // this.print();
        return popped;
    }

    max() {
        return this.heap[0];
    }

    print() {
        console.log("Max heap: ", this.heap);
    }

    #bubbleUp() {
        let index = this.heap.length - 1;
        let parent = this.#findParentIndex(index);
        while (index > 0 && this.heap[index] > this.heap[parent]) {
            this.#swap(parent, index);
            index = parent;
            parent = this.#findParentIndex(index);
        }
    }

    #findParentIndex(index) {
        return Math.ceil(index / 2) - 1;
    }

    #swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    #bubbleDown() {
        // we move the root node to its right position
        let index = 0;
        let maxChildIndex = this.#findMaxChildIndex(index);
        while (
            index < this.heap.length &&
            this.heap[index] < this.heap[maxChildIndex] &&
            !this.#isNullOrUndefined(maxChildIndex)
        ) {
            this.#swap(maxChildIndex, index);
            index = maxChildIndex;
            maxChildIndex = this.#findMaxChildIndex(index);
        }
    }

    #findLeftChildIndex(index) {
        return index * 2 + 1;
    }

    #findRightChildIndex(index) {
        return index * 2 + 2;
    }

    #findMaxChildIndex(index) {
        const leftIndex = this.#findLeftChildIndex(index);
        const rightIndex = this.#findRightChildIndex(index);
        if (
            !this.#isChildIndexValid(leftIndex) &&
            !this.#isChildIndexValid(rightIndex)
        )
            return null;

        if (!this.#isChildIndexValid(rightIndex)) return leftIndex;

        return this.heap[leftIndex] > this.heap[rightIndex]
            ? leftIndex
            : rightIndex;
    }

    #isChildIndexValid(index) {
        return index < this.heap.length;
    }

    #isNullOrUndefined(val) {
        return val === null || val === undefined;
    }

    emptyToSortedArray() {
        const sortedArray = [];
        while (this.heap.length > 0) {
            sortedArray.push(this.pop());
        }
        return sortedArray;
    }
}

function executeMaxHeap() {
    const heap = new MaxHeap();

    heap.push(10, 8, 14, 6, 17, 3, 20).print();
    heap.push(1).print();
    // heap.pop();
    // heap.pop();
    // heap.pop();
    // heap.pop();
    // heap.pop();
    // heap.pop();
    heap.print();
    console.log(heap.emptyToSortedArray());
}

// executeMaxHeap();

function sum() {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100

let p1 = { name: "shr" };
let p3 = { name: "shr" };
let p2 = p1;

console.log("p1 === p2", p1 === p2, p1 === p3);
p2.name = "shrikant";

console.log(p2.name, p1.name, p1 === p2, p1 === p3);
