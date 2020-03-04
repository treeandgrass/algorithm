class Node  {
    constructor(value, left, right, down) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.down = down;
    }
}

class SkipList {

    constructor(maxLevel) {
        this.maxLevel = maxLevel;
        this.heads = new Array(maxLevel);

        for (let i = 0; i < this.heads.length; i++) {
            this.heads[i] = new Node(null);
            this.heads[i].down = this.heads[i - 1] || null;
        }
    }

    search(value) {
        let level = this.maxLevel - 1;
        let start = this.heads[level];
        while (level > -1) {
            if  (start.value && start.value === value) {
                return true;
            } else if (!start.right) {
                if (start.value && start.value > value) {
                    start = start.left;
                }

                level--;
                start = start.down;
            } else if (!start.value || start.value < value) {
                start  = start.right;
            } else {
                start = start.left.down;
                level--;
            }
        }

        return false;
    } 

    add(value) {
        let level = 0;
        let node = new Node(value);
        let slots = this.findSlots(value);
        this.insert(slots[level++], node);

        while (level < this.maxLevel && this.throwCoin()) {
            const levelNode = new Node(value);
            this.insert(slots[level++], levelNode);
            levelNode.down = node;
            node = levelNode;
        }
        
    }

    findSlots(value) {
        let level = this.maxLevel - 1;
        let start = this.heads[level];
        const slots = Array(this.maxLevel);

        while (level > -1) {
            if (!start.right) {
                if (start.value && start.value > value) {
                    start =  start.left;
                }
                slots[level] = start;
                level --;
                start = start.down;
            } else if (!start.value || start.value <= value) {
                start = start.right;
            }  else {
                start = start.left;
                slots[level] =  start;
                level--;
                start = start.down;
            }
        }

        return slots;
    }

    delete(value) {
        const slots = this.findSlots(value);
        for (let i = 0;  i < slots.length; i++) {
            if (slots[i].value === value) {
                slots[i].left.right = slots[i].right;
                if (slots[i].right) {
                    slots[i].right.left = slots[i].left;
                }
                slots[i].left = null;
                slots[i].right = null;
                slots[i].down = null;
            }
        }
    }

    insert(prev, next) {
        next.right = prev.right;
        prev.right = next;
        next.left  =  prev;
        if (next.right) {
            next.right.left = next;
        }
    }

    throwCoin() {
        return Math.random() > 0.5;
    }
}

const skipList = new SkipList(4);

skipList.add(10);
skipList.add(100);
skipList.add(8);
skipList.add(100);
skipList.add(1);
skipList.add(5);
skipList.add(5);
skipList.add(20);
skipList.add(15);

console.log(skipList.search(10));
console.log(skipList.search(100));
console.log(skipList.search(15));
console.log(skipList.search(8));

skipList.delete(100);
console.log(skipList.search(100));

skipList.delete(100);
console.log(skipList.search(100));

skipList.delete(5);
console.log(skipList.search(5));


skipList.delete(8);
console.log(skipList.search(8));

skipList.delete(1);
console.log(skipList.search(1));
