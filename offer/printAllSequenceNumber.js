function printAllSequenceNumber(sum) {
    let result = [];
    let start = 1;
    let end = 2;
    let currentSum = start + end;

    while (start < end) {
        if (currentSum > sum) {
            currentSum -= start;
            start++;
        } else if (currentSum < sum) {
            end++;
            currentSum +=  end;
        } else {
            let tmp = [];
            for (let i = start; i <= end; i++) {
                tmp.push(i);
            }

            result.push(tmp);

            currentSum -= start;
            start++;

            end++;
            currentSum += end;
        }
    }

    return result;
}


console.log(printAllSequenceNumber(100));
console.log(printAllSequenceNumber(80));