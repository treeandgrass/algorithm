function simulateAdd(a, b) {
    return b === 0 ? a : simulateAdd(a ^ b, (a&b) << 1);
}


console.log(simulateAdd(100, 10));