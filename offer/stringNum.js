function isNumber(str) {
    let reg = /[+,-]?\d+((.|[e, E][+,-]?)\d)\d*/;
    const match = str.match(reg);
    if (match) {
        return match[0] === str;
    }
    return false;
}

console.log(isNumber("+100"));
console.log(isNumber("5e2"));
console.log(isNumber("-123"));
console.log(isNumber("3.1416"));
console.log(isNumber("-1E-16"));

console.log("----");

console.log(isNumber("12e"));
console.log(isNumber("1a3.14"));
console.log(isNumber("1.2.3"));
console.log(isNumber("+-5"));
console.log(isNumber("12e+4.3"));