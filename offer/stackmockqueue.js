class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
        this.length = 0;
    }

    pop() {
        while (this.stack1.length > 0) {
            this.stack2.unshift(this.stack1.shift());
        }
        const value = this.stack2.shift();
        while(this.stack2.length > 0) {
            this.stack1.unshift(this.stack2.shift());
        }

        this.length--;
        return value;
    }

    push(value) {
        this.stack1.unshift(value);
        this.length++;
    }
}

const queue = new Queue();
queue.push(2);
queue.push(5);
queue.push(1);
queue.push(39);
queue.push(56);
queue.push(12);
queue.push(8);
console.log(queue.pop());
queue.push(66)
queue.push(99)
queue.push(0)
queue.push(122)

while (queue.length > 0) {
    console.log(queue.pop());
}