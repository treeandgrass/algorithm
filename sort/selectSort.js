function selectSort(arr) {
    for ( let i = arr.length; i > 1; i--) {
        let current = 0;
        for ( let j = 1; j < i; j++) {
            if (arr[j] > arr[current]) {
                current = j;
            }
        }
        if ( current !== i - 1) {
            const tmp = arr[current];
            arr[current] = arr[i - 1];
            arr[i - 1] = tmp;
        }
    }
}

const sourceArr = [3, 4, -10, -100, 0, -1, -2, -1, 400, 2, 20, 50];
selectSort(sourceArr);
console.log(sourceArr);