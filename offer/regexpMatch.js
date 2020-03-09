function match(str, pattern) {
    let low = 0;
    let pLow = 0;
    let start = 0;
    let result = [];
    while (low < str.length) {
        if (pattern.charAt(pLow) === '*') {
            while (pattern.charAt(pLow - 1) === str.charAt(low) || pattern.charAt(pLow - 1) === '.') {
                if (low >= str.length || pLow >= pattern.length) break;
                low++;
            }
            pLow++;
        } else if (pattern.charAt(pLow) === '.') {
            pLow++;
            low++;
        } else if (pattern.charAt(pLow) ===  str.charAt(low)) {
            pLow++;
            low++;
        } else if ( pLow + 1 < pattern.length && pattern.charAt(pLow + 1) === '*') {
            pLow += 2;
        } else {
            pLow = 0;
            low = start + 1;
        }

        if (pLow === pattern.length) {
            result.push(str.slice(start, low));
            pLow = 0;
        }
    }

    return result;
}

let source = 'aaa';
let pattern = 'a.a';
console.log(match(source, pattern));

source = 'aaa';
pattern = 'ab*ac*a';
console.log(match(source, pattern));

source = 'aaa';
pattern = 'aa.a';
console.log(match(source, pattern));

source = 'aaa';
pattern = 'ab*a';
console.log(match(source, pattern));


source = 'aaabdsds';
pattern = 'a*.d*s.*';
console.log(match(source, pattern));