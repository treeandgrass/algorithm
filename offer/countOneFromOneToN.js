function countOneFromOneToN(n) {
    let len = n.toString().length;
    let count = 0;
    for (let i = 1; i <= len; i++) {
        const mod = Math.pow(10, i);
        const prevMode = mod  / 10;
        const base = Math.floor(n / mod);
        const back = n % mod;
        const positionNum = (n / prevMode) %  10;
        if (positionNum === 0) {
            count += base * prevMode;
        } else if (positionNum === 1) {
            count += base * prevMode + back % prevMode  + 1;
        } else {
            count += (base + 1) * prevMode;
        }
    }

    return count;
}


console.log(countOneFromOneToN(1));
console.log(countOneFromOneToN(9));
console.log(countOneFromOneToN(20));
console.log(countOneFromOneToN(100));