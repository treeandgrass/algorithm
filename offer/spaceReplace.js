function spaceReplace(str, target) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === ' ') {
            stack.push('%20');
        } else {
            stack.push(str.charAt(i));
        }
    }

    return stack.join('');
}

console.log(spaceReplace('A B'));