function selectHalfNum(arr) {
    let majority = arr[0];
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (majority === arr[i]) {
            count ++;
        } else {
            count--;
        }

        if (count === 0) {
            count = 1;
            majority  = arr[i];
        }
    }

    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === majority) {
            count++;
        }
    }

    if (count > arr.length / 2) {
        return majority;
    }

    return -1;
}


const arr = [3, 1, 1, 1, 2, 4, 1, 1, 4, 5, 2, 1, 1, 4, 1, 1, 1, 7, 8, 9, 1];

console.log(selectHalfNum(arr));