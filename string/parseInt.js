function parseInt(str) {
    let maxValue = Math.pow(2, 32) - 1;
    let absMinValue = Math.pow(2, 32);

    str = str.trim();
    let sign = 1;
    if (str.charAt(0) === '-') {
        sign  = -1;
        str = str.slice(1);
    } else if (str.charAt(0) === '+') {
        sign  = 1;
        str = str.slice(1);
    }

    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (/\d/.test(str.charAt(i))) {
            let d = +str.charAt(i);
            
            if (sign > 0 && (result > maxValue /  10 || (result === maxValue  / 10 && d >= maxValue % 10))) {
                return maxValue - 1;
            } else if (sign < 0 && (result > absMinValue / 10 || (result === absMinValue / 10 && d >= absMinValue % 10))) {
                return absMinValue * -1;
            }
            
            result = result * 10 + d;
        } else {
            break;
        }
    }

    return result * sign;
}

console.log(parseInt('+21212000d'));
console.log(parseInt('-21212000d'));
