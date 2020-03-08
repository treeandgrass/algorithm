function countNumberOfOne(n) {
    let count = 0;
    while (n > 0) {
        if (n & 1 === 1) count++;
        n = n >> 1;
    }

    return count;
}


console.log(countNumberOfOne(4));
console.log(countNumberOfOne(10));
console.log(countNumberOfOne(39));
console.log(countNumberOfOne(2));
console.log(countNumberOfOne(3));
console.log(countNumberOfOne(8888));