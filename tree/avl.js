class Node {
    constructor(value, left, right, height) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
        this.height = height || 0;
    }
}

class AVLTree  {
    constructor(root) {
        this.root = root;
    }

    blanceLL(A, parentOfA) {
        let B = A.left;
        if (A === this.root) {
            this.root = B;
        } else {
            if (parentOfA.left === A) {
                parentOfA.left = B;
            } else {
                parentOfA.right = B;
            }
        }

        A.left = B.right;
        B.right = A;

        this.updateHeight(A);
        this.updateHeight(B);
    }

    blanceRR(A, parentOfA) {
        let B = A.right;
        if (this.root === A) {
            this.root = B;
        } else {
            if (parentOfA.left === A) {
                parentOfA.left = B;
            } else {
                parentOfA.right = B;
            }
        }

        A.right = B.left;
        B.left = A;

        this.updateHeight(A);
        this.updateHeight(B);
    }

    blanceLR(A, parentOfA) {
        let B = A.left;
        let C = B.right;

        if (this.root === A) {
            this.root = C;
        } else {
            if (parentOfA.left === A) {
                parentOfA.left = C;
            } else {
                parentOfA.right = C;
            }
        }

        
        B.right = C.left;
        A.left =  C.right;
        
        C.left = B;
        C.right = A;

        this.updateHeight(B);
        this.updateHeight(A);
        this.updateHeight(C);
    }

    blanceRL(A, parentOfA) {
        let B = A.right;
        let C =  B.left;

        if (this.root === A) {
            this.root = C;
        } else {
            if (parentOfA.left =  A) {
                parentOfA.left = C;
            } else {
                parentOfA.right = C;
            }
        }

        A.right = C.left;
        B.left = C.right;

        C.left = A;
        C.right = B;

        this.updateHeight(A);
        this.updateHeight(B);
        this.updateHeight(C);
    }

    updateHeight(node) {
        if (node.left == null && node.right == null) {
            node.height = 0;
        } else if (node.left == null) {
            node.height = node.right.height + 1;
        } else if (node.right == null) {
            node.height = node.left.height + 1;
        } else {
            let height = Math.max(node.left.height, node.right.height);
            node.height = height + 1;
        }
    }

    blanceFactor(node) {
        if (node.left == null && node.right == null) {
            return 0;
        } else if (node.right == null) {
            return -node.height;
        } else if (node.left == null) {
            return +node.height;
        } else {
            return node.right.height - node.left.height;
        }
    }

    balancePath(node) {
        const paths = this.path(node);
        for (let i = paths.length - 1; i >=0 ;i--) {
            let A = paths[i];
            this.updateHeight(A);
            let parentOfA = paths[i - 1];
            let bFactor;
            switch(this.blanceFactor(A)) {
                case 2:
                    bFactor = this.blanceFactor(A.right);
                    if (bFactor >=0 ) {
                        this.blanceRR(A, parentOfA);
                    } else {
                        this.blanceRL(A, parentOfA);
                    }
                    break;
                case -2:
                    bFactor = this.blanceFactor(A.left);
                    if (bFactor <= 0) {
                        this.blanceLL(A, parentOfA);
                    } else {
                        this.blanceLR(A, parentOfA);
                    }
                    break;
            }
        }

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

        this.balancePath(node);
    }

    search(value) {
        let current = this.root;
        while (current != null && current.value != value) {
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

                this.balancePath(parent);
            }
            current.right = null;
        } else {
            let mostRight = current;
            let mostRightChild  = current.left;
            while (mostRightChild.right) {
                mostRight = mostRightChild;
                mostRightChild = mostRightChild.right;
            }

            if (mostRight === current) {
                current.value = mostRightChild.value;
                current.left = mostRightChild.left;
                mostRightChild.left = null;
            } else {
                current.value = mostRightChild.value;
                mostRight.right = mostRightChild.left;
                mostRightChild.left = null;
            }

            this.balancePath(mostRight);
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

    path(node) {
        let paths = [];
        if (!node) return paths;

        let current = this.root;
        while (current && current !== node) {
            paths.push(current);
            if (current.value > node.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        if (current === node) {
            paths.push(node);
            return paths;
        }

        return [];
    }
}


const bst = new AVLTree();

bst.insert(new Node(25));
bst.insert(new Node(20));
bst.insert(new Node(5));

bst.midiumOrder(bst.root);
console.log("--------");
bst.postorder(bst.root);
console.log("--------");
bst.preorder(bst.root);
console.log("--------");


bst.insert(new Node(34));
bst.insert(new Node(50));

bst.midiumOrder(bst.root);
console.log("--------");
bst.postorder(bst.root);
console.log("--------");
bst.preorder(bst.root);
console.log("--------");

bst.insert(new Node(30));

bst.midiumOrder(bst.root);
console.log("--------");
bst.postorder(bst.root);
console.log("--------");
bst.preorder(bst.root);
console.log("--------");

bst.insert(new Node(10));

bst.midiumOrder(bst.root);
console.log("--------");
bst.postorder(bst.root);
console.log("--------");
bst.preorder(bst.root);
console.log("--------");


bst.delete(new Node(34));
bst.delete(new Node(30));
bst.delete(new Node(50));

bst.midiumOrder(bst.root);
console.log("--------");
bst.postorder(bst.root);
console.log("--------");
bst.preorder(bst.root);
console.log("--------");

bst.delete(new Node(5));

bst.midiumOrder(bst.root);
console.log("--------");
bst.postorder(bst.root);
console.log("--------");
bst.preorder(bst.root);
console.log("--------");
// const bst2 = new BST();
// bst2.insert(new Node(20));
// bst2.insert(new Node(10));
// bst2.insert(new Node(40));
// bst2.insert(new Node(16));
// bst2.insert(new Node(30));
// bst2.insert(new Node(80));
// bst2.insert(new Node(14));
// bst2.insert(new Node(27));
// bst2.insert(new Node(50));

// bst2.delete(new Node(20));

// bst2.breathFirstTraverse(bst2.root);
