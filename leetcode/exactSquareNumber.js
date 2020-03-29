function squareNumber(n) {
    const dp = new Array(n + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = i;
    }

    for (let i = 2; i <= n; i++) {
        for (let j = 1;  j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[dp.length -1];
}

console.log(squareNumber(12));
console.log(squareNumber(13));