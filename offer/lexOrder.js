function lexOrder(str) {
    const result = [];
    result.push(str);
    let chs =  str.split('');

    let length = chs.length;

    while (true) {

        let i = length - 2;
        while (i > -1 && chs[i] > chs[i + 1]) {
            i--;
        }

        if (i < 0) {
            break;
        }

        let k = length -  1;
        while (k > i && chs[k] <= chs[i]) {
            k--;
        }

        if (i < k) {
            let tmp = chs[i];
            chs[i] = chs[k];
            chs[k] = tmp;

            let low = i + 1;
            let high = length - 1;
            while (low < high) {
                tmp = chs[low];
                chs[low] = chs[high];
                chs[high] = tmp;
                low++;
                high--;
            }

            result.push(chs.join(''));
        }
    }

    return result;
}


const str = 'abcd';
console.log(lexOrder(str));

const str1 = 'abc';
console.log(lexOrder(str1));
