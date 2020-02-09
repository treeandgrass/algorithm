function fibo(n) {
    let m = [1, 1, 1, 0];
    let r = [1, 1, 1, 0];
    for (let i = 0; i < n; i++) {
        r[0] = m[0] + m[2];
        r[1] = m[1] + m[3];
        r[2] = m[0];
        r[3] = m[1];

        m = r.slice(0);
    }

    return m[3];
}

console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(7));