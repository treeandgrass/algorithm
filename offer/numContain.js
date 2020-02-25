function numContain(nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return nums[i];
        }
        map.set(nums[i]);
    }

    return null;
}

const nums = [1, 4, 6, 2, 1, 10, 9, 3, 10, 6, 7];
console.log(numContain(nums));

// solution two
function duplicate(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== i) {
            if (nums[nums[i]] === nums[i]) {
                return nums[i];
            }
            const tmp = nums[i];
            nums[i] = nums[nums[i]];
            nums[tmp]  = tmp;
        }
    }
}

console.log(duplicate(nums));