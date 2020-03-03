function findMinNumOfSpinArray(nums, low, high) {
    if (low > high) return -1;
    if (low === high) return nums[low];
    const mid = Math.floor((low + high) / 2);
    if (nums[high] > nums[mid] || nums[low] > nums[mid]) {
        return findMinNumOfSpinArray(nums, low, mid);
    } else if (nums[high] < nums[mid] || nums[high] < nums[low]) {
        return findMinNumOfSpinArray(nums, mid, high);
    } else {
        return finMinNumber(nums, low, high);
    }
}