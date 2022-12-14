// p: num, arr;
// r: num

//                        4
//                   1    2    3
//                3       2       1
//          1 2 3       123         123
//     2  1 0           1  0             0
//  123   123           123

//                                4
//   1       1x0/         1x1/       \1x2       \1x3       \1x4
//            4             3          2         1           0
//   2 2x0/  2x1\ \2x2    2x0/ \2x1   2x0/ \2x1
//    4     2     0       3   1         2     0
//   3                3x0/ \3x1
//                      3     0

// no MEMO
const countingChange = (amount, coins, i = 0) => {
  if (amount === 0) return 1; // <<< this should come before (amount < 0) return 0, otherwise it'll return 0
  if (i === coins.length) return 0;
  if (amount < 0) return 0;

  let count = 0;
  let coin = coins[i];
  for (let j = 0; j <= amount / coin; j++) {
    console.log(count);
    count += countingChange(amount - j * coin, coins, i + 1);
  }

  return count;
};

console.log(countingChange(4, [1, 2, 3])); // -> 4

// with MEMO
// const countingChange = (amount, coins, i = 0, memo = {}) => {
//     const position = amount + ',' + i;
//     if (position in memo) return memo[position];
//     if (amount === 0) return 1;
//     if (amount < 0) return 0;
//     if (i === coins.length) return 0;

//     let count = 0;
//     let coin = coins[i];
//     for (let j = 0; j <= amount/coin; j++) {
//       count += countingChange(amount - j * coin, coins, i + 1, memo);
//     }
//     memo[position] = count;
//     return count;
//   };
