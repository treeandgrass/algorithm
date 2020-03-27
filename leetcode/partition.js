function back(s, low, temp, result, dp) {
    if (low >= s.length) {
        result.push(temp.slice(0));
        return;
    }
    for (let i = low; i < s.length; i++) {
        if (dp[low][i]) {
            temp.push(s.slice(low, i  + 1));
            back(s, i + 1, temp, result, dp);
            temp.pop();
        }
    }
}

var partition = function(s) {
    let len = s.length;
    let dp = new Array(len);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(len);
        dp[i].fill(0);
    }

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (s.charAt(i) === s.charAt(j) && (j - i <= 2 || dp[i + 1][j - 1])) {
                dp[i][j] = 1;
            }
        }
    }

    let result = [];
    back(s, 0, [], result, dp);
    return result;
};


var test = 'aab';
console.log(partition(test));