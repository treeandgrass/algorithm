function recursiveMatrixCover(n) {
    if (n < 1) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return recursiveMatrixCover(n - 1) + recursiveMatrixCover(n - 2);
}

function matrixCover(n) {
    if (n <= 2) return n;
    let pre1 = 1;
    let pre2 = 2;
    let result = 0;

    for (let i = 3; i <= n; i++) {
        result = pre1 + pre2;
        pre1 = pre2;
        pre2 = result;
    }
    
    return result;
}

console.log(matrixCover(5));
console.log(recursiveMatrixCover(5));