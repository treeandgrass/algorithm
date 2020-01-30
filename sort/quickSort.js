function split(arr, start, end) {
    if (start >= end) return;
    let split_index = start;
    start = start + 1;

    while (start < end) {
        while(start < end && arr[start] < arr[split_index]) {
            start++;
        }

        while (start < end && arr[end] >= arr[split_index]) {
            end--;
        }

        if (start < end) {
            const tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
        }
    }

    while (split_index < end && arr[split_index] <= arr[end]) { 
        end --;
    }

    if (split_index < end) {
        let tmp = arr[end];
        arr[end] = arr[split_index];
        arr[split_index] = tmp;
    }

    return end;
}

function quickSort(arr, start, end) {
    if (start < end) {
        let split_index = split(arr, start, end);
        quickSort(arr, start, split_index - 1);
        quickSort(arr, split_index + 1, end);
    }
}

const sourceArr = [3, 4, -10, -100, 0, -1, -2, -1, 400, 2, 20, 50];
quickSort(sourceArr, 0, sourceArr.length - 1);
console.log(sourceArr);

const sourceArr1 = [1, 2, 1, 2, 1, 2, 2, 3, 2, 2, 2, 2, 2];
quickSort(sourceArr1, 0, sourceArr1.length - 1);
console.log(sourceArr1);

// version2

function swap(arr, index1, index2) {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

function choice(arr, start, end) {
    const pivot = Math.floor((start + end) / 2);
    if (arr[start] > arr[pivot]) {
        swap(arr, start, pivot);
    }

    if (arr[start] <arr[end]) {
        swap(arr, start, end);
    }

    if (arr[pivot] < arr[end]) {
        swap(arr, pivot, end);
    }

    return end;
}

function partition(arr, start, end) {
    const pivot = choice(arr, start, end);
    let j = start;
    for (let i = start; i <= end; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, j);
            j = j + 1;
        }
    }

    swap(arr, j, pivot);

    return j;
}

function quickSort2(arr, start, end) {
    if (start < end) {
        let split = partition(arr, start, end);
        quickSort2(arr, start, split - 1);
        quickSort2(arr, split + 1, end);
    }
}

const sourceArr2 = [3, 4, -10, -100, 0, -1, -2, -1, 400, 2, 20, 50];
quickSort2(sourceArr2, 0, sourceArr2.length - 1);
console.log(sourceArr2);

const sourceArr3 = [1, 2, 1, 2, 1, 2, 2, 3, 2, 2, 2, 2, 2];
quickSort2(sourceArr3, 0, sourceArr3.length - 1);
console.log(sourceArr3);