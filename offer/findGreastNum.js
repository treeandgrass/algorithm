function findGreastNum(arr) {
    let result = 0;
    let prev = arr[0];
    result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        prev = prev > 0 ? prev + arr[i] : arr[i];
        result = Math.max(prev, result);
    }

    return result;
}

const nums = [6, -3, -2, 7, -15, 1, 2, 2];
console.log(findGreastNum(nums));