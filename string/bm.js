function bc(str) {
    const ACharNum = 'A'.charCodeAt(0);
    const chLength = 'z'.charCodeAt(0) - ACharNum;
    const bcList = new Array(chLength);
    for (let i = 0; i < chLength; i++) {
        bcList[i] = str.length;
    }

    for (let i = 0; i < str.length; i++) {
        bcList[str.charCodeAt(i) - ACharNum] = i;
    }

    return bcList;
}

function suffix(str) {
    let suff = [], length = str.length;
    suff[length - 1] = length;
    for (let i = length - 2; i >= 0; i--) {
        let prev = i;
        for (;prev >=0 && str.charAt(prev) === str.charAt(length - 1 - i + prev); prev--);

        suff[i] = i - prev;
    }

    return suff;
}

function buildGs(str) {
    const suff = suffix(str);
    const gs = [];
    const length = str.length;
    for (let i = 0; i < length; i++) {
        gs[i] = length;
    }

    let low = 0;
    for (let j = length - 1; j >= 0; j--) {
        if (suff[j] === j + 1) {
            for (let i = low; i < length - j -  1; i++) {
                gs[i] = length - 1 - j;
            }
                
        }
    }

    for ( let i = 0; i < length - 1; i++) {
        gs[length - 1  - suff[i]] = length - 1 - i;
    }

    return gs;
}

function bm(source,  pattern) {
    const pLength = pattern.length;
    const sLength =  source.length;
    const bcArr = bc(pattern);
    const gs = buildGs(pattern);
    const ACharNum = 'A'.charCodeAt(0);

    if (pLength > sLength ) return -1;

    for ( let i = pLength - 1; i < sLength; ) {
        let j, p = pLength - 1;
        for (j = pLength - 1; j >=0 && source.charAt(i - p + j ) === pattern.charAt(j); j--);
        if ( j < 0) return i - pLength + 1;

        const bcNum = source.charCodeAt(i - p + j) - ACharNum;
        let shift = j < pLength - 1 ? gs[j] : 0;
        shift = Math.max(j - bcArr[bcNum], shift);
        i += shift;
    }

    return -1;
}

const search = 'ABCKDAB';
const source = 'ABCABCDABABCDABBDABCKDABCABDE';
console.log(bm(source, search));

const search1 = 'ABCKdDAB';
const source1 = 'ABCABCDdsABABCDABBDABCKDABCABDE';
console.log(bm(source1, search1));


const search2 = 'aABCKdDAB';
const source2 = 'ABCaABCKdDABABCDdsABABCDABBDABCKDABCABDE';
console.log(bm(source2, search2));

const search3 = 'EXAMPLE';
const source3 = 'HEREISASIMPLEEXAMPLE';
console.log(bm(source3, search3));