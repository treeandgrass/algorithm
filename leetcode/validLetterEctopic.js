function validLetterEctopic(s, t) {
    if (!s || !t) return false;
    if (s.length !== t.length) return false;
    const aNum = 'a'.charCodeAt(0);
    const cnt = new Array('z'.charCodeAt(0) - aNum + 0);
    cnt.fill(0);
    for (let i = 0; i < s.length; i++) {
        cnt[s.charCodeAt(i) - aNum]++;
        cnt[t.charCodeAt(i) - aNum]--;
    }

    for (let i = 0; i < cnt.length; i++) {
        if (cnt[i] !== 0) return false;
    }

    return true;
}

const s = "anagram";
const t = "nagaram";
console.log(validLetterEctopic(s, t));

const s1 = "rat";
const t1 = "car";
console.log(validLetterEctopic(s1, t1));