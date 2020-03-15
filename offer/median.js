function findMedian(arr1, arr2) {
    if (!arr1) {
        arr1 = [];
    }
    if (!arr2) {
        arr2 = [];
    }

    let m = arr1.length;
    let n = arr2.length;

    if (m > n) {
        let tmp = arr1;
        arr1 = arr2;
        arr2 =  tmp;

        tmp =  m;
        m = n;
        n = tmp;
    }

    let iMin = 0;
    let iMax = m;
    while ((m !== 0 || n !== 0) && iMin <= iMax) {
        let i = Math.floor((iMax + iMin) /  2);
        j = Math.floor((m + n + 1) / 2 - i);

        if (i > 0 && arr1[i - 1] > arr2[j]) {
            iMax = i - 1;
        } else if (i < m &&  arr2[j - 1] > arr1[i]) {
            iMin = i + 1;
        } else  {
            let maxLeft = 0;
            if ( i === 0) {
                maxLeft = arr2[j - 1];
            } else if (j === 0) {
                maxLeft = arr1[i - 1];
            } else if (j > 0) {
                maxLeft = Math.max(arr1[i - 1], arr2[j - 1]);
            }

            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i === m) {
                minRight = arr2[j];
            } else if (j ===  n) {
                minRight = arr1[i];
            } else {
                minRight = Math.min(arr1[i], arr2[j]);
            }

            return (minRight + maxLeft) / 2;
        }
    }

    return 0;
}

console.log(findMedian(null, []));
console.log(findMedian(null, [3]));
console.log(findMedian([2], [3]));
console.log(findMedian([2, 2, 6], [3]));
console.log(findMedian([2, 2, 6], [3, 10, 20]));