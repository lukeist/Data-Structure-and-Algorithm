/**
 * @param {number[]} prices
 * @return {number}
 */

// p: array;
// r: number
// e:
// min = 1
// max = 4
//        i
// [7,1,5,3,6,4]

var maxProfit = function (prices) {
  let min = Infinity;
  let max = 0;
  for (let p of prices) {
    min = Math.min(min, p);
    max = Math.max(max, p - min);
  }
  return max;
};

// times exceeded:
//    i
// [7,1,5,3,6,4]
//          j
// var maxProfit = function(prices) {
//     let max = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             max = Math.max(max, prices[j] - prices[i]);
//         }
//     }

//     return max;
// };
