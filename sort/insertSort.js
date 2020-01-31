function insertSort(arr) {
    for (let i = 2; i <= arr.length; i++) {
        for (let j = arr.length - i; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

const sourceArr = [3, 4, -10, -100, 0, -1, -2, -1, 400, 2, 20, 50];
insertSort(sourceArr);
console.log(sourceArr);