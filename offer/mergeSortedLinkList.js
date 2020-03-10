class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeSortedLinkList(l1, l2) {
    let head = null;
    let current = null;

    while (l1 && l2) {
        let node = null;
        if (l1.value > l2.value) {
            node = new Node(l2.value);
            l2 = l2.next;
        } else {
            node = new Node(l1.value);
            l1 = l1.next;
        }
        if (!head) {
            current = head = node;
        } else {
            current.next = node;
            current = current.next;
        }
    }

    l1 = l1 ? l1 : l2;
    while (l1) {
        const node = new Node(l1.value);
        l1 = l1.next;
        if (!head) {
            current = head = node;
        } else {
            current.next = node;
            current = current.next;
        }
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
let last  = null;

for (let i = 0; i < 10; i+= 2) {
    const node = new Node(i);
    if (!head) {
        head = node;
        last = head;
    } else {
        last.next = node;
        last = last.next;
    }
}

let head1 = null;

for (let i = 2; i < 10; i+= 3) {
    const node = new Node(i);
    if (!head1) {
        head1 = node;
        last = head1;
    } else {
        last.next = node;
        last = last.next;
    }
}

printList(head)

console.log("--------");
printList(head1);
console.log("--------");

printList(mergeSortedLinkList(head, head1));