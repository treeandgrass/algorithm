class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST  {
    constructor(root) {
        this.root = root;
    }

    insert(node) {
        if (!this.root) {
            this.root = node;
            return;
        }

        let current = this.root;
        let parent = this.root;

        while (current) {
            parent = current;
            if (current.value > node.value) {
                current  = current.left;
            } else {
                current = current.right;
            }
        }

        if (parent.value > node.value) {
            parent.left = node;
        } else {
            parent.right = node;
        }
    }

    preorder(node) {
        if (!node) return;
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }

}


function sumOfBstTreePath(root, sum, tempList, findList) {
    if (!root || sum < root.value) return;
    tempList.push(root);
    if (sum === root.value && tempList.length > 0) {
        findList.push(tempList.slice());
        return;
    }
    sumOfBstTreePath(root.left, sum - root.value, tempList, findList);
    sumOfBstTreePath(root.right, sum - root.value, tempList, findList);

    tempList.pop();
}



const tree1 = new BST();
tree1.insert(new Node(8));
tree1.insert(new Node(10));
tree1.insert(new Node(9));
tree1.insert(new Node(12));
tree1.insert(new Node(2));
tree1.insert(new Node(1));
tree1.insert(new Node(3));

let result = [];
sumOfBstTreePath(tree1.root, 11, [], result)
console.log(result);
result = [];

sumOfBstTreePath(tree1.root, 27, [], result)
console.log(result);