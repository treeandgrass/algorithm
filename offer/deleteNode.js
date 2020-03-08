class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function toDeleteNode(head, deleteNode) {
    if (!deleteNode || !head) {
        return head;
    }

    if (deleteNode.next) {
        const next = deleteNode.next;
        deleteNode.value = next.value;
        deleteNode.next = next.next;
        next.next = null;
    } else if (deleteNode === head) {
        deleteNode = null;
        head = null;
    } else {
        let current = head;
        while (current.next !== deleteNode) {
            current = current.next;
        }

        current.next = null;
    }

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
let deleteNode1 = null;
let deleteNode2 = null;
let deleteNode3 = null;
let last  = null;

for (let i = 0; i < 10; i++) {
    const node = new Node(i);
    if (!head) {
        head = node;
        deleteNode1 = node;
    }

    if (i === 3) {
        deleteNode2 = node;
    }

    if (i === 9) {
        deleteNode3 = node;
    }
    if (last) {
        last.next = node;
    }
    last = node;
}

toDeleteNode(head, deleteNode3);
printList(head);

console.log('--------')

toDeleteNode(head, deleteNode2);
printList(head);

console.log('--------')

toDeleteNode(head, deleteNode1);
printList(head);

console.log('--------')