function Backpack(maxWeight, objects, ms) {
    const states = new Array(objects.length);
    for (let i = 0; i < objects.length; i++) {
        states[i] = new Array(maxWeight + 1);
    }
        
    for(let j = 0; j < objects.length; j++) {
        states[j][0] = 0;
    }

    for (let j = 0; j <= maxWeight; j++) {
        if (j >= objects[0]) {
            states[0][j] = ms[0];
        } else {
            states[0][j] = 0;
        }
    }

    for (let i  = 1; i < objects.length; i++) {
        for (let j = 1; j <= maxWeight; j++) {
            if (j - objects[i] >= 0) {
                states[i][j] = Math.max(states[i - 1][j], states[i - 1][j - objects[i]] + ms[i]);
            } else {
                states[i][j] = states[i - 1][j];
            }
        }
    }

    return states[objects.length - 1][maxWeight];
}

const objects = [2, 2, 4, 6, 3];
const ms = [3, 2, 6, 9, 5];
console.log(Backpack(10, objects, ms));