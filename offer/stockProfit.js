function  stockProfit(prices) {
    let minPrice = prices[0];
    let profit  = 0;

    for (let  i =  1; i < prices.length; i++) {
        profit = Math.max(prices[i] - minPrice, profit);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return profit;
}


const arr = [20, 10, 100, 2, 30, 800, 50, 1, 1000];

console.log(stockProfit(arr));