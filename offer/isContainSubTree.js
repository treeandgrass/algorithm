function isContainSubTree(root, subRoot) {
    if (!root) return false;
    if (!subRoot) return true;

    if (isSame(root, subRoot)) {
        return true;
    }
    if (isContainSubTree(root.left, subRoot)) {
        return true;
    }
    if (isContainSubTree(root.right, subRoot)) {
        return true;
    }
    return false;
}

function isSame(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    return root.value === subRoot.value && isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
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
tree1.preorder();

const tree2 = new BST();
tree2.insert(new Node(2));
tree2.insert(new Node(1));
tree2.insert(new Node(3));
tree2.preorder();

console.log(isContainSubTree(tree1.root, tree2.root));