function sunday(source, search) {
    let i = 0, j =0, index = 0;
    const sLength = source.length;
    const length = search.length;

    while (i < sLength && j < length) {
        if (source.charAt(i) === search.charAt(j)) {
            i++;
            j++;
        } else {
            let k;
            if (index + length > sLength) return false;
            const ch = source.charAt(index + length);
            for (k = length - 1; k >= 0 &&  ch !== search.charAt(k); k--);
            index += length - k;
            i = index;
            j = 0;
        }
    }

    if (i >= sLength && j < length) return false;
    return true;
}


const search = 'ABCKDAB';
const source = 'ABC ABCDAB ABCDABBDABCKDABCABDE';
console.log(sunday(source, search));