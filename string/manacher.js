function manacher(str) {
    if (!str) return '';
    const p = [];
    const chs = [];
    let idx = 0;
    chs.push('#');
    for (let i = 0; i < str.length; i++) {
        chs.push(str.charAt(i));
        chs.push('#');
    }

    str = chs.join('');
    p[0] = 1;

    for (let i = 1; i < str.length; i++) {
        const mx = idx + p[idx];
        p[i] = i  < mx ? Math.min(p[2 * idx - i], mx - i) : 1;
        while (i + p[i] < str.length && (i - p[i]) >=0 && str.charAt(i + p[i]) === str.charAt(i - p[i])) {
            p[i]++
        }

        if (i + p[i] > mx) {
            idx =  i;
        }
    }

    let maxIndex = 0;
    for (let i = 1; i < p.length; i++) {
        if (p[maxIndex] < p[i]) {
            maxIndex = i;
        }
    }

    const results = [];
    if (str.charAt(maxIndex) !== '#') {
        results.push(str.charAt(maxIndex));
    }
    for (let j = 1; j < p[maxIndex]; j++) {
        if (str.charAt(maxIndex  - j) !== '#') {
            results.push(str.charAt(maxIndex  - j));
            results.unshift(str.charAt(maxIndex  - j));
        }
    }

    return results.join('');
}


const str1 = '12212321';
console.log(manacher(str1));

const str2 = 'sssssabbdbdbbakdsd';
console.log(manacher(str2));
