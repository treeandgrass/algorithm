class Node  {
    constructor(m) {
        this.keys =  new Array(m - 1);
        this.child = new Array(m);
    }

    add(value) {
        if (this.keys.length === 0) {
            this.keys.push(value);
            return;
        }

        for (let i = 0; i < this.keys.length;  i++) {
            if (this.keys[i] > value) {
                this.keys.splice(i, 0, value);
                break;
            }
        }
    }

    remove(value) {
        for (let i = 0; i < this.keys.length;  i++)  {
            if (this.keys[i] === value) {
                this.keys.splice(i, 1);
                break;
            }
        }
    }
}


class BPlusTree {
    constructor(m) {
        this.root = null;
    }

    insert(value)  {
        if (this.root === null) {
            this.root = new Node(m);
            this.root.add(value);
            return;
        }
    }
}