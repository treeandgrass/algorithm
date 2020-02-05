function stringToInt(str) {
    str = str.trim();
    let result = 0;
    const pos_max = Math.pow(2, 31) -1;
    const neg_max = -Math.pow(2, 31);
    const num = /[0-9]/;

    if (!str) return 0;

    let sign = 1;
    if (str.charAt(0) === '-') {
        sign = -1;
    }

    if (str.charAt(0) === '-' || str.charAt(0) === '+') {
        str = str.slice(1);
    }

    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (!num.test(ch)) {
            break;
        }

        ch = +ch;

        if (i === 9) {
            if (sign > 0 && (pos_max / 10 < result || (pos_max / 10 === result && pos_max % 10 >= ch))) {
                result = pos_max;
                break;
            }

            if (sign < 0 && (-neg_max / 10 < result || (-neg_max / 10 === result && -neg_max % 10 >= ch))) {
                result = neg_max;
                break;
            }
        }
        result = result * 10 + ch;
    }

    if (result * sign < 0) {
        result = sign * result;
    }

    return result;
}

const str1 = "-323323232";
const str2 = "323323232";
const str3 = "2147483646";
const str4 = "-2147483646";
const str5 = "2147483647";
const str6 = "-2147483648";
const str7 = "-2147483648";
const str8 = "-3147483648";
const str9 = "3147483648";


console.log(stringToInt(str1));
console.log(stringToInt(str2));
console.log(stringToInt(str3));
console.log(stringToInt(str4));
console.log(stringToInt(str5));
console.log(stringToInt(str6));
console.log(stringToInt(str7));
console.log(stringToInt(str8));
console.log(stringToInt(str9));



    
