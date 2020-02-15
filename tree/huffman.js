class Node {
    constructor(value, priority, left, right) {
        this.value = value;
        this.priority = priority;
        this.left = left;
        this.right = right;
        this.root = null;
        this.code = '';
    }

    compare(node)  {
        if (node.priority > this.priority) {
            return 1;
        } else if (node.priority === this.priority) {
            return 0;
        } else {
            return -1;
        }
    }
}

class PriorityQueue {
    constructor(arr = []) {
        this.arr =  arr;
    }

    insert(node) {
        if (!(node instanceof Node)) {
            node = new Node(value);
        }

        let i = this.arr.length - 1;
        for (; i >=0; i--) {
            if (this.arr[i].compare(node) === 1) {
                break;
            }
        }

        this.arr.splice(i  + 1, 0, node);
    }

    pop() {
        return this.arr.shift();
    }

    hasValue() {
        return this.arr.length !== 0;
    }
}

class Huffman {
    constructor(text) {
        this.text = text;
        this.map = new Map();
        this.codeMap = new Map();

        this.buildTree();
        this.buildCodeMap();
    }

    buildQueue() {
        const map = this.map;
        for (let i = 0; i < this.text.length; i++) {
            const ch = this.text.charAt(i);
            if (!map.has(ch)) {
                map.set(ch, 0);
            }
            const count = map.get(ch) + 1;
            map.set(ch, count);
        }

        const iterator = map.entries();
        const queue = new PriorityQueue();
        let nxt = iterator.next();
        while(!nxt.done) {
            const node = new Node(nxt.value[0], +nxt.value[1]);
            queue.insert(node);
            nxt = iterator.next();
        }

        return queue;
    }

    buildTree() {
        const queue = this.buildQueue();
        while (queue.hasValue()) {
            const node1 = queue.pop();
            const node2 = queue.pop();
            if (!node2) {
                this.root = node1;
                break;
            }

            queue.insert(new Node('', node1.priority + node2.priority, node1, node2));
        }
    }

    buildCodeMap() {
        if (!this.root) return;
        if (!this.root.left && !this.root.right) {
            this.codeMap.set(this.root.value, 0)
            return;
        }

        this.traverse(this.root);
    }

    traverse(node) {
        if (!node) return;
        if (!node.right && !node.left) {
            this.codeMap.set(node.value, node.code);
            return;
        }
        if (node.left) {
            node.left.code = node.code + '0';
            this.traverse(node.left);
        }

        if (node.right) {
            node.right.code = node.code + '1';
            this.traverse(node.right);
        }
    }

    encode() {
        let code = '';
        for (let i = 0; i < this.text.length; i++) {
            const ch = this.text.charAt(i);
            if (this.codeMap.has(ch)) {
                code += this.codeMap.get(ch);
            } else {
                throw new Error(`no such code for ${ch}`);
            }
        }

        return code;
    }

    decode(code) {
        let result = '';
        let current = this.root;
        for (let i = 0; i < code.length; i++) {
            if (code.charAt(i) === '0') {
                current  = current.left;
            }  else {
                current = current.right;
            }

            if (current && !current.left && !current.right) {
                result += current.value;
                current = this.root;
            }
        }

        return result;
    }
        
}




const huffman = new Huffman("Mississippi");
const code = huffman.encode();
console.log(code);

console.log(huffman.decode(code));