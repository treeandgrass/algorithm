// Try edit message
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            const tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
        }
    }
}
  
  const sourceArr = [3, 4, -10, -100, 0, -1, -2, -1, 400, 2, 20, 50];
  bubbleSort(sourceArr);
  console.log(sourceArr);