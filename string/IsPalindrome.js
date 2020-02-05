function isPalindrome(str) {
    if (!str && typeof str !== 'string') return false;
    let start = 0, end = str.length - 1;
    
    while(start < end) {
        if (str.charAt(start++) !== str.charAt(end--)) {
            return false;
        }
    }

    return true;
}


const str1 = 'wkyghgykw';
const str2 = 'wkyghhgykw';
const str3 = 'wkyghhgukw';
const str4 = '';
const str5 = null;
const str6 = undefined;

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));
console.log(isPalindrome(str5));
console.log(isPalindrome(str6));