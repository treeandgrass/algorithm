function swap(arr, i, j)  {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function selectPivot(arr, low, high) {
    let pivot = Math.floor((low + high) / 2);
    if (arr[low] > arr[pivot]) {
        swap(arr, low, pivot);
    }

    if (arr[low] > arr[high]) {
        swap(arr, low, high);
    }

    if (arr[pivot] > arr[high]) {
        swap(arr, pivot, high);
    }

    return pivot;
}

function findKNumMethod(arr, start, end, k) {
    if (arr.length <= k) return arr.slice();
    if (k === 0) return [];

    const pivotIndex = selectPivot(arr, start, end);
    const pivot = arr[pivotIndex];
    let low = start;
    let high = end;

    while (low < high) {
        while (low < high && arr[low] < pivot) {
            low++;
        }

        while (low < high && arr[high] >= pivot) {
            high--;
        }

        swap(arr, low, high);
    }

    if (arr[low] < pivot && high < end) {
        high++;
    } else if (arr[low] >= pivot && low > start) {
        low --;
    }

    let lowLength = low + 1 - start;
    if (lowLength === k) {
        return arr.slice(start, low + 1);
    } else if (lowLength < k) {
        const result = arr.slice(start, low + 1);
        result.push(...findKNumMethod(arr, low + 1, end, k - lowLength));
        return result;
    } else {
        return findKNumMethod(arr, start, low, k);
    }

}


const arr = [4, 2, 10, 8, 7, 2, 3, 12, 98, 34, 23, 100, 2345, -2, -10];
console.log(findKNumMethod(arr, 0, arr.length - 1, 5));
console.log(findKNumMethod(arr, 0, arr.length - 1, 6));
console.log(findKNumMethod(arr, 0, arr.length - 1, 9));
console.log(findKNumMethod(arr, 0, arr.length - 1, 14));
console.log(findKNumMethod(arr, 0, arr.length - 1, 15));
console.log(findKNumMethod(arr, 0, arr.length - 1, 1));
console.log(findKNumMethod(arr, 0, arr.length - 1, 0));