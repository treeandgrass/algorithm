function exchaneOddAndEven(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            result.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

function exchaneOddAndEven2(arr) {
    let low = 0;
    while (low < arr.length) {
        if (arr[low] % 2 === 1) {
            let i = low - 1;
            while (i > -1 && arr[i] % 2 === 0) {
                const tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                i --;
            }
        }
        low++;
    }

    return arr;
}



let arr = [3, 4, 1, 3, 3, 4, 6, 3, 9, 12, 0, 1];
console.log(exchaneOddAndEven(arr));

console.log(exchaneOddAndEven2(arr));