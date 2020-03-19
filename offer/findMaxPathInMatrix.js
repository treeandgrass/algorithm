function findMaxPathInMatrix(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let result = new Array(m);
    for (let i = 0; i < m; i++) {
        result[i] = new Array(n);
        result[i].fill(0);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                result[0][0] = matrix[0][0];
            } else if (i === 0 && j !== 0) {
                result[i][j] =  result[i][j - 1] + matrix[i][j];
            } else if (i !== 0 && j === 0) {
                result[i][j] = result[i - 1][j] + matrix[i][j];
            } else {
                result[i][j] = Math.max(result[i - 1][j], result[i][j -1]) + matrix[i][j];
            }
        }
    }

    return result[m - 1][n - 1];
}

const matrix = [[1, 10, 3, 8],
    [12, 2, 9, 6],
    [5, 7, 4, 100],
    [3, 7, 22, 5]];

    console.log(findMaxPathInMatrix(matrix));