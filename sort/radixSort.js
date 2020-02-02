function radixSort(arr) {
    const count = new Array(10), temp = [];
    let radix = 1;
    let d = 0, max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    d = `${max}`.length;

    for (let i = 0; i < d; i++) {
        count.fill(0);

        for (let j = 0; j < arr.length; j++) {
            const k = (Math.floor(arr[j] / radix)) % 10;
            count[k]++;
        }

        for (let j = 1; j < 10; j++) {
            count[j] = count[j] + count[j - 1];
        }

        for (let j = arr.length - 1; j >= 0; j--) {
            const k = Math.floor((arr[j] / radix)) % 10;
            temp[count[k] - 1] = arr[j];
            count[k]--;
        }
        
        for (let j = 0; j < arr.length; j++) {
            arr[j] = temp[j];
        }

        radix = radix * 10;
    }
}

const sourceArr = [3, 4, 567, 100, 0, 34, 19, 67, 400, 2, 20, 5006, 7889, 12];
radixSort(sourceArr);
console.log(sourceArr);