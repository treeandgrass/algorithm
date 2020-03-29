function exchange(coins, n) {
    const dp = new Array(n + 1);
    const max = Math.pow(2, 30) - 1;
    dp.fill(max);
    dp[0] = 0;

    for (let i = 0; i < coins.length; i++) {
        if (coins[i] <  dp.length) {
            dp[coins[i]] = 1;
        }
    }

    for (let i = 1; i <= n; i++)  {
        for (let j = 0; j < coins.length; j++) {
            if (i < coins[j]) break;
            dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
        }
    }

    return dp[n] >= max ? -1 : dp[n];
}

const coins = [1, 2, 5], amount = 11;
console.log(exchange(coins, amount));

const amount1 = 7;
console.log(exchange(coins, amount1));

const coins1 = [2], amount2 = 3;
console.log(exchange(coins1, amount2));