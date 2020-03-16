function shortEditDistance(source, target) {
    const sLength = source.length;
    const tLength  = target.length;

    const memo = new  Array(sLength);
    for (let i = 0; i < sLength; i++) {
        memo[i] = new Array(tLength);
    }

    memo[0][0] = 1;
    if (source.charAt(0) === target.charAt(0)) {
        memo[0][0] = 0;
    }

    for (let i = 0; i < sLength; i++) {
        for (let j = 0; j < tLength; j++) {
            const prevJ = j - 1;
            const prevI = i - 1;

            let increment = source.charAt(i) !== target.charAt(j) ? 1 :  0;
            if (prevI > -1 && prevJ > -1) {
                let min = Math.min(memo[prevI][j] + 1, memo[i][prevJ] + 1);
                memo[i][j] = Math.min(memo[prevI][prevJ] + increment, min);
            } else if (prevI < 0 && prevJ > -1) {
                memo[i][j] = memo[i][prevJ] + 1;
            } else if (prevI > - 1 && prevJ < 0) {
                memo[i][j] = memo[prevI][j] + 1;
            }
        }
    }

    return memo[sLength - 1][tLength - 1];
}

console.log(shortEditDistance("snowy", "sunny"));
console.log(shortEditDistance("数学汤家凤", "数学家汤凤"));
console.log(shortEditDistance("qbuslks", "dbuslks"));
console.log(shortEditDistance("qbuslks", "dbuslkus"));
            