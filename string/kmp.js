function buildNext(str) {
    const next = [];
    let low = 0;
    next[0] = -1;

    for (let i = 1; i < str.length; i++) {
        next[i] = low;
        if (str.charAt(low) === str.charAt(i)) {
            low++;
        } else {
            low = 0;
        }
    }
    return next;
}


function kmp(source, search) {
    const next = buildNext(search);

    let i = 0, j = 0;
    while (i < source.length && j < search.length) {
        if (source.charAt(i) === search.charAt(j)) {
            i++;
            j++;
        } else {

            i = next[j] > 0 ? i : i - next[j];
            j = next[j] > 0 ? next[j] : 0;
        }
    }

    if (i < source.length && j >= search.length) {
        return true;
    }
    
    return false;
}



const search = 'ABCDAB';
const source = 'ABC ABCDAB ABCDABBDCABDE';
console.log(kmp(source, search));