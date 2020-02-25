function matrixConatin(nums, target, m, n) {
    let i = 0, j = 0;
    for (; i < n; i++) {
        if (nums[j * n + i] > target) {
            break;
        }
    }

    if (nums[j * n + i] > target) {
        i--;
    }

    while(i >= 0 && j <= m) {
        if (nums[j * n + i] === target) {
            return true;
        } else if (nums[j * n + i] <  target) {
            j++;
        } else  {
            i--;
        }
    }

    return false;
}

const nums = [1, 4, 7, 11, 15, 2, 5, 8, 12, 19, 3, 6, 9, 16, 22, 10, 13, 14, 17, 24, 18, 21, 23, 26, 30];
console.log(matrixConatin(nums, 5, 5, 5));
console.log(matrixConatin(nums, 20, 5, 5));