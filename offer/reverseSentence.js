function reverseSentence(str) {
    if (!str) return str;

    const result = str.split('');

    reverse(result, 0, result.length);

    let start = 0;
    let end = 0;

    while (true) {
        if (result[end] && result[end] !== " ") {
            end++;
        } else {
            if (start !== end) {
                reverse(result, start, end);
                end = end + 1;
                start = end;
            } else {
                start++;
                end++;
            }
            if (end >= result.length) {
                break;
            }
        }
    }

    return result.join('');
}


function reverse(arr, low, high) {
    high = high - 1;
    while (low < high) {
        const tmp =  arr[low];
        arr[low] = arr[high];
        arr[high] = tmp;

        low++;
        high--;
    }
}

console.log(reverseSentence("I am a student."));
