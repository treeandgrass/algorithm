function findUglyNum(n) {
    let result = new Array(n);

    let i2 = 0;
    let i3 = 0;
    let i5 = 0;

    result[0] = 1;
    let i = 1;

    while (i < n) {
        let next2 = result[i2] * 2;
        let next3 = result[i3] * 3;
        let next5 = result[i5] * 5;

        let min = Math.min(next2, Math.min(next3, next5));
        if (next2 === min) {
            i2 ++;
        }

        if (next3 === min) {
            i3 ++;
        }

        if (next5 === min) {
            i5++;
        }

        result[i++] = min;
    }

    return result;
}


console.log(findUglyNum(10));
