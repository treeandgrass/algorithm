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