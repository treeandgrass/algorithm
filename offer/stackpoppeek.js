function isPropbabeOrder(pushList, popList) {
    const stack = [];
    for (let i = 0; i < pushList.length; i++) {
        stack.push(pushList[i]);
        while (stack.length > 0) {
            let popValue1 = stack.pop();
            let popValue2 = popList.shift();

            if (popValue1 !== popValue2) {
                popList.unshift(popValue2);
                stack.push(popValue1);
                break;
            }
        }
    }

    return stack.length === 0;
}


const pushList = [1, 2, 3, 4, 5];
const popList1 = [4, 3, 5, 1, 2];
const popList2 = [4, 5, 3, 2, 1];

console.log(isPropbabeOrder(pushList, popList1));
console.log(isPropbabeOrder(pushList, popList2));