function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const len = arr.length;
    const mid = Math.floor((len - 1) / 2) + 1;
    let firstPartArray = arr.slice(0, mid);
    let secondPartArray = arr.slice(mid, len);

    firstPartArray = mergeSort(firstPartArray);
    secondPartArray = mergeSort(secondPartArray);

    let firstIndex = 0, secondIndex = 0, index = 0;
    while (firstIndex < firstPartArray.length && secondIndex < secondPartArray.length) {
        if (firstPartArray[firstIndex] <= secondPartArray[secondIndex]) {
            arr[index++] = firstPartArray[firstIndex++];
        } else {
            arr[index++] = secondPartArray[secondIndex++];
        }
    }

    while (firstIndex < firstPartArray.length) {
        arr[index++] = firstPartArray[firstIndex++];
    }

    while (secondIndex < secondPartArray.length) {
        arr[index++] = secondPartArray[secondIndex++];
    }

    return arr;
}

const sourceArr = [3, 4, -10, -100, 0, -1, -2, -1, 400, 2, 20, 50];
mergeSort(sourceArr);
console.log(sourceArr);

const sourceArr1 = [1, 2, 1, 2, 1, 2, 2, 3, 2, 2, 2, 2, 2];
mergeSort(sourceArr1);
console.log(sourceArr1);

// [0, 1, 3] len = 3, mid = Math.floor((len - 1) / 2) + 1; mid = 2
// [1, 3] [4]

//[1, 3] len = 2, mid = Math.floor((len - 1) / 2) + 1, mid = 1
//[1] [3]