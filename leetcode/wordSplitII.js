function wordSplitII(str, wordDicts) {
    let dp = new Array(str.length +  1);
    dp[0] = [""];

    for (let i = 1; i <= str.length; i++) {
        for (let j = 0;  j < i; j++) {
            if (dp[j] && dp[j].length && wordDicts.includes(str.slice(j, i))) {
                for (let k = 0; k < dp[j].length; k++) {
                    if (!dp[i]) {
                        dp[i] = [];
                    }

                    const word = str.slice(j, i);
                    let tmp = !dp[j][k]? word : dp[j][k] + "  " + word;
                    dp[i].push(tmp);
                }
            }
        }
    }

    return dp[dp.length - 1];
}

const s = "catsanddog";
const wordDict = ["cat", "cats", "and", "sand", "dog"];

console.log(wordSplitII(s, wordDict));

const s1 = "pineapplepenapple"
const wordDict1 = ["apple", "pen", "applepen", "pine", "pineapple"]
console.log(wordSplitII(s1, wordDict1));