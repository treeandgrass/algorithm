function matrixContainPath(source, target, m, n) {
    let sourceLength = source.length;

    const occupy = new Array(sourceLength);
    occupy.fill(false);

    const paths = [];

    for (let k = 0; k < sourceLength; k++) {
        let j = k % m;
        let i = (k - j) / m;

        if (findPath(source, target, i, j, m, n, 0, occupy, paths)) {
            console.log(paths);
            return true;
        }
    }

    return false;
}

function findPath(source, target, i, j, m, n, t, occupy, paths) {
    if (t >= target.length) return true;
    if (i >= m || j >= n || i < 0 || j < 0) return false;
    if (!occupy[i * m +  j] && source[i * m + j] === target[t]) {
        occupy[i * m + j] =  true;
        paths.push(i * m+ j); 
        if (findPath(source, target, i + 1, j, m, n, t + 1, occupy, paths)) {
            return true;
        }
        if (findPath(source, target, i - 1, j, m, n, t + 1, occupy, paths)) {
            return true;
        }
        if(findPath(source, target, i, j - 1, m, n, t + 1, occupy, paths)) {
            return true;
        }
        if(findPath(source, target, i, j + 1, m, n, t + 1, occupy, paths)) {
            return true;
        }
        paths.pop();
        occupy[i * m + j] = false;
    }
    return  false;
}

const source = [2, 8, 7, 9, 3, 7, 6, 2, 4, 7, 8, 1, 5, 5, 9, 0];
const target = [8, 7, 6, 7, 7];

console.log(matrixContainPath(source, target, 4, 4))



const source1 = [2, 8, 7, 9, 3, 7, 6, 2, 4, 7, 8, 1, 5, 5, 9, 0];
const target1 = [4, 7, 8, 9];

console.log(matrixContainPath(source1, target1, 4, 4))

const source2 = [2, 8, 7, 9, 3, 7, 6, 2, 4, 7, 8, 1, 5, 5, 9, 0];
const target2 = [4, 4, 8, 9];

console.log(matrixContainPath(source2, target2, 4, 4))