function findNumberInString(str, n) {
    if (n === 0) {
        return str.charAt(0);
    }

    let i = 0;
    let power = 0;
    while (power < n) {
        power += Math.pow(10, i) * 9 * (i + 1);
        i++;
    }

    power -= Math.pow(10, i - 1) * 9 * i;
    n -= power;

    const shift = n / i;
    const back = n % i;

    const number = shift + power;
    const strNumber = number.toString();
    return strNumber.charAt(back);
}

let str = '';
for (let i = 0; i <= 100; i++) {
    str += i;
}

console.log(str);
console.log(findNumberInString(str, 15));
console.log(findNumberInString(str, 101));