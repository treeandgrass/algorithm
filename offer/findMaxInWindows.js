function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


function buildStack(arr) {
    let last = Math.floor(arr.length / 2) - 1;
    for (let i = last; i >= 0; i--) {
        let current = i;
        while (current < arr.length) {
            let next = 2 * current + 1;
            if (next >= arr.length) {
                break;
            } else {
                if (next + 1 < arr.length && arr[next] < arr[next + 1]) {
                    next++;
                }
            }

            if (arr[current] < arr[next]) {
                swap(arr, current, next);
                current = next;
            }
        }
    }
}


function replaceStackValue(arr, oldValue, newValue) {
    if (oldValue === newValue) {
        return;
    }
    
    let i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === oldValue) {
            arr[i] = newValue;
            break;
        }
    }

    while (i < arr.length &&  i >= 0) {
        let next = 2 * i + 1;
        if (next + 1 < arr.length && arr[next] < arr[next + 1]) {
            next++;
        }

        if (next < arr.length && arr[i] < arr[next]) {
            swap(arr, i, next);
            i = next;
            continue;
        }

        next = Math.floor((i - 1) / 2);
        if (next >= 0 &&  arr[next] < arr[i]) {
            swap(arr, next, i);
            i  = next;
            continue;
        }

        break;
    }
}




function  findMaxValueInWindows(arr, size) {
    if (!arr || arr.length === 0) return [];
    if  (arr.length <= size) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }

        return [max];
    }

    let wins = arr.slice(0, size);
    let result = [];
    buildStack(wins);
    result.push(wins[0]);
    
    for (let i = 0, j = i + size; j < arr.length; i++, j++) {
        replaceStackValue(wins, arr[i], arr[j]);
        result.push(wins[0]);
    }

    return result;
}
        
const arr = [2, 3, 4, 2, 6, 2, 5, 1];

console.log(findMaxValueInWindows(arr, 3));