function countSort(arr) {
    let tmp = [];
    for (let j = 0; j < arr.length; j++) {
        const k = arr[j];
        tmp[k] = tmp[k] ? tmp[k]++ : 1;
    }

    let j = 0;
    for (let i = 0; i < tmp.length; i++) {
        while(tmp[i]) {
            arr[j++] = i;
            tmp[i] --;
        }
    }
}

const sourceArr = [3, 4, 567, 100, 0, 34, 19, 67, 40, 2, 20, 6, 79, 12, 56];
countSort(sourceArr);
console.log(sourceArr);