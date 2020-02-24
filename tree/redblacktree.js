class Node {
    constructor(value, color, left, right) {
        this.value = value;
        this.color = color;
        this.left = left;
        this.right = right;
    }
}

class RedBlackTree  {
    constructor(root) {
        this.root = root;
    }

    lr(A, parentOfA) {
        let B = A.right;

        if (parentOfA.left === A) {
            parentOfA.left = B;
        } else {
            parentOfA.right = B;
        }

        A.right = B.left;
        B.left = A;
    }

    rr(A, parentOfA)  {
        let B = A.left;
        if (parentOfA.left === A) {
            parentOfA.left = B;
        } else {
            parentOfA.right = B;
        }

        A.left = B.right;
        B.right = A;
    }


    insert(node) {
        const paths = [];

        if (!this.root) {
            this.root = node;
            return;
        } else {
            let current = this.root;
            let parent = this.root;

            while (current) {
                parent = current;
                if (current.value > node.value) {
                    current  = current.left;
                } else {
                    current = current.right;
                }

                paths.push(parent);
            }

            if (parent.value > node.value) {
                parent.left = node;
            } else {
                parent.right = node;
            }
        }

        paths.push(node);
        this.balanceTree(paths);
    }

    checkInsertCase(paths) {
        // insert is root
        if (paths.length === 1) return 0;
        // tree is only to level
        if (paths.length < 3) return -1;

        const length = paths.length;
        let grandFatherOfA = paths[length - 3];
        let fatherOfA = paths[length - 2];
        let A  = paths[length - 1];

        if (fatherOfA.color === 'b') return -1;

        let uncleOfA = grandFatherOfA.left;
        if (uncleOfA === fatherOfA) {
            uncleOfA = grandFatherOfA.right;
        }

        if (uncleOfA.color === 'r') return 1;

        if (uncleOfA.color === 'b' && fatherOfA.right === A) return 2;

        if (uncleOfA.color === 'b' && fatherOfA.left === A) return 3;

        return -1;
    }
        


    balanceTreeAfterInsert(paths) {
        let state = this.checkInsertCase(paths);
        const length = paths.length;
        
        // do nothing
        if (state === -1) return;
        // insert node is root
        if (state === 0) {
            paths[length - 1].color === 'r';
            return;
        }
        
        if (state === 1) {
            const length = paths.length;
            const grandFatherOfA = paths[length - 3];
            const fatherOfA = paths[length - 2];
            const A  = paths[length - 1];

            grandFatherOfA.color = 'r';
            fatherOfA.color = 'b';
            uncleOfA.color = 'b';

            paths.length = paths.length - 2;
            state = this.checkInsertCase(paths);
        }

        if (state === 2) {
            paths.length = paths.length - 1;
            const length = paths.length;
            const A = paths[length - 1];
            const parentOfA = paths[length -  2];

            this.lr(A, parentOfA);

            const tmp = paths[length - 1];
            paths[length - 1] = paths[length - 2];
            paths[length - 1] = tmp;

            state = this.checkInsertCase(paths);
        }

        if (state === 3) {
            let length = paths.length;
            const A = paths[length - 3];
            const parentOfA =  paths[length - 4];

            this.rr(A, parentOfA);

            const newParentOfA = paths[length - 2];
            const leftColor = newParentOfA.left.color;
            newParentOfA.left.color = newParentOfA.right.color;
            newParentOfA.right.color = leftColor;
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

    checkDeleteState(A) {
        if (!A.left && A.right) {
            return 1;
        } else if (A.left && !A.right) {
            return 1;
        } else if (!A.left&& !B.left) {
            return -1;
        } else if (A.right && !A.right.left) {
            return 2
        } else if (A.right && A.right.left) {
            return 3;
        } else {
            return -1;
        }
    }

    checkSecondAjustment(A, parentOfA) {
        let brotherOfA = parentOfA.left;
        if (parentOfA.left  === A) {
            brotherOfA =  parentOfA.right;
        }
        if (brotherOfA.color === 'r') {
            return 1;
        } else if (brotherOfA.color === 'b') {
            if (brotherOfA.left.color === 'b' &&  brotherOfA.right.color ==='b') {
                return 2;
            }
        } else if (brotherOfA.color === 'b') {
            if (brotherOfA.left && brotherOfA.left.color === 'r' && brotherOfA.left.color === 'b') {
                return 3;
            }
        } else if (brotherOfA.color  === 'b' && brotherOfA.right.color === 'r') {
            return 4;
        } else {
            return -1;
        }
    }

    delete(node) {
        const paths = [];
        let parent = null;
        let current = this.root;

        while (current && current.value !== node.value) {
            parent = current;
            if (current.value < node.value) {
                current = current.right;
            } else {
                current = current.left;
            }

            paths.push(current);
        }

        if (!current) {
            return true;
        }

        paths.push(current);

        let A = current;
        let state  = this.checkDeleteState(A);
        if (state ===  1) {
            if (paths.length === 1) {
                this.root = A.right;
                A.right =  null;
            } else {
                let parentOfA = paths[paths.length - 2];
                let rightChildOfA = A.right;
                if (parentOfA.left === A) {
                    parentOfA.left  = rightChildOfA;
                } else {
                    parentOfA.right = rightChildOfA;
                }
                A.right = null;
            }

            if (A.color === 'b' && rightChildOfA.color === 'r') {
                return;
            }
        } else if (state === 2) {
            let rightChildOfA = A.right;
            rightChildOfA.left = A.left;

            if (paths.length === 1) {
                this.root = rightChildOfA;
                A.right = null;
            } else if (state === 2) {
                let parentOfA = paths[paths.length - 2];
                if (parentOfA.left  === A) {
                    parentOfA.left =  rightChildOfA;
                } else {
                    parentOfA.right = rightChildOfA;
                }
                A.right = null;

                rightChildOfA.color = A.color;

                A = rightChildOfA.right;
            } else if (state ===  3) {
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


// const bst = new BST();

// bst.insert(new Node(60));
// bst.insert(new Node(55));
// bst.insert(new Node(100));
// bst.insert(new Node(45));
// bst.insert(new Node(57));
// bst.insert(new Node(67));
// bst.insert(new Node(107));
// bst.insert(new Node(101));
// bst.insert(new Node(59));

// bst.midiumOrder(bst.root);
// console.log("--------");
// bst.postorder(bst.root);
// console.log("--------");
// bst.preorder(bst.root);
// console.log("--------");
// bst.breathFirstTraverse(bst.root);
// console.log("--------");


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



// const bst3 = new BST();

// bst3.insert(new Node(25));
// bst3.insert(new Node(20));
// bst3.insert(new Node(5));

// bst3.midiumOrder(bst3.root);
// console.log("--------");
// bst3.postorder(bst3.root);
// console.log("--------");
// bst3.preorder(bst3.root);
// console.log("--------");
// bst3.breathFirstTraverse(bst3.root);
// console.log("--------");
