function dice(n, k) {
    let maxtrix = new Array(2);
    for (let i = 0; i < maxtrix.length; i++) {
        maxtrix[i] = new Array(k);
    }

    for (let i = 0; i < k; i++) {
        if (i < 6) {
            maxtrix[0][i] =  1 / 6;
        } else {
            maxtrix[0][i] = 0;
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < k; j++) {
            maxtrix[i & 1][j] = 0;
        }
        for (let j = 0; j < k; j++) {
            for (let d = 1; d <= 6; d++) {
                if (j >= d) {
                    maxtrix[i & 1][j] += 1 / 6 * maxtrix[(i - 1) & 1][j - d];
                } else {
                    break;
                }
            }
        }

        for (let j = 0; j < k; j++) {
            maxtrix[i & 1][k] = maxtrix[(i - 1) & 1][j];
        }
    }

    return maxtrix[(n-1) & 1][k - 1];
}


console.log(dice(3, 3));
console.log(dice(3, 4));
console.log(dice(3, 10));
console.log(dice(3, 11));
console.log(dice(3, 15));
console.log(dice(3, 16));
console.log(dice(3, 17));
console.log(dice(3, 18));
