function countNumberOfK(arr, k) {
    let first = binarySearch(arr, k);
    let last = binarySearch(arr, k + 1);

    if (first >= arr.length || arr[first] !== k) return 0;
    return last - first;
}


function binarySearch(arr, k) {
    let l = 0;
    let h = arr.length;

    while (l < h) {
        let m = l + Math.floor((h - l) / 2);
        if (arr[m] >= k) {
            h = m;
        } else {
            l = m + 1;
        }
    }

    return l;
}

const arr = [1, 2, 4, 4, 4, 4, 4, 4, 9, 10, 30];
console.log(countNumberOfK(arr, 4));
console.log(countNumberOfK(arr, 1));
console.log(countNumberOfK(arr, 30));