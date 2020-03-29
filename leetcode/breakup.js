function breakUp(arr) {
    const dp = new  Array(arr.length + 1);
    dp.fill(0);
    dp[1] = arr[0];
    const selected = new Array(arr.length +1);
    selected.fill(false);
    selected[1] = true;

    for (let i = 2;  i <=  arr.length; i++) {
        if (!selected[i - 1]) {
            dp[i] = dp[i - 1] + arr[i - 1];
            selected[i]= true;
        } else {
            dp[i]  = Math.max(dp[i - 1], dp[i - 2] + arr[i -  1]);
            if (dp[i] !== dp[i - 1] && dp[i] === dp[i - 2] + arr[i - 1]) {
                selected[i] = true;
            }
        }
    }

    return dp[dp.length - 1];
}

const arr = [1,2,3,1];
console.log(breakUp(arr));

