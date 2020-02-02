function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function heap(arr, start, end) {
    let dad = start;
    let son = 2 * dad + 1;

    if (son >= end) {
        return;
    }

    if (son + 1 < end && arr[son] < arr[son + 1]) {
        son++;
    }
    if (arr[son] > arr[dad]) {
        swap(arr, son, dad);
        heap(arr, son, end);
    }
}

function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heap(arr, i, arr.length);
    }

    
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        heap(arr, 0, i);
    }
}

const sourceArr = [3, 4, -10, -100, 0, -1, -2, -1, 400, 2, 20, 50];
heapSort(sourceArr);
console.log(sourceArr);