function findTheRing(head) {
    let fast = head;
    let low = head;

   do {
        fast = fast.next.next;
        low = low.next;
    } while(fast !== low)
    
    fast = head;
    while (low !== fast) {
        low = low.next;
        fast = fast.next;
    }

    return fast;
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

let head = new Node(3);
let current = head;

current.next = new Node(5);
current = current.next;

current.next = new Node(9);
current = current.next;

current.next = new Node(2);
current = current.next;

current.next = new Node(22);
current = current.next;

current.next = new Node(32);
current = current.next;
let mid = current;

current.next = new Node(1);
current = current.next;

current.next = new Node(0);
current = current.next;

current.next = new Node(55);
current = current.next;

current.next = new Node(9);
current = current.next;

current.next = new Node(19);
current = current.next;
current.next = mid;


console.log(findTheRing(head));