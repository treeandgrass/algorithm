function matrixContainPath(source, target, m, n) {
    let sourceLength = source.length;
    for (let k = 0; k < sourceLength; k++) {
        let i = k % m;
        let j = (k - m) / m;

        if (findPath(source, target, i, j, m, n)) return true;
    }

    return false;
}

function findPath(source, target, i, j, m, n, t) {
    if (t >= target.length) return true;
    if (i >= m || j >= n || i < 0 || j < 0) return false;
    let isIn = false;
    if (source[i * m + j] === target[t]) {
        isIn = findPath(source, target, i + 1, j, m, n, t + 1);
        isIn = findPath(source, target, i - 1, j, m, n, t + 1);
        isIn = findPath(source, target, i, j - 1, m, n, t + 1);
        isIn = findPath(source, target, i, j + 1, m, n, t + 1);
    }
    return  isIn;
}



