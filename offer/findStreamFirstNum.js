const queue = [];
const chsCount = new Array(256);
chsCount.fill(0);

function insert(ch) {
    let num = ch.charCodeAt(0) - 'A'.charCodeAt(0);
    chsCount[num] ++;
    queue.push(ch);

    while (queue.length > 0) {
        ch = queue[0];
        num = ch.charCodeAt(0) - 'A'.charCodeAt(0);
        if (chsCount[num] > 1) {
            queue.shift();
        } else {
            break;
        }
    }
}


function findFirstSingleNumber(queue) {
    if (queue.length > 0) return queue.shift();
    else return null;
}

const ACharCode = 'A'.charCodeAt(0);
for (let i = 0; i < 80; i++) {
    const code = ACharCode + (i % 58);
    let ch =  String.fromCharCode(code);
    insert(ch);
}

console.log(findFirstSingleNumber(queue));

