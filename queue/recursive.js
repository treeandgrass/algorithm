function hanoiTower(a, b, c, n) {
    if (n < 1 ) return;
    if (n === 1) {
        console.log(`move ${n} from ${a} to ${b}`);
        return;
    }
    hanoiTower(a, c, b , n - 1);
    console.log(`move ${n} from ${a} to ${b}`);
    hanoiTower(c, b, a, n - 1);
}


hanoiTower('A', 'B', 'C', 3);