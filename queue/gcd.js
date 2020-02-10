function gcd(a, b) {
    if (a < b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }

    if ( a % b === 0) return b;

    let result = 1;
    for (let k = Math.floor(b / 2); k > 0; k--) {
        if (a % k === 0 && b % k === 0) {
            result = k;
            break;
        }
    }

    return result;
}


console.log(gcd(8, 5));
console.log(gcd(8, 24));
console.log(gcd(8, 90));
console.log(gcd(8, 18));


function gcd2(a, b) {
    if (a < b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }
    if (a % b == 0 ) return b;
    return gcd2(b, a % b);
}


console.log(gcd2(8, 5));
console.log(gcd2(8, 24));
console.log(gcd2(8, 90));
console.log(gcd2(8, 18));