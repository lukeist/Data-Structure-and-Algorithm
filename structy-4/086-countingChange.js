// p: number, array
// r: number
// e:
//                                             4
// 1                              1x0 /  1x1\   1x2\  1x3\  1x4\
//                          4          3         2     1      0
// 2                 2x0/ 2x1\ 2x2\   2x0/ 2x1\    2x0/ 2x1\
//                     4     2    0     3     1      2     0
// 3             3x0/ 3x1\          3x0/ 3x1\
//                4      1           3     0

// const countingChange = (amount, coins, memo = {}) => {
//   if (amount === 0) return 1;
//   let first = coins[0]
//   const key = amount + ',' + first;
//   if (key in memo) return memo[key];
//   let count = 0;

//   for (let i = 0; i <= amount; i++) {
//       count += countingChange(amount - first * i, coins.slice(1), memo)
//   }

//   memo[key] = count;
//   return count;
// };

//
const countingChange = (amount, coins, index = 0, memo = {}) => {
  if (amount === 0) return 1;
  if (index === coins.length) return 0;

  const key = amount + "," + index;
  let coin = coins[index];
  if (key in memo) return memo[key];

  let count = 0;

  for (let i = 0; i * coin <= amount; i++) {
    count += countingChange(amount - coin * i, coins, index + 1, memo);
  }

  memo[key] = count;
  return count;
};
