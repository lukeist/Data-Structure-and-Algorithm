/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// p: array; num int;
// r: num int
// e:
//                                          11
//                              /5          /2          \1
//                             6            9              10
//                      5 /  2\  1\     5/  2 \  1 \     5 /  2 \  1 \
//                      1    4    5     4    7    8      5     8    9
//                 5 / 2 \ 1\
//                  -4  -1  0
//
var coinChange = function (coins, amount) {
  const result = checkCoins(coins, amount, {});
  return result === Infinity ? -1 : result;
};

const checkCoins = (coins, amount, memo) => {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  if (amount in memo) return memo[amount];

  let min = Infinity;
  for (let c of coins) {
    min = Math.min(min, checkCoins(coins, amount - c, memo));
  }

  memo[amount] = 1 + min;
  return 1 + min;
};
