function lengthOfFLIS(arr) {
    const dp = new Array(arr.length + 1);
    dp.fill(1);
    let max = 1;
    
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1;  j >= 0; j--) {
            if (arr[i] >= arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                if (dp[i] > max) {
                    max  = dp[i];
                }
            }
        }
    }

    return max;
}


const testArray1 = [10,9,2,5,3,7,101,18];
console.log(lengthOfFLIS(testArray1));