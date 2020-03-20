function findTwoDifferentNum(arr) {
    let diff = 0;
    for (let i = 0; i < arr.length; i++) {
        diff ^= arr[i];
    }

    diff &= -diff;

    let result = new Array(2);
    result.fill(0);

    for (let i = 0; i < arr.length; i++) {
        if ((diff & arr[i]) === 0) {
            result[0] ^= arr[i];
        } else {
            result[1] ^= arr[i];
        }
    }

    return result;
}


let arr = [2, 2, 100, 100, 7, 21, 21, 90, 90, 50];

console.log(findTwoDifferentNum(arr));