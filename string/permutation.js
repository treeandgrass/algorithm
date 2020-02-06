function reverse(arr, start, end) {
    while (start < end) {
        let tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;

        start++;
        end--;
    }
}


function calcAllPermutation1(str) {
    let chs = str.trim().split('');
    chs.sort((ch1, ch2) => {
        return ch1.charCodeAt(0) - ch2.charCodeAt(0);
    });

    let result = [chs.join('')];

    for (;;) {
        let num;
        for (num = chs.length - 2; chs[num] >= chs[num + 1]; num --);

        if  (num < 0) {
            break;
        }

        let k;
        for (k = chs.length - 1; k > num && chs[k] <= chs[num]; k--);

        let tmp = chs[num];
        chs[num] = chs[k];
        chs[k] = tmp;

        reverse(chs, num + 1, chs.length - 1);

        result.push(chs.join(''));
    }
    
    return result;
}

const str1 = 'sabhk';
console.log(calcAllPermutation1(str1));
console.log(calcAllPermutation1(str1).length);
