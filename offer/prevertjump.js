function prevertjumpI(n) {
    return Math.pow(2, n - 1);
}

function prevertjumpII(n) {
    let jump = [];
    for (let i = 0; i < n; i++) {
        jump[i] = 1;
    }

    for (let i = 0; i <  n; i++) {
        for (let j = 0; j < i; j++) {
            jump[i] += jump[j];
        }
    }

    return jump[jump.length - 1];
}

console.log(prevertjumpI(10))
console.log(prevertjumpII(10))
console.log(prevertjumpI(20))
console.log(prevertjumpII(20))