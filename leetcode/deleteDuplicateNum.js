function deleteDuplicateNum(arr) {
    let low = 0;
    let high = 1;
    let count = 1;
    while (count <= 2) {
        if (arr[high] === arr[high - 1]) {
            count++;
        } else {
            count = 1;
        }
        low ++;
        high++;
    }

    while (high < arr.length) {
        if (count <= 2) {
            arr[low++] = arr[high++];
        }
        if (arr[high - 1] === arr[high]) {
            count++;
            if (count > 2) {
                high++;
            }
        } else {
            count = 1;
        }
    }
    arr.length = low;
}

const arr = [1, 1, 2, 2, 2, 4, 8, 9, 9, 10, 10, 10, 10, 10, 23, 28, 28, 28, 28];
deleteDuplicateNum(arr);
console.log(arr);