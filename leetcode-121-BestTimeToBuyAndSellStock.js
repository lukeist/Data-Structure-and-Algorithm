// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// p: array
// num: int +
// e:

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = Infinity;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i - 1]);
    maxProfit = Math.max(maxProfit, prices[i] - min);
  }

  return maxProfit;
};

// var maxProfit = function(prices) {
//   let arr = [0];
//   let min = Infinity;
//   for (let i = 1; i < prices.length; i++) {
//       min = Math.min(min, prices[i - 1])
//       arr[i] = prices[i] - min;
//   }

//   return Math.max(...arr);
// };

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// var maxProfit = function (prices) {
//   let leftPrice = prices[0];
//   let rightPrice = prices[1];
//   let profit = 0;

//   for (let i = 0; i < prices.length; ++i) {
//     console.log(leftPrice, rightPrice, profit);

//     if (leftPrice < rightPrice) {
//       profit = Math.max(profit, rightPrice - leftPrice);
//     } else {
//       leftPrice = rightPrice;
//     }
//     rightPrice = prices[i + 1];
//   }
//   console.log(profit);
//   return profit;
// };

// maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([7, 6, 4, 3, 1]);
// maxProfit([7, 1, 9, 0, 5]);
// maxProfit([1, 2]);
maxProfit([1, 2, 4]);
// 7, 1, 9, 0, 5
// 7
// S B
// 7 9

// 7: 1-7 5-7 3-7 6-7 4-7
// 1: 5-1 3-1 6-1 4-1
// 5: 3-5 6-5 4-5
// 3: 6 4
// 6: 4
// 4: 4

//    7 1 5 3 6 4
// 7:
// 1:
// 5:
// 3:
// 6:
// 4:

// ///////////////////////////////////// time limit exceeded
// var maxProfit = function (prices) {
//   // make 2 for loops and pick the max
//   const result = [];
//   for (let i = 0; i < prices.length; ++i) {
//     let priceDifference = [];
//     for (let j = i + 1; j < prices.length; ++j) {
//       priceDifference.push(prices[j] - prices[i]);
//     }
//     console.log(priceDifference);
//     result.push(Math.max(...priceDifference));
//   }
//   console.log(Math.max(...result) > -1 ? Math.max(...result) : 0);
//   return Math.max(...result) > -1 ? Math.max(...result) : 0;
// };
// maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([2, 1, 4]); //3
