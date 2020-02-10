function primeNumber(num) {
    let flags = new Array(num + 1);
    flags.fill(1);
    
    for (let i = 2; i <= Math.floor(num / i); i++) {
        if (flags[i]) {
            for (let j = i; j <= Math.floor(num / i); j++) {
                flags[i * j] = 0;
            }
        }
    }

    let result = [];
    for (let i = 2; i <= num; i++) {
        if (flags[i]) {
            result.push(i);
        }
    }

    return result;
}

console.log(primeNumber(50));


