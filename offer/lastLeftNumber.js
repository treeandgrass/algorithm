function lastLeftNumber(n, k) {
    if (n === 0 || n < 0) return -1;
    if (n === 1) return 0;

    return (lastLeftNumber(n - 1,  k) + k) % n;
}

console.log(lastLeftNumber(100, 10));
console.log(lastLeftNumber(10, 17));