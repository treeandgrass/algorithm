function leastKCountSubString(s, low, high, k) {
    if (low > high) return 0;
    const cnts = new Array(high - low + 1);
    cnts.fill(0);
    const aNum = 'a'.charCodeAt(0);
    for (let i = low; i <= high; i++) {
        cnts[s.charCodeAt(i) - aNum]++;
    }

    let start = low;
    let end = high;
    
    while (start <= end && cnts[s.charCodeAt(start) - aNum] < k) start++;
    while( end > start && cnts[s.charCodeAt(end) - aNum] < k) end--;

    if  (start > end) return 0;

    let partition = start;
    while (partition <= end && cnts[s.charCodeAt(partition) - aNum] >= k) {
        partition++;
    }

    if (partition > end) {
        return end - start + 1;
    }

    return Math.max(leastKCountSubString(s, start, partition - 1, k), leastKCountSubString(s, partition + 1, end, k));
}

const s = "aaabb";
const k = 3;

console.log(leastKCountSubString(s, 0, s.length - 1,  k));

const s1 = "abbccddadcbbb";
const k1 = 3;

console.log(leastKCountSubString(s1, 0, s1.length - 1,  k1));
