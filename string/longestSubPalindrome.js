function longestSubPalindrome(str) {
    let subPalindrome = '';
    if (!str) return '';
    for (let i = 0; i < str.length; i++) {
        let prev = i;
        let next = i;
        while (prev >=0 && next <str.length && str.charAt(prev) === str.charAt(next)) {
            prev--;
            next++;
        }
        const tmp = str.slice(prev + 1, next);
        if (tmp.length > subPalindrome.length) {
            subPalindrome = tmp;
        }
    }

    return subPalindrome;
}


const str1 = 'xybnkuknbby';
const str2 = 'xybnknkcnbby';

console.log(longestSubPalindrome(str1));
console.log(longestSubPalindrome(str2));