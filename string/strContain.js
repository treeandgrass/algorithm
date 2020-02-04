function contain(parent, child) {
    if (!parent) return false;
    if (child === null || child === undefined) return false;
    if (!child) return true;

    let hash = 0;
    const ACharCode = 'A'.charCodeAt(0);
    for (let i = 0; i < parent.length; i++) {
        hash |= 1 << (parent.charCodeAt(i) - ACharCode);
    }

    for (let j = 0; j < child.length; j++) {
        if (!(hash & (1 << (child.charCodeAt(j) - ACharCode)))) {
            return false;
        }
    }
    return true;
}


function containMehod2(parent, child) {
    const primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 49, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    let big = 1;
    const ACharCode = 'A'.charCodeAt(0);
    for ( let i = 0; i < parent.length; i++) {
        const code = primeArr[parent.charCodeAt(i) - ACharCode];
        if (big % code) {
            big *= code;
        }
    }

    for (let i = 0; i < child.length; i++) {
        const code = primeArr[child.charCodeAt(i) - ACharCode];
        if (big % code) {
            return false;
        }
    }

    return true;
}

const parent = 'abghkslpwxcnsaaasasfdhbxbg';
const child1 = 'kpwxg';
const child2 = 'yff';

console.log(contain(parent, child1));
console.log(contain(parent, child2));


const uParent = "ABGHKSLPWXCNSAAASASFDHBXBG";
const uchild1 = "KPWXG";
const uchild2 = 'YFF';
const uchild3 = "KYPWXG";

console.log(contain(uParent, uchild1));
console.log(contain(uParent, uchild2));
console.log(contain(uParent, uchild3));