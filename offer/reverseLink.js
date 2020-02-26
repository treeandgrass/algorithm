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

function reverseLinkList(head) {
    let prev = head.next;
    let next = null;
    if (prev) {
        next = prev.next;
    }

    head.next = null;
    while (prev) {
        prev.next =  head;
        head = prev;
        prev = next;
        if (prev) {
            next = prev.next;
        }
    }
    return head;
}


const nums = [1, 4, 2, 9, 10, 11, 7, 9];
let head =  buildLinkList(nums);
console.log(printLinkList(head));
head = reverseLinkList(head);
console.log(printLinkList(head));