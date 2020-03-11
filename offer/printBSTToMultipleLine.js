function printBSTToMultipleLine(root) {
    let queue = [];
    let result = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length;
        const lineResult = [];
        while (size > 0) {
            let current = queue.shift();
            lineResult.push(current.value);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
                
            size --;
        }
        result.push(lineResult);
    }

    result.forEach((line) => {
        console.log(line.join(','));
    });
}

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

const tree1 = new BST();
tree1.insert(new Node(8));
tree1.insert(new Node(10));
tree1.insert(new Node(9));
tree1.insert(new Node(12));
tree1.insert(new Node(2));
tree1.insert(new Node(1));
tree1.insert(new Node(3));

printBSTToMultipleLine(tree1.root);