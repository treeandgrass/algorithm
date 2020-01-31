function shellSort(arr) {
    for ( let gap = arr.length >> 1; gap > 0; gap = gap >> 1) {
        for ( let i = gap;  i < arr.length; i++) {
            let tmp = arr[i];
            let j;
            for (j = i - gap; j >= 0 && arr[j] > tmp; j = j - gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = tmp;
        }
    }
}

const sourceArr = [3, 4, -10, -100, 0, -1, -2, -1, 400, 2, 20, 50];
shellSort(sourceArr);
console.log(sourceArr);