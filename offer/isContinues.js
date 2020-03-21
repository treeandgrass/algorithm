function isContinues(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        }
    }

    for (let i = count; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return false;
        }
        
        count -= arr[i + 1] -  arr[i]  - 1;
    }

    return count >= 0;
}



let arr = [ 0, 0, 3, 5, 6];
console.log(isContinues(arr));

arr = [ 0, 0, 3, 5, 8];
console.log(isContinues(arr));


arr = [ 0, 2, 3, 5, 6];
console.log(isContinues(arr));