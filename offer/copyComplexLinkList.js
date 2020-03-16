class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.random = null;
    }
}


function copyComplexLinkList(head) {
    let current = head;
    while (current) {
        const cloneNode = new Node(current.value);
        cloneNode.next = current.next;
        current.next = cloneNode;
        current = cloneNode.next;
    }

    current = head;
    while (current) {
        const clone = current.next;
        if (current.random) {
            clone.random = current.random.next;
        }
        current = clone.next;
    }

    const cloneHead = head.next;
    current = head;
    while (current) {
        const next = current.next;
        if (next) {
            current.next = next.next;
        }
        current = next;
    }

    return cloneHead;
}

function printList(head) {
    let current = head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }

}

let head = null;
let current = null;
let random = [3, 5, 8, 7, 11,  13];
let nodes = [];
for (let i = 0; i < 15; i++) {
    if (!head) {
        head = new Node(i);
        current = head;
    } else {
        current.next = new Node(i);
        current  = current.next;
        if (random.indexOf(i) >  -1) {
            nodes.push(current);
        }
    }
}

let i = 0;
let len = random.length  - 1;
while (i < len - i) {
    nodes[len - i].random = nodes[i];
    i ++;
}

printList(head);
console.log("-------");
let cloneHead = copyComplexLinkList(head);
printList(cloneHead);