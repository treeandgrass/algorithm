class Node {
    constructor(c) {
        this.value  = c;
        this.isEnd = false;
        this.chidren = [];
    }

    addChild(child) {
        this.chidren.push(child);
    }
}

class Trie {
    constructor(root) {
        this.root  = root || new Node('');
    }

    insertString(str) {
        let current = this.root;
        let isExit  = true;
        for (let i = 0; i < str.length; i++) {
            const chidren = current.chidren;
            let j;
            for (j = 0; j < chidren.length; j++) {
                if (chidren[j].value === str.charAt(i)) {
                    current = chidren[j];
                    break;
                }
            }

            if (j >= chidren.length) {
                const node = new Node(str.charAt(i));
                chidren.push(node);
                current = node;
                isExit = false;
            }
        }

        if (!current.isEnd) {
            current.isEnd = true;
            return false;
        }
        return isExit;
    }
}

// b，abc，abd，bcd，abcd，efg，hii 
const str1 = 'b';
const str2 = 'abc';
const str3 = 'abd';
const str4 = 'bcd';
const str5 = 'abcd';
const str6 = 'efg';
const str7 = 'hii';
const str8 = 'ef'
const str9 = 'ef'

const  trie = new Trie();
console.log(trie.insertString(str1));
console.log(trie.insertString(str2));
console.log(trie.insertString(str3));
console.log(trie.insertString(str4));
console.log(trie.insertString(str5));
console.log(trie.insertString(str6));
console.log(trie.insertString(str7));
console.log(trie.insertString(str6));
console.log(trie.insertString(str1));
console.log(trie.insertString(str8));
console.log(trie.insertString(str9));