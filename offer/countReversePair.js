let count = 0;

function countReversePair(arr, low, high) {
    if (high - low < 1) return;
    const m = low + Math.floor((high - low) / 2);
    countReversePair(arr, low, m);
    countReversePair(arr, m + 1, high);

    let tmp = new Array(high - low +  1);
    let index = 0;
    let i = low;
    let j = m + 1;

    while (i <= m || j <= high) {
        if (i > m) {
            tmp[index++] = arr[j++];
        } else if (j > high) {
            tmp[index++] = arr[i++];
        } else if (arr[i] <= arr[j]) {
            tmp[index++] = arr[i++];
        } else {
            tmp[index++] = arr[j++];
            count += m - i + 1;
        }
    }

    for (let i =  0; i < tmp.length; i++) {
        arr[low + i] = tmp[i];
    }
}

const arr = [3, 6, 10, 2, 3, 33, 67, 10];
countReversePair(arr, 0, arr.length - 1)
console.log(count);
console.log(arr);