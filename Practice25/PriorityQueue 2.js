class PriorityQueue {
    constructor() {
        this.queue = [];
        return this;
    }

    push(...args) {
        args.forEach((arg) => this.#sortAfterAdding(arg));
        return this;
    }

    logQueue() {
        console.log(this.queue);
        return this;
    }

    // Its an assumption that the last indexed number is what we want to sort.
    #sortAfterAdding(number) {
        this.queue.push(number);
        let index = this.queue.length - 1;
        while (index >= 0) {
            const curr = this.queue[index];
            const prev = this.queue[index - 1];
            if (curr < prev) this.#swap(index, index - 1);
            else break;
            index--;
        }
    }

    #swap(i, j) {
        const temp = this.queue[i];
        this.queue[i] = this.queue[j];
        this.queue[j] = temp;
    }

    pop() {
        return this.queue.pop();
    }

    logTop() {
        console.log(this.queue[this.queue.length - 1]);
        return this;
    }
}

const pq = new PriorityQueue().push(3, 4, 4, 5, 2, 5, 0, 3, 1).logQueue();
pq.pop();
pq.pop();
pq.pop();
pq.pop();
pq.pop();
pq.pop();
pq.logTop();
