function flip(str, start, end) {
    if (start >= end) return str;
    const chs = Array.from(str);
    while (start < end) {
        let tmp = chs[start];
        chs[start++] = chs[end];
        chs[end--] = tmp;
    }

    return chs.join('');
}

function flipPreviousNChs(str, n) {
    let targetStr = flip(str, 0, str.length);
    targetStr = flip(targetStr, 0, str.length - n - 1);
    targetStr = flip(targetStr, str.length - n, targetStr.length - 1);

    return targetStr;
}

var sourceStr = "adsgpwcfhgk";
console.log(flipPreviousNChs(sourceStr, 4));

