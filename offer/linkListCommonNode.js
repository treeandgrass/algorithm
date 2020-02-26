function findCommonNode(head1, head2) {
    let m = 0, n = 0;
    let current = head1;
    while(current) {
        current = current.next;
        m++;
    }

    current = head2;
    while (current) {
        current = current.next;
        n++;
    }
    
    let current1 = head1;
    let current2 = head2;

    if (m > n) {
        splitLength = m - n;
        for (let i = 0; i < splitLength; i++) {
            current1 = current1.next;
        }
    } else {
        splitLength = n - m;
        for (let i = 0; i < splitLength; i++) {
            current2 = current2.next;
        }
    }

    while (current1 !== current2) {
        current1 = current1.next;
        current2 = current2.next;
    }

    return current1;
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function buildLinkList(nums) {
    let head = null;
    let current = null;
    for (let  i = 0; i < nums.length; i++) {
        let node = new Node(nums[i]);
        if (!head) {
            head = node;
            current = head;
        } else {
            current.next = node;
            current = current.next;
        }
    }

    return head;
}

function printLinkList(head) {
    let current = head;
    const list = [];
    while (current) {
        list.push(current.value);
        current = current.next;
    }

    return  list;
}

const nums1 = [1, 4, 2, 9, 10, 11, 7, 9];
const nums2 = [-12, -8, 11];
let head1 =  buildLinkList(nums1);
let head2 =  buildLinkList(nums2);

let current = head2;
while (current.next) {
    current = current.next;
}

current.next = head1.next;

const node = findCommonNode(head1, head2);
console.log(node.value);