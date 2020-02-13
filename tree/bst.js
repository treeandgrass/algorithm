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
        if (this.root === null) {
            this.root = node;
            return;
        }

        let current = this.root;
        let parent = this.root;

        while (current !== null) {
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

        while (current !== null && current.value !== node.value) {
            parent = current;
            if (current.value < node.value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }

        if (current === null) {
            return true;
        }

        if (current.left === null)  {
            if (parent === null) {
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
            mostRight.right = null;
        }

        return true;
    }

}