function multiply(arr) {
    let B = new Array(arr.length);

    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        B[i] = product;
        product = product * arr[i];
    }

    product = 1;
    for (let i = arr.length - 1; i >= 0;  i--) {
        B[i] = B[i] * product;
        product = product * arr[i];
    }

    return B;
}


const arr = [1, 2, 3, 4, 5];
console.log(multiply(arr));