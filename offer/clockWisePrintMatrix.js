function clockWisePrintMatrix(arr, m, n) {
    let i = 0;
    let j = 0;
    let space = 0;
    let maxI = Math.ceil(m / 2);
    let maxJ = Math.ceil(n / 2);

    while (i < maxI && i > -1 && j < maxJ && j > -1) {
        for (; j < n - space; j++) {
            console.log(arr[i * m + j]);
        }

        for (j = j - 1, i = i + 1; i < m - space; i++) {
            console.log(arr[i * m + j]);
        }

        for (i = i - 1, j = j - 1; j >= space; j--) {
            console.log(arr[i * m + j]);
        }

        for (j = j + 1, i = i - 1; i > space; i--) {
            console.log(arr[i * m + j]);
        }

        j++;
        i++;
        space++;
    }

}

let arr = [3, 2, 5, 8, 2, 6, 7, 1, 5, 6, 8, 9, 4, 3, 2, 6];
clockWisePrintMatrix(arr, 4, 4);

console.log("--------------");

let arr1 = [3, 2, 5, 2, 6, 7, 5, 6, 8];
clockWisePrintMatrix(arr1, 3, 3);