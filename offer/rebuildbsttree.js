class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let index = 0;

function rebuildTree(prevNums, low, high, midNums) {
    if (low > high) return;
    if (low === high) return new Node(preNums[low]);
    const splitValue = midNums[index];
    let i;
    for (i = low; i <= high; i++) {
        if (prevNums[i] === splitValue) {
            break;
        }
    }

    const node = new Node(splitValue);
    index++;
    node.left   =  rebuildTree(prevNums, low, i - 1, midNums);
    index++;
    node.right = rebuildTree(prevNums, i + 1, high, midNums);

    return node;
}

const preList = [];
function preOrder(node) {
    if (!node) return;
    preOrder(node.left);
    preList.push(node.value);
    preOrder(node.right);
}

const postList = [];

function postOrder(node) {
    if (!node) return;
    postList.push(node.value);
    postOrder(node.left);
    postOrder(node.right);
}


const preNums = [5, 10, 15, 20, 25, 30, 35];
const midNums = [20, 10, 5, 15, 30, 25, 35];
preOrder(rebuildTree(preNums, 0, preNums.length - 1, midNums));

index = 0;

postOrder(rebuildTree(preNums, 0, preNums.length - 1, midNums));
console.log(preList);
console.log(postList);

    

