// p: number, array;
// r: number;
// e:                                     4
//  1               0x1 /           1x1/      2x1/   3x1 \  4x1 \
//                  4               3         2        1      0
// 2         0x2/ 1x2/  2x2\   0x2/ \1x2    0x2/\1x2  0x2|
//          4       2      0     3     1      2    0      1
// 3    0x3/ \1x3  0x3|      0x3/ \1x3       0x3          0x3
//                                  0

const countingChange = (amount, coins, i = 0, memo = {}) => {
  if (amount === 0) return 1;
  if (i === coins.length) return 0;

  const key = amount + "," + i;
  if (key in memo) return memo[key];
  let count = 0;

  let coin = coins[i];
  for (let j = 0; j <= amount; j++) {
    count += countingChange(amount - coin * j, coins, i + 1, memo);
  }

  memo[key] = count;
  return count;
};
