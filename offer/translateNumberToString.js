function translate(num) {
    num = num.toString();
    const dp = new Array(num.length + 1);
    dp.fill(0);
    dp[0] = 1;
    dp[1] = num.charAt(0) === '0' ? 0 : 1;
    for (let i = 1; i < num.length; i++) {
        if (num.charAt(i) !== '0') {
            dp[i + 1] += dp[i];
        }

        const twoPointNum = num.slice(i - 1, i + 1);
        if ('10' < twoPointNum && twoPointNum < '27') {
            dp[i + 1] += dp[i - 1];
        }
    }

    return dp[num.length];
}


console.log(translate(12258));