function printNumOneToMaxN(n, curr = []) {
    if (n < 1) {
        console.log(curr.join(''));
        return;
    }
    for (let i = 0; i < 10; i++) {
        if (!(curr.length === 0 && i === 0)) {
            curr.push(i);
        }
        printNumOneToMaxN(n -  1, curr);
        curr.pop();
    }
}

printNumOneToMaxN(2);
printNumOneToMaxN(1);
printNumOneToMaxN(3);