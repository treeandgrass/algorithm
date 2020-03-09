class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reciprocalKNode(head, k) {
    let prev = head;
    let next = head;

    for (let i = 1; i < k && next; i++) {
        next = next.next;
    }

    if (!next) return null;

    while (next.next) {
        next = next.next;
        prev = prev.next;
    }

    return prev;
}

let head = null;
let last = null;

for (let i = 0; i < 30; i++) {
    const node = new Node(i);
    if (!head) {
        head = last = node;
    } else {
        last.next = node;
        last = node;
    }
}

function printList(head) {
    let current = head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

console.log(printList(reciprocalKNode(head, 10)));
