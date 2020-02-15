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

    search(value) {
        let current = this.root;
        while (current !== null && current.value !== value) {
            if (current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return current;
    }

    delete(node) {
        let parent = null;
        let current = this.root;

        while (current && current.value !== node.value) {
            parent = current;
            if (current.value < node.value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }

        if (!current) {
            return true;
        }

        if (!current.left)  {
            if (!parent) {
                this.root = current.right;
            } else {
                if (parent.value < current.value) {
                    parent.right = current.right;
                } else {
                    parent.left = current.right;
                }
            }
            current.right = null;
        } else {
            let mostRight = current;
            let mostRightChild  = current.left;
            while (mostRightChild.right) {
                mostRight = mostRightChild;
                mostRightChild = mostRightChild.right;
            }
            current.value = mostRightChild.value;
            mostRight.right = mostRightChild.left;
            mostRightChild.left = null;
        }

        return true;
    }

    preorder(node) {
        if (!node) return;
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    midiumOrder(node) {
        if (!node) return;
        this.midiumOrder(node.left);
        console.log(node.value);
        this.midiumOrder(node.right);

    }

    postorder(node) {
        if (!node) return;
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }

    breathFirstTraverse(node) {
        if (!node) return;
        const queue = [];
        queue.push(node);
        while (queue.length > 0) {
            const node = queue.pop();
            console.log(node.value);
            if (node.left) {
                queue.unshift(node.left);
            }
            if (node.right) {
                queue.unshift(node.right);
            }
        }
    }
}


const bst = new BST();

bst.insert(new Node(60));
bst.insert(new Node(55));
bst.insert(new Node(100));
bst.insert(new Node(45));
bst.insert(new Node(57));
bst.insert(new Node(67));
bst.insert(new Node(107));
bst.insert(new Node(101));
bst.insert(new Node(59));

bst.midiumOrder(bst.root);
console.log("--------");
bst.postorder(bst.root);
console.log("--------");
bst.preorder(bst.root);
console.log("--------");
bst.breathFirstTraverse(bst.root);
console.log("--------");


const bst2 = new BST();
bst2.insert(new Node(20));
bst2.insert(new Node(10));
bst2.insert(new Node(40));
bst2.insert(new Node(16));
bst2.insert(new Node(30));
bst2.insert(new Node(80));
bst2.insert(new Node(14));
bst2.insert(new Node(27));
bst2.insert(new Node(50));

bst2.delete(new Node(20));

bst2.breathFirstTraverse(bst2.root);
