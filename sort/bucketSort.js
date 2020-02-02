function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


function bucketSort(arr, n) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    const bucktSize = ~~((max - min) / n) + 1;
    const buckets = [];

    for (let j = 0; j < arr.length; j++) {
        const index = ~~ (arr[j] / bucktSize);
        if(!buckets[index]) {
            buckets[index] = [];
        }
        buckets[index].push(arr[j]);

        let l = buckets[index].length;
        while (l > 1) {
            if (buckets[index][l - 1] < buckets[index][l - 2]) {
                swap(buckets[index], l - 1, l - 2);
            }
            l --;
        }

    }

    let index = 0;
    for (let i = 0; i < buckets.length; i++) {
        for (let j = 0; buckets[i] && j < buckets[i].length; j++) {
            arr[index++] = buckets[i][j];
        }
    }
}


const sourceArr = [3, 4, 567, 100, 0, 34, 19, 67, 40, 2, 20, 6, 79, 12, 56];
bucketSort(sourceArr, 10);
console.log(sourceArr);
