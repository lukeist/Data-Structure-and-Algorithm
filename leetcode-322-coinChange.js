// p: array, num (int);
// r: num
// e:
//                                  11
//                       1 /        2|           5\
//                        10        9               6
//                    /  \  \       / \ \        /  \  \
//                   9   8  5                   5   4    1
//                                                      / \  \
//                                                     0  -1  -4
//                                                     0   i    i

var coinChange = function (coins, amount) {
  const result = count(coins, amount);
  return result === Infinity ? -1 : result;
};

const count = (coins, amount, memo = {}) => {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  if (amount in memo) return memo[amount];

  let min = Infinity;

  for (let coin of coins) {
    min = Math.min(min, count(coins, amount - coin, memo));
  }

  memo[amount] = min + 1;
  return min + 1;
};
