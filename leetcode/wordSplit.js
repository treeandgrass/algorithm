function wordSplit(s, dict) {
    let dp = new Array(s.length + 1);
    dp.fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j  < i; j++) {
            if (dp[j] && dict.includes(s.slice(j, i))) {
                dp[i] = true;
            }
        }
    }

    return dp[s.length];
}

const s = "leetcode";
const wordDict = ["leet", "code"];

console.log(wordSplit(s, wordDict));

const s1 = "applepenapple";
const wordDict1 = ["apple", "pen"]
console.log(wordSplit(s1,  wordDict1));

const s2 = "catsandog";
const wordDict2 = ["cats", "dog", "sand", "and", "cat"];

console.log(wordSplit(s2, wordDict2));