function power(base, e) {
    if (e === 0) return 1;
    if (e === 1) return base;
    let sign = 1;
    if (e < 0) {
        e = -e;
        sign = -1;
    }

    if (e % 2 === 1) {
        e--;
        sign *= base;
    }

    const half  = power(base, e / 2);
    const result = half * half * sign;
    return sign > 0 ? result : 1 / result;
}


console.log(power(3, 3));
console.log(power(2, 3));
console.log(power(10, 3));
console.log(power(10, 2));
console.log(power(10, 1));
console.log(power(10, 0));
console.log(power(10, -2));
