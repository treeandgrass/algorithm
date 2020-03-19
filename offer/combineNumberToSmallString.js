function combineNumberToSmallString(arr) {
    if (arr.length === 0) return '';
    let nums = Array.from(arr, item => item.toString());
    nums.sort((a, b) => a < b);

    return nums.join('');
}

let arr = [3, 32, 321];
console.log(combineNumberToSmallString(arr));