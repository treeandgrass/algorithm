class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkList(head) {
    let stack = [];
    let current = head;

    while (current) {
        stack.push(current);
        current = current.next;
    }

    head = null;
    current = null
    while (stack.length > 0) {
        let node = stack.pop();
        if (!head) {
            head = current = node;
        } else {
            current.next = node;
            current = current.next;
        }
    }

    current.next = null;

    return head;
}

function printList(head) {
    let current = head;
    while(current) {
        console.log(current.value);
        current = current.next;
    }
}

let head = null;
let last  = null;

for (let i = 0; i < 10; i++) {
    const node = new Node(i);
    if (!head) {
        head = node;
        last = head;
    } else {
        last.next = node;
        last = last.next;
    }
}

printList(head);

console.log("-------");

printList(reverseLinkList(head));