function search(word, index, bord, i, j, record)  {
    let isExit = false;
    if  (record[i][j]) return isExit;
    if (index >= word.length) return !isExit;
    if (i >= bord.length || j >= bord[0].length) return isExit;
    if (word.charAt(index) !== bord[i][j]) return isExit;

    record[i][j]  = true;
    if (i + 1 <bord.length &&  !record[i + 1][j]) {
        isExit = search(word, index + 1, bord, i + 1, j, record);
    }

    if (!isExit && j + 1 < bord[0].length  && !record[i][j+1]) {
        isExit = search(word, index + 1, bord,  i, j + 1, record);
    }

    if (!isExit && j-1 >= 0 && !record[i][j-1]) {
        isExit = search(word, index + 1, bord, i, j - 1, record);
    }

    if (!isExit && i - 1>= 0 && record[i-1][j]) {
        isExit = search(word, index + 1, bord, i - 1, j, record);
    }

    record[i][j] = false;

    return isExit;
}

function wordsSearch(words, bord) {
    const aNum = 'A'.charCodeAt(0);
    const positions = new Array('z'.charCodeAt(0) - aNum);
    const mod = bord[0].length;
    const record = new Array(board.length);
    for (let i = 0; i < bord.length; i++) {
        record[i] = new Array(board[i].length);
        for (let j = 0; j < bord[i].length;  j++) {
            const index = bord[i][j].charCodeAt(0) - aNum;
            if (!positions[index]) positions[index] = [];
            positions[index].push(i+ j * mod);
            record[i][j] = false;
        }
    }

    const result = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const starts = positions[word.charCodeAt(0) - aNum];
        if(!starts || starts.length < 1)  continue;

        let isExit = false;
        for (let k = 0; k < starts.length; k++) {
            const pos = starts[k];
            const n = Math.floor(pos / mod);
            const m = pos % mod;

            isExit = search(word, 0, bord, m, n, record);
            if (isExit) break;
        }

        if (isExit) result.push(word);
    }

    return result;
}

const words = ["oath","pea","eat","rain"];
const board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
];

console.log(wordsSearch(words,board));