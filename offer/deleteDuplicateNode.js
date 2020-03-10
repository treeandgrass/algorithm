function deleteDuplicateValue(head) {
    let current = head;
    while (current) {
        let next = current;
        while (next && next.next) {
            if (current.value === next.next.value) {
                let willDeleteNode = next.next;
                next.next = willDeleteNode.next;
                willDeleteNode.next = null;
            } else {
                next = next.next;
            }
        }
        current = current.next;
    }

    return head;
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function printList(head) {
    let current = head;
    while(current) {
        console.log(current.value);
        current = current.next;
    }
}

const head = new Node(2);
let current = null;
head.next = current = new Node(3);

current.next = new Node(3);
current = current.next;

current.next = new Node(8);
current = current.next;

current.next = new Node(9);
current = current.next;

current.next = new Node(10);
current = current.next;

current.next = new Node(8);
current = current.next;

current.next = new Node(11);
current = current.next;


current.next = new Node(2);
current = current.next;

current.next = new Node(11);
current = current.next;


current.next = new Node(2);
current = current.next;


current.next = new Node(2);
current = current.next;

current.next = new Node(8);
current = current.next;


printList(deleteDuplicateValue(head));