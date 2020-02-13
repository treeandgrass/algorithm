function eightQueen() {
    const board = [];
    const record = new Array(8);
    const columns = new Array(8);
    let i = 0, j = 0;

    for (let i = 0 ; i < 8; i++) {
        board[i] = [];
        columns[i] = true;
    }

    while (i < 8 && i >= 0) {
        let canDrop =  true;
        const left = j  - 1;
        const right = j + 1;
        const top = i  - 1;
        const bottom = i + 1;

        if (left >= 0 && board[i][left]) {
            canDrop = false;
        }

        if  (right >= 0 && right < 8 &&  board[i][right]) {
            canDrop = false;
        }

        if (top >= 0 && top < 8 && board[top][j]) {
            canDrop = false;
        }

        if (bottom >= 0 && bottom < 8 && board[bottom][j]) {
            canDrop =  false;
        }

        if (left >= 0 && top >=0 &&  board[top][left]) {
            canDrop  = false;
        }

        if (left >= 0 && bottom >= 0 && bottom < 8 && board[bottom][left]) {
            canDrop  = false;
        }

        if (right >= 0 && right < 8 && bottom >= 0 && bottom < 8 && board[bottom][right]) {
            canDrop = false;
        }

        if (right >= 0 && right < 8 && top >= 0  && board[top][right]) {
            canDrop = false;
        }

        if (canDrop && j >= 0 && j < 8 && columns[j]) {
            board[i][j] = true;
            columns[j] = false;
            record[i] = { i, j };
            i = i + 1;
            j  =  0;
        } else if (j + 1 < 8) {
            j = j + 1;
        } else {
            i = i - 1;
            if (i >= 0) {
                j  =  record[i].j;
                board[i][j] = false;
                columns[j]  = true;
                record[i] = null;
                j = j +  1;
            }
        }
    }

    return record;
}

console.log(eightQueen());