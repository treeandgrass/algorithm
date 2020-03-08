function cutTheRope(n) {
    if (n < 2) return 0;
    let result = new Array(n);
    result.fill(1);

    for (let i = 1; i < n; i++) {
        for (let  j = 1; j <= i; j++) {
            result[i] = Math.max(result[i],  j * Math.max(result[i - j], i - j + 1));
        }
    }

    return result[n - 1];
}


function cutTheRope2(n) {
    if (n < 2) return 0;
    if (n === 2) return 1;
    if (n === 3) return 2;

    let time = Math.floor(n / 3);
    let left = n % 3;

    if (left === 1) {
        time --;
        left = 4;
    }

    return Math.pow(3, time) * left;
}

console.log(cutTheRope(0));
console.log(cutTheRope(1));
console.log(cutTheRope(2));
console.log(cutTheRope(3));
console.log(cutTheRope(7));
console.log(cutTheRope(10));

console.log("-------------");

console.log(cutTheRope2(0));
console.log(cutTheRope2(1));
console.log(cutTheRope2(2));
console.log(cutTheRope2(3));
console.log(cutTheRope2(7));
console.log(cutTheRope2(10));